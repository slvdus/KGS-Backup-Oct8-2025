import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { value: "20+", label: "Years in Business" },
    { value: "5000+", label: "Satisfied Customers" },
    { value: "100%", label: "Licensed & Compliant" },
    { value: "24/7", label: "Customer Support" }
  ];

  const teamMembers = [
    {
      name: "John Mitchell",
      role: "Founder & Owner",
      experience: "25+ years in firearms industry",
      image: "/api/placeholder/300/300?text=John+Mitchell"
    },
    {
      name: "Mike Rodriguez", 
      role: "Sales Manager",
      experience: "Expert in tactical equipment",
      image: "/api/placeholder/300/300?text=Mike+Rodriguez"
    },
    {
      name: "Sarah Johnson",
      role: "Master Gunsmith", 
      experience: "Certified in custom modifications",
      image: "/api/placeholder/300/300?text=Sarah+Johnson"
    }
  ];

  return (
    <div className="min-h-screen pt-20" data-testid="page-about">
      {/* Hero Section */}
      <section className="bg-noir-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="text-about-title">
              About Nature's Arsenal
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto" data-testid="text-about-subtitle">
              For over two decades, we've been dedicated to providing the finest firearms 
              and equipment to enthusiasts, collectors, and professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-noir-900">
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
                src="/api/placeholder/600/400?text=Professional+Gunsmith+at+Work" 
                alt="Professional gunsmith at work" 
                className="relative rounded-xl shadow-2xl glass-effect border border-noir-700/50 group-hover:scale-105 transition-transform duration-500"
                data-testid="img-gunsmith"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6" data-testid="text-story-title">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-400" data-testid="text-story-content">
                <p>
                  Founded in 2001, Nature's Arsenal began as a small family-owned business 
                  with a passion for firearms and outdoor sports. Over the years, we've grown 
                  into one of the region's most trusted firearms dealers.
                </p>
                <p>
                  Our commitment to quality, safety, and customer service has earned us a 
                  reputation among law enforcement, military personnel, and civilian enthusiasts alike.
                </p>
                <p>
                  We pride ourselves on our extensive knowledge, competitive pricing, and 
                  the personal attention we give to every customer who walks through our doors.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    data-testid={`stat-${index}`}
                  >
                    <div className="text-3xl font-bold gradient-text mb-2 pulse-glow">
                      {stat.value}
                    </div>
                    <div className="text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
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
              Meet Our Team
            </h2>
            <p className="text-gray-400 text-lg" data-testid="text-team-subtitle">
              Experienced professionals dedicated to serving you
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              Our Values
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto" data-testid="text-values-subtitle">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Safety First", description: "We prioritize safety in every transaction and interaction." },
              { title: "Quality Products", description: "Only the finest firearms and equipment make it to our shelves." },
              { title: "Expert Knowledge", description: "Our team brings decades of combined experience and expertise." },
              { title: "Customer Service", description: "Personalized attention and support for every customer." }
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
    </div>
  );
}
