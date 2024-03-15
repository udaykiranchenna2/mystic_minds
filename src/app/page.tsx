import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-violet-200 to-pink-200 antialiased bg-grid-white/[0.02]">

      <HeroSection />
      <Features />
    </main>
  );
}
