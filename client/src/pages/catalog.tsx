import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Grid3X3, 
  List, 
  ChevronLeft, 
  ChevronRight, 
  Filter,
  ShieldCheck,
  Truck,
  Award,
  Sparkles,
  Package,
  CheckCircle,
  Star,
  Zap
} from "lucide-react";
import { useProducts } from "@/hooks/use-products";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ProductCard from "@/components/product/product-card";
import { Skeleton } from "@/components/ui/skeleton";
import { useLocation, Link } from "wouter";
import SEOHead, { pageSEO } from "@/components/seo-head";

export default function Catalog() {
  const { data: products, isLoading, error } = useProducts();
  const [location] = useLocation();
  
  // Get category from URL params
  const urlParams = new URLSearchParams(window.location.search);
  const categoryFromUrl = urlParams.get('category') || "All Categories";
  
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);
  const [sortBy, setSortBy] = useState("name-asc");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  
  // Update selected category when URL changes
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [location]);

  const categories = [
    "All Categories",
    "Handguns",
    "Rifles", 
    "Less-Lethal Launchers",
    "Ammunition",
    "Less-Lethal Ammunition",
    "Hearing Protection"
  ];

  const sortOptions = [
    { value: "name-asc", label: "Name: A to Z" },
    { value: "name-desc", label: "Name: Z to A" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
  ];

  const filteredProducts = products?.filter(product => 
    selectedCategory === "All Categories" || product.category === selectedCategory
  ) || [];

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      case "price-asc":
        return parseFloat(a.price) - parseFloat(b.price);
      case "price-desc":
        return parseFloat(b.price) - parseFloat(a.price);
      default:
        return 0;
    }
  });

  if (error) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center" data-testid="error-catalog">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Error Loading Products</h2>
          <p className="text-gray-400">Failed to load product catalog. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-noir-900 via-noir-800/50 to-noir-900" data-testid="page-catalog">
      <SEOHead {...pageSEO.catalog} />
      {/* Modern Hero Section with Animated Backgrounds */}
      <section className="hero-bg min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] pt-16 sm:pt-20 flex items-center justify-center text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-noir-900"></div>
        
        {/* Advanced Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-amber-500/10 to-transparent rounded-full blur-3xl"
            animate={{
              x: [-100, 0, -100],
              y: [0, 100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute -bottom-1/4 -left-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-beige-100/8 to-transparent rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          {/* Sparkle Effects */}
          {[...Array(20)].map((_, i) => (
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
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Live Badge */}
          <motion.div
            className="mb-4 sm:mb-6 inline-flex items-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-md">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-xs sm:text-sm font-semibold">
                Licensed FFL Dealer • Professional Transfers
              </span>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            data-testid="text-catalog-title"
          >
            <span className="text-white">Premium</span>
            <span className="block mt-2">
              <span className="gradient-text relative inline-block">
                Firearms & Defense
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
            className="text-base sm:text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-beige-100 to-white max-w-3xl mx-auto mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-testid="text-catalog-subtitle"
          >
            Licensed dealer offering authentic firearms, less-lethal launchers, ammunition, and professional transfer services
          </motion.p>
          
          {/* Enhanced Stats with Icons */}
          <motion.div 
            className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="glass-effect p-3 sm:p-4 md:p-5 rounded-xl border border-amber-500/30 text-center group relative overflow-hidden"
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Package className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 mx-auto mb-1 sm:mb-2" />
              <div className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text relative z-10">14+</div>
              <div className="text-beige-100/60 text-xs sm:text-sm relative z-10">Products</div>
            </motion.div>
            
            <motion.div 
              className="glass-effect p-3 sm:p-4 md:p-5 rounded-xl border border-green-500/30 text-center group relative overflow-hidden"
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mx-auto mb-1 sm:mb-2" />
              <div className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text relative z-10">FFL</div>
              <div className="text-beige-100/60 text-xs sm:text-sm relative z-10">Licensed</div>
            </motion.div>
            
            <motion.div 
              className="glass-effect p-3 sm:p-4 md:p-5 rounded-xl border border-purple-500/30 text-center group relative overflow-hidden"
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mx-auto mb-1 sm:mb-2" />
              <div className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text relative z-10">Fast</div>
              <div className="text-beige-100/60 text-xs sm:text-sm relative z-10">Transfers</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Services Section - Mobile-first */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-noir-900 via-noir-800/30 to-noir-900"></div>
        
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-purple-500/5 to-transparent rounded-full blur-3xl"
            animate={{
              y: [0, 50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <span className="text-beige-100 text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
                <Award className="w-4 h-4" />
                Our Services
              </span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Professional <span className="gradient-text">Services</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-beige-100/60 max-w-2xl mx-auto">
              Expert assistance for all your firearms transfer and licensing needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* FFL Transfer Service */}
            <motion.div
              className="glass-effect p-6 sm:p-8 rounded-2xl border border-green-500/20 group hover:border-green-500/40 transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0">
                    <motion.div 
                      className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center"
                      whileHover={{ rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-green-400" />
                    </motion.div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                      FFL Transfer <span className="text-green-400">Service</span>
                    </h3>
                    <p className="text-beige-100/70 mb-4 sm:mb-6 text-sm sm:text-base">
                      Professional Federal Firearms License transfer services for online purchases. Fast, secure, and compliant processing with background checks and proper documentation.
                    </p>
                    
                    <ul className="space-y-2 mb-4 sm:mb-6">
                      {[
                        "Background check processing",
                        "Secure storage until pickup",
                        "Licensed professional handling"
                      ].map((item, idx) => (
                        <motion.li 
                          key={idx}
                          className="flex items-center text-beige-100/60 text-sm sm:text-base"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + idx * 0.1 }}
                        >
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 sm:mr-3 flex-shrink-0" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl sm:text-3xl font-bold gradient-text">$35</span>
                        <span className="text-xs sm:text-sm text-beige-100/50">per transfer</span>
                      </div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link href="/ffl-transfer">
                          <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-xl">
                            Learn More
                            <Zap className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* NFA Transfer Service */}
            <motion.div
              className="glass-effect p-6 sm:p-8 rounded-2xl border border-purple-500/20 group hover:border-purple-500/40 transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ y: -8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0">
                    <motion.div 
                      className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-2xl flex items-center justify-center"
                      whileHover={{ rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Award className="w-7 h-7 sm:w-8 sm:h-8 text-purple-400" />
                    </motion.div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                      NFA Transfer <span className="text-purple-400">Service</span>
                    </h3>
                    <p className="text-beige-100/70 mb-4 sm:mb-6 text-sm sm:text-base">
                      Expert National Firearms Act transfer services for suppressors, SBRs, and other regulated items. Complete ATF Form 4 processing with professional guidance throughout.
                    </p>
                    
                    <ul className="space-y-2 mb-4 sm:mb-6">
                      {[
                        "ATF Form 4 processing",
                        "Tax stamp assistance",
                        "Compliance verification"
                      ].map((item, idx) => (
                        <motion.li 
                          key={idx}
                          className="flex items-center text-beige-100/60 text-sm sm:text-base"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + idx * 0.1 }}
                        >
                          <CheckCircle className="w-4 h-4 text-purple-400 mr-2 sm:mr-3 flex-shrink-0" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl sm:text-3xl font-bold gradient-text">$75</span>
                        <span className="text-xs sm:text-sm text-beige-100/50">per transfer</span>
                      </div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link href="/nfa-transfer">
                          <Button className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-xl">
                            Learn More
                            <Zap className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Contact Notice */}
          <motion.div
            className="text-center mt-8 sm:mt-12 glass-effect p-6 sm:p-8 rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-transparent relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-beige-100/5 to-transparent animate-shimmer" />
            
            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center gap-2 mb-3"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-5 h-5 text-amber-400" />
              </motion.div>
              
              <p className="text-base sm:text-lg">
                <strong className="text-beige-100 text-lg sm:text-xl">Ready to get started?</strong>
                <span className="block mt-2 text-beige-100/70 text-sm sm:text-base">
                  Contact us today to discuss your transfer needs or to schedule an appointment.
                </span>
              </p>
              
              <motion.div 
                className="mt-4 sm:mt-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl">
                  Contact Us Now
                  <Zap className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Filters - Mobile-first */}
      <section className="py-6 sm:py-8 md:py-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="glass-effect rounded-2xl border border-beige-100/10 p-4 sm:p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* Mobile Filter Header */}
            <div className="flex items-center justify-between mb-4 sm:hidden">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-beige-100" />
                <span className="text-beige-100 font-semibold">Filters</span>
              </div>
              <div className="text-beige-100/60 text-sm">
                {sortedProducts.length} products
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:items-end sm:justify-between">
              {/* Filter Controls */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="space-y-1 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-beige-100/80 flex items-center gap-1">
                    <Package className="w-3 h-3 sm:w-4 sm:h-4" />
                    Category
                  </label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-full sm:w-48 glass-effect border-beige-100/20 text-white hover:border-beige-100/40 transition-all duration-300" data-testid="select-category">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="glass-effect border-beige-100/20 bg-noir-800/95 backdrop-blur-xl">
                      {categories.map((category) => (
                        <SelectItem key={category} value={category} className="text-white hover:bg-beige-100/10">
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-1 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-beige-100/80 flex items-center gap-1">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                    Sort By
                  </label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-full sm:w-48 glass-effect border-beige-100/20 text-white hover:border-beige-100/40 transition-all duration-300" data-testid="select-sort">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="glass-effect border-beige-100/20 bg-noir-800/95 backdrop-blur-xl">
                      {sortOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value} className="text-white hover:bg-beige-100/10">
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {/* View Controls */}
              <div className="flex items-center justify-between sm:gap-6">
                <div className="hidden sm:block text-right">
                  <div className="text-xs text-beige-100/50">Showing</div>
                  <div className="text-lg font-bold gradient-text">{sortedProducts.length} products</div>
                </div>
                
                <div className="flex items-center gap-2 ml-auto sm:ml-0">
                  <span className="text-xs text-beige-100/60 mr-2 sm:hidden">View:</span>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant={viewMode === "grid" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setViewMode("grid")}
                      className={viewMode === "grid" 
                        ? "bg-gradient-to-r from-beige-100 to-beige-200 text-noir-900 font-semibold" 
                        : "glass-effect border-beige-100/20 text-white hover:bg-beige-100/10"}
                      data-testid="button-grid-view"
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant={viewMode === "list" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setViewMode("list")}
                      className={viewMode === "list" 
                        ? "bg-gradient-to-r from-beige-100 to-beige-200 text-noir-900 font-semibold" 
                        : "glass-effect border-beige-100/20 text-white hover:bg-beige-100/10"}
                      data-testid="button-list-view"
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Products Grid - Mobile-first */}
      <section className="py-6 sm:py-10 md:py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6" data-testid="loading-products">
              {Array.from({ length: 8 }).map((_, index) => (
                <motion.div 
                  key={index} 
                  className="glass-effect border border-beige-100/10 rounded-2xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="w-full h-40 sm:h-48 bg-gradient-to-r from-noir-700/50 via-noir-600/50 to-noir-700/50 animate-pulse" />
                  <div className="p-4 sm:p-6 space-y-3">
                    <div className="h-5 sm:h-6 bg-gradient-to-r from-noir-700/50 via-noir-600/50 to-noir-700/50 rounded animate-pulse" />
                    <div className="h-3 sm:h-4 bg-gradient-to-r from-noir-700/50 via-noir-600/50 to-noir-700/50 rounded animate-pulse" />
                    <div className="h-3 sm:h-4 w-2/3 bg-gradient-to-r from-noir-700/50 via-noir-600/50 to-noir-700/50 rounded animate-pulse" />
                  </div>
                </motion.div>
              ))}
            </div>
          ) : sortedProducts.length > 0 ? (
            <motion.div 
              className={`grid gap-4 sm:gap-6 ${
                viewMode === "grid" 
                  ? "grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  : "grid-cols-1 max-w-4xl mx-auto"
              }`}
              layout
              data-testid="products-grid"
            >
              {sortedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div 
              className="text-center py-12 sm:py-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              data-testid="no-products"
            >
              <motion.div
                className="inline-block mb-6"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Package className="w-16 h-16 text-beige-100/20 mx-auto" />
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">No Products Found</h3>
              <p className="text-beige-100/60 text-sm sm:text-base max-w-md mx-auto">
                {selectedCategory === "All Categories" 
                  ? "No products available at the moment. Please check back later."
                  : `No products found in the ${selectedCategory} category. Try selecting a different category.`
                }
              </p>
            </motion.div>
          )}

          {/* Enhanced Pagination - Mobile-friendly */}
          {sortedProducts.length > 0 && (
            <motion.div 
              className="flex justify-center mt-8 sm:mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              data-testid="pagination"
            >
              <div className="flex items-center gap-1 sm:gap-2 glass-effect p-1 sm:p-2 rounded-2xl border border-beige-100/10">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="outline"
                    size="icon"
                    className="glass-effect text-beige-100/60 hover:text-beige-100 border-0 hover:bg-beige-100/10 transition-all duration-300 w-8 h-8 sm:w-10 sm:h-10"
                    data-testid="button-prev-page"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-beige-100 to-beige-200 hover:from-beige-200 hover:to-beige-100 text-noir-900 font-semibold text-sm sm:text-base rounded-xl"
                    data-testid="button-page-1"
                  >
                    1
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="outline"
                    className="px-3 py-1.5 sm:px-4 sm:py-2 glass-effect text-beige-100/60 hover:text-beige-100 border-0 hover:bg-beige-100/10 transition-all duration-300 text-sm sm:text-base rounded-xl"
                    data-testid="button-page-2"
                  >
                    2
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="outline"
                    className="px-3 py-1.5 sm:px-4 sm:py-2 glass-effect text-beige-100/60 hover:text-beige-100 border-0 hover:bg-beige-100/10 transition-all duration-300 text-sm sm:text-base rounded-xl"
                    data-testid="button-page-3"
                  >
                    3
                  </Button>
                </motion.div>
                
                <span className="hidden sm:inline text-beige-100/40 px-2">...</span>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="outline"
                    size="icon"
                    className="glass-effect text-beige-100/60 hover:text-beige-100 border-0 hover:bg-beige-100/10 transition-all duration-300 w-8 h-8 sm:w-10 sm:h-10"
                    data-testid="button-next-page"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
