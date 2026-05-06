"use client";

import { useLanguage } from "@/contexts/LanguageContext";

// =============================================================================
// PublicationsClosing — خاتمة الصفحة بنفس النمط الداكن المعتمد في:
//   /about, /research-committee, /translation-committee, /board
// تتكوّن من:
//   - خلفية تدرّجية عميقة + هالات ضوئية
//   - علامة اقتباس فنية، ثم اقتباس ختامي، ثم سطر توقيع
// =============================================================================

export function PublicationsClosing() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-800 to-ink-950 py-20 sm:py-24">
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
        {/* علامة اقتباس فنية */}
        <div
          className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur-sm"
          data-aos="zoom-in"
        >
          <i className="fa-solid fa-quote-right text-2xl text-amber-300" aria-hidden />
        </div>

        <blockquote
          className="mt-8 text-balance text-2xl font-bold leading-relaxed text-white sm:text-3xl lg:text-[2rem]"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          {t("pub.index.closingQuote")}
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
          {t("pub.index.closingCaption")}
        </p>
      </div>
    </section>
  );
}
