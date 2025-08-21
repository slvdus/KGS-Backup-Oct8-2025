import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Package, CreditCard, ChevronDown, ChevronUp, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Policies() {
  const [expandedSection, setExpandedSection] = useState<string | null>("instructions");

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const policySection = [
    {
      id: "instructions",
      title: "FFL Instructions & Policies",
      icon: FileText,
      content: [
        {
          heading: "IMPORTANT! (MUST READ)",
          items: [
            "If your order contained a pistol, rifle, shotgun, FCU, or frame: we must ship it to an FFL in your state of residence.",
            "If you entered the FFL license number at checkout and we have their information on file, no further action is required. If you provided their name and/or address, we would look for them in our database. If we don't have their information on file, we'll need a copy of their FFL.",
            "You can email us your FFL information by responding to your order confirmation. If you want to have your dealer send us their info, please have them email us at KGSCrewInc@gmail.com and reference your order number.",
            "We do not have a fax machine and also do not have a phone that accepts text messages for FFL copies. Email is the preferred method.",
            "If you or your dealer need a copy of our FFL, we have one available upon request by emailing KGSCrewInc@gmail.com.",
            "FFL orders take a little longer than our standard processing time but are usually shipped in 1-2 business days from the time we receive your FFL information.",
            "Make sure you verify with your dealer that the item you are purchasing is legal in your state and that they will accept the transfer."
          ]
        },
        {
          heading: "CA Customers",
          items: [
            "Gen 3 Glocks are the only Glock pistols allowed in CA unless you are LE. If you ordered a Gen 4 or Gen 5 frame or pistol, they are NOT legal in CA and will be sent back.",
            "Make sure you verify with your dealer that the item you are purchasing is legal in your state and that they will accept the transfer. We do NOT accept returns due to a firearm being illegal for you to possess in your state of residence.",
            "The California DOJ requires us to send a Firearms Shipment Verification with every firearm order. We will need the CL number of your FFL in addition to their license.",
            "Please have your dealer email us a copy of their license and CL number to KGSCrewInc@gmail.com and reference your order number."
          ]
        }
      ]
    },
    {
      id: "shipping",
      title: "Shipping & Compliance",
      icon: Package,
      content: [
        {
          heading: "Legal Compliance",
          items: [
            "All shipments are subject to federal, state, and local laws. Products will only be shipped to locations where they are legal to possess.",
            "Users are responsible for ensuring they are legally eligible to receive ordered items in their jurisdiction.",
            "KGS CREW reserves the right to refuse or cancel any order that may violate applicable laws."
          ]
        },
        {
          heading: "Standard Shipping Process",
          items: [
            "Non-Firearm Products: Distributors will typically ship orders directly to the user's residence (drop shipping), except where prohibited by law.",
            "Firearms: All firearm shipments must be sent to a Federal Firearms License (FFL) dealer of the user's choice.",
            "Ammunition: Some states require ammunition to be shipped to an FFL dealer rather than directly to the customer. Users must comply with their state's regulations.",
            "Shipping Timeline: Orders are typically processed within 1-3 business days, with a maximum of 5 business days during peak periods.",
            "Tracking: Users will receive notification and tracking information once their order has been shipped."
          ]
        },
        {
          heading: "FFL Dealers",
          items: [
            "We provide a list of recommended FFL dealers for firearm transfers.",
            "Users may choose any FFL dealer with a valid license who is willing to accept the transfer and provide a copy of their license."
          ]
        },
        {
          heading: "Non-Drop-Shipping Manufacturers",
          items: [
            "Some manufacturers do not allow direct drop-shipping to end users.",
            "In these cases, products will be shipped to KGS CREW's facility first, then forwarded to the user or their chosen FFL dealer (for firearms).",
            "Orders from non-drop-shipping manufacturers may incur higher shipping fees and longer transit times.",
            "A list of manufacturers that do not allow drop-shipping is available for users reference."
          ]
        },
        {
          heading: "Additional Shipping Information",
          items: [
            "KGS CREW is committed to ensuring all products are shipped as quickly as possible, regardless of the shipping method required.",
            "Shipping fees may vary based on the product, manufacturer, shipping method, and destination. Any additional fees will be clearly communicated before order confirmation.",
            "At this time, KGS CREW only facilitates shipments within the United States, in compliance with all applicable federal and state laws.",
            "In the event of a lost or damaged shipment, users should contact KGS CREW customer service immediately for assistance in resolving the issue."
          ]
        }
      ]
    },
    {
      id: "terms",
      title: "Terms of Purchase",
      icon: CreditCard,
      content: [
        {
          heading: "Returns",
          items: [
            "Contact us for a Return Merchandise Authorization (RMA) request within 10 business days of receipt.",
            "Unopened items in original packaging: Exchange, store credit, or refund less 25% restocking fee.",
            "Products must be returned within 10 business days of RMA issuance.",
            "15% open box fee plus 25% restocking fee (40% total) for opened sealed products.",
            "Non-returnable items: Special orders, custom configurations, used items, firearms after ATF transfer paperwork starts, illumination devices, electronic sights, optics, and night vision equipment.",
            "Customer is responsible for shipping charges both ways on returns."
          ]
        },
        {
          heading: "Firearms Sales",
          items: [
            "Used Firearms: All descriptions are honest and based on actual items. All sales on used items are final.",
            "All firearms will ONLY be shipped to licensed FFL dealers.",
            "Many firearms, magazines and parts may be restricted in your area. Check local regulations before ordering.",
            "New firearms are shipped in original manufacturer's box with accessories and warranty.",
            "Special orders must be picked up within 90 days or will be considered abandoned."
          ]
        },
        {
          heading: "Ammunition Purchases",
          items: [
            "Must be 18+ for rifle/shotgun ammunition, 21+ for handgun ammunition.",
            "All ammunition shipped ground with adult signature required.",
            "Ammunition sales are FINAL - No returns accepted.",
            "Always use correct ammunition for your specific firearms."
          ]
        },
        {
          heading: "Transfers",
          items: [
            "Standard Transfers: $35.00 for first non-NFA transfer, $10 for each additional per shipment.",
            "Blind Transfers: $100 non-negotiable fee for transfers without pre-payment or prior knowledge.",
            "Items must be picked up within 30 days of notification or $15/day storage fees apply.",
            "After 90 days or when storage fees exceed item value, items are considered abandoned."
          ]
        },
        {
          heading: "Layaway",
          items: [
            "Available for new inventory only.",
            "Default on payment or background check denial results in forfeiture of all payments.",
            "Can be upgraded once to higher value item but cannot be downgraded.",
            "Follows original payment schedule agreed upon at creation."
          ]
        },
        {
          heading: "Consignments",
          items: [
            "Minimum 90-day listing period required.",
            "20% consignment fee deducted from sale price.",
            "Items listed on website and other marketplaces.",
            "Fee collected even if owner removes item from consignment."
          ]
        },
        {
          heading: "General Policies",
          items: [
            "Online price and description errors: We reserve the right to refuse orders with pricing or description errors.",
            "Order fulfillment: Orders shipped within 3-10 business days via UPS, FedEx, or USPS.",
            "Customer service available through our Contact Us page for order issues or questions.",
            "This policy is subject to change."
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-noir-900" data-testid="page-policies">
      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-20 pb-8 sm:pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-noir-900 via-noir-800/50 to-noir-900" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Store <span className="gradient-text">Policies</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              Important information about purchases, shipping, and compliance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-4 bg-noir-800/50 border-y border-noir-700/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-beige-100">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm sm:text-base">
              Please read all policies carefully before making a purchase. Contact us at KGSCrewInc@gmail.com with any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {policySection.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-effect border-noir-700/50 overflow-hidden">
                  <CardHeader 
                    className="cursor-pointer hover:bg-noir-800/30 transition-colors"
                    onClick={() => toggleSection(section.id)}
                  >
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-beige-100/10 rounded-lg flex items-center justify-center">
                          <section.icon className="w-5 h-5 text-beige-100" />
                        </div>
                        <span className="text-xl text-white">{section.title}</span>
                      </div>
                      {expandedSection === section.id ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </CardTitle>
                  </CardHeader>
                  
                  <AnimatePresence>
                    {expandedSection === section.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CardContent className="pt-0">
                          <div className="space-y-6">
                            {section.content.map((subsection, subIndex) => (
                              <div key={subIndex} className="border-l-2 border-beige-100/20 pl-4">
                                <h3 className="text-lg font-semibold text-beige-100 mb-3">
                                  {subsection.heading}
                                </h3>
                                <ul className="space-y-2">
                                  {subsection.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-start gap-2">
                                      <span className="text-beige-100/60 mt-1.5">•</span>
                                      <p className="text-gray-300 text-sm sm:text-base">{item}</p>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Information */}
          <motion.div
            className="mt-12 glass-effect p-6 sm:p-8 rounded-xl border border-noir-700/50 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">Questions?</h2>
            <p className="text-gray-400 mb-6">
              We're here to help with any questions about our policies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:KGSCrewInc@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-beige-100 hover:bg-beige-200 text-noir-900 font-bold rounded-lg transition-colors"
              >
                Email Us
              </a>
              <a 
                href="tel:717-249-0000"
                className="inline-flex items-center justify-center px-6 py-3 border border-beige-100/30 text-beige-100 hover:bg-beige-100/10 rounded-lg transition-colors"
              >
                Call 717-249-0000
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}