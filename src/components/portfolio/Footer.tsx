import { Link } from 'react-router-dom';
import { SocialLinks } from './SocialLinks';
import { Heart } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
];

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <Link to="/" className="inline-flex items-center gap-2">
              <span className="text-3xl font-bold text-primary">Rohit's</span>
              <span className="text-lg font-medium text-foreground">Portfolio</span>
            </Link>
            <p className="text-muted-foreground text-sm mt-2">
              <p className="text-muted-foreground">
                Building modern websites and scalable digital solutions.
              </p>
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {quickLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end">
            <SocialLinks size="sm" />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Rohit Parihar. Made with
            <Heart size={14} className="text-primary fill-primary" />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
