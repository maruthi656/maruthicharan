
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const educationDetails = [
    {
      degree: "B.Tech",
      institution: "Dadi Institute of Engineering and Technology",
      years: "2022-2026",
      description: "Currently pursuing Bachelor of Technology degree"
    },
    {
      degree: "Intermediate",
      institution: "Narayana Jr College",
      years: "2020-2022",
      description: "Completed Intermediate education with focus on sciences"
    },
    {
      degree: "SSC",
      institution: "Gloria English Medium School",
      years: "2020",
      description: "Completed Secondary School Certificate"
    }
  ];

  return (
    <section id="about" className="section-padding bg-dark-accent">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading reveal">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple to-blue mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 reveal">
            <h3 className="text-2xl font-semibold font-heading">Who I Am</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm V.V. Maruthi Charan, a motivated student with a strong passion for technology and design. My journey in tech began with curiosity about how digital systems work, which has now evolved into a career path I'm actively pursuing.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I believe in continuous learning and applying my knowledge to create meaningful solutions. My goal is to develop expertise in web development and content creation, combining technical skills with creative thinking to build intuitive digital experiences.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding or designing, I enjoy video editing and exploring new technologies that can enhance user experiences across different platforms.
            </p>
          </div>
          
          <div className="reveal">
            <h3 className="text-2xl font-semibold font-heading mb-6">Education</h3>
            <div className="space-y-6">
              {educationDetails.map((edu, index) => (
                <Card key={index} className="glass-card overflow-hidden border-none">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h4 className="font-heading font-semibold text-lg text-white">
                        {edu.degree}
                      </h4>
                      <span className="text-purple text-sm font-medium">
                        {edu.years}
                      </span>
                    </div>
                    <h5 className="text-white/80 mb-2">{edu.institution}</h5>
                    <p className="text-gray-400 text-sm">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
