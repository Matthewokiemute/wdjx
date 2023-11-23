import { Plus_Jakarta_Sans } from "next/font/google";
import PageLayout from "@/components/templates/PageLayout";
import MegaHeroSection from "@/components/templates/MegaHeroSection";
import Sponsors from "@/components/Sponsors";
import SponsorsSlider from "@/components/Carousel";
import SpeakersTab from "@/components/templates/SpeakersTab";
import RegisterSection from "@/components/RegisterSection";
import Footer from "@/components/Footer";
import WatinToExpect from "@/components/WatinToExpect";

const Jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });


export default function Home() {
  const itemsDetails = ['/images/sky.png', '/images/ronsend.png', '/images/webflow.png'];
  return (
    <div className={`${Jakarta.className}`}>
      <PageLayout title="WDJX - Warri Design Junction Experience" description="The First Ever Warri Design Foucused Conference">
        <MegaHeroSection />
        <Sponsors />
        <SponsorsSlider items={itemsDetails} />
        <SpeakersTab />
        <WatinToExpect />
        <RegisterSection />
        <Footer />
      </PageLayout>
    </div>
  );
}
