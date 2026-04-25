"use client";

import { Suspense } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { BookOrderForm } from "@/components/publications/BookOrderForm";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteImages } from "@/lib/site-images";

function OrderHero() {
  const { t } = useLanguage();
  return (
    <PageHero
      kicker={t("pub.index.kicker")}
      title={t("pub.order.title")}
      subtitle={t("pub.order.subtitle")}
      imageSrc={siteImages.pagePublications}
      imageAlt=""
    />
  );
}

export default function BookOrderPage() {
  const { locale } = useLanguage();

  return (
    <>
      <OrderHero />
      <section className="border-t border-slate-200/60 bg-slate-50 py-14 dark:border-white/5 dark:bg-ink-950 sm:py-16">
        <div
          className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8"
          lang={locale === "en" ? "en" : "ar"}
        >
          <Suspense fallback={<div className="h-40 animate-pulse rounded-3xl bg-slate-200/60 dark:bg-white/5" />}>
            <BookOrderForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
