
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Instagram, Send, Loader } from "lucide-react";
import emailjs from "emailjs-com";

// EmailJS configuration
const SERVICE_ID = "service_btls3f1";
const TEMPLATE_ID = "template_9q5obeh";
const PUBLIC_KEY = "WGc6_3zifjKCV2pAb";

// Form fields type
type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize emailjs
  emailjs.init(PUBLIC_KEY);
  
  // Initialize react-hook-form
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>();
  
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

  // Handle form submission with EmailJS
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message
      };
      
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
      
      toast({
        title: "Message Sent!",
        description: "Your message has been sent successfully. I'll get back to you soon!",
      });
      
      // Reset the form
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        variant: "destructive",
        title: "Failed to send",
        description: "There was a problem sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        placeholder="Your Name"
                        className={`bg-dark/50 border-white/10 focus:border-purple/50 text-white ${errors.name ? "border-red-500" : ""}`}
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your Email"
                        className={`bg-dark/50 border-white/10 focus:border-purple/50 text-white ${errors.email ? "border-red-500" : ""}`}
                        {...register("email", { 
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      placeholder="Message Subject"
                      className={`bg-dark/50 border-white/10 focus:border-purple/50 text-white ${errors.subject ? "border-red-500" : ""}`}
                      {...register("subject", { required: "Subject is required" })}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Your Message"
                      className={`bg-dark/50 border-white/10 focus:border-purple/50 text-white resize-none ${errors.message ? "border-red-500" : ""}`}
                      {...register("message", { required: "Message is required" })}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-purple to-blue text-white hover:opacity-90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send />
                        Send Message
                      </>
                    )}
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
