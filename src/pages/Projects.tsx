
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "lucide-react";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of Project One and what technologies were used.",
    category: "web",
    image: "placeholder.svg",
    tags: ["React", "TypeScript", "Tailwind"],
    projectUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of Project Two and what technologies were used.",
    category: "mobile",
    image: "placeholder.svg",
    tags: ["React Native", "Firebase"],
    projectUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Project Three",
    description: "A brief description of Project Three and what technologies were used.",
    category: "web",
    image: "placeholder.svg",
    tags: ["Next.js", "GraphQL", "Prisma"],
    projectUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Project Four",
    description: "A brief description of Project Four and what technologies were used.",
    category: "design",
    image: "placeholder.svg",
    tags: ["Figma", "UI/UX"],
    projectUrl: "#",
    githubUrl: "#"
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <Card className="bg-gray-800 border border-gray-700 hover:shadow-md transition-shadow">
      <CardHeader className="p-0 overflow-hidden">
        <div className="h-48 bg-gray-700 flex items-center justify-center">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <CardTitle className="text-gray-200">{project.title}</CardTitle>
        <CardDescription className="mt-2 text-gray-400">{project.description}</CardDescription>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="bg-gray-700 text-gray-300 text-xs py-1 px-2 rounded">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" className="text-gray-300 border-gray-600 hover:bg-gray-700">
          <Link size={16} className="mr-2" />
          View Project
        </Button>
        <Button variant="secondary" size="sm" className="bg-gray-700 text-gray-300 hover:bg-gray-600">
          GitHub
        </Button>
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">My Projects</h1>
      <p className="text-muted-foreground max-w-2xl">
        Here's a selection of my recent work. Each project presented unique challenges and 
        opportunities to learn and grow as a developer.
      </p>
      
      <Tabs defaultValue="all" className="mt-8">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="web">Web</TabsTrigger>
          <TabsTrigger value="mobile">Mobile</TabsTrigger>
          <TabsTrigger value="design">Design</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="web" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(p => p.category === "web").map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="mobile" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(p => p.category === "mobile").map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="design" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(p => p.category === "design").map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Projects;
