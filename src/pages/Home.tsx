
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ContactInfo from "@/components/ContactInfo";
import AnalyticsWidget from "@/components/AnalyticsWidget";
import SocialLinks from "@/components/SocialLinks";

const Home = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="py-16 text-center">
        <h1 className="text-4xl font-bold mb-6">Hi, I'm Your Name</h1>
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
            <Link to="/contact">Contact Me</Link>
          </Button>
        </div>
      </section>

      {/* Contact Info Section */}
      <ContactInfo />

      {/* Social Links */}
      <SocialLinks />

      {/* About Me */}
      <section className="py-8">
        <Card>
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
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-muted w-64 h-64 rounded-full flex items-center justify-center">
                  <span className="text-muted-foreground">Your Photo</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Analytics Widget */}
      <AnalyticsWidget />

      {/* Skills */}
      <section className="py-8">
        <h2 className="text-2xl font-semibold mb-6">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5", "Skill 6", "Skill 7", "Skill 8"].map((skill) => (
            <Card key={skill} className="flex items-center justify-center p-4 h-24">
              <span>{skill}</span>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
