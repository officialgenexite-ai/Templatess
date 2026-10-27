import { Coaches } from "@/components/gym/Coaches";
import { Hero } from "@/components/gym/Hero";
import { Pricing } from "@/components/gym/Pricing";
import { Programs } from "@/components/gym/Programs";
import { Schedule } from "@/components/gym/Schedule";
import { SiteHeader } from "@/components/gym/SiteHeader";
import { Contact, Footer, Story } from "@/components/gym/StoryContact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <Hero />
      <Programs />
      <Coaches />
      <Pricing />
      <Schedule />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}
