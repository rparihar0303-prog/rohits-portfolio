import { Briefcase, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const workExperience = [
  {
    title: 'Co-Founder & CTO',
    company: 'Nexfolia',
    period: '2025 - Present',
    description:
      'Building modern websites and web applications for clients. Designing responsive UI, managing deployments, and learning full-stack development through real projects.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Git'],
  },
  {
    title: 'Frontend Developer (Self Projects)',
    company: 'Personal Practice',
    period: '2024 - Present',
    description:
      'Developed multiple UI components and mini projects using React and CSS. Practicing API integration, responsive layouts, and version control.',
    skills: ['React Basics', 'Tailwind CSS', 'JavaScript', 'GitHub'],
  },
];

const education = [
  {
    degree: 'B.Tech in Computer Science Engineering',
    school: 'Acropolis Institute of Technology & Research, Indore',
    period: '2024 - 2028 (Currently in 2nd Year)',
    description:
      'Studying core subjects including programming, data structures, and web technologies. Actively participating in practical labs and self-learning.',
  },
];

export const ExperienceSection = () => {
  return (
    <section className="py-20 lg:py-32 px-4 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">My Journey</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Experience
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Briefcase className="text-primary" size={20} />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                Work & Projects
              </h3>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

              <div className="space-y-8">
                {workExperience.map((exp, index) => (
                  <div key={index} className="relative pl-12">
                    <div className="absolute left-2 top-2 w-5 h-5 rounded-full bg-primary border-4 border-background" />

                    <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                          <h4 className="text-lg font-semibold text-foreground">
                            {exp.title}
                          </h4>
                          <span className="text-sm text-primary font-medium">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-primary/80 font-medium mb-3">
                          {exp.company}
                        </p>
                        <p className="text-muted-foreground text-sm mb-4">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <GraduationCap className="text-primary" size={20} />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                Education
              </h3>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-12">
                    <div className="absolute left-2 top-2 w-5 h-5 rounded-full bg-primary border-4 border-background" />

                    <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                          <h4 className="text-lg font-semibold text-foreground">
                            {edu.degree}
                          </h4>
                          <span className="text-sm text-primary font-medium">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-primary/80 font-medium mb-3">
                          {edu.school}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {edu.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-12">
              <h4 className="text-xl font-semibold text-foreground mb-6">
                Learning & Certifications
              </h4>

              <div className="space-y-4">
                <Card className="bg-card border-border">
                  <CardContent className="p-4">
                    <p className="font-medium text-foreground">
                      Python Programming Certification
                    </p>
                    <p className="text-sm text-muted-foreground">
                      NPTEL (National Programme on Technology Enhanced Learning)
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="p-4">
                    <p className="font-medium text-foreground">
                      Full Stack Web Development (Ongoing)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Self Learning • Practice Projects • Online Courses
                    </p>
                  </CardContent>
                </Card>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
