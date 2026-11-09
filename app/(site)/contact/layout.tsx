import type { Metadata } from "next";
import { ORG_PHONE_DISPLAY } from "@/lib/org-contact";

export const metadata: Metadata = {
  title: "تواصل معنا",
  alternates: { canonical: "/contact" },
  description: `تواصل مع مؤسسة الباتل للبحوث والدراسات عبر نموذج المراسلة أو الهاتف وواتساب ${ORG_PHONE_DISPLAY} — ٨٤ طريق الحرية، باب شرق، الإسكندرية.`,
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
