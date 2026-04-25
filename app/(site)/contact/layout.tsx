import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description: "نموذج مراسلة إلى البريد الرسمي للمؤسسة.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
