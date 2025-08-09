import { motion } from "framer-motion";
import { Link } from "wouter";
import type { Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="product-card glass-effect border border-noir-700/50 rounded-xl overflow-hidden cursor-pointer group relative"
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-beige-100/5 via-beige-100/10 to-beige-100/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
      
      <Link href={`/product/${product.id}`} data-testid={`link-product-${product.id}`}>
        <div className="relative overflow-hidden">
          {/* Enhanced image with parallax effect */}
          <motion.img 
            src={product.image} 
            alt={product.name} 
            className="product-image w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          
          {/* Gradient overlay with enhanced animation */}
          <div className="absolute inset-0 bg-gradient-to-t from-noir-900/70 via-noir-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Animated border on hover */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-beige-100/30 transition-all duration-500 rounded-t-xl"></div>
          
          {/* Product availability indicator with enhanced animation */}
          <motion.div 
            className="absolute top-3 right-3"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {product.inStock > 5 ? (
              <motion.div 
                className="w-3 h-3 bg-green-400 rounded-full shadow-lg relative"
                animate={{ 
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 5px rgba(34, 197, 94, 0.5)",
                    "0 0 15px rgba(34, 197, 94, 0.8)",
                    "0 0 5px rgba(34, 197, 94, 0.5)"
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="absolute inset-0 bg-green-400 rounded-full opacity-30 animate-ping"></div>
              </motion.div>
            ) : product.inStock > 0 ? (
              <motion.div 
                className="w-3 h-3 bg-yellow-400 rounded-full shadow-lg relative"
                animate={{ 
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    "0 0 5px rgba(251, 191, 36, 0.5)",
                    "0 0 10px rgba(251, 191, 36, 0.7)",
                    "0 0 5px rgba(251, 191, 36, 0.5)"
                  ]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="absolute inset-0 bg-yellow-400 rounded-full opacity-30 animate-ping"></div>
              </motion.div>
            ) : (
              <div className="w-3 h-3 bg-red-400 rounded-full shadow-lg"></div>
            )}
          </motion.div>
        </div>
        
        <div className="p-6 relative">
          {/* Enhanced top border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-beige-100/30 to-transparent group-hover:via-beige-100/60 transition-colors duration-500"></div>
          
          {/* Product name with enhanced hover effect */}
          <motion.h3 
            className="text-lg font-semibold text-white mb-2 group-hover:text-beige-100 transition-colors duration-300" 
            data-testid={`text-product-name-${product.id}`}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            {product.name}
          </motion.h3>
          
          <p className="text-gray-400 text-sm mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors duration-300" data-testid={`text-product-description-${product.id}`}>
            {product.description}
          </p>
          
          <div className="flex justify-between items-center">
            {/* Enhanced price with pulse animation */}
            <motion.span 
              className="text-xl font-bold gradient-text pulse-glow" 
              data-testid={`text-product-price-${product.id}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              ${product.price}
            </motion.span>
            
            {/* Enhanced category badge */}
            <motion.span 
              className="text-xs text-gray-400 glass-effect border border-noir-600/50 px-3 py-1 rounded-full group-hover:border-beige-100/30 group-hover:text-beige-100 transition-all duration-300" 
              data-testid={`text-product-category-${product.id}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {product.category}
            </motion.span>
          </div>
          
          {/* Enhanced stock indicators */}
          {product.inStock <= 5 && product.inStock > 0 && (
            <motion.div 
              className="mt-3 p-2 rounded-lg bg-yellow-400/10 border border-yellow-400/20"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-xs text-yellow-400 font-medium" data-testid={`text-product-low-stock-${product.id}`}>
                ⚠️ Only {product.inStock} left in stock
              </span>
            </motion.div>
          )}
          {product.inStock === 0 && (
            <motion.div 
              className="mt-3 p-2 rounded-lg bg-red-400/10 border border-red-400/20"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-xs text-red-400 font-medium" data-testid={`text-product-out-of-stock-${product.id}`}>
                🚫 Out of stock
              </span>
            </motion.div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
