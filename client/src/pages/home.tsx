import { motion } from "framer-motion";
import { Link } from "wouter";
import { ShieldCheck, Star, Users, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
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
          <motion.div
            className="mb-4 inline-block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-beige-100/10 border border-beige-100/30 text-beige-100 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
              🏆 98% Customer Recommendation Rate
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            data-testid="text-hero-title"
          >
            <span className="text-white">KGS</span>{" "}
            <span className="gradient-text pulse-glow">CREW</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-testid="text-hero-subtitle"
          >
            Pennsylvania's Best Prices in Firearms.
            <span className="block text-lg mt-2 text-beige-100">By Appointment Only - Because You Deserve VIP Treatment</span>
          </motion.p>
          
          <motion.p 
            className="text-lg text-gray-400 mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Skip the big box stores. Get wholesale pricing with personal service that actually cares about YOU.
          </motion.p>
          
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
                  className="bg-beige-100 hover:bg-beige-200 text-noir-900 font-bold shadow-lg hover:shadow-xl px-8 py-4 rounded-lg text-lg w-full sm:w-auto btn-hover-effect magnetic-btn ripple relative overflow-hidden group flex items-center justify-center"
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
                  className="glass-effect border-2 border-beige-100/30 text-beige-100 hover:bg-beige-100/10 hover:border-beige-100 px-8 py-4 rounded-lg font-semibold text-lg w-full sm:w-auto btn-hover-effect magnetic-btn ripple relative overflow-hidden group flex items-center justify-center"
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

      {/* Features Section */}
      <section className="py-20 bg-noir-800" data-testid="section-features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-testid="text-features-title">
              Why Customers Drive Hours to KGS CREW
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto" data-testid="text-features-subtitle">
              We don't just sell guns. We build relationships that last a lifetime.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="glass-effect p-8 rounded-xl border border-noir-700/50 group relative overflow-hidden"
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
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Save Big on Your Next Firearm?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Text or call us now to schedule your private appointment.
            <span className="block text-lg mt-2 text-beige-100">No waiting. No crowds. Just the best prices in PA.</span>
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
                className="bg-beige-100 hover:bg-beige-200 text-noir-900 font-bold shadow-lg hover:shadow-xl px-8 py-4 rounded-lg text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call 717-249-0000
              </Button>
            </a>
            <Link href="/community">
              <Button 
                variant="outline"
                className="glass-effect border-2 border-beige-100/30 text-beige-100 hover:bg-beige-100/10 hover:border-beige-100 px-8 py-4 rounded-lg font-semibold text-lg"
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