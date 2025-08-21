import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { 
  ShieldCheck, 
  Star, 
  Users, 
  Phone, 
  ArrowRight, 
  Shield, 
  Target, 
  Headphones, 
  Package,
  Sparkles,
  TrendingUp,
  Award,
  Zap,
  CheckCircle,
  Clock,
  MapPin,
  Heart,
  Trophy,
  Mail,
  Send,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useProducts } from "@/hooks/use-products";
import ProductCard from "@/components/product/product-card";
import { useState, useEffect } from "react";
import SEOHead, { pageSEO } from "@/components/seo-head";

export default function Home() {
  const { data: products } = useProducts();
  const { toast } = useToast();
  const [reviewCount, setReviewCount] = useState(0);
  const [satisfactionRate, setSatisfactionRate] = useState(0);
  const [hoveredCollection, setHoveredCollection] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  // Newsletter subscription handler
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Please enter your email",
        description: "We need your email to send you exclusive deals.",
        variant: "destructive",
      });
      return;
    }

    setIsSubscribing(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Welcome to the KGS CREW!",
        description: "You're now getting first access to deals that save you hundreds.",
      });
      setEmail("");
      setIsSubscribing(false);
    }, 1500);
  };
  
  // Animated counters
  useEffect(() => {
    const reviewInterval = setInterval(() => {
      setReviewCount(prev => prev < 94 ? prev + 2 : 94);
    }, 30);

    const satisfactionInterval = setInterval(() => {
      setSatisfactionRate(prev => prev < 98 ? prev + 2 : 98);
    }, 30);

    return () => {
      clearInterval(reviewInterval);
      clearInterval(satisfactionInterval);
    };
  }, []);
  
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
      <SEOHead {...pageSEO.home} />
      {/* Enhanced Hero Section with Modern Design */}
      <section className="hero-bg min-h-[80vh] sm:min-h-[90vh] md:min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-noir-900"></div>
        
        {/* Advanced Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-1/3 -left-1/3 w-[800px] h-[800px] bg-gradient-to-br from-beige-100/10 to-transparent rounded-full blur-3xl"
            animate={{
              x: [0, 150, 0],
              y: [0, -100, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute -bottom-1/3 -right-1/3 w-[1000px] h-[1000px] bg-gradient-to-tl from-beige-100/8 to-transparent rounded-full blur-3xl"
            animate={{
              x: [0, -150, 0],
              y: [0, 100, 0],
              scale: [1, 0.7, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />
          
          {/* Sparkle Effects */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-beige-100/60 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-noir-900/90 via-transparent to-noir-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-noir-900/80 via-transparent to-transparent"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            data-testid="text-hero-title"
          >
            <span className="text-white">Welcome to</span>
            <span className="block mt-2">
              <span className="gradient-text relative inline-block">
                KGS CREW
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-beige-100/20 to-beige-200/20 blur-xl"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </span>
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-testid="text-hero-subtitle"
          >
            Pennsylvania's <span className="text-beige-100 font-semibold">Best Prices</span> in Firearms
          </motion.p>
          
          {/* Stats Row */}
          <motion.div
            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text flex items-center justify-center">
                <Trophy className="w-5 h-5 mr-1" />
                {satisfactionRate}%
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Satisfaction</div>
            </div>
            <div className="text-center border-x border-noir-700/50">
              <div className="text-2xl sm:text-3xl font-bold gradient-text flex items-center justify-center">
                <Star className="w-5 h-5 mr-1" />
                VIP
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Appointment Only</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text flex items-center justify-center">
                <Award className="w-5 h-5 mr-1" />
                2020
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Family Owned</div>
            </div>
          </motion.div>
          
          <motion.p 
            className="text-base sm:text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            Skip the big box stores. Get wholesale pricing with personal service that actually cares about YOU.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <a href="tel:717-249-0000">
                <Button 
                  className="bg-gradient-to-r from-beige-100 to-beige-200 hover:from-beige-200 hover:to-beige-100 text-noir-900 font-bold shadow-2xl px-8 py-4 rounded-xl text-lg group relative overflow-hidden min-w-[250px]"
                  data-testid="button-book-appointment"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                    Book Appointment
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </a>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/catalog">
                <Button 
                  variant="outline"
                  className="glass-effect border-2 border-beige-100/30 text-beige-100 hover:bg-beige-100/10 px-8 py-4 rounded-xl font-semibold text-lg min-w-[250px]"
                  data-testid="button-browse-inventory"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Browse Inventory
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Customer Satisfaction Badge */}
          <motion.div
            className="mt-6 inline-flex items-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
          >
            <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 px-4 py-2 rounded-full backdrop-blur-md">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-semibold">
                {satisfactionRate}% Customer Satisfaction • {reviewCount}+ Reviews
              </span>
            </div>
          </motion.div>
          
          {/* Trust Indicators */}
          <motion.div 
            className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-beige-100" />
              <span>10 Vale Road, Newville, PA</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-beige-100" />
              <span>717-249-0000</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Licensed FFL Dealer</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Best Sellers Section */}
      <section className="pt-20 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-noir-900 via-noir-800/50 to-noir-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-3xl"
            animate={{
              y: [0, -50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
            >
              <span className="text-beige-100 text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Hot Deals
              </span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="gradient-text">Best Sellers</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Our most popular firearms flying off the shelves - {bestSellers.length} in stock
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
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Button className="bg-gradient-to-r from-beige-100 to-beige-200 hover:from-beige-200 hover:to-beige-100 text-noir-900 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg group relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 flex items-center">
                    View All Products
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Collections Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-noir-900 via-noir-800/50 to-noir-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/5 to-transparent rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-blue-500/5 to-transparent rounded-full blur-3xl"
            animate={{
              x: [0, -50, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
            >
              <span className="text-beige-100 text-sm font-semibold uppercase tracking-wider">
                Shop by Category
              </span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Browse Our <span className="gradient-text">Collections</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Find exactly what you're looking for in our organized categories
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredCollection(index)}
                onMouseLeave={() => setHoveredCollection(null)}
              >
                <Link href={`/catalog?category=${encodeURIComponent(collection.category)}`}>
                  <motion.div
                    className={`glass-effect p-6 rounded-2xl border ${collection.borderColor} group cursor-pointer h-full relative overflow-hidden`}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${collection.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                    
                    {/* Animated Neon Trail Border */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background: hoveredCollection === index 
                            ? `conic-gradient(from 90deg, transparent 60%, rgba(245, 243, 240, 0.3) 80%, rgba(245, 243, 240, 0.6) 85%, rgba(245, 243, 240, 0.8) 90%, rgba(245, 243, 240, 0.6) 95%, rgba(245, 243, 240, 0.3) 98%, transparent 100%)`
                            : 'transparent',
                        }}
                        animate={hoveredCollection === index ? {
                          rotate: [0, 360],
                        } : { rotate: 0 }}
                        transition={{
                          duration: 3,
                          repeat: hoveredCollection === index ? Infinity : 0,
                          ease: "linear"
                        }}
                      />
                      {/* Inner mask to create border effect */}
                      <div className="absolute inset-[2px] bg-noir-900 rounded-2xl" />
                    </div>
                    
                    {/* Subtle glow effect */}
                    {hoveredCollection === index && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                          boxShadow: '0 0 30px rgba(245, 243, 240, 0.15), inset 0 0 20px rgba(245, 243, 240, 0.05)',
                        }}
                      />
                    )}
                    
                    <div className="relative z-10">
                      {/* Icon with Animation */}
                      <motion.div 
                        className="w-14 h-14 bg-gradient-to-br from-beige-100/20 to-beige-100/10 rounded-xl flex items-center justify-center mb-4 relative"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-beige-100/20 rounded-xl blur-xl"
                          animate={{
                            scale: hoveredCollection === index ? [1, 1.2, 1] : 1,
                          }}
                          transition={{
                            duration: 2,
                            repeat: hoveredCollection === index ? Infinity : 0,
                          }}
                        />
                        <collection.icon className="w-7 h-7 text-beige-100 relative z-10" />
                      </motion.div>
                      
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-beige-100 transition-colors duration-300">
                        {collection.title}
                      </h3>
                      
                      <p className="text-sm text-gray-400 mb-4">
                        {collection.description}
                      </p>
                      
                      <div className="flex items-center text-beige-100 text-sm font-semibold transition-opacity">
                        Browse Collection
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Community CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-noir-900 via-noir-800/30 to-noir-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-beige-100/5 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="glass-effect p-8 sm:p-12 rounded-3xl border border-beige-100/20 text-center relative overflow-hidden"
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Join the <span className="gradient-text">KGS CREW</span> Community
              </h2>
              
              <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-8">
                Get insider access, exclusive deals, and priority appointments. 
                Members save an average of <span className="text-beige-100 font-semibold">$200 per purchase</span>.
              </p>
              
              {/* Animated Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl sm:text-3xl font-bold gradient-text flex items-center justify-center">
                    <Zap className="w-5 h-5 mr-1" />
                    24/7
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">Community Access</div>
                </motion.div>
                <motion.div 
                  className="text-center border-x border-noir-700/50"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl sm:text-3xl font-bold gradient-text flex items-center justify-center">
                    <Heart className="w-5 h-5 mr-1" />
                    First
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">To Know Deals</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl sm:text-3xl font-bold gradient-text flex items-center justify-center">
                    <Award className="w-5 h-5 mr-1" />
                    VIP
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">Member Events</div>
                </motion.div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="mx-auto sm:mx-0 w-full sm:w-auto"
                >
                  <Link href="/community">
                    <Button className="w-full sm:w-auto bg-gradient-to-r from-beige-100 to-beige-200 hover:from-beige-200 hover:to-beige-100 text-noir-900 font-bold px-8 py-4 rounded-xl text-lg group relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                      <span className="relative z-10 flex items-center">
                        <Users className="w-5 h-5 mr-2" />
                        Join Community - It's FREE
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="mx-auto sm:mx-0 w-full sm:w-auto"
                >
                  <Link href="/community">
                    <Button variant="outline" className="w-full sm:w-auto glass-effect border-2 border-beige-100/30 text-beige-100 hover:bg-beige-100/10 px-8 py-4 rounded-xl font-semibold text-lg">
                      Learn More About Benefits
                    </Button>
                  </Link>
                </motion.div>
              </div>
              
              {/* Live Badge */}
              <motion.div
                className="mt-6 inline-flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: "spring", delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 px-4 py-2 rounded-full backdrop-blur-md">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-semibold">
                    500+ Active Members • $100K+ Saved
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Mobile-first approach */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden" data-testid="section-features">
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
          
          {/* Desktop Grid - Hidden on Mobile */}
          <div className="hidden md:grid grid-cols-3 gap-8">
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

          {/* Mobile Slider - Visible on Mobile Only */}
          <div className="md:hidden relative">
            {/* Slider Container */}
            <div className="overflow-hidden relative">
              <motion.div 
                className="flex"
                animate={{ x: `-${currentFeatureIndex * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                drag="x"
                dragConstraints={{ left: -1000, right: 0 }}
                onDragEnd={(_, info) => {
                  const swipeThreshold = 50;
                  if (info.offset.x > swipeThreshold && currentFeatureIndex > 0) {
                    setCurrentFeatureIndex(currentFeatureIndex - 1);
                  } else if (info.offset.x < -swipeThreshold && currentFeatureIndex < features.length - 1) {
                    setCurrentFeatureIndex(currentFeatureIndex + 1);
                  }
                }}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="w-full flex-shrink-0 px-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="glass-effect p-6 rounded-xl border border-beige-100/10 backdrop-blur-md bg-noir-900/30 relative overflow-hidden shadow-2xl">
                      {/* Icon */}
                      <motion.div
                        className="w-16 h-16 bg-beige-100/10 rounded-xl flex items-center justify-center mb-6 relative mx-auto"
                        whileInView={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1, delay: 0.2 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-beige-100/20 to-beige-100/10 rounded-xl" />
                        <feature.icon className="w-8 h-8 text-beige-100 relative z-10" />
                      </motion.div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold text-white mb-3 text-center">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-center">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeatureIndex(index)}
                  className={`transition-all duration-300 ${
                    currentFeatureIndex === index 
                      ? 'w-8 h-2 bg-beige-100 rounded-full' 
                      : 'w-2 h-2 bg-beige-100/30 rounded-full hover:bg-beige-100/50'
                  }`}
                  aria-label={`Go to feature ${index + 1}`}
                />
              ))}
            </div>

            {/* Previous/Next Buttons */}
            <button
              onClick={() => setCurrentFeatureIndex(Math.max(0, currentFeatureIndex - 1))}
              className={`absolute left-2 top-1/2 -translate-y-1/2 p-2 glass-effect rounded-full text-beige-100/70 hover:text-beige-100 transition-all ${
                currentFeatureIndex === 0 ? 'opacity-30 cursor-not-allowed' : ''
              }`}
              disabled={currentFeatureIndex === 0}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setCurrentFeatureIndex(Math.min(features.length - 1, currentFeatureIndex + 1))}
              className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 glass-effect rounded-full text-beige-100/70 hover:text-beige-100 transition-all ${
                currentFeatureIndex === features.length - 1 ? 'opacity-30 cursor-not-allowed' : ''
              }`}
              disabled={currentFeatureIndex === features.length - 1}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
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

      {/* Newsletter Section */}
      <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-b from-noir-900 via-noir-800/60 to-noir-900" data-testid="section-newsletter">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-beige-100/5 via-transparent to-transparent rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-green-500/5 via-transparent to-transparent rounded-full blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, 30, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />
        </div>

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `repeating-conic-gradient(from 45deg at 50% 50%, transparent 0deg, rgba(245, 243, 240, 0.03) 20deg, transparent 40deg)`
        }} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="glass-effect rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 border border-beige-100/10 bg-gradient-to-br from-noir-900/80 via-noir-800/50 to-noir-900/80"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <motion.div 
              className="text-center mb-8 sm:mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Icon with glow effect */}
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-beige-100/20 to-beige-100/10 rounded-full mb-4 sm:mb-6 relative"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-beige-100/20 rounded-full blur-xl animate-pulse" />
                <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-beige-100 relative z-10" />
              </motion.div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
                Get <span className="gradient-text">Insider Access</span>
              </h2>
              
              <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
                Join 2,500+ smart buyers getting exclusive deals before anyone else.
                <span className="block text-sm sm:text-base mt-2 text-beige-100/80">
                  Average member saves $300+ per purchase
                </span>
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {[
                { icon: Zap, text: "Flash Sales", subtext: "24hr early access" },
                { icon: Trophy, text: "VIP Pricing", subtext: "Members-only deals" },
                { icon: Package, text: "New Arrivals", subtext: "First to know" }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  className="flex items-center gap-3 glass-effect p-3 sm:p-4 rounded-xl border border-noir-700/50"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, borderColor: "rgba(245, 243, 240, 0.3)" }}
                >
                  <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-beige-100 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">{benefit.text}</p>
                    <p className="text-gray-400 text-xs sm:text-sm">{benefit.subtext}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Newsletter Form */}
            <motion.form
              onSubmit={handleNewsletterSubmit}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex-1 relative">
                  <Input
                    type="email"
                    placeholder="Enter your email for exclusive deals..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12 sm:h-14 px-4 sm:px-6 glass-effect border-noir-600/50 text-white placeholder:text-gray-400 focus:border-beige-100/50 text-base sm:text-lg rounded-xl"
                    data-testid="input-newsletter-email"
                  />
                  <motion.div
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    animate={{
                      boxShadow: email ? "0 0 20px rgba(245, 243, 240, 0.1)" : "0 0 0px rgba(245, 243, 240, 0)"
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubscribing}
                    className="w-full sm:w-auto h-12 sm:h-14 bg-gradient-to-r from-beige-100 to-beige-200 hover:from-beige-200 hover:to-beige-100 text-noir-900 font-bold px-6 sm:px-10 rounded-xl text-base sm:text-lg group relative overflow-hidden"
                    data-testid="button-newsletter-subscribe"
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/30"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubscribing ? (
                        "Subscribing..."
                      ) : (
                        <>
                          Get Exclusive Access
                          <Send className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </Button>
                </motion.div>
              </div>

              {/* Privacy Note */}
              <motion.p 
                className="text-xs sm:text-sm text-gray-400 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1" />
                Your privacy is protected. Unsubscribe anytime. No spam, ever.
              </motion.p>
            </motion.form>

            {/* Social Proof */}
            <motion.div
              className="mt-8 pt-8 border-t border-noir-700/50"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">2,500+ Active Members</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-gray-300">4.9/5 Member Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-300">$300+ Avg Savings</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}