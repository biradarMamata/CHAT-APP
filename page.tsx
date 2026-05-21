"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RoleSwitcher from "@/components/RoleSwitcher";
import HowItWorks from "@/components/HowItWorks";
import BusinessTypes from "@/components/BusinessTypes";
import AIControlCenter from "@/components/AIControlCenter";
import LiveTrackingPreview from "@/components/LiveTrackingPreview";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-white selection:bg-blue-500/30 overflow-hidden">
      {/* Global Background Glow */}
      <div className="bg-glow-radial"></div>

      <Navbar />
      
      <main>
        <HeroSection />
        <RoleSwitcher />
        <HowItWorks />
        <BusinessTypes />
        <AIControlCenter />
        <LiveTrackingPreview />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}
