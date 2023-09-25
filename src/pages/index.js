import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import PageLayout from "@/components/templates/PageLayout";
import HeroSection from "@/components/HeroSection";
import MegaHeroSection from "@/components/templates/MegaHeroSection";
import Sponsors from "@/components/Sponsors";
import SponsorsSlider from "@/components/Carousel";

const Jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function Home() {
  const itemsDetails = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];
  return (
    <div className={`${Jakarta.className}`}>
      <PageLayout title="WDJX - Warri Design Junction Experience">
        <MegaHeroSection />
        <Sponsors />
        <SponsorsSlider items={itemsDetails} />
      </PageLayout>
    </div>
  );
}
