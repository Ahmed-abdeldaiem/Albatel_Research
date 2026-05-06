"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useCallback, useEffect, useState } from "react";

/** يظهر الزر بعد تجاوز المستخدم لهذا القدر من التمرير (بالبكسل) */
const SCROLL_THRESHOLD = 380;

/**
 * زر عائم للعودة لأعلى الصفحة — يظهر بعد التمرير لأسفل، مع انتقال سلس.
 * يُوضع في تخطيط الموقع ليخدم كل الصفحات.
 */
export function ScrollToTop() {
  const { t, locale } = useLanguage();
  const [visible, setVisible] = useState(false);

  const updateVisibility = useCallback(() => {
    const y = window.scrollY ?? document.documentElement.scrollTop ?? 0;
    setVisible(y > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, [updateVisibility]);

  const handleClick = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: reduce ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={t("nav.scrollToTop")}
      title={t("nav.scrollToTop")}
      lang={locale === "en" ? "en" : "ar"}
      className={`fixed bottom-5 start-5 z-[70] flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-900/20 ring-2 ring-white/50 transition-[opacity,transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 hover:shadow-xl hover:shadow-brand-600/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 active:scale-[0.96] dark:from-brand-400 dark:to-brand-600 dark:text-ink-950 dark:ring-white/15 sm:bottom-7 sm:end-7 sm:h-12 sm:w-12 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <i className="fa-solid fa-arrow-up text-sm sm:text-base motion-safe:transition-transform motion-safe:duration-300" aria-hidden />
    </button>
  );
}
