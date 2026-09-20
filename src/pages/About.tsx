import { SEOHead } from '@/components/SEOHead';
import { PortfolioNavbar } from '@/components/portfolio/PortfolioNavbar';
import { AboutSection } from '@/components/portfolio/AboutSection';
import { Footer } from '@/components/portfolio/Footer';

const About = () => {
  return (
    <>
      <SEOHead 
        title="About Rohit Parihar"
        description="Learn more about Rohit Parihar, a Full Stack Developer focused on responsive design, modern web applications, and practical software engineering."
        keywords="about Rohit Parihar, full stack developer, web developer, React, TypeScript"
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
