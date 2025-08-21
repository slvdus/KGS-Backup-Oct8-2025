import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, 
  Shield, 
  Users, 
  Award, 
  Trophy,
  Heart,
  Sparkles,
  MapPin,
  Phone,
  Clock,
  Target,
  CheckCircle,
  TrendingUp,
  Zap
} from "lucide-react";
import { useState, useEffect } from "react";

export default function About() {
  const [recommendRate, setRecommendRate] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  // Animated counters
  useEffect(() => {
    const recommendInterval = setInterval(() => {
      setRecommendRate(prev => prev < 98 ? prev + 2 : 98);
    }, 30);

    const reviewInterval = setInterval(() => {
      setReviewCount(prev => prev < 94 ? prev + 2 : 94);
    }, 30);

    return () => {
      clearInterval(recommendInterval);
      clearInterval(reviewInterval);
    };
  }, []);

  const stats = [
    { 
      value: recommendRate + "%", 
      label: "Recommend Us",
      icon: Trophy,
      color: "from-amber-500/20 to-orange-500/20",
      borderColor: "border-amber-500/30"
    },
    { 
      value: reviewCount + "+", 
      label: "5-Star Reviews",
      icon: Star,
      color: "from-yellow-500/20 to-amber-500/20",
      borderColor: "border-yellow-500/30"
    },
    { 
      value: "100%", 
      label: "Licensed FFL",
      icon: Shield,
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    { 
      value: "VIP", 
      label: "Personal Service",
      icon: Award,
      color: "from-purple-500/20 to-violet-500/20",
      borderColor: "border-purple-500/30"
    }
  ];

  const teamMembers = [
    {
      name: "Brent Miller",
      role: "President & Owner",
      experience: "Digital sales expert, bar owner, your firearms guide",
      image: "/api/placeholder/300/300?text=Brent+Miller"
    },
    {
      name: "Amber Kane", 
      role: "Co-Owner",
      experience: "Customer turned owner - knows what shooters really want",
      image: "/api/placeholder/300/300?text=Amber+Kane"
    },
    {
      name: "Bill",
      role: "Sales Specialist", 
      experience: "Retired US Postal carrier, lifetime of service",
      image: "/api/placeholder/300/300?text=Bill"
    },
    {
      name: "Andy",
      role: "Founder Emeritus", 
      experience: "Original founder, still sharing his expertise",
      image: "/api/placeholder/300/300?text=Andy"
    }
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-20 bg-gradient-to-b from-noir-900 via-noir-800/50 to-noir-900" data-testid="page-about">
      {/* Modern Hero Section with Animated Backgrounds */}
      <section className="hero-bg min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-noir-900"></div>
        
        {/* Advanced Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-1/4 -right-1/4 w-[700px] h-[700px] bg-gradient-to-bl from-amber-500/10 to-transparent rounded-full blur-3xl"
            animate={{
              x: [-100, 0, -100],
              y: [0, 100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-beige-100/8 to-transparent rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
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
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-beige-100/70 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Live Badge */}
          <motion.div
            className="mb-6 inline-flex items-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 px-4 py-2 rounded-full backdrop-blur-md">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-semibold">
                Family Owned Since 2020 • Serving PA & Beyond
              </span>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            data-testid="text-about-title"
          >
            <span className="text-white">The</span>
            <span className="block mt-2">
              <span className="gradient-text relative inline-block">
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
              <span className="text-white"> Story</span>
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-beige-100 to-white max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-testid="text-about-subtitle"
          >
            Since April 2020, we've revolutionized firearms sales in PA with one simple idea: 
            <span className="block mt-2 font-semibold">Treat customers like family, not transactions.</span>
          </motion.p>
          
          {/* Enhanced Stats with Icons */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className={`glass-effect p-4 sm:p-6 rounded-2xl border ${stat.borderColor} text-center group relative overflow-hidden`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                
                {/* Animated Border Glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: `linear-gradient(45deg, transparent, ${hoveredStat === index ? 'rgba(245, 243, 240, 0.2)' : 'transparent'}, transparent)`,
                  }}
                  animate={{
                    rotate: hoveredStat === index ? 360 : 0,
                  }}
                  transition={{
                    duration: 3,
                    repeat: hoveredStat === index ? Infinity : 0,
                    ease: "linear"
                  }}
                />
                
                <stat.icon className="w-8 h-8 text-beige-100 mx-auto mb-2 opacity-60" />
                <div className="text-2xl sm:text-3xl font-bold gradient-text relative z-10">{stat.value}</div>
                <div className="text-beige-100/60 text-sm relative z-10">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Story Section */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-noir-900 via-noir-800/30 to-noir-900"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-purple-500/5 to-transparent rounded-full blur-3xl"
            animate={{
              y: [0, 50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-beige-100 text-sm font-semibold uppercase tracking-wider">
              Our Journey
            </span>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-beige-100/20 via-amber-500/10 to-transparent rounded-2xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative glass-effect p-2 rounded-2xl border border-beige-100/20 overflow-hidden">
                <img 
                  src="/api/placeholder/600/400?text=KGS+CREW+Store" 
                  alt="KGS CREW Store Interior" 
                  className="rounded-xl w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  data-testid="img-store"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <motion.div
                  className="inline-flex items-center gap-2 mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  viewport={{ once: true }}
                >
                  <Heart className="w-5 h-5 text-red-500" />
                  <span className="text-beige-100 text-sm font-semibold">Est. April 2020</span>
                </motion.div>
                
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6" data-testid="text-story-title">
                  From Customer to Owner: <span className="gradient-text">A Success Story</span>
                </h2>
              </div>
              
              <div className="space-y-4" data-testid="text-story-content">
                <motion.div
                  className="glass-effect p-4 rounded-xl border border-beige-100/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-beige-100/80 leading-relaxed">
                    <span className="text-beige-100 font-semibold">In April 2020,</span> when the world was shutting down, 
                    Brent Miller and Amber Kane saw an opportunity. Amber was a longtime customer who knew what shooters really 
                    wanted. Brent brought business expertise from hospitality, real estate, and digital sales.
                  </p>
                </motion.div>
                
                <motion.div
                  className="glass-effect p-4 rounded-xl border border-beige-100/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-beige-100/80 leading-relaxed">
                    Together, they transformed KGS CREW into Pennsylvania's most recommended gun shop. 
                    How? Simple: <span className="text-beige-100 font-semibold bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-2 py-1 rounded">By appointment only.</span> No 
                    crowds. No pressure. Just you, the best prices in PA, and personal attention you won't find anywhere else.
                  </p>
                </motion.div>
                
                <motion.div
                  className="glass-effect p-4 rounded-xl border border-green-500/20 bg-gradient-to-br from-green-500/5 to-transparent"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-3">
                    <Trophy className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-beige-100/80 leading-relaxed">
                      The result? <span className="text-green-400 font-bold">{recommendRate}% of our customers recommend us.</span> People 
                      drive from all over Pennsylvania and beyond because they know: at KGS CREW, you're not just another sale. 
                      <span className="text-beige-100 font-semibold"> You're family.</span>
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  className="glass-effect p-4 rounded-xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-transparent"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                    <p className="text-beige-100 font-semibold">
                      Fun fact: Brent also owns Kane's Korner Pizzeria in Newville. Come for the guns, stay for the pizza! 🍕
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-noir-900 via-noir-800/20 to-noir-900"></div>
        
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-gradient-to-tl from-purple-500/5 to-transparent rounded-full blur-3xl"
            animate={{
              y: [0, -50, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
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
              <span className="text-beige-100 text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
                <Users className="w-4 h-4" />
                Our Team
              </span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-team-title">
              Meet The <span className="gradient-text">KGS CREW</span>
            </h2>
            <p className="text-beige-100/60 text-base sm:text-lg max-w-2xl mx-auto" data-testid="text-team-subtitle">
              The experts who make your experience unforgettable
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`team-member-${index}`}
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <motion.div
                  className="glass-effect p-6 rounded-2xl border border-beige-100/10 relative overflow-hidden"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-beige-100/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Team Member Image */}
                  <div className="relative mb-4">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-beige-100/30 to-amber-500/30 rounded-full blur-2xl"
                      animate={{
                        scale: hoveredMember === index ? [1, 1.2, 1] : 1,
                      }}
                      transition={{
                        duration: 2,
                        repeat: hoveredMember === index ? Infinity : 0,
                      }}
                    />
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="relative w-32 h-32 rounded-full mx-auto object-cover border-3 border-beige-100/20 group-hover:border-beige-100/40 transition-all duration-500"
                    />
                    {hoveredMember === index && (
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-beige-100/30"
                        initial={{ scale: 1 }}
                        animate={{ scale: 1.1 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      />
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-beige-100 transition-colors duration-300" data-testid={`text-member-name-${index}`}>
                    {member.name}
                  </h3>
                  <p className="text-beige-100 mb-3 font-semibold text-sm" data-testid={`text-member-role-${index}`}>
                    {member.role}
                  </p>
                  <p className="text-beige-100/60 text-sm leading-relaxed" data-testid={`text-member-experience-${index}`}>
                    {member.experience}
                  </p>
                  
                  {/* Hover Effect Icon */}
                  <motion.div
                    className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    <Award className="w-5 h-5 text-beige-100 mx-auto" />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-noir-900 via-noir-800/40 to-noir-900"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 60px,
              rgba(245, 243, 240, 0.03) 60px,
              rgba(245, 243, 240, 0.03) 61px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 60px,
              rgba(245, 243, 240, 0.03) 60px,
              rgba(245, 243, 240, 0.03) 61px
            )`
          }} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
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
              <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 px-4 py-2 rounded-full backdrop-blur-md">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-semibold">
                  {recommendRate}% Customer Satisfaction
                </span>
              </div>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-values-title">
              The <span className="gradient-text">KGS CREW Promise</span>
            </h2>
            <p className="text-beige-100/60 text-base sm:text-lg max-w-2xl mx-auto" data-testid="text-values-subtitle">
              This is why customers drive hours to shop with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Best Prices, Period", 
                description: "We beat the big box stores every single time. Guaranteed.",
                icon: TrendingUp,
                color: "from-green-500/20 to-emerald-500/20",
                borderColor: "border-green-500/30"
              },
              { 
                title: "No Pressure Sales", 
                description: "Take your time. Ask questions. We're here to educate, not push.",
                icon: Heart,
                color: "from-red-500/20 to-pink-500/20",
                borderColor: "border-red-500/30"
              },
              { 
                title: "VIP Treatment", 
                description: "Appointment-only means you get our full attention. Every time.",
                icon: Star,
                color: "from-amber-500/20 to-yellow-500/20",
                borderColor: "border-amber-500/30"
              },
              { 
                title: "Family Values", 
                description: "We remember your name, your preferences, and treat you like family.",
                icon: Users,
                color: "from-purple-500/20 to-violet-500/20",
                borderColor: "border-purple-500/30"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className={`glass-effect p-6 rounded-2xl border ${value.borderColor} text-center group relative overflow-hidden`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`value-${index}`}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                
                {/* Icon */}
                <motion.div
                  className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-beige-100/20 to-beige-100/10 rounded-xl flex items-center justify-center relative"
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <value.icon className="w-6 h-6 text-beige-100" />
                </motion.div>
                
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-beige-100 transition-colors duration-300" data-testid={`text-value-title-${index}`}>
                  {value.title}
                </h3>
                <p className="text-beige-100/60 text-sm leading-relaxed" data-testid={`text-value-description-${index}`}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-noir-900 via-noir-800/50 to-noir-900"></div>
        
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-beige-100/10 via-amber-500/5 to-beige-100/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Floating Particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-br from-beige-100 to-amber-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 px-4 py-2 rounded-full backdrop-blur-md">
              <Phone className="w-4 h-4 text-amber-400 animate-pulse" />
              <span className="text-amber-400 text-sm font-semibold">
                Ready to Schedule • 717-249-0000
              </span>
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Experience the <span className="gradient-text">KGS CREW</span> Difference
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-beige-100 to-white mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join the <span className="font-bold">{reviewCount}+ satisfied customers</span> who won't shop anywhere else. 
            <span className="block mt-2">Your VIP appointment awaits.</span>
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <a href="tel:717-249-0000">
                <button className="bg-gradient-to-r from-beige-100 to-beige-200 hover:from-beige-200 hover:to-beige-100 text-noir-900 font-bold px-8 py-4 rounded-xl text-lg group relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Schedule Your Appointment Today
                    <Zap className="w-4 h-4 ml-2 group-hover:animate-pulse" />
                  </span>
                </button>
              </a>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <a href="mailto:KGSCrewInc@gmail.com">
                <button className="glass-effect border-2 border-beige-100/30 text-beige-100 hover:bg-beige-100/10 px-8 py-4 rounded-xl font-semibold text-lg">
                  Email Us Instead
                </button>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-beige-100/60 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>10 Vale Road, Newville, PA</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>By Appointment Only</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Licensed FFL Dealer</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}