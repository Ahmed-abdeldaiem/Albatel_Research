import { NextResponse } from "next/server";
import { BOOK_SLUGS } from "@/lib/books";
import { OFFICIAL_EMAIL } from "@/lib/contact";
import { createMailTransport, getMailFrom } from "@/lib/mailer";

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

    if (!name || !email || !isEmail(email) || !subject || message.length < 20) {
      return NextResponse.json({ error: "validation" }, { status: 400 });
    }

    const text = [
      `الموضوع / Subject: ${subject}`,
      `الاسم / Name: ${name}`,
      `البريد / Email: ${email}`,
      `الهاتف / Phone: ${phone || "-"}`,
      "",
      "الرسالة / Message:",
      message,
    ].join("\n");

    await transport.sendMail({
      from: getMailFrom(),
      to: OFFICIAL_EMAIL,
      replyTo: email,
      subject: `[موقع المؤسسة] ${subject}`,
      text,
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

    if (!bookSlug || !name || !email || !isEmail(email)) {
      return NextResponse.json({ error: "validation" }, { status: 400 });
    }
    const allowedSlugs = new Set<string>([...BOOK_SLUGS, "general"]);
    if (!allowedSlugs.has(bookSlug)) {
      return NextResponse.json({ error: "validation" }, { status: 400 });
    }
    if (!Number.isFinite(copies) || copies < 1 || copies > 999) {
      return NextResponse.json({ error: "validation" }, { status: 400 });
    }

    const text = [
      `طلب كتاب / Book request`,
      `الإصدار / Title: ${bookTitle || bookSlug}`,
      `معرّف الإصدار / Slug: ${bookSlug}`,
      `الاسم / Name: ${name}`,
      `البريد / Email: ${email}`,
      `الهاتف / Phone: ${phone || "-"}`,
      `عدد النسخ / Copies: ${copies}`,
      `المدينة / City: ${city || "-"}`,
      "",
      "ملاحظات / Notes:",
      notes || "-",
    ].join("\n");

    await transport.sendMail({
      from: getMailFrom(),
      to: OFFICIAL_EMAIL,
      replyTo: email,
      subject: `[طلب كتاب] ${bookTitle || bookSlug}`,
      text,
    });

    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ error: "unknown_kind" }, { status: 400 });
}
