"use client";

import { CommitteeHighlights } from "@/components/committees/CommitteeHighlights";
import { PageHero } from "@/components/layout/PageHero";
import { TranslationRequestForm } from "@/components/translation/TranslationRequestForm";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteImages } from "@/lib/site-images";

// =============================================================================
// صفحة /translation-committee — لجنة الترجمة والتعريب
// تتكوّن من ثمانية أقسام مرتبة لتجربة متكاملة، بنفس بنية صفحة لجنة البحوث:
//   1) PageHero          → الشريط العلوي
//   2) ManifestoSection  → بيان منهجية اللجنة + 3 مؤشرات للنطاق العربي
//   3) Highlights        → القيم الأربع (موجود مسبقًا)
//   4) MethodologyTimeline → خمس خطوات لمسار الترجمة
//   5) TranslationDomains  → ثمانية مجالات ترجمة متخصصة
//   6) TranslationFormSection → نموذج طلب الترجمة (يرسل بريدًا للمؤسسة)
//   7) FAQSection        → 6 أسئلة شائعة قابلة للطيّ
//   8) ClosingQuote      → اقتباس ختامي
// =============================================================================

export default function TranslationCommitteePage() {
  const { t } = useLanguage();

  // القيم الأربع — موجودة مسبقًا (CommitteeHighlights)
  const items = [
    { title: t("translationPage.b1t"), desc: t("translationPage.b1d"), icon: "fa-spell-check" },
    { title: t("translationPage.b2t"), desc: t("translationPage.b2d"), icon: "fa-pen-fancy" },
    { title: t("translationPage.b3t"), desc: t("translationPage.b3d"), icon: "fa-layer-group" },
    { title: t("translationPage.b4t"), desc: t("translationPage.b4d"), icon: "fa-earth-americas" },
  ];

  return (
    <>
      {/* (1) ───── الشريط العلوي ───── */}
      <PageHero
        kicker={t("translationPage.kicker")}
        title={t("translationPage.title")}
        subtitle={t("translationPage.subtitle")}
        imageSrc={siteImages.pageTranslation}
        imageAlt=""
      />

      {/* (2) ───── بيان المنهجية + النطاق العربي ───── */}
      <ManifestoSection />

      {/* (3) ───── القيم الأربع ───── */}
      <CommitteeHighlights items={items} />

      {/* (4) ───── خط زمني لمسار الترجمة ───── */}
      <MethodologyTimeline />

      {/* (5) ───── مجالات الترجمة المتخصصة ───── */}
      <TranslationDomains />

      {/* (6) ───── نموذج طلب الترجمة (الفورم) ───── */}
      <TranslationFormSection />

      {/* (7) ───── أسئلة شائعة (FAQ) ───── */}
      <FAQSection />

      {/* (8) ───── اقتباس ختامي ───── */}
      <ClosingQuote />
    </>
  );
}

// =============================================================================
// (2) قسم بيان المنهجية — يبرز فلسفة لجنة الترجمة + 3 مؤشرات لنطاق المؤسسة العربي
// =============================================================================
function ManifestoSection() {
  const { t, locale } = useLanguage();
  const reaches = [
    { t: t("translationPage.reachT1"), d: t("translationPage.reachD1"), icon: "fa-arrow-right-from-bracket" },
    { t: t("translationPage.reachT2"), d: t("translationPage.reachD2"), icon: "fa-arrow-right-to-bracket" },
    { t: t("translationPage.reachT3"), d: t("translationPage.reachD3"), icon: "fa-handshake" },
  ];

  return (
    <section className="relative overflow-hidden border-t border-slate-200/60 bg-gradient-to-b from-slate-50 to-white py-16 dark:border-white/5 dark:from-ink-950 dark:to-ink-900 sm:py-20">
      <div
        className="pointer-events-none absolute -top-32 end-[-15%] h-[26rem] w-[26rem] rounded-full bg-brand-500/10 blur-3xl dark:bg-brand-400/10"
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p
          className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400 sm:text-sm"
          data-aos="fade-up"
        >
          {t("translationPage.manifestoKicker")}
        </p>
        <h2
          className="mt-3 py-3 text-balance bg-gradient-to-l from-brand-600 via-brand-500 to-cyan-500 bg-clip-text text-3xl font-extrabold leading-tight text-transparent dark:from-brand-300 dark:via-brand-400 dark:to-cyan-300 sm:text-4xl lg:text-[2.75rem]"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          {t("translationPage.manifestoTitle")}
        </h2>
        <span
          className="mx-auto mt-5 block h-px w-20 bg-gradient-to-r from-transparent via-brand-500/70 to-transparent"
          data-aos="zoom-in"
          data-aos-delay="120"
        />
        <p
          className="mx-auto mt-6 max-w-3xl text-justify text-base leading-loose text-slate-700 dark:text-slate-300 sm:text-lg"
          style={{ textJustify: "inter-word" }}
          lang={locale === "en" ? "en" : "ar"}
          data-aos="fade-up"
          data-aos-delay="160"
        >
          {t("translationPage.manifestoBody")}
        </p>

        {/* مؤشرات النطاق */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {reaches.map((r, i) => (
            <div
              key={r.t}
              className="group rounded-2xl border border-slate-200/80 bg-white/90 p-5 text-start shadow-sm transition hover:-translate-y-0.5 hover:border-brand-400/40 hover:shadow-md dark:border-white/10 dark:bg-ink-900/50 dark:hover:border-brand-500/30"
              data-aos="fade-up"
              data-aos-delay={String(200 + i * 80)}
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/15 to-brand-500/5 text-brand-600 ring-1 ring-brand-500/15 transition group-hover:scale-110 dark:from-brand-400/15 dark:to-brand-400/5 dark:text-brand-400">
                <i className={`fa-solid ${r.icon}`} aria-hidden />
              </span>
              <h3 className="mt-3 text-base font-bold text-slate-900 dark:text-white">
                {r.t}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {r.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// (4) خط زمني — مسار الترجمة في المؤسسة (5 خطوات)
// =============================================================================
function MethodologyTimeline() {
  const { t } = useLanguage();
  const steps = [
    { t: t("translationPage.step1T"), d: t("translationPage.step1D"), icon: "fa-inbox" },
    { t: t("translationPage.step2T"), d: t("translationPage.step2D"), icon: "fa-spell-check" },
    { t: t("translationPage.step3T"), d: t("translationPage.step3D"), icon: "fa-pen-fancy" },
    { t: t("translationPage.step4T"), d: t("translationPage.step4D"), icon: "fa-magnifying-glass" },
    { t: t("translationPage.step5T"), d: t("translationPage.step5D"), icon: "fa-paper-plane" },
  ];

  return (
    <section className="border-t border-slate-200/60 bg-slate-100/80 py-16 dark:border-white/5 dark:bg-ink-900/40 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400 sm:text-sm">
            {t("translationPage.methodologyKicker")}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
            {t("translationPage.methodologyTitle")}
          </h2>
          <span className="mx-auto mt-4 block h-px w-16 bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />
          <p className="mt-4 text-balance text-slate-600 dark:text-slate-400">
            {t("translationPage.methodologyIntro")}
          </p>
        </div>

        <div className="relative mt-14">
          <div
            className="absolute inset-x-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent lg:block"
            aria-hidden
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {steps.map((s, i) => (
              <div
                key={s.t}
                className="group relative flex flex-col items-center text-center"
                data-aos="fade-up"
                data-aos-delay={String(i * 100)}
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-brand-500/20 blur-xl transition group-hover:bg-brand-500/40" />
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand-500/30 bg-white text-base font-extrabold text-brand-700 shadow-md transition duration-500 group-hover:scale-110 group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white dark:border-brand-400/40 dark:bg-ink-900 dark:text-brand-300 dark:group-hover:bg-brand-500 dark:group-hover:text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <i
                  className={`fa-solid ${s.icon} mt-4 text-2xl text-brand-600/80 transition group-hover:text-brand-600 dark:text-brand-400/80 dark:group-hover:text-brand-300`}
                  aria-hidden
                />
                <h3 className="mt-3 text-balance text-base font-bold text-slate-900 dark:text-white">
                  {s.t}
                </h3>
                <p className="mt-2 max-w-[16rem] text-balance text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// (5) مجالات الترجمة المتخصصة — 8 ميادين في شبكة 4×2 (lg) → 2×4 (sm)
// =============================================================================
function TranslationDomains() {
  const { t } = useLanguage();
  const areas = [
    { t: t("translationPage.area1T"), d: t("translationPage.area1D"), icon: "fa-graduation-cap" },
    { t: t("translationPage.area2T"), d: t("translationPage.area2D"), icon: "fa-gavel" },
    { t: t("translationPage.area3T"), d: t("translationPage.area3D"), icon: "fa-chart-line" },
    { t: t("translationPage.area4T"), d: t("translationPage.area4D"), icon: "fa-book-open" },
    { t: t("translationPage.area5T"), d: t("translationPage.area5D"), icon: "fa-mosque" },
    { t: t("translationPage.area6T"), d: t("translationPage.area6D"), icon: "fa-stethoscope" },
    { t: t("translationPage.area7T"), d: t("translationPage.area7D"), icon: "fa-microchip" },
    { t: t("translationPage.area8T"), d: t("translationPage.area8D"), icon: "fa-circle-nodes" },
  ];

  return (
    <section className="border-t border-slate-200/60 bg-white py-16 dark:border-white/5 dark:bg-ink-950 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400 sm:text-sm">
            {t("translationPage.areasKicker")}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
            {t("translationPage.areasTitle")}
          </h2>
          <span className="mx-auto mt-4 block h-px w-16 bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />
          <p className="mt-4 text-balance text-slate-600 dark:text-slate-400">
            {t("translationPage.areasIntro")}
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((a, i) => (
            <article
              key={a.t}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-1 hover:border-brand-400/40 hover:shadow-lg hover:shadow-brand-500/10 dark:border-white/10 dark:bg-ink-900/50 dark:hover:border-brand-500/30"
              data-aos="fade-up"
              data-aos-delay={String(i * 80)}
            >
              <div
                className="pointer-events-none absolute -end-10 -top-10 h-32 w-32 rounded-full bg-brand-500/0 blur-2xl transition duration-500 group-hover:bg-brand-500/15"
                aria-hidden
              />
              <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/15 to-cyan-500/10 text-xl text-brand-600 ring-1 ring-brand-500/15 transition group-hover:scale-110 group-hover:ring-brand-500/40 dark:from-brand-400/15 dark:to-cyan-400/10 dark:text-brand-400">
                <i className={`fa-solid ${a.icon}`} aria-hidden />
              </span>
              <h3 className="relative mt-4 text-balance text-base font-bold text-slate-900 dark:text-white">
                {a.t}
              </h3>
              <p className="relative mt-2 text-balance text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {a.d}
              </p>
              <span className="relative mt-4 block h-0.5 w-0 bg-gradient-to-r from-brand-400 via-brand-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// (6) قسم نموذج طلب الترجمة
// =============================================================================
function TranslationFormSection() {
  return (
    <section className="relative overflow-hidden border-t border-slate-200/60 bg-gradient-to-b from-slate-100 to-slate-50 py-16 dark:border-white/5 dark:from-ink-900/40 dark:to-ink-950 sm:py-24">
      <div
        className="pointer-events-none absolute -bottom-32 start-[-10%] h-[24rem] w-[24rem] rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-400/5"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-32 end-[-10%] h-[24rem] w-[24rem] rounded-full bg-brand-500/10 blur-3xl dark:bg-brand-400/5"
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <TranslationRequestForm />
      </div>
    </section>
  );
}

// =============================================================================
// (7) FAQ — 6 أسئلة شائعة باستخدام عنصر <details>
// =============================================================================
function FAQSection() {
  const { t, locale } = useLanguage();
  const faqs = [
    { q: t("translationPage.faq1Q"), a: t("translationPage.faq1A") },
    { q: t("translationPage.faq2Q"), a: t("translationPage.faq2A") },
    { q: t("translationPage.faq3Q"), a: t("translationPage.faq3A") },
    { q: t("translationPage.faq4Q"), a: t("translationPage.faq4A") },
    { q: t("translationPage.faq5Q"), a: t("translationPage.faq5A") },
    { q: t("translationPage.faq6Q"), a: t("translationPage.faq6A") },
  ];

  return (
    <section className="border-t border-slate-200/60 bg-white py-16 dark:border-white/5 dark:bg-ink-950 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center" data-aos="fade-up">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400 sm:text-sm">
            {t("translationPage.faqKicker")}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
            {t("translationPage.faqTitle")}
          </h2>
          <span className="mx-auto mt-4 block h-px w-16 bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-slate-200/80 bg-slate-50/70 transition open:bg-white open:shadow-md dark:border-white/10 dark:bg-ink-900/30 dark:open:bg-ink-900/70"
              data-aos="fade-up"
              data-aos-delay={String(i * 60)}
            >
              <summary
                className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 text-base font-bold text-slate-900 transition hover:bg-slate-100/70 dark:text-white dark:hover:bg-ink-800/40"
                lang={locale === "en" ? "en" : "ar"}
              >
                <span className="text-balance">{f.q}</span>
                <i
                  className="fa-solid fa-plus shrink-0 text-sm text-brand-600 transition-transform duration-300 group-open:rotate-45 dark:text-brand-400"
                  aria-hidden
                />
              </summary>
              <p
                className="px-5 pb-5 pt-1 text-justify text-sm leading-loose text-slate-600 dark:text-slate-400"
                style={{ textJustify: "inter-word" }}
                lang={locale === "en" ? "en" : "ar"}
              >
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// (8) اقتباس ختامي — جملة معبّرة تختم الصفحة (نفس النمط الموحّد)
// =============================================================================
function ClosingQuote() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden border-t border-slate-200/60 bg-gradient-to-br from-brand-700 via-brand-800 to-ink-950 py-20 dark:border-white/5 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.18),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.15),transparent_50%)]"
        aria-hidden
      />

      <div
        className="relative mx-auto max-w-3xl px-4 text-center sm:px-6"
        data-aos="zoom-in"
      >
        <span
          className="pointer-events-none absolute -top-4 start-0 select-none font-serif text-[6rem] leading-none text-brand-300/25 sm:text-[8rem]"
          aria-hidden
        >
          “
        </span>
        <span
          className="pointer-events-none absolute -bottom-12 end-0 select-none font-serif text-[6rem] leading-none text-brand-300/25 sm:text-[8rem]"
          aria-hidden
        >
          ”
        </span>

        <p className="text-balance text-2xl font-bold leading-relaxed text-white sm:text-3xl">
          {t("translationPage.closingQuote")}
        </p>
        <span className="mx-auto mt-6 block h-px w-20 bg-gradient-to-r from-transparent via-brand-300/70 to-transparent" />
        <p className="mt-4 text-balance text-sm leading-relaxed text-white/75">
          {t("translationPage.closingCaption")}
        </p>
      </div>
    </section>
  );
}
