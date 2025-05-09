
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "365-Day Diary App",
      description: "A digital diary application that allows users to write and save entries for each day of the year, with note-taking capabilities.",
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      tags: ["App Design", "UI/UX", "Development"],
      link: "#"
    },
    {
      title: "Personal Portfolio Website",
      description: "A modern portfolio website showcasing skills, projects, and services with a dark theme and smooth animations.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      tags: ["Web Design", "Frontend", "Portfolio"],
      link: "#"
    },
    {
      title: "Content Management System",
      description: "A system designed to streamline content creation, editing, and publishing workflows for digital platforms.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      tags: ["CMS", "Database", "Design"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading reveal">
            Notable <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple to-blue mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto reveal">
            Here are some of the projects I've worked on, showcasing my skills and experience in different areas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="reveal" style={{animationDelay: `${index * 0.1}s`}}>
              <Card className="glass-card overflow-hidden border-none h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                
                <CardContent className="p-6 flex-grow">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 bg-white/10 rounded-full text-xs font-medium text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 font-heading">{project.title}</h3>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                </CardContent>
                
                <CardFooter className="p-6 pt-0">
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-purple hover:text-purple-light flex items-center gap-2 group"
                  >
                    View Project
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
