import { SEOHead } from '@/components/SEOHead';
import { PortfolioNavbar } from '@/components/portfolio/PortfolioNavbar';
import { PortfolioSection } from '@/components/portfolio/PortfolioSection';
import { Footer } from '@/components/portfolio/Footer';

const Portfolio = () => {
  return (
    <>
      <SEOHead 
        title="Rohit Parihar | Portfolio"
        description="View Rohit Parihar's portfolio, featuring practical web projects, frontend work, and user-focused interfaces built with modern development tools."
        keywords="Rohit Parihar portfolio, web projects, React projects, frontend portfolio, full stack work"
      />
      <div className="min-h-screen bg-background">
        <PortfolioNavbar />
        <main className="pt-20">
          <PortfolioSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
