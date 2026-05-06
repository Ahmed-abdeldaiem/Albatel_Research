import { NextResponse } from "next/server";
import { BOOK_SLUGS } from "@/lib/books";
import { OFFICIAL_EMAIL } from "@/lib/contact";
import { EGYPT_GOVERNORATE_VALUES } from "@/lib/egypt-governorates";
import { createMailTransport, getMailFrom } from "@/lib/mailer";
import {
  renderBookOrderEmail,
  renderContactEmail,
  renderResearchRequestEmail,
  renderTranslationRequestEmail,
  RESEARCH_AREAS,
  RESEARCH_REQUEST_TYPES,
  TRANSLATION_DOMAINS,
  TRANSLATION_LANGUAGES,
  TRANSLATION_SERVICE_TYPES,
  type ResearchArea,
  type ResearchRequestType,
  type TranslationDomain,
  type TranslationLanguage,
  type TranslationServiceType,
} from "@/lib/email-templates";
import { isValidPhone, MIN_MESSAGE_LENGTH } from "@/lib/phone";

/** Minimum length for research-request idea summary. */
const RESEARCH_SUMMARY_MIN_LENGTH = 50;
/** Minimum length for translation-request description. */
const TRANSLATION_DESCRIPTION_MIN_LENGTH = 50;

function isUrl(s: string): boolean {
  try {
    const u = new URL(s);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

export const runtime = "nodejs";

const MAX = 8000;

function clip(s: unknown, max: number): string {
  if (typeof s !== "string") return "";
  const t = s.trim();
  return t.length > max ? `${t.slice(0, max)}…` : t;
}

function isEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const transport = createMailTransport();
  if (!transport) {
    return NextResponse.json({ error: "mail_not_configured" }, { status: 503 });
  }

  const kind = (body as { kind?: string }).kind;

  if (kind === "contact") {
    const name = clip((body as { name?: string }).name, 200);
    const email = clip((body as { email?: string }).email, 200);
    const phone = clip((body as { phone?: string }).phone, 80);
    const subject = clip((body as { subject?: string }).subject, 300);
    const message = clip((body as { message?: string }).message, MAX);

    if (
      !name ||
      !email ||
      !isEmail(email) ||
      !subject ||
      message.length < MIN_MESSAGE_LENGTH ||
      !isValidPhone(phone)
    ) {
      return NextResponse.json({ error: "validation" }, { status: 400 });
    }

    const mail = renderContactEmail({ name, email, phone, subject, message });

    await transport.sendMail({
      from: getMailFrom(),
      to: OFFICIAL_EMAIL,
      replyTo: email,
      subject: mail.subject,
      text: mail.text,
      html: mail.html,
      attachments: mail.attachments,
    });

    return NextResponse.json({ ok: true });
  }

  if (kind === "book-order") {
    const bookSlug = clip((body as { bookSlug?: string }).bookSlug, 80);
    const bookTitle = clip((body as { bookTitle?: string }).bookTitle, 400);
    const name = clip((body as { name?: string }).name, 200);
    const email = clip((body as { email?: string }).email, 200);
    const phone = clip((body as { phone?: string }).phone, 80);
    const city = clip((body as { city?: string }).city, 200);
    const notes = clip((body as { notes?: string }).notes, MAX);
    const copiesRaw = (body as { copies?: number | string }).copies;
    const copies =
      typeof copiesRaw === "number"
        ? copiesRaw
        : Number.parseInt(String(copiesRaw ?? ""), 10);

    if (!bookSlug || !name || !email || !isEmail(email) || !isValidPhone(phone)) {
      return NextResponse.json({ error: "validation" }, { status: 400 });
    }
    const allowedSlugs = new Set<string>([...BOOK_SLUGS, "general"]);
    if (!allowedSlugs.has(bookSlug)) {
      return NextResponse.json({ error: "validation" }, { status: 400 });
    }
    if (!Number.isFinite(copies) || copies < 1 || copies > 999) {
      return NextResponse.json({ error: "validation" }, { status: 400 });
    }
    if (!city || !EGYPT_GOVERNORATE_VALUES.has(city)) {
      return NextResponse.json({ error: "validation" }, { status: 400 });
    }

    const mail = renderBookOrderEmail({
      bookSlug,
      bookTitle,
      name,
      email,
      phone,
      city,
      copies,
      notes,
    });

    await transport.sendMail({
      from: getMailFrom(),
      to: OFFICIAL_EMAIL,
      replyTo: email,
      subject: mail.subject,
      text: mail.text,
      html: mail.html,
      attachments: mail.attachments,
    });

    return NextResponse.json({ ok: true });
  }

  if (kind === "research-request") {
    const name = clip((body as { name?: string }).name, 200);
    const email = clip((body as { email?: string }).email, 200);
    const phone = clip((body as { phone?: string }).phone, 80);
    const affiliation = clip((body as { affiliation?: string }).affiliation, 300);
    const requestTypeRaw = clip(
      (body as { requestType?: string }).requestType,
      50,
    );
    const researchAreaRaw = clip(
      (body as { researchArea?: string }).researchArea,
      50,
    );
    const proposalTitle = clip(
      (body as { proposalTitle?: string }).proposalTitle,
      400,
    );
    const summary = clip((body as { summary?: string }).summary, MAX);
    const attachmentUrl = clip(
      (body as { attachmentUrl?: string }).attachmentUrl,
      500,
    );

    // Validate required fields
    if (
      !name ||
      !email ||
      !isEmail(email) ||
      !isValidPhone(phone) ||
      !proposalTitle ||
      summary.length < RESEARCH_SUMMARY_MIN_LENGTH
    ) {
      return NextResponse.json({ error: "validation" }, { status: 400 });
    }

    // Validate enums
    const allowedTypes = new Set<string>(RESEARCH_REQUEST_TYPES);
    const allowedAreas = new Set<string>(RESEARCH_AREAS);
    if (!allowedTypes.has(requestTypeRaw) || !allowedAreas.has(researchAreaRaw)) {
      return NextResponse.json({ error: "validation" }, { status: 400 });
    }

    // Optional URL — must be valid if provided
    if (attachmentUrl && !isUrl(attachmentUrl)) {
      return NextResponse.json({ error: "validation" }, { status: 400 });
    }

    const mail = renderResearchRequestEmail({
      name,
      email,
      phone,
      affiliation,
      requestType: requestTypeRaw as ResearchRequestType,
      researchArea: researchAreaRaw as ResearchArea,
      proposalTitle,
      summary,
      attachmentUrl,
    });

    await transport.sendMail({
      from: getMailFrom(),
      to: OFFICIAL_EMAIL,
      replyTo: email,
      subject: mail.subject,
      text: mail.text,
      html: mail.html,
      attachments: mail.attachments,
    });

    return NextResponse.json({ ok: true });
  }

  if (kind === "translation-request") {
    const name = clip((body as { name?: string }).name, 200);
    const email = clip((body as { email?: string }).email, 200);
    const phone = clip((body as { phone?: string }).phone, 80);
    const affiliation = clip(
      (body as { affiliation?: string }).affiliation,
      300,
    );
    const serviceTypeRaw = clip(
      (body as { serviceType?: string }).serviceType,
      50,
    );
    const domainRaw = clip((body as { domain?: string }).domain, 50);
    const sourceLangRaw = clip(
      (body as { sourceLang?: string }).sourceLang,
      20,
    );
    const targetLangRaw = clip(
      (body as { targetLang?: string }).targetLang,
      20,
    );
    const docTitle = clip((body as { docTitle?: string }).docTitle, 400);
    const description = clip((body as { description?: string }).description, MAX);
    const wordCount = clip((body as { wordCount?: string }).wordCount, 30);
    const attachmentUrl = clip(
      (body as { attachmentUrl?: string }).attachmentUrl,
      500,
    );

    // Required fields validation
    if (
      !name ||
      !email ||
      !isEmail(email) ||
      !isValidPhone(phone) ||
      !docTitle ||
      description.length < TRANSLATION_DESCRIPTION_MIN_LENGTH
    ) {
      return NextResponse.json({ error: "validation" }, { status: 400 });
    }

    // Enum validation
    const allowedServices = new Set<string>(TRANSLATION_SERVICE_TYPES);
    const allowedDomains = new Set<string>(TRANSLATION_DOMAINS);
    const allowedLangs = new Set<string>(TRANSLATION_LANGUAGES);
    if (
      !allowedServices.has(serviceTypeRaw) ||
      !allowedDomains.has(domainRaw) ||
      !allowedLangs.has(sourceLangRaw) ||
      !allowedLangs.has(targetLangRaw)
    ) {
      return NextResponse.json({ error: "validation" }, { status: 400 });
    }

    // Source and target languages must differ
    if (sourceLangRaw === targetLangRaw) {
      return NextResponse.json({ error: "validation" }, { status: 400 });
    }

    if (attachmentUrl && !isUrl(attachmentUrl)) {
      return NextResponse.json({ error: "validation" }, { status: 400 });
    }

    const mail = renderTranslationRequestEmail({
      name,
      email,
      phone,
      affiliation,
      serviceType: serviceTypeRaw as TranslationServiceType,
      domain: domainRaw as TranslationDomain,
      sourceLang: sourceLangRaw as TranslationLanguage,
      targetLang: targetLangRaw as TranslationLanguage,
      docTitle,
      description,
      wordCount,
      attachmentUrl,
    });

    await transport.sendMail({
      from: getMailFrom(),
      to: OFFICIAL_EMAIL,
      replyTo: email,
      subject: mail.subject,
      text: mail.text,
      html: mail.html,
      attachments: mail.attachments,
    });

    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ error: "unknown_kind" }, { status: 400 });
}
