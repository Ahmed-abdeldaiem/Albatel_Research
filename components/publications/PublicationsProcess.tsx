"use client";

import { useLanguage } from "@/contexts/LanguageContext";

// =============================================================================
// PublicationsProcess — مراحل ولادة الكتاب لدينا
// خط زمني عمودي/شبكي بخمس مراحل ذات أرقام بارزة وأيقونات مميّزة لكل خطوة.
// مستوحى من MethodologyTimeline في صفحة لجنة البحوث/الترجمة.
// =============================================================================

type Step = { n: string; t: string; d: string; icon: string };

export function PublicationsProcess() {
  const { t } = useLanguage();

  const steps: Step[] = [
    { n: "01", t: t("pub.index.p1T"), d: t("pub.index.p1D"), icon: "fa-compass-drafting" },
    { n: "02", t: t("pub.index.p2T"), d: t("pub.index.p2D"), icon: "fa-pen-fancy" },
    { n: "03", t: t("pub.index.p3T"), d: t("pub.index.p3D"), icon: "fa-spell-check" },
    { n: "04", t: t("pub.index.p4T"), d: t("pub.index.p4D"), icon: "fa-print" },
    { n: "05", t: t("pub.index.p5T"), d: t("pub.index.p5D"), icon: "fa-truck-fast" },
  ];

  return (
    <section className="relative overflow-hidden border-t border-slate-200/60 bg-gradient-to-b from-white to-slate-50 py-16 dark:border-white/5 dark:from-ink-900 dark:to-ink-950 sm:py-20">
      {/* soft decorative background */}
      <div
        className="pointer-events-none absolute -bottom-32 end-[-10%] h-[24rem] w-[24rem] rounded-full bg-brand-500/10 blur-3xl dark:bg-brand-400/10"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p
            className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400"
            data-aos="fade-up"
          >
            {t("pub.index.processKicker")}
          </p>
          <h2
            className="mt-3 text-balance text-3xl font-extrabold leading-[1.5] text-slate-900 dark:text-white sm:text-4xl sm:leading-[1.45]"
            data-aos="fade-up"
            data-aos-delay="60"
          >
            {t("pub.index.processTitle")}
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t("pub.index.processIntro")}
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <article
              key={s.n}
              className="group relative flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:shadow-lg dark:border-white/10 dark:bg-ink-900/70 dark:hover:border-brand-400/40"
              data-aos="fade-up"
              data-aos-delay={String(120 + i * 80)}
            >
              {/* watermark step number */}
              <span
                className="pointer-events-none absolute -top-3 end-3 select-none text-5xl font-black leading-none text-slate-100 transition-colors duration-300 group-hover:text-brand-100 dark:text-white/5 dark:group-hover:text-brand-400/15"
                aria-hidden
              >
                {s.n}
              </span>

              <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-cyan-500 text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <i className={`fa-solid ${s.icon} text-lg`} aria-hidden />
              </div>

              <h3 className="relative mt-4 text-base font-bold text-slate-900 transition-colors duration-300 group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-300">
                {s.t}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {s.d}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
