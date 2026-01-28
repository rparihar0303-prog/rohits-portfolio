import { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const categories = ['All', 'Web Apps', 'Mobile', 'UI/UX', 'Open Source'];

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal responsive portfolio built using React and Tailwind CSS.",
    category: "Web",
  },
  {
    title: "React Practice App",
    description: "Small projects to practice React concepts and components.",
    category: "Web",
  },
  {
    title: "College Mini Project",
    description: "Academic project developed as part of coursework.",
    category: "Web",
  }
];


export const PortfolioSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="bg-card border-border">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>

                <p className="text-muted-foreground">
                  {project.description}
                </p>

                <span className="inline-block text-sm text-primary">
                  {project.category}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

