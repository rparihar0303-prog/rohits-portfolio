import { ArrowDown, Download, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SocialLinks } from './SocialLinks';
import { Link } from 'react-router-dom';
import profileImg from "@/assets/my_image.png";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10 pt-20">
        {/* Text Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left animate-fade-in">
          <p className="text-primary font-medium mb-4 text-lg">Hello, I'm</p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Rohit</span>{' '}
            <span className="text-gradient">Parihar</span>
          </h1>

          <h2 className="text-xl sm:text-2xl text-muted-foreground mb-6">
            FullStack Developer & Website Developer
          </h2>

          <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
            I build powerful, scalable, and user-friendly web applications as a Full Stack Developer and Website Designer. With 1+ years of experience, I turn ideas into high-performance digital products using clean code and modern design.
          </p>

          {/* CTA Buttons */}
          {/* <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover-glow gap-2"
              asChild
            >
              <Link to="/contact">
                <Send size={18} />
                Hire Me
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/50 text-foreground hover:bg-primary/10 gap-2"
            >
              <Download size={18} />
              Download CV
            </Button>
          </div> */}

          {/* Social Links */}
          <SocialLinks />
        </div>

        {/* Profile Image */}
        <div className="order-1 lg:order-2 flex justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-110" />

            {/* Image Container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-primary/30 overflow-hidden glow-yellow">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-primary/30 overflow-hidden glow-yellow">
                <img
                  src={profileImg}
                  alt="Rohit Parihar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -right-4 top-1/4 bg-card border border-border rounded-xl px-4 py-2 shadow-lg animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <p className="text-sm text-muted-foreground">Experience</p>
              <p className="text-xl font-bold text-primary">1+ Years</p>
            </div>

            <div className="absolute -left-4 bottom-1/4 bg-card border border-border rounded-xl px-4 py-2 shadow-lg animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <p className="text-sm text-muted-foreground">Projects</p>
              <p className="text-xl font-bold text-primary">3+</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-primary" size={28} />
      </div>
    </section>
  );
};
