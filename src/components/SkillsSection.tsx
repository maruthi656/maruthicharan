
import React from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, FileCode, Database, Video } from "lucide-react";

const SkillsSection = () => {
  const programmingSkills = [
    { name: "Python", level: 40, icon: <Code className="text-blue" size={24} /> },
    { name: "Java", level: 35, icon: <Code className="text-purple" size={24} /> },
    { name: "HTML", level: 75, icon: <FileCode className="text-blue-light" size={24} /> },
    { name: "CSS", level: 65, icon: <FileCode className="text-purple-light" size={24} /> },
  ];

  const techSkills = [
    { name: "SQL", level: 50, icon: <Database className="text-blue" size={24} /> },
    { name: "MongoDB", level: 45, icon: <Database className="text-purple" size={24} /> },
    { name: "Content Creation", level: 70, icon: <Video className="text-blue-light" size={24} /> },
    { name: "Video Editing", level: 75, icon: <Video className="text-purple-light" size={24} /> },
  ];

  return (
    <section id="skills" className="section-padding bg-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading reveal">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple to-blue mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto reveal">
            I've developed various skills throughout my academic journey and personal projects. Here's a look at my current skill set that I'm continuously improving.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="reveal">
            <h3 className="text-xl font-semibold mb-6 font-heading">Programming Languages</h3>
            <div className="space-y-6">
              {programmingSkills.map((skill, index) => (
                <div key={index} className="reveal" style={{animationDelay: `${index * 0.1}s`}}>
                  <Card className="glass-card p-4 hover:border-purple/50 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-3">
                      {skill.icon}
                      <div className="flex justify-between w-full">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-secondary [&>div]:bg-gradient-to-r [&>div]:from-purple [&>div]:to-blue" />
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="reveal">
            <h3 className="text-xl font-semibold mb-6 font-heading">Technologies & Other Skills</h3>
            <div className="space-y-6">
              {techSkills.map((skill, index) => (
                <div key={index} className="reveal" style={{animationDelay: `${index * 0.1}s`}}>
                  <Card className="glass-card p-4 hover:border-blue/50 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-3">
                      {skill.icon}
                      <div className="flex justify-between w-full">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-secondary [&>div]:bg-gradient-to-r [&>div]:from-blue [&>div]:to-purple" />
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
