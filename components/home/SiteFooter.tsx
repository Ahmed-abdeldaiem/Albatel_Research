"use client";

import Image from "next/image";
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
  facebook: "https://www.facebook.com/batelresearch",
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

const SECTION_TITLE =
  "text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400";

function FooterSectionTitle({ children }: { children: React.ReactNode }) {
  return <p className={SECTION_TITLE}>{children}</p>;
}

function AdRegistrationCard({
  t,
  layout,
}: {
  t: (key: string) => string;
  layout: "stacked" | "inline";
}) {
  const isStacked = layout === "stacked";

  return (
    <div
      className={
        isStacked
          ? "flex w-full max-w-[220px] flex-col items-center text-center"
          : "flex w-full items-center gap-4 rounded-xl border border-slate-200/70 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5"
      }
      aria-label={t("footer.adNumberAria")}
    >
      <div
        className={`relative shrink-0 overflow-hidden rounded-lg bg-white ring-1 ring-slate-200/80 dark:ring-white/15 ${
          isStacked ? "h-32 w-32 p-1" : "h-28 w-28 p-1 sm:h-32 sm:w-32"
        }`}
      >
        <Image
          src="/Register Number.png"
          alt=""
          width={128}
          height={128}
          sizes="(max-width: 1024px) 112px, 128px"
          className="h-full w-full object-contain"
          aria-hidden
        />
      </div>
      <div className={isStacked ? "mt-3 w-full" : "min-w-0 flex-1"}>
        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          {t("footer.adNumberLabel")}
        </p>
        <p
          className={`font-mono font-bold tabular-nums text-brand-700 dark:text-brand-300 ${
            isStacked
              ? "mt-1 text-2xl tracking-wide"
              : "mt-0.5 text-xl tracking-wide sm:text-2xl"
          }`}
          dir="ltr"
        >
          4650
        </p>
      </div>
    </div>
  );
}

function SocialLinks({
  t,
  baseClass,
}: {
  t: (key: string) => string;
  baseClass: string;
}) {
  return (
    <>
      {socialPlaceholders.map((s) => {
        const href = SOCIAL_MEDIA_URLS[s.platform].trim();
        const className = `${baseClass} ${s.hover}`;

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
              className={`${className} cursor-pointer`}
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
            className={`${className} cursor-default`}
          >
            <i
              className={`${s.icon} transition-transform duration-300 group-hover:scale-110`}
              aria-hidden
            />
            <span className="sr-only">{s.label}</span>
          </span>
        );
      })}
    </>
  );
}

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

  const socialIconClass =
    "group inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[0.9rem] text-slate-600 shadow-sm ring-1 ring-slate-200/80 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-105 dark:bg-white/10 dark:text-slate-300 dark:ring-white/10";

  return (
    <footer
      className="border-t border-slate-200/90 bg-gradient-to-b from-white via-slate-50/80 to-slate-100/90 text-slate-800 dark:border-white/10 dark:from-ink-900 dark:via-ink-950 dark:to-ink-950 dark:text-slate-200"
      lang={locale === "en" ? "en" : "ar"}
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        {/* Main columns */}
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-3 lg:items-start lg:gap-8 xl:gap-12">
          {/* Brand & contact */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
              {t("brand.short")}
            </p>
            <p className="text-lg font-bold leading-snug text-slate-900 dark:text-white">
              {t("footer.org")}
            </p>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {t("footer.country")}
            </p>
            <p className="text-sm">
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

          {/* Quick links */}
          <div>
            <FooterSectionTitle>{t("footer.navQuick")}</FooterSectionTitle>
            <nav className="mt-4" aria-label={t("nav.label")}>
              <ul className="grid list-none grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-2.5">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm font-medium text-slate-700 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-300"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Ad registration — desktop */}
          <div className="hidden lg:flex lg:justify-center">
            <AdRegistrationCard t={t} layout="stacked" />
          </div>

          {/* Ad registration — mobile & tablet */}
          <div className="lg:hidden">
            <FooterSectionTitle>{t("footer.adNumberLabel")}</FooterSectionTitle>
            <div className="mt-4">
              <AdRegistrationCard t={t} layout="inline" />
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="mt-10 rounded-2xl border border-slate-200/60 bg-slate-100/50 px-5 py-5 dark:border-white/10 dark:bg-white/[0.03] sm:mt-12 sm:px-6">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <FooterSectionTitle>{t("footer.followUs")}</FooterSectionTitle>
            <div
              dir="ltr"
              className="flex flex-wrap justify-center gap-2.5"
              role="list"
              aria-label={t("footer.socialSoon")}
            >
              <SocialLinks t={t} baseClass={socialIconClass} />
            </div>
          </div>
        </div>

        {/* Copyright & credits */}
        <div className="mt-8 flex flex-col gap-4 border-t border-slate-200/80 pt-6 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
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
