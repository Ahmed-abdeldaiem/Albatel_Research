"use client";

import { useLanguage } from "@/contexts/LanguageContext";

// =============================================================================
// BlogComingSoon — بطاقة "ترقّبوا المقالات قريبًا"
// تحلّ محل قائمة المقالات حتى نشر أول مقال، وتحافظ على نمط الصفحات الأخرى:
// هالات ضوئية، أيقونة متحرّكة، شارة "قريبًا"، ثم عنوان ونص.
// =============================================================================

export function BlogComingSoon() {
  const { t, locale } = useLanguage();

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

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div
          className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-8 text-center shadow-xl shadow-slate-900/5 ring-1 ring-slate-200/50 dark:border-white/10 dark:bg-ink-950/50 dark:shadow-black/30 dark:ring-white/5 sm:p-12"
          data-aos="fade-up"
        >
          {/* أيقونة القلم بحركة طفو خفيفة */}
          <div className="mx-auto inline-flex h-20 w-20 animate-float items-center justify-center rounded-3xl bg-gradient-to-br from-brand-500 to-cyan-500 text-white shadow-lg shadow-brand-600/25">
            <i className="fa-solid fa-feather-pointed text-3xl" aria-hidden />
          </div>

          <p className="mt-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-amber-700 dark:bg-amber-400/15 dark:text-amber-300">
              <span
                className="inline-block h-1.5 w-1.5 animate-pulse-soft rounded-full bg-amber-500 dark:bg-amber-300"
                aria-hidden
              />
              {t("media.blog.soonBadge")}
            </span>
          </p>

          <h2 className="mt-5 text-balance text-3xl font-extrabold leading-[1.4] text-slate-900 dark:text-white sm:text-4xl">
            {t("media.blog.soonTitle")}
          </h2>

          <span className="mx-auto mt-6 block h-px w-20 bg-gradient-to-r from-transparent via-brand-500/70 to-transparent" />

          <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-loose text-slate-700 dark:text-slate-300 sm:text-lg">
            {t("media.blog.soonBody")}
          </p>

          <p className="mt-7 inline-flex items-center gap-2 rounded-xl border border-slate-200/90 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
            <i
              className="fa-solid fa-hourglass-half text-brand-600 dark:text-brand-400"
              aria-hidden
            />
            {t("media.blog.soonNote")}
          </p>
        </div>
      </div>
    </section>
  );
}
