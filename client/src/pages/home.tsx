import { motion } from "framer-motion";
import { Link } from "wouter";
import { ShieldCheck, Star, Users, Phone, ArrowRight, Shield, Target, Headphones, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProducts } from "@/hooks/use-products";
import ProductCard from "@/components/product/product-card";

export default function Home() {
  const { data: products } = useProducts();
  
  // Get best sellers (first 4 products)
  const bestSellers = products?.slice(0, 4) || [];
  
  const collections = [
    {
      title: "Handguns",
      description: "Premium pistols from Glock, S&W, Sig Sauer",
      icon: Target,
      category: "Handguns",
      gradient: "from-red-500/20 to-orange-500/20",
      borderColor: "border-red-500/30"
    },
    {
      title: "Rifles",
      description: "AR-15s, bolt-action, and hunting rifles",
      icon: Shield,
      category: "Rifles",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      title: "Less-Lethal",
      description: "Byrna launchers and self-defense options",
      icon: Package,
      category: "Less-Lethal Launchers",
      gradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      title: "Accessories",
      description: "Optics, holsters, and hearing protection",
      icon: Headphones,
      category: "Hearing Protection",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    }
  ];
  
  const features = [
    {
      icon: Star,
      title: "98% Recommend Us",
      description: "94+ verified reviews. Customers drive from ALL over PA & beyond for our unbeatable prices."
    },
    {
      icon: ShieldCheck,
      title: "Appointment-Only Exclusivity",
      description: "One-on-one personalized service. No crowds. No pressure. Just you and our expert team."
    },
    {
      icon: Users,
      title: "Family-Owned Since 2020",
      description: "Brent & Amber treat every customer like family. That's why they keep coming back."
    }
  ];

  return (
    <div className="min-h-screen" data-testid="page-home">
      {/* Hero Section */}
      <section className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Animated Dotted Grid Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="dotted-grid"></div>
          <div className="grid-overlay"></div>
          <div className="grid-pulse"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-particle particle-1"></div>
          <div className="floating-particle particle-2"></div>
          <div className="floating-particle particle-3"></div>
          <div className="floating-particle particle-4"></div>
          <div className="floating-particle particle-5"></div>
          <div className="floating-particle particle-6"></div>
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-noir-900/90 via-transparent to-noir-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-noir-900/80 via-transparent to-transparent"></div>
        
        {/* Moving Radial Spotlight */}
        <div className="hero-spotlight"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Badge - hidden on mobile, shown on desktop */}
          <motion.div
            className="mb-4 hidden sm:inline-block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-beige-100/10 border border-beige-100/30 text-beige-100 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
              🏆 98% Customer Recommendation Rate
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            data-testid="text-hero-title"
          >
            <span className="text-white">KGS</span>{" "}
            <span className="gradient-text pulse-glow">CREW</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-2 sm:mb-4 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-testid="text-hero-subtitle"
          >
            Pennsylvania's Best Prices in Firearms.
            <span className="block text-base sm:text-lg mt-2 text-beige-100">By Appointment Only - VIP Treatment</span>
          </motion.p>
          
          <motion.p 
            className="text-base sm:text-lg text-gray-400 mb-4 sm:mb-8 max-w-xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Skip the big box stores. Get wholesale pricing with personal service that actually cares about YOU.
          </motion.p>
          
          {/* Badge - shown on mobile above buttons, hidden on desktop */}
          <motion.div
            className="mb-4 inline-block sm:hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <span className="bg-beige-100/10 border border-beige-100/30 text-beige-100 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm">
              🏆 98% Customer Recommendation Rate
            </span>
          </motion.div>
          
          <motion.div 
            className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <a href="tel:717-249-0000">
                <Button 
                  className="bg-beige-100 hover:bg-beige-200 text-noir-900 font-bold shadow-lg hover:shadow-xl px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg w-full sm:w-auto btn-hover-effect magnetic-btn ripple relative overflow-hidden group flex items-center justify-center"
                  data-testid="button-book-appointment"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10 flex items-center"
                  >
                    Book Your Appointment
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      →
                    </span>
                  </motion.span>
                </Button>
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/catalog">
                <Button 
                  variant="outline"
                  className="glass-effect border-2 border-beige-100/30 text-beige-100 hover:bg-beige-100/10 hover:border-beige-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg w-full sm:w-auto btn-hover-effect magnetic-btn ripple relative overflow-hidden group flex items-center justify-center"
                  data-testid="button-browse-inventory"
                >
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10 flex items-center"
                  >
                    Browse Inventory
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      →
                    </span>
                  </motion.span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.p 
            className="text-sm text-gray-400 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            📍 10 Vale Road, Newville, PA | 📞 717-249-0000
          </motion.p>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-16 sm:py-20 bg-noir-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-noir-800/30 to-noir-900"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">
              <span className="gradient-text">Best Sellers</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2 sm:px-0">
              Our most popular firearms flying off the shelves
            </p>
          </motion.div>
          
          {bestSellers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {bestSellers.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-400">Loading best sellers...</p>
            </div>
          )}
          
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link href="/catalog">
              <Button className="bg-beige-100 hover:bg-beige-200 text-noir-900 font-bold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base">
                View All Products
                <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 ml-1.5 sm:ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-noir-900 via-noir-800/50 to-noir-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-beige-100/3 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-beige-100/2 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">
              Browse Our <span className="gradient-text">Collections</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2 sm:px-0">
              Find exactly what you're looking for in our organized categories
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/catalog?category=${encodeURIComponent(collection.category)}`}>
                  <motion.div
                    className={`glass-effect p-4 sm:p-5 md:p-6 rounded-xl border ${collection.borderColor} group cursor-pointer h-full relative overflow-hidden`}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${collection.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                    
                    <div className="relative z-10">
                      <div className="w-12 sm:w-14 h-12 sm:h-14 bg-beige-100/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-beige-100/20 transition-colors duration-300">
                        <collection.icon className="w-6 sm:w-7 h-6 sm:h-7 text-beige-100" />
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2 group-hover:text-beige-100 transition-colors duration-300">
                        {collection.title}
                      </h3>
                      
                      <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                        {collection.description}
                      </p>
                      
                      <div className="flex items-center text-beige-100 text-xs sm:text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                        Browse Collection
                        <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 ml-1.5 sm:ml-2" />
                      </div>
                    </div>
                    
                    <motion.div
                      className="absolute inset-0 border-2 border-transparent rounded-xl"
                      whileHover={{ 
                        borderColor: "rgba(245, 243, 240, 0.3)"
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community CTA Section */}
      <section className="py-16 sm:py-20 bg-noir-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-beige-100/5 via-transparent to-beige-100/5" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="glass-effect p-6 sm:p-8 md:p-12 rounded-xl sm:rounded-2xl border border-beige-100/20 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-beige-100/5 to-transparent" />
            
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 sm:mb-6 inline-block">
                <span className="bg-beige-100/10 border border-beige-100/30 text-beige-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                  🎯 500+ Members Getting Exclusive Deals
                </span>
              </div>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                Join the <span className="gradient-text">KGS CREW Community</span>
              </h2>
              
              <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 px-2 sm:px-0">
                Get insider access, exclusive deals, and priority appointments. 
                Members save an average of $200 per purchase.
              </p>
              
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold gradient-text mb-0.5 sm:mb-1">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-400">Community Access</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold gradient-text mb-0.5 sm:mb-1">First</div>
                  <div className="text-xs sm:text-sm text-gray-400">To Know Deals</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold gradient-text mb-0.5 sm:mb-1">VIP</div>
                  <div className="text-xs sm:text-sm text-gray-400">Member Events</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link href="/community">
                  <Button className="bg-beige-100 hover:bg-beige-200 text-noir-900 font-bold px-4 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg text-sm sm:text-base md:text-lg w-full sm:w-auto">
                    <Users className="w-4 sm:w-5 h-4 sm:h-5 mr-1.5 sm:mr-2" />
                    Join Community - It's FREE
                  </Button>
                </Link>
                <Link href="/community">
                  <Button variant="outline" className="glass-effect border-2 border-beige-100/30 text-beige-100 hover:bg-beige-100/10 px-4 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg w-full sm:w-auto">
                    Learn More
                    <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 ml-1.5 sm:ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden" data-testid="section-features">
        {/* Dynamic gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-noir-900 via-noir-800/50 to-noir-900" />
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-beige-100/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-beige-100/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(245, 243, 240, 0.03) 35px,
            rgba(245, 243, 240, 0.03) 70px
          )`
        }} />
        
        {/* Top and bottom fade borders */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-beige-100/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-beige-100/20 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-4" data-testid="text-features-title">
              Why Customers Drive Hours to KGS CREW
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4" data-testid="text-features-subtitle">
              We don't just sell guns. We build relationships that last a lifetime.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="glass-effect p-6 sm:p-8 rounded-xl border border-beige-100/10 backdrop-blur-md bg-noir-900/30 group relative overflow-hidden shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                data-testid={`feature-${index}`}
              >
                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-beige-100/5 via-beige-100/10 to-beige-100/5 rounded-xl opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 bg-beige-100/10 rounded-xl flex items-center justify-center mb-6 relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-beige-100/20 to-beige-100/10 rounded-xl opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <feature.icon className="w-8 h-8 text-beige-100 relative z-10" />
                </motion.div>
                
                {/* Content */}
                <motion.h3 
                  className="text-xl font-bold text-white mb-3 relative z-10"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  data-testid={`feature-title-${index}`}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-400 relative z-10"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  data-testid={`feature-description-${index}`}
                >
                  {feature.description}
                </motion.p>
                
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-xl"
                  whileHover={{ 
                    borderColor: "rgba(245, 243, 240, 0.2)",
                    boxShadow: "0 0 20px rgba(245, 243, 240, 0.1)"
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-noir-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-noir-800/50 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Save Big on Your Next Firearm?
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Text or call us now to schedule your private appointment.
            <span className="block text-base sm:text-lg mt-2 text-beige-100">No waiting. No crowds. Best prices in PA.</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center"
          >
            <a href="tel:717-249-0000">
              <Button 
                className="bg-beige-100 hover:bg-beige-200 text-noir-900 font-bold shadow-lg hover:shadow-xl px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call 717-249-0000
              </Button>
            </a>
            <Link href="/community">
              <Button 
                variant="outline"
                className="glass-effect border-2 border-beige-100/30 text-beige-100 hover:bg-beige-100/10 hover:border-beige-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg"
              >
                Join Our Community
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}