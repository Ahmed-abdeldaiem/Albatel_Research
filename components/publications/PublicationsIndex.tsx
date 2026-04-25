"use client";

import Link from "next/link";
import { BOOKS, type BookRecord } from "@/lib/books";
import { useLanguage } from "@/contexts/LanguageContext";
import { PublicAssetImage } from "./PublicAssetImage";

function badgeKey(book: BookRecord): string {
  if (book.status === "coming_soon") return "pub.index.cardSoon";
  if (book.slug === "football-economics") return "pub.index.cardBestseller";
  return "pub.index.cardTranslation";
}

export function PublicationsIndex() {
  const { t, locale } = useLanguage();

  return (
    <section
      className="border-t border-slate-200/70 bg-white py-14 dark:border-white/10 dark:bg-ink-900 sm:py-16"
      lang={locale === "en" ? "en" : "ar"}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p
          className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-slate-600 dark:text-slate-400"
          data-aos="fade-up"
        >
          {t("pub.index.jarirDisclaimer")}
        </p>

        <h2
          className="mt-12 text-center text-xl font-bold text-slate-900 dark:text-white sm:text-2xl"
          data-aos="fade-up"
        >
          {t("pub.index.chooseEdition")}
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {BOOKS.map((book, i) => {
            const pk = book.i18nKey;
            return (
              <article
                key={book.slug}
                className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-50/50 shadow-sm ring-1 ring-slate-200/40 transition hover:-translate-y-0.5 hover:shadow-xl dark:border-white/10 dark:bg-ink-950/40 dark:ring-white/5 dark:hover:border-brand-500/25"
                data-aos="fade-up"
                data-aos-delay={String(80 + i * 60)}
              >
                <Link
                  href={`/publications/${book.slug}`}
                  className="relative aspect-[16/10] w-full overflow-hidden bg-slate-200/60 dark:bg-ink-900"
                >
                  <PublicAssetImage
                    src={book.cover}
                    alt=""
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent dark:from-black/90" />
                  <div className="absolute start-4 top-4">
                    <span className="inline-flex rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-brand-700 shadow-sm dark:bg-ink-950/90 dark:text-brand-300">
                      {t(badgeKey(book))}
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 text-start text-white">
                    <h3 className="text-balance text-lg font-bold leading-snug sm:text-xl">
                      {t(`pub.${pk}.title`)}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-white/85">
                      {t(`pub.${pk}.subtitle`)}
                    </p>
                  </div>
                </Link>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  {book.status === "published" ? (
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400">
                      {t("pub.index.labelsPublished")}
                    </p>
                  ) : null}
                  <div className="mt-auto flex flex-wrap gap-3">
                    <Link
                      href={`/publications/${book.slug}`}
                      className="inline-flex flex-1 items-center justify-center rounded-xl border border-slate-200/90 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 shadow-sm transition hover:border-brand-400/50 dark:border-white/15 dark:bg-ink-900 dark:text-white dark:hover:bg-white/10"
                    >
                      {t("pub.index.cardCta")}
                    </Link>
                    {book.status === "published" ? (
                      <Link
                        href={`/publications/order?book=${book.slug}`}
                        className="inline-flex flex-1 items-center justify-center rounded-xl bg-gradient-to-l from-brand-500 to-brand-600 px-4 py-2.5 text-sm font-bold text-white shadow-md transition hover:brightness-110 dark:text-ink-950"
                      >
                        {t("pub.index.cardOrder")}
                      </Link>
                    ) : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
