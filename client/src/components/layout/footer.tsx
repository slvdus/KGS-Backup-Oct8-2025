import { Link } from "wouter";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const footerLinks = [
    { href: "/", label: "Home" },
    { href: "/catalog", label: "Catalog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const legalLinks = [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "FFL Information" },
    { href: "#", label: "Compliance" },
  ];

  return (
    <footer className="glass-effect border-t border-noir-700/50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-beige-100/3 rounded-full blur-2xl float"></div>
        <div className="absolute top-0 right-1/3 w-48 h-48 bg-beige-100/2 rounded-full blur-3xl float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold gradient-text mb-4 pulse-glow">Nature's Arsenal</h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner for premium firearms and equipment. 
              Licensed, professional, and committed to excellence.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 rounded-full glass-effect border border-noir-700/50 text-gray-400 hover:text-beige-100 hover:border-beige-100/30 transition-all duration-300 group"
                data-testid="link-facebook"
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full glass-effect border border-noir-700/50 text-gray-400 hover:text-beige-100 hover:border-beige-100/30 transition-all duration-300 group"
                data-testid="link-twitter"
              >
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full glass-effect border border-noir-700/50 text-gray-400 hover:text-beige-100 hover:border-beige-100/30 transition-all duration-300 group"
                data-testid="link-instagram"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-400 hover:text-beige-100 transition-all duration-300 relative group"
                  data-testid={`link-footer-${link.label.toLowerCase()}`}
                >
                  <span className="relative">
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-beige-100 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <div className="space-y-2">
              {legalLinks.map((link, index) => (
                <a
                  key={`${link.href}-${index}`}
                  href={link.href}
                  className="block text-gray-400 hover:text-beige-100 transition-colors"
                  data-testid={`link-legal-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-noir-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 Nature's Arsenal. All rights reserved. | Licensed FFL Dealer
          </p>
        </div>
      </div>
    </footer>
  );
}
