import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroSection from './components/HeroSection';
import TokenomicsSection from './components/TokenomicsSection';
import PresaleSection from './components/PresaleSection';
import SecuritySection from './components/SecuritySection';
import RoadmapSection from './components/RoadmapSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MemeLabSection from './components/MemeLabSection';
import SocialProofSection from './components/SocialProofSection';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>
      
      <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-10 bg-cover bg-center pointer-events-none"></div>
        
        {/* Animated grid overlay */}
        <div className="fixed inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
        
        {/* Animated gradient orbs */}
        <div className="fixed top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-600/20 blur-3xl animate-float-slow pointer-events-none"></div>
        <div className="fixed bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl animate-float-slow-reverse pointer-events-none"></div>
        <div className="fixed top-3/4 right-1/3 w-64 h-64 rounded-full bg-pink-600/20 blur-3xl animate-float pointer-events-none"></div>
        
        <div className="relative z-10">
          <Navbar />
          
          <main>
            <HeroSection />
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.5 }}
              ref={ref}
            >
              <SocialProofSection />
            </motion.div>
            
            <TokenomicsSection />
            <PresaleSection />
            <SecuritySection />
            <RoadmapSection />
            <MemeLabSection />
          </main>
          
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;