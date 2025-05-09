
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const Resume = () => {
  const handleDownload = () => {
    // In a real implementation, this would point to your actual resume file
    toast.success("Resume download started!");
    // Would normally trigger download with: window.open("/path-to-resume.pdf", "_blank");
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Resume</h1>
        <Button onClick={handleDownload}>
          <Download size={16} className="mr-2" />
          Download PDF
        </Button>
      </div>

      {/* Skills Section (moved from Home page) */}
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-6">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5", "Skill 6", "Skill 7", "Skill 8"].map((skill) => (
            <Card key={skill} className="flex items-center justify-center p-4 h-24">
              <span>{skill}</span>
            </Card>
          ))}
        </div>
      </section>

      <Card className="mt-8">
        <CardContent className="p-6">
          {/* This would be replaced with an actual embedded PDF viewer */}
          <div className="border-2 border-dashed border-muted rounded-md p-8 min-h-[800px] flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">Resume Preview</h2>
            <p className="text-muted-foreground mb-6 text-center max-w-lg">
              This is where your embedded resume would appear. You can use an iframe to embed 
              a PDF viewer or a service like Google Docs embed.
            </p>
            <p className="text-sm text-muted-foreground">
              For implementation, you could use:
              <br />
              &lt;iframe src="your-resume.pdf" width="100%" height="800px"&gt;&lt;/iframe&gt;
            </p>
          </div>
        </CardContent>
      </Card>

      <section className="py-8">
        <h2 className="text-2xl font-bold mb-6">Experience</h2>
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium">Company Name</h3>
                <span className="text-sm text-muted-foreground">2020 - Present</span>
              </div>
              <h4 className="font-medium mb-4">Senior Developer</h4>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Led development of key projects resulting in 30% increase in user engagement.</li>
                <li>Mentored junior developers and conducted code reviews to ensure code quality.</li>
                <li>Implemented CI/CD pipelines reducing deployment time by 40%.</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium">Previous Company</h3>
                <span className="text-sm text-muted-foreground">2017 - 2020</span>
              </div>
              <h4 className="font-medium mb-4">Developer</h4>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Developed and maintained web applications using React and Node.js.</li>
                <li>Collaborated with design team to implement responsive UI components.</li>
                <li>Optimized database queries resulting in 50% faster load times.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-bold mb-6">Education</h2>
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-medium">University Name</h3>
              <span className="text-sm text-muted-foreground">2013 - 2017</span>
            </div>
            <h4 className="font-medium mb-2">Bachelor of Science in Computer Science</h4>
            <p className="text-muted-foreground">Graduated with honors. Specialized in software development and data structures.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Resume;
