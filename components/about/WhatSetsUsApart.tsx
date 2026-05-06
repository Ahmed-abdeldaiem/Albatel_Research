"use client";

import { useLanguage } from "@/contexts/LanguageContext";

// =============================================================================
// WhatSetsUsApart — قسم "ما يميّزنا"
// ثلاث بطاقات تبرز نقاط التميّز الجوهرية للمؤسسة:
//   1) خبرة مصرية–سعودية متكاملة
//   2) منهج متعدد التخصصات
//   3) ربط الأكاديميا بالمجتمع المهني
// =============================================================================

export function WhatSetsUsApart() {
  const { t, locale } = useLanguage();

  const cards = [
    {
      t: t("about.diff1T"),
      d: t("about.diff1D"),
      icon: "fa-handshake-angle",
      gradient: "from-brand-500/20 to-cyan-500/10",
      ring: "ring-brand-500/20",
    },
    {
      t: t("about.diff2T"),
      d: t("about.diff2D"),
      icon: "fa-book-open-reader",
      gradient: "from-blue-500/20 to-brand-500/10",
      ring: "ring-blue-500/20",
    },
    {
      t: t("about.diff3T"),
      d: t("about.diff3D"),
      icon: "fa-building-columns",
      gradient: "from-cyan-500/20 to-brand-500/10",
      ring: "ring-cyan-500/20",
    },
  ];

  return (
    <section
      className="relative overflow-hidden border-t border-slate-200/60 bg-white py-16 dark:border-white/5 dark:bg-ink-950 sm:py-24"
      data-aos="fade-up"
    >
      {/* خلفيات ضوئية decorative */}
      <div
        className="pointer-events-none absolute -top-20 end-[-10%] h-72 w-72 rounded-full bg-brand-500/10 blur-3xl dark:bg-brand-400/5"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 start-[-10%] h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-400/5"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ── رأس القسم ── */}
        <div
          className="mx-auto max-w-2xl text-center"
          lang={locale === "en" ? "en" : "ar"}
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400 sm:text-sm">
            {t("about.diffKicker")}
          </p>
          <h2 className="mt-3 text-balance bg-gradient-to-l from-brand-600 via-brand-500 to-cyan-500 bg-clip-text text-3xl font-extrabold leading-tight text-transparent dark:from-brand-300 dark:via-brand-400 dark:to-cyan-300 sm:text-4xl">
            {t("about.diffTitle")}
          </h2>
          <span className="mx-auto mt-4 block h-px w-16 bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />
          <p className="mt-4 text-balance text-slate-600 dark:text-slate-400">
            {t("about.diffIntro")}
          </p>
        </div>

        {/* ── شبكة البطاقات الثلاث ── */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <article
              key={c.t}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-50/80 p-8 shadow-sm transition duration-500 hover:-translate-y-1 hover:border-brand-400/40 hover:shadow-xl hover:shadow-brand-500/10 dark:border-white/10 dark:bg-ink-900/50 dark:hover:border-brand-500/30"
              lang={locale === "en" ? "en" : "ar"}
              data-aos="fade-up"
              data-aos-delay={String(i * 140)}
            >
              {/* هالة ضوئية متدرّجة في الزاوية */}
              <div
                className={`pointer-events-none absolute -end-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${c.gradient} blur-2xl transition duration-500 group-hover:scale-125`}
                aria-hidden
              />

              <span
                className={`relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${c.gradient} text-2xl text-brand-600 ring-1 ${c.ring} transition group-hover:scale-110 dark:text-brand-300`}
              >
                <i className={`fa-solid ${c.icon}`} aria-hidden />
              </span>

              <h3 className="relative mt-5 text-balance text-xl font-bold text-slate-900 dark:text-white">
                {c.t}
              </h3>
              <span className="relative mt-3 block h-px w-10 bg-gradient-to-r from-brand-500/60 to-transparent" />

              <p
                className="relative mt-4 flex-1 text-justify leading-loose text-slate-600 dark:text-slate-400"
                style={{ textJustify: "inter-word" }}
              >
                {c.d}
              </p>

              {/* خط متحرّك يظهر بالكامل عند الـ hover */}
              <span className="relative mt-5 block h-0.5 w-0 bg-gradient-to-r from-brand-400 via-brand-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
