import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AppProviders } from "@/contexts/AppProviders";
import { SITE_URL } from "@/lib/site-url";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "مؤسسة باتل عبدالله الباتل للبحوث والدراسات",
  title: {
    default: "مؤسسة باتل عبدالله الباتل للبحوث والدراسات",
    template: "%s | مؤسسة الباتل للبحوث والدراسات",
  },
  icons: {
    icon: [{ url: "/Logo_trans.png", type: "image/png", sizes: "any" }],
    apple: [{ url: "/Logo_trans.png", sizes: "180x180" }],
    shortcut: "/Logo_trans.png",
  },
  description:
    "مؤسسة مصرية للبحوث والتطوير والترجمة — إثراء المجتمع المهني بالمعرفة الرصينة والدراسات التطبيقية في كافة التخصصات.",
  keywords: [
    "بحوث",
    "دراسات",
    "ترجمة",
    "الإسكندرية",
    "مصر",
    "مؤسسة الباتل",
    "تطوير مهني",
  ],
  authors: [{ name: "مؤسسة باتل عبدالله الباتل للبحوث والدراسات" }],
  openGraph: {
    type: "website",
    locale: "ar_EG",
    siteName: "مؤسسة باتل عبدالله الباتل للبحوث والدراسات",
    title: "مؤسسة باتل عبدالله الباتل للبحوث والدراسات",
    description:
      "بحوث، تطوير، وترجمة متخصصة لخدمة المجتمع المهني في مصر والعالم العربي.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#04080f" },
  ],
};

const bootScript = `(function(){try{var t=localStorage.getItem("albatel-theme");if(t==="dark")document.documentElement.classList.add("dark");else document.documentElement.classList.remove("dark");var l=localStorage.getItem("albatel-lang");if(l==="en"){document.documentElement.setAttribute("dir","ltr");document.documentElement.setAttribute("lang","en")}else{document.documentElement.setAttribute("dir","rtl");document.documentElement.setAttribute("lang","ar")}}catch(e){document.documentElement.classList.remove("dark")}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable} suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased">
        <Script id="albatel-boot" strategy="beforeInteractive">
          {bootScript}
        </Script>
        <AppProviders>{children}</AppProviders>
        <SpeedInsights />
      </body>
    </html>
  );
}
