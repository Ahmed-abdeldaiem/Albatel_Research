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
        <div className="absolute inset-0 animate-ken-burns">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            className="object-cover brightness-[0.45] dark:brightness-[0.35]"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-100/92 to-slate-50/25 dark:from-ink-950 dark:via-ink-950/90 dark:to-ink-950/30 max-sm:from-slate-100 max-sm:via-slate-100/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_60%_at_50%_0%,rgba(56,189,248,0.08),transparent_60%)]" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-2xl" data-aos="fade-up">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400 sm:text-sm">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-500 shadow-[0_0_8px_rgba(56,189,248,0.65)]" />
            {kicker}
          </p>
          <h1 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-slate-900 drop-shadow-[0_1px_0_rgba(255,255,255,0.85)] dark:text-white dark:drop-shadow-none sm:drop-shadow-none sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <span className="mt-4 block h-px w-16 bg-gradient-to-r from-brand-500/70 via-brand-400/50 to-transparent" />
          <p className="mt-4 text-balance text-base leading-relaxed text-slate-800 drop-shadow-[0_1px_0_rgba(255,255,255,0.75)] dark:text-slate-300 dark:drop-shadow-none sm:drop-shadow-none sm:text-lg">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
