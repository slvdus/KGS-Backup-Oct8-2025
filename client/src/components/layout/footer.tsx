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
    <footer className="bg-noir-800 border-t border-noir-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-beige-100 mb-4">Nature's Arsenal</h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner for premium firearms and equipment. 
              Licensed, professional, and committed to excellence.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-beige-100 transition-colors"
                data-testid="link-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-beige-100 transition-colors"
                data-testid="link-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-beige-100 transition-colors"
                data-testid="link-instagram"
              >
                <Instagram className="w-5 h-5" />
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
                  className="block text-gray-400 hover:text-beige-100 transition-colors"
                  data-testid={`link-footer-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <div className="space-y-2">
              {legalLinks.map((link) => (
                <a
                  key={link.href}
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
