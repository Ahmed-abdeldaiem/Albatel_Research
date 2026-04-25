"use client";

import { ContactForm } from "@/components/contact/ContactForm";
import { ContactQuickGrid } from "@/components/contact/ContactQuickGrid";
import { PageHero } from "@/components/layout/PageHero";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteImages } from "@/lib/site-images";

export default function ContactPage() {
  const { t, locale } = useLanguage();

  return (
    <>
      <PageHero
        kicker={t("contact.kicker")}
        title={t("contact.title")}
        subtitle={t("contact.body")}
        imageSrc={siteImages.pageContact}
        imageAlt=""
      />
      <section className="border-t border-slate-200/60 bg-slate-50 py-14 dark:border-white/5 dark:bg-ink-950 sm:py-16">
        <div
          className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:gap-12 lg:px-8"
          lang={locale === "en" ? "en" : "ar"}
        >
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <div
              className="sticky top-24 rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm dark:border-white/10 dark:bg-ink-900/60"
              data-aos="fade-left"
            >
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {t("contact.kicker")}
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {t("contact.body")}
              </p>
              <div className="mt-6">
                <ContactQuickGrid />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
