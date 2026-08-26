"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { getNews, newsKey } from "@/lib/news";
import { NewsAttendees } from "./NewsAttendees";
import { NewsClosing } from "./NewsClosing";
import { NewsGallery } from "./NewsGallery";
import { NewsHighlights } from "./NewsHighlights";

// =============================================================================
// NewsDetail — صفحة تفاصيل خبر واحد (/news/[slug])
// أقسامها بالترتيب:
//   1) Breadcrumb      → الرئيسية / الأخبار والفعاليات / عنوان الخبر
//   2) NewsHeader      → ملصق الخبر + التصنيف والتاريخ + العنوان (h1) + المقدمة
//   3) NewsAttendees   → الحضور
//   4) NewsHighlights  → على طاولة الاجتماع + الفقرة الختامية
//   5) NewsGallery     → معرض الصور مع عارض بالحجم الكامل
//   6) NewsClosing     → خاتمة داكنة (تتكرّر أيضًا في صفحة /news)
// =============================================================================

export function NewsDetail({ slug }: { slug: string }) {
  const news = getNews(slug);
  const { t, locale } = useLanguage();

  if (!news) return null;

  const k = (suffix: string) => t(newsKey(news, suffix));

  return (
    <div lang={locale === "en" ? "en" : "ar"}>
      {/* (1) ───── Breadcrumb ───── */}
      <nav
        className="border-b border-slate-200/80 bg-slate-50/80 py-3 text-sm dark:border-white/10 dark:bg-ink-950/80"
        aria-label="Breadcrumb"
      >
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-4 text-slate-600 dark:text-slate-400 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="font-semibold transition-colors hover:text-brand-600 dark:hover:text-brand-300"
          >
            {t("media.news.breadcrumbHome")}
          </Link>
          <span className="text-slate-400" aria-hidden>
            /
          </span>
          <Link
            href="/news"
            className="font-semibold transition-colors hover:text-brand-600 dark:hover:text-brand-300"
          >
            {t("media.news.breadcrumbNews")}
          </Link>
          <span className="text-slate-400" aria-hidden>
            /
          </span>
          <span className="font-medium text-slate-900 dark:text-white">{k("title")}</span>
        </div>
      </nav>

      {/* (2) ───── ترويسة الخبر ───── */}
      <section className="relative overflow-hidden border-b border-slate-200/70 bg-gradient-to-b from-white to-slate-50 py-14 dark:border-white/10 dark:from-ink-900 dark:to-ink-950 sm:py-20">
        <div
          className="pointer-events-none absolute -top-32 end-[-15%] h-[26rem] w-[26rem] rounded-full bg-brand-500/10 blur-3xl dark:bg-brand-400/10"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-40 start-[-10%] h-[24rem] w-[24rem] rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-400/10"
          aria-hidden
        />

        <article className="relative mx-auto grid max-w-6xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-14 lg:px-8">
          {/* ملصق الخبر — مربّع، يُعرض كاملًا بلا اقتطاع */}
          <div className="relative w-full" data-aos="fade-up">
            <div
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-500/30 via-cyan-400/20 to-brand-500/30 opacity-50 blur-2xl"
              aria-hidden
            />
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl shadow-slate-900/10 dark:border-white/10 dark:bg-ink-950 dark:shadow-black/40">
              <Image
                src={news.cover}
                alt={k("title")}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 26rem"
              />
            </div>
          </div>

          {/* بيانات الخبر ومقدمته */}
          <div data-aos="fade-up" data-aos-delay="120">
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

            <h1 className="mt-5 text-balance text-2xl font-extrabold leading-snug text-slate-900 dark:text-white sm:text-3xl lg:text-[2.35rem] lg:leading-[1.35]">
              {k("title")}
            </h1>

            <span className="mt-5 block h-px w-16 bg-gradient-to-r from-brand-500/70 via-brand-400/50 to-transparent" />

            <p
              className="mt-5 text-justify text-base leading-loose text-slate-700 dark:text-slate-300 sm:text-lg"
              style={{ textJustify: "inter-word" }}
            >
              {k("lead")}
            </p>

            <Link
              href="/news"
              className="mt-7 inline-flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm transition hover:border-brand-300 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-brand-400/40 dark:hover:text-brand-300"
            >
              <i className="fa-solid fa-arrow-right text-xs rtl:rotate-180" aria-hidden />
              {t("media.news.backToNews")}
            </Link>
          </div>
        </article>
      </section>

      {/* (3–6) ───── تفاصيل الخبر ───── */}
      <NewsAttendees news={news} />
      <NewsHighlights news={news} />
      <NewsGallery news={news} />
      <NewsClosing news={news} />
    </div>
  );
}
