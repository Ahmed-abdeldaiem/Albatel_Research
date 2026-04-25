"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { buildContactItems } from "@/lib/contact-items";

export function ContactQuickGrid() {
  const { t, locale } = useLanguage();
  const items = buildContactItems(t);

  return (
    <ul
      className="grid gap-4 sm:grid-cols-2"
      lang={locale === "en" ? "en" : "ar"}
    >
      {items.map((item, i) => (
        <li key={item.label} data-aos="fade-left" data-aos-delay={String(i * 60)}>
          <a
            href={item.href}
            {...(item.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-slate-50/90 p-5 shadow-sm transition hover:border-brand-400/40 hover:bg-white hover:shadow-md dark:border-white/10 dark:bg-ink-900/50 dark:hover:border-brand-500/30 dark:hover:bg-ink-800/80"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
              <i className={`fa-solid ${item.icon}`} aria-hidden />
            </span>
            <span className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-500">
              {item.label}
            </span>
            <span className="mt-1 text-sm font-medium leading-snug text-slate-900 dark:text-white sm:text-base">
              {item.value}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
