import { SEOHead } from '@/components/SEOHead';
import { PortfolioNavbar } from '@/components/portfolio/PortfolioNavbar';
import { AboutSection } from '@/components/portfolio/AboutSection';
import { Footer } from '@/components/portfolio/Footer';

const About = () => {
  return (
    <>
      <SEOHead 
        title="About Me"
        description="Learn more about John Doe, a Full Stack Developer and UI/UX Designer with expertise in React, TypeScript, and modern web technologies."
        keywords="about john doe, developer background, skills, experience"
      />
      <div className="min-h-screen bg-background">
        <PortfolioNavbar />
        <main className="pt-20">
          <AboutSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
