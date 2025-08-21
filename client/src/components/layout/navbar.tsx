import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ShoppingCart, Crosshair } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/contexts/cart-context";

export default function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/catalog", label: "Inventory" },
    { href: "/about", label: "About" },
    { href: "/community", label: "Community" },
    { href: "/appointment", label: "Appointment" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-2 left-2 right-2 sm:top-3 sm:left-3 sm:right-3 md:top-4 md:left-4 md:right-4 z-50 apple-glass-nav rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 sm:h-14 md:h-16">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex-shrink-0 group relative" data-testid="link-home-logo">
              <motion.div 
                className="flex items-center gap-2 sm:gap-3"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Scope/Crosshair Logo */}
                <motion.div 
                  className="relative"
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <Crosshair className="w-6 h-6 sm:w-7 sm:h-7 text-beige-100" strokeWidth={2} />
                  {/* Animated glow effect */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-6 h-6 sm:w-7 sm:h-7 bg-beige-100/20 rounded-full blur-xl" />
                  </motion.div>
                </motion.div>
                
                {/* Brand Name */}
                <h1 className="text-lg sm:text-xl font-bold gradient-text relative">
                  KGS CREW
                </h1>
              </motion.div>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-6 lg:ml-10 flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link, index) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className={`nav-link block px-3 lg:px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl relative apple-nav-item ${
                    isActive(link.href)
                      ? "text-beige-100 bg-beige-100/15 shadow-inner"
                      : "text-white/90 hover:text-beige-100 hover:bg-white/10"
                  }`}
                  data-testid={`link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Cart Button and Mobile menu */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <motion.button
              onClick={toggleCart}
              className="relative p-2 sm:p-2.5 md:p-3 text-white hover:text-beige-100 rounded-xl transition-all duration-300 apple-nav-item group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="button-cart"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-beige-100/5 via-beige-100/10 to-beige-100/5 rounded-xl opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
              {totalItems > 0 && (
                <motion.span
                  className="absolute -top-0.5 -right-0.5 md:-top-1 md:-right-1 bg-gradient-to-br from-beige-100 to-beige-200 text-noir-900 text-xs font-bold w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center shadow-lg border border-white/20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  data-testid="cart-badge"
                >
                  {totalItems > 99 ? '99+' : totalItems}
                </motion.span>
              )}
            </motion.button>

            {/* Mobile menu button */}
            <div className="md:hidden">
            <motion.button
              type="button"
              className="text-white hover:text-beige-100 p-2 sm:p-2.5 rounded-xl transition-all duration-300 apple-nav-item relative overflow-hidden"
              onClick={toggleMobileMenu}
              data-testid="button-mobile-menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-beige-100/10 rounded-lg"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                initial={false}
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
                className="relative z-10"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </motion.div>
            </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden apple-glass-nav border-t border-white/10 rounded-b-2xl mt-1 mx-3 md:mx-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-3 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg transition-all duration-200 font-medium text-base ${
                    isActive(link.href)
                      ? "text-beige-100 bg-beige-100/15 shadow-inner"
                      : "text-white/90 hover:text-beige-100 hover:bg-white/10"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
