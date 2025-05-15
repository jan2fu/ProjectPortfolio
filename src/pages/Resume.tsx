import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import { toast } from "sonner";

const Resume = () => {
  const handleDownload = () => {
    const resumeUrl = "/path-to-resume.pdf"; // Replace with the actual path to your resume
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Jamal_Resume.pdf";
    link.click();
    toast.success("Resume download started!");
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex justify-between items-center ">
        <Button
          onClick={handleDownload}
            className="bg-orange-500 hover:bg-orange-600 text-white"
        >
          <Download size={16} className="mr-2" />
          Download PDF
        </Button>
      </div>

      {/* Skills Section (Before Experience Section) */}
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-200">Skills</h2>
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
      </section>

      {/* Experience Section */}
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-200">Experience</h2>
        <div className="space-y-6">
          {/* Experience Cards */}
          <Card className="hover:shadow-md transition-shadow bg-gray-800 border border-gray-700">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium text-gray-100">Niantic Inc.</h3>
                <span className="text-sm text-gray-400">2021 - 2023</span>
              </div>
              <h4 className="font-medium mb-4 text-gray-300">Build Engineer</h4>
              <ul className="list-disc pl-5 space-y-4 text-gray-400">
                <li>
                  Engineered multi-tenant, high-performance hosting solutions on AWS by designing robust
                  Infrastructure as Code with Terraform. This enabled efficient provisioning of virtual machines,
                  storage, and networking to support over 500,000 active users while optimizing asset delivery for
                  Unity-based Android apps, reducing load times by 25%.
                </li>
                <li>
                  Instituted trunk-based development practices and built automated CI/CD workflows in GitLab
                  integrated with Visual Studio App Center. These initiatives reduced deployment times by 40% and
                  decreased build failures by 60%, all while incorporating BASH-based monitoring and alerts to
                  enhance operational efficiency.
                </li>
                <li>
                  Collaborated with development teams to orchestrate seamless multi-platform deployments, elevating
                  system reliability by 20% and ensuring the stability of complex, high-volume environments.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow bg-gray-800 border border-gray-700">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium text-gray-100">Sinclair Broadcast Group</h3>
                <span className="text-sm text-gray-400">2015 - 2021</span>
              </div>
              <h4 className="font-medium mb-4 text-gray-300">Developer</h4>
              <ul className="list-disc pl-5 space-y-4 text-gray-400">
                <li>
                  Developed robust Terraform templates and automated deployment cycles (using BASH and Python),
                  which enhanced the scalability and reliability of cloud-based infrastructures supporting over
                  100,000 daily active users in a multi-tenant setting.
                </li>
                <li>
                  Constructed resilient CI/CD pipelines using Xcode Command Line tools and Gradle to boost deployment
                  success by 30% in a high-complexity enterprise environment.
                </li>
                <li>
                  Engineered and managed an enterprise fleet of 14 macOS build agents to power fully automated CI/CD
                  pipelines for React Native mobile apps. Leveraged tools like Fastlane, GitLab CI/CD, and Visual
                  Studio App Center to cut build times by 35% and release times by 40%.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow bg-gray-800 border border-gray-700">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium text-gray-100">AT&T</h3>
                <span className="text-sm text-gray-400">2012 - 2015</span>
              </div>
              <h4 className="font-medium mb-4 text-gray-300">UAT Test Engineer</h4>
              <ul className="list-disc pl-5 space-y-4 text-gray-400">
                <li>
                  Executed comprehensive end-to-end testing for mobile and web applications—including API
                  verifications and network validation using Tectronix IRIS—to ensure integration reliability in
                  multi-tenant systems.
                </li>
                <li>
                  Utilized advanced bug tracking and test management tools (JIRA, Rally, HP Quality Center, HP ALM)
                  to support the full software development lifecycle, contributing to secure and scalable deployments
                  within high-complexity infrastructures.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section (After Experience Section) */}
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-200">Additional Skills</h2>
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
      </section>
    </div>
  );
};

export default Resume;