import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { ShoppingCart, Eye, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/cart-context";
import { useToast } from "@/hooks/use-toast";
import type { Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem, openCart } = useCart();
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (product.inStock === 0) {
      toast({
        title: "Out of Stock",
        description: `${product.name} is currently unavailable.`,
        variant: "destructive",
      });
      return;
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
    
    // Only open cart slider, no toast notification
    setTimeout(() => openCart(), 300);
  };

  const handleViewMore = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Navigate to product page and scroll to top
    setLocation(`/product/${product.id}`);
    window.scrollTo(0, 0);
  };

  // Get category-specific badge
  const getCategoryBadge = () => {
    if (product.category === 'Handguns' || product.category === 'Rifles') {
      return { icon: Shield, text: 'FFL Required', color: 'text-orange-400 bg-orange-400/10 border-orange-400/30' };
    }
    if (product.category === 'Less-Lethal Launchers') {
      return { icon: Zap, text: 'Non-Lethal', color: 'text-blue-400 bg-blue-400/10 border-blue-400/30' };
    }
    return null;
  };

  const categoryBadge = getCategoryBadge();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="product-card glass-effect border border-noir-700/50 rounded-xl overflow-hidden group relative flex flex-col h-full"
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-beige-100/5 via-beige-100/10 to-beige-100/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"></div>
      
      {/* Image Section */}
      <div className="relative overflow-hidden h-56">
        <motion.img 
          src={product.image} 
          alt={product.name} 
          className="product-image w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-noir-900/70 via-noir-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        
        {/* Stock indicator */}
        <div className="absolute top-3 right-3 z-10">
          {product.inStock > 5 ? (
            <motion.div 
              className="glass-effect px-2 py-1 rounded-full border border-green-400/30 flex items-center space-x-1"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-400 font-medium">In Stock</span>
            </motion.div>
          ) : product.inStock > 0 ? (
            <motion.div 
              className="glass-effect px-2 py-1 rounded-full border border-yellow-400/30 flex items-center space-x-1"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-yellow-400 font-medium">Low Stock</span>
            </motion.div>
          ) : (
            <motion.div 
              className="glass-effect px-2 py-1 rounded-full border border-red-400/30 flex items-center space-x-1"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <span className="text-xs text-red-400 font-medium">Out of Stock</span>
            </motion.div>
          )}
        </div>

        {/* Category-specific badge */}
        {categoryBadge && (
          <div className="absolute top-3 left-3 z-10">
            <Badge className={`${categoryBadge.color} border flex items-center space-x-1`}>
              <categoryBadge.icon className="w-3 h-3" />
              <span className="text-xs">{categoryBadge.text}</span>
            </Badge>
          </div>
        )}
      </div>
      
      {/* Content Section */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Product name - Fixed height */}
        <h3 
          className="text-lg font-semibold text-white mb-2 line-clamp-2 min-h-[3.5rem] group-hover:text-beige-100 transition-colors duration-300" 
          data-testid={`text-product-name-${product.id}`}
        >
          {product.name}
        </h3>
        
        {/* Product description - Fixed height */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-2 min-h-[2.5rem] group-hover:text-gray-300 transition-colors duration-300" data-testid={`text-product-description-${product.id}`}>
          {product.description}
        </p>
        
        {/* Category badge */}
        <div className="mb-4">
          <Badge 
            variant="outline" 
            className="text-xs glass-effect border-noir-600/50 text-gray-400 group-hover:border-beige-100/30 group-hover:text-beige-100 transition-all duration-300"
            data-testid={`text-product-category-${product.id}`}
          >
            {product.category}
          </Badge>
        </div>
        
        {/* Spacer to push price and buttons to bottom */}
        <div className="flex-1"></div>
        
        {/* Price Section */}
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-baseline space-x-2">
              <span 
                className="text-2xl font-bold gradient-text pulse-glow" 
                data-testid={`text-product-price-${product.id}`}
              >
                ${product.price}
              </span>
              <span className="text-sm text-gray-500 line-through">
                ${(parseFloat(product.price) * 1.2).toFixed(2)}
              </span>
            </div>
            {product.inStock > 0 && product.inStock <= 5 && (
              <span className="text-xs text-yellow-400 font-medium">
                Only {product.inStock} left
              </span>
            )}
          </div>
        </div>
        
        {/* Action Buttons - Always at bottom */}
        <div className="grid grid-cols-2 gap-2">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="outline"
              size="sm"
              className="w-full glass-effect border-noir-600/50 text-white hover:bg-noir-700/50 hover:border-beige-100/30 hover:text-beige-100 transition-all duration-300 text-xs sm:text-sm"
              onClick={handleViewMore}
              data-testid={`button-view-more-${product.id}`}
            >
              <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              View
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="sm"
              className="w-full bg-beige-100 hover:bg-beige-200 text-noir-900 font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm"
              onClick={handleAddToCart}
              disabled={product.inStock === 0}
              data-testid={`button-add-to-cart-${product.id}`}
            >
              <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              {product.inStock === 0 ? "Out" : "Add"}
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
