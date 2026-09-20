import { SEOHead } from '@/components/SEOHead';
import { PortfolioNavbar } from '@/components/portfolio/PortfolioNavbar';
import { ExperienceSection } from '@/components/portfolio/ExperienceSection';
import { Footer } from '@/components/portfolio/Footer';

const Experience = () => {
  return (
    <>
      <SEOHead 
        title="Rohit Parihar | Experience"
        description="Explore Rohit Parihar's journey as a Full Stack Developer, including hands-on work in frontend development, UI/UX thinking, and modern web technologies."
        keywords="Rohit Parihar experience, full stack developer, web development, UI/UX, React"
      />
      <div className="min-h-screen bg-background">
        <PortfolioNavbar />
        <main className="pt-20">
          <ExperienceSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Experience;
