"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function AosProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 56,
      anchorPlacement: "top-bottom",
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [pathname]);

  return <>{children}</>;
}
