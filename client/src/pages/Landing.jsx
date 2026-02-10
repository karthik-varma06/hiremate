import { useNavigate } from "react-router-dom";

import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import LogoCarousel from "../components/landing/LogoCarousel";
import FeatureCards from "../components/landing/FeatureCards";
import HowItWorks from "../components/landing/HowItWorks";
import DemoFlow from "../components/landing/DemoFlow";
import CTASection from "../components/landing/CTASection";
import Footer from "../components/landing/Footer";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0b1220] text-white min-h-screen">

      {/* NAVBAR */}
      <Navbar
        onDashboard={() => navigate("/dashboard")}
        onNew={() => navigate("/new")}
      />

      {/* HERO */}
      <Hero onStart={() => navigate("/new")} />

      {/* SECTIONS */}
      <LogoCarousel />
      <FeatureCards />
      <HowItWorks />
      <DemoFlow />
      <CTASection />

      {/* FOOTER */}
      <Footer />

    </div>
  );
}
