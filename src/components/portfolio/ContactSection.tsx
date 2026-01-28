import { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SocialLinks } from './SocialLinks';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'r.parihar0303@gmail.com', href: 'mailto:r.parihar0303@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 8871785707', href: 'tel:+918871785707' },
  { icon: MapPin, label: 'Location', value: 'Indore (MP)', href: null },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // ✅ EMAILJS SUBMIT HANDLER
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_yaejytg",     // 🔁 replace from EmailJS dashboard
        "template_8290tog",    // 🔁 replace from EmailJS dashboard
        formData,
        "eZSJR3WOt2rOp-Ebj"      // 🔁 replace from EmailJS dashboard
      );

      toast({
        title: "Message Sent!",
        description: "Thanks for contacting Nexfolia. We'll reach out shortly.",
      });

      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
      });
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="py-20 lg:py-32 px-4 bg-secondary/20">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Get In Touch</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Contact Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Let's Talk</h3>
              <p className="text-muted-foreground leading-relaxed">
                We help businesses and startups build modern websites, scalable web applications,
                and high-performing digital solutions. If you’re planning a new project, need a
                website upgrade, or want to grow your online presence — let’s connect and bring your
                ideas to life.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;

                return (
                  <Card key={info.label} className="bg-card border-border hover:border-primary/50 transition-colors">
                    <CardContent className="p-4">
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href?.startsWith("http") ? "_blank" : "_self"}
                          rel={info.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="flex items-center gap-4 group"
                        >

                          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                            <Icon className="text-primary" size={20} />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{info.label}</p>
                            <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                              {info.value}
                            </p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                            <Icon className="text-primary" size={20} />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{info.label}</p>
                            <p className="text-foreground font-medium">{info.value}</p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Follow Me</h4>
              <SocialLinks size="lg" />
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="xyz@gmail.com"
                    required
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Write your message here"
                    required
                    className="bg-secondary border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover-glow gap-2"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </Button>

              </form>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};
