import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const CertificationsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const certificates = [
    {
      title: "DevOps",
      issuer: "IBM",
      date: "2023",
      image: "https://marvel-b1-cdn.bc0a.com/f00000000236551/dt-cdn.net/wp-content/uploads/2021/07/13429_ILL_DevOpsLoop.png",
      description: "Comprehensive DevOps training covering CI/CD pipelines, containerization, and automation."
    },
    {
      title: "Excel Skills",
      issuer: "Microsoft",
      date: "2023",
      image: "https://i0.wp.com/knowasap.com/wp-content/uploads/2020/03/EXCEL-d.png?fit=2000%2C1545&ssl=1",
      description: "Advanced Excel skills including data analysis, visualization, and automation."
    },
    {
      title: "GEO Informatics",
      issuer: "NPTEL",
      date: "2023",
      image: "https://i.ibb.co/0yv8PPs/GEO-2.jpg",
      description: "Geographic Information Systems and spatial data analysis techniques."
    },
    {
      title: "GEO Specialization",
      issuer: "NPTEL",
      date: "2023",
      image: "https://i.ibb.co/v0Nrdnk/GEO.jpg",
      description: "Advanced geographic information systems specialization."
    },
    {
      title: "DOC Certification",
      issuer: "WA University",
      date: "2023",
      image: "https://i.ibb.co/ZRbL0kT/DOC-20241223-WA0003.jpg",
      description: "Documentation and technical writing certification."
    },
    {
      title: "IBM Certificate",
      issuer: "IBM via edX",
      date: "2023",
      image: "https://i.ibb.co/pvzP1zH/IBM-Certificate-ed-X.jpg",
      description: "IBM professional certification through edX platform."
    },
    {
      title: "Infosys Certification",
      issuer: "Infosys",
      date: "2023",
      image: "https://i.ibb.co/gMf1PRm/infosys.jpg",
      description: "Professional development certification from Infosys."
    },
    {
      title: "JavaScript",
      issuer: "Online Academy",
      date: "2023",
      image: "https://i.ibb.co/RTPvBX2/java-script.jpg",
      description: "JavaScript programming fundamentals and advanced concepts."
    },
    {
      title: "Academic Certificate",
      issuer: "Educational Institution",
      date: "2023",
      image: "https://i.ibb.co/5WjChtT/MARUTHI-CHARAN-VELUVARTHI-855332.jpg",
      description: "Academic achievement certification."
    },
    {
      title: "Node.js",
      issuer: "Web Academy",
      date: "2023",
      image: "https://i.ibb.co/bRHwtMF/node-js.jpg",
      description: "Server-side JavaScript with Node.js technologies."
    },
    {
      title: "Power BI",
      issuer: "Microsoft",
      date: "2023",
      image: "https://i.ibb.co/mrvdcCY/power-bi-certificate.jpg",
      description: "Data visualization and business intelligence using Power BI."
    },
    {
      title: "Python Basics",
      issuer: "Python Institute",
      date: "2023",
      image: "https://i.ibb.co/ZzLFtr6/python-begining.jpg",
      description: "Introduction to Python programming language."
    },
    {
      title: "TypeScript",
      issuer: "Web Development Institute",
      date: "2023",
      image: "https://i.ibb.co/N24tHYv/typescript.jpg",
      description: "TypeScript programming language fundamentals."
    },
    {
      title: "Professional Certificate",
      issuer: "Professional Body",
      date: "2023",
      image: "https://i.ibb.co/VpbTNFV/V-VENKATA-MARUTHI-CHARAN.jpg",
      description: "Professional certification in specialized field."
    },
    {
      title: "Internship Certificate",
      issuer: "Company Name",
      date: "2023",
      image: "https://i.ibb.co/5gZQ8R7/V-V-MARUTHI-CHARAN-Internship-Certificate.jpg",
      description: "Recognition for completing professional internship."
    }
  ];

  // For larger screens: Grid display
  const renderGridView = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 hidden md:grid">
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
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80";
                }}
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
  );

  // For mobile screens: Carousel display
  const renderCarouselView = () => (
    <div className="md:hidden">
      <Carousel className="w-full">
        <CarouselContent>
          {certificates.map((cert, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="glass-card overflow-hidden border-none h-full">
                  <div className="relative h-48">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80";
                      }}
                    />
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
                    <p className="text-gray-300 text-sm mt-3">{cert.description}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4 gap-4">
          <CarouselPrevious className="static transform-none" />
          <CarouselNext className="static transform-none" />
        </div>
      </Carousel>
    </div>
  );

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
        
        {renderGridView()}
        {renderCarouselView()}
      </div>
    </section>
  );
};

export default CertificationsSection;
