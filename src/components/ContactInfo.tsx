
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, FileText } from "lucide-react";

const ContactInfo = () => {
  const handleDownloadResume = () => {
    // In a real implementation, this would link to an actual resume file
    // For now, we'll just log to console
    console.log("Resume download clicked");
  };

  return (
    <section className="py-6">
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <a href="mailto:your.email@example.com" className="hover:underline">
                your.email@example.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <span>Your Location, City, Country</span>
            </div>
            <div className="flex items-center gap-3">
              <Button onClick={handleDownloadResume} variant="outline" className="flex gap-2 items-center">
                <FileText className="h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ContactInfo;
