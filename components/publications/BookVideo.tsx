"use client";

import { useLanguage } from "@/contexts/LanguageContext";

// =============================================================================
// BookVideo — يعرض فيديو يوتيوب لإصدار معيّن
// يُستخدم فقط عندما يحتوي BookRecord على youtubeId
// التضمين بأسلوب lite (privacy-enhanced via youtube-nocookie.com)
// =============================================================================

type Props = {
  /** معرّف الفيديو (الجزء بعد youtu.be/ أو ?v=) */
  youtubeId: string;
  /** مفتاح i18n الجذر للكتاب — مثل "football" */
  pk: string;
};

export function BookVideo({ youtubeId, pk }: Props) {
  const { t, locale } = useLanguage();

  return (
    <section
      className="relative overflow-hidden border-b border-slate-200/70 bg-gradient-to-b from-white to-slate-50 py-14 dark:border-white/10 dark:from-ink-900 dark:to-ink-950 sm:py-16"
      lang={locale === "en" ? "en" : "ar"}
    >
      {/* خلفية ضوئية ناعمة */}
      <div
        className="pointer-events-none absolute -top-24 end-[-10%] h-[20rem] w-[20rem] rounded-full bg-brand-500/10 blur-3xl dark:bg-brand-400/10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 start-[-10%] h-[20rem] w-[20rem] rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-400/10"
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p
            className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400"
            data-aos="fade-up"
          >
            {t(`pub.${pk}.videoKicker`)}
          </p>
          <h2
            className="mt-3 text-balance text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl"
            data-aos="fade-up"
            data-aos-delay="60"
          >
            {t(`pub.${pk}.videoTitle`)}
          </h2>
          <p
            className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t(`pub.${pk}.videoSubtitle`)}
          </p>
        </div>

        {/* إطار الفيديو */}
        <div
          className="relative mt-10 overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-900 shadow-2xl shadow-brand-900/10 ring-1 ring-slate-200/60 dark:border-white/10 dark:ring-white/5"
          data-aos="zoom-in-up"
          data-aos-delay="140"
        >
          {/* glowing accents on the corners */}
          <span
            className="pointer-events-none absolute -top-1 -end-1 h-24 w-24 rounded-full bg-brand-500/30 blur-2xl"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute -bottom-1 -start-1 h-24 w-24 rounded-full bg-cyan-500/30 blur-2xl"
            aria-hidden
          />

          <div className="relative aspect-video">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&modestbranding=1`}
              title={t(`pub.${pk}.videoTitle`)}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
