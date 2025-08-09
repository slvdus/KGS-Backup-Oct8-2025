import { useState } from "react";
import { motion } from "framer-motion";
import { Grid3X3, List, ChevronLeft, ChevronRight } from "lucide-react";
import { useProducts } from "@/hooks/use-products";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ProductCard from "@/components/product/product-card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Catalog() {
  const { data: products, isLoading, error } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("name-asc");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

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
    <div className="min-h-screen pt-20 bg-noir-900" data-testid="page-catalog">
      {/* Hero Section */}
      <section className="hero-bg py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-beige-100/5 rounded-full blur-3xl float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-beige-100/3 rounded-full blur-3xl float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            data-testid="text-catalog-title"
          >
            Our <span className="gradient-text pulse-glow">Catalog</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-testid="text-catalog-subtitle"
          >
            Premium firearms, less-lethal defense systems, and professional accessories
          </motion.p>
          
          {/* Stats */}
          <motion.div 
            className="flex justify-center space-x-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass-effect px-4 py-2 rounded-full border border-noir-700/50">
              <div className="text-2xl font-bold gradient-text">500+</div>
              <div className="text-gray-400 text-sm">Products</div>
            </div>
            <div className="glass-effect px-4 py-2 rounded-full border border-noir-700/50">
              <div className="text-2xl font-bold gradient-text">50+</div>
              <div className="text-gray-400 text-sm">Brands</div>
            </div>
            <div className="glass-effect px-4 py-2 rounded-full border border-noir-700/50">
              <div className="text-2xl font-bold gradient-text">24/7</div>
              <div className="text-gray-400 text-sm">Support</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-noir-900/50 to-noir-900"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Professional Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Expert assistance for all your firearms transfer and licensing needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* FFL Transfer Service */}
            <motion.div
              className="glass-effect p-8 rounded-2xl border border-white/10 group hover:border-beige-100/30 transition-all duration-500"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-beige-100/20 to-beige-200/20 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-beige-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">FFL Transfer Service</h3>
                  <p className="text-gray-300 mb-6">
                    Professional Federal Firearms License transfer services for online purchases. Fast, secure, and compliant processing with background checks and proper documentation.
                  </p>
                  <ul className="space-y-2 text-gray-400 mb-6">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-beige-100 rounded-full mr-3"></div>
                      Background check processing
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-beige-100 rounded-full mr-3"></div>
                      Secure storage until pickup
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-beige-100 rounded-full mr-3"></div>
                      Licensed professional handling
                    </li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-beige-100">$35<span className="text-sm text-gray-400 ml-1">per transfer</span></div>
                    <Button className="bg-beige-100 hover:bg-beige-200 text-noir-900 font-medium">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* NFA Transfer Service */}
            <motion.div
              className="glass-effect p-8 rounded-2xl border border-white/10 group hover:border-beige-100/30 transition-all duration-500"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ y: -8 }}
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-beige-100/20 to-beige-200/20 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-beige-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">NFA Transfer Service</h3>
                  <p className="text-gray-300 mb-6">
                    Expert National Firearms Act transfer services for suppressors, SBRs, and other regulated items. Complete ATF Form 4 processing with professional guidance throughout.
                  </p>
                  <ul className="space-y-2 text-gray-400 mb-6">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-beige-100 rounded-full mr-3"></div>
                      ATF Form 4 processing
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-beige-100 rounded-full mr-3"></div>
                      Tax stamp assistance
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-beige-100 rounded-full mr-3"></div>
                      Compliance verification
                    </li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-beige-100">$75<span className="text-sm text-gray-400 ml-1">per transfer</span></div>
                    <Button className="bg-beige-100 hover:bg-beige-200 text-noir-900 font-medium">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Notice */}
          <motion.div
            className="text-center mt-12 glass-effect p-6 rounded-2xl border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-gray-300">
              <strong className="text-beige-100">Ready to get started?</strong> Contact us today to discuss your transfer needs or to schedule an appointment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Filters */}
      <section className="py-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="glass-effect rounded-xl border border-noir-700/50 p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex flex-wrap gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-beige-100">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-48 glass-effect border-noir-600/50 text-white hover:border-beige-100/30 transition-colors" data-testid="select-category">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="glass-effect border-noir-600/50 bg-noir-800/95 backdrop-blur-xl">
                      {categories.map((category) => (
                        <SelectItem key={category} value={category} className="text-white hover:bg-beige-100/10">
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-beige-100">Sort By</label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-48 glass-effect border-noir-600/50 text-white hover:border-beige-100/30 transition-colors" data-testid="select-sort">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="glass-effect border-noir-600/50 bg-noir-800/95 backdrop-blur-xl">
                      {sortOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value} className="text-white hover:bg-beige-100/10">
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div className="text-sm text-gray-400">Showing</div>
                  <div className="text-lg font-bold text-beige-100">{sortedProducts.length} products</div>
                </div>
                
                <div className="flex items-center gap-2">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant={viewMode === "grid" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setViewMode("grid")}
                      className={viewMode === "grid" ? "bg-beige-100 hover:bg-beige-200 text-noir-900 font-semibold" : "glass-effect border-noir-600/50 text-white hover:bg-noir-700/50"}
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
                      className={viewMode === "list" ? "bg-beige-100 hover:bg-beige-200 text-noir-900 font-semibold" : "glass-effect border-noir-600/50 text-white hover:bg-noir-700/50"}
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

      {/* Products Grid */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" data-testid="loading-products">
              {Array.from({ length: 8 }).map((_, index) => (
                <motion.div 
                  key={index} 
                  className="glass-effect border border-noir-700/50 rounded-xl overflow-hidden shimmer-effect"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-full h-48 bg-gradient-to-r from-noir-700 via-noir-600 to-noir-700 animate-pulse" />
                  <div className="p-6 space-y-3">
                    <div className="h-6 bg-gradient-to-r from-noir-700 via-noir-600 to-noir-700 rounded animate-pulse" />
                    <div className="h-4 bg-gradient-to-r from-noir-700 via-noir-600 to-noir-700 rounded animate-pulse" />
                    <div className="h-4 w-2/3 bg-gradient-to-r from-noir-700 via-noir-600 to-noir-700 rounded animate-pulse" />
                  </div>
                </motion.div>
              ))}
            </div>
          ) : sortedProducts.length > 0 ? (
            <motion.div 
              className={`grid gap-8 ${
                viewMode === "grid" 
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  : "grid-cols-1 lg:grid-cols-2"
              }`}
              layout
              data-testid="products-grid"
            >
              {sortedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16" data-testid="no-products">
              <h3 className="text-xl font-semibold text-white mb-2">No Products Found</h3>
              <p className="text-gray-400">
                {selectedCategory === "All Categories" 
                  ? "No products available at the moment."
                  : `No products found in the ${selectedCategory} category.`
                }
              </p>
            </div>
          )}

          {/* Pagination */}
          {sortedProducts.length > 0 && (
            <div className="flex justify-center mt-12" data-testid="pagination">
              <div className="flex space-x-1">
                <Button 
                  variant="outline"
                  size="icon"
                  className="glass-effect text-white hover:text-beige-100 border-noir-600/50 hover:border-beige-100/50 hover:bg-beige-100/10 transition-all duration-300"
                  data-testid="button-prev-page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button 
                  className="px-4 py-2 bg-beige-100 hover:bg-beige-200 text-noir-900 font-semibold shadow-md transition-all duration-300"
                  data-testid="button-page-1"
                >
                  1
                </Button>
                <Button 
                  variant="outline"
                  className="px-4 py-2 glass-effect text-white hover:text-beige-100 border-noir-600/50 hover:border-beige-100/50 hover:bg-beige-100/10 transition-all duration-300"
                  data-testid="button-page-2"
                >
                  2
                </Button>
                <Button 
                  variant="outline"
                  className="px-4 py-2 glass-effect text-white hover:text-beige-100 border-noir-600/50 hover:border-beige-100/50 hover:bg-beige-100/10 transition-all duration-300"
                  data-testid="button-page-3"
                >
                  3
                </Button>
                <Button 
                  variant="outline"
                  size="icon"
                  className="text-gray-400 hover:text-white border-noir-700 hover:border-beige-100"
                  data-testid="button-next-page"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
