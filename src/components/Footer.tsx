import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Blog", href: "/blog" },
  ];

  const customerLinks = [
    { name: "Contact Us", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Shipping Info", href: "/shipping" },
    { name: "Returns", href: "/returns" },
    { name: "Size Guide", href: "/size-guide" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">S</span>
              </div>
              <span className="font-display font-bold text-xl">ShopHub</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm max-w-sm">
              Your premier destination for quality products and exceptional shopping experiences. 
              Discover, shop, and enjoy with confidence.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="icon"
                    className="text-primary-foreground/80 hover:text-accent hover:bg-primary-light/20"
                    asChild
                  >
                    <a href={social.href} aria-label={social.name}>
                      <Icon className="h-5 w-5" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-3">
              {customerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span>support@shophub.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>123 Commerce St, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Connected</h3>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-light/20 border-primary-light/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-accent"
              />
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Subscribe
              </Button>
            </div>
            
            {/* Payment Methods */}
            <div className="mt-6">
              <p className="text-sm font-medium mb-2">Secure Payments</p>
              <div className="flex space-x-2 text-primary-foreground/60">
                <div className="w-8 h-5 bg-primary-light/20 rounded flex items-center justify-center text-xs">
                  💳
                </div>
                <div className="w-8 h-5 bg-primary-light/20 rounded flex items-center justify-center text-xs">
                  💰
                </div>
                <div className="w-8 h-5 bg-primary-light/20 rounded flex items-center justify-center text-xs">
                  🔒
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-light/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-wrap gap-4 text-sm text-primary-foreground/80">
            {legalLinks.map((link, index) => (
              <span key={link.name}>
                <Link to={link.href} className="hover:text-accent transition-colors">
                  {link.name}
                </Link>
                {index < legalLinks.length - 1 && (
                  <span className="ml-4 text-primary-foreground/40">|</span>
                )}
              </span>
            ))}
          </div>
          <p className="text-sm text-primary-foreground/80">
            © {new Date().getFullYear()} ShopHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;