"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

// =============================================================================
// ActivitiesGlance — قسم "نشاطاتنا في لمحة"
// أربع بطاقات روابط تنقل الزائر من /about إلى الصفحات التفصيلية:
//   لجنة البحوث — لجنة الترجمة — الإصدارات — مجلس الأمناء
// كل بطاقة تتضمن: أيقونة + عنوان + وصف موجز + رابط CTA بسهم متحرّك.
// =============================================================================

export function ActivitiesGlance() {
  const { t, locale } = useLanguage();

  const activities = [
    {
      t: t("about.act1T"),
      d: t("about.act1D"),
      cta: t("about.act1Cta"),
      href: "/research-committee",
      icon: "fa-flask",
    },
    {
      t: t("about.act2T"),
      d: t("about.act2D"),
      cta: t("about.act2Cta"),
      href: "/translation-committee",
      icon: "fa-language",
    },
    {
      t: t("about.act3T"),
      d: t("about.act3D"),
      cta: t("about.act3Cta"),
      href: "/publications",
      icon: "fa-book",
    },
    {
      t: t("about.act4T"),
      d: t("about.act4D"),
      cta: t("about.act4Cta"),
      href: "/board",
      icon: "fa-users",
    },
  ];

  return (
    <section
      className="border-t border-slate-200/60 bg-white py-16 dark:border-white/5 dark:bg-ink-950 sm:py-24"
      data-aos="fade-up"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ── رأس القسم ── */}
        <div
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          lang={locale === "en" ? "en" : "ar"}
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400 sm:text-sm">
              {t("about.actKicker")}
            </p>
            <h2 className="mt-3 max-w-xl text-balance text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
              {t("about.actTitle")}
            </h2>
            <span className="mt-4 block h-px w-12 bg-gradient-to-r from-brand-500/70 to-transparent" />
          </div>
          <p className="max-w-md text-balance text-slate-600 dark:text-slate-400">
            {t("about.actIntro")}
          </p>
        </div>

        {/* ── الشبكة ── */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((a, i) => (
            <Link
              key={a.href}
              href={a.href}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/70 p-6 shadow-sm transition duration-500 hover:-translate-y-1 hover:border-brand-400/40 hover:bg-white hover:shadow-lg hover:shadow-brand-500/10 dark:border-white/10 dark:bg-ink-900/40 dark:hover:border-brand-500/30 dark:hover:bg-ink-900/80"
              lang={locale === "en" ? "en" : "ar"}
              data-aos="fade-up"
              data-aos-delay={String(i * 100)}
            >
              {/* هالة ضوئية */}
              <div
                className="pointer-events-none absolute -end-10 -top-10 h-32 w-32 rounded-full bg-brand-500/0 blur-2xl transition duration-500 group-hover:bg-brand-500/15"
                aria-hidden
              />

              <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/15 to-cyan-500/10 text-xl text-brand-600 ring-1 ring-brand-500/15 transition group-hover:scale-110 group-hover:ring-brand-500/40 dark:from-brand-400/15 dark:to-cyan-400/10 dark:text-brand-400">
                <i className={`fa-solid ${a.icon}`} aria-hidden />
              </span>

              <h3 className="relative mt-4 text-balance text-base font-bold text-slate-900 transition-colors duration-300 group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-300">
                {a.t}
              </h3>
              <p className="relative mt-2 flex-1 text-balance text-sm leading-relaxed text-slate-600 dark:text-slate-500">
                {a.d}
              </p>

              {/* رابط CTA + سهم يتحرّك عند الـ hover */}
              <span className="relative mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-600 dark:text-brand-400">
                {a.cta}
                <i
                  className="fa-solid fa-arrow-left text-xs transition-transform duration-300 group-hover:-translate-x-1 rtl:fa-rotate-180 rtl:group-hover:translate-x-1"
                  aria-hidden
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
