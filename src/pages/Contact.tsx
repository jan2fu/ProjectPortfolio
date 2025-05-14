import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    // Dynamically load the Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("All fields are required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error("Failed to send the message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-200">Schedule a Call</h1>
      <p className="text-gray-400 max-w-2xl">
        I'm always interested in discussing new projects, creative ideas, or opportunities to be part of your vision.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Calendly Scheduling Card */}
        <Card className="mt-8 bg-gray-800 border border-gray-700 hover:shadow-md transition-shadow">
          <CardHeader className="bg-gray-700 rounded-t-lg border-b border-gray-600">
            <CardTitle className="text-gray-200">Calendly Scheduling</CardTitle>
            <CardDescription className="text-gray-400">
              Select a time slot that works for you, and I'll be in touch.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/jamalample/30min"
              style={{ minWidth: "320px", height: "600px" }}
            ></div>
          </CardContent>
        </Card>

        {/* Contact Form Card */}
        <Card className="mt-8 bg-gray-800 border border-gray-700 hover:shadow-md transition-shadow">
          <CardHeader className="bg-gray-700 rounded-t-lg border-b border-gray-600">
            <CardTitle className="text-gray-200">Get in Touch</CardTitle>
            <CardDescription className="text-gray-400">
              Send me a message directly and I'll respond as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                <Input 
                  id="name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name" 
                  required
                  className="bg-gray-900 text-gray-300 border-gray-700 hover:border-gray-500 focus:border-gray-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                <Input 
                  id="email" 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address" 
                  required
                  className="bg-gray-900 text-gray-300 border-gray-700 hover:border-gray-500 focus:border-gray-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <Textarea 
                  id="message" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message" 
                  required
                  className="bg-gray-900 text-gray-300 border-gray-700 hover:border-gray-500 focus:border-gray-500 min-h-[150px]"
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

      {/* Preferred Contact Methods */}
      <section className="py-8">
        <h2 className="text-2xl font-bold text-gray-200 mb-6">Preferred Contact Methods</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-md transition-shadow bg-gray-800 border border-gray-700">
            <CardContent className="p-6 flex items-center">
              <div className="bg-gray-700 p-4 rounded-full mr-4">
                <Mail className="h-6 w-6 text-gray-300" />
              </div>
              <div>
                <h3 className="font-medium text-gray-200">Email</h3>
                <p className="text-gray-400">your.email@example.com</p>
              </div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow bg-gray-800 border border-gray-700">
            <CardContent className="p-6 flex items-center">
              <div className="bg-gray-700 p-4 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-200">LinkedIn</h3>
                <p className="text-gray-400">linkedin.com/in/yourprofile</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;