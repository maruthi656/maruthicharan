
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Instagram } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    { icon: <Mail size={20} />, text: "vv.maruthicharan@gmail.com", href: "mailto:vv.maruthicharan@gmail.com" },
    { icon: <Phone size={20} />, text: "+91 8179340270", href: "tel:+918179340270" },
    { icon: <MapPin size={20} />, text: "Andhra Pradesh, India", href: "#" }
  ];

  const socialLinks = [
    { icon: <Github size={20} />, name: "GitHub", href: "https://github.com/" },
    { icon: <Linkedin size={20} />, name: "LinkedIn", href: "https://linkedin.com/" },
    { icon: <Twitter size={20} />, name: "Twitter", href: "https://twitter.com/" },
    { icon: <Instagram size={20} />, name: "Instagram", href: "https://instagram.com/" }
  ];

  return (
    <section id="contact" className="section-padding bg-dark-accent">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading reveal">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple to-blue mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto reveal">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="reveal">
            <Card className="glass-card border-none h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 font-heading">Send Me a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your Name"
                        className="bg-dark/50 border-white/10 focus:border-purple/50 text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your Email"
                        className="bg-dark/50 border-white/10 focus:border-purple/50 text-white"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Message Subject"
                      className="bg-dark/50 border-white/10 focus:border-purple/50 text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Your Message"
                      className="bg-dark/50 border-white/10 focus:border-purple/50 text-white resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-purple to-blue text-white hover:opacity-90"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="reveal">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 font-heading">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center gap-4 p-4 glass-card rounded-lg hover:border-purple/30 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple to-blue flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-gray-300">{item.text}</span>
                    </a>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6 font-heading">Follow Me</h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 p-3 glass-card rounded-lg hover:bg-gradient-to-r hover:from-purple/20 hover:to-blue/20 transition-all duration-300"
                    >
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-purple group-hover:to-blue transition-all duration-300">
                        {social.icon}
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
