
import React, { useEffect } from "react";

const ScrollReveal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const revealPoint = 100;
      
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - revealPoint) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    // Initial check
    revealOnScroll();
    
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);
  
  return <>{children}</>;
};

export default ScrollReveal;
