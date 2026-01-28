import { SEOHead } from '@/components/SEOHead';
import { PortfolioNavbar } from '@/components/portfolio/PortfolioNavbar';
import { HeroSection } from '@/components/portfolio/HeroSection';
import { AboutSection } from '@/components/portfolio/AboutSection';
import { PortfolioSection } from '@/components/portfolio/PortfolioSection';
import { ContactSection } from '@/components/portfolio/ContactSection';
import { Footer } from '@/components/portfolio/Footer';

const Home = () => {
  return (
    <>
      <SEOHead 
        title="John Doe - Full Stack Developer & Designer"
        description="Portfolio of John Doe, a passionate Full Stack Developer and UI/UX Designer with 5+ years of experience building beautiful digital products."
        keywords="portfolio, full stack developer, ui/ux designer, react developer, web developer, frontend developer"
      />
      <div className="min-h-screen bg-background">
        <PortfolioNavbar />
        <main>
          <HeroSection />
          <AboutSection />
          <PortfolioSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
