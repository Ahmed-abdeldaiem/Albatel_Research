"use client";

import { PageHero } from "@/components/layout/PageHero";
import { PublicationsIndex } from "@/components/publications/PublicationsIndex";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteImages } from "@/lib/site-images";

export default function PublicationsPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        kicker={t("pub.index.kicker")}
        title={t("pub.index.title")}
        subtitle={t("pub.index.subtitle")}
        imageSrc={siteImages.pagePublications}
        imageAlt=""
      />
      <PublicationsIndex />
    </>
  );
}
