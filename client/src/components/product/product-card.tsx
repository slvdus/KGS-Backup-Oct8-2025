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
      className="product-card bg-noir-800 border border-noir-700 rounded-lg overflow-hidden cursor-pointer"
    >
      <Link href={`/product/${product.id}`} data-testid={`link-product-${product.id}`}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-lg font-semibold text-white mb-2" data-testid={`text-product-name-${product.id}`}>
            {product.name}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2" data-testid={`text-product-description-${product.id}`}>
            {product.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-beige-100" data-testid={`text-product-price-${product.id}`}>
              ${product.price}
            </span>
            <span className="text-xs text-gray-500 bg-noir-700 px-2 py-1 rounded" data-testid={`text-product-category-${product.id}`}>
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
