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
              className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400 sm:text-sm"
            >
              {t("vision.kicker")}
            </h2>
            <p className="mt-3 text-balance text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
              {t("vision.title")}
            </p>
            <span className="mx-auto mt-4 block h-px w-16 bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />
            <p className="mt-4 text-balance text-slate-600 dark:text-slate-400">
              {t("vision.intro")}
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {cards.map((card, idx) => (
              <article
                key={card.id}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-50/80 p-8 shadow-sm transition duration-500 hover:-translate-y-1 hover:border-brand-400/40 hover:shadow-lg hover:shadow-brand-500/10 dark:border-white/10 dark:bg-ink-900/60 dark:shadow-none dark:hover:border-brand-500/30 dark:hover:shadow-lg dark:hover:shadow-brand-500/5 sm:p-10"
                lang={locale === "en" ? "en" : "ar"}
                data-aos="fade-up"
                data-aos-delay={String(idx * 180)}
              >
                <div
                  className={`pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${card.accent} blur-2xl transition duration-500 group-hover:scale-125`}
                  aria-hidden
                />
                <div className="relative">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-brand-500/5 text-2xl text-brand-600 ring-1 ring-brand-500/20 transition group-hover:scale-110 group-hover:ring-brand-500/40 dark:from-brand-400/20 dark:to-brand-400/5 dark:text-brand-300 dark:ring-brand-400/20 dark:group-hover:ring-brand-400/40">
                    <i className={`fa-solid ${card.icon}`} aria-hidden />
                  </span>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-brand-600/90 dark:text-brand-300/80">
                    {card.kicker}
                  </p>
                  <h3 className="mt-1 text-balance text-2xl font-bold text-slate-900 dark:text-white">
                    {card.title}
                  </h3>
                  <span className="mt-4 block h-px w-10 bg-gradient-to-r from-brand-500/60 to-transparent" />
                  <p
                    className="mt-4 text-justify leading-loose text-slate-600 dark:text-slate-400"
                    style={{ textJustify: "inter-word" }}
                  >
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
                className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400 sm:text-sm"
              >
                {t("goals.kicker")}
              </h2>
              <p className="mt-3 max-w-xl text-balance text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
                {t("goals.title")}
              </p>
              <span className="mt-4 block h-px w-12 bg-gradient-to-r from-brand-500/70 to-transparent" />
            </div>
            <p className="max-w-md text-balance text-slate-600 dark:text-slate-400">
              {t("goals.intro")}
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {goals.map((g, idx) => (
              <article
                key={g.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm transition duration-500 hover:-translate-y-1 hover:border-brand-400/40 hover:shadow-lg hover:shadow-brand-500/10 dark:border-white/10 dark:bg-ink-950/50 dark:shadow-none dark:hover:border-brand-500/30 dark:hover:bg-ink-900/80"
                lang={locale === "en" ? "en" : "ar"}
                data-aos="fade-up"
                data-aos-delay={String(idx * 100)}
              >
                <span
                  className="absolute end-3 top-3 select-none font-mono text-[0.65rem] font-bold tracking-widest text-slate-400/70 transition group-hover:text-brand-500/80 dark:text-slate-500/60 dark:group-hover:text-brand-300/90"
                  aria-hidden
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/15 to-brand-500/5 text-xl text-brand-600 ring-1 ring-brand-500/15 transition group-hover:scale-110 group-hover:ring-brand-500/40 dark:from-brand-400/15 dark:to-brand-400/5 dark:text-brand-300 dark:ring-brand-400/15 dark:group-hover:ring-brand-400/40">
                  <i className={`fa-solid ${g.icon}`} aria-hidden />
                </span>
                <h3 className="mt-4 text-balance text-lg font-bold text-slate-900 dark:text-white">
                  {g.title}
                </h3>
                <p className="mt-2 flex-1 text-balance text-sm leading-relaxed text-slate-600 dark:text-slate-500">
                  {g.desc}
                </p>
                <span className="mt-4 block h-0.5 w-0 bg-gradient-to-r from-brand-400 via-brand-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
