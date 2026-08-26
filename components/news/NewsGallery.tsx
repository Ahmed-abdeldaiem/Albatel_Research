"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { newsKey, type NewsRecord } from "@/lib/news";

// =============================================================================
// NewsGallery — معرض صور الخبر مع عارض بالحجم الكامل (lightbox)
// العارض يدعم: Escape للإغلاق، الأسهم للتنقّل، قفل تمرير الصفحة، والنقر خارج
// الصورة للإغلاق. طبقته أعلى من النافبار (z-[100]).
// =============================================================================

export function NewsGallery({ news }: { news: NewsRecord }) {
  const { t, locale } = useLanguage();
  const k = (suffix: string) => t(newsKey(news, suffix));
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const total = news.gallery.length;
  const isOpen = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);

  const step = useCallback(
    (delta: number) =>
      setOpenIndex((current) =>
        current === null ? current : (current + delta + total) % total,
      ),
    [total],
  );

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [close, isOpen, step]);

  if (total === 0) return null;

  return (
    <section
      className="border-t border-slate-200/70 bg-slate-50 py-14 dark:border-white/10 dark:bg-ink-950 sm:py-20"
      lang={locale === "en" ? "en" : "ar"}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3" data-aos="fade-up">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-cyan-500 text-white shadow-md shadow-brand-600/20">
            <i className="fa-solid fa-images text-base" aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400">
              {k("galleryKicker")}
            </p>
            <h2 className="mt-1 text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
              {k("galleryTitle")}
            </h2>
          </div>
        </div>

        <p
          className="mt-4 text-sm text-slate-500 dark:text-slate-400"
          data-aos="fade-up"
          data-aos-delay="60"
        >
          <i className="fa-solid fa-expand me-2 text-brand-600 dark:text-brand-400" aria-hidden />
          {k("galleryHint")}
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {news.gallery.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:border-white/10"
              aria-label={`${k("galleryImageAlt")} ${i + 1}`}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <span
                className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              />
              <span
                className="absolute bottom-3 end-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-brand-700 opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100 dark:bg-ink-950/90 dark:text-brand-300"
                aria-hidden
              >
                <i className="fa-solid fa-magnifying-glass-plus text-sm" />
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ───── العارض بالحجم الكامل ───── */}
      {isOpen ? (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={k("galleryTitle")}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute end-4 top-4 z-[2] inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/25 transition hover:bg-white/20 sm:end-6 sm:top-6"
            aria-label={t("media.news.galleryClose")}
          >
            <i className="fa-solid fa-xmark text-lg" aria-hidden />
          </button>

          {total > 1 ? (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  step(-1);
                }}
                className="absolute start-2 z-[2] inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/25 transition hover:bg-white/20 sm:start-6"
                aria-label={t("media.news.galleryPrev")}
              >
                <i className="fa-solid fa-chevron-left text-lg rtl:rotate-180" aria-hidden />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  step(1);
                }}
                className="absolute end-2 z-[2] inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/25 transition hover:bg-white/20 sm:end-6"
                aria-label={t("media.news.galleryNext")}
              >
                <i className="fa-solid fa-chevron-right text-lg rtl:rotate-180" aria-hidden />
              </button>
            </>
          ) : null}

          <figure
            className="relative flex max-h-full w-full max-w-4xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-2xl ring-1 ring-white/15">
              <Image
                src={news.gallery[openIndex]}
                alt={`${k("galleryImageAlt")} ${openIndex + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
            <figcaption className="mt-4 text-center text-sm font-semibold text-white/80">
              {k("galleryImageAlt")}
              <span className="ms-2 tabular-nums text-white/60" dir="ltr">
                {openIndex + 1} / {total}
              </span>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </section>
  );
}
