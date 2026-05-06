"use client";

import { useLanguage } from "@/contexts/LanguageContext";

// =============================================================================
// PublicationsQualities — أربع قيم تشكّل بصمة كل كتاب
// شبكة 4 بطاقات أنيقة مع أيقونات وتأثيرات هافر (lift + glow + underline)
// =============================================================================

type Quality = {
  t: string;
  d: string;
  icon: string;
  /** لون التدرّج المخصص للأيقونة */
  tone: string;
};

export function PublicationsQualities() {
  const { t } = useLanguage();

  const items: Quality[] = [
    {
      t: t("pub.index.q1T"),
      d: t("pub.index.q1D"),
      icon: "fa-magnifying-glass",
      tone: "from-brand-500 to-cyan-500",
    },
    {
      t: t("pub.index.q2T"),
      d: t("pub.index.q2D"),
      icon: "fa-lightbulb",
      tone: "from-amber-500 to-orange-500",
    },
    {
      t: t("pub.index.q3T"),
      d: t("pub.index.q3D"),
      icon: "fa-bullseye",
      tone: "from-emerald-500 to-teal-500",
    },
    {
      t: t("pub.index.q4T"),
      d: t("pub.index.q4D"),
      icon: "fa-handshake",
      tone: "from-violet-500 to-fuchsia-500",
    },
  ];

  return (
    <section className="border-t border-slate-200/60 bg-white py-16 dark:border-white/5 dark:bg-ink-900 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p
            className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400"
            data-aos="fade-up"
          >
            {t("pub.index.qualitiesKicker")}
          </p>
          <h2
            className="mt-3 text-balance text-3xl font-extrabold leading-[1.5] text-slate-900 dark:text-white sm:text-4xl sm:leading-[1.45]"
            data-aos="fade-up"
            data-aos-delay="60"
          >
            {t("pub.index.qualitiesTitle")}
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t("pub.index.qualitiesIntro")}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((q, i) => (
            <article
              key={q.t}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-50/60 p-6 shadow-sm ring-1 ring-slate-200/40 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:shadow-xl dark:border-white/10 dark:bg-ink-950/40 dark:ring-white/5 dark:hover:border-brand-400/40"
              data-aos="fade-up"
              data-aos-delay={String(120 + i * 80)}
            >
              {/* glow aura on hover */}
              <div
                className={`pointer-events-none absolute -top-16 -end-16 h-40 w-40 rounded-full bg-gradient-to-br ${q.tone} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
                aria-hidden
              />

              <div
                className={`relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${q.tone} text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
              >
                <i className={`fa-solid ${q.icon} text-xl`} aria-hidden />
              </div>

              <h3 className="relative mt-5 text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-300">
                {q.t}
              </h3>

              {/* animated underline */}
              <span
                className={`relative mt-2 block h-0.5 w-10 origin-start scale-x-0 bg-gradient-to-r ${q.tone} transition-transform duration-500 group-hover:scale-x-100`}
                aria-hidden
              />

              <p className="relative mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {q.d}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
