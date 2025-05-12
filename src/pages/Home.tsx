
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
          I'm a [Your Role] specializing in [Your Specialties]. 
          I build exceptional digital experiences that are accessible, 
          performant, and user-friendly.
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
                  With [X years] of experience in [Your Field], I've worked with a diverse range of clients 
                  from startups to large corporations. My passion lies in creating solutions that blend 
                  technical excellence with thoughtful user experience.
                </p>
                <p className="mb-4 text-muted-foreground">
                  When I'm not coding, you can find me [Your Interests/Hobbies]. I believe in continuous 
                  learning and regularly challenge myself with new technologies and methodologies.
                </p>
                
                {/* Contact Info Icons */}
                <div className="flex items-center gap-4 mb-4">
                  <a href="mailto:your.email@example.com" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                  <span className="flex items-center gap-2 text-sm">
                    <MapPin className="h-5 w-5" />
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
                    href="https://linkedin.com/in/yourprofile" 
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
                      <span className="text-muted-foreground">Your Photo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Analytics Widget */}
      <AnalyticsWidget />

    </div>
  );
};

export default Home;
