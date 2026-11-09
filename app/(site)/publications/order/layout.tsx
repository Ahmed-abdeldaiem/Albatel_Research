import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "طلب نسخة من إصداراتنا",
  description:
    "اطلب نسختك من إصدارات مؤسسة باتل عبدالله الباتل للبحوث والدراسات داخل مصر عبر نموذج الطلب الرسمي.",
};

export default function BookOrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
