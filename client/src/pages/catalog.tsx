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
    <div className="min-h-screen pt-20" data-testid="page-catalog">
      {/* Header */}
      <section className="bg-noir-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-catalog-title">
              Product Catalog
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto" data-testid="text-catalog-subtitle">
              Discover our carefully curated selection of premium firearms and accessories
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-noir-900 py-8 border-b border-noir-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48 bg-noir-700 border-noir-600 text-white" data-testid="select-category">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-noir-700 border-noir-600">
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48 bg-noir-700 border-noir-600 text-white" data-testid="select-sort">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-noir-700 border-noir-600">
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
                className="bg-noir-700 border-noir-600 hover:bg-noir-600"
                data-testid="button-view-grid"
              >
                <Grid3X3 className="w-5 h-5" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
                className="bg-noir-700 border-noir-600 hover:bg-noir-600"
                data-testid="button-view-list"
              >
                <List className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-noir-900">
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
                  className="text-gray-400 hover:text-white border-noir-700 hover:border-beige-100"
                  data-testid="button-prev-page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button 
                  className="px-4 py-2 bg-beige-100 text-noir-900 font-semibold"
                  data-testid="button-page-1"
                >
                  1
                </Button>
                <Button 
                  variant="outline"
                  className="px-4 py-2 text-white hover:text-beige-100 border-noir-700 hover:border-beige-100"
                  data-testid="button-page-2"
                >
                  2
                </Button>
                <Button 
                  variant="outline"
                  className="px-4 py-2 text-white hover:text-beige-100 border-noir-700 hover:border-beige-100"
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
