import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, Phone, Mail, ArrowRight, Check, Star, Shield, Zap, MapPin, ChevronRight, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Link } from "wouter";
import SEOHead, { pageSEO } from "@/components/seo-head";

export default function Appointment() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [activeSlide, setActiveSlide] = useState(0);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    appointmentType: "",
    message: "",
    preferredDate: "",
    preferredTime: ""
  });

  const appointmentTypes = [
    { 
      id: "purchase", 
      title: "Firearm Purchase", 
      description: "Browse our inventory and find your perfect firearm",
      icon: "🎯"
    },
    { 
      id: "transfer", 
      title: "FFL Transfer", 
      description: "Transfer a firearm from another dealer",
      icon: "📦"
    },
    { 
      id: "special", 
      title: "Special Order", 
      description: "Order a specific firearm not in our current inventory",
      icon: "⭐"
    },
    { 
      id: "consultation", 
      title: "Consultation", 
      description: "Get expert advice on your first firearm purchase",
      icon: "💬"
    }
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"
  ];

  // Generate next 14 days for date selection
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        value: date.toISOString().split('T')[0],
        display: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
      });
    }
    return dates;
  };

  const availableDates = generateDates();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const appointmentData = {
      ...formData,
      preferredDate: selectedDate,
      preferredTime: selectedTime
    };

    try {
      await apiRequest("POST", "/api/appointments", appointmentData);
      
      toast({
        title: "Appointment Request Sent!",
        description: "We'll call you within 24 hours to confirm your appointment.",
      });
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        appointmentType: "",
        message: "",
        preferredDate: "",
        preferredTime: ""
      });
      setSelectedDate("");
      setSelectedTime("");
      setCurrentStep(1);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit appointment. Please call us at 717-249-0000.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-noir-900" data-testid="page-appointment">
      <SEOHead {...pageSEO.appointment} />
      {/* Enhanced Hero Section with Animated Background */}
      <section className="relative pt-16 sm:pt-20 pb-8 sm:pb-12 md:pb-16 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-noir-900 via-noir-800 to-noir-900" />
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(245, 243, 240, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(245, 243, 240, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(245, 243, 240, 0.1) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-beige-100/5 rounded-full blur-3xl"
            animate={{ 
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-beige-100/3 rounded-full blur-3xl"
            animate={{ 
              x: [0, -30, 0],
              y: [0, 40, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-beige-100/10 to-beige-100/5 border border-beige-100/20 rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Star className="w-4 h-4 text-beige-100" />
              <span className="text-sm text-beige-100">98% Customer Satisfaction</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Book Your <span className="gradient-text">VIP Appointment</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Experience Pennsylvania's best prices with personalized, one-on-one service. 
              No crowds, no pressure, just you and the perfect firearm.
            </p>

            {/* Benefits - Mobile Slider / Desktop Grid */}
            <div className="mb-6">
              {/* Mobile Slider */}
              <div className="sm:hidden relative">
                <div className="overflow-hidden">
                  <motion.div 
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                    drag="x"
                    dragConstraints={{ left: -200, right: 200 }}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = offset.x > 50 ? -1 : offset.x < -50 ? 1 : 0;
                      const newSlide = Math.max(0, Math.min(2, activeSlide + swipe));
                      setActiveSlide(newSlide);
                    }}
                  >
                    {[
                      { icon: Shield, text: "Private Consultation", desc: "One-on-one personalized service" },
                      { icon: Clock, text: "No Wait Times", desc: "Your appointment, your schedule" },
                      { icon: Zap, text: "Best Price Guarantee", desc: "Unbeatable prices in PA" }
                    ].map((benefit, index) => (
                      <motion.div
                        key={benefit.text}
                        className="w-full flex-shrink-0 px-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      >
                        <div className="glass-effect p-6 rounded-xl border border-beige-100/20 text-center">
                          <motion.div
                            className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-beige-100/20 to-beige-100/10 rounded-xl flex items-center justify-center"
                            whileHover={{ rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <benefit.icon className="w-7 h-7 text-beige-100" />
                          </motion.div>
                          <h3 className="text-lg font-bold text-white mb-2">{benefit.text}</h3>
                          <p className="text-sm text-gray-400">{benefit.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
                
                {/* Mobile Navigation Dots */}
                <div className="flex justify-center gap-2 mt-4">
                  {[0, 1, 2].map((index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      className={`h-2 transition-all duration-300 rounded-full ${
                        activeSlide === index 
                          ? 'w-8 bg-beige-100' 
                          : 'w-2 bg-noir-700'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Desktop Grid */}
              <div className="hidden sm:grid grid-cols-3 gap-4 max-w-3xl mx-auto">
                {[
                  { icon: Shield, text: "Private Consultation" },
                  { icon: Clock, text: "No Wait Times" },
                  { icon: Zap, text: "Best Price Guarantee" }
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.text}
                    className="glass-effect p-4 rounded-lg border border-noir-700/50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <benefit.icon className="w-5 h-5 text-beige-100 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">{benefit.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Customer Satisfaction Badge */}
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", delay: 0.6 }}
            >
              <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 px-4 py-2 rounded-full backdrop-blur-md">
                <Trophy className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-semibold">
                  98% Customer Satisfaction • 94+ Reviews
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Multi-Step Booking Form */}
      <section className="py-8 sm:py-12 md:py-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Indicator */}
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center justify-between max-w-md mx-auto">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <motion.div
                    className={`
                      w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-sm sm:text-base
                      ${currentStep >= step 
                        ? 'bg-beige-100 text-noir-900' 
                        : 'glass-effect border border-noir-700/50 text-gray-400'}
                    `}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: step * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {currentStep > step ? <Check className="w-5 h-5" /> : step}
                  </motion.div>
                  {step < 3 && (
                    <div className={`
                      w-16 sm:w-24 h-0.5 mx-2
                      ${currentStep > step ? 'bg-beige-100' : 'bg-noir-700/50'}
                    `} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between max-w-md mx-auto mt-3">
              <span className={`text-xs sm:text-sm ${currentStep >= 1 ? 'text-beige-100' : 'text-gray-400'}`}>
                Service Type
              </span>
              <span className={`text-xs sm:text-sm ${currentStep >= 2 ? 'text-beige-100' : 'text-gray-400'}`}>
                Date & Time
              </span>
              <span className={`text-xs sm:text-sm ${currentStep >= 3 ? 'text-beige-100' : 'text-gray-400'}`}>
                Your Details
              </span>
            </div>
          </div>

          {/* Form Steps */}
          <motion.div 
            className="glass-effect p-6 sm:p-8 md:p-10 rounded-2xl border border-noir-700/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              {/* Step 1: Service Type */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-6">
                    What brings you to KGS CREW?
                  </h2>
                  
                  <RadioGroup 
                    value={formData.appointmentType} 
                    onValueChange={(value) => handleInputChange('appointmentType', value)}
                    className="space-y-4"
                  >
                    {appointmentTypes.map((type, index) => (
                      <motion.div
                        key={type.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Label
                          htmlFor={type.id}
                          className="flex items-start p-4 sm:p-5 rounded-xl border border-noir-700/50 cursor-pointer hover:border-beige-100/30 transition-all duration-300 group"
                        >
                          <RadioGroupItem value={type.id} id={type.id} className="mt-1" />
                          <div className="ml-4 flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-2xl">{type.icon}</span>
                              <p className="font-semibold text-white group-hover:text-beige-100 transition-colors">
                                {type.title}
                              </p>
                            </div>
                            <p className="text-sm text-gray-400">{type.description}</p>
                          </div>
                        </Label>
                      </motion.div>
                    ))}
                  </RadioGroup>

                  <motion.div 
                    className="mt-8 flex justify-end"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button
                      onClick={handleNextStep}
                      disabled={!formData.appointmentType}
                      className="bg-beige-100 hover:bg-beige-200 text-noir-900 font-bold px-6 py-3"
                    >
                      Continue
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </motion.div>
                </motion.div>
              )}

              {/* Step 2: Date & Time */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-6">
                    When would you like to visit?
                  </h2>

                  {/* Date Selection */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-beige-100" />
                      Select a Date
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {availableDates.slice(0, 12).map((date, index) => (
                        <motion.button
                          key={date.value}
                          type="button"
                          onClick={() => setSelectedDate(date.value)}
                          className={`
                            p-3 rounded-lg border transition-all duration-300
                            ${selectedDate === date.value 
                              ? 'bg-beige-100 text-noir-900 border-beige-100' 
                              : 'glass-effect border-noir-700/50 text-gray-300 hover:border-beige-100/30'}
                          `}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.02 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <p className="text-sm font-medium">{date.display}</p>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Time Selection */}
                  {selectedDate && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-beige-100" />
                        Select a Time
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                        {timeSlots.map((time, index) => (
                          <motion.button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`
                              p-3 rounded-lg border transition-all duration-300
                              ${selectedTime === time 
                                ? 'bg-beige-100 text-noir-900 border-beige-100' 
                                : 'glass-effect border-noir-700/50 text-gray-300 hover:border-beige-100/30'}
                            `}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.02 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {time}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  <div className="mt-8 flex justify-between">
                    <Button
                      onClick={handlePrevStep}
                      variant="outline"
                      className="border-noir-700/50 text-gray-300 hover:text-white hover:border-beige-100/30"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handleNextStep}
                      disabled={!selectedDate || !selectedTime}
                      className="bg-beige-100 hover:bg-beige-200 text-noir-900 font-bold px-6 py-3"
                    >
                      Continue
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Contact Information */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-6">
                    Tell us about yourself
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <Label className="block text-sm font-medium text-beige-100 mb-2">
                          First Name
                        </Label>
                        <Input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="glass-effect border-noir-600/50 text-white placeholder:text-gray-400 focus:border-beige-100/50"
                          data-testid="input-first-name"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        <Label className="block text-sm font-medium text-beige-100 mb-2">
                          Last Name
                        </Label>
                        <Input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className="glass-effect border-noir-600/50 text-white placeholder:text-gray-400 focus:border-beige-100/50"
                          data-testid="input-last-name"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <Label className="block text-sm font-medium text-beige-100 mb-2">
                        Email
                      </Label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="glass-effect border-noir-600/50 text-white placeholder:text-gray-400 focus:border-beige-100/50"
                        placeholder="your@email.com"
                        data-testid="input-email"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      <Label className="block text-sm font-medium text-beige-100 mb-2">
                        Phone Number
                      </Label>
                      <Input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="glass-effect border-noir-600/50 text-white placeholder:text-gray-400 focus:border-beige-100/50"
                        placeholder="We'll text to confirm your appointment"
                        data-testid="input-phone"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                      <Label className="block text-sm font-medium text-beige-100 mb-2">
                        Additional Information (Optional)
                      </Label>
                      <Textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="glass-effect border-noir-600/50 text-white placeholder:text-gray-400 focus:border-beige-100/50 resize-none"
                        placeholder="Tell us about what you're looking for or any special requests..."
                        data-testid="textarea-message"
                      />
                    </motion.div>

                    {/* Appointment Summary */}
                    <motion.div
                      className="glass-effect p-4 rounded-lg border border-beige-100/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                    >
                      <h3 className="font-semibold text-beige-100 mb-2">Appointment Summary</h3>
                      <div className="space-y-1 text-sm text-gray-300">
                        <p>Service: {appointmentTypes.find(t => t.id === formData.appointmentType)?.title}</p>
                        <p>Date: {availableDates.find(d => d.value === selectedDate)?.display}</p>
                        <p>Time: {selectedTime}</p>
                      </div>
                    </motion.div>

                    <div className="flex justify-between">
                      <Button
                        type="button"
                        onClick={handlePrevStep}
                        variant="outline"
                        className="border-noir-700/50 text-gray-300 hover:text-white hover:border-beige-100/30"
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-beige-100 hover:bg-beige-200 text-noir-900 font-bold px-6 py-3"
                        data-testid="button-submit-appointment"
                      >
                        {isSubmitting ? (
                          <>Submitting...</>
                        ) : (
                          <>
                            Book Appointment
                            <Check className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 sm:py-16 border-t border-noir-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Location Info */}
            <motion.div
              className="glass-effect p-6 sm:p-8 rounded-xl border border-noir-700/50"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-6">Visit Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-beige-100/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-beige-100" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-gray-400">10 Vale Road</p>
                    <p className="text-gray-400">Newville, PA 17241</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-beige-100/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-beige-100" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Call or Text</p>
                    <p className="text-beige-100 text-lg">717-249-0000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-beige-100/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-beige-100" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-gray-400">KGSCrewInc@gmail.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              className="glass-effect p-6 sm:p-8 rounded-xl border border-noir-700/50"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-6">Why Book With Us?</h3>
              <div className="space-y-4">
                {[
                  "No crowds or waiting - your time is valuable",
                  "Personalized service from experienced professionals",
                  "Best prices in Pennsylvania - guaranteed",
                  "Family-owned business treating you like family",
                  "Flexible scheduling that works around YOUR schedule"
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ChevronRight className="w-5 h-5 text-beige-100 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 mb-6">Need help right now?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:717-249-0000">
                <Button className="bg-beige-100 hover:bg-beige-200 text-noir-900 font-bold px-8 py-3">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 717-249-0000
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" className="border-beige-100/30 text-beige-100 hover:bg-beige-100/10 px-8 py-3">
                  Send a Message
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}