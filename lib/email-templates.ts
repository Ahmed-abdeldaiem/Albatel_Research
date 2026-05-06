/**
 * قوالب بريد HTML لرسائل الموقع.
 * تستخدم أنماطاً مضمّنة (inline styles) لضمان التوافق مع معظم عملاء البريد
 * (Gmail / Outlook / Apple Mail / ...).
 */

import path from "node:path";

const BRAND = {
  primary: "#0d9488", // teal-600
  primaryDark: "#0f766e", // teal-700
  primarySoft: "#ccfbf1", // teal-100
  ink: "#0c1220",
  text: "#1f2937", // slate-800
  muted: "#64748b", // slate-500
  border: "#e2e8f0", // slate-200
  bg: "#f1f5f9", // slate-100
  card: "#ffffff",
};

const SITE_URL = "https://www.albatel-research.org";
const SITE_NAME = "مؤسسة الباتل للدراسات والبحوث";
const SITE_NAME_EN = "Albatel Research Foundation";

/** Content-ID داخلي للوجو حتى يُعرض إنلاين دون الحاجة لزر "إظهار الصور" */
const LOGO_CID = "albatel-logo@email";
const LOGO_FILE = path.join(process.cwd(), "public", "Logo_trans.png");

export type EmailAttachment = {
  filename: string;
  path: string;
  cid: string;
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function nl2br(s: string): string {
  return escapeHtml(s).replace(/\r?\n/g, "<br />");
}

function fmtDate(): string {
  try {
    return new Date().toLocaleString("ar-EG", {
      dateStyle: "full",
      timeStyle: "short",
    });
  } catch {
    return new Date().toISOString();
  }
}

type Row = { label: string; value: string; isLink?: "email" | "tel" | "url" };

function renderRow({ label, value, isLink }: Row): string {
  const safeVal = escapeHtml(value);
  let valueHtml = safeVal;
  if (isLink === "email") {
    valueHtml = `<a href="mailto:${safeVal}" style="color:${BRAND.primaryDark};text-decoration:none;">${safeVal}</a>`;
  } else if (isLink === "tel") {
    const tel = safeVal.replace(/\s+/g, "");
    valueHtml = `<a href="tel:${tel}" style="color:${BRAND.primaryDark};text-decoration:none;">${safeVal}</a>`;
  } else if (isLink === "url") {
    valueHtml = `<a href="${safeVal}" target="_blank" rel="noopener" style="color:${BRAND.primaryDark};text-decoration:none;">${safeVal}</a>`;
  }
  return `
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid ${BRAND.border};vertical-align:top;width:160px;background:${BRAND.bg};font-size:13px;color:${BRAND.muted};font-weight:600;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:12px 16px;border-bottom:1px solid ${BRAND.border};vertical-align:top;font-size:15px;color:${BRAND.text};line-height:1.7;">
        ${valueHtml || "—"}
      </td>
    </tr>`;
}

function renderHeader(badge: string): string {
  // ترويسة الإيميل — تخطيط من خليّتين:
  //   • اليسار (في الـ RTL): النص (اسم المؤسسة + شارة)
  //   • اليمين (في الـ RTL): اللوجو فقط بدون أي خلفية أو دائرة
  return `
  <tr>
    <td style="background:linear-gradient(135deg, ${BRAND.primary} 0%, ${BRAND.primaryDark} 100%);padding:22px 26px;color:#ffffff;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="vertical-align:middle;">
            <div style="font-size:13px;opacity:.85;letter-spacing:.5px;">${escapeHtml(SITE_NAME_EN)}</div>
            <div style="font-size:22px;font-weight:700;margin-top:4px;line-height:1.4;">${escapeHtml(SITE_NAME)}</div>
            <div style="display:inline-block;margin-top:14px;padding:6px 14px;background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.3);border-radius:999px;font-size:13px;font-weight:600;color:#ffffff;">
              ${escapeHtml(badge)}
            </div>
          </td>
          <td style="vertical-align:middle;text-align:right;width:100px;" align="right">
            <img src="cid:${LOGO_CID}" alt="${escapeHtml(SITE_NAME)}" width="84" height="84" style="display:inline-block;width:84px;height:84px;border:0;outline:none;text-decoration:none;object-fit:contain;" />
          </td>
        </tr>
      </table>
    </td>
  </tr>`;
}

function wrapHtml({
  preheader,
  badge,
  title,
  intro,
  rows,
  messageTitle,
  messageBody,
}: {
  preheader: string;
  badge: string;
  title: string;
  intro?: string;
  rows: Row[];
  messageTitle?: string;
  messageBody?: string;
}): string {
  const rowsHtml = rows.map(renderRow).join("");
  const messageBlock = messageBody
    ? `
      <div style="margin:20px 24px 0;padding:16px 18px;background:${BRAND.bg};border-right:4px solid ${BRAND.primary};border-radius:8px;">
        <div style="font-size:13px;color:${BRAND.muted};font-weight:600;margin-bottom:8px;">
          ${escapeHtml(messageTitle || "الرسالة")}
        </div>
        <div style="font-size:15px;color:${BRAND.text};line-height:1.85;white-space:pre-wrap;">
          ${nl2br(messageBody)}
        </div>
      </div>`
    : "";

  return `<!doctype html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="x-apple-disable-message-reformatting" />
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background:${BRAND.bg};font-family:'Segoe UI',Tahoma,Arial,'Helvetica Neue',sans-serif;color:${BRAND.text};">
  <span style="display:none !important;visibility:hidden;opacity:0;color:transparent;height:0;width:0;overflow:hidden;">
    ${escapeHtml(preheader)}
  </span>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${BRAND.bg};padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background:${BRAND.card};border-radius:14px;overflow:hidden;box-shadow:0 4px 20px rgba(15,23,42,0.08);border:1px solid ${BRAND.border};">

          ${renderHeader(badge)}

          <!-- Title -->
          <tr>
            <td style="padding:24px 28px 0;">
              <h2 style="margin:0;font-size:18px;font-weight:700;color:${BRAND.ink};">${escapeHtml(title)}</h2>
              ${
                intro
                  ? `<p style="margin:8px 0 0;font-size:14px;color:${BRAND.muted};line-height:1.7;">${escapeHtml(intro)}</p>`
                  : ""
              }
              <div style="margin-top:6px;font-size:12px;color:${BRAND.muted};">${escapeHtml(fmtDate())}</div>
            </td>
          </tr>

          <!-- Info table -->
          <tr>
            <td style="padding:18px 24px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;border:1px solid ${BRAND.border};border-radius:10px;overflow:hidden;">
                ${rowsHtml}
              </table>
            </td>
          </tr>

          <!-- Message block -->
          <tr>
            <td>
              ${messageBlock}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 28px;border-top:1px solid ${BRAND.border};margin-top:20px;">
              <div style="font-size:12px;color:${BRAND.muted};line-height:1.7;">
                هذه رسالة آلية أُرسلت من نموذج الموقع. يمكنك الرد مباشرة على هذا البريد للتواصل مع المُرسِل.
              </div>
              <div style="font-size:12px;color:${BRAND.muted};margin-top:6px;">
                <a href="${SITE_URL}" target="_blank" rel="noopener" style="color:${BRAND.primaryDark};text-decoration:none;font-weight:600;">${SITE_URL.replace(/^https?:\/\//, "")}</a>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/** مرفقات اللوجو الموحّدة لجميع رسائل الموقع. */
export function getLogoAttachment(): EmailAttachment {
  return {
    filename: "logo.png",
    path: LOGO_FILE,
    cid: LOGO_CID,
  };
}

/* ----------------------------- Contact Form ----------------------------- */

export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

export function renderContactEmail(p: ContactPayload): {
  subject: string;
  text: string;
  html: string;
  attachments: EmailAttachment[];
} {
  const subject = `[الموقع] رسالة تواصل: ${p.subject}`;

  const text = [
    `رسالة جديدة من نموذج التواصل — ${SITE_NAME}`,
    `التاريخ: ${fmtDate()}`,
    "",
    `الموضوع / Subject: ${p.subject}`,
    `الاسم / Name: ${p.name}`,
    `البريد / Email: ${p.email}`,
    `الهاتف / Phone: ${p.phone || "-"}`,
    "",
    "الرسالة / Message:",
    p.message,
    "",
    "—",
    SITE_URL,
  ].join("\n");

  const html = wrapHtml({
    preheader: `رسالة تواصل جديدة من ${p.name} — ${p.subject}`,
    badge: "نموذج التواصل",
    title: "وصلتك رسالة جديدة من نموذج التواصل",
    intro: "يمكنك الرد على هذا البريد مباشرة وسيصل ردُّك إلى المُرسِل.",
    rows: [
      { label: "الموضوع · Subject", value: p.subject },
      { label: "الاسم · Name", value: p.name },
      { label: "البريد · Email", value: p.email, isLink: "email" },
      { label: "الهاتف · Phone", value: p.phone || "—", isLink: p.phone ? "tel" : undefined },
    ],
    messageTitle: "نص الرسالة · Message",
    messageBody: p.message,
  });

  return { subject, text, html, attachments: [getLogoAttachment()] };
}

/* ----------------------------- Research Request ----------------------------- */

/** Allowed request types — must match validation on the API route. */
export const RESEARCH_REQUEST_TYPES = [
  "proposal",
  "review",
  "partnership",
  "methodology",
  "supervision",
] as const;
export type ResearchRequestType = (typeof RESEARCH_REQUEST_TYPES)[number];

/** Allowed research areas — must match validation on the API route. */
export const RESEARCH_AREAS = [
  "humanities-social",
  "economics-management",
  "law",
  "education",
  "media",
  "islamic-studies",
  "translation-linguistics",
  "heritage",
  "other",
] as const;
export type ResearchArea = (typeof RESEARCH_AREAS)[number];

/** Arabic labels for request types — used in subject line + email body. */
const REQUEST_TYPE_LABELS: Record<ResearchRequestType, string> = {
  proposal: "مقترح بحث للنشر",
  review: "طلب مراجعة علمية",
  partnership: "شراكة بحثية مؤسسية",
  methodology: "استشارة منهجية",
  supervision: "إشراف / تحكيم",
};

/** Arabic labels for research areas — used in email body. */
const RESEARCH_AREA_LABELS: Record<ResearchArea, string> = {
  "humanities-social": "العلوم الإنسانية والاجتماعية",
  "economics-management": "العلوم الاقتصادية والإدارية",
  law: "القانون والتشريعات",
  education: "التربية والتعليم",
  media: "الإعلام والاتصال",
  "islamic-studies": "الدراسات الإسلامية والشرعية",
  "translation-linguistics": "الترجمة واللسانيات",
  heritage: "التراث والحضارة العربية",
  other: "تخصص آخر / متعدد التخصصات",
};

export type ResearchRequestPayload = {
  name: string;
  email: string;
  phone: string;
  affiliation?: string;
  requestType: ResearchRequestType;
  researchArea: ResearchArea;
  proposalTitle: string;
  summary: string;
  attachmentUrl?: string;
};

export function renderResearchRequestEmail(p: ResearchRequestPayload): {
  subject: string;
  text: string;
  html: string;
  attachments: EmailAttachment[];
} {
  const typeLabel = REQUEST_TYPE_LABELS[p.requestType];
  const areaLabel = RESEARCH_AREA_LABELS[p.researchArea];
  const subject = `[لجنة البحوث] ${typeLabel}: ${p.proposalTitle}`;

  const text = [
    `طلب بحثي جديد — ${SITE_NAME}`,
    `التاريخ: ${fmtDate()}`,
    "",
    `نوع الطلب / Request type: ${typeLabel}`,
    `المجال البحثي / Research area: ${areaLabel}`,
    `عنوان المقترح / Proposal title: ${p.proposalTitle}`,
    "",
    `الاسم / Name: ${p.name}`,
    `البريد / Email: ${p.email}`,
    `الهاتف / Phone: ${p.phone}`,
    `الجهة / Affiliation: ${p.affiliation || "-"}`,
    `الرابط المرفق / Attachment: ${p.attachmentUrl || "-"}`,
    "",
    "ملخص الفكرة / Summary:",
    p.summary,
    "",
    "—",
    SITE_URL,
  ].join("\n");

  const rows: Row[] = [
    { label: "نوع الطلب · Type", value: typeLabel },
    { label: "المجال · Area", value: areaLabel },
    { label: "عنوان المقترح · Title", value: p.proposalTitle },
    { label: "الاسم · Name", value: p.name },
    { label: "البريد · Email", value: p.email, isLink: "email" },
    { label: "الهاتف · Phone", value: p.phone, isLink: "tel" },
  ];

  if (p.affiliation && p.affiliation.trim()) {
    rows.push({ label: "الجهة · Affiliation", value: p.affiliation });
  }
  if (p.attachmentUrl && p.attachmentUrl.trim()) {
    rows.push({
      label: "الرابط · Attachment",
      value: p.attachmentUrl,
      isLink: "url",
    });
  }

  const html = wrapHtml({
    preheader: `طلب بحثي جديد: ${typeLabel} — ${p.proposalTitle}`,
    badge: "نموذج لجنة البحوث",
    title: `وصلك طلب بحثي جديد: ${typeLabel}`,
    intro: "تواصل مع الباحث عبر بريده الإلكتروني للرد على الطلب أو طلب مزيد من التفاصيل.",
    rows,
    messageTitle: "ملخص الفكرة · Summary",
    messageBody: p.summary,
  });

  return { subject, text, html, attachments: [getLogoAttachment()] };
}

/* ----------------------------- Translation Request ----------------------------- */

/** Allowed translation service types — must match validation on the API route. */
export const TRANSLATION_SERVICE_TYPES = [
  "full",
  "proofread",
  "localization",
  "consultation",
  "partnership",
] as const;
export type TranslationServiceType = (typeof TRANSLATION_SERVICE_TYPES)[number];

/** Allowed translation domains — must match validation on the API route. */
export const TRANSLATION_DOMAINS = [
  "academic",
  "legal",
  "economic",
  "literary",
  "islamic",
  "medical",
  "technical",
  "general",
  "other",
] as const;
export type TranslationDomain = (typeof TRANSLATION_DOMAINS)[number];

/** Allowed languages (ISO-style codes). */
export const TRANSLATION_LANGUAGES = [
  "ar",
  "en",
  "fr",
  "es",
  "de",
  "tr",
  "other",
] as const;
export type TranslationLanguage = (typeof TRANSLATION_LANGUAGES)[number];

/** Arabic labels for service types. */
const SERVICE_TYPE_LABELS: Record<TranslationServiceType, string> = {
  full: "ترجمة كاملة",
  proofread: "مراجعة ترجمة",
  localization: "توطين معرفي",
  consultation: "استشارة لغوية",
  partnership: "شراكة نشر",
};

/** Arabic labels for domains. */
const DOMAIN_LABELS: Record<TranslationDomain, string> = {
  academic: "أكاديمية وعلمية",
  legal: "قانونية وتشريعية",
  economic: "اقتصادية وإدارية",
  literary: "أدبية وثقافية",
  islamic: "إسلامية وشرعية",
  medical: "طبية وصحية",
  technical: "تقنية ومعلوماتية",
  general: "عامة ومتعددة",
  other: "مجال آخر / متعدد",
};

/** Arabic labels for languages. */
const LANGUAGE_LABELS: Record<TranslationLanguage, string> = {
  ar: "العربية",
  en: "الإنجليزية",
  fr: "الفرنسية",
  es: "الإسبانية",
  de: "الألمانية",
  tr: "التركية",
  other: "لغة أخرى",
};

export type TranslationRequestPayload = {
  name: string;
  email: string;
  phone: string;
  affiliation?: string;
  serviceType: TranslationServiceType;
  domain: TranslationDomain;
  sourceLang: TranslationLanguage;
  targetLang: TranslationLanguage;
  docTitle: string;
  description: string;
  wordCount?: string;
  attachmentUrl?: string;
};

export function renderTranslationRequestEmail(p: TranslationRequestPayload): {
  subject: string;
  text: string;
  html: string;
  attachments: EmailAttachment[];
} {
  const typeLabel = SERVICE_TYPE_LABELS[p.serviceType];
  const domainLabel = DOMAIN_LABELS[p.domain];
  const sourceLangLabel = LANGUAGE_LABELS[p.sourceLang];
  const targetLangLabel = LANGUAGE_LABELS[p.targetLang];
  const subject = `[لجنة الترجمة] ${typeLabel}: ${p.docTitle}`;

  const text = [
    `طلب ترجمة جديد — ${SITE_NAME}`,
    `التاريخ: ${fmtDate()}`,
    "",
    `نوع الخدمة / Service: ${typeLabel}`,
    `المجال / Domain: ${domainLabel}`,
    `من / From: ${sourceLangLabel}`,
    `إلى / To: ${targetLangLabel}`,
    `عنوان الوثيقة / Title: ${p.docTitle}`,
    `عدد الكلمات / Words: ${p.wordCount || "-"}`,
    "",
    `الاسم / Name: ${p.name}`,
    `البريد / Email: ${p.email}`,
    `الهاتف / Phone: ${p.phone}`,
    `الجهة / Affiliation: ${p.affiliation || "-"}`,
    `الرابط المرفق / Attachment: ${p.attachmentUrl || "-"}`,
    "",
    "الوصف / Description:",
    p.description,
    "",
    "—",
    SITE_URL,
  ].join("\n");

  const rows: Row[] = [
    { label: "نوع الخدمة · Service", value: typeLabel },
    { label: "المجال · Domain", value: domainLabel },
    {
      label: "اللغة · Language",
      value: `${sourceLangLabel} ← ${targetLangLabel}`,
    },
    { label: "عنوان الوثيقة · Title", value: p.docTitle },
    { label: "الاسم · Name", value: p.name },
    { label: "البريد · Email", value: p.email, isLink: "email" },
    { label: "الهاتف · Phone", value: p.phone, isLink: "tel" },
  ];

  if (p.affiliation && p.affiliation.trim()) {
    rows.push({ label: "الجهة · Affiliation", value: p.affiliation });
  }
  if (p.wordCount && p.wordCount.trim()) {
    rows.push({ label: "عدد الكلمات · Words", value: p.wordCount });
  }
  if (p.attachmentUrl && p.attachmentUrl.trim()) {
    rows.push({
      label: "الرابط · Attachment",
      value: p.attachmentUrl,
      isLink: "url",
    });
  }

  const html = wrapHtml({
    preheader: `طلب ترجمة جديد: ${typeLabel} — ${p.docTitle}`,
    badge: "نموذج لجنة الترجمة",
    title: `وصلك طلب ترجمة جديد: ${typeLabel}`,
    intro: "تواصل مع العميل عبر بريده الإلكتروني للرد على الطلب أو طلب مزيد من التفاصيل.",
    rows,
    messageTitle: "وصف الطلب · Description",
    messageBody: p.description,
  });

  return { subject, text, html, attachments: [getLogoAttachment()] };
}

/* ----------------------------- Book Order ----------------------------- */

export type BookOrderPayload = {
  bookSlug: string;
  bookTitle?: string;
  name: string;
  email: string;
  phone?: string;
  city?: string;
  copies: number;
  notes?: string;
};

export function renderBookOrderEmail(p: BookOrderPayload): {
  subject: string;
  text: string;
  html: string;
  attachments: EmailAttachment[];
} {
  const titleLabel = p.bookTitle || p.bookSlug;
  const subject = `[طلب كتاب] ${titleLabel} — ${p.copies} نسخة`;

  const text = [
    `طلب كتاب جديد — ${SITE_NAME}`,
    `التاريخ: ${fmtDate()}`,
    "",
    `الإصدار / Title: ${titleLabel}`,
    `معرّف الإصدار / Slug: ${p.bookSlug}`,
    `عدد النسخ / Copies: ${p.copies}`,
    "",
    `الاسم / Name: ${p.name}`,
    `البريد / Email: ${p.email}`,
    `الهاتف / Phone: ${p.phone || "-"}`,
    `المحافظة / Governorate: ${p.city || "-"}`,
    "",
    "ملاحظات / Notes:",
    p.notes || "-",
    "",
    "—",
    SITE_URL,
  ].join("\n");

  const html = wrapHtml({
    preheader: `طلب كتاب جديد: ${titleLabel} (${p.copies} نسخة) — ${p.name}`,
    badge: "طلب كتاب",
    title: "وصلك طلب كتاب جديد",
    intro: "تواصل مع العميل لتأكيد التفاصيل وطريقة الاستلام/الشحن داخل مصر.",
    rows: [
      { label: "الإصدار · Title", value: titleLabel },
      { label: "المعرّف · Slug", value: p.bookSlug },
      { label: "عدد النسخ · Copies", value: String(p.copies) },
      { label: "الاسم · Name", value: p.name },
      { label: "البريد · Email", value: p.email, isLink: "email" },
      { label: "الهاتف · Phone", value: p.phone || "—", isLink: p.phone ? "tel" : undefined },
      { label: "المحافظة · Governorate", value: p.city || "—" },
    ],
    messageTitle: "ملاحظات · Notes",
    messageBody: p.notes && p.notes.trim() ? p.notes : undefined,
  });

  return { subject, text, html, attachments: [getLogoAttachment()] };
}
