"use client";

import Image from "next/image";

type PageHeroProps = {
  kicker: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
};

export function PageHero({
  kicker,
  title,
  subtitle,
  imageSrc,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/70 dark:border-white/10">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover brightness-[0.45] dark:brightness-[0.35]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/85 to-slate-50/20 dark:from-ink-950 dark:via-ink-950/90 dark:to-ink-950/30" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-2xl" data-aos="fade-up">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            {kicker}
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-pretty text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
