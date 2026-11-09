"use client";

import Link from "next/link";
import { PublicAssetImage } from "@/components/publications/PublicAssetImage";
import { useLanguage } from "@/contexts/LanguageContext";
import { UPCOMING_EVENT, eventKey } from "@/lib/events";

// =============================================================================
// UpcomingEvent — قسم الفعالية القادمة (الرئيسية + أعلى /news)
//
// بطاقة أفقية على الشاشات الكبيرة: صورة الفعالية بشارة "قريبًا" وتاريخها،
// وبجوارها العنوان والموجز وملاحظة التفاصيل وزرّ الدعوة. تتكدّس عموديًا على
// الجوال. لا يُعرض شيء إذا كانت `UPCOMING_EVENT` تساوي `null`.
// =============================================================================

type Props = {
  /** خلفية القسم — للتناوب مع الأقسام المجاورة */
  tone?: "white" | "muted";
};

export function UpcomingEvent({ tone = "white" }: Props) {
  const { t, locale } = useLanguage();
  const event = UPCOMING_EVENT;
  if (!event) return null;

  const k = (suffix: string) => t(eventKey(event, suffix));
  const bg =
    tone === "white"
      ? "bg-white dark:bg-ink-900"
      : "bg-slate-50 dark:bg-ink-950";

  return (
    <section
      className={`border-b border-slate-200/70 py-16 dark:border-white/5 sm:py-20 ${bg}`}
      aria-labelledby="upcoming-event-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ───── رأس القسم ───── */}
        <div className="text-center" data-aos="fade-up">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            {t("media.events.kicker")}
          </p>
          <h2 className="mt-3 text-balance text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
            {t("media.events.sectionTitle")}
          </h2>
          <span className="mx-auto mt-4 block h-px w-16 bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />
        </div>

        {/* ───── بطاقة الفعالية ───── */}
        <article
          className="mt-10 grid overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-slate-900/10 ring-1 ring-slate-200/50 dark:border-white/10 dark:bg-ink-900/70 dark:shadow-black/40 dark:ring-white/5 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* الصورة */}
          <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10] lg:aspect-auto lg:min-h-[26rem]">
            <PublicAssetImage
              src={event.image}
              alt={k("imageAlt")}
              className="object-[50%_30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
            <span className="absolute end-4 top-4 rounded-full bg-sky-500 px-3.5 py-1 text-xs font-bold text-white shadow-md shadow-sky-900/30">
              {k("badge")}
            </span>
            <span className="absolute bottom-4 start-4 inline-flex items-center gap-2 text-sm font-bold text-white drop-shadow">
              <i className="fa-regular fa-calendar text-xs" aria-hidden />
              {k("dateLabel")}
            </span>
          </div>

          {/* المحتوى */}
          <div className="flex flex-col justify-center p-6 text-start sm:p-8 lg:p-10">
            <p className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <i className="fa-solid fa-location-dot text-[0.7rem] text-brand-600 dark:text-brand-400" aria-hidden />
              {k("location")}
            </p>
            <h3
              id="upcoming-event-title"
              className="mt-3 text-balance text-2xl font-extrabold leading-snug text-slate-900 dark:text-white sm:text-3xl"
            >
              {k("title")}
            </h3>
            <p className="mt-4 text-base leading-loose text-slate-600 dark:text-slate-300">
              {k("body")}
            </p>
            <p className="mt-5 flex items-start gap-2.5 rounded-xl bg-sky-50 px-4 py-3 text-sm font-medium text-sky-900 ring-1 ring-sky-100 dark:bg-sky-500/10 dark:text-sky-200 dark:ring-sky-400/20">
              <i className="fa-solid fa-circle-info mt-1 text-xs" aria-hidden />
              {k("note")}
            </p>
            <div className="mt-7">
              <Link
                href={event.ctaHref}
                className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-l from-blue-900 to-emerald-700 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-900/25 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-ink-900"
              >
                {k("cta")}
                <i
                  className={`fa-solid fa-arrow-${locale === "ar" ? "left" : "right"} text-xs`}
                  aria-hidden
                />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
