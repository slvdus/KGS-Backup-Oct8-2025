import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
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
      title: "Address",
      content: ["1234 Tactical Drive", "Gunsmith Valley, TX 75001"]
    },
    {
      icon: Phone,
      title: "Phone",
      content: ["(555) 123-4567"]
    },
    {
      icon: Mail,
      title: "Email", 
      content: ["info@naturesarsenal.com"]
    },
    {
      icon: Clock,
      title: "Hours",
      content: [
        "Monday - Friday: 9:00 AM - 7:00 PM",
        "Saturday: 9:00 AM - 5:00 PM", 
        "Sunday: 12:00 PM - 4:00 PM"
      ]
    }
  ];

  const subjectOptions = [
    "General Inquiry",
    "Product Question", 
    "Service Request",
    "Custom Order"
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
        description: "Thank you for your message. We'll get back to you soon.",
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
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20" data-testid="page-contact">
      {/* Hero Section */}
      <section className="bg-noir-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="text-contact-title">
              Contact Us
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto" data-testid="text-contact-subtitle">
              Get in touch with our expert team for personalized service and guidance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-noir-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-white mb-8" data-testid="text-contact-info-title">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    data-testid={`contact-info-${index}`}
                  >
                    <div className="w-12 h-12 bg-beige-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-noir-900" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1" data-testid={`text-contact-info-title-${index}`}>
                        {info.title}
                      </h3>
                      <div className="text-gray-400" data-testid={`text-contact-info-content-${index}`}>
                        {info.content.map((line, lineIndex) => (
                          <p key={lineIndex}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-8" data-testid="text-contact-form-title">
                Send us a Message
              </h2>
              
              <form className="space-y-6" onSubmit={handleSubmit} data-testid="form-contact">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <Input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="bg-noir-700 border-noir-600 text-white focus:border-beige-100"
                      data-testid="input-first-name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <Input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="bg-noir-700 border-noir-600 text-white focus:border-beige-100"
                      data-testid="input-last-name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-noir-700 border-noir-600 text-white focus:border-beige-100"
                    data-testid="input-email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="bg-noir-700 border-noir-600 text-white focus:border-beige-100"
                    data-testid="input-phone"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                    <SelectTrigger className="bg-noir-700 border-noir-600 text-white focus:border-beige-100" data-testid="select-subject">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent className="bg-noir-700 border-noir-600">
                      {subjectOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="bg-noir-700 border-noir-600 text-white focus:border-beige-100 resize-none"
                    data-testid="textarea-message"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="cta-button w-full bg-beige-100 text-noir-900 hover:bg-beige-200 font-semibold py-3"
                  data-testid="button-send-message"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
