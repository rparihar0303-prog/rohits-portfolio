import { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const categories = ['All', 'Web Apps', 'Mobile', 'UI/UX', 'Open Source'];

const projects = [
  {
    title: "Personal Portfolio",
    description: "A responsive portfolio experience built with React, TypeScript, and Tailwind CSS to present my work, skills, and contact information clearly.",
    category: "Web",
  },
  {
    title: "React UI Practice",
    description: "A series of frontend experiments focused on reusable components, responsive layouts, and clean user interfaces.",
    category: "UI/UX",
  },
  {
    title: "College Web Project",
    description: "An academic project centred on building a practical web interface with structured layout, user flow, and modern styling decisions.",
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

