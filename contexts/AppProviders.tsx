"use client";

import { AosProvider } from "@/contexts/AosProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Toaster } from "react-hot-toast";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AosProvider>
          {children}
          <Toaster
            position="top-center"
            toastOptions={{
              className:
                "!bg-slate-900 !text-white dark:!bg-white dark:!text-slate-900",
            }}
          />
        </AosProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
