"use client";

import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { createT, type Locale } from "@/lib/i18n";

const STORAGE_KEY = "albatel-lang";

type LanguageContextValue = {
  locale: Locale;
  dir: "rtl" | "ltr";
  setLocale: (locale: Locale) => void;
  rightToLeft: () => void;
  leftToRight: () => void;
  t: (key: string) => string;
};

export const LanguageContext = createContext<LanguageContextValue | null>(
  null,
);

function readStoredLocale(): Locale | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    if (v === "ar" || v === "en") return v;
  } catch {
    /* ignore */
  }
  return null;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ar");

  useLayoutEffect(() => {
    const stored = readStoredLocale();
    if (stored) setLocaleState(stored);
  }, []);

  const dir: "rtl" | "ltr" = locale === "ar" ? "rtl" : "ltr";

  useLayoutEffect(() => {
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", locale === "ar" ? "ar" : "en");
  }, [dir, locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const rightToLeft = useCallback(() => setLocale("ar"), [setLocale]);
  const leftToRight = useCallback(() => setLocale("en"), [setLocale]);

  const t = useMemo(() => createT(locale), [locale]);

  const value = useMemo(
    () => ({
      locale,
      dir,
      setLocale,
      rightToLeft,
      leftToRight,
      t,
    }),
    [locale, dir, setLocale, rightToLeft, leftToRight, t],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
