import { Link } from "wouter";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";

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
          <motion.div 
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-xl font-bold gradient-text mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Nature's Arsenal
            </motion.h3>
            <motion.p 
              className="text-gray-400 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Your trusted partner for premium firearms and equipment. 
              Licensed, professional, and committed to excellence.
            </motion.p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#", testId: "link-facebook" },
                { icon: Twitter, href: "#", testId: "link-twitter" },
                { icon: Instagram, href: "#", testId: "link-instagram" }
              ].map((social, index) => (
                <motion.a 
                  key={social.testId}
                  href={social.href}
                  className="p-2 rounded-full glass-effect border border-noir-700/50 text-gray-400 hover:text-beige-100 hover:border-beige-100/30 transition-all duration-300 group relative overflow-hidden"
                  data-testid={social.testId}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-beige-100/10 to-beige-100/20 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <social.icon className="w-5 h-5 relative z-10" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h4 
              className="text-lg font-semibold text-white mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Quick Links
            </motion.h4>
            <div className="space-y-2">
              {footerLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="block text-gray-400 hover:text-beige-100 transition-all duration-300 relative group"
                    data-testid={`link-footer-${link.label.toLowerCase()}`}
                  >
                    <motion.span 
                      className="relative"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-beige-100 group-hover:w-full transition-all duration-300"></span>
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.h4 
              className="text-lg font-semibold text-white mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Legal
            </motion.h4>
            <div className="space-y-2">
              {legalLinks.map((link, index) => (
                <motion.a
                  key={`${link.href}-${index}`}
                  href={link.href}
                  className="block text-gray-400 hover:text-beige-100 transition-colors relative group"
                  data-testid={`link-legal-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
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
