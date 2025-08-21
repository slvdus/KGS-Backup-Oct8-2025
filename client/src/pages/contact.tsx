import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Youtube, Facebook, MessageSquare, Calendar, Shield, Zap, Star, ChevronRight, Send, CheckCircle, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Link } from "wouter";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<'form' | 'phone' | 'visit'>('form');
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit By Appointment",
      content: ["10 Vale Road", "Newville, PA 17241"]
    },
    {
      icon: Phone,
      title: "Call or Text",
      content: ["717-249-0000", "Schedule your appointment today!"]
    },
    {
      icon: Mail,
      title: "Email", 
      content: ["KGSCrewInc@gmail.com"]
    },
    {
      icon: Clock,
      title: "Hours",
      content: [
        "By Appointment Only",
        "Call or Text to Schedule", 
        "We work around YOUR schedule"
      ]
    }
  ];

  const subjectOptions = [
    "Schedule Appointment",
    "Product Availability", 
    "FFL Transfer",
    "Special Order",
    "General Question"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiRequest("POST", "/api/contact", formData);
      
      toast({
        title: "Message Sent!",
        description: "We'll call you within 24 hours to schedule your appointment.",
      });
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please call us directly at 717-249-0000.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-noir-900" data-testid="page-contact">
      {/* Modern Hero Section with Dynamic Background */}
      <section className="relative pt-16 sm:pt-20 pb-8 sm:pb-12 md:pb-16 overflow-hidden">
        {/* Multi-layer Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-noir-900 via-noir-800/50 to-noir-900" />
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                "radial-gradient(circle at 10% 20%, rgba(245, 243, 240, 0.15) 0%, transparent 40%)",
                "radial-gradient(circle at 90% 80%, rgba(245, 243, 240, 0.15) 0%, transparent 40%)",
                "radial-gradient(circle at 10% 20%, rgba(245, 243, 240, 0.15) 0%, transparent 40%)",
              ],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Mesh Gradient Overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-t from-beige-100/10 via-transparent to-transparent" />
          </div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-10 left-10 w-96 h-96 bg-beige-100/10 rounded-full blur-3xl"
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-10 right-10 w-72 h-72 bg-beige-100/8 rounded-full blur-3xl"
            animate={{ 
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 0.8, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Trust Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-beige-100/10 to-beige-100/5 border border-beige-100/20 rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-4 h-4 text-beige-100 fill-beige-100" />
              <span className="text-sm text-beige-100 font-medium">Family-Owned Since 2020</span>
              <Star className="w-4 h-4 text-beige-100 fill-beige-100" />
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Choose your preferred way to connect. We're here to provide personalized service that fits your schedule.
            </p>

            {/* Quick Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {[
                { value: "98%", label: "Satisfaction" },
                { value: "24hr", label: "Response Time" },
                { value: "94+", label: "5-Star Reviews" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass-effect p-4 rounded-lg border border-noir-700/50"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -2, scale: 1.05 }}
                >
                  <div className="text-xl sm:text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Method Cards */}
      <section className="py-8 sm:py-12 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {[
              {
                id: 'form',
                icon: MessageSquare,
                title: 'Send Message',
                description: 'Fill out our quick form',
                color: 'from-blue-500/20 to-cyan-500/20'
              },
              {
                id: 'phone',
                icon: Phone,
                title: 'Call Us',
                description: '717-249-0000',
                color: 'from-green-500/20 to-emerald-500/20'
              },
              {
                id: 'visit',
                icon: MapPin,
                title: 'Visit Us',
                description: 'By appointment only',
                color: 'from-purple-500/20 to-pink-500/20'
              }
            ].map((method, index) => (
              <motion.button
                key={method.id}
                onClick={() => setSelectedMethod(method.id as any)}
                className={`
                  relative p-6 rounded-xl border transition-all duration-300 text-left group
                  ${selectedMethod === method.id 
                    ? 'glass-effect border-beige-100/30 scale-105' 
                    : 'glass-effect border-noir-700/50 hover:border-beige-100/20'}
                `}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-10 group-hover:opacity-20 transition-opacity rounded-xl`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`
                    w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300
                    ${selectedMethod === method.id 
                      ? 'bg-beige-100 text-noir-900' 
                      : 'bg-beige-100/10 text-beige-100 group-hover:bg-beige-100/20'}
                  `}>
                    <method.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{method.title}</h3>
                  <p className="text-sm text-gray-400">{method.description}</p>
                </div>

                {/* Selection Indicator */}
                {selectedMethod === method.id && (
                  <motion.div
                    className="absolute top-3 right-3 w-6 h-6 bg-beige-100 rounded-full flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CheckCircle className="w-4 h-4 text-noir-900" />
                  </motion.div>
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Content Based on Selected Method */}
          <AnimatePresence mode="wait">
            {selectedMethod === 'form' && (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                {/* Contact Form - Takes up 2 columns on large screens */}
                <div className="lg:col-span-2">
                  <motion.div className="glass-effect p-6 sm:p-8 rounded-xl border border-noir-700/50">
                    <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-6" data-testid="text-contact-form-title">
                      Send Us a Message
                    </h2>
                    
                    <form className="space-y-6" onSubmit={handleSubmit} data-testid="form-contact">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-beige-100 mb-2">
                            First Name
                          </label>
                          <Input
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            className="glass-effect border-noir-600/50 text-white placeholder:text-gray-400 focus:border-beige-100/50"
                            data-testid="input-first-name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-beige-100 mb-2">
                            Last Name
                          </label>
                          <Input
                            type="text"
                            required
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            className="glass-effect border-noir-600/50 text-white placeholder:text-gray-400 focus:border-beige-100/50"
                            data-testid="input-last-name"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-beige-100 mb-2">
                          Email
                        </label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="glass-effect border-noir-600/50 text-white placeholder:text-gray-400 focus:border-beige-100/50"
                          placeholder="your@email.com"
                          data-testid="input-email"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-beige-100 mb-2">
                          Phone
                        </label>
                        <Input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="glass-effect border-noir-600/50 text-white placeholder:text-gray-400 focus:border-beige-100/50"
                          placeholder="We'll text to confirm"
                          data-testid="input-phone"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-beige-100 mb-2">
                          Subject
                        </label>
                        <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                          <SelectTrigger className="glass-effect border-noir-600/50 text-white focus:border-beige-100/50" data-testid="select-subject">
                            <SelectValue placeholder="Select a topic" />
                          </SelectTrigger>
                          <SelectContent className="glass-effect border-noir-600/50 bg-noir-800/95 backdrop-blur-xl">
                            {subjectOptions.map((option) => (
                              <SelectItem key={option} value={option} className="text-white hover:bg-beige-100/10">
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-beige-100 mb-2">
                          Message
                        </label>
                        <Textarea
                          rows={5}
                          required
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          className="glass-effect border-noir-600/50 text-white placeholder:text-gray-400 focus:border-beige-100/50 resize-none"
                          placeholder="Tell us what you're looking for..."
                          data-testid="textarea-message"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="bg-beige-100 hover:bg-beige-200 text-noir-900 w-full font-bold py-4"
                        data-testid="button-send-message"
                      >
                        {isSubmitting ? (
                          <>Sending...</>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </form>
                  </motion.div>
                </div>

                {/* Quick Info Sidebar */}
                <div className="space-y-6">
                  <motion.div 
                    className="glass-effect p-6 rounded-xl border border-noir-700/50"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Response</h3>
                    <p className="text-sm text-gray-400 mb-4">
                      We'll call you within 24 hours to schedule your appointment.
                    </p>
                    <div className="flex items-center gap-2 text-beige-100">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm font-medium">717-249-0000</span>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="glass-effect p-6 rounded-xl border border-noir-700/50"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                    <div className="flex gap-3">
                      <a 
                        href="https://www.facebook.com/KeystoneGunSales" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 rounded-full glass-effect border border-noir-700/50 text-gray-400 hover:text-beige-100 hover:border-beige-100/30 transition-all duration-300"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a 
                        href="https://youtube.com/@BrentKGS" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 rounded-full glass-effect border border-noir-700/50 text-gray-400 hover:text-beige-100 hover:border-beige-100/30 transition-all duration-300"
                      >
                        <Youtube className="w-5 h-5" />
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {selectedMethod === 'phone' && (
              <motion.div
                key="phone"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-2xl mx-auto"
              >
                <motion.div className="glass-effect p-8 sm:p-12 rounded-xl border border-noir-700/50 text-center">
                  <div className="w-20 h-20 bg-beige-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Phone className="w-10 h-10 text-noir-900" />
                  </div>
                  <h2 className="text-3xl font-bold gradient-text mb-4">Call Us Now</h2>
                  <p className="text-gray-400 mb-8">
                    Speak directly with our team for immediate assistance
                  </p>
                  <a href="tel:717-249-0000" className="inline-block">
                    <Button className="bg-beige-100 hover:bg-beige-200 text-noir-900 font-bold px-12 py-6 text-xl">
                      <Phone className="w-6 h-6 mr-3" />
                      717-249-0000
                    </Button>
                  </a>
                  <div className="mt-8 pt-8 border-t border-noir-700/50">
                    <p className="text-sm text-gray-400">
                      Available for calls and texts • We'll work around your schedule
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {selectedMethod === 'visit' && (
              <motion.div
                key="visit"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                <motion.div className="glass-effect p-6 sm:p-8 rounded-xl border border-noir-700/50">
                  <h2 className="text-2xl font-bold gradient-text mb-6">Visit Our Location</h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={info.title} className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-beige-100/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-beige-100" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">
                            {info.title}
                          </h3>
                          <div className="text-gray-400">
                            {info.content.map((line, lineIndex) => (
                              <p key={lineIndex} className={lineIndex === 0 && info.title === "Call or Text" ? "text-beige-100 font-semibold text-lg" : ""}>
                                {line}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div 
                  className="glass-effect p-6 sm:p-8 rounded-xl border border-noir-700/50"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-xl font-bold text-white mb-4">Why Visit Us?</h3>
                  <div className="space-y-3">
                    {[
                      "No crowds - just you and personalized service",
                      "Browse our full inventory in a relaxed setting",
                      "Try before you buy with our demo options",
                      "Expert advice from experienced professionals",
                      "Best prices in Pennsylvania - guaranteed"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <ChevronRight className="w-5 h-5 text-beige-100 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-300 text-sm">{benefit}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-noir-700/50">
                    <Link href="/appointment">
                      <Button className="w-full bg-beige-100 hover:bg-beige-200 text-noir-900 font-bold">
                        <Calendar className="w-5 h-5 mr-2" />
                        Book Appointment
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}