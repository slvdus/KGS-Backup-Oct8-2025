import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/cart-context";
import { useLocation } from "wouter";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHelpTooltip, setShowHelpTooltip] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "👋 Welcome to KGS CREW! I'm your personal firearms expert. How can I help you find the perfect firearm today?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Get cart state and location
  const { isOpen: isCartOpen } = useCart();
  const [location] = useLocation();
  
  // Only show on home, product detail, and cart pages
  const shouldShowChatbot = () => {
    if (isCartOpen) return false; // Hide when cart slider is open
    
    const allowedPaths = [
      '/',           // Home page
      '/cart',       // Cart page
    ];
    
    // Check if current path is in allowed paths or is a product page
    return allowedPaths.includes(location) || location.startsWith('/product/');
  };
  
  // Show help tooltip for 3 seconds when component mounts
  useEffect(() => {
    if (!isOpen && shouldShowChatbot()) {
      const timer = setTimeout(() => {
        setShowHelpTooltip(true);
        
        // Hide tooltip after 3 seconds
        const hideTimer = setTimeout(() => {
          setShowHelpTooltip(false);
        }, 3000);
        
        return () => clearTimeout(hideTimer);
      }, 1000); // Show after 1 second delay
      
      return () => clearTimeout(timer);
    }
  }, [location]); // Re-trigger when location changes
  
  // Don't render if conditions aren't met
  if (!shouldShowChatbot()) {
    return null;
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Demo responses for common questions
  const getDemoResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes("price") || input.includes("cost")) {
      return "We offer Pennsylvania's best prices on firearms! Our current specials include Glock 19 Gen 5 at $549.99 and AR-15 rifles starting from $799.99. Would you like to see our full catalog?";
    }
    if (input.includes("appointment") || input.includes("visit")) {
      return "We operate by appointment only to provide VIP service. You can schedule your appointment by calling 717-249-0000 or visiting our Contact page. Our team will ensure you get personalized attention!";
    }
    if (input.includes("location") || input.includes("where")) {
      return "We're located at 10 Vale Road, Newville, PA 17241. We're open by appointment only to ensure each customer gets the VIP treatment they deserve!";
    }
    if (input.includes("transfer") || input.includes("ffl")) {
      return "Yes! We offer FFL transfers starting at $25. We handle all the paperwork and background checks to make the process smooth and easy. Visit our Services page for more details.";
    }
    if (input.includes("nfa") || input.includes("suppressor") || input.includes("silencer")) {
      return "We're a Class 3 SOT dealer! We can help you with suppressors, SBRs, and other NFA items. Our team will guide you through the entire process. Contact us to learn more!";
    }
    if (input.includes("ammo") || input.includes("ammunition")) {
      return "We stock a wide variety of ammunition including 9mm, 5.56, .223, 12GA, and more. Federal 9mm 115gr FMJ boxes are currently on sale for $24.99!";
    }
    if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
      return "Hello! I'm here to help you find the perfect firearm or answer any questions about our services. What are you looking for today?";
    }
    if (input.includes("hours") || input.includes("open")) {
      return "We're open by appointment only to provide personalized service. Call us at 717-249-0000 to schedule your VIP appointment!";
    }
    
    // Default response
    return "That's a great question! For detailed information, I recommend calling us at 717-249-0000 or visiting our store. Our expert team will provide personalized assistance. Is there anything specific about our inventory or services I can help with?";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot typing and response
    setTimeout(() => {
      const botResponse: Message = {
        id: `bot-${Date.now()}`,
        text: getDemoResponse(inputValue),
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <>
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsOpen(true);
                setShowHelpTooltip(false);
              }}
              className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-beige-100 to-beige-200 rounded-full shadow-2xl flex items-center justify-center group"
            >
              <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-noir-900" />
              <div className="absolute -top-1 -right-1">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
              </div>
            </motion.button>
            
            {/* Help Tooltip */}
            <AnimatePresence>
              {showHelpTooltip && (
                <motion.div
                  initial={{ opacity: 0, x: 20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="fixed bottom-8 right-24 z-40 pointer-events-none"
                >
                  <div className="relative">
                    <div className="bg-gradient-to-r from-beige-100 to-beige-200 text-noir-900 px-4 py-2 rounded-lg shadow-xl font-medium text-sm whitespace-nowrap">
                      <span className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Click if you need help
                      </span>
                    </div>
                    {/* Arrow pointing to button */}
                    <div className="absolute top-1/2 -right-2 transform -translate-y-1/2">
                      <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-beige-200"></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 h-[70vh] sm:h-[600px] max-h-[80vh] glass-effect border border-noir-700/50 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-noir-800 to-noir-900 p-4 border-b border-noir-700/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-r from-beige-100 to-beige-200 rounded-full flex items-center justify-center">
                      <Bot className="w-6 h-6 text-noir-900" />
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-noir-800"></span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">KGS Expert</h3>
                    <p className="text-xs text-beige-100/60">Always here to help</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-noir-700/50 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-beige-100/70" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-2 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.sender === "bot" && (
                    <div className="w-8 h-8 bg-noir-700/50 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-beige-100" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-beige-100 to-beige-200 text-noir-900"
                        : "bg-noir-700/50 text-white border border-noir-600/50"
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === "user" ? "text-noir-700" : "text-beige-100/50"
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                  {message.sender === "user" && (
                    <div className="w-8 h-8 bg-gradient-to-r from-beige-100 to-beige-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-noir-900" />
                    </div>
                  )}
                </motion.div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex gap-2 justify-start"
                >
                  <div className="w-8 h-8 bg-noir-700/50 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-beige-100" />
                  </div>
                  <div className="bg-noir-700/50 px-4 py-3 rounded-2xl border border-noir-600/50">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-beige-100/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                      <span className="w-2 h-2 bg-beige-100/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                      <span className="w-2 h-2 bg-beige-100/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="px-3 sm:px-4 py-2 border-t border-noir-700/50 bg-noir-800/30">
              <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                {["View Catalog", "Book Appointment", "FFL Transfer", "Contact Us"].map((action) => (
                  <button
                    key={action}
                    onClick={() => {
                      setInputValue(action);
                      handleSendMessage();
                    }}
                    className="flex-shrink-0 px-3 py-1.5 bg-noir-700/40 hover:bg-noir-700/60 active:bg-noir-700/80 border border-noir-600/50 rounded-full text-xs text-beige-100 whitespace-nowrap transition-all transform hover:scale-105 active:scale-95"
                  >
                    {action}
                  </button>
                ))}
              </div>
              <div className="sm:hidden text-center mt-1">
                <span className="text-[10px] text-beige-100/30">Swipe for more options →</span>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-noir-700/50">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2.5 bg-noir-800/50 border border-noir-700/50 rounded-xl text-white placeholder-beige-100/40 focus:outline-none focus:border-beige-100/50 transition-colors"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="px-4 py-2.5 bg-gradient-to-r from-beige-100 to-beige-200 hover:from-beige-200 hover:to-beige-100 text-noir-900 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-xs text-beige-100/40 mt-2 text-center">
                AI Assistant • Instant Responses 24/7
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}