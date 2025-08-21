import { motion } from "framer-motion";
import { 
  Award,
  Clock, 
  DollarSign, 
  CheckCircle,
  FileText,
  Shield,
  Stamp,
  Lock,
  Phone,
  Mail,
  MapPin,
  AlertCircle,
  ChevronRight,
  Star,
  Users,
  Zap,
  Timer,
  ScrollText,
  Fingerprint
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SEOHead, { pageSEO } from "@/components/seo-head";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function NFATransfer() {
  const nfaItems = [
    {
      icon: Shield,
      title: "Suppressors",
      description: "Silencers and sound suppressors",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FileText,
      title: "Short Barrel Rifles",
      description: "SBRs with barrels under 16 inches",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: ScrollText,
      title: "Short Barrel Shotguns",
      description: "SBS with barrels under 18 inches",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Stamp,
      title: "Any Other Weapons",
      description: "AOWs and other NFA items",
      color: "from-amber-500 to-orange-500"
    }
  ];

  const processSteps = [
    {
      title: "Purchase NFA Item",
      description: "Buy from dealer or individual",
      detail: "Select your NFA item from any dealer"
    },
    {
      title: "Form 4 Submission",
      description: "Complete ATF Form 4 with our help",
      detail: "We'll guide you through the entire process"
    },
    {
      title: "ATF Processing",
      description: "Wait for ATF approval",
      detail: "Current wait times: 90-120 days with eForm 4"
    },
    {
      title: "Approval & Pickup",
      description: "Receive stamp and collect item",
      detail: "We'll notify you immediately upon approval"
    }
  ];

  const includedServices = [
    "ATF Form 4 preparation and submission",
    "Fingerprinting services on-site",
    "Passport photo services",
    "Trust setup guidance",
    "Secure storage during ATF wait",
    "Email/text status updates",
    "Compliance verification",
    "Transfer documentation"
  ];

  const faqs = [
    {
      question: "What is the current wait time?",
      answer: "eForm 4 submissions typically process in 90-120 days. Paper forms can take 8-12 months. We recommend eForm submissions for faster processing."
    },
    {
      question: "Do I need a trust?",
      answer: "A trust isn't required but offers benefits like allowing multiple people to possess the NFA items and easier estate planning. We can guide you to trust resources."
    },
    {
      question: "What's the tax stamp cost?",
      answer: "The ATF tax stamp is $200 for most NFA items (or $5 for AOWs). This is paid directly to the ATF, separate from our transfer fee."
    },
    {
      question: "Can I take it home while waiting?",
      answer: "No, NFA items must remain in our possession until ATF approval. We provide secure, climate-controlled storage at no extra charge."
    }
  ];

  return (
    <>
      <SEOHead {...pageSEO.nfaTransfer} />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-noir-900 via-noir-800 to-noir-900">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <motion.div
            className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
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
            <Badge className="mb-6 px-4 py-2 text-sm font-semibold bg-purple-500/20 text-purple-400 border-purple-500/30">
              <Award className="w-4 h-4 mr-2" />
              NFA Specialist
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">NFA Transfer</span>
              <span className="block mt-2 gradient-text">Service</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-beige-100/80 mb-8 max-w-3xl mx-auto">
              Expert National Firearms Act transfer services for suppressors, SBRs, and other NFA items
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white font-bold px-8 py-6 text-lg rounded-xl shadow-xl"
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
                    Start NFA Transfer
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <motion.div 
                className="glass-effect p-4 rounded-xl border border-purple-500/30"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl font-bold gradient-text">$75</div>
                <div className="text-sm text-beige-100/60">Transfer Fee</div>
              </motion.div>
              <motion.div 
                className="glass-effect p-4 rounded-xl border border-cyan-500/30"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl font-bold gradient-text">90-120</div>
                <div className="text-sm text-beige-100/60">Days (eForm)</div>
              </motion.div>
              <motion.div 
                className="glass-effect p-4 rounded-xl border border-amber-500/30"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl font-bold gradient-text">200+</div>
                <div className="text-sm text-beige-100/60">NFA Transfers</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NFA Items Section */}
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
              <Shield className="w-3 h-3 mr-1" />
              NFA Items
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              What We <span className="gradient-text">Transfer</span>
            </h2>
            <p className="text-lg text-beige-100/60 max-w-2xl mx-auto">
              We handle all types of NFA items with expertise and compliance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nfaItems.map((item, index) => (
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
                    style={{ backgroundImage: `linear-gradient(to bottom right, ${item.color.split(' ')[1]}, ${item.color.split(' ')[3]})` }}
                  />
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} p-3 mb-4`}>
                      <item.icon className="w-full h-full text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-beige-100/70 text-sm">{item.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-noir-900 via-noir-800/50 to-noir-900"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 px-3 py-1">
              <Timer className="w-3 h-3 mr-1" />
              Process Timeline
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              The NFA Transfer <span className="gradient-text">Process</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-center mb-8">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="ml-6 flex-1">
                    <Card className="glass-effect border-purple-500/20 p-6 hover:border-purple-500/40 transition-all duration-300 text-white">
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-beige-100/80 mb-2">{step.description}</p>
                      <p className="text-sm text-beige-100/60">{step.detail}</p>
                    </Card>
                  </div>
                </div>

                {index < processSteps.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 px-3 py-1">
                <Fingerprint className="w-3 h-3 mr-1" />
                Complete Service
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Everything <span className="gradient-text">Included</span>
              </h2>
              <p className="text-lg text-beige-100/70 mb-8">
                Our comprehensive NFA transfer service handles every aspect of your transfer with professional expertise.
              </p>

              <div className="space-y-3">
                {includedServices.map((service, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
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
                  <Button size="lg" className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white font-semibold">
                    Begin NFA Transfer
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
            >
              <Card className="glass-effect border-purple-500/20 p-8 text-white">
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-purple-500 to-violet-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  Expert Service
                </div>

                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <DollarSign className="w-8 h-8 text-purple-400" />
                  NFA Transfer Pricing
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="glass-effect p-4 rounded-lg text-white">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold text-white">Transfer Fee</h4>
                        <p className="text-sm text-beige-100/60">Our professional service fee</p>
                      </div>
                      <span className="text-2xl font-bold gradient-text">$75</span>
                    </div>
                  </div>

                  <div className="glass-effect p-4 rounded-lg text-white">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold text-white">ATF Tax Stamp</h4>
                        <p className="text-sm text-beige-100/60">Paid directly to ATF</p>
                      </div>
                      <span className="text-2xl font-bold text-beige-100/80">$200</span>
                    </div>
                  </div>

                  <div className="glass-effect p-4 rounded-lg border border-purple-500/30 text-white">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-white">Total Cost</h4>
                        <p className="text-sm text-beige-100/60">Transfer + Tax Stamp</p>
                      </div>
                      <span className="text-3xl font-bold gradient-text">$275</span>
                    </div>
                  </div>
                </div>

                <div className="glass-effect p-4 rounded-lg border border-amber-500/30 text-white">
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-beige-100/70">
                      Multiple item discount: $65 per additional NFA item in the same submission
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
        <div className="absolute inset-0 bg-gradient-to-b from-noir-900 via-noir-800/30 to-noir-900"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Frequently Asked <span className="gradient-text">Questions</span>
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
                <Card className="glass-effect border-noir-700/50 p-6 h-full hover:border-purple-500/30 transition-all duration-300 text-white">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
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
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-effect p-8 sm:p-12 rounded-2xl border border-purple-500/20 text-white"
          >
            <Award className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Start Your NFA Transfer Today
            </h2>
            <p className="text-lg text-beige-100/70 mb-8 max-w-2xl mx-auto">
              Expert guidance through every step of the NFA transfer process. Fast eForm submissions available.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white font-bold px-8 py-4">
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