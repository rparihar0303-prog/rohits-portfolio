import { SEOHead } from '@/components/SEOHead';
import { PortfolioNavbar } from '@/components/portfolio/PortfolioNavbar';
import { PortfolioSection } from '@/components/portfolio/PortfolioSection';
import { Footer } from '@/components/portfolio/Footer';

const Portfolio = () => {
  return (
    <>
      <SEOHead 
        title="Portfolio"
        description="View Rohti Parihar's portfolio of web applications, mobile apps, and UI/UX design projects. 50+ successful projects completed."
        keywords="portfolio, projects, web development, mobile apps, ui/ux design"
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
