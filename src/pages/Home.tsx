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
        title="Rohit Parihar | Full Stack Developer"
        description="Portfolio of Rohit Parihar, a Full Stack Developer focused on creating responsive, user-friendly web experiences with React, TypeScript, and modern UI design."
        keywords="Rohit Parihar, full stack developer, React developer, TypeScript, web developer, portfolio"
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
