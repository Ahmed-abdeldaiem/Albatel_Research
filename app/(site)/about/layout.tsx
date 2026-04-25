import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "من نحن",
  description: "تعريف المؤسسة، الرؤية، الرسالة، والأهداف.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
