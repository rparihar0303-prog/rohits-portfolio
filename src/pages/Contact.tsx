import { SEOHead } from '@/components/SEOHead';
import { PortfolioNavbar } from '@/components/portfolio/PortfolioNavbar';
import { ContactSection } from '@/components/portfolio/ContactSection';
import { Footer } from '@/components/portfolio/Footer';

const Contact = () => {
  return (
    <>
      <SEOHead 
        title="Contact Rohit Parihar"
        description="Get in touch with Rohit Parihar for web development projects, collaboration opportunities, and professional discussions."
        keywords="contact Rohit Parihar, hire full stack developer, web development, project inquiry"
      />
      <div className="min-h-screen bg-background">
        <PortfolioNavbar />
        <main className="pt-20">
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
