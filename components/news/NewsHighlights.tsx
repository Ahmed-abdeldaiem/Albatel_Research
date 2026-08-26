"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { newsKey, type NewsRecord } from "@/lib/news";

// =============================================================================
// NewsHighlights — محاور الفعالية
// قائمة رأسية مرقّمة (تستوعب أي عدد من المحاور بلا فراغات في الشبكة)،
// وتُختم بفقرة الخبر الأخيرة داخل بطاقة مميّزة.
// =============================================================================

export function NewsHighlights({ news }: { news: NewsRecord }) {
  const { t, locale } = useLanguage();
  const k = (suffix: string) => t(newsKey(news, suffix));

  return (
    <section
      className="border-t border-slate-200/60 bg-white py-16 dark:border-white/5 dark:bg-ink-900 sm:py-20"
      lang={locale === "en" ? "en" : "ar"}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p
            className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400 sm:text-sm"
            data-aos="fade-up"
          >
            {k("agendaKicker")}
          </p>
          <h2
            className="mt-3 text-balance bg-gradient-to-l from-brand-600 via-brand-500 to-cyan-500 bg-clip-text py-2 text-3xl font-extrabold leading-[1.5] text-transparent dark:from-brand-300 dark:via-brand-400 dark:to-cyan-300 sm:text-4xl sm:leading-[1.45]"
            data-aos="fade-up"
            data-aos-delay="60"
          >
            {k("agendaTitle")}
          </h2>
          <p
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {k("agendaIntro")}
          </p>
        </div>

        <ol className="mt-12 space-y-4">
          {news.highlights.map((item, i) => (
            <li
              key={item.i18nKey}
              className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/60 p-5 shadow-sm ring-1 ring-slate-200/40 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/40 hover:shadow-lg dark:border-white/10 dark:bg-ink-950/40 dark:ring-white/5 dark:hover:border-brand-400/40 sm:gap-5 sm:p-6"
              data-aos="fade-up"
              data-aos-delay={String(120 + i * 70)}
            >
              {/* هالة ضوئية عند الهافر */}
              <div
                className="pointer-events-none absolute -top-16 -end-16 h-40 w-40 rounded-full bg-gradient-to-br from-brand-500 to-cyan-500 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-15"
                aria-hidden
              />

              <span className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-cyan-500 text-white shadow-md shadow-brand-600/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 sm:h-14 sm:w-14">
                <i className={`${item.icon} text-lg sm:text-xl`} aria-hidden />
              </span>

              <div className="relative min-w-0 flex-1">
                <div className="flex items-baseline gap-2">
                  <span
                    className="text-xs font-bold tabular-nums text-brand-500/70 dark:text-brand-400/70"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 transition-colors duration-300 group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-300 sm:text-lg">
                    {k(`${item.i18nKey}T`)}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-[0.95rem]">
                  {k(`${item.i18nKey}D`)}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* ───── فقرة الخبر الختامية ───── */}
        <div
          className="mt-10 rounded-2xl border-s-4 border-brand-500 bg-brand-50/70 p-5 dark:border-brand-400 dark:bg-brand-500/10 sm:p-6"
          data-aos="fade-up"
          data-aos-delay="120"
        >
          <p
            className="text-justify text-base leading-loose text-slate-800 dark:text-slate-200 sm:text-lg"
            style={{ textJustify: "inter-word" }}
          >
            {k("outro")}
          </p>
        </div>
      </div>
    </section>
  );
}
