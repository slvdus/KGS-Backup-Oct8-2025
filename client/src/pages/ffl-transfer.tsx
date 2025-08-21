import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Clock, 
  DollarSign, 
  CheckCircle,
  FileText,
  Package,
  Truck,
  Lock,
  Phone,
  Mail,
  MapPin,
  AlertCircle,
  ChevronRight,
  Star,
  Award,
  Users,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SEOHead, { pageSEO } from "@/components/seo-head";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function FFLTransfer() {
  const processSteps = [
    {
      icon: Package,
      title: "Purchase Online",
      description: "Buy your firearm from any online retailer",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Truck,
      title: "Ship to KGS",
      description: "Have it shipped to our FFL location",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FileText,
      title: "Background Check",
      description: "Complete NICS background check and paperwork",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: CheckCircle,
      title: "Pick Up",
      description: "Collect your firearm after approval",
      color: "from-amber-500 to-orange-500"
    }
  ];

  const includedServices = [
    "NICS background check processing",
    "ATF Form 4473 completion assistance",
    "Secure storage until pickup",
    "Professional inspection upon arrival",
    "Text/email notifications",
    "Flexible appointment scheduling"
  ];

  const faqs = [
    {
      question: "How long does the transfer process take?",
      answer: "Most transfers are completed same-day once your firearm arrives. Background checks typically take 15-30 minutes for approval."
    },
    {
      question: "What do I need to bring?",
      answer: "Valid PA driver's license or ID, and if your address has changed, proof of current address (utility bill, lease, etc.)."
    },
    {
      question: "Can you receive from any seller?",
      answer: "Yes! We accept transfers from all licensed dealers and manufacturers. Private party transfers must comply with PA law."
    },
    {
      question: "Do you hold packages?",
      answer: "We'll securely store your firearm for up to 30 days at no additional charge. After 30 days, a $1/day storage fee applies."
    }
  ];

  return (
    <>
      <SEOHead {...pageSEO.fflTransfer} />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-noir-900 via-noir-800 to-noir-900">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"
            animate={{
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 px-4 py-2 text-sm font-semibold bg-green-500/20 text-green-400 border-green-500/30">
              <ShieldCheck className="w-4 h-4 mr-2" />
              Licensed FFL Dealer
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">FFL Transfer</span>
              <span className="block mt-2 gradient-text">Service</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-beige-100/80 mb-8 max-w-3xl mx-auto">
              Professional firearm transfer services with fast processing, competitive rates, and expert assistance
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold px-8 py-6 text-lg rounded-xl shadow-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call 717-249-0000
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="glass-effect border-beige-100/30 text-beige-100 hover:bg-beige-100/10 font-bold px-8 py-6 text-lg rounded-xl"
                  >
                    Schedule Transfer
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <motion.div 
                className="glass-effect p-4 rounded-xl border border-green-500/30"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl font-bold gradient-text">$35</div>
                <div className="text-sm text-beige-100/60">Per Transfer</div>
              </motion.div>
              <motion.div 
                className="glass-effect p-4 rounded-xl border border-amber-500/30"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl font-bold gradient-text">Same Day</div>
                <div className="text-sm text-beige-100/60">Processing</div>
              </motion.div>
              <motion.div 
                className="glass-effect p-4 rounded-xl border border-purple-500/30"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl font-bold gradient-text">500+</div>
                <div className="text-sm text-beige-100/60">Transfers</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 px-3 py-1">
              <Zap className="w-3 h-3 mr-1" />
              Simple Process
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-lg text-beige-100/60 max-w-2xl mx-auto">
              Four simple steps from purchase to pickup
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Card className="glass-effect border-noir-700/50 p-6 h-full relative overflow-hidden group text-white">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                    style={{ backgroundImage: `linear-gradient(to bottom right, ${step.color.split(' ')[1]}, ${step.color.split(' ')[3]})` }}
                  />
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} p-3 mb-4`}>
                      <step.icon className="w-full h-full text-white" />
                    </div>
                    
                    <div className="text-sm text-beige-100/50 mb-2">Step {index + 1}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-beige-100/70 text-sm">{step.description}</p>
                  </div>

                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-20">
                      <ChevronRight className="w-6 h-6 text-beige-100/30" />
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-noir-900 via-noir-800/50 to-noir-900"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 px-3 py-1">
                <Award className="w-3 h-3 mr-1" />
                Full Service
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                What's <span className="gradient-text">Included</span>
              </h2>
              <p className="text-lg text-beige-100/70 mb-8">
                Our FFL transfer service includes everything you need for a smooth, compliant transfer process.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {includedServices.map((service, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-beige-100/80">{service}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="mt-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold">
                    Start Your Transfer
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Card className="glass-effect border-green-500/20 p-8 text-white">
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  Best Value
                </div>

                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <DollarSign className="w-8 h-8 text-green-400" />
                  Transparent Pricing
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-3 border-b border-noir-700/50">
                    <span className="text-beige-100/80">Standard Transfer</span>
                    <span className="text-2xl font-bold gradient-text">$35</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-noir-700/50">
                    <span className="text-beige-100/80">Multiple Items (each)</span>
                    <span className="text-2xl font-bold gradient-text">$30</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-beige-100/80">Law Enforcement/Military</span>
                    <span className="text-2xl font-bold gradient-text">$25</span>
                  </div>
                </div>

                <div className="glass-effect p-4 rounded-lg border border-amber-500/30">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-beige-100/70">
                      Price match guarantee! We'll match any local FFL's advertised transfer price.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 px-3 py-1">
              <FileText className="w-3 h-3 mr-1" />
              FAQ
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Common <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-effect border-noir-700/50 p-6 h-full hover:border-green-500/30 transition-all duration-300 text-white">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    {faq.question}
                  </h3>
                  <p className="text-beige-100/70 ml-7">{faq.answer}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-noir-900 via-noir-800 to-noir-900"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-effect p-8 sm:p-12 rounded-2xl border border-green-500/20 text-white"
          >
            <ShieldCheck className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Start Your Transfer?
            </h2>
            <p className="text-lg text-beige-100/70 mb-8 max-w-2xl mx-auto">
              Contact us today to begin your FFL transfer. Fast, professional service guaranteed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 717-249-0000
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="glass-effect border-beige-100/30 text-beige-100 hover:bg-beige-100/10 font-bold px-8 py-4">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </Button>
              </motion.div>
            </div>

            <div className="mt-8 pt-8 border-t border-noir-700/50">
              <div className="flex items-center justify-center gap-2 text-beige-100/60">
                <MapPin className="w-5 h-5" />
                <span>10 Vale Road, Newville, PA 17241</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}