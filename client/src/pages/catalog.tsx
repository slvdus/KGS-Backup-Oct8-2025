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
    "Rifles",
    "Handguns", 
    "Shotguns",
    "Accessories",
    "Ammunition"
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
            Discover our comprehensive collection of premium firearms and equipment
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
