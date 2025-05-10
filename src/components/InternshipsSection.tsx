
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const InternshipsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const internships = [
    {
      company: "Tech Solutions Inc.",
      position: "Web Development Intern",
      duration: "May 2023 - July 2023",
      image: "https://i.ibb.co/Mk0g7gY1/INTERNSHHIP.jpg",
      description: "Worked on developing responsive web interfaces using HTML, CSS, and JavaScript. Collaborated with the design team to implement UI components.",
      skills: ["HTML", "CSS", "JavaScript", "UI Design"]
    },
    {
      company: "Cloud Services Provider",
      position: "Cloud Internship",
      duration: "August 2023 - October 2023",
      image: "https://i.ibb.co/pB59MkYd/CLOUD-INTERNSHIP.jpg",
      description: "Created engaging digital content for the company's social media platforms. Assisted in video editing and graphics design for marketing campaigns.",
      skills: ["Cloud Computing", "AWS", "Azure", "DevOps"]
    },
    {
      company: "DataValley",
      position: "Data Engineering Intern",
      duration: "November 2023 - January 2024",
      image: "https://i.ibb.co/wN4sBjVx/DATAVALLEY-INTERNSHIP.jpg",
      description: "Assisted in database design and implementation using SQL and MongoDB. Participated in data analysis and reporting projects.",
      skills: ["SQL", "MongoDB", "Data Analysis", "Reporting"]
    }
  ];

  return (
    <section id="internships" className="section-padding bg-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading reveal">
            My <span className="text-gradient">Internships</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple to-blue mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto reveal">
            Professional experience that has helped me grow and develop my skills in various areas of technology and design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internships.map((internship, index) => (
            <div 
              key={index} 
              className="reveal" 
              style={{animationDelay: `${index * 0.1}s`}}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <Card className="glass-card overflow-hidden border-none h-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                <div className="relative h-48">
                  <img 
                    src={internship.image} 
                    alt={internship.company} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80";
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-dark to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 ${
                    activeIndex === index ? 'opacity-100 bg-dark/80' : 'opacity-100'
                  }`}>
                    {activeIndex === index && (
                      <div className="animate-fade-in">
                        <p className="text-white text-sm mb-4">{internship.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {internship.skills.map((skill, i) => (
                            <span key={i} className="px-2 py-1 bg-purple/20 rounded-full text-xs font-medium text-white/80">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <Briefcase className="text-blue mt-1 flex-shrink-0" size={18} />
                    <div>
                      <h3 className="text-lg font-semibold mb-1 font-heading">{internship.company}</h3>
                      <p className="text-white/80 text-sm mb-1">{internship.position}</p>
                      <p className="text-blue-light text-xs">{internship.duration}</p>
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

export default InternshipsSection;
