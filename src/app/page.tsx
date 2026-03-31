import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import MenuPreview from "@/components/sections/MenuPreview";
import FusionStory from "@/components/sections/FusionStory";
import WholesaleSection from "@/components/sections/WholesaleSection";
import Process from "@/components/sections/Process";
import BlogPreview from "@/components/sections/BlogPreview";
import Coverage from "@/components/sections/Coverage";
import Pickup from "@/components/sections/Pickup";

export default function Home() {
  return (
    <main className="min-h-screen bg-carbon">
      <Navbar />
      
      {/* 1. Hero: Impact Statement */}
      <Hero />
      
      {/* 2. Menu: What we offer */}
      <MenuPreview />
      
      {/* 3. Story: Who we are */}
      <div id="story">
        <FusionStory />
      </div>
      
      {/* 4. Wholesale: Catering & Business */}
      <WholesaleSection />
      
      {/* 5. Process: How we do it / Quality (Not used for now) */}
      {/* <Process /> */}
      
      {/* 6. Blog: Community & Engagement */}
      <BlogPreview />
      
      {/* 7. Logistics: How to get it */}
      <div id="contact">
        <Coverage />
        <Pickup />
      </div>

      <Footer />
    </main>
  );
}
