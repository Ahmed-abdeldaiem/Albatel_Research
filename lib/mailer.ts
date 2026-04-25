import nodemailer from "nodemailer";
import { OFFICIAL_EMAIL } from "@/lib/contact";

/**
 * إرسال البريد من الخادم (SMTP).
 * عيّن في البيئة: SMTP_HOST, SMTP_PORT (مثلاً 587), SMTP_USER, SMTP_PASS
 * اختياري: SMTP_SECURE=true للمنفذ 465، و MAIL_FROM (غالباً نفس SMTP_USER)
 */
export function createMailTransport(): nodemailer.Transporter | null {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  if (!host || !user || !pass) return null;

  const port = Number.parseInt(process.env.SMTP_PORT || "587", 10);
  const secure =
    process.env.SMTP_SECURE === "true" || process.env.SMTP_SECURE === "1" || port === 465;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

export function getMailFrom(): string {
  const from = process.env.MAIL_FROM?.trim();
  const user = process.env.SMTP_USER?.trim();
  return from || user || OFFICIAL_EMAIL;
}
