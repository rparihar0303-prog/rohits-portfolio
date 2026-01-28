import { SEOHead } from '@/components/SEOHead';
import { PortfolioNavbar } from '@/components/portfolio/PortfolioNavbar';
import { ContactSection } from '@/components/portfolio/ContactSection';
import { Footer } from '@/components/portfolio/Footer';

const Contact = () => {
  return (
    <>
      <SEOHead 
        title="Contact"
        description="Get in touch with Rohti Parihar for freelance work, job opportunities, or project collaborations. Available for new projects!"
        keywords="contact, hire developer, freelance, get in touch"
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
