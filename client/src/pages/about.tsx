import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { value: "98%", label: "Recommend Us" },
    { value: "94+", label: "5-Star Reviews" },
    { value: "100%", label: "Licensed FFL" },
    { value: "1-on-1", label: "Personal Service" }
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
    <div className="min-h-screen pt-16 sm:pt-20 bg-noir-900" data-testid="page-about">
      {/* Enhanced Hero Section - Mobile-first approach */}
      <section className="hero-bg py-12 sm:py-16 md:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-beige-100/5 rounded-full blur-3xl float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-beige-100/3 rounded-full blur-3xl float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            data-testid="text-about-title"
          >
            The <span className="gradient-text pulse-glow">KGS CREW</span> Story
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-testid="text-about-subtitle"
          >
            Since April 2020, we've revolutionized firearms sales in PA with one simple idea: 
            Treat customers like family, not transactions.
          </motion.p>
          
          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="glass-effect px-4 py-3 rounded-xl border border-noir-700/50 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-beige-100/20 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <img 
                src="/api/placeholder/600/400?text=KGS+CREW+Store" 
                alt="KGS CREW Store Interior" 
                className="relative rounded-xl shadow-2xl glass-effect border border-noir-700/50 group-hover:scale-105 transition-transform duration-500"
                data-testid="img-store"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6" data-testid="text-story-title">
                From Customer to Owner: A Success Story
              </h2>
              <div className="space-y-4 text-gray-400" data-testid="text-story-content">
                <p>
                  In April 2020, when the world was shutting down, Brent Miller and Amber Kane 
                  saw an opportunity. Amber was a longtime customer who knew what shooters really 
                  wanted. Brent brought business expertise from hospitality, real estate, and 
                  digital sales.
                </p>
                <p>
                  Together, they transformed KGS CREW into Pennsylvania's most recommended gun shop. 
                  How? Simple: <span className="text-beige-100 font-semibold">By appointment only.</span> No 
                  crowds. No pressure. Just you, the best prices in PA, and personal attention you 
                  won't find anywhere else.
                </p>
                <p>
                  The result? <span className="text-beige-100 font-semibold">98% of our customers recommend us.</span> People 
                  drive from all over Pennsylvania and beyond because they know: at KGS CREW, 
                  you're not just another sale. You're family.
                </p>
                <p className="text-beige-100 font-semibold">
                  Fun fact: Brent also owns Kane's Korner Pizzeria in Newville. Come for the guns, 
                  stay for the pizza!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-noir-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4" data-testid="text-team-title">
              Meet The Crew
            </h2>
            <p className="text-gray-400 text-lg" data-testid="text-team-subtitle">
              The experts who make your experience unforgettable
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                data-testid={`team-member-${index}`}
              >
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-beige-100/20 to-transparent rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="relative w-32 h-32 rounded-full mx-auto object-cover glass-effect border-2 border-beige-100/20 group-hover:border-beige-100/50 group-hover:scale-110 transition-all duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-beige-100 transition-colors duration-300" data-testid={`text-member-name-${index}`}>
                  {member.name}
                </h3>
                <p className="text-beige-100 mb-2 font-medium" data-testid={`text-member-role-${index}`}>
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm" data-testid={`text-member-experience-${index}`}>
                  {member.experience}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-noir-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4" data-testid="text-values-title">
              The KGS CREW Promise
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto" data-testid="text-values-subtitle">
              This is why 98% of our customers recommend us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Best Prices, Period", description: "We beat the big box stores every single time. Guaranteed." },
              { title: "No Pressure Sales", description: "Take your time. Ask questions. We're here to educate, not push." },
              { title: "VIP Treatment", description: "Appointment-only means you get our full attention. Every time." },
              { title: "Family Values", description: "We remember your name, your preferences, and treat you like family." }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center p-6 glass-effect rounded-xl hover:bg-noir-700/50 transition-all duration-500 group neon-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`value-${index}`}
              >
                <h3 className="text-lg font-semibold text-beige-100 mb-3 group-hover:text-white transition-colors duration-300" data-testid={`text-value-title-${index}`}>
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300" data-testid={`text-value-description-${index}`}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-noir-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-noir-900/50 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Experience the KGS CREW Difference
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join the hundreds of satisfied customers who won't shop anywhere else.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a href="tel:717-249-0000">
              <button className="bg-beige-100 hover:bg-beige-200 text-noir-900 font-bold px-8 py-4 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Schedule Your Appointment Today
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}