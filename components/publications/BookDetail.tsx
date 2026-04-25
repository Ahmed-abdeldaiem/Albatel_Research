"use client";

import Link from "next/link";
import {
  bookAuthors,
  getBook,
  type BookRecord,
  type BookSlug,
} from "@/lib/books";
import { useLanguage } from "@/contexts/LanguageContext";
import { PublicAssetImage } from "./PublicAssetImage";

function structurePairs(book: BookRecord): [string, string][] {
  if (book.slug === "football-economics") {
    return [
      ["pub.football.s1t", "pub.football.s1d"],
      ["pub.football.s2t", "pub.football.s2d"],
      ["pub.football.s3t", "pub.football.s3d"],
      ["pub.football.s4t", "pub.football.s4d"],
      ["pub.football.s5t", "pub.football.s5d"],
    ];
  }
  if (book.slug === "internal-audit") {
    return [
      ["pub.internal.t1t", "pub.internal.t1d"],
      ["pub.internal.t2t", "pub.internal.t2d"],
      ["pub.internal.t3t", "pub.internal.t3d"],
    ];
  }
  return [];
}

function audienceKeys(book: BookRecord): string[] {
  if (book.slug === "football-economics") {
    return [
      "pub.football.a1",
      "pub.football.a2",
      "pub.football.a3",
      "pub.football.a4",
      "pub.football.a5",
    ];
  }
  if (book.slug === "internal-audit") {
    return [
      "pub.internal.ia1",
      "pub.internal.ia2",
      "pub.internal.ia3",
      "pub.internal.ia4",
      "pub.internal.ia5",
    ];
  }
  return [];
}

export function BookDetail({ slug }: { slug: BookSlug }) {
  const book = getBook(slug);
  const { t, locale } = useLanguage();

  if (!book) return null;

  const pk = book.i18nKey;
  const authors = bookAuthors(locale, book.authorKeys);
  const pairs = structurePairs(book);
  const audKeys = audienceKeys(book);
  const isSoon = book.status === "coming_soon";

  return (
    <div lang={locale === "en" ? "en" : "ar"}>
      <nav
        className="border-b border-slate-200/80 bg-slate-50/80 py-3 text-sm dark:border-white/10 dark:bg-ink-950/80"
        aria-label="Breadcrumb"
      >
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-4 text-slate-600 dark:text-slate-400 sm:px-6 lg:px-8">
          <Link href="/" className="font-semibold hover:text-brand-600 dark:hover:text-brand-300">
            {t("pub.index.breadcrumbHome")}
          </Link>
          <span className="text-slate-400" aria-hidden>
            /
          </span>
          <Link
            href="/publications"
            className="font-semibold hover:text-brand-600 dark:hover:text-brand-300"
          >
            {t("pub.index.breadcrumbPub")}
          </Link>
          <span className="text-slate-400" aria-hidden>
            /
          </span>
          <span className="font-medium text-slate-900 dark:text-white">{t(`pub.${pk}.title`)}</span>
        </div>
      </nav>

      <section className="border-b border-slate-200/70 bg-gradient-to-b from-white to-slate-50 py-12 dark:border-white/10 dark:from-ink-900 dark:to-ink-950 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm lg:col-span-5">
            <div className="relative h-full min-h-[280px] overflow-hidden rounded-3xl border border-slate-200/80 shadow-xl dark:border-white/10">
              <PublicAssetImage
                src={book.cover}
                alt=""
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 400px"
                priority
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <span className="inline-flex rounded-full bg-brand-500/15 px-3 py-1 text-xs font-bold text-brand-800 dark:bg-brand-500/20 dark:text-brand-200">
              {t(`pub.${pk}.badge`)}
            </span>
            <h1 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              {t(`pub.${pk}.title`)}
            </h1>
            <p className="mt-3 text-lg font-medium text-brand-700 dark:text-brand-300">
              {t(`pub.${pk}.subtitle`)}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {t(`pub.${pk}.authors`)}
            </p>
            {book.slug === "internal-audit" ? (
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-500">
                {t("pub.internal.bylineOriginal")}
              </p>
            ) : null}
            {!isSoon ? (
              <p className="mt-4 rounded-xl border border-amber-200/80 bg-amber-50/80 px-4 py-3 text-xs leading-relaxed text-amber-950 dark:border-amber-500/25 dark:bg-amber-500/10 dark:text-amber-100">
                {t(`pub.${pk}.priceDisclaimer`)}
              </p>
            ) : null}
            <p className="mt-3 text-xs text-slate-600 dark:text-slate-400">{t("pub.index.egyptOrderHint")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {!isSoon ? (
                <Link
                  href={`/publications/order?book=${book.slug}`}
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-l from-brand-500 to-brand-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:brightness-110 dark:text-ink-950"
                >
                  {t(`pub.${pk}.orderCta`)}
                </Link>
              ) : null}
              <a
                href={book.referenceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300/90 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-brand-400/60 dark:border-white/20 dark:bg-white/10 dark:text-white"
              >
                {t(`pub.${pk}.externalDetails`)}
                <i
                  className={`fa-solid fa-arrow-up-right-from-square text-xs ${locale === "ar" ? "ms-2" : "me-2"}`}
                  aria-hidden
                />
              </a>
            </div>
            {!isSoon ? (
              <p className="mt-6 text-xs font-medium text-slate-500 dark:text-slate-500">
                {t(`pub.${pk}.partnerPharos`)}
              </p>
            ) : null}
          </div>
        </div>
      </section>

      {isSoon ? (
        <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-center text-base leading-relaxed text-slate-700 dark:text-slate-300">
            {t("pub.corruption.body")}
          </p>
        </section>
      ) : (
        <>
          <section className="border-b border-slate-200/70 bg-white py-14 dark:border-white/10 dark:bg-ink-900 sm:py-16">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {t(`pub.${pk}.aboutTitle`)}
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-slate-600 dark:text-slate-400">
                {t(`pub.${pk}.aboutBody`)}
              </p>
            </div>
          </section>

          {pairs.length > 0 ? (
            <section className="border-b border-slate-200/70 bg-slate-50 py-14 dark:border-white/10 dark:bg-ink-950 sm:py-16">
              <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {t(`pub.${pk}.structureTitle`)}
                </h2>
                <ul className="mt-8 space-y-5">
                  {pairs.map(([kt, kd]) => (
                    <li
                      key={kt}
                      className="rounded-2xl border border-slate-200/80 bg-white p-5 dark:border-white/10 dark:bg-ink-900/60"
                    >
                      <p className="font-bold text-brand-700 dark:text-brand-300">{t(kt)}</p>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{t(kd)}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ) : null}

          <section className="border-b border-slate-200/70 bg-white py-14 dark:border-white/10 dark:bg-ink-900 sm:py-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-center text-2xl font-bold text-slate-900 dark:text-white">
                {t("boardPage.membersTitle")}
              </h2>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {authors.map((a) => (
                  <div
                    key={a.name}
                    className="overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/80 dark:border-white/10 dark:bg-ink-950/50"
                  >
                    <div className="relative aspect-[4/3] bg-slate-200/60 dark:bg-ink-900">
                      <PublicAssetImage
                        src={a.image}
                        alt=""
                        className={a.imagePlaceholder ? "object-contain p-4" : "object-cover"}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-4 text-start">
                      <p className="font-bold text-slate-900 dark:text-white">{a.name}</p>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{a.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {audKeys.length > 0 ? (
            <section className="border-b border-slate-200/70 bg-slate-50 py-14 dark:border-white/10 dark:bg-ink-950 sm:py-16">
              <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {t(`pub.${pk}.audienceTitle`)}
                </h2>
                <ul className="mt-6 list-inside list-disc space-y-2 text-slate-700 dark:text-slate-300">
                  {audKeys.map((k) => (
                    <li key={k}>{t(k)}</li>
                  ))}
                </ul>
              </div>
            </section>
          ) : null}

          <section className="border-b border-slate-200/70 bg-white py-12 dark:border-white/10 dark:bg-ink-900">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <blockquote className="rounded-2xl border border-brand-500/20 bg-brand-500/5 p-6 text-lg font-medium leading-relaxed text-slate-800 dark:border-brand-400/20 dark:bg-brand-500/10 dark:text-slate-100">
                {t(`pub.${pk}.quote`)}
              </blockquote>
              <p className="mt-3 text-sm text-slate-500 dark:text-slate-500">{t(`pub.${pk}.quoteCitation`)}</p>
            </div>
          </section>

          {(book.galleries.cairo.length > 0 ||
            book.galleries.riyadh.length > 0 ||
            book.galleries.jarir.length > 0) && (
            <section className="space-y-16 border-b border-slate-200/70 bg-slate-50 py-14 dark:border-white/10 dark:bg-ink-950 sm:py-16">
              <GalleryBlock title={t(`pub.${pk}.cairoTitle`)} paths={book.galleries.cairo} />
              <GalleryBlock title={t(`pub.${pk}.riyadhTitle`)} paths={book.galleries.riyadh} />
              {book.slug === "internal-audit" ? (
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                  <p className="rounded-2xl border border-slate-200/90 bg-white/90 px-5 py-4 text-sm leading-relaxed text-slate-700 shadow-sm dark:border-white/10 dark:bg-ink-900/70 dark:text-slate-300">
                    {t("pub.internal.jarirClarification")}
                  </p>
                </div>
              ) : null}
              {book.galleries.jarir.length > 0 ? (
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    {t(`pub.${pk}.jarirTitle`)}
                  </h2>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {t(`pub.${pk}.jarirBody`)}
                  </p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {book.galleries.jarir.map((p) => (
                      <div
                        key={p}
                        className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200/80 dark:border-white/10"
                      >
                        <PublicAssetImage
                          src={p}
                          alt=""
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 33vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </section>
          )}

          <section className="bg-gradient-to-b from-white to-slate-50 py-14 dark:from-ink-900 dark:to-ink-950 sm:py-16">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 text-center sm:px-6 lg:px-8">
              <Link
                href={`/publications/order?book=${book.slug}`}
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-l from-brand-500 to-brand-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition hover:brightness-110 dark:text-ink-950"
              >
                {t(`pub.${pk}.orderCta`)}
              </Link>
              <p className="text-xs text-slate-500 dark:text-slate-500">{t("pub.index.jarirDisclaimer")}</p>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

function GalleryBlock({ title, paths }: { title: string; paths: string[] }) {
  if (paths.length === 0) return null;
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {paths.map((p) => (
          <div
            key={p}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200/80 dark:border-white/10"
          >
            <PublicAssetImage src={p} alt="" className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
          </div>
        ))}
      </div>
    </div>
  );
}
