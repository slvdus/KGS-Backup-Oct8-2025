import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/cart-context";

export default function CartSlider() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, totalItems, subtotal } = useCart();

  const tax = subtotal * 0.0825; // 8.25% tax rate
  const total = subtotal + tax;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            data-testid="cart-backdrop"
          />
          
          {/* Cart Slider */}
          <motion.div
            className="fixed right-0 top-0 h-full w-full max-w-sm sm:max-w-md apple-glass-nav border-l border-white/10 z-50 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            data-testid="cart-slider"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <ShoppingBag className="w-6 h-6 text-beige-100" />
                <h2 className="text-xl font-bold text-white" data-testid="cart-title">
                  Shopping Cart
                </h2>
                {totalItems > 0 && (
                  <motion.span
                    className="bg-beige-100 text-noir-900 text-sm font-bold px-2 py-1 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    data-testid="cart-item-count"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </div>
              <motion.button
                onClick={closeCart}
                className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-noir-700/50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                data-testid="button-close-cart"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              {items.length === 0 ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  data-testid="cart-empty"
                >
                  <ShoppingBag className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Your cart is empty</h3>
                  <p className="text-gray-400 mb-6">Add some items to get started</p>
                  <Button
                    onClick={closeCart}
                    className="bg-beige-100 hover:bg-beige-200 text-noir-900 font-bold"
                    data-testid="button-continue-shopping"
                  >
                    <Link href="/catalog">Continue Shopping</Link>
                  </Button>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  {items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      className="glass-effect p-3 sm:p-4 rounded-xl border border-white/10 group"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      data-testid={`cart-item-${item.id}`}
                    >
                      <div className="flex space-x-4">
                        <motion.img
                          src={item.image}
                          alt={item.name}
                          className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-lg"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-semibold text-sm sm:text-base truncate mb-1" data-testid={`cart-item-name-${item.id}`}>
                            {item.name}
                          </h4>
                          <p className="text-gray-400 text-xs sm:text-sm mb-2" data-testid={`cart-item-category-${item.id}`}>
                            {item.category}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-beige-100 font-bold" data-testid={`cart-item-price-${item.id}`}>
                              ${item.price}
                            </span>
                            <div className="flex items-center space-x-2">
                              {/* Quantity Controls */}
                              <motion.button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 text-gray-400 hover:text-white hover:bg-noir-700/50 rounded transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                data-testid={`button-decrease-${item.id}`}
                              >
                                <Minus className="w-4 h-4" />
                              </motion.button>
                              <span className="text-white font-semibold w-8 text-center" data-testid={`cart-item-quantity-${item.id}`}>
                                {item.quantity}
                              </span>
                              <motion.button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 text-gray-400 hover:text-white hover:bg-noir-700/50 rounded transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                data-testid={`button-increase-${item.id}`}
                              >
                                <Plus className="w-4 h-4" />
                              </motion.button>
                              <motion.button
                                onClick={() => removeItem(item.id)}
                                className="p-1 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                data-testid={`button-remove-${item.id}`}
                              >
                                <Trash2 className="w-4 h-4" />
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <motion.div
                className="border-t border-white/10 p-4 sm:p-6 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {/* Totals */}
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal:</span>
                    <span data-testid="cart-subtotal">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Tax (8.25%):</span>
                    <span data-testid="cart-tax">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-white font-bold text-base sm:text-lg border-t border-white/10 pt-2">
                    <span>Total:</span>
                    <span data-testid="cart-total">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Link href="/cart" className="block">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        onClick={closeCart}
                        className="w-full bg-beige-100 hover:bg-beige-200 text-noir-900 font-bold py-3 text-sm sm:text-base magnetic-btn ripple"
                        data-testid="button-view-cart"
                      >
                        View Cart & Checkout
                      </Button>
                    </motion.div>
                  </Link>
                  <Link href="/catalog" className="block">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        onClick={closeCart}
                        variant="outline"
                        className="w-full border-beige-100/30 text-beige-100 hover:bg-beige-100/10 text-sm sm:text-base apple-nav-item"
                        data-testid="button-continue-shopping-footer"
                      >
                        Continue Shopping
                      </Button>
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}