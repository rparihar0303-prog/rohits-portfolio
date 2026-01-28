'use client'; // ✅ Keep this if you are using Next.js (safe even in Vite)

import { Code, Palette, Rocket, Users } from 'lucide-react';

// ✅ If this path gives error, replace with your relative path
import { Card, CardContent } from '@/components/ui/card';

const skills = [
  { name: 'React', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'UI/UX Design', level: 88 },
  { name: 'Python', level: 75 },
  { name: 'AWS', level: 70 },
];

const features = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and well-documented code.',
  },
  {
    icon: Palette,
    title: 'Modern Design',
    description: 'Creating beautiful interfaces with attention to detail.',
  },
  {
    icon: Rocket,
    title: 'Fast Delivery',
    description: 'Delivering projects on time without compromising quality.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively with teams and stakeholders.',
  },
];

export const AboutSection = () => {
  return (
    <section className="py-20 lg:py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Get To Know</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Full Stack Developer and UI/UX Designer based in San Francisco.
              With over 5 years of experience in the tech industry, I've had the privilege of
              working with startups and enterprises alike, helping them build digital products
              that users love.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey started with a curiosity for how things work on the web. Today, I
              specialize in building robust web applications using modern technologies like
              React, TypeScript, and Node.js. I believe in writing clean, efficient code and
              creating intuitive user experiences.
            </p>

            {/* Company Info */}
            <Card className="bg-card border-border mt-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Currently at <span className="text-primary">TechCorp Inc.</span>
                </h3>
                <p className="text-muted-foreground">
                  Leading the frontend development team, building scalable SaaS products
                  that serve over 100,000 users worldwide.
                </p>
              </CardContent>
            </Card>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {features.map((feature) => {
                const Icon = feature.icon; // ✅ FIXED

                return (
                  <Card
                    key={feature.title}
                    className="bg-card border-border hover:border-primary/50 transition-colors"
                  >
                    <CardContent className="p-4">
                      <Icon className="text-primary mb-2" size={24} />
                      <h4 className="font-semibold text-foreground mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Skills & Expertise
            </h3>

            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-foreground font-medium">
                    {skill.name}
                  </span>
                  <span className="text-primary">{skill.level}%</span>
                </div>

                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <Card className="bg-card border-border text-center p-6">
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground">
                  Years Experience
                </p>
              </Card>

              <Card className="bg-card border-border text-center p-6">
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">
                  Projects Done
                </p>
              </Card>

              <Card className="bg-card border-border text-center p-6">
                <p className="text-3xl font-bold text-primary">30+</p>
                <p className="text-sm text-muted-foreground">
                  Happy Clients
                </p>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
