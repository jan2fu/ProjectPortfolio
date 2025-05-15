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
      {/* Calendly and Preferred Contact Methods side by side */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Calendly Scheduling Card */}
        <div>
          <h1 className="text-3xl font-bold text-gray-200 mb-4">Let's Chat.</h1>
          <Card className="bg-gray-800 border border-gray-700 hover:shadow-md transition-shadow">
            <CardHeader className="bg-gray-700 rounded-t-lg border-b border-gray-600">
              <CardTitle className="text-gray-200">Calendly Scheduling</CardTitle>
              <CardDescription className="text-gray-400">
                Select a time slot that works for you, and I'll be in touch.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 md:p-6">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/jamalample/30min"
                style={{ minWidth: "100%", height: "600px" }}
              ></div>
            </CardContent>
          </Card>
        </div>

        {/* Preferred Contact Methods */}
        <div>
          <h2 className="text-3xl font-bold text-gray-200 mb-4">Get in Touch.</h2>
          <div className="grid gap-6">
            <Card className="hover:shadow-md transition-shadow bg-gray-800 border border-gray-700">
              <CardContent className="p-4 md:p-6 flex items-center">
                <div className="bg-gray-700 p-4 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-gray-300" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-200">Email</h3>
                  <p className="text-gray-400 break-all">hirejamal1@gmail.com</p>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow bg-gray-800 border border-gray-700">
              <CardContent className="p-4 md:p-6 flex items-center">
                <div className="bg-gray-700 p-4 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-200">LinkedIn</h3>
                  <p className="text-gray-400 break-all">https://www.linkedin.com/in/jamal-lamaj/</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;