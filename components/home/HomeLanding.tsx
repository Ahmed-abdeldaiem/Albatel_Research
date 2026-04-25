"use client";

import Image from "next/image";
import Link from "next/link";
import { ContactQuickGrid } from "@/components/contact/ContactQuickGrid";
import { useLanguage } from "@/contexts/LanguageContext";
import { PublicAssetImage } from "@/components/publications/PublicAssetImage";
import { BOOKS_HOME_PROMO_IMAGE, SECTION_IMAGES } from "@/lib/public-assets";
import { siteImages } from "@/lib/site-images";

const cards = (t: (k: string) => string) =>
  [
    {
      href: "/about",
      title: t("homeLanding.cardAbout"),
      desc: t("homeLanding.cardAboutDesc"),
      img: SECTION_IMAGES[1],
    },
    {
      href: "/board",
      title: t("homeLanding.cardBoard"),
      desc: t("homeLanding.cardBoardDesc"),
      img: SECTION_IMAGES[2],
    },
    {
      href: "/research-committee",
      title: t("homeLanding.cardResearch"),
      desc: t("homeLanding.cardResearchDesc"),
      img: SECTION_IMAGES[3],
    },
    {
      href: "/translation-committee",
      title: t("homeLanding.cardTranslation"),
      desc: t("homeLanding.cardTranslationDesc"),
      img: siteImages.cardTranslation,
    },
    {
      href: "/publications",
      title: t("homeLanding.cardPublications"),
      desc: t("homeLanding.cardPublicationsDesc"),
      img: siteImages.pagePublications,
    },
    {
      href: "/contact",
      title: t("homeLanding.cardContact"),
      desc: t("homeLanding.cardContactDesc"),
      img: siteImages.cardContact,
    },
  ] as const;

export function HomeLanding() {
  const { t, locale } = useLanguage();
  const items = cards(t);
  const heroBg = SECTION_IMAGES[0];

  return (
    <div>
      <section className="relative min-h-[calc(100svh-4.25rem)] overflow-hidden border-b border-slate-800/30 dark:border-white/10">
        <div className="absolute inset-0">
          <Image
            src={heroBg}
            alt=""
            fill
            priority
            className="object-cover object-center brightness-[0.55] saturate-[1.05] dark:brightness-[0.48]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/88 to-slate-900/35 dark:from-black dark:via-slate-950/92 dark:to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_0%,rgba(14,165,233,0.12),transparent_55%)] dark:bg-[radial-gradient(ellipse_120%_80%_at_50%_0%,rgba(56,189,248,0.08),transparent_50%)]" />
        </div>
        <div className="relative mx-auto flex min-h-[calc(100svh-4.25rem)] max-w-6xl flex-col justify-end px-4 pb-14 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-24">
          <div className="max-w-3xl text-start" data-aos="fade-up">
            <p
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/95 shadow-sm backdrop-blur-md sm:text-sm"
              data-aos="fade-down"
              data-aos-delay="0"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400 shadow-[0_0_10px_rgba(56,189,248,0.7)]" />
              {t("hero.badge")}
            </p>
            <h1
              className="mt-5 text-pretty text-3xl font-extrabold leading-snug tracking-tight text-white sm:mt-6 sm:text-4xl sm:leading-[1.2] md:text-5xl md:leading-[1.18] lg:text-[3.25rem]"
              data-aos="fade-up"
              data-aos-delay="60"
            >
              {t("hero.titleLead") ? (
                <>
                  <span className="text-white/95">{t("hero.titleLead")} </span>
                  <span className="box-decoration-clone bg-gradient-to-l from-brand-300 via-brand-400 to-cyan-300 bg-clip-text text-transparent">
                    {t("hero.titleAccent")}
                  </span>
                  <br />
                  <span className="text-white">{t("hero.titleRest")}</span>
                </>
              ) : (
                <>
                  <span className="box-decoration-clone bg-gradient-to-l from-brand-300 via-brand-400 to-cyan-300 bg-clip-text text-transparent">
                    {t("hero.titleAccent")}
                  </span>
                  <br />
                  <span className="text-white">{t("hero.titleRest")}</span>
                </>
              )}
            </h1>
            <p
              className="mt-5 max-w-2xl text-pretty text-base font-medium leading-relaxed text-slate-200/95 sm:mt-6 sm:text-lg"
              data-aos="fade-up"
              data-aos-delay="120"
              lang={locale === "en" ? "en" : "ar"}
            >
              {t("homeLanding.intro")}
            </p>
            <p
              className="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-slate-300/90 sm:mt-4"
              data-aos="fade-up"
              data-aos-delay="160"
              lang={locale === "en" ? "en" : "ar"}
            >
              {t("homeLanding.introExtra")}
            </p>
            <div
              className="mt-8 flex flex-wrap gap-3 sm:mt-10"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-l from-brand-500 to-brand-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand-900/40 transition hover:brightness-110 dark:from-brand-400 dark:to-brand-500 dark:text-ink-950"
              >
                <i
                  className={`fa-solid fa-paper-plane text-xs ${locale === "ar" ? "ms-2" : "me-2"}`}
                  aria-hidden
                />
                {t("hero.ctaContact")}
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-xl border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition hover:border-white/55 hover:bg-white/15"
              >
                <i
                  className={`fa-solid fa-circle-info text-xs ${locale === "ar" ? "ms-2" : "me-2"}`}
                  aria-hidden
                />
                {t("hero.ctaAbout")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/70 bg-slate-50 py-16 dark:border-white/5 dark:bg-ink-950 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2
            className="text-center text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400"
            data-aos="fade-up"
          >
            {t("homeLanding.explore")}
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((c, i) => (
              <Link
                key={c.href}
                href={c.href}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm ring-1 ring-slate-200/40 transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-ink-900/60 dark:ring-white/5 dark:hover:border-brand-500/30"
                data-aos="fade-up"
                data-aos-delay={String(80 + i * 60)}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={c.img}
                    alt=""
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent dark:from-black/90" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-start text-white">
                    <h3 className="text-lg font-bold">{c.title}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-white/85">
                      {c.desc}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-brand-200">
                      {t("homeLanding.ctaPages")}
                      <i
                        className={`fa-solid fa-arrow-${locale === "ar" ? "left" : "right"} text-[0.65rem]`}
                        aria-hidden
                      />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/70 bg-gradient-to-b from-slate-100 to-white py-16 dark:border-white/5 dark:from-ink-950 dark:to-ink-900 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div
            className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-slate-200/80 shadow-lg ring-1 ring-slate-200/50 dark:border-white/10 dark:ring-white/10"
            data-aos="fade-up"
          >
            <PublicAssetImage
              src={BOOKS_HOME_PROMO_IMAGE}
              alt=""
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
              {t("homeLanding.publicationsBandKicker")}
            </p>
            <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-900 dark:text-white sm:text-3xl">
              {t("homeLanding.publicationsBandTitle")}
            </h2>
            <p
              className="mt-4 text-pretty leading-relaxed text-slate-600 dark:text-slate-400"
              lang={locale === "en" ? "en" : "ar"}
            >
              {t("homeLanding.publicationsBandBody")}
            </p>
            <Link
              href="/publications"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-l from-brand-500 to-brand-600 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:brightness-110 dark:text-ink-950"
            >
              {t("homeLanding.publicationsBandCta")}
              <i
                className={`fa-solid fa-arrow-${locale === "ar" ? "left" : "right"} text-xs`}
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/70 bg-white py-16 dark:border-white/5 dark:bg-ink-900 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2
            className="text-center text-2xl font-bold text-slate-900 dark:text-white"
            data-aos="fade-up"
          >
            {t("homeLanding.valuesTitle")}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { t: t("homeLanding.v1t"), d: t("homeLanding.v1d"), i: "fa-compass-drafting" },
              { t: t("homeLanding.v2t"), d: t("homeLanding.v2d"), i: "fa-language" },
              { t: t("homeLanding.v3t"), d: t("homeLanding.v3d"), i: "fa-hand-holding-heart" },
            ].map((x, idx) => (
              <div
                key={x.t}
                className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-6 dark:border-white/10 dark:bg-ink-950/50"
                data-aos="fade-up"
                data-aos-delay={String(idx * 90)}
              >
                <i
                  className={`fa-solid ${x.i} text-2xl text-brand-600 dark:text-brand-400`}
                  aria-hidden
                />
                <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
                  {x.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {x.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/70 bg-slate-50 py-16 dark:border-white/5 dark:bg-ink-950 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div
            className="relative aspect-[16/11] overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200/60 dark:ring-white/10"
            data-aos="fade-up"
          >
            <Image
              src={SECTION_IMAGES[1]}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              {t("homeLanding.split1Title")}
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-slate-600 dark:text-slate-400">
              {t("homeLanding.split1Body")}
            </p>
            <Link
              href="/research-committee"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
            >
              {t("nav.research")}
              <i
                className={`fa-solid fa-arrow-${locale === "ar" ? "left" : "right"} text-xs`}
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/70 bg-white py-16 dark:border-white/5 dark:bg-ink-900 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div
            className="relative aspect-[16/11] overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200/60 dark:ring-white/10 lg:order-2"
            data-aos="fade-up"
          >
            <Image
              src={SECTION_IMAGES[2]}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="lg:order-1" data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              {t("homeLanding.split2Title")}
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-slate-600 dark:text-slate-400">
              {t("homeLanding.split2Body")}
            </p>
            <Link
              href="/translation-committee"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
            >
              {t("nav.translation")}
              <i
                className={`fa-solid fa-arrow-${locale === "ar" ? "left" : "right"} text-xs`}
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative border-b border-slate-200/70 py-20 dark:border-white/5 sm:py-24">
        <div className="absolute inset-0">
          <Image
            src={SECTION_IMAGES[3]}
            alt=""
            fill
            className="object-cover brightness-[0.4] dark:brightness-[0.35]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/92 via-ink-950/75 to-brand-900/55" />
        </div>
        <div
          className="relative mx-auto max-w-3xl px-4 text-center sm:px-6"
          data-aos="zoom-in"
        >
          <p className="text-xl font-medium leading-relaxed text-white sm:text-2xl">
            {t("homeLanding.bannerQuote")}
          </p>
          <p className="mt-4 text-sm text-white/75">{t("homeLanding.bannerCaption")}</p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-slate-50 py-14 dark:from-ink-900 dark:to-ink-950">
        <div
          className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-3 sm:px-6 lg:px-8"
          data-aos="fade-up"
        >
          {[
            { title: t("hero.stat1t"), sub: t("hero.stat1s"), i: "fa-book-open" },
            { title: t("hero.stat2t"), sub: t("hero.stat2s"), i: "fa-language" },
            { title: t("hero.stat3t"), sub: t("hero.stat3s"), i: "fa-earth-africa" },
          ].map((s) => (
            <div
              key={s.sub}
              className="rounded-2xl border border-slate-200/80 bg-white/90 p-5 text-center shadow-sm dark:border-white/10 dark:bg-ink-900/50"
            >
              <i
                className={`fa-solid ${s.i} text-2xl text-brand-600 dark:text-brand-400`}
                aria-hidden
              />
              <p className="mt-3 text-lg font-bold text-slate-900 dark:text-white">
                {s.title}
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="home-contact"
        className="border-t border-slate-200/70 bg-slate-100 py-16 dark:border-white/5 dark:bg-ink-950 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div data-aos="fade-up">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {t("homeLanding.homeContactTitle")}
              </h2>
              <p className="mt-3 text-pretty leading-relaxed text-slate-600 dark:text-slate-400">
                {t("homeLanding.homeContactBody")}
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-brand-500 to-brand-600 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:brightness-110 dark:text-ink-950"
              >
                {t("homeLanding.homeContactCta")}
                <i
                  className={`fa-solid fa-arrow-${locale === "ar" ? "left" : "right"} text-xs`}
                  aria-hidden
                />
              </Link>
            </div>
            <div data-aos="fade-up" data-aos-delay="120">
              <ContactQuickGrid />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
