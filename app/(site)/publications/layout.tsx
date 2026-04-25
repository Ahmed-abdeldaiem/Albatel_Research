import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "إصداراتنا",
  description:
    "مؤلفات وموسوعات مهنية من مؤسسة باتل عبدالله الباتل للبحوث والدراسات — طلب النسخ عبر البريد الرسمي.",
};

export default function PublicationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
