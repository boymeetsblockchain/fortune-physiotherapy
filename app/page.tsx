import AboutPage from "@/components/home/about";
import Contact from "@/components/home/contact";
import { Gallery } from "@/components/home/gallery";
import { HeroSection } from "@/components/home/hero";
import { Services } from "@/components/home/services";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutPage />
      <Services />
      <Contact />
      <Gallery />
    </div>
  );
}
