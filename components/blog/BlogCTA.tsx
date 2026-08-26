"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

// =============================================================================
// BlogCTA — شريط ختامي داكن يوجّه القارئ إلى ما هو منشور فعلًا
// (الإصدارات وأخبار المؤسسة) ريثما تُنشر أول مقالات المدونة.
// =============================================================================

export function BlogCTA() {
  const { t, locale } = useLanguage();

  return (
    <section
      className="relative overflow-hidden border-t border-slate-200/60 bg-gradient-to-br from-brand-700 via-brand-800 to-ink-950 py-16 dark:border-white/5 sm:py-20"
      data-aos="fade-up"
      lang={locale === "en" ? "en" : "ar"}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(56,189,248,0.18),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_70%,rgba(20,184,166,0.18),transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-200/90 sm:text-sm">
          {t("media.blog.ctaKicker")}
        </p>
        <h2 className="mt-3 text-balance text-3xl font-bold leading-tight text-white sm:text-4xl">
          {t("media.blog.ctaTitle")}
        </h2>
        <span className="mx-auto mt-4 block h-px w-16 bg-gradient-to-r from-transparent via-brand-200/70 to-transparent" />
        <p className="mx-auto mt-4 max-w-2xl text-balance text-base leading-relaxed text-white/80">
          {t("media.blog.ctaBody")}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/publications"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-brand-700 shadow-lg shadow-black/20 transition hover:scale-105 hover:brightness-105"
          >
            <i className="fa-solid fa-book transition group-hover:scale-110" aria-hidden />
            {t("media.blog.ctaPublications")}
          </Link>
          <Link
            href="/news"
            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:border-white/60 hover:bg-white/20"
          >
            <i className="fa-solid fa-newspaper transition group-hover:scale-110" aria-hidden />
            {t("media.blog.ctaNews")}
          </Link>
        </div>
      </div>
    </section>
  );
}
