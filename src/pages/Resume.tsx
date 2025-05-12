
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import { toast } from "sonner";

const Resume = () => {
  const handleDownload = () => {
    // In a real implementation, this would point to your actual resume file
    toast.success("Resume download started!");
    // Would normally trigger download with: window.open("/path-to-resume.pdf", "_blank");
  };

  const skillCategories = [
    {
      name: "Programming Languages",
      color: "from-blue-100 to-blue-50",
      textColor: "text-blue-800",
      skills: ["JavaScript", "TypeScript", "Python", "Java"]
    },
    {
      name: "Frameworks",
      color: "from-purple-100 to-purple-50",
      textColor: "text-purple-800",
      skills: ["React", "Next.js", "Node.js", "Express"]
    },
    {
      name: "Tools & Technologies", 
      color: "from-green-100 to-green-50",
      textColor: "text-green-800",
      skills: ["Git", "Docker", "AWS", "Firebase"]
    },
    {
      name: "Design",
      color: "from-amber-100 to-amber-50",
      textColor: "text-amber-800",
      skills: ["Figma", "Adobe XD", "UI/UX", "Responsive Design"]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Resume</h1>
        <Button 
          onClick={handleDownload}
          className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
        >
          <Download size={16} className="mr-2" />
          Download PDF
        </Button>
      </div>

      {/* Skills Section with enhanced styling */}
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-6">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.name} className="overflow-hidden transition-all hover:shadow-md">
              <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
              <CardContent className="p-6">
                <h3 className={`font-bold text-lg mb-4 ${category.textColor}`}>{category.name}</h3>
                <div className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill} 
                      className={`p-3 rounded-md bg-gradient-to-r ${category.color} hover:opacity-90 transition-opacity text-center`}
                    >
                      <span className="font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-bold mb-6">Experience</h2>
        <div className="space-y-6">
          <Card className="hover:shadow-md transition-shadow bg-gradient-to-br from-white to-blue-50">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium">Niantic Inc.</h3>
                <span className="text-sm text-muted-foreground">2021 - 2023</span>
              </div>
              <h4 className="font-medium mb-4">Build Engineer</h4>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Engineered multi-tenant, high-performance hosting solutions on AWS by designing robust
                  Infrastructure as Code with Terraform. This enabled efficient provisioning of virtual machines,
                  storage, and networking to support over 500,000 active users while optimizing asset delivery for
                  Unity-based Android apps, reducing load times by 25%</li>
                <li>Instituted trunk-based development practices and built automated CI/CD workflows in GitLab
                  integrated with Visual Studio App Center. These initiatives reduced deployment times by 40% and
                  decreased build failures by 60%, all while incorporating BASH-based monitoring and alerts to
                  enhance operational efficiency.</li>
                <li>Collaborated with development teams to orchestrate seamless multi-platform deployments, elevating
                  system reliability by 20% and ensuring the stability of complex, high-volume environments.</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow bg-gradient-to-br from-white to-purple-50">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium">Sinclair Broadcast Group</h3>
                <span className="text-sm text-muted-foreground">2015 - 2021</span>
              </div>
              <h4 className="font-medium mb-4">Developer</h4>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Developed robust Terraform templates and automated deployment cycles (using BASH and Python),
                  which enhanced the scalability and reliability of cloud-based infrastructures supporting over 100,000
                  daily active users in a multi-tenant setting.</li>
                <li>Constructed resilient CI/CD pipelines using Xcode Command Line tools and Gradle to boost deployment
                  success by 30% in a high-complexity enterprise environment.</li>
                <li>Engineered and managed an enterprise fleet of 14 macOS build agents to power fully automated CI/CD
                  pipelines for React Native mobile apps. Leveraged tools like Fastlane, GitLab CI/CD, and Visual Studio
                  App Center to cut build times by 35% and release times by 40%.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow bg-gradient-to-br from-white to-green-50">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium">AT&T</h3>
                <span className="text-sm text-muted-foreground">2012 - 2015</span>
              </div>
              <h4 className="font-medium mb-4">UAT Test Engineer</h4>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Executed comprehensive end-to-end testing for mobile and web applications—including API
                  verifications and network validation using Tectronix IRIS—to ensure integration reliability in multi￾tenant systems.</li>
                <li>Utilized advanced bug tracking and test management tools (JIRA, Rally, HP Quality Center, HP ALM)
                  to support the full software development lifecycle, contributing to secure and scalable deployments
                  within high-complexity infrastructures.</li>
              </ul>
            </CardContent>
          </Card>
          {/* Skills Section (moved from Home page) */}
          <section className="py-8">
            <h2 className="text-2xl font-bold mb-6">Additional Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
              {["DevOps", "CI/CD", "Terraform", "Gitlab", "Skill 5", "Skill 6", "Skill 7", "Skill 8"].map((skill) => (
                <Card key={skill} className="flex items-center justify-center p-4 h-24">
                  <span>{skill}</span>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Resume;
