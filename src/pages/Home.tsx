import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnalyticsWidget from "@/components/AnalyticsWidget";
import { FileText, Github, Linkedin, Mail, MapPin } from "lucide-react";

const Home = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="py-6 text-center">
        <h1 className="text-4xl font-bold text-gray-200 mb-6">Hi, I'm JamaL</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          Breaking the Deployment Barrier
          Automating, Scaling, and Engineering for Maximum Uptime
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild className="bg-gray-800 text-gray-200 hover:bg-gray-700">
            <Link to="/projects">View My Work</Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="border-gray-600 text-gray-200 hover:bg-gray-700"
          >
            <Link to="/resume">Resume</Link>
          </Button>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-1 px-4">
        <Card className="bg-gray-800 border border-gray-700">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* About Me Text */}
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-200 mb-4">About Me</h2>
                <p className="mb-4 text-gray-400">
                  I’m Jamal Anwar, a seasoned DevOps and SRE professional with a
                  relentless drive to streamline workflows, automate deployments,
                  and optimize system performance. With years of hands-on experience
                  in cloud infrastructure, CI/CD pipelines, and Infrastructure as Code (IaC),
                  I thrive on solving complex challenges with scalable solutions.
                </p>
                <p className="mb-4 text-gray-400">
                  When I’m not automating deployments and optimizing systems,
                  I’m breaking things just to see if I can fix them better.
                </p>
                <p className="mb-4 text-gray-400">
                  Coffee fuels my uptime, memes keep my sanity in check,
                  and chaotic side projects remind me that even perfection can be improved.
                </p>

                {/* Contact Info and Social Links */}
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  {/* Contact Info Icons */}
                  <a
                    href="mailto:jamallinks@gmail.com"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="hidden sm:inline">hirejamal1@gmail.com</span>
                  </a>
                  <span className="flex items-center gap-2 text-sm text-gray-400">
                    <MapPin className="h-5 w-5" />
                    <span className="hidden sm:inline">Chicagoland</span>
                  </span>
                  <Button
                    onClick={() => console.log("Resume download clicked")}
                    variant="outline"
                    size="sm"
                    className="text-sm text-gray-200 border-gray-600 hover:bg-gray-700"
                  >
                    <FileText className="h-4 w-4" />
                    CV
                  </Button>

                  {/* Social Links */}
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-200 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jamal-lamaj/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-200 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>

              {/* Profile Image */}
              <div className="flex items-center justify-center">
                <div className="profile-image-container flex items-center justify-center">
                  <div className="relative">
                    {/* Animated orange ring */}
                    <span className="absolute inset-0 rounded-full ring-4 ring-orange-500 animate-pulse"></span>
                    <div className="relative bg-gray-700 w-48 h-48 sm:w-64 sm:h-64 rounded-full flex items-center justify-center overflow-hidden">
                      <img
                        src="`/Jamal.jpg"
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

      {/* Skills Section */}
      <section className="py-8 px-4">
        <Card className="bg-gray-800 border border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-200">Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {["DevOps", "CI/CD", "Terraform", "GitLab", "Docker", "AWS"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-gray-700 text-gray-200 hover:bg-gray-600 transition-colors"
                >
                  {skill}
                </span>
              ))}
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