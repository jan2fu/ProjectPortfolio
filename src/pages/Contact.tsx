
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Schedule a Call</h1>
      <p className="text-muted-foreground max-w-2xl">
        I'm always interested in discussing new projects, creative ideas, or opportunities to be part of your vision.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="mt-8 bg-white/80 backdrop-blur-sm hover:shadow-md transition-shadow">
          <CardHeader className="bg-blue-50 rounded-t-lg border-b border-blue-100">
            <CardTitle>Calendly Scheduling</CardTitle>
            <CardDescription>
              Select a time slot that works for you, and I'll be in touch.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* This would be replaced with actual Calendly embed */}
            <div className="border-2 border-dashed border-muted rounded-md p-8 min-h-[400px] md:min-h-[600px] flex flex-col items-center justify-center">
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

        <Card className="mt-8 bg-white/80 backdrop-blur-sm hover:shadow-md transition-shadow">
          <CardHeader className="bg-green-50 rounded-t-lg border-b border-green-100">
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>
              Send me a message directly and I'll respond as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <Input 
                  id="name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name" 
                  required
                  className="hover:border-primary/50 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input 
                  id="email" 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address" 
                  required
                  className="hover:border-primary/50 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea 
                  id="message" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message" 
                  required
                  className="min-h-[150px] hover:border-primary/50 focus:border-primary"
                />
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
              >
                <Mail className="mr-2 h-4 w-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-6">Preferred Contact Methods</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-md transition-shadow bg-gradient-to-br from-white to-blue-50">
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
          <Card className="hover:shadow-md transition-shadow bg-gradient-to-br from-white to-purple-50">
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
