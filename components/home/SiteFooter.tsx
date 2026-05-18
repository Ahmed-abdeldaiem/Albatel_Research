"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { ORG_PHONE_DISPLAY, ORG_WHATSAPP_URL } from "@/lib/org-contact";

const DEV_LINKEDIN = "https://www.linkedin.com/in/ahmed-abdeldaiem-a26079227/";
const DEV_GMAIL = "ahmadabdeldaiem18@gmail.com";

/**
 * روابط وسائل التواصل للمؤسسة — غيّر القيم هنا فقط.
 * Organization social links — edit URLs in this object only.
 * اترك أي حقل فارغًا (`""`) إذا لم يكن الحساب جاهزًا بعد.
 */
const SOCIAL_MEDIA_URLS = {
  tiktok: "https://www.tiktok.com/@albatel_research",
  youtube: "https://www.youtube.com/@AlbatelResearch",
  facebook: "https://www.facebook.com/albatelresearch",
  x: "https://x.com/AlbatelResearch",
  instagram: "https://www.instagram.com/albatelresearch/",
  linkedin: "https://www.linkedin.com/company/albatel-research",
} as const;

type SocialPlatform = keyof typeof SOCIAL_MEDIA_URLS;

const socialPlaceholders: ReadonlyArray<{
  platform: SocialPlatform;
  icon: string;
  label: string;
  hover: string;
}> = [
  {
    platform: "tiktok",
    icon: "fa-brands fa-tiktok",
    label: "TikTok",
    hover:
      "hover:bg-[#000000] hover:text-white hover:ring-[#25F4EE]/60 hover:shadow-[0_8px_22px_-8px_rgba(37,244,238,0.55)]",
  },
  {
    platform: "youtube",
    icon: "fa-brands fa-youtube",
    label: "YouTube",
    hover:
      "hover:bg-[#FF0000] hover:text-white hover:ring-[#FF0000]/40 hover:shadow-[0_8px_22px_-8px_rgba(255,0,0,0.55)]",
  },
  {
    platform: "facebook",
    icon: "fa-brands fa-facebook-f",
    label: "Facebook",
    hover:
      "hover:bg-[#1877F2] hover:text-white hover:ring-[#1877F2]/40 hover:shadow-[0_8px_22px_-8px_rgba(24,119,242,0.55)]",
  },
  {
    platform: "x",
    icon: "fa-brands fa-x-twitter",
    label: "X",
    hover:
      "hover:bg-black hover:text-white hover:ring-black/40 hover:shadow-[0_8px_22px_-8px_rgba(0,0,0,0.55)] dark:hover:bg-white dark:hover:text-black dark:hover:ring-white/40",
  },
  {
    platform: "instagram",
    icon: "fa-brands fa-instagram",
    label: "Instagram",
    hover:
      "hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white hover:ring-[#DD2A7B]/40 hover:shadow-[0_8px_22px_-8px_rgba(221,42,123,0.6)]",
  },
  {
    platform: "linkedin",
    icon: "fa-brands fa-linkedin-in",
    label: "LinkedIn",
    hover:
      "hover:bg-[#0A66C2] hover:text-white hover:ring-[#0A66C2]/40 hover:shadow-[0_8px_22px_-8px_rgba(10,102,194,0.55)]",
  },
];

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
            <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              <a
                href={ORG_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-600 underline decoration-brand-600/30 underline-offset-2 transition hover:text-brand-700 hover:decoration-brand-600 dark:text-brand-400 dark:hover:text-brand-300"
                aria-label={t("footer.whatsappAria")}
              >
                {ORG_PHONE_DISPLAY}
              </a>
            </p>
          </div>

          <div className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-500">
              {t("footer.navQuick")}
            </p>
            <nav className="mt-4" aria-label={t("nav.label")}>
              <ul className="flex list-none flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-y-2">
                {links.map((l) => (
                  <li
                    key={l.href}
                    className="sm:inline-flex sm:items-center sm:not-last:after:ms-2 sm:not-last:after:text-slate-300 sm:not-last:after:content-['·']"
                  >
                    <Link
                      href={l.href}
                      className="text-sm font-semibold text-slate-700 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-300"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
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
              {socialPlaceholders.map((s) => {
                const href = SOCIAL_MEDIA_URLS[s.platform].trim();
                const baseClass = `group inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-200/90 text-[0.85rem] text-slate-600 ring-1 ring-slate-300/60 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-110 dark:bg-white/10 dark:text-slate-300 dark:ring-white/10 ${s.hover}`;

                if (href) {
                  return (
                    <a
                      key={s.platform}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      role="listitem"
                      title={s.label}
                      aria-label={s.label}
                      className={`${baseClass} cursor-pointer`}
                    >
                      <i
                        className={`${s.icon} transition-transform duration-300 group-hover:scale-110`}
                        aria-hidden
                      />
                      <span className="sr-only">{s.label}</span>
                    </a>
                  );
                }

                return (
                  <span
                    key={s.platform}
                    role="listitem"
                    title={t("footer.socialSoon")}
                    className={`${baseClass} cursor-default`}
                  >
                    <i
                      className={`${s.icon} transition-transform duration-300 group-hover:scale-110`}
                      aria-hidden
                    />
                    <span className="sr-only">{s.label}</span>
                  </span>
                );
              })}
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
