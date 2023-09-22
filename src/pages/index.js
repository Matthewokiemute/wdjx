import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import PageLayout from "@/components/templates/PageLayout";
import HeroSection from "@/components/HeroSection";
import MegaHeroSection from "@/components/templates/MegaHeroSection";

const Jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${Jakarta.className}`}>
      <PageLayout title="WDJX - Warri Design Junction Experience">
        <MegaHeroSection />
      </PageLayout>
    </div>
  );
}
