"use client";

type Item = { title: string; desc: string; icon: string };

export function CommitteeHighlights({ items }: { items: Item[] }) {
  return (
    <div className="mx-auto grid max-w-6xl gap-5 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8 lg:py-16">
      {items.map((it, i) => (
        <article
          key={it.title}
          className="rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm dark:border-white/10 dark:bg-ink-900/50"
          data-aos="flip-left"
          data-aos-delay={String(i * 70)}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
            <i className={`fa-solid ${it.icon} text-lg`} aria-hidden />
          </span>
          <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
            {it.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {it.desc}
          </p>
        </article>
      ))}
    </div>
  );
}
