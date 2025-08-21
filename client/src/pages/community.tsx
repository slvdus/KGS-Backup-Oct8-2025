import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, 
  Trophy, 
  MessageCircle, 
  Calendar, 
  Target, 
  Gift, 
  Star, 
  Shield, 
  Zap,
  DollarSign,
  UserCheck,
  Bell,
  Award,
  Heart,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Community() {
  const [memberCount, setMemberCount] = useState(0);
  const [savingsCount, setSavingsCount] = useState(0);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  // Animated counter effect
  useEffect(() => {
    const memberInterval = setInterval(() => {
      setMemberCount(prev => prev < 500 ? prev + 10 : 500);
    }, 30);

    const savingsInterval = setInterval(() => {
      setSavingsCount(prev => prev < 100 ? prev + 2 : 100);
    }, 30);

    return () => {
      clearInterval(memberInterval);
      clearInterval(savingsInterval);
    };
  }, []);

  const benefits = [
    {
      icon: Trophy,
      title: "Exclusive Member Pricing",
      description: "Get access to special deals before anyone else",
      color: "from-amber-500/20 to-orange-500/20",
      borderColor: "border-amber-500/30",
      savings: "Save 15-25%"
    },
    {
      icon: MessageCircle,
      title: "Direct Access to Experts",
      description: "Chat with Brent, Amber, and the crew anytime",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      savings: "24/7 Support"
    },
    {
      icon: Calendar,
      title: "Priority Appointments",
      description: "Book your appointments before the public",
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      savings: "Skip the Wait"
    },
    {
      icon: Target,
      title: "Range Days & Events",
      description: "Join exclusive member-only shooting events",
      color: "from-red-500/20 to-pink-500/20",
      borderColor: "border-red-500/30",
      savings: "Monthly Events"
    },
    {
      icon: Gift,
      title: "Monthly Giveaways",
      description: "Win firearms, accessories, and more",
      color: "from-purple-500/20 to-violet-500/20",
      borderColor: "border-purple-500/30",
      savings: "$5K+ Prizes"
    },
    {
      icon: Users,
      title: "Connect with Fellow Shooters",
      description: "Network with PA's most passionate firearms community",
      color: "from-indigo-500/20 to-blue-500/20",
      borderColor: "border-indigo-500/30",
      savings: "500+ Members"
    }
  ];

  const memberPerks = [
    "Early access to new inventory",
    "Member-only flash sales",
    "Free FFL transfers (twice yearly)",
    "Birthday discounts",
    "Referral bonuses",
    "Exclusive training videos",
    "Priority customer service",
    "Access to limited editions"
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-20 bg-noir-900" data-testid="page-community">
      {/* Enhanced Hero Section with Modern Design */}
      <section className="hero-bg min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-noir-900"></div>
        
        {/* Advanced Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-beige-100/10 to-transparent rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-to-tl from-beige-100/8 to-transparent rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          {/* Sparkle Effects */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-beige-100/50 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Live Member Counter Badge */}
          <motion.div
            className="mb-6 inline-flex items-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 px-4 py-2 rounded-full backdrop-blur-md">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-semibold">
                {memberCount}+ Active Members
              </span>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            data-testid="text-community-title"
          >
            <span className="text-white">Welcome to the</span>
            <span className="block mt-2">
              <span className="gradient-text relative">
                KGS CREW
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-beige-100/20 to-beige-200/20 blur-xl"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </span>
              <span className="text-white"> Community</span>
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-testid="text-community-subtitle"
          >
            Pennsylvania's most exclusive firearms community where members save
            <span className="text-beige-100 font-semibold"> ${savingsCount}K+ annually</span>
          </motion.p>
          
          {/* Animated Stats Row */}
          <motion.div
            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">24/7</div>
              <div className="text-xs sm:text-sm text-gray-400">Expert Access</div>
            </div>
            <div className="text-center border-x border-noir-700/50">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">15-25%</div>
              <div className="text-xs sm:text-sm text-gray-400">Member Savings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">$5K+</div>
              <div className="text-xs sm:text-sm text-gray-400">Monthly Prizes</div>
            </div>
          </motion.div>
          
          {/* CTA Buttons with Animations */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                className="bg-gradient-to-r from-beige-100 to-beige-200 hover:from-beige-200 hover:to-beige-100 text-noir-900 font-bold shadow-2xl px-8 py-4 rounded-xl text-lg group relative overflow-hidden"
                onClick={() => window.open('#', '_blank')}
                data-testid="button-join-community"
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Join Free Today
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="outline"
                className="glass-effect border-2 border-beige-100/30 text-beige-100 hover:bg-beige-100/10 px-8 py-4 rounded-xl font-semibold text-lg"
              >
                See Member Benefits
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.p 
            className="text-sm text-gray-400 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <CheckCircle className="inline w-4 h-4 text-green-500 mr-1" />
            No credit card required • Cancel anytime • Zero spam
          </motion.p>
        </div>
      </section>

      {/* Enhanced Benefits Section with Modern Cards */}
      <section className="py-12 sm:py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-noir-900 via-noir-800/30 to-noir-900"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
            >
              <span className="text-beige-100 text-sm font-semibold uppercase tracking-wider">
                Member Benefits
              </span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-benefits-title">
              Why <span className="gradient-text">500+ Members</span> Choose Us
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto" data-testid="text-benefits-subtitle">
              Join Pennsylvania's fastest-growing firearms community and unlock exclusive perks
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className={`group relative`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredBenefit(index)}
                onMouseLeave={() => setHoveredBenefit(null)}
                data-testid={`benefit-${index}`}
              >
                <motion.div
                  className={`h-full glass-effect p-6 sm:p-8 rounded-2xl border ${benefit.borderColor} relative overflow-hidden`}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                  
                  {/* Animated Border Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: `linear-gradient(45deg, transparent, ${hoveredBenefit === index ? 'rgba(245, 243, 240, 0.2)' : 'transparent'}, transparent)`,
                    }}
                    animate={{
                      rotate: hoveredBenefit === index ? 360 : 0,
                    }}
                    transition={{
                      duration: 3,
                      repeat: hoveredBenefit === index ? Infinity : 0,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Badge */}
                  <motion.div
                    className="absolute top-4 right-4 bg-beige-100/10 px-3 py-1 rounded-full text-xs font-semibold text-beige-100 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: 20, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                  >
                    {benefit.savings}
                  </motion.div>
                  
                  {/* Icon Container */}
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-br from-beige-100/20 to-beige-100/10 rounded-xl flex items-center justify-center mb-6 relative"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-beige-100/20 rounded-xl blur-xl"
                      animate={{
                        scale: hoveredBenefit === index ? [1, 1.2, 1] : 1,
                      }}
                      transition={{
                        duration: 2,
                        repeat: hoveredBenefit === index ? Infinity : 0,
                      }}
                    />
                    <benefit.icon className="w-7 h-7 text-beige-100 relative z-10" />
                  </motion.div>
                  
                  {/* Content */}
                  <motion.h3 
                    className="text-lg sm:text-xl font-bold text-white mb-3 relative z-10"
                    data-testid={`benefit-title-${index}`}
                  >
                    {benefit.title}
                  </motion.h3>
                  <motion.p 
                    className="text-sm sm:text-base text-gray-400 relative z-10 leading-relaxed"
                    data-testid={`benefit-description-${index}`}
                  >
                    {benefit.description}
                  </motion.p>
                  
                  {/* Hover Arrow */}
                  <motion.div
                    className="mt-4 flex items-center text-beige-100 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <span className="text-sm font-semibold">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Perks Checklist Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-noir-900 via-noir-800/50 to-noir-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="glass-effect p-8 sm:p-12 rounded-3xl border border-beige-100/20 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-beige-100/5 to-transparent"></div>
            
            <div className="relative z-10">
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Award className="w-12 h-12 text-beige-100 mx-auto mb-4" />
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Everything Included in Your <span className="gradient-text">FREE Membership</span>
                </h3>
              </motion.div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {memberPerks.map((perk, index) => (
                  <motion.div
                    key={perk}
                    className="flex items-center space-x-3 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500/30 to-emerald-500/30 flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    </motion.div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {perk}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Stats Section with Animated Counters */}
      <section className="py-12 sm:py-16 md:py-20 bg-noir-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-noir-900/50 via-transparent to-noir-900/50"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Community <span className="gradient-text">Impact</span>
            </h3>
            <p className="text-gray-400">Real numbers from real members</p>
          </motion.div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { 
                value: memberCount + "+", 
                label: "Active Members",
                icon: Users,
                color: "from-blue-500/20 to-cyan-500/20"
              },
              { 
                value: "$" + savingsCount + "K+", 
                label: "Total Saved",
                icon: DollarSign,
                color: "from-green-500/20 to-emerald-500/20"
              },
              { 
                value: "50+", 
                label: "Monthly Deals",
                icon: Zap,
                color: "from-amber-500/20 to-orange-500/20"
              },
              { 
                value: "24/7", 
                label: "Support Access",
                icon: Shield,
                color: "from-purple-500/20 to-violet-500/20"
              }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`stat-${index}`}
              >
                <motion.div
                  className="glass-effect p-6 rounded-xl border border-noir-700/50 text-center relative overflow-hidden"
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                  
                  <stat.icon className="w-8 h-8 text-beige-100 mx-auto mb-3 opacity-50" />
                  
                  <motion.div 
                    className="text-3xl sm:text-4xl font-bold gradient-text mb-2"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-noir-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-noir-800/30 via-noir-900 to-noir-900"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-beige-100 fill-beige-100" />
              ))}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Loved by <span className="gradient-text">500+ Members</span>
            </h2>
            <p className="text-gray-400">Real stories from real KGS CREW members</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                quote: "Saved $300 on my last purchase thanks to member-only pricing. Best decision I've made!",
                author: "Mike R.",
                location: "Harrisburg, PA",
                savings: "$300 Saved",
                rating: 5
              },
              {
                quote: "The community events are incredible. Met some great people and improved my shooting skills.",
                author: "Sarah L.",
                location: "Carlisle, PA",
                savings: "10+ Events",
                rating: 5
              },
              {
                quote: "Priority appointments mean I never have to wait. VIP treatment every single time.",
                author: "John D.",
                location: "Mechanicsburg, PA",
                savings: "Zero Wait",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`testimonial-${index}`}
              >
                <motion.div
                  className="h-full glass-effect p-6 sm:p-8 rounded-2xl border border-noir-700/50 relative overflow-hidden"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Quote Mark */}
                  <div className="absolute top-4 right-4 text-6xl text-beige-100/10 font-serif">"</div>
                  
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Star className="w-4 h-4 text-beige-100 fill-beige-100" />
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-gray-300 mb-6 italic relative z-10 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Savings Badge */}
                  <div className="inline-block bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 px-3 py-1 rounded-full mb-4">
                    <span className="text-green-400 text-xs font-semibold">{testimonial.savings}</span>
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-beige-100/20 to-beige-100/10 rounded-full flex items-center justify-center">
                      <UserCheck className="w-5 h-5 text-beige-100" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">{testimonial.author}</p>
                      <p className="text-gray-400 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section with Modern Design */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-noir-800 via-noir-900 to-noir-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-beige-100/5 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            className="glass-effect p-8 sm:p-12 md:p-16 rounded-3xl border border-beige-100/20 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-beige-100/5 via-transparent to-beige-100/5"></div>
            
            {/* Content */}
            <div className="relative z-10">
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 px-4 py-2 rounded-full backdrop-blur-md">
                  <Bell className="w-4 h-4 text-green-400 animate-pulse" />
                  <span className="text-green-400 text-sm font-semibold">
                    Limited Time: Extra 10% Off First Purchase
                  </span>
                </div>
              </motion.div>
              
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Ready to Save <span className="gradient-text">Thousands</span>?
              </motion.h2>
              
              <motion.p 
                className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Join {memberCount}+ smart buyers who never pay retail again.
                Get instant access to all member benefits.
              </motion.p>
              
              {/* Benefits Quick List */}
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Free Forever</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>No Spam</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Cancel Anytime</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Instant Access</span>
                </div>
              </motion.div>
              
              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    className="bg-gradient-to-r from-beige-100 to-beige-200 hover:from-beige-200 hover:to-beige-100 text-noir-900 font-bold shadow-2xl px-10 py-5 rounded-xl text-lg group relative overflow-hidden min-w-[250px]"
                    onClick={() => window.open('#', '_blank')}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/30"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative z-10 flex items-center justify-center">
                      <Heart className="w-5 h-5 mr-2 group-hover:fill-current transition-all" />
                      Join FREE Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a href="tel:717-249-0000">
                    <Button 
                      variant="outline"
                      className="glass-effect border-2 border-beige-100/30 text-beige-100 hover:bg-beige-100/10 px-10 py-5 rounded-xl font-semibold text-lg min-w-[250px]"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call: 717-249-0000
                    </Button>
                  </a>
                </motion.div>
              </motion.div>
              
              {/* Trust Indicators */}
              <motion.div
                className="mt-8 pt-8 border-t border-noir-700/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span>SSL Secured</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-green-400" />
                    <span>Verified Business</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-green-400" />
                    <span>4.9/5 Rating</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}