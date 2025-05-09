
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const profileImageUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";

  return (
    <section id="home" className="min-h-screen flex items-center relative bg-dark overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 rounded-full bg-purple/30 -top-20 -left-20 blur-3xl"></div>
        <div className="absolute w-96 h-96 rounded-full bg-blue/30 bottom-0 right-0 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between z-10">
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0 reveal">
          <h2 className="text-xl font-medium text-purple mb-4 animate-fade-in">
            Hello, I'm
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-heading">
            V.V. Maruthi Charan
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-lg mx-auto md:mx-0 mb-8">
            A driven student with a passion for technology and design, focused on creating impactful digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple to-blue text-white hover:opacity-90 transition-opacity"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/20 hover:bg-white/10"
            >
              Contact Me
            </Button>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center md:justify-end reveal">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-b from-purple/40 to-blue/40 mix-blend-overlay"></div>
            <img 
              src={profileImageUrl} 
              alt="V.V. Maruthi Charan" 
              className="object-cover w-full h-full" 
            />
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 hover:text-white animate-bounce transition-colors"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ChevronDown size={20} />
      </a>
    </section>
  );
};

export default HeroSection;
