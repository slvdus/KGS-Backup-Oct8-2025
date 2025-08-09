import { motion } from "framer-motion";
import { Link } from "wouter";
import { Plus, Minus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/cart-context";

export default function Cart() {
  const { items, updateQuantity, removeItem, totalItems, subtotal } = useCart();

  const tax = subtotal * 0.0825; // 8.25% tax rate
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-noir-900 text-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/catalog">
            <motion.div
              className="inline-flex items-center text-beige-100 hover:text-white mb-4 group"
              whileHover={{ x: -5 }}
              transition={{ duration: 0.2 }}
              data-testid="link-back-to-catalog"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:transform group-hover:-translate-x-1 transition-transform" />
              Back to Catalog
            </motion.div>
          </Link>
          <h1 className="responsive-text-4xl md:responsive-text-5xl font-bold mb-4" data-testid="page-title">
            Shopping Cart
          </h1>
          {totalItems > 0 && (
            <p className="text-gray-400 responsive-text-lg" data-testid="cart-summary">
              {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
            </p>
          )}
        </motion.div>

        {items.length === 0 ? (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            data-testid="cart-empty"
          >
            <ShoppingBag className="w-24 h-24 text-gray-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Your cart is empty</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Looks like you haven't added any items to your cart yet. Start browsing our catalog to find the perfect firearms and equipment.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                className="bg-beige-100 hover:bg-beige-200 text-noir-900 font-bold px-8 py-4 text-lg magnetic-btn ripple"
                data-testid="button-browse-catalog"
              >
                <Link href="/catalog">Browse Catalog</Link>
              </Button>
            </motion.div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="glass-effect p-4 sm:p-6 rounded-xl border border-white/10 group card-hover"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
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
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      className="w-full bg-beige-100 hover:bg-beige-200 text-noir-900 font-bold py-3 sm:py-4 responsive-text-base lg:text-lg magnetic-btn ripple"
                      data-testid="button-proceed-checkout"
                    >
                      <Link href="/checkout" className="w-full">
                        Proceed to Checkout
                      </Link>
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="outline"
                      className="w-full border-beige-100/30 text-beige-100 hover:bg-beige-100/10 py-3 sm:py-4 apple-nav-item"
                      data-testid="button-continue-shopping"
                    >
                      <Link href="/catalog" className="w-full">
                        Continue Shopping
                      </Link>
                    </Button>
                  </motion.div>
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
      </div>
    </div>
  );
}