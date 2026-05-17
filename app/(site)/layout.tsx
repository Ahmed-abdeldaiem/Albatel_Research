import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className="min-h-[60vh] pt-[4.25rem]">{children}</main>
      <SiteFooter />
      <WhatsAppFloat />
      <ScrollToTop />
    </>
  );
}
