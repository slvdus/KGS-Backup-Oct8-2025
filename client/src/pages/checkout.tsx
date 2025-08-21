import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { ArrowLeft, Calendar, User, Phone, Mail, MapPin, CreditCard, Shield, Heart, Info, Lock, Award, CheckCircle, ShieldCheck, Truck, Star, BadgeCheck, FileCheck, AlertCircle, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useCart } from "@/contexts/cart-context";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { CustomerInfo } from "@shared/schema";
import SEOHead, { pageSEO } from "@/components/seo-head";

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart();
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    licenseNumber: "",
    dateOfBirth: "",
  });

  const [pickupDate, setPickupDate] = useState("");
  const [notes, setNotes] = useState("");
  const [veteranDonation, setVeteranDonation] = useState(0);
  const [customDonation, setCustomDonation] = useState("");
  const [showDonationInfo, setShowDonationInfo] = useState(false);

  const tax = subtotal * 0.0825;
  const finalDonation = customDonation ? parseFloat(customDonation) || 0 : veteranDonation;
  const total = subtotal + tax + finalDonation;

  const createOrderMutation = useMutation({
    mutationFn: async (orderData: any) => {
      return apiRequest("/api/orders", "POST", orderData);
    },
    onSuccess: (data: any) => {
      clearCart();
      toast({
        title: "Order Placed Successfully!",
        description: `Your order #${data.orderNumber || 'N/A'} has been placed. We'll contact you when it's ready for pickup.`,
      });
      setLocation("/");
    },
    onError: (error) => {
      toast({
        title: "Order Failed",
        description: "There was an error placing your order. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (items.length === 0) {
      toast({
        title: "Cart is Empty",
        description: "Please add items to your cart before checkout.",
        variant: "destructive",
      });
      return;
    }

    const orderData = {
      customerInfo,
      items,
      subtotal: subtotal.toString(),
      tax: tax.toString(),
      veteranDonation: finalDonation.toString(),
      total: total.toString(),
      pickupDate: new Date(pickupDate),
      notes,
      status: "pending",
    };

    createOrderMutation.mutate(orderData);
  };

  const handleInputChange = (field: keyof CustomerInfo, value: string) => {
    setCustomerInfo(prev => ({ ...prev, [field]: value }));
  };

  // Trust badges configuration
  const trustBadges = [
    { icon: Lock, text: "SSL Encrypted", description: "Your data is protected" },
    { icon: ShieldCheck, text: "Licensed FFL", description: "Federally licensed dealer" },
    { icon: BadgeCheck, text: "ID Verified", description: "Background checks required" },
    { icon: Award, text: "98% Satisfaction", description: "94+ five-star reviews" }
  ];

  const securityFeatures = [
    { icon: FileCheck, text: "Background Check Required" },
    { icon: Shield, text: "ATF Compliant" },
    { icon: CheckCircle, text: "Secure Processing" },
    { icon: Star, text: "Family Owned Since 2020" }
  ];

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-noir-900 via-noir-800/50 to-noir-900 text-white py-20">
        <SEOHead {...pageSEO.checkout} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-effect rounded-2xl p-8 sm:p-12 border border-noir-700/50"
          >
            <ShoppingBag className="w-24 h-24 text-gray-500 mx-auto mb-6" />
            <h1 className="text-3xl sm:text-4xl font-bold mb-6">Your cart is empty</h1>
            <p className="text-gray-400 mb-8">Add items to proceed with checkout.</p>
            <Link href="/catalog">
              <Button
                className="bg-gradient-to-r from-beige-100 to-beige-200 hover:from-beige-200 hover:to-beige-100 text-noir-900 font-bold px-8 py-4"
                data-testid="button-browse-catalog"
              >
                Browse Catalog
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-noir-900 via-noir-800/50 to-noir-900 text-white relative">
      <SEOHead {...pageSEO.checkout} />
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-green-500/5 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 100, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/3 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        {/* Trust Badges Bar */}
        <motion.div 
          className="mb-6 sm:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-effect border border-green-500/20 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-xl p-3 sm:p-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.text}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <badge.icon className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mx-auto mb-1" />
                  <p className="text-xs sm:text-sm font-semibold text-white">{badge.text}</p>
                  <p className="text-[10px] sm:text-xs text-gray-400 hidden sm:block">{badge.description}</p>
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
          <Link href="/cart">
            <motion.div
              className="inline-flex items-center gap-2 text-beige-100 hover:text-white mb-4 group glass-effect px-4 py-2 rounded-full border border-beige-100/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="link-back-to-cart"
            >
              <ArrowLeft className="w-4 h-4 group-hover:transform group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm sm:text-base">Back to Cart</span>
            </motion.div>
          </Link>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 gradient-text" data-testid="page-title">
                Secure Checkout
              </h1>
              <p className="text-gray-400 text-base sm:text-lg">
                Complete your order for in-store pickup • ID verification required
              </p>
            </div>
            
            <motion.div
              className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 px-4 py-2 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Lock className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400">Encrypted & Secure</span>
            </motion.div>
          </div>
        </motion.div>

        <form onSubmit={handleSubmit} data-testid="form-checkout">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Customer Information */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              {/* Personal Information */}
              <motion.div
                className="glass-effect p-4 sm:p-6 rounded-xl border border-noir-700/50 hover:border-beige-100/30 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-beige-100/20 to-beige-100/10 rounded-lg flex items-center justify-center mr-3">
                    <User className="w-5 h-5 sm:w-6 sm:h-6 text-beige-100" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">Personal Information</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <motion.div className="input-focus" whileHover={{ y: -2 }}>
                    <Label htmlFor="firstName" className="text-beige-100 mb-2 block">First Name *</Label>
                    <Input
                      id="firstName"
                      type="text"
                      required
                      value={customerInfo.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="glass-effect border-noir-600/50 text-white placeholder:text-gray-400 focus:border-beige-100/50"
                      placeholder="Enter your first name"
                      data-testid="input-first-name"
                    />
                  </motion.div>
                  
                  <motion.div className="input-focus" whileHover={{ y: -2 }}>
                    <Label htmlFor="lastName" className="text-beige-100 mb-2 block">Last Name *</Label>
                    <Input
                      id="lastName"
                      type="text"
                      required
                      value={customerInfo.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="glass-effect border-noir-600/50 text-white placeholder:text-gray-400 focus:border-beige-100/50"
                      placeholder="Enter your last name"
                      data-testid="input-last-name"
                    />
                  </motion.div>
                  
                  <motion.div className="input-focus" whileHover={{ y: -2 }}>
                    <Label htmlFor="email" className="text-beige-100 mb-2 block">Email *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        required
                        value={customerInfo.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="glass-effect border-noir-600/50 text-white placeholder:text-gray-400 focus:border-beige-100/50 pl-11"
                        placeholder="your@email.com"
                        data-testid="input-email"
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div className="input-focus" whileHover={{ y: -2 }}>
                    <Label htmlFor="phone" className="text-beige-100 mb-2 block">Phone *</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={customerInfo.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="glass-effect border-noir-600/50 text-white placeholder:text-gray-400 focus:border-beige-100/50 pl-11"
                        placeholder="(555) 123-4567"
                        data-testid="input-phone"
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div className="input-focus" whileHover={{ y: -2 }}>
                    <Label htmlFor="dateOfBirth" className="text-beige-100 mb-2 block">Date of Birth</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={customerInfo.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      className="glass-effect border-noir-600/50 text-white placeholder:text-gray-400 focus:border-beige-100/50"
                      data-testid="input-date-of-birth"
                    />
                  </motion.div>
                  
                  <motion.div className="input-focus" whileHover={{ y: -2 }}>
                    <Label htmlFor="licenseNumber" className="text-beige-100 mb-2 block">License Number</Label>
                    <div className="relative">
                      <Shield className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <Input
                        id="licenseNumber"
                        type="text"
                        value={customerInfo.licenseNumber}
                        onChange={(e) => handleInputChange('licenseNumber', e.target.value)}
                        className="glass-effect border-noir-600/50 text-white placeholder:text-gray-400 focus:border-beige-100/50 pl-11"
                        placeholder="Enter license number"
                        data-testid="input-license-number"
                      />
                    </div>
                    <p className="text-sm text-gray-400 mt-1">Required for firearm purchases</p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Address Information */}
              <motion.div
                className="glass-effect p-6 rounded-xl border border-noir-700/50"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center mb-6">
                  <MapPin className="w-6 h-6 text-beige-100 mr-3" />
                  <h2 className="text-2xl font-bold text-white">Address Information</h2>
                </div>
                
                <div className="grid grid-cols-1 gap-6">
                  <motion.div className="input-focus" whileHover={{ y: -2 }}>
                    <Label htmlFor="address" className="text-beige-100 mb-2 block">Street Address *</Label>
                    <Input
                      id="address"
                      type="text"
                      required
                      value={customerInfo.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="glass-effect border-noir-600/50 text-white placeholder:text-gray-400 focus:border-beige-100/50"
                      placeholder="123 Main Street"
                      data-testid="input-address"
                    />
                  </motion.div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div className="input-focus" whileHover={{ y: -2 }}>
                      <Label htmlFor="city" className="text-beige-100 mb-2 block">City *</Label>
                      <Input
                        id="city"
                        type="text"
                        required
                        value={customerInfo.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className="glass-effect border-noir-600/50 text-white placeholder:text-gray-400 focus:border-beige-100/50"
                        placeholder="City"
                        data-testid="input-city"
                      />
                    </motion.div>
                    
                    <motion.div className="input-focus" whileHover={{ y: -2 }}>
                      <Label htmlFor="state" className="text-beige-100 mb-2 block">State *</Label>
                      <Input
                        id="state"
                        type="text"
                        required
                        value={customerInfo.state}
                        onChange={(e) => handleInputChange('state', e.target.value)}
                        className="glass-effect border-noir-600/50 text-white placeholder:text-gray-400 focus:border-beige-100/50"
                        placeholder="State"
                        data-testid="input-state"
                      />
                    </motion.div>
                    
                    <motion.div className="input-focus" whileHover={{ y: -2 }}>
                      <Label htmlFor="zipCode" className="text-beige-100 mb-2 block">ZIP Code *</Label>
                      <Input
                        id="zipCode"
                        type="text"
                        required
                        value={customerInfo.zipCode}
                        onChange={(e) => handleInputChange('zipCode', e.target.value)}
                        className="glass-effect border-noir-600/50 text-white placeholder:text-gray-400 focus:border-beige-100/50"
                        placeholder="12345"
                        data-testid="input-zip-code"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Pickup Information */}
              <motion.div
                className="glass-effect p-6 rounded-xl border border-noir-700/50"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center mb-6">
                  <Calendar className="w-6 h-6 text-beige-100 mr-3" />
                  <h2 className="text-2xl font-bold text-white">Pickup Information</h2>
                </div>
                
                <div className="grid grid-cols-1 gap-6">
                  <motion.div className="input-focus" whileHover={{ y: -2 }}>
                    <Label htmlFor="pickupDate" className="text-beige-100 mb-2 block">Preferred Pickup Date *</Label>
                    <Input
                      id="pickupDate"
                      type="datetime-local"
                      required
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                      className="glass-effect border-noir-600/50 text-white placeholder:text-gray-400 focus:border-beige-100/50"
                      min={new Date().toISOString().slice(0, 16)}
                      data-testid="input-pickup-date"
                    />
                    <p className="text-sm text-gray-400 mt-1">We'll contact you to confirm availability</p>
                  </motion.div>
                  
                  <motion.div className="input-focus" whileHover={{ y: -2 }}>
                    <Label htmlFor="notes" className="text-beige-100 mb-2 block">Special Instructions (Optional)</Label>
                    <Textarea
                      id="notes"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="glass-effect border-noir-600/50 text-white placeholder:text-gray-400 focus:border-beige-100/50 min-h-[100px]"
                      placeholder="Any special requests or instructions for your order..."
                      data-testid="input-notes"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                className="glass-effect p-6 rounded-xl border border-noir-700/50 sticky top-24"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                data-testid="order-summary"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Order Summary</h3>
                
                {/* Items */}
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center py-2 border-b border-noir-700/30" data-testid={`summary-item-${item.id}`}>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium truncate">{item.name}</p>
                        <p className="text-gray-400 text-sm">Qty: {item.quantity} × ${item.price}</p>
                      </div>
                      <span className="text-beige-100 font-bold">
                        ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Totals */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal:</span>
                    <span data-testid="summary-subtotal">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Tax (8.25%):</span>
                    <span data-testid="summary-tax">${tax.toFixed(2)}</span>
                  </div>
                  {finalDonation > 0 && (
                    <div className="flex justify-between text-beige-100">
                      <span>Veteran Support:</span>
                      <span data-testid="summary-donation">${finalDonation.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="border-t border-noir-700/50 pt-3">
                    <div className="flex justify-between text-white font-bold text-xl">
                      <span>Total:</span>
                      <span data-testid="summary-total">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Veteran Donation Section */}
                <motion.div
                  className="mb-6 p-4 bg-gradient-to-r from-beige-100/5 to-beige-100/10 rounded-lg border border-beige-100/20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-red-500" />
                      <h4 className="text-white font-semibold">Support Our Veterans</h4>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            type="button"
                            className="p-1 hover:bg-white/10 rounded-full transition-colors"
                            onClick={() => setShowDonationInfo(!showDonationInfo)}
                          >
                            <Info className="w-4 h-4 text-beige-100" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs glass-effect border-beige-100/20">
                          <p className="text-sm">
                            100% of your donation goes directly to local veteran support organizations, 
                            helping provide essential services, mental health resources, and job training 
                            for those who served our country.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-300 mb-3">
                    Add an optional donation to support local veteran organizations
                  </p>
                  
                  <div className="grid grid-cols-4 gap-2 mb-3">
                    {[5, 10, 25, 50].map(amount => (
                      <motion.button
                        key={amount}
                        type="button"
                        onClick={() => {
                          setVeteranDonation(amount);
                          setCustomDonation("");
                        }}
                        className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                          veteranDonation === amount && !customDonation
                            ? 'bg-beige-100 text-noir-900'
                            : 'glass-effect border border-noir-600/50 text-white hover:border-beige-100/50'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        data-testid={`button-donation-${amount}`}
                      >
                        ${amount}
                      </motion.button>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      placeholder="Custom amount"
                      value={customDonation}
                      onChange={(e) => {
                        setCustomDonation(e.target.value);
                        setVeteranDonation(0);
                      }}
                      className="glass-effect border-noir-600/50 text-white placeholder:text-gray-400 focus:border-beige-100/50"
                      min="0"
                      step="0.01"
                      data-testid="input-custom-donation"
                    />
                    {(veteranDonation > 0 || customDonation) && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setVeteranDonation(0);
                          setCustomDonation("");
                        }}
                        className="glass-effect border-noir-600/50 text-white hover:bg-noir-700/50"
                        data-testid="button-clear-donation"
                      >
                        Clear
                      </Button>
                    )}
                  </div>
                </motion.div>

                {/* Place Order Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={createOrderMutation.isPending}
                    className="w-full bg-beige-100 hover:bg-beige-200 text-noir-900 font-bold py-4 text-lg magnetic-btn ripple"
                    data-testid="button-place-order"
                  >
                    {createOrderMutation.isPending ? "Placing Order..." : "Place Order"}
                  </Button>
                </motion.div>

                {/* Store Information */}
                <motion.div
                  className="mt-6 p-4 bg-beige-100/10 rounded-lg border border-beige-100/20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <p className="text-sm text-beige-100 text-center">
                    <strong>Store Pickup Only</strong><br />
                    KGS CREW Inc.<br />
                    10 Vale Road<br />
                    Newville, PA 17241<br />
                    (717) 249-0000
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          {/* Security Features Footer */}
          <motion.div 
            className="mt-8 sm:mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="glass-effect border border-noir-700/50 rounded-xl p-4 sm:p-6">
              <div className="flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-green-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Security & Compliance</h3>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {securityFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                  >
                    <feature.icon className="w-8 h-8 text-gray-400 mb-2" />
                    <span className="text-xs sm:text-sm text-gray-300">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-noir-700/50">
                <div className="flex items-center justify-center text-xs sm:text-sm text-gray-400">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  <p>All firearm purchases require valid ID and background check approval</p>
                </div>
              </div>
            </div>
          </motion.div>
        </form>
      </div>
    </div>
  );
}