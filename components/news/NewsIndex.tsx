"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { NEWS, newsHref, newsKey, type NewsRecord } from "@/lib/news";

// =============================================================================
// NewsIndex — قائمة الأخبار الموجزة في /news
//
// كل خبر بطاقة موجزة: ملصق مربّع + تصنيف وتاريخ + عنوان + مقدمة + زرّ يفتح
// صفحة تفاصيل الخبر `/news/[slug]` حيث الحضور ومحاور الاجتماع ومعرض الصور.
//
// ملصق الخبر يحمل العنوان مطبوعًا داخله، لذا يُعرض كاملًا بلا اقتطاع وبلا نص
// فوقه، وتُوضَع بيانات الخبر في عمود مجاور — لا فوق الصورة.
// =============================================================================

function NewsSummary({ news, first }: { news: NewsRecord; first: boolean }) {
  const { t } = useLanguage();
  const k = (suffix: string) => t(newsKey(news, suffix));
  const href = newsHref(news);

  return (
    <article
      className={
        first
          ? "grid items-start gap-8 lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] lg:gap-12"
          : "grid items-start gap-8 border-t border-slate-200/70 pt-14 dark:border-white/10 lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] lg:gap-12"
      }
    >
      {/* ───── ملصق الخبر — مربّع، يُعرض كاملًا ───── */}
      <Link
        href={href}
        aria-label={k("title")}
        className="group relative block aspect-square w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-slate-900/10 ring-1 ring-slate-200/50 transition-shadow hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-white/10 dark:bg-ink-950 dark:shadow-black/40 dark:ring-white/5"
        data-aos="fade-up"
        data-aos-delay="80"
      >
        <Image
          src={news.cover}
          alt={k("title")}
          fill
          priority={first}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 24rem"
        />
      </Link>

      {/* ───── بيانات الخبر وموجزه ───── */}
      <div data-aos="fade-up" data-aos-delay="140">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-100/90 px-3 py-1 text-xs font-bold text-brand-700 dark:bg-brand-500/15 dark:text-brand-300">
            <i className="fa-solid fa-users text-[0.7rem]" aria-hidden />
            {k("badge")}
          </span>
          <time
            dateTime={news.date}
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/90 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
          >
            <i className="fa-solid fa-calendar-days text-[0.7rem]" aria-hidden />
            {k("dateLabel")}
          </time>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/90 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
            <i className="fa-regular fa-clock text-[0.7rem]" aria-hidden />
            {t("media.news.readingTime")}
          </span>
        </div>

        <h3 className="mt-5 text-balance text-2xl font-extrabold leading-snug text-slate-900 dark:text-white sm:text-3xl lg:text-[2.1rem] lg:leading-[1.35]">
          <Link
            href={href}
            className="transition-colors hover:text-brand-700 dark:hover:text-brand-300"
          >
            {k("title")}
          </Link>
        </h3>

        <span className="mt-5 block h-px w-16 bg-gradient-to-r from-brand-500/70 via-brand-400/50 to-transparent" />

        <p
          className="mt-5 text-justify text-base leading-loose text-slate-700 dark:text-slate-300 sm:text-lg"
          style={{ textJustify: "inter-word" }}
        >
          {k("lead")}
        </p>

        <Link
          href={href}
          className="mt-7 inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-l from-brand-500 to-brand-600 px-5 py-3 text-sm font-bold text-white shadow-md shadow-brand-600/25 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:text-ink-950 dark:focus-visible:ring-offset-ink-900"
        >
          {t("media.news.readMore")}
          <i className="fa-solid fa-arrow-left text-xs rtl:rotate-180" aria-hidden />
        </Link>
      </div>
    </article>
  );
}

export function NewsIndex() {
  const { t, locale } = useLanguage();

  return (
    <section
      className="border-t border-slate-200/70 bg-white py-14 dark:border-white/10 dark:bg-ink-900 sm:py-20"
      lang={locale === "en" ? "en" : "ar"}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ───── رأس القسم ───── */}
        <div className="flex items-center gap-3" data-aos="fade-up">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-cyan-500 text-white shadow-md shadow-brand-600/20">
            <i className="fa-solid fa-bolt text-base" aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400">
              {t("media.news.latestKicker")}
            </p>
            <h2 className="mt-1 text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
              {t("media.news.latestTitle")}
            </h2>
          </div>
        </div>

        <div className="mt-8 space-y-14 lg:mt-10">
          {NEWS.map((news, i) => (
            <NewsSummary key={news.slug} news={news} first={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
