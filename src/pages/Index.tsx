
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import InternshipsSection from "@/components/InternshipsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/utils/ScrollReveal";

const Index = () => {
  useEffect(() => {
    document.title = "V.V. Maruthi Charan - Portfolio";
  }, []);

  return (
    <ScrollReveal>
      <div className="bg-dark text-white">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ServicesSection />
          <ProjectsSection />
          <CertificationsSection />
          <InternshipsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ScrollReveal>
  );
};

export default Index;
