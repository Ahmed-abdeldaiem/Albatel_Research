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
import { BookVideo } from "./BookVideo";

// =============================================================================
// BookDetail — صفحة تفاصيل إصدار واحد (/publications/[slug])
// تتكوّن من تسعة أقسام مرتّبة:
//   1) Breadcrumb            → مسار الصفحة
//   2) BookHero              → غلاف + معلومات أساسية + CTAs
//   3) BookVideo             → فيديو يوتيوب (إن وُجد youtubeId)
//   4) AboutBook             → عن الكتاب — نص جستفي
//   5) BookStructure         → بنية الموسوعة / محاور الكتاب
//   6) BookAuthors           → بطاقات المؤلفين
//   7) BookAudience          → الجمهور المستهدف
//   8) BookQuote             → اقتباس
//   9) BookGalleries         → معارض الإصدار (القاهرة / الرياض / جرير)
//  10) BookClosing           → خاتمة CTA بنفس النمط الداكن
// =============================================================================

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

// أيقونات تتغيّر بحسب موقع المحور (للزينة فقط)
const STRUCTURE_ICONS = [
  "fa-cube",
  "fa-cubes",
  "fa-layer-group",
  "fa-chart-line",
  "fa-database",
];

const AUDIENCE_ICONS = [
  "fa-graduation-cap",
  "fa-user-tie",
  "fa-briefcase",
  "fa-school",
  "fa-chart-pie",
];

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
            {t("pub.index.breadcrumbHome")}
          </Link>
          <span className="text-slate-400" aria-hidden>
            /
          </span>
          <Link
            href="/publications"
            className="font-semibold transition-colors hover:text-brand-600 dark:hover:text-brand-300"
          >
            {t("pub.index.breadcrumbPub")}
          </Link>
          <span className="text-slate-400" aria-hidden>
            /
          </span>
          <span className="font-medium text-slate-900 dark:text-white">
            {t(`pub.${pk}.title`)}
          </span>
        </div>
      </nav>

      {/* (2) ───── BookHero — غلاف + معلومات + CTAs ───── */}
      <section className="relative overflow-hidden border-b border-slate-200/70 bg-gradient-to-b from-white to-slate-50 py-14 dark:border-white/10 dark:from-ink-900 dark:to-ink-950 sm:py-20">
        {/* خلفيات ضوئية decorative */}
        <div
          className="pointer-events-none absolute -top-32 end-[-15%] h-[26rem] w-[26rem] rounded-full bg-brand-500/10 blur-3xl dark:bg-brand-400/10"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-40 start-[-10%] h-[24rem] w-[24rem] rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-400/10"
          aria-hidden
        />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          {/* الغلاف */}
          <div
            className="relative mx-auto aspect-[3/4] w-full max-w-sm lg:col-span-5"
            data-aos="fade-up"
          >
            {/* glow halo */}
            <div
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-500/30 via-cyan-400/20 to-brand-500/30 opacity-50 blur-2xl"
              aria-hidden
            />
            <div className="relative h-full min-h-[280px] overflow-hidden rounded-3xl border border-slate-200/80 shadow-2xl dark:border-white/10">
              <PublicAssetImage
                src={book.cover}
                alt=""
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                sizes="(max-width: 1024px) 80vw, 400px"
                priority
              />
              {/* corner badge */}
              <div className="absolute start-4 top-4">
                <span className="inline-flex rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-brand-700 shadow-sm dark:bg-ink-950/90 dark:text-brand-300">
                  {t(`pub.${pk}.badge`)}
                </span>
              </div>
            </div>
          </div>

          {/* المعلومات */}
          <div className="lg:col-span-7">
            <h1
              className="text-balance text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-[2.5rem]"
              data-aos="fade-up"
              data-aos-delay="60"
            >
              {t(`pub.${pk}.title`)}
            </h1>
            <p
              className="mt-3 text-lg font-medium text-brand-700 dark:text-brand-300 sm:text-xl"
              data-aos="fade-up"
              data-aos-delay="120"
            >
              {t(`pub.${pk}.subtitle`)}
            </p>

            <span
              className="mt-5 block h-px w-20 bg-gradient-to-r from-brand-500/70 via-brand-400/50 to-transparent"
              data-aos="zoom-in"
              data-aos-delay="160"
            />

            <p
              className="mt-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base"
              data-aos="fade-up"
              data-aos-delay="180"
            >
              <i
                className="fa-solid fa-pen-nib me-2 text-brand-600 dark:text-brand-400"
                aria-hidden
              />
              {t(`pub.${pk}.authors`)}
            </p>
            {book.slug === "internal-audit" ? (
              <p
                className="mt-2 text-xs text-slate-500 dark:text-slate-500"
                data-aos="fade-up"
                data-aos-delay="220"
              >
                {t("pub.internal.bylineOriginal")}
              </p>
            ) : null}

            {!isSoon ? (
              <p
                className="mt-5 rounded-xl border border-amber-200/80 bg-amber-50/80 px-4 py-3 text-xs leading-relaxed text-amber-950 dark:border-amber-500/25 dark:bg-amber-500/10 dark:text-amber-100"
                data-aos="fade-up"
                data-aos-delay="240"
              >
                <i className="fa-solid fa-circle-info me-2" aria-hidden />
                {t(`pub.${pk}.priceDisclaimer`)}
              </p>
            ) : null}

            <p
              className="mt-3 text-xs text-slate-600 dark:text-slate-400"
              data-aos="fade-up"
              data-aos-delay="280"
            >
              <i className="fa-solid fa-location-dot me-2" aria-hidden />
              {t("pub.index.egyptOrderHint")}
            </p>

            <div
              className="mt-8 flex flex-wrap gap-3"
              data-aos="fade-up"
              data-aos-delay="320"
            >
              {!isSoon ? (
                <Link
                  href={`/publications/order?book=${book.slug}`}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-brand-500 to-brand-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand-700/20 transition-all hover:brightness-110 hover:shadow-xl dark:text-ink-950"
                >
                  <i className="fa-solid fa-cart-shopping" aria-hidden />
                  <span>{t(`pub.${pk}.orderCta`)}</span>
                </Link>
              ) : null}
              <a
                href={book.referenceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300/90 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:border-brand-400/60 hover:bg-slate-50 dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
              >
                <span>{t(`pub.${pk}.externalDetails`)}</span>
                <i
                  className="fa-solid fa-arrow-up-right-from-square text-xs"
                  aria-hidden
                />
              </a>
            </div>

            {!isSoon ? (
              <p
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-3 py-1.5 text-xs font-medium text-slate-500 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-400"
                data-aos="fade-up"
                data-aos-delay="380"
              >
                <i
                  className="fa-solid fa-handshake text-brand-600 dark:text-brand-400"
                  aria-hidden
                />
                {t(`pub.${pk}.partnerPharos`)}
              </p>
            ) : null}
          </div>
        </div>
      </section>

      {/* (3) ───── BookVideo — يظهر فقط إذا وُجد youtubeId ───── */}
      {!isSoon && book.youtubeId ? (
        <BookVideo youtubeId={book.youtubeId} pk={pk} />
      ) : null}

      {isSoon ? (
        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-center text-base leading-relaxed text-slate-700 dark:text-slate-300">
            {t("pub.corruption.body")}
          </p>
        </section>
      ) : (
        <>
          {/* (4) ───── AboutBook — عن الكتاب ───── */}
          <section className="border-b border-slate-200/70 bg-white py-14 dark:border-white/10 dark:bg-ink-900 sm:py-20">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <p
                  className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400"
                  data-aos="fade-up"
                >
                  <i className="fa-solid fa-book-open me-2" aria-hidden />
                  {locale === "en" ? "Overview" : "نظرة عامة"}
                </p>
                <h2
                  className="mt-3 text-balance text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl"
                  data-aos="fade-up"
                  data-aos-delay="60"
                >
                  {t(`pub.${pk}.aboutTitle`)}
                </h2>
                <span
                  className="mx-auto mt-5 block h-px w-20 bg-gradient-to-r from-transparent via-brand-500/70 to-transparent"
                  data-aos="zoom-in"
                  data-aos-delay="120"
                />
              </div>
              <p
                className="mt-8 text-justify text-base leading-loose text-slate-700 dark:text-slate-300 sm:text-lg"
                style={{ textJustify: "inter-word" }}
                data-aos="fade-up"
                data-aos-delay="160"
              >
                {t(`pub.${pk}.aboutBody`)}
              </p>
            </div>
          </section>

          {/* (5) ───── BookStructure — بنية الكتاب ───── */}
          {pairs.length > 0 ? (
            <section className="border-b border-slate-200/70 bg-slate-50 py-14 dark:border-white/10 dark:bg-ink-950 sm:py-20">
              <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <p
                    className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400"
                    data-aos="fade-up"
                  >
                    <i className="fa-solid fa-list-ol me-2" aria-hidden />
                    {locale === "en" ? "Structure" : "بنية الإصدار"}
                  </p>
                  <h2
                    className="mt-3 text-balance text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl"
                    data-aos="fade-up"
                    data-aos-delay="60"
                  >
                    {t(`pub.${pk}.structureTitle`)}
                  </h2>
                </div>

                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {pairs.map(([kt, kd], i) => (
                    <article
                      key={kt}
                      className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:shadow-lg dark:border-white/10 dark:bg-ink-900/70 dark:hover:border-brand-400/40"
                      data-aos="fade-up"
                      data-aos-delay={String(80 + i * 60)}
                    >
                      {/* numbered watermark */}
                      <span
                        className="pointer-events-none absolute -top-3 end-3 select-none text-5xl font-black leading-none text-slate-100 transition-colors duration-300 group-hover:text-brand-100 dark:text-white/5 dark:group-hover:text-brand-400/15"
                        aria-hidden
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <div className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-cyan-500 text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <i
                          className={`fa-solid ${STRUCTURE_ICONS[i % STRUCTURE_ICONS.length]} text-base`}
                          aria-hidden
                        />
                      </div>
                      <h3 className="relative mt-4 text-base font-bold text-slate-900 transition-colors duration-300 group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-300">
                        {t(kt)}
                      </h3>
                      <p className="relative mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {t(kd)}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          {/* (6) ───── BookAuthors — المؤلفون ───── */}
          <section className="border-b border-slate-200/70 bg-white py-14 dark:border-white/10 dark:bg-ink-900 sm:py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <p
                  className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400"
                  data-aos="fade-up"
                >
                  <i className="fa-solid fa-pen-nib me-2" aria-hidden />
                  {locale === "en" ? "Authors" : "المؤلفون"}
                </p>
                <h2
                  className="mt-3 text-balance text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl"
                  data-aos="fade-up"
                  data-aos-delay="60"
                >
                  {t("boardPage.membersTitle")}
                </h2>
                <span
                  className="mx-auto mt-5 block h-px w-20 bg-gradient-to-r from-transparent via-brand-500/70 to-transparent"
                  data-aos="zoom-in"
                  data-aos-delay="120"
                />
              </div>

              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {authors.map((a, i) => (
                  <article
                    key={a.name}
                    className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:shadow-xl dark:border-white/10 dark:bg-ink-950/50 dark:hover:border-brand-400/40"
                    data-aos="fade-up"
                    data-aos-delay={String(80 + i * 80)}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-200/60 dark:bg-ink-900">
                      <PublicAssetImage
                        src={a.image}
                        alt=""
                        className={
                          a.imagePlaceholder
                            ? "object-contain p-4"
                            : "object-cover transition-transform duration-700 group-hover:scale-105"
                        }
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      {/* gradient overlay on hover */}
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        aria-hidden
                      />
                    </div>
                    <div className="p-5 text-start">
                      <p className="font-bold text-slate-900 transition-colors group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-300">
                        {a.name}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {a.role}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* (7) ───── BookAudience — الجمهور المستهدف ───── */}
          {audKeys.length > 0 ? (
            <section className="border-b border-slate-200/70 bg-slate-50 py-14 dark:border-white/10 dark:bg-ink-950 sm:py-20">
              <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <p
                    className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400"
                    data-aos="fade-up"
                  >
                    <i className="fa-solid fa-users me-2" aria-hidden />
                    {locale === "en" ? "Audience" : "الجمهور"}
                  </p>
                  <h2
                    className="mt-3 text-balance text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl"
                    data-aos="fade-up"
                    data-aos-delay="60"
                  >
                    {t(`pub.${pk}.audienceTitle`)}
                  </h2>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {audKeys.map((k, i) => (
                    <div
                      key={k}
                      className="group flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/40 hover:shadow-md dark:border-white/10 dark:bg-ink-900/60 dark:hover:border-brand-400/40"
                      data-aos="fade-up"
                      data-aos-delay={String(80 + i * 60)}
                    >
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 dark:bg-brand-500/15 dark:text-brand-300">
                        <i
                          className={`fa-solid ${AUDIENCE_ICONS[i % AUDIENCE_ICONS.length]}`}
                          aria-hidden
                        />
                      </span>
                      <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                        {t(k)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          {/* (8) ───── BookQuote — اقتباس مميّز ───── */}
          <section className="border-b border-slate-200/70 bg-white py-14 dark:border-white/10 dark:bg-ink-900 sm:py-16">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <blockquote
                className="relative overflow-hidden rounded-3xl border border-brand-500/20 bg-gradient-to-br from-brand-500/5 via-cyan-500/5 to-brand-500/5 p-8 text-lg font-medium leading-relaxed text-slate-800 shadow-sm dark:border-brand-400/20 dark:from-brand-500/10 dark:via-cyan-500/10 dark:to-brand-500/10 dark:text-slate-100 sm:p-10"
                data-aos="fade-up"
              >
                <i
                  className="fa-solid fa-quote-right absolute end-6 top-6 text-3xl text-brand-300/40 dark:text-brand-400/30"
                  aria-hidden
                />
                <p className="relative">{t(`pub.${pk}.quote`)}</p>
              </blockquote>
              <p
                className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-500"
                data-aos="fade-up"
                data-aos-delay="80"
              >
                {t(`pub.${pk}.quoteCitation`)}
              </p>
            </div>
          </section>

          {/* (9) ───── BookGalleries — معارض الإصدار ───── */}
          {(book.galleries.cairo.length > 0 ||
            book.galleries.riyadh.length > 0 ||
            book.galleries.jarir.length > 0) && (
            <section className="space-y-16 border-b border-slate-200/70 bg-slate-50 py-14 dark:border-white/10 dark:bg-ink-950 sm:py-20">
              <GalleryBlock
                title={t(`pub.${pk}.cairoTitle`)}
                paths={book.galleries.cairo}
                icon="fa-pyramid"
              />
              <GalleryBlock
                title={t(`pub.${pk}.riyadhTitle`)}
                paths={book.galleries.riyadh}
                icon="fa-mosque"
              />
              {book.slug === "internal-audit" ? (
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                  <p className="rounded-2xl border border-slate-200/90 bg-white/90 px-5 py-4 text-sm leading-relaxed text-slate-700 shadow-sm dark:border-white/10 dark:bg-ink-900/70 dark:text-slate-300">
                    <i
                      className="fa-solid fa-circle-info me-2 text-brand-600 dark:text-brand-400"
                      aria-hidden
                    />
                    {t("pub.internal.jarirClarification")}
                  </p>
                </div>
              ) : null}
              {book.galleries.jarir.length > 0 ? (
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                  <div className="flex items-center gap-3" data-aos="fade-up">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-cyan-500 text-white shadow-md">
                      <i className="fa-solid fa-store text-sm" aria-hidden />
                    </span>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
                      {t(`pub.${pk}.jarirTitle`)}
                    </h2>
                  </div>
                  <p
                    className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                    data-aos="fade-up"
                    data-aos-delay="60"
                  >
                    {t(`pub.${pk}.jarirBody`)}
                  </p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {book.galleries.jarir.map((p, i) => (
                      <div
                        key={p}
                        className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10"
                        data-aos="fade-up"
                        data-aos-delay={String(80 + i * 60)}
                      >
                        <PublicAssetImage
                          src={p}
                          alt=""
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 33vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </section>
          )}

          {/* (10) ───── BookClosing — خاتمة CTA بنفس النمط الداكن ───── */}
          <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-800 to-ink-950 py-20 sm:py-24">
            {/* هالات ضوئية */}
            <div
              className="pointer-events-none absolute -top-40 -end-40 h-[28rem] w-[28rem] rounded-full bg-brand-400/20 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-40 -start-40 h-[28rem] w-[28rem] rounded-full bg-cyan-400/15 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]"
              aria-hidden
            />

            <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
              <div
                className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur-sm"
                data-aos="zoom-in"
              >
                <i className="fa-solid fa-book-bookmark text-2xl text-amber-300" aria-hidden />
              </div>

              <h2
                className="mt-8 text-balance text-2xl font-bold leading-relaxed text-white sm:text-3xl"
                data-aos="fade-up"
                data-aos-delay="80"
              >
                {t(`pub.${pk}.title`)}
              </h2>

              <span
                className="mx-auto mt-6 block h-px w-24 bg-gradient-to-r from-transparent via-amber-300/70 to-transparent"
                data-aos="zoom-in"
                data-aos-delay="140"
              />

              <p
                className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85"
                data-aos="fade-up"
                data-aos-delay="180"
              >
                {t("pub.index.egyptOrderHint")}
              </p>

              <div
                className="mt-10 flex flex-wrap items-center justify-center gap-4"
                data-aos="fade-up"
                data-aos-delay="220"
              >
                <Link
                  href={`/publications/order?book=${book.slug}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-brand-700 shadow-xl transition-all hover:-translate-y-0.5 hover:bg-amber-50 hover:text-brand-800 hover:shadow-2xl"
                >
                  <i className="fa-solid fa-cart-shopping" aria-hidden />
                  <span>{t(`pub.${pk}.orderCta`)}</span>
                </Link>
                <Link
                  href="/publications"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/20"
                >
                  <i className="fa-solid fa-arrow-left" aria-hidden />
                  <span>{t("pub.index.breadcrumbPub")}</span>
                </Link>
              </div>

              <p
                className="mx-auto mt-10 max-w-2xl text-xs leading-relaxed text-white/60"
                data-aos="fade-up"
                data-aos-delay="280"
              >
                {t("pub.index.jarirDisclaimer")}
              </p>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

// =============================================================================
// GalleryBlock — كتلة معرض صور (تستخدم في معارض القاهرة والرياض)
// =============================================================================
function GalleryBlock({
  title,
  paths,
  icon,
}: {
  title: string;
  paths: string[];
  icon?: string;
}) {
  if (paths.length === 0) return null;
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3" data-aos="fade-up">
        {icon ? (
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-cyan-500 text-white shadow-md">
            <i className={`fa-solid ${icon} text-sm`} aria-hidden />
          </span>
        ) : null}
        <h2 className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
          {title}
        </h2>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {paths.map((p, i) => (
          <div
            key={p}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10"
            data-aos="fade-up"
            data-aos-delay={String(80 + i * 60)}
          >
            <PublicAssetImage
              src={p}
              alt=""
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
