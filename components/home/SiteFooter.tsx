"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const DEV_LINKEDIN = "https://www.linkedin.com/in/ahmed-abdeldaiem-a26079227/";
const DEV_GMAIL = "ahmadabdeldaiem18@gmail.com";

const socialPlaceholders = [
  { icon: "fa-brands fa-tiktok", label: "TikTok" },
  { icon: "fa-brands fa-youtube", label: "YouTube" },
  { icon: "fa-brands fa-facebook-f", label: "Facebook" },
  { icon: "fa-brands fa-x-twitter", label: "X" },
  { icon: "fa-brands fa-instagram", label: "Instagram" },
  { icon: "fa-brands fa-linkedin-in", label: "LinkedIn" },
] as const;

export function SiteFooter() {
  const { t, locale } = useLanguage();
  const year = new Date().getFullYear();

  const links = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/board", label: t("nav.board") },
    { href: "/research-committee", label: t("nav.research") },
    { href: "/translation-committee", label: t("nav.translation") },
    { href: "/publications", label: t("nav.publications") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <footer
      className="border-t border-slate-200/90 bg-gradient-to-b from-white via-slate-50/80 to-slate-100/90 text-slate-800 dark:border-white/10 dark:from-ink-900 dark:via-ink-950 dark:to-ink-950 dark:text-slate-200"
      lang={locale === "en" ? "en" : "ar"}
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
              {t("brand.short")}
            </p>
            <p className="mt-3 text-lg font-bold leading-snug text-slate-900 dark:text-white">
              {t("footer.org")}
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {t("footer.country")}
            </p>
          </div>

          <div className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-500">
              {t("footer.navQuick")}
            </p>
            <nav
              className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2"
              aria-label={t("nav.label")}
            >
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm font-semibold text-slate-700 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-300"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-2 lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-500">
              {t("footer.followUs")}
            </p>
            <div
              dir="ltr"
              className="mt-4 flex flex-wrap gap-2"
              role="list"
              aria-label={t("footer.socialSoon")}
            >
              {socialPlaceholders.map((s) => (
                <span
                  key={s.label}
                  role="listitem"
                  title={t("footer.socialSoon")}
                  className="inline-flex h-9 w-9 cursor-default items-center justify-center rounded-full bg-slate-200/90 text-[0.8rem] text-slate-600 ring-1 ring-slate-300/60 dark:bg-white/10 dark:text-slate-300 dark:ring-white/10"
                >
                  <i className={s.icon} aria-hidden />
                  <span className="sr-only">{s.label}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200/80 pt-8 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p className="text-center text-xs leading-relaxed text-slate-500 dark:text-slate-500 sm:text-start">
            © {year} {t("footer.rightsLine")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-end">
            <span className="text-xs text-slate-500 dark:text-slate-500">
              {t("footer.developedBy")}{" "}
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                {t("footer.devName")}
              </span>
            </span>
            <div dir="ltr" className="flex items-center gap-1.5">
              <a
                href={`mailto:${DEV_GMAIL}`}
                className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-200/90 text-[11px] text-slate-700 ring-1 ring-slate-300/70 transition hover:bg-brand-500/15 hover:text-brand-700 dark:bg-white/10 dark:text-slate-200 dark:ring-white/10 dark:hover:bg-brand-500/20 dark:hover:text-brand-200"
                aria-label={t("footer.devGmail")}
                title={DEV_GMAIL}
              >
                <i className="fa-brands fa-google" aria-hidden />
              </a>
              <a
                href={DEV_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#0a66c2] text-[11px] text-white shadow-sm transition hover:brightness-110"
                aria-label={t("footer.devLinkedIn")}
              >
                <i className="fa-brands fa-linkedin-in" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
