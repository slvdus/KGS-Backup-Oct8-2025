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
      className="product-card glass-effect border border-noir-700/50 rounded-xl overflow-hidden cursor-pointer group"
    >
      <Link href={`/product/${product.id}`} data-testid={`link-product-${product.id}`}>
        <div className="relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-image w-full h-48 object-cover transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-6 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-beige-100/30 to-transparent"></div>
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-beige-100 transition-colors duration-300" data-testid={`text-product-name-${product.id}`}>
            {product.name}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2" data-testid={`text-product-description-${product.id}`}>
            {product.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold gradient-text" data-testid={`text-product-price-${product.id}`}>
              ${product.price}
            </span>
            <span className="text-xs text-gray-400 bg-noir-700/50 border border-noir-600/50 px-3 py-1 rounded-full" data-testid={`text-product-category-${product.id}`}>
              {product.category}
            </span>
          </div>
          {product.inStock <= 5 && product.inStock > 0 && (
            <div className="mt-2">
              <span className="text-xs text-yellow-400" data-testid={`text-product-low-stock-${product.id}`}>
                Only {product.inStock} left in stock
              </span>
            </div>
          )}
          {product.inStock === 0 && (
            <div className="mt-2">
              <span className="text-xs text-red-400" data-testid={`text-product-out-of-stock-${product.id}`}>
                Out of stock
              </span>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
