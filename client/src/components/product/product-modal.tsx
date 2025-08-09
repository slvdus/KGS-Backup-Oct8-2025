import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Product } from "@shared/schema";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const incrementQuantity = () => {
    if (quantity < product.inStock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    // TODO: Implement add to cart functionality
    console.log(`Adding ${quantity} of ${product.name} to cart`);
    onClose();
  };

  const handleContactForPricing = () => {
    // TODO: Implement contact for pricing functionality
    console.log(`Contact for pricing: ${product.name}`);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          data-testid="modal-product-detail"
        >
          <motion.div
            className="bg-noir-800 border border-noir-700 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-white">Product Details</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="text-gray-400 hover:text-white"
                  data-testid="button-close-modal"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 lg:h-96 object-cover rounded-lg"
                    data-testid="img-product-detail"
                  />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-4" data-testid="text-product-detail-name">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 mb-6" data-testid="text-product-detail-description">
                    {product.description}
                  </p>
                  
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-beige-100" data-testid="text-product-detail-price">
                      ${product.price}
                    </span>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Quantity
                      </label>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={decrementQuantity}
                          disabled={quantity <= 1}
                          className="border-noir-600 text-white hover:bg-noir-600"
                          data-testid="button-quantity-decrease"
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-12 text-center text-white" data-testid="text-quantity">
                          {quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={incrementQuantity}
                          disabled={quantity >= product.inStock}
                          className="border-noir-600 text-white hover:bg-noir-600"
                          data-testid="button-quantity-increase"
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      {product.inStock > 0 && (
                        <p className="text-sm text-gray-400 mt-1" data-testid="text-stock-available">
                          {product.inStock} available
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button
                      className="cta-button w-full bg-beige-100 text-noir-900 hover:bg-beige-200 font-semibold"
                      onClick={handleAddToCart}
                      disabled={product.inStock === 0}
                      data-testid="button-add-to-cart"
                    >
                      {product.inStock === 0 ? "Out of Stock" : "Add to Cart"}
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-beige-100 text-beige-100 hover:bg-beige-100 hover:text-noir-900"
                      onClick={handleContactForPricing}
                      data-testid="button-contact-pricing"
                    >
                      Contact for Pricing
                    </Button>
                  </div>
                  
                  <div className="mt-8 border-t border-noir-700 pt-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Specifications</h4>
                    <div className="space-y-2 text-sm" data-testid="text-specifications">
                      {product.specifications.map((spec, index) => (
                        <div key={index} className="text-gray-400">
                          {spec}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
