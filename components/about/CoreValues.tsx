"use client";

import { useLanguage } from "@/contexts/LanguageContext";

// =============================================================================
// CoreValues — قسم "قيمنا الأساسية"
// شبكة 3×2 بستّ قيم تحكم سلوك المؤسسة وتصبغ كل ما تقدمه:
// النزاهة، الجودة، الأصالة، التعاون، المسؤولية، التطوير المستمر
// =============================================================================

export function CoreValues() {
  const { t, locale } = useLanguage();

  const values = [
    { t: t("about.val1T"), d: t("about.val1D"), icon: "fa-shield-halved" },
    { t: t("about.val2T"), d: t("about.val2D"), icon: "fa-medal" },
    { t: t("about.val3T"), d: t("about.val3D"), icon: "fa-lightbulb" },
    { t: t("about.val4T"), d: t("about.val4D"), icon: "fa-handshake" },
    { t: t("about.val5T"), d: t("about.val5D"), icon: "fa-heart" },
    { t: t("about.val6T"), d: t("about.val6D"), icon: "fa-arrow-trend-up" },
  ];

  return (
    <section
      className="border-t border-slate-200/60 bg-slate-100/80 py-16 dark:border-white/5 dark:bg-ink-900/40 sm:py-24"
      data-aos="fade-up"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ── رأس القسم ── */}
        <div
          className="mx-auto max-w-2xl text-center"
          lang={locale === "en" ? "en" : "ar"}
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400 sm:text-sm">
            {t("about.valuesKicker")}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
            {t("about.valuesTitle")}
          </h2>
          <span className="mx-auto mt-4 block h-px w-16 bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />
          <p className="mt-4 text-balance text-slate-600 dark:text-slate-400">
            {t("about.valuesIntro")}
          </p>
        </div>

        {/* ── شبكة 3×2 ── */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <article
              key={v.t}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 p-6 shadow-sm transition duration-500 hover:-translate-y-1 hover:border-brand-400/40 hover:shadow-lg hover:shadow-brand-500/10 dark:border-white/10 dark:bg-ink-950/50 dark:hover:border-brand-500/30 dark:hover:bg-ink-900/70"
              lang={locale === "en" ? "en" : "ar"}
              data-aos="fade-up"
              data-aos-delay={String(i * 80)}
            >
              {/* رقم زخرفي في الزاوية */}
              <span
                className="absolute end-3 top-3 select-none font-mono text-[0.65rem] font-bold tracking-widest text-slate-400/70 transition group-hover:text-brand-500/80 dark:text-slate-500/60 dark:group-hover:text-brand-300/90"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* الأيقونة */}
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/15 to-cyan-500/10 text-xl text-brand-600 ring-1 ring-brand-500/15 transition group-hover:scale-110 group-hover:rotate-3 group-hover:ring-brand-500/40 dark:from-brand-400/15 dark:to-cyan-400/10 dark:text-brand-400">
                <i className={`fa-solid ${v.icon}`} aria-hidden />
              </span>

              <h3 className="mt-4 text-balance text-base font-bold text-slate-900 transition-colors duration-300 group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-300">
                {v.t}
              </h3>
              <p className="mt-2 flex-1 text-balance text-sm leading-relaxed text-slate-600 dark:text-slate-500">
                {v.d}
              </p>

              {/* خط متحرّك */}
              <span className="mt-4 block h-0.5 w-0 bg-gradient-to-r from-brand-400 via-brand-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
