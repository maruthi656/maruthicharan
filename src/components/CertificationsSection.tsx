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
      image: "https://i.ibb.co/7Jnf4j40/DEVOPS.jpg",
      description: "Comprehensive DevOps training covering CI/CD pipelines, containerization, and automation."
    },
    {
      title: "Excel Skills",
      issuer: "Microsoft",
      date: "2023",
      image: "https://i.ibb.co/dJ31XxZ2/EXCEL.jpg",
      description: "Advanced Excel skills including data analysis, visualization, and automation."
    },
    {
      title: "HTML 5",
      issuer: "Web Development Academy",
      date: "2023",
      image: "https://i.ibb.co/JRzDYDT1/HTML-5.jpg",
      description: "Modern HTML5 web development techniques and best practices."
    },
    {
      title: "IBM NoSQL",
      issuer: "IBM",
      date: "2023",
      image: "https://i.ibb.co/v6tSjxCN/IBM-NOSQL.jpg",
      description: "Database management with NoSQL technologies from IBM."
    },
    {
      title: "JavaScript",
      issuer: "Web Academy",
      date: "2023",
      image: "https://i.ibb.co/YT1BgtGV/JS.jpg",
      description: "JavaScript programming fundamentals and advanced concepts."
    },
    {
      title: "Node.js",
      issuer: "Web Development Institute",
      date: "2023",
      image: "https://i.ibb.co/Sw17DcgT/NODE-JS.jpg",
      description: "Server-side JavaScript with Node.js technologies."
    },
    {
      title: "Power BI",
      issuer: "Microsoft",
      date: "2023",
      image: "https://i.ibb.co/20t7nV9p/POWER-BI.jpg",
      description: "Data visualization and business intelligence using Power BI."
    },
    {
      title: "Python",
      issuer: "Python Institute",
      date: "2023",
      image: "https://i.ibb.co/4RdT5Nf3/PYTHON.jpg",
      description: "Python programming language fundamentals and applications."
    },
    {
      title: "TypeScript",
      issuer: "Web Development Academy",
      date: "2023",
      image: "https://i.ibb.co/gFjdx3rn/TYPE-SCRIPT.jpg",
      description: "TypeScript programming language and advanced typing concepts."
    },
    {
      title: "General Internship",
      issuer: "Technology Company",
      date: "2023",
      image: "https://i.ibb.co/Mk0g7gY1/INTERNSHHIP.jpg",
      description: "Professional development through hands-on industry experience."
    },
    {
      title: "Cloud Internship",
      issuer: "Cloud Services Provider",
      date: "2023",
      image: "https://i.ibb.co/pB59MkYd/CLOUD-INTERNSHIP.jpg",
      description: "Specialized internship focused on cloud computing technologies."
    },
    {
      title: "DataValley Internship",
      issuer: "DataValley",
      date: "2023",
      image: "https://i.ibb.co/wN4sBjVx/DATAVALLEY-INTERNSHIP.jpg",
      description: "Professional internship with focus on data engineering and analytics."
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
