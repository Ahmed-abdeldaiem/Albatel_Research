import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الأخبار والفعاليات",
  alternates: { canonical: "/news" },
  description:
    "أخبار مؤسسة باتل عبدالله الباتل للبحوث والدراسات وفعالياتها ومشاركاتها المهنية — اجتماعات مجلس الأمناء والأنشطة العلمية.",
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
