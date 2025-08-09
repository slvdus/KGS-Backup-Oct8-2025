import { motion } from "framer-motion";
import { Link } from "wouter";
import { ShieldCheck, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Licensed & Certified",
      description: "Fully licensed FFL dealer with all necessary certifications and compliance."
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Curated selection of only the finest firearms and accessories."
    },
    {
      icon: Users,
      title: "Expert Service",
      description: "Knowledgeable staff with decades of combined experience."
    }
  ];

  return (
    <div className="min-h-screen" data-testid="page-home">
      {/* Hero Section */}
      <section className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Hero background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
          }}
        ></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            data-testid="text-hero-title"
          >
            <span className="text-white">Nature's</span>{" "}
            <span className="text-beige-100">Arsenal</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-testid="text-hero-subtitle"
          >
            Premium firearms and equipment for the discerning enthusiast. 
            Where precision meets sophistication.
          </motion.p>
          
          <motion.div 
            className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/catalog">
              <Button 
                className="cta-button bg-beige-100 text-noir-900 hover:bg-beige-200 px-8 py-4 rounded-none font-semibold text-lg w-full sm:w-auto"
                data-testid="button-explore-catalog"
              >
                Explore Catalog
              </Button>
            </Link>
            <Link href="/about">
              <Button 
                variant="outline"
                className="border-2 border-beige-100 text-beige-100 hover:bg-beige-100 hover:text-noir-900 px-8 py-4 rounded-none font-semibold text-lg w-full sm:w-auto"
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
            </Link>
          </motion.div>
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
              Why Choose Nature's Arsenal
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto" data-testid="text-features-subtitle">
              Uncompromising quality and service for over two decades
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                data-testid={`feature-${index}`}
              >
                <div className="bg-noir-700 p-6 rounded-lg hover:bg-noir-600 transition-colors duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-beige-100 rounded-full flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-noir-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2" data-testid={`text-feature-title-${index}`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-400" data-testid={`text-feature-description-${index}`}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
