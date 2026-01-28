import { SEOHead } from '@/components/SEOHead';
import { PortfolioNavbar } from '@/components/portfolio/PortfolioNavbar';
import { ExperienceSection } from '@/components/portfolio/ExperienceSection';
import { Footer } from '@/components/portfolio/Footer';

const Experience = () => {
  return (
    <>
      <SEOHead 
        title="Experience"
        description="Explore Rohti Parihar's professional journey - 5+ years of experience in full stack development, from startups to enterprise companies."
        keywords="work experience, career, software development, job history"
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
