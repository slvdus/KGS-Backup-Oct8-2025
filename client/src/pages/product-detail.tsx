import { useState } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "wouter";
import { ArrowLeft, Plus, Minus, ShoppingCart, Phone } from "lucide-react";
import { useProduct } from "@/hooks/use-products";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductDetail() {
  const { id } = useParams();
  const { data: product, isLoading, error } = useProduct(id!);
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    if (product && quantity < product.inStock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    console.log(`Adding ${quantity} of ${product?.name} to cart`);
  };

  const handleContactForPricing = () => {
    console.log(`Contact for pricing: ${product?.name}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20" data-testid="loading-product-detail">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Skeleton className="w-full h-96 bg-noir-700 rounded-lg" />
            <div className="space-y-6">
              <Skeleton className="h-8 bg-noir-700" />
              <Skeleton className="h-6 bg-noir-700" />
              <Skeleton className="h-6 w-2/3 bg-noir-700" />
              <Skeleton className="h-12 bg-noir-700" />
              <Skeleton className="h-10 bg-noir-700" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center" data-testid="error-product-detail">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Product Not Found</h2>
          <p className="text-gray-400 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link href="/catalog">
            <Button className="bg-beige-100 text-noir-900 hover:bg-beige-200" data-testid="button-back-to-catalog">
              Back to Catalog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-noir-900" data-testid="page-product-detail">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/catalog">
            <Button 
              variant="outline" 
              className="border-noir-700 text-white hover:bg-noir-700"
              data-testid="button-back"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Catalog
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-2xl"
              data-testid="img-product-detail"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-3xl font-bold text-white mb-2" data-testid="text-product-name">
                {product.name}
              </h1>
              <span className="inline-block bg-noir-700 text-beige-100 px-3 py-1 rounded-full text-sm" data-testid="text-product-category">
                {product.category}
              </span>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed" data-testid="text-product-description">
              {product.description}
            </p>

            <div className="flex items-baseline space-x-4">
              <span className="text-4xl font-bold text-beige-100" data-testid="text-product-price">
                ${product.price}
              </span>
              {product.inStock > 0 ? (
                <span className="text-green-400 text-sm" data-testid="text-in-stock">
                  In Stock ({product.inStock} available)
                </span>
              ) : (
                <span className="text-red-400 text-sm" data-testid="text-out-of-stock">
                  Out of Stock
                </span>
              )}
            </div>

            {/* Quantity Selection */}
            {product.inStock > 0 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Quantity
                  </label>
                  <div className="flex items-center gap-3">
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
                    <span className="w-12 text-center text-white text-lg font-semibold" data-testid="text-quantity">
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
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                className="cta-button w-full bg-beige-100 text-noir-900 hover:bg-beige-200 font-semibold py-3 text-lg"
                onClick={handleAddToCart}
                disabled={product.inStock === 0}
                data-testid="button-add-to-cart"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                {product.inStock === 0 ? "Out of Stock" : "Add to Cart"}
              </Button>
              <Button
                variant="outline"
                className="w-full border-beige-100 text-beige-100 hover:bg-beige-100 hover:text-noir-900 font-semibold py-3 text-lg"
                onClick={handleContactForPricing}
                data-testid="button-contact-pricing"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact for Pricing
              </Button>
            </div>

            {/* Specifications */}
            <div className="border-t border-noir-700 pt-6">
              <h3 className="text-xl font-semibold text-white mb-4">Specifications</h3>
              <div className="space-y-2" data-testid="specifications-list">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="text-gray-400 flex items-center">
                    <span className="w-2 h-2 bg-beige-100 rounded-full mr-3 flex-shrink-0"></span>
                    {spec}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
