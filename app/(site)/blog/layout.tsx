import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "المدونة والمقالات",
  description:
    "مقالات تحليلية ومراجعات علمية وقراءات في البحث والترجمة والمراجعة بأقلام باحثي مؤسسة باتل عبدالله الباتل للبحوث والدراسات — قريبًا.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
