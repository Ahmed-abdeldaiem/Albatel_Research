"use client";

import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { useLanguage } from "@/contexts/LanguageContext";
import { boardMembers } from "@/lib/board";
import { siteImages } from "@/lib/site-images";

export default function BoardPage() {
  const { t, locale } = useLanguage();
  const members = boardMembers[locale];

  return (
    <>
      <PageHero
        kicker={t("boardPage.kicker")}
        title={t("boardPage.title")}
        subtitle={t("boardPage.subtitle")}
        imageSrc={siteImages.pageBoard}
        imageAlt=""
      />
      <section className="border-t border-slate-200/60 bg-slate-50 py-16 dark:border-white/5 dark:bg-ink-950 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2
            className="text-center text-2xl font-bold text-slate-900 dark:text-white"
            data-aos="fade-up"
          >
            {t("boardPage.membersTitle")}
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((m, i) => (
              <article
                key={m.name}
                className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-md dark:border-white/10 dark:bg-ink-900/60"
                data-aos="fade-up"
                data-aos-delay={String(i * 80)}
              >
                <div className="relative aspect-[4/3] w-full bg-slate-100 dark:bg-ink-800">
                  <Image
                    src={m.image}
                    alt=""
                    fill
                    className={
                      m.imagePlaceholder
                        ? "object-contain object-center p-8 sm:p-10"
                        : "object-cover"
                    }
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent ${
                      m.imagePlaceholder ? "via-transparent" : ""
                    }`}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <h3 className="text-lg font-bold">{m.name}</h3>
                    <p className="mt-1 text-sm text-white/90">{m.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
