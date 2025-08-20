import { motion } from "framer-motion";
import { Users, Trophy, MessageCircle, Calendar, Target, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Community() {
  const benefits = [
    {
      icon: Trophy,
      title: "Exclusive Member Pricing",
      description: "Get access to special deals before anyone else"
    },
    {
      icon: MessageCircle,
      title: "Direct Access to Experts",
      description: "Chat with Brent, Amber, and the crew anytime"
    },
    {
      icon: Calendar,
      title: "Priority Appointments",
      description: "Book your appointments before the public"
    },
    {
      icon: Target,
      title: "Range Days & Events",
      description: "Join exclusive member-only shooting events"
    },
    {
      icon: Gift,
      title: "Monthly Giveaways",
      description: "Win firearms, accessories, and more"
    },
    {
      icon: Users,
      title: "Connect with Fellow Shooters",
      description: "Network with PA's most passionate firearms community"
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-noir-900" data-testid="page-community">
      {/* Hero Section */}
      <section className="hero-bg py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-beige-100/5 rounded-full blur-3xl float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-beige-100/3 rounded-full blur-3xl float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-6 inline-block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-beige-100/10 border border-beige-100/30 text-beige-100 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
              🎯 Join 500+ Members Getting Exclusive Deals
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            data-testid="text-community-title"
          >
            Join the <span className="gradient-text pulse-glow">KGS CREW Community</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-testid="text-community-subtitle"
          >
            Get insider access to Pennsylvania's most exclusive firearms community. 
            Members save more, shoot more, and connect with fellow enthusiasts.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button 
              className="bg-beige-100 hover:bg-beige-200 text-noir-900 font-bold shadow-lg hover:shadow-xl px-8 py-4 rounded-lg text-lg btn-hover-effect magnetic-btn ripple"
              onClick={() => {
                // This will be replaced with the actual Go HighLevel link
                window.open('#', '_blank');
              }}
              data-testid="button-join-community"
            >
              <Users className="w-5 h-5 mr-2" />
              Join The Community - It's FREE
            </Button>
            <p className="text-sm text-gray-400 mt-4">
              No spam. Just exclusive deals and firearms content.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-testid="text-benefits-title">
              Why Join the KGS CREW Community?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto" data-testid="text-benefits-subtitle">
              Members get exclusive perks you won't find anywhere else
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="glass-effect p-8 rounded-xl border border-noir-700/50 group relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                data-testid={`benefit-${index}`}
              >
                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-beige-100/5 via-beige-100/10 to-beige-100/5 rounded-xl opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 bg-beige-100/10 rounded-xl flex items-center justify-center mb-6 relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <benefit.icon className="w-8 h-8 text-beige-100 relative z-10" />
                </motion.div>
                
                {/* Content */}
                <motion.h3 
                  className="text-xl font-bold text-white mb-3 relative z-10"
                  data-testid={`benefit-title-${index}`}
                >
                  {benefit.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-400 relative z-10"
                  data-testid={`benefit-description-${index}`}
                >
                  {benefit.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-noir-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Active Members" },
              { value: "$100K+", label: "Saved by Members" },
              { value: "50+", label: "Monthly Deals" },
              { value: "24/7", label: "Community Access" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`stat-${index}`}
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-noir-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Members Are Saying
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Saved $300 on my last purchase thanks to member-only pricing. Best decision I've made!",
                author: "Mike R.",
                location: "Harrisburg, PA"
              },
              {
                quote: "The community events are incredible. Met some great people and improved my shooting skills.",
                author: "Sarah L.",
                location: "Carlisle, PA"
              },
              {
                quote: "Priority appointments mean I never have to wait. VIP treatment every single time.",
                author: "John D.",
                location: "Mechanicsburg, PA"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                className="glass-effect p-6 rounded-xl border border-noir-700/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`testimonial-${index}`}
              >
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="text-beige-100 font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.location}</p>
                </div>
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
            Ready to Join Pennsylvania's Most Exclusive Firearms Community?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            It's FREE to join. No credit card required. Cancel anytime.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Button 
              className="bg-beige-100 hover:bg-beige-200 text-noir-900 font-bold shadow-lg hover:shadow-xl px-8 py-4 rounded-lg text-lg"
              onClick={() => {
                // This will be replaced with the actual Go HighLevel link
                window.open('#', '_blank');
              }}
            >
              <Users className="w-5 h-5 mr-2" />
              Yes, I Want Exclusive Deals!
            </Button>
            <p className="text-sm text-gray-400">
              Join 500+ members saving big on firearms
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}