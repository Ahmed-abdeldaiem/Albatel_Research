"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { newsKey, type NewsRecord } from "@/lib/news";

// =============================================================================
// NewsAttendees — الحضور في الفعالية
// بطاقة عريضة لرئيس الاجتماع، ثم شبكة بطاقات لبقية الأعضاء.
// الصور من `MEMBER_FILES`، والأسماء والأدوار من نصوص الخبر.
// =============================================================================

export function NewsAttendees({ news }: { news: NewsRecord }) {
  const { t, locale } = useLanguage();
  const k = (suffix: string) => t(newsKey(news, suffix));

  const chair = news.attendees.find((a) => a.chair);
  const members = news.attendees.filter((a) => !a.chair);

  return (
    <section
      className="relative overflow-hidden border-t border-slate-200/60 bg-gradient-to-b from-slate-50 to-white py-16 dark:border-white/5 dark:from-ink-950 dark:to-ink-900 sm:py-20"
      lang={locale === "en" ? "en" : "ar"}
    >
      {/* خلفيات ضوئية decorative */}
      <div
        className="pointer-events-none absolute -top-32 end-[-15%] h-[26rem] w-[26rem] rounded-full bg-brand-500/10 blur-3xl dark:bg-brand-400/10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-40 start-[-10%] h-[22rem] w-[22rem] rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-400/10"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p
            className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400 sm:text-sm"
            data-aos="fade-up"
          >
            {k("attendeesKicker")}
          </p>
          <h2
            className="mt-3 text-balance text-3xl font-extrabold leading-[1.5] text-slate-900 dark:text-white sm:text-4xl sm:leading-[1.45]"
            data-aos="fade-up"
            data-aos-delay="60"
          >
            {k("attendeesTitle")}
          </h2>
          <span
            className="mx-auto mt-5 block h-px w-20 bg-gradient-to-r from-transparent via-brand-500/70 to-transparent"
            data-aos="zoom-in"
            data-aos-delay="100"
          />
          <p
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400"
            data-aos="fade-up"
            data-aos-delay="140"
          >
            {k("attendeesIntro")}
          </p>
        </div>

        {/* ───── رئيس الاجتماع — بطاقة مميزة ───── */}
        {chair ? (
          <div
            className="mt-12 flex flex-col items-center gap-5 overflow-hidden rounded-3xl border border-brand-200/70 bg-white p-6 shadow-lg shadow-brand-900/5 ring-1 ring-brand-100/60 dark:border-brand-400/20 dark:bg-ink-950/60 dark:shadow-black/30 dark:ring-brand-400/10 sm:flex-row sm:gap-7 sm:p-7"
            data-aos="fade-up"
            data-aos-delay="160"
          >
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-slate-100 ring-2 ring-brand-400/40 dark:bg-ink-900 sm:h-32 sm:w-32">
              <Image
                src={chair.image}
                alt={k(`${chair.i18nKey}Name`)}
                fill
                className="object-cover object-top"
                sizes="128px"
              />
            </div>
            <div className="min-w-0 flex-1 text-center sm:text-start">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-l from-brand-500 to-brand-600 px-3 py-1 text-[11px] font-bold text-white shadow-sm dark:text-ink-950">
                <i className="fa-solid fa-gavel text-[0.65rem]" aria-hidden />
                {k("chairBadge")}
              </span>
              <p className="mt-3 text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
                {k(`${chair.i18nKey}Name`)}
              </p>
              <p className="mt-1.5 text-sm font-semibold text-brand-700 dark:text-brand-300">
                {k(`${chair.i18nKey}Role`)}
              </p>
            </div>
          </div>
        ) : null}

        {/* ───── بقية الحضور ───── */}
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member, i) => (
            <article
              key={member.i18nKey}
              className="group flex flex-col items-center rounded-2xl border border-slate-200/80 bg-white/90 p-5 text-center shadow-sm ring-1 ring-slate-200/40 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:shadow-xl dark:border-white/10 dark:bg-ink-950/40 dark:ring-white/5 dark:hover:border-brand-400/40"
              data-aos="fade-up"
              data-aos-delay={String(200 + i * 70)}
            >
              <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200/80 transition duration-500 group-hover:ring-brand-400/50 dark:bg-ink-900 dark:ring-white/10">
                <Image
                  src={member.image}
                  alt={k(`${member.i18nKey}Name`)}
                  fill
                  className="object-cover object-top transition duration-700 group-hover:scale-105"
                  sizes="96px"
                />
              </div>
              <p className="mt-4 text-base font-bold leading-snug text-slate-900 dark:text-white">
                {k(`${member.i18nKey}Name`)}
              </p>
              <span
                className="mt-2 block h-0.5 w-8 origin-center scale-x-0 bg-gradient-to-r from-brand-500 to-cyan-500 transition-transform duration-500 group-hover:scale-x-100"
                aria-hidden
              />
              <p className="mt-2 text-xs font-semibold leading-relaxed text-slate-500 dark:text-slate-400">
                {k(`${member.i18nKey}Role`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
