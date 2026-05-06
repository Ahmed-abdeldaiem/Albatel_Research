"use client";

import { useLanguage } from "@/contexts/LanguageContext";

// =============================================================================
// PublicationsFAQ — أسئلة شائعة قابلة للطيّ
// تستخدم <details>/<summary> لإمكانية الوصول مع تصميم متناغم مع باقي الصفحات.
// =============================================================================

export function PublicationsFAQ() {
  const { t, locale } = useLanguage();

  const faqs = [
    { q: t("pub.index.faq1Q"), a: t("pub.index.faq1A") },
    { q: t("pub.index.faq2Q"), a: t("pub.index.faq2A") },
    { q: t("pub.index.faq3Q"), a: t("pub.index.faq3A") },
    { q: t("pub.index.faq4Q"), a: t("pub.index.faq4A") },
    { q: t("pub.index.faq5Q"), a: t("pub.index.faq5A") },
    { q: t("pub.index.faq6Q"), a: t("pub.index.faq6A") },
  ];

  return (
    <section className="border-t border-slate-200/60 bg-white py-16 dark:border-white/5 dark:bg-ink-900 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p
            className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400"
            data-aos="fade-up"
          >
            {t("pub.index.faqKicker")}
          </p>
          <h2
            className="mt-3 text-balance text-3xl font-extrabold leading-[1.5] text-slate-900 dark:text-white sm:text-4xl sm:leading-[1.45]"
            data-aos="fade-up"
            data-aos-delay="60"
          >
            {t("pub.index.faqTitle")}
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-slate-200/80 bg-slate-50/70 p-5 shadow-sm transition-all duration-300 open:border-brand-400/40 open:bg-white open:shadow-md hover:border-brand-400/30 dark:border-white/10 dark:bg-ink-950/40 dark:open:border-brand-400/40 dark:open:bg-ink-950/70"
              data-aos="fade-up"
              data-aos-delay={String(80 + i * 60)}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-start text-base font-bold text-slate-900 transition-colors group-open:text-brand-700 dark:text-white dark:group-open:text-brand-300">
                <span>{f.q}</span>
                <span
                  className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-600 transition-transform duration-300 group-open:rotate-45 dark:bg-brand-500/15 dark:text-brand-300"
                  aria-hidden
                >
                  <i className="fa-solid fa-plus text-xs" />
                </span>
              </summary>
              <p
                className="mt-4 text-justify text-sm leading-loose text-slate-600 dark:text-slate-400"
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
