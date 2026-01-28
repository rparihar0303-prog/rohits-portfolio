import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialLinksProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabels?: boolean;
}

const socialData = [
  { 
    name: 'LinkedIn', 
    icon: Linkedin, 
    href: 'https://www.linkedin.com/in/rohit-parihar-63a216354?',   // ✅ change if needed
    color: 'hover:text-[#0A66C2]' 
  },
  { 
    name: 'GitHub', 
    icon: Github, 
    href: 'https://github.com/rparihar0303',         // ✅ change if needed
    color: 'hover:text-foreground' 
  },
  { 
    name: 'Instagram', 
    icon: Instagram, 
    href: 'https://instagram.com/r_18parihar',     // ✅ change if needed
    color: 'hover:text-[#E4405F]' 
  },
  { 
    name: 'Email', 
    icon: Mail, 
    href: 'mailto:rparihar0303@gmail.com',             // ✅ change if needed
    color: 'hover:text-primary' 
  },
];

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
};

const iconSizes = {
  sm: 16,
  md: 20,
  lg: 24,
};

export const SocialLinks = ({ className, size = 'md' }: SocialLinksProps) => {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {socialData.map((social) => {
        const Icon = social.icon; // ✅ safe rendering

        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'flex items-center justify-center rounded-full bg-secondary border border-border transition-all duration-300 hover:border-primary/50 hover:scale-110',
              sizeClasses[size],
              social.color
            )}
            aria-label={social.name}
          >
            <Icon size={iconSizes[size]} />
          </a>
        );
      })}
    </div>
  );
};
