"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { newsKey, type NewsRecord } from "@/lib/news";

// =============================================================================
// NewsClosing — خاتمة صفحة الأخبار بنفس النمط الداكن المعتمد في باقي الصفحات
// تجمع خاتمة الخبر (اقتباس + توقيع) مع إشارة إلى أن الأرشيف يتوسّع قريبًا.
// =============================================================================

export function NewsClosing({ news }: { news: NewsRecord }) {
  const { t, locale } = useLanguage();
  const k = (suffix: string) => t(newsKey(news, suffix));

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-800 to-ink-950 py-20 sm:py-24"
      lang={locale === "en" ? "en" : "ar"}
    >
      {/* ───── هالات ضوئية decorative ───── */}
      <div
        className="pointer-events-none absolute -top-40 -end-40 h-[28rem] w-[28rem] rounded-full bg-brand-400/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-40 -start-40 h-[28rem] w-[28rem] rounded-full bg-cyan-400/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div
          className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur-sm"
          data-aos="zoom-in"
        >
          <i className="fa-solid fa-rocket text-2xl text-amber-300" aria-hidden />
        </div>

        <blockquote
          className="mt-8 text-balance text-2xl font-bold leading-relaxed text-white sm:text-3xl lg:text-[2rem]"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          {k("closingQuote")}
        </blockquote>

        <span
          className="mx-auto mt-8 block h-px w-24 bg-gradient-to-r from-transparent via-amber-300/70 to-transparent"
          data-aos="zoom-in"
          data-aos-delay="160"
        />

        <p
          className="mt-5 text-sm font-medium uppercase tracking-[0.3em] text-amber-200/80"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {k("closingCaption")}
        </p>

        {/* ───── الأرشيف يتوسّع قريبًا ───── */}
        <div
          className="mt-14 rounded-3xl border border-white/15 bg-white/[0.07] p-6 backdrop-blur-sm sm:p-8"
          data-aos="fade-up"
          data-aos-delay="120"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-200/90">
            {t("media.news.moreKicker")}
          </p>
          <h2 className="mt-3 text-balance text-xl font-bold text-white sm:text-2xl">
            {t("media.news.moreTitle")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-sm leading-relaxed text-white/75 sm:text-base">
            {t("media.news.moreBody")}
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-lg shadow-black/20 transition hover:scale-105 hover:brightness-105"
            >
              <i
                className="fa-solid fa-paper-plane transition group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
                aria-hidden
              />
              {t("media.news.moreCtaContact")}
            </Link>
            <Link
              href="/publications"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:border-white/60 hover:bg-white/20"
            >
              <i className="fa-solid fa-book transition group-hover:scale-110" aria-hidden />
              {t("media.news.moreCtaPublications")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
