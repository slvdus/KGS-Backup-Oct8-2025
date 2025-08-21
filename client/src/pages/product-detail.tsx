import { useState, useEffect } from "react";
import SEOHead, { getProductSEO } from "@/components/seo-head";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link } from "wouter";
import { 
  ArrowLeft, 
  Plus, 
  Minus, 
  ShoppingCart, 
  Phone, 
  Shield, 
  Truck, 
  Award, 
  Heart,
  Star,
  ChevronLeft,
  ChevronRight,
  Zap,
  Trophy,
  Target,
  CheckCircle,
  Eye
} from "lucide-react";
import { useProduct } from "@/hooks/use-products";
import { useCart } from "@/contexts/cart-context";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

export default function ProductDetail() {
  const { id } = useParams();
  const { data: product, isLoading, error } = useProduct(id!);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);
  
  // Create multiple product images for carousel (using different text params)
  const productImages = product ? [
    product.image,
    `/api/placeholder/600/400?text=${encodeURIComponent(product.name + ' - Angle 2')}`,
    `/api/placeholder/600/400?text=${encodeURIComponent(product.name + ' - Close Up')}`,
    `/api/placeholder/600/400?text=${encodeURIComponent(product.name + ' - Accessories')}`
  ] : [];

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

  const { addItem, openCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    if (!product) return;
    
    // Add items to cart based on quantity
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
      });
    }
    
    setShowSuccessAnimation(true);
    setTimeout(() => setShowSuccessAnimation(false), 2000);
    
    // Open the cart slider to show the added item
    setTimeout(() => openCart(), 300);
  };

  const handleContactForPricing = () => {
    console.log(`Contact for pricing: ${product?.name}`);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-16 sm:pt-20 bg-noir-900" data-testid="loading-product-detail">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <motion.div 
                className="w-full h-96 bg-gradient-to-r from-noir-700 via-noir-600 to-noir-700 rounded-xl shimmer-effect"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="flex space-x-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <motion.div 
                    key={i}
                    className="w-20 h-20 bg-gradient-to-r from-noir-700 via-noir-600 to-noir-700 rounded-lg shimmer-effect"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  />
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <motion.div className="h-8 bg-gradient-to-r from-noir-700 via-noir-600 to-noir-700 rounded shimmer-effect" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
              <motion.div className="h-6 bg-gradient-to-r from-noir-700 via-noir-600 to-noir-700 rounded shimmer-effect" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} />
              <motion.div className="h-6 w-2/3 bg-gradient-to-r from-noir-700 via-noir-600 to-noir-700 rounded shimmer-effect" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} />
              <motion.div className="h-12 bg-gradient-to-r from-noir-700 via-noir-600 to-noir-700 rounded shimmer-effect" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} />
              <motion.div className="h-10 bg-gradient-to-r from-noir-700 via-noir-600 to-noir-700 rounded shimmer-effect" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen pt-16 sm:pt-20 flex items-center justify-center" data-testid="error-product-detail">
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
    <div className="min-h-screen pt-16 sm:pt-20 bg-noir-900 relative overflow-hidden" data-testid="page-product-detail">
      {product && <SEOHead {...getProductSEO(product)} />}
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-beige-100/3 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-beige-100/2 rounded-full blur-3xl float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Success Animation Overlay */}
      <AnimatePresence>
        {showSuccessAnimation && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-noir-900/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              className="bg-gradient-to-r from-green-500 to-emerald-500 p-8 rounded-full"
            >
              <CheckCircle className="w-16 h-16 text-white" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>



      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header with Back Button and Gamification */}
        <div className="flex justify-between items-center mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/catalog">
              <Button 
                variant="outline" 
                className="glass-effect border-noir-700/50 text-white hover:bg-noir-700/50 neon-border"
                data-testid="button-back"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Catalog
              </Button>
            </Link>
          </motion.div>


        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-beige-100/10 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 z-0"></div>
              <motion.img 
                key={currentImageIndex}
                src={productImages[currentImageIndex]} 
                alt={product.name} 
                className="relative w-full h-96 lg:h-[500px] object-cover rounded-xl shadow-2xl glass-effect border border-noir-700/50 group-hover:scale-[1.02] transition-transform duration-500"
                data-testid="img-product-detail"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Carousel Controls */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-noir-900/80 backdrop-blur-sm rounded-full text-white hover:bg-noir-800 transition-colors opacity-0 group-hover:opacity-100"
                data-testid="button-prev-image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-noir-900/80 backdrop-blur-sm rounded-full text-white hover:bg-noir-800 transition-colors opacity-0 group-hover:opacity-100"
                data-testid="button-next-image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Wishlist Button */}
              <motion.button
                onClick={toggleWishlist}
                className="absolute top-4 right-4 p-2 bg-noir-900/80 backdrop-blur-sm rounded-full text-white hover:bg-noir-800 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-wishlist"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
              </motion.button>
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-2">
              {productImages.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'border-beige-100 scale-105' 
                      : 'border-noir-700/50 hover:border-beige-100/50'
                  }`}
                  whileHover={{ scale: index === currentImageIndex ? 1.05 : 1.1 }}
                  data-testid={`thumbnail-${index}`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} view ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Product Header */}
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <motion.h1 
                    className="text-3xl lg:text-4xl font-bold gradient-text mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    data-testid="text-product-name"
                  >
                    {product.name}
                  </motion.h1>
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary" className="glass-effect border-beige-100/30" data-testid="text-product-category">
                      {product.category}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
                        />
                      ))}
                      <span className="text-gray-400 text-sm ml-2">(4.8) • 142 reviews</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1 text-green-400">
                  <Shield className="w-4 h-4" />
                  <span>Licensed Dealer</span>
                </div>
                <div className="flex items-center space-x-1 text-blue-400">
                  <Truck className="w-4 h-4" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center space-x-1 text-purple-400">
                  <Award className="w-4 h-4" />
                  <span>Premium Quality</span>
                </div>
              </div>
            </div>

            {/* Price Section */}
            <div className="glass-effect p-6 rounded-xl border border-noir-700/50 neon-border">
              <div className="flex items-baseline justify-between mb-4">
                <div className="flex items-baseline space-x-4">
                  <motion.span 
                    className="text-5xl font-bold gradient-text pulse-glow"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    data-testid="text-product-price"
                  >
                    ${product.price}
                  </motion.span>
                  <span className="text-gray-400 line-through text-xl">
                    ${(parseFloat(product.price) * 1.2).toFixed(2)}
                  </span>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                    Save 20%
                  </Badge>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                {product.inStock > 0 ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-medium" data-testid="text-in-stock">
                      In Stock ({product.inStock} available)
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span className="text-red-400 font-medium" data-testid="text-out-of-stock">
                      Out of Stock
                    </span>
                  </div>
                )}
                
                <div className="text-right">
                  <div className="text-orange-400 text-sm font-medium">⚡ Limited Time</div>
                  <div className="text-gray-400 text-xs">Offer expires in 2 days</div>
                </div>
              </div>
            </div>

            {/* Quantity Selection */}
            {product.inStock > 0 && (
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-lg font-semibold text-white mb-3">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center glass-effect rounded-xl border border-noir-700/50">
                    <motion.button
                      onClick={decrementQuantity}
                      disabled={quantity <= 1}
                      className="p-3 text-white hover:bg-beige-100/10 disabled:opacity-50 disabled:cursor-not-allowed rounded-l-xl transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      data-testid="button-quantity-decrease"
                    >
                      <Minus className="w-5 h-5" />
                    </motion.button>
                    <motion.span 
                      className="px-6 py-3 text-white text-xl font-bold min-w-[60px] text-center border-x border-noir-700/50"
                      key={quantity}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      data-testid="text-quantity"
                    >
                      {quantity}
                    </motion.span>
                    <motion.button
                      onClick={incrementQuantity}
                      disabled={quantity >= product.inStock}
                      className="p-3 text-white hover:bg-beige-100/10 disabled:opacity-50 disabled:cursor-not-allowed rounded-r-xl transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      data-testid="button-quantity-increase"
                    >
                      <Plus className="w-5 h-5" />
                    </motion.button>
                  </div>
                  
                  <div className="text-gray-400 text-sm">
                    <div>Total: <span className="text-beige-100 font-bold">${(parseFloat(product.price) * quantity).toFixed(2)}</span></div>
                    <div className="text-xs">Save ${((parseFloat(product.price) * 0.2) * quantity).toFixed(2)} with this deal</div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Action Buttons */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  className="bg-beige-100 hover:bg-beige-200 text-noir-900 w-full font-bold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleAddToCart}
                  disabled={product.inStock === 0}
                  data-testid="button-add-to-cart"
                >
                  <div className="flex items-center justify-center space-x-3">
                    <ShoppingCart className="w-6 h-6" />
                    <span>{product.inStock === 0 ? "Out of Stock" : "Add to Cart"}</span>
                    {product.inStock > 0 && (
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30 ml-2">
                        +20 XP
                      </Badge>
                    )}
                  </div>
                </Button>
              </motion.div>
              
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="glass-effect border-beige-100/30 text-beige-100 hover:bg-beige-100/10 font-semibold py-3"
                  onClick={handleContactForPricing}
                  data-testid="button-contact-pricing"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
                <Button
                  variant="outline"
                  className="glass-effect border-purple-400/30 text-purple-400 hover:bg-purple-400/10 font-semibold py-3"
                  data-testid="button-financing"
                >
                  💳 Financing
                </Button>
              </div>
              
              {/* Urgency Indicator */}
              {product.inStock > 0 && product.inStock <= 5 && (
                <motion.div
                  className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-3 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <div className="text-orange-400 font-medium">🔥 Almost sold out!</div>
                  <div className="text-orange-300 text-sm">Only {product.inStock} left in stock</div>
                </motion.div>
              )}
            </motion.div>

            {/* Product Details Tabs */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {/* Tab Navigation - Mobile Optimized */}
              <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
                <div className="flex space-x-1 glass-effect rounded-xl p-1 border border-noir-700/50 min-w-fit">
                  {[
                    { id: 'overview', label: 'Overview' },
                    { id: 'specs', label: 'Specs' },
                    { id: 'reviews', label: 'Reviews' },
                    { id: 'shipping', label: 'Shipping' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-shrink-0 py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                        activeTab === tab.id
                          ? 'bg-beige-100 text-noir-900'
                          : 'text-gray-400 hover:text-white hover:bg-noir-700/50'
                      }`}
                      data-testid={`tab-${tab.id}`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="glass-effect rounded-xl border border-noir-700/50 p-4 sm:p-6"
                >
                  {activeTab === 'overview' && (
                    <div className="space-y-4 sm:space-y-6">
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Product Overview</h3>
                      <p className="text-gray-400 leading-relaxed" data-testid="text-product-description">
                        {product.description}
                      </p>

                      {/* Category-specific safety and legal notices */}
                      {(product.category === 'Handguns' || product.category === 'Rifles') && (
                        <motion.div
                          className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="flex items-start space-x-3">
                            <Shield className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                            <div className="text-sm">
                              <h4 className="text-orange-400 font-semibold mb-2">Important Firearm Information</h4>
                              <p className="text-orange-300/90">
                                This firearm must be transferred through a licensed FFL dealer. Background check and valid ID required. 
                                Must be 18+ for rifles/shotguns, 21+ for handguns. Local and state laws apply.
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {product.category === 'Less-Lethal Launchers' && (
                        <motion.div
                          className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="flex items-start space-x-3">
                            <Target className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                            <div className="text-sm">
                              <h4 className="text-blue-400 font-semibold mb-2">Less-Lethal Device Notice</h4>
                              <p className="text-blue-300/90">
                                Non-firearm defense system. Check local laws regarding possession and use of less-lethal devices. 
                                Proper training recommended before use.
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {(product.category === 'Ammunition' || product.category === 'Less-Lethal Ammunition') && (
                        <motion.div
                          className="bg-red-500/10 border border-red-500/30 rounded-lg p-4"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="flex items-start space-x-3">
                            <Zap className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                            <div className="text-sm">
                              <h4 className="text-red-400 font-semibold mb-2">Ammunition Restrictions</h4>
                              <p className="text-red-300/90">
                                Must be 18+ to purchase. Cannot ship to CA, NY, CT, NJ, MA, DC. 
                                Adult signature required upon delivery. Check local caliber restrictions.
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <div className="space-y-3">
                          <h4 className="font-semibold text-beige-100">Key Features</h4>
                          <ul className="space-y-2 text-gray-400">
                            {/* Category-specific key features */}
                            {product.category === 'Handguns' && (
                              <>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Precision engineered action</li>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Ergonomic grip design</li>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Quality sights and controls</li>
                              </>
                            )}
                            {product.category === 'Rifles' && (
                              <>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Precision barrel and action</li>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Modern tactical features</li>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Reliable performance</li>
                              </>
                            )}
                            {product.category === 'Less-Lethal Launchers' && (
                              <>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />CO₂ powered system</li>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Multiple projectile types</li>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Safety-focused design</li>
                              </>
                            )}
                            {(product.category === 'Ammunition' || product.category === 'Less-Lethal Ammunition') && (
                              <>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Quality manufactured</li>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Consistent performance</li>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Proper storage packaging</li>
                              </>
                            )}
                            {product.category === 'Hearing Protection' && (
                              <>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Electronic amplification</li>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Noise reduction rating</li>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Comfortable fit</li>
                              </>
                            )}
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h4 className="font-semibold text-beige-100">What's Included</h4>
                          <ul className="space-y-2 text-gray-400">
                            {/* Category-specific inclusions */}
                            {(product.category === 'Handguns' || product.category === 'Rifles') && (
                              <>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Firearm as described</li>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Owner's manual</li>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Manufacturer warranty</li>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Factory case (if applicable)</li>
                              </>
                            )}
                            {product.category === 'Less-Lethal Launchers' && (
                              <>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Launcher unit</li>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />CO₂ cartridges</li>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />User manual & safety guide</li>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Carrying case</li>
                              </>
                            )}
                            {(product.category === 'Ammunition' || product.category === 'Less-Lethal Ammunition') && (
                              <>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Full quantity as advertised</li>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Original packaging</li>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Lot number documentation</li>
                              </>
                            )}
                            {product.category === 'Hearing Protection' && (
                              <>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Electronic earmuffs</li>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />User manual</li>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Batteries (if required)</li>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Carrying bag</li>
                              </>
                            )}
                          </ul>
                        </div>
                      </div>

                      {/* Category-specific use case information */}
                      <div className="space-y-3 mt-6">
                        <h4 className="font-semibold text-beige-100">Recommended Use Cases</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {product.category === 'Handguns' && (
                            <>
                              <div className="glass-effect p-3 rounded-lg border border-noir-700/30 text-center">
                                <Target className="w-6 h-6 text-beige-100 mx-auto mb-2" />
                                <div className="text-sm text-gray-300">Target Shooting</div>
                              </div>
                              <div className="glass-effect p-3 rounded-lg border border-noir-700/30 text-center">
                                <Shield className="w-6 h-6 text-beige-100 mx-auto mb-2" />
                                <div className="text-sm text-gray-300">Personal Defense</div>
                              </div>
                              <div className="glass-effect p-3 rounded-lg border border-noir-700/30 text-center">
                                <Trophy className="w-6 h-6 text-beige-100 mx-auto mb-2" />
                                <div className="text-sm text-gray-300">Competition</div>
                              </div>
                            </>
                          )}
                          {product.category === 'Rifles' && (
                            <>
                              <div className="glass-effect p-3 rounded-lg border border-noir-700/30 text-center">
                                <Target className="w-6 h-6 text-beige-100 mx-auto mb-2" />
                                <div className="text-sm text-gray-300">Long Range</div>
                              </div>
                              <div className="glass-effect p-3 rounded-lg border border-noir-700/30 text-center">
                                <Shield className="w-6 h-6 text-beige-100 mx-auto mb-2" />
                                <div className="text-sm text-gray-300">Ranch/Defense</div>
                              </div>
                              <div className="glass-effect p-3 rounded-lg border border-noir-700/30 text-center">
                                <Trophy className="w-6 h-6 text-beige-100 mx-auto mb-2" />
                                <div className="text-sm text-gray-300">Hunting</div>
                              </div>
                            </>
                          )}
                          {product.category === 'Less-Lethal Launchers' && (
                            <>
                              <div className="glass-effect p-3 rounded-lg border border-noir-700/30 text-center">
                                <Shield className="w-6 h-6 text-beige-100 mx-auto mb-2" />
                                <div className="text-sm text-gray-300">Home Defense</div>
                              </div>
                              <div className="glass-effect p-3 rounded-lg border border-noir-700/30 text-center">
                                <Target className="w-6 h-6 text-beige-100 mx-auto mb-2" />
                                <div className="text-sm text-gray-300">Training</div>
                              </div>
                              <div className="glass-effect p-3 rounded-lg border border-noir-700/30 text-center">
                                <Trophy className="w-6 h-6 text-beige-100 mx-auto mb-2" />
                                <div className="text-sm text-gray-300">Recreation</div>
                              </div>
                            </>
                          )}
                          {(product.category === 'Ammunition' || product.category === 'Less-Lethal Ammunition') && (
                            <>
                              <div className="glass-effect p-3 rounded-lg border border-noir-700/30 text-center">
                                <Target className="w-6 h-6 text-beige-100 mx-auto mb-2" />
                                <div className="text-sm text-gray-300">Range Training</div>
                              </div>
                              <div className="glass-effect p-3 rounded-lg border border-noir-700/30 text-center">
                                <Shield className="w-6 h-6 text-beige-100 mx-auto mb-2" />
                                <div className="text-sm text-gray-300">Personal Defense</div>
                              </div>
                              <div className="glass-effect p-3 rounded-lg border border-noir-700/30 text-center">
                                <Trophy className="w-6 h-6 text-beige-100 mx-auto mb-2" />
                                <div className="text-sm text-gray-300">Competition</div>
                              </div>
                            </>
                          )}
                          {product.category === 'Hearing Protection' && (
                            <>
                              <div className="glass-effect p-3 rounded-lg border border-noir-700/30 text-center">
                                <Target className="w-6 h-6 text-beige-100 mx-auto mb-2" />
                                <div className="text-sm text-gray-300">Range Shooting</div>
                              </div>
                              <div className="glass-effect p-3 rounded-lg border border-noir-700/30 text-center">
                                <Trophy className="w-6 h-6 text-beige-100 mx-auto mb-2" />
                                <div className="text-sm text-gray-300">Hunting</div>
                              </div>
                              <div className="glass-effect p-3 rounded-lg border border-noir-700/30 text-center">
                                <Shield className="w-6 h-6 text-beige-100 mx-auto mb-2" />
                                <div className="text-sm text-gray-300">Training</div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'specs' && (
                    <div className="space-y-4">
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Technical Specifications</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-testid="specifications-list">
                        {product.specifications.map((spec, index) => (
                          <motion.div 
                            key={index} 
                            className="flex items-start space-x-3 p-3 glass-effect rounded-lg border border-noir-700/30"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-beige-100 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300">{spec}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'reviews' && (
                    <div className="space-y-4 sm:space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h3 className="text-lg sm:text-xl font-semibold text-white">Customer Reviews</h3>
                        <div className="flex items-center space-x-2">
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>
                          <span className="text-gray-400">4.8 out of 5</span>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        {Array.from({ length: 3 }).map((_, i) => (
                          <motion.div 
                            key={i}
                            className="glass-effect rounded-lg border border-noir-700/30 p-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-beige-100 rounded-full flex items-center justify-center text-noir-900 font-bold text-sm">
                                  {String.fromCharCode(65 + i)}
                                </div>
                                <span className="text-white font-medium">Anonymous User</span>
                              </div>
                              <div className="flex">
                                {Array.from({ length: 5 }).map((_, j) => (
                                  <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                ))}
                              </div>
                            </div>
                            <p className="text-gray-400">Excellent quality and fast shipping. Highly recommended!</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'shipping' && (
                    <div className="space-y-4 sm:space-y-6">
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Shipping & Transfer Information</h3>
                      
                      {/* Category-specific shipping information */}
                      {(product.category === 'Handguns' || product.category === 'Rifles') && (
                        <motion.div
                          className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mb-6"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <h4 className="text-orange-400 font-semibold mb-3 flex items-center">
                            <Shield className="w-5 h-5 mr-2" />
                            FFL Transfer Required
                          </h4>
                          <div className="space-y-2 text-orange-300/90 text-sm">
                            <p>• Must ship to licensed FFL dealer in your area</p>
                            <p>• Background check and valid ID required for pickup</p>
                            <p>• Transfer fee typically $25-50 (paid to FFL dealer)</p>
                            <p>• Processing time: 1-3 business days after payment</p>
                          </div>
                        </motion.div>
                      )}

                      {(product.category === 'Ammunition' || product.category === 'Less-Lethal Ammunition') && (
                        <motion.div
                          className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <h4 className="text-red-400 font-semibold mb-3 flex items-center">
                            <Zap className="w-5 h-5 mr-2" />
                            Ammunition Shipping Restrictions
                          </h4>
                          <div className="space-y-2 text-red-300/90 text-sm">
                            <p>• Adult signature required (21+ for handgun ammo, 18+ for rifle/shotgun)</p>
                            <p>• Cannot ship to: CA, CT, DC, MA, NJ, NY</p>
                            <p>• Ground shipping only - no air transport</p>
                            <p>• Additional hazmat fees may apply</p>
                          </div>
                        </motion.div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          {/* Standard shipping options */}
                          {!(product.category === 'Handguns' || product.category === 'Rifles') && (
                            <div className="flex items-center space-x-3">
                              <Truck className="w-6 h-6 text-beige-100" />
                              <div>
                                <div className="text-white font-medium">Free Standard Shipping</div>
                                <div className="text-gray-400 text-sm">
                                  {product.category === 'Ammunition' || product.category === 'Less-Lethal Ammunition' 
                                    ? '3-5 business days (ground only)' 
                                    : '5-7 business days'
                                  }
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {(product.category === 'Handguns' || product.category === 'Rifles') && (
                            <div className="flex items-center space-x-3">
                              <Shield className="w-6 h-6 text-beige-100" />
                              <div>
                                <div className="text-white font-medium">FFL Transfer Shipping</div>
                                <div className="text-gray-400 text-sm">Ships to your chosen FFL dealer</div>
                              </div>
                            </div>
                          )}
                          
                          {!(product.category === 'Ammunition' || product.category === 'Less-Lethal Ammunition') && (
                            <div className="flex items-center space-x-3">
                              <Zap className="w-6 h-6 text-yellow-400" />
                              <div>
                                <div className="text-white font-medium">Express Shipping</div>
                                <div className="text-gray-400 text-sm">2-3 business days (+$15)</div>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <Shield className="w-6 h-6 text-green-400" />
                            <div>
                              <div className="text-white font-medium">Secure Packaging</div>
                              <div className="text-gray-400 text-sm">Professional handling & discretion</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Award className="w-6 h-6 text-purple-400" />
                            <div>
                              <div className="text-white font-medium">Insurance Included</div>
                              <div className="text-gray-400 text-sm">Full value coverage</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* FFL Transfer Process */}
                      {(product.category === 'Handguns' || product.category === 'Rifles') && (
                        <div className="space-y-4 mt-6">
                          <h4 className="font-semibold text-beige-100">FFL Transfer Process</h4>
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {[
                              { step: '1', title: 'Choose FFL', desc: 'Select licensed dealer near you' },
                              { step: '2', title: 'Place Order', desc: 'Complete purchase online' },
                              { step: '3', title: 'We Ship', desc: 'Item ships to your FFL' },
                              { step: '4', title: 'Pick Up', desc: 'Complete transfer at FFL' }
                            ].map((item, index) => (
                              <motion.div
                                key={index}
                                className="glass-effect p-4 rounded-lg border border-noir-700/30 text-center"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                              >
                                <div className="w-8 h-8 bg-beige-100 text-noir-900 rounded-full flex items-center justify-center font-bold mx-auto mb-2">
                                  {item.step}
                                </div>
                                <div className="text-white font-medium text-sm">{item.title}</div>
                                <div className="text-gray-400 text-xs mt-1">{item.desc}</div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>

        {/* Related Products Section */}
        <motion.section
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold gradient-text mb-4">You Might Also Like</h2>
            <p className="text-gray-400">Hand-picked recommendations just for you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <motion.div
                key={index}
                className="glass-effect rounded-xl border border-noir-700/50 overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="relative">
                  <img 
                    src={`/api/placeholder/400/250?text=Related+Product+${index + 1}`}
                    alt={`Related product ${index + 1}`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-2">Related Product {index + 1}</h3>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-beige-100 font-bold text-lg">${(299 + index * 50).toFixed(2)}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1 glass-effect border-noir-600/50 text-white hover:bg-noir-700/50 hover:border-beige-100/30 hover:text-beige-100 transition-all duration-300 text-xs sm:text-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add to cart logic here
                      }}
                    >
                      <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      <span className="hidden sm:inline">Add</span>
                      <span className="sm:hidden">Cart</span>
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 cta-button text-xs sm:text-sm"
                    >
                      <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      View
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
