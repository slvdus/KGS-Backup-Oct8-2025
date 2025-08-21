import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Plus, Minus, Trash2, ShoppingBag, ArrowLeft, Shield, Lock, Award, CheckCircle, Package, Truck, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/cart-context";
import SEOHead, { pageSEO } from "@/components/seo-head";
import { useToast } from "@/hooks/use-toast";

export default function Cart() {
  const { items, updateQuantity, removeItem, totalItems, subtotal, addItem } = useCart();
  const { toast } = useToast();
  const [currentUpsellIndex, setCurrentUpsellIndex] = useState(0);

  const tax = subtotal * 0.0825; // 8.25% tax rate
  const total = subtotal + tax;

  const trustFeatures = [
    { icon: Shield, text: "Licensed FFL Dealer", color: "text-green-400" },
    { icon: Lock, text: "Secure Checkout", color: "text-blue-400" },
    { icon: Award, text: "98% Satisfaction", color: "text-amber-400" },
    { icon: Truck, text: "Fast Processing", color: "text-purple-400" }
  ];

  // Upsell products data
  const upsellProducts = [
    {
      id: "upsell-1",
      name: "Federal 9mm 115gr FMJ",
      description: "50 Round Box - Range Ready",
      price: 24.99,
      originalPrice: 29.99,
      image: "/api/placeholder/400/250?text=9mm+Ammo+Box",
      badge: "BEST SELLER",
      badgeColor: "bg-red-500",
      inStock: 50
    },
    {
      id: "upsell-2",
      name: "Vedder LightTuck IWB",
      description: "Premium Kydex Holster",
      price: 59.99,
      originalPrice: 69.99,
      image: "/api/placeholder/400/250?text=IWB+Holster",
      badge: "TOP RATED",
      badgeColor: "bg-amber-500",
      inStock: 25
    },
    {
      id: "upsell-3",
      name: "Otis Elite Cleaning Kit",
      description: "Complete Gun Care System",
      price: 44.99,
      originalPrice: 54.99,
      image: "/api/placeholder/400/250?text=Cleaning+Kit",
      badge: "ESSENTIAL",
      badgeColor: "bg-green-500",
      inStock: 35
    }
  ];

  const handleAddUpsell = (product: typeof upsellProducts[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price.toString(),
      image: product.image,
      quantity: 1,
      inStock: product.inStock
    });
    toast({
      title: "Added to Cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleAddBundle = () => {
    upsellProducts.forEach(product => {
      addItem({
        id: product.id,
        name: product.name,
        price: (product.price * 0.9).toFixed(2), // 10% discount for bundle
        image: product.image,
        quantity: 1,
        inStock: product.inStock
      });
    });
    toast({
      title: "Bundle Added!",
      description: "All 3 items have been added to your cart with a 10% discount.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-noir-900 via-noir-800/50 to-noir-900 text-white relative">
      <SEOHead {...pageSEO.cart} />
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-beige-100/5 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-to-tl from-beige-100/3 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        {/* Trust Badges Bar - Mobile Optimized */}
        <motion.div 
          className="mb-6 sm:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-effect border border-noir-700/50 rounded-xl p-3 sm:p-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {trustFeatures.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  className="flex items-center justify-center gap-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <feature.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${feature.color}`} />
                  <span className="text-xs sm:text-sm text-gray-300 whitespace-nowrap">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Header */}
        <motion.div
          className="mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link href="/catalog">
            <motion.div
              className="inline-flex items-center gap-2 text-beige-100 hover:text-white mb-4 group glass-effect px-4 py-2 rounded-full border border-beige-100/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="link-back-to-catalog"
            >
              <ArrowLeft className="w-4 h-4 group-hover:transform group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm sm:text-base">Continue Shopping</span>
            </motion.div>
          </Link>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 gradient-text" data-testid="page-title">
                Shopping Cart
              </h1>
              {totalItems > 0 && (
                <p className="text-gray-400 text-base sm:text-lg" data-testid="cart-summary">
                  {totalItems} {totalItems === 1 ? 'item' : 'items'} • Ready for checkout
                </p>
              )}
            </div>
            
            {totalItems > 0 && (
              <motion.div
                className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 px-4 py-2 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400">Secure & Encrypted</span>
              </motion.div>
            )}
          </div>
        </motion.div>

        {items.length === 0 ? (
          <motion.div
            className="text-center py-12 sm:py-16 md:py-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            data-testid="cart-empty"
          >
            <div className="glass-effect border border-noir-700/50 rounded-2xl p-8 sm:p-12 max-w-2xl mx-auto">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.6, delay: 0.3 }}
              >
                <ShoppingBag className="w-20 h-20 sm:w-24 sm:h-24 text-gray-500 mx-auto mb-6" />
              </motion.div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Your cart is empty</h2>
              <p className="text-gray-400 mb-8 max-w-md mx-auto text-sm sm:text-base">
                Start browsing our extensive catalog of firearms, ammunition, and accessories. Pennsylvania's best prices await!
              </p>
              
              <div className="space-y-4">
                <Link href="/catalog">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      className="w-full sm:w-auto bg-gradient-to-r from-beige-100 to-beige-200 hover:from-beige-200 hover:to-beige-100 text-noir-900 font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl shadow-lg"
                      data-testid="button-browse-catalog"
                    >
                      <Package className="w-5 h-5 mr-2" />
                      Browse Catalog
                    </Button>
                  </motion.div>
                </Link>
                
                <div className="flex items-center justify-center gap-4 text-xs sm:text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4" />
                    <span>Licensed FFL</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span>98% Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="popLayout">
                <motion.div
                  className="space-y-4 sm:space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      layout
                      className="glass-effect p-4 sm:p-6 rounded-xl border border-noir-700/50 transition-all duration-300 overflow-hidden relative"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20, transition: { duration: 0.2 } }}
                      transition={{ delay: index * 0.05 }}
                      data-testid={`cart-item-${item.id}`}
                    >
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                      <motion.div
                        className="flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full sm:w-32 md:w-36 h-32 sm:h-32 md:h-36 object-cover rounded-lg"
                          data-testid={`cart-item-image-${item.id}`}
                        />
                      </motion.div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                          <div className="mb-4 md:mb-0">
                            <h3 className="responsive-text-xl font-bold text-white mb-2" data-testid={`cart-item-name-${item.id}`}>
                              {item.name}
                            </h3>
                            <p className="text-gray-400 responsive-text-sm mb-2" data-testid={`cart-item-category-${item.id}`}>
                              {item.category}
                            </p>
                            <p className="responsive-text-xl lg:text-2xl font-bold text-beige-100" data-testid={`cart-item-price-${item.id}`}>
                              ${item.price}
                            </p>
                          </div>
                          
                          <div className="flex items-center justify-between md:flex-col md:items-end space-y-4">
                            {/* Quantity Controls */}
                            <div className="flex items-center space-x-3">
                              <motion.button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-2 text-gray-400 hover:text-white hover:bg-noir-700/50 rounded-lg transition-colors magnetic-btn"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                data-testid={`button-decrease-${item.id}`}
                              >
                                <Minus className="w-5 h-5" />
                              </motion.button>
                              <span className="text-white font-bold text-lg w-12 text-center" data-testid={`cart-item-quantity-${item.id}`}>
                                {item.quantity}
                              </span>
                              <motion.button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-2 text-gray-400 hover:text-white hover:bg-noir-700/50 rounded-lg transition-colors magnetic-btn"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                data-testid={`button-increase-${item.id}`}
                              >
                                <Plus className="w-5 h-5" />
                              </motion.button>
                            </div>
                            
                            {/* Remove Button */}
                            <motion.button
                              onClick={() => removeItem(item.id)}
                              className="p-2 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg transition-colors magnetic-btn"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              data-testid={`button-remove-${item.id}`}
                            >
                              <Trash2 className="w-5 h-5" />
                            </motion.button>
                          </div>
                        </div>
                        
                        {/* Item Subtotal */}
                        <div className="mt-4 pt-4 border-t border-noir-700/50">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400">Item subtotal:</span>
                            <span className="text-xl font-bold text-white" data-testid={`cart-item-subtotal-${item.id}`}>
                              ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                className="glass-effect p-4 sm:p-6 rounded-xl border border-white/10 sticky top-20 lg:top-24"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                data-testid="order-summary"
              >
                <h3 className="responsive-text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal ({totalItems} items):</span>
                    <span data-testid="summary-subtotal">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Tax (8.25%):</span>
                    <span data-testid="summary-tax">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex justify-between text-white font-bold responsive-text-lg lg:text-xl">
                      <span>Total:</span>
                      <span data-testid="summary-total">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <Link href="/checkout" className="block">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        className="w-full bg-beige-100 hover:bg-beige-200 text-noir-900 font-bold py-3 sm:py-4 responsive-text-base lg:text-lg magnetic-btn ripple"
                        data-testid="button-proceed-checkout"
                      >
                        Proceed to Checkout
                      </Button>
                    </motion.div>
                  </Link>
                  
                  <Link href="/catalog" className="block">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="outline"
                        className="w-full border-beige-100/30 text-beige-100 hover:bg-beige-100/10 py-3 sm:py-4 apple-nav-item"
                        data-testid="button-continue-shopping"
                      >
                        Continue Shopping
                      </Button>
                    </motion.div>
                  </Link>
                </div>

                {/* Store Pickup Notice */}
                <motion.div
                  className="mt-6 p-4 bg-beige-100/10 rounded-lg border border-beige-100/20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <p className="text-sm text-beige-100 text-center">
                    <strong>Store Pickup Only</strong><br />
                    All orders are prepared for in-store pickup at our location.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        )}

        {/* Upsells Section */}
        <motion.section 
          className="mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center mb-6 sm:mb-8">
            <motion.h2 
              className="text-2xl sm:text-3xl font-bold text-white mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Complete Your Setup
            </motion.h2>
            <motion.p 
              className="text-beige-100/70 text-sm sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Star className="inline w-4 h-4 text-amber-400 mr-1" />
              Customers who bought these items also purchased
            </motion.p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {upsellProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className={`glass-effect border border-noir-700/50 rounded-xl overflow-hidden group ${
                  index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2">
                    <span className={`${product.badgeColor} text-white px-2 py-1 rounded-full text-xs font-semibold`}>
                      {product.badge}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold text-lg mb-1">{product.name}</h3>
                  <p className="text-beige-100/60 text-sm mb-3">{product.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-2xl font-bold text-beige-100">${product.price.toFixed(2)}</span>
                      <span className="text-sm text-beige-100/50 line-through ml-2">${product.originalPrice.toFixed(2)}</span>
                    </div>
                    <span className="text-green-400 text-sm">In Stock</span>
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-beige-100 to-beige-200 hover:from-beige-200 hover:to-beige-100 text-noir-900 font-semibold"
                    onClick={() => handleAddUpsell(product)}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="sm:hidden relative">
            <div className="overflow-hidden">
              <motion.div 
                className="flex"
                animate={{ x: `-${currentUpsellIndex * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                drag="x"
                dragConstraints={{ left: -1000, right: 0 }}
                onDragEnd={(_, info) => {
                  const swipeThreshold = 50;
                  if (info.offset.x > swipeThreshold && currentUpsellIndex > 0) {
                    setCurrentUpsellIndex(currentUpsellIndex - 1);
                  } else if (info.offset.x < -swipeThreshold && currentUpsellIndex < upsellProducts.length - 1) {
                    setCurrentUpsellIndex(currentUpsellIndex + 1);
                  }
                }}
              >
                {upsellProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    className="w-full flex-shrink-0 px-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="glass-effect border border-noir-700/50 rounded-xl overflow-hidden">
                      <div className="relative overflow-hidden">
                        <img 
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <span className={`${product.badgeColor} text-white px-2 py-1 rounded-full text-xs font-semibold`}>
                            {product.badge}
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-white font-semibold text-lg mb-1">{product.name}</h3>
                        <p className="text-beige-100/60 text-sm mb-3">{product.description}</p>
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <span className="text-2xl font-bold text-beige-100">${product.price.toFixed(2)}</span>
                            <span className="text-sm text-beige-100/50 line-through ml-2">${product.originalPrice.toFixed(2)}</span>
                          </div>
                          <span className="text-green-400 text-sm">In Stock</span>
                        </div>
                        <Button 
                          className="w-full bg-gradient-to-r from-beige-100 to-beige-200 hover:from-beige-200 hover:to-beige-100 text-noir-900 font-semibold"
                          onClick={() => handleAddUpsell(product)}
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {upsellProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentUpsellIndex(index)}
                  className={`transition-all duration-300 ${
                    currentUpsellIndex === index 
                      ? 'w-8 h-2 bg-beige-100 rounded-full' 
                      : 'w-2 h-2 bg-beige-100/30 rounded-full hover:bg-beige-100/50'
                  }`}
                  aria-label={`Go to product ${index + 1}`}
                />
              ))}
            </div>

            {/* Previous/Next Buttons */}
            <button
              onClick={() => setCurrentUpsellIndex(Math.max(0, currentUpsellIndex - 1))}
              className={`absolute left-2 top-1/2 -translate-y-1/2 p-2 glass-effect rounded-full text-beige-100/70 hover:text-beige-100 transition-all ${
                currentUpsellIndex === 0 ? 'opacity-30 cursor-not-allowed' : ''
              }`}
              disabled={currentUpsellIndex === 0}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setCurrentUpsellIndex(Math.min(upsellProducts.length - 1, currentUpsellIndex + 1))}
              className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 glass-effect rounded-full text-beige-100/70 hover:text-beige-100 transition-all ${
                currentUpsellIndex === upsellProducts.length - 1 ? 'opacity-30 cursor-not-allowed' : ''
              }`}
              disabled={currentUpsellIndex === upsellProducts.length - 1}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Special Offer Banner */}
          <motion.div
            className="mt-6 sm:mt-8 glass-effect border border-amber-500/30 rounded-xl p-4 sm:p-6 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Award className="w-8 h-8 text-amber-400" />
              <div className="text-center sm:text-left">
                <p className="text-white font-semibold text-base sm:text-lg">
                  Add all 3 items and save an extra 10%!
                </p>
                <p className="text-beige-100/70 text-sm">
                  Limited time bundle offer - Save $13 instantly
                </p>
              </div>
              <Button 
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-6 py-2 rounded-xl whitespace-nowrap"
                onClick={handleAddBundle}
              >
                Add Bundle
              </Button>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}