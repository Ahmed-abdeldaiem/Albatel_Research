import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AppProviders } from "@/contexts/AppProviders";
import { OFFICIAL_EMAIL } from "@/lib/contact";
import { ORG_GEO, ORG_MAPS_URL, ORG_PHONE_DISPLAY } from "@/lib/org-contact";
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
  description: `مؤسسة مصرية في الإسكندرية للبحث والتطوير والترجمة والتدريب المهني؛ دراسات تطبيقية، لجان بحث وترجمة، مجلس أمناء، وإصدارات مهنية. للاستفسار: ${ORG_PHONE_DISPLAY}.`,
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
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "مؤسسة باتل عبدالله الباتل للبحوث والدراسات",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#04080f" },
  ],
};

/** بيانات منظّمة (schema.org) لمحركات البحث — الهاتف والبريد من الثوابت المشتركة */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "مؤسسة باتل عبدالله الباتل للبحوث والدراسات",
  url: SITE_URL,
  logo: `${SITE_URL}/logo1_1.png`,
  email: OFFICIAL_EMAIL,
  telephone: `+20${ORG_PHONE_DISPLAY.replace(/^0/, "")}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "٨٤ طريق الحرية، باب شرق",
    addressLocality: "الإسكندرية",
    addressCountry: "EG",
  },
  location: {
    "@type": "Place",
    geo: { "@type": "GeoCoordinates", latitude: ORG_GEO.lat, longitude: ORG_GEO.lng },
    hasMap: ORG_MAPS_URL,
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <AppProviders>{children}</AppProviders>
        <SpeedInsights />
      </body>
    </html>
  );
}
