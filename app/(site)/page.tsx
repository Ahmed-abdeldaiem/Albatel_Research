import type { Metadata } from "next";
import { HomeLanding } from "@/components/home/HomeLanding";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <HomeLanding />;
}
