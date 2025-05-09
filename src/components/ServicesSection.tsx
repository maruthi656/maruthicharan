
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FileCode, Paintbrush, Video, Database } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <FileCode className="w-10 h-10" />,
      title: "Web Design",
      description: "I create responsive and user-friendly websites with modern design principles, ensuring a seamless experience across all devices."
    },
    {
      icon: <Paintbrush className="w-10 h-10" />,
      title: "UI/UX Design",
      description: "I design intuitive and engaging user interfaces with a focus on user experience, creating visually appealing and functional designs."
    },
    {
      icon: <Video className="w-10 h-10" />,
      title: "Content Creation",
      description: "I develop engaging digital content that communicates clear messages and captivates audiences across different platforms."
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Database Management",
      description: "I work with SQL and MongoDB to create efficient database structures for storing and retrieving information effectively."
    }
  ];

  return (
    <section id="services" className="section-padding bg-dark-accent">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading reveal">
            My <span className="text-gradient">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple to-blue mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto reveal">
            I offer a range of services to help you bring your digital ideas to life. Here's how I can assist you in your projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="reveal" style={{animationDelay: `${index * 0.1}s`}}>
              <Card className="glass-card hover:translate-y-[-10px] transition-all duration-300 h-full border-none">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple to-blue flex items-center justify-center mb-6">
                    {React.cloneElement(service.icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 font-heading">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
