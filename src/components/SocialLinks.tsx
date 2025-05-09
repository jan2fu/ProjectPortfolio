
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

const SocialLinks = () => {
  return (
    <section className="py-6">
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4">Connect With Me</h2>
            <div className="flex gap-6">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Github className="h-8 w-8" />
              </a>
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="h-8 w-8" />
              </a>
              <a 
                href="mailto:your.email@example.com" 
                className="hover:text-primary transition-colors"
              >
                <Mail className="h-8 w-8" />
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default SocialLinks;
