
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Schedule a Call</h1>
      <p className="text-muted-foreground max-w-2xl">
        I'm always interested in discussing new projects, creative ideas, or opportunities to be part of your vision.
      </p>
      
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Calendly Scheduling</CardTitle>
          <CardDescription>
            Select a time slot that works for you, and I'll be in touch.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* This would be replaced with actual Calendly embed */}
          <div className="border-2 border-dashed border-muted rounded-md p-8 min-h-[600px] flex flex-col items-center justify-center">
            <h2 className="text-xl font-semibold mb-4">Calendly Integration</h2>
            <p className="text-muted-foreground text-center max-w-lg mb-6">
              This is where your Calendly widget would be embedded.
              You can easily integrate Calendly by adding their embed script.
            </p>
            <p className="text-sm text-muted-foreground max-w-md text-center">
              For implementation, add Calendly's inline widget code:
              <br />
              &lt;div 
                class="calendly-inline-widget" 
                data-url="https://calendly.com/your-account" 
                style="min-width:320px;height:600px;"
              &gt;&lt;/div&gt;
              <br />
              &lt;script src="https://assets.calendly.com/assets/external/widget.js"&gt;&lt;/script&gt;
            </p>
          </div>
        </CardContent>
      </Card>
      
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-6">Preferred Contact Methods</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6 flex items-center">
              <div className="bg-primary/10 p-4 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">your.email@example.com</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center">
              <div className="bg-primary/10 p-4 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">LinkedIn</h3>
                <p className="text-muted-foreground">linkedin.com/in/yourprofile</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
