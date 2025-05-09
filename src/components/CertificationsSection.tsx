
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

const CertificationsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const certificates = [
    {
      title: "Web Development Fundamentals",
      issuer: "Coursera",
      date: "June 2023",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      description: "Comprehensive course covering HTML, CSS, and JavaScript basics for building responsive websites."
    },
    {
      title: "Database Management",
      issuer: "MongoDB University",
      date: "August 2023",
      image: "https://images.unsplash.com/photo-1489389944381-3471b5b30f04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      description: "In-depth training on MongoDB database design, queries, and optimization techniques."
    },
    {
      title: "Python Programming",
      issuer: "Udemy",
      date: "October 2023",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      description: "Fundamentals of Python programming language with practical project applications."
    },
    {
      title: "UI/UX Design Principles",
      issuer: "Interaction Design Foundation",
      date: "December 2023",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      description: "User interface and experience design principles for creating intuitive digital experiences."
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-dark-accent">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading reveal">
            My <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple to-blue mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto reveal">
            Continuous learning is essential in the tech field. Here are some of the certifications I've earned along my journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="reveal" 
              style={{animationDelay: `${index * 0.1}s`}}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <Card className="glass-card overflow-hidden border-none h-full transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative h-48">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-black/80 transition-opacity duration-300 flex flex-col justify-center p-6 ${
                    activeIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <p className="text-white text-sm">{cert.description}</p>
                  </div>
                </div>
                
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <Award className="text-purple mt-1 flex-shrink-0" size={18} />
                    <div>
                      <h3 className="text-lg font-semibold mb-1 font-heading">{cert.title}</h3>
                      <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                      <p className="text-purple-light text-xs">{cert.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
