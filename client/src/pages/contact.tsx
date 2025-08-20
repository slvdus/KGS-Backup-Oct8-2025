import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Youtube, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    <div className="min-h-screen pt-20 bg-noir-900" data-testid="page-contact">
      {/* Enhanced Hero Section */}
      <section className="hero-bg py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Enhanced floating background elements with micro-interactions */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-beige-100/5 rounded-full blur-3xl"
            animate={{ 
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-beige-100/3 rounded-full blur-3xl"
            animate={{ 
              x: [0, -40, 0],
              y: [0, 25, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            data-testid="text-contact-title"
          >
            Book Your <span className="gradient-text pulse-glow">VIP Appointment</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-testid="text-contact-subtitle"
          >
            No crowds. No waiting. Just you and the best prices in Pennsylvania.
          </motion.p>
          <motion.p 
            className="text-lg text-beige-100 mt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            98% of our customers recommend us. Find out why.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Enhanced Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-effect p-8 rounded-xl border border-noir-700/50"
            >
              <h2 className="text-3xl font-bold gradient-text mb-8" data-testid="text-contact-info-title">
                Let's Connect
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-noir-700/30 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    data-testid={`contact-info-${index}`}
                  >
                    <div className="w-12 h-12 bg-beige-100 hover:bg-beige-200 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <info.icon className="w-6 h-6 text-noir-900" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1" data-testid={`text-contact-info-title-${index}`}>
                        {info.title}
                      </h3>
                      <div className="text-gray-400" data-testid={`text-contact-info-content-${index}`}>
                        {info.content.map((line, lineIndex) => (
                          <p key={lineIndex} className={lineIndex === 0 && info.title === "Call or Text" ? "text-beige-100 font-semibold text-lg" : ""}>
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-noir-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
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
              </div>

              {/* Quick Action Buttons */}
              <div className="mt-8 space-y-3">
                <a href="tel:717-249-0000" className="block">
                  <Button className="w-full bg-beige-100 hover:bg-beige-200 text-noir-900 font-bold py-4">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: 717-249-0000
                  </Button>
                </a>
                <a href="https://kgscrewinc.com" target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="outline" className="w-full glass-effect border-beige-100/30 text-beige-100 hover:bg-beige-100/10">
                    Visit Our Website
                  </Button>
                </a>
              </div>
            </motion.div>
            
            {/* Enhanced Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-effect p-8 rounded-xl border border-noir-700/50"
            >
              <h2 className="text-3xl font-bold gradient-text mb-8" data-testid="text-contact-form-title">
                Request Your Appointment
              </h2>
              
              <form className="space-y-6" onSubmit={handleSubmit} data-testid="form-contact">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="group"
                    whileHover={{ y: -2 }}
                  >
                    <motion.label 
                      className="block text-sm font-medium text-beige-100 mb-2"
                      whileHover={{ color: "#f5f3f0" }}
                      transition={{ duration: 0.2 }}
                    >
                      First Name
                    </motion.label>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="relative"
                    >
                      <Input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="glass-effect border-noir-600/50 text-white placeholder:text-gray-400 focus:border-beige-100/50 transition-all duration-300 hover:border-beige-100/30"
                        data-testid="input-first-name"
                      />
                      {formData.firstName && (
                        <motion.div
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-green-400 rounded-full"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </motion.div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="group"
                    whileHover={{ y: -2 }}
                  >
                    <motion.label 
                      className="block text-sm font-medium text-beige-100 mb-2"
                      whileHover={{ color: "#f5f3f0" }}
                      transition={{ duration: 0.2 }}
                    >
                      Last Name
                    </motion.label>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="relative"
                    >
                      <Input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="glass-effect border-noir-600/50 text-white placeholder:text-gray-400 focus:border-beige-100/50 transition-all duration-300 hover:border-beige-100/30"
                        data-testid="input-last-name"
                      />
                      {formData.lastName && (
                        <motion.div
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-green-400 rounded-full"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </motion.div>
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <label className="block text-sm font-medium text-beige-100 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="glass-effect border-noir-600/50 text-white placeholder:text-gray-400 focus:border-beige-100/50 transition-colors"
                    data-testid="input-email"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <label className="block text-sm font-medium text-beige-100 mb-2">
                    Phone (Required for Appointment)
                  </label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="glass-effect border-noir-600/50 text-white placeholder:text-gray-400 focus:border-beige-100/50 transition-colors"
                    placeholder="We'll text to confirm your appointment"
                    data-testid="input-phone"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <label className="block text-sm font-medium text-beige-100 mb-2">
                    What Can We Help You With?
                  </label>
                  <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                    <SelectTrigger className="glass-effect border-noir-600/50 text-white focus:border-beige-100/50 transition-colors" data-testid="select-subject">
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
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <label className="block text-sm font-medium text-beige-100 mb-2">
                    Tell Us More
                  </label>
                  <Textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="glass-effect border-noir-600/50 text-white placeholder:text-gray-400 focus:border-beige-100/50 resize-none transition-colors"
                    placeholder="What firearm are you looking for? Any special requests?"
                    data-testid="textarea-message"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-beige-100 hover:bg-beige-200 text-noir-900 w-full font-bold py-4 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    data-testid="button-send-message"
                  >
                    <span className="relative z-10">
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-4 h-4 border-2 border-noir-900 border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </div>
                      ) : "Request Appointment"}
                    </span>
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}