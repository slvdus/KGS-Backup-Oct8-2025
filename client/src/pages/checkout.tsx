import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { ArrowLeft, Calendar, User, Phone, Mail, MapPin, CreditCard, Shield, Heart, Info } from "lucide-react";
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

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-noir-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-6">Your cart is empty</h1>
            <p className="text-gray-400 mb-8">Add some items to proceed with checkout.</p>
            <Button
              className="bg-beige-100 hover:bg-beige-200 text-noir-900 font-bold"
              data-testid="button-browse-catalog"
            >
              <Link href="/catalog">Browse Catalog</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

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
          <Link href="/cart">
            <motion.div
              className="inline-flex items-center text-beige-100 hover:text-white mb-4 group"
              whileHover={{ x: -5 }}
              transition={{ duration: 0.2 }}
              data-testid="link-back-to-cart"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:transform group-hover:-translate-x-1 transition-transform" />
              Back to Cart
            </motion.div>
          </Link>
          <h1 className="responsive-text-4xl md:responsive-text-5xl font-bold mb-4" data-testid="page-title">
            Checkout
          </h1>
          <p className="text-gray-400 text-lg">
            Complete your order for in-store pickup
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} data-testid="form-checkout">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Customer Information */}
            <div className="lg:col-span-2 space-y-8">
              {/* Personal Information */}
              <motion.div
                className="glass-effect p-4 sm:p-6 rounded-xl border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center mb-6">
                  <User className="w-6 h-6 text-beige-100 mr-3" />
                  <h2 className="text-2xl font-bold text-white">Personal Information</h2>
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
                    Nature's Arsenal<br />
                    123 Main Street<br />
                    Anytown, TX 12345<br />
                    (555) 123-4567
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}