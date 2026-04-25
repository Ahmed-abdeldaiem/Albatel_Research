"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function VisionMissionSection() {
  const { t, locale } = useLanguage();

  const cards = [
    {
      id: "vision",
      icon: "fa-eye",
      kicker: t("vision.visionK"),
      title: t("vision.visionT"),
      body: t("vision.visionB"),
      accent: "from-brand-400/30 to-transparent",
    },
    {
      id: "mission",
      icon: "fa-bullseye",
      kicker: t("vision.missionK"),
      title: t("vision.missionT"),
      body: t("vision.missionB"),
      accent: "from-blue-400/25 to-transparent",
    },
  ];

  const goals = [
    { title: t("goals.g1t"), desc: t("goals.g1d"), icon: "fa-seedling" },
    { title: t("goals.g2t"), desc: t("goals.g2d"), icon: "fa-right-left" },
    { title: t("goals.g3t"), desc: t("goals.g3d"), icon: "fa-arrow-trend-up" },
    { title: t("goals.g4t"), desc: t("goals.g4d"), icon: "fa-hand-holding-heart" },
  ];

  return (
    <>
      <section
        id="vision"
        className="scroll-mt-24 border-t border-slate-200/60 bg-white py-20 dark:border-white/5 dark:bg-ink-950 sm:py-24"
        aria-labelledby="vision-heading"
        data-aos="fade-up"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div
            className="mx-auto max-w-2xl text-center"
            lang={locale === "en" ? "en" : "ar"}
          >
            <h2
              id="vision-heading"
              className="text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400"
            >
              {t("vision.kicker")}
            </h2>
            <p className="mt-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
              {t("vision.title")}
            </p>
            <p className="mt-4 text-pretty text-slate-600 dark:text-slate-400">
              {t("vision.intro")}
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {cards.map((card) => (
              <article
                key={card.id}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-50/80 p-8 shadow-sm transition hover:border-brand-400/40 hover:shadow-md dark:border-white/10 dark:bg-ink-900/60 dark:shadow-none dark:hover:border-brand-500/30 dark:hover:shadow-lg dark:hover:shadow-brand-500/5 sm:p-10"
                lang={locale === "en" ? "en" : "ar"}
              >
                <div
                  className={`pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${card.accent} blur-2xl transition group-hover:opacity-100`}
                  aria-hidden
                />
                <div className="relative">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-xl text-brand-600 ring-1 ring-slate-200/80 dark:bg-white/5 dark:text-brand-400 dark:ring-white/10">
                    <i className={`fa-solid ${card.icon}`} aria-hidden />
                  </span>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-brand-600/90 dark:text-brand-300/80">
                    {card.kicker}
                  </p>
                  <h3 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                    {card.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
                    {card.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="goals"
        className="scroll-mt-24 border-t border-slate-200/60 bg-slate-100/80 py-20 dark:border-white/5 dark:bg-ink-900/40 sm:py-24"
        aria-labelledby="goals-heading"
        data-aos="fade-up"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
            lang={locale === "en" ? "en" : "ar"}
          >
            <div>
              <h2
                id="goals-heading"
                className="text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400"
              >
                {t("goals.kicker")}
              </h2>
              <p className="mt-3 max-w-xl text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
                {t("goals.title")}
              </p>
            </div>
            <p className="max-w-md text-pretty text-slate-600 dark:text-slate-400">
              {t("goals.intro")}
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {goals.map((g) => (
              <article
                key={g.title}
                className="flex flex-col rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-400/35 hover:shadow-md dark:border-white/10 dark:bg-ink-950/50 dark:shadow-none dark:hover:border-brand-500/25 dark:hover:bg-ink-900/80"
                lang={locale === "en" ? "en" : "ar"}
              >
                <span className="text-2xl text-brand-600 dark:text-brand-400">
                  <i className={`fa-solid ${g.icon}`} aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
                  {g.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-500">
                  {g.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
