import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const Loader: React.FC = () => {
  return (
    <motion.div 
      className="fixed inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 z-50 flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] }
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          transition: { duration: 0.5 }
        }}
        className="relative"
      >
        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
          <Rocket className="w-12 h-12 text-white" />
        </div>
        
        <motion.div 
          className="absolute -inset-3 rounded-full border-4 border-transparent border-t-pink-500 border-r-purple-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, ease: "linear", repeat: Infinity }}
        />
      </motion.div>
      
      <motion.h1 
        className="mt-8 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { delay: 0.3, duration: 0.5 }
        }}
      >
        MEMEX
      </motion.h1>
      
      <motion.div
        className="mt-6 flex space-x-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5 } }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-3 h-3 rounded-full bg-purple-400"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Loader;