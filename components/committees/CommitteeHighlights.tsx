"use client";

type Item = { title: string; desc: string; icon: string };

export function CommitteeHighlights({ items }: { items: Item[] }) {
  return (
    <div className="mx-auto grid max-w-6xl gap-5 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8 lg:py-16">
      {items.map((it, i) => (
        <article
          key={it.title}
          className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand-400/50 hover:shadow-lg hover:shadow-brand-500/10 dark:border-white/10 dark:bg-ink-900/50 dark:hover:border-brand-500/40"
          data-aos="flip-left"
          data-aos-delay={String(i * 70)}
        >
          {/* Decorative glow that emerges on hover */}
          <div
            className="pointer-events-none absolute -end-12 -top-12 h-32 w-32 rounded-full bg-brand-500/0 blur-2xl transition-all duration-500 group-hover:bg-brand-500/20"
            aria-hidden
          />

          {/* Icon — gradient background, ring on hover, scale + slight rotation */}
          <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/15 to-cyan-500/10 text-brand-600 ring-1 ring-brand-500/15 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:ring-brand-500/40 dark:from-brand-400/15 dark:to-cyan-400/10 dark:text-brand-400">
            <i className={`fa-solid ${it.icon} text-lg`} aria-hidden />
          </span>

          {/* Title — color shift on hover */}
          <h3 className="relative mt-4 text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-300">
            {it.title}
          </h3>

          <p className="relative mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {it.desc}
          </p>

          {/* Animated underline that grows on hover */}
          <span className="relative mt-4 block h-0.5 w-0 bg-gradient-to-r from-brand-400 via-brand-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />
        </article>
      ))}
    </div>
  );
}
