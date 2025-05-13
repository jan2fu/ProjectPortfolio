
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnalyticsWidget from "@/components/AnalyticsWidget";
import { FileText, Github, Linkedin, Mail, MapPin } from "lucide-react";

const Home = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="py-16 text-center">
        <h1 className="text-4xl font-bold mb-6">Hi, I'm JamaL</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Breaking the Deployment Barrier
          Automating, Scaling, and Engineering for Maximum Uptime
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link to="/projects">View My Work</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/resume">Resume</Link>
          </Button>
        </div>
      </section>

      {/* About Me with integrated contact info and social links */}
      <section className="py-8">
        <Card className="bg-secondary/50 border-primary/20">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">About Me</h2>
                <p className="mb-4 text-muted-foreground">
                   I’m Jamal Anwar, a seasoned DevOps and SRE professional with a
                   relentless drive to streamline workflows, automate deployments, 
                   and optimize system performance. With years of hands-on experience 
                   in cloud infrastructure, CI/CD pipelines, and Infrastructure as Code (IaC),
                   I thrive on solving complex challenges with scalable solutions.
                   Whether it's reducing build times, eliminating bottlenecks,
                   or enhancing reliability, I bring a sharp technical edge and a
                   problem-solving mindset to every project.
                </p>
                <p className="mb-4 text-muted-foreground">
                  When I’m not automating deployments and optimizing systems, 
                  I’m breaking things just to see if I can fix them better.
                </p>
                <p className="mb-4 text-muted-foreground"> 
                  Coffee fuels my uptime, memes keep my sanity in check, 
                  and chaotic side projects remind me that even perfection can be improved.
                </p>
                
                {/* Contact Info Icons */}
                <div className="flex items-center gap-4 mb-4">
                  <a href="mailto:jamallinks@gmail.com" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                    <Mail className="h-5 w-5" />
                    <span className="md:inline hidden">jamallinks@gmail.com</span>
                  </a>
                  <span className="flex items-center gap-2 text-sm">
                    <MapPin className="h-5 w-5" />
                    <span className="md:inline hidden">Oak Park, IL</span>
                  </span>
                  <Button onClick={() => console.log("Resume download clicked")} 
                    variant="outline" 
                    size="sm" 
                    className="text-sm">
                    <FileText className="h-4 w-4 mr-2" />
                    Resume
                  </Button>
                </div>
                
                {/* Social Links - Icons only */}
                <div className="flex gap-4 items-center">
                  <a 
                    href="https://github.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/jamal-lamaj/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="profile-image-container">
                  <div className="profile-image-animation">
                    <div className="bg-muted w-64 h-64 rounded-full flex items-center justify-center profile-image">
                    <img
                src="src/pages/Jamal.jpg" // Replace with the actual path to your image
                alt="Jamal" 
                className="w-full h-full object-cover rounded-full"
                />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Home;
