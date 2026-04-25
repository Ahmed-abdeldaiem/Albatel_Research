"use client";

import { useLanguage } from "@/contexts/LanguageContext";

type AboutSectionProps = {
  /** Use on /about when PageHero already shows the main title */
  omitIntroHeadings?: boolean;
};

export function AboutSection({ omitIntroHeadings }: AboutSectionProps) {
  const { t, locale } = useLanguage();

  const bullets = [t("about.li1"), t("about.li2"), t("about.li3")];
  const icons = ["fa-microscope", "fa-language", "fa-people-group"] as const;

  return (
    <section
      id="about"
      data-aos="fade-up"
      className="scroll-mt-24 border-t border-slate-200/60 bg-gradient-to-b from-slate-100 to-white py-20 dark:border-white/5 dark:from-ink-950 dark:to-ink-900 sm:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div lang={locale === "en" ? "en" : "ar"}>
            {omitIntroHeadings ? (
              <h2 id="about-heading" className="sr-only">
                {t("about.title")}
              </h2>
            ) : (
              <>
                <h2
                  id="about-heading"
                  className="text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400"
                >
                  {t("about.kicker")}
                </h2>
                <p className="mt-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
                  {t("about.title")}
                </p>
              </>
            )}
            <p
              className={`text-pretty text-lg leading-relaxed text-slate-600 dark:text-slate-400 ${
                omitIntroHeadings ? "mt-0" : "mt-6"
              }`}
            >
              <strong className="font-semibold text-slate-800 dark:text-slate-200">
                {t("about.p1a")}
              </strong>{" "}
              {t("about.p1b")}
            </p>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              {locale === "ar" ? (
                <>
                  نسعى إلى{" "}
                  <strong className="text-slate-800 dark:text-slate-200">
                    إثراء المجتمع المهني
                  </strong>
                  {t("about.p2").replace(/^نسعى إلى إثراء المجتمع المهني/, "")}
                </>
              ) : (
                t("about.p2")
              )}
            </p>
          </div>
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-400/20 via-transparent to-blue-400/10 blur-2xl dark:from-brand-500/20 dark:to-blue-500/10"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-xl backdrop-blur-sm dark:border-white/10 dark:bg-ink-800/80 dark:shadow-2xl sm:p-10">
              <div className="bg-card-shine pointer-events-none absolute inset-0 opacity-60 dark:opacity-100" />
              <ul className="relative space-y-5 text-slate-700 dark:text-slate-300">
                {bullets.map((text, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-600 dark:text-brand-400">
                      <i className={`fa-solid ${icons[idx]}`} aria-hidden />
                    </span>
                    <span lang={locale === "en" ? "en" : "ar"}>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
