import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      onLoadingComplete?.();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] bg-noir-900 flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          data-testid="loading-screen"
        >
          {/* Background gradient animation */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-noir-900 via-noir-800 to-noir-900" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-transparent via-beige-100/5 to-transparent"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 1.5,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>

          {/* Animated circles in background */}
          <motion.div
            className="absolute top-1/4 -left-1/4 w-96 h-96 bg-beige-100/3 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-beige-100/3 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />

          {/* Main content container */}
          <div className="relative z-10 flex flex-col items-center justify-center px-4">
            {/* Logo/Brand Name */}
            <motion.div
              className="relative mb-8"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-wider"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="text-white">KGS</span>
                <span className="gradient-text ml-3">CREW</span>
              </motion.h1>
              
              {/* Subtitle */}
              <motion.p
                className="text-beige-100/60 text-sm sm:text-base text-center mt-2 tracking-widest uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Premium Firearms
              </motion.p>
            </motion.div>

            {/* Loading indicator */}
            <motion.div
              className="relative w-48 sm:w-56 md:w-64"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Progress bar background */}
              <div className="h-0.5 bg-noir-700/50 rounded-full overflow-hidden">
                {/* Animated progress bar */}
                <motion.div
                  className="h-full bg-gradient-to-r from-beige-100/50 via-beige-100 to-beige-100/50 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.3, ease: "easeInOut" }}
                />
              </div>

              {/* Loading dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    className="w-1.5 h-1.5 bg-beige-100/50 rounded-full"
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Bottom text */}
            <motion.p
              className="absolute bottom-8 text-noir-600 text-xs tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              LOADING
            </motion.p>
          </div>

          {/* Corner accents */}
          <motion.div
            className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-beige-100/10"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <motion.div
            className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-beige-100/10"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-beige-100/10"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-beige-100/10"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}