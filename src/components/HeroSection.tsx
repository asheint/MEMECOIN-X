import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, TrendingUp, Users, DollarSign, ChevronDown } from 'lucide-react';
import MascotCanvas from './3D/MascotCanvas';

const HeroSection: React.FC = () => {
  const [raisedAmount, setRaisedAmount] = useState(1250000);
  const [trendingRank, setTrendingRank] = useState({ twitter: 3, reddit: 2, telegram: 1, discord: 4, tiktok: 2 });
  const [communityMembers, setCommunityMembers] = useState(24567);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effects based on scroll
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Simulated data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRaisedAmount(prev => prev + Math.floor(Math.random() * 10000));
      setCommunityMembers(prev => prev + Math.floor(Math.random() * 10));
      setTrendingRank(prev => ({
        twitter: Math.max(1, prev.twitter + (Math.random() > 0.7 ? -1 : 0)),
        reddit: Math.max(1, prev.reddit + (Math.random() > 0.7 ? -1 : 0)),
        telegram: Math.max(1, prev.telegram + (Math.random() > 0.7 ? -1 : 0)),
        discord: Math.max(1, prev.discord + (Math.random() > 0.7 ? -1 : 0)),
        tiktok: Math.max(1, prev.tiktok + (Math.random() > 0.7 ? -1 : 0)),
      }));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Parallax effect for particles
  useEffect(() => {
    if (!containerRef.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const particles = document.querySelectorAll('.particle');
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      particles.forEach((particle, i) => {
        const speed = 1 + i % 5;
        const el = particle as HTMLElement;
        el.style.transform = `translate(${x * speed * 10}px, ${y * speed * 10}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden" ref={containerRef}>
      {/* Particle background */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div 
          key={i}
          className="particle absolute rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-20 backdrop-blur-sm"
          style={{
            width: `${Math.random() * 100 + 20}px`,
            height: `${Math.random() * 100 + 20}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transition: 'transform 0.2s ease-out',
          }}
        />
      ))}
      
      <motion.div 
        className="container mx-auto grid md:grid-cols-2 gap-8 items-center z-10"
        style={{ y, opacity }}
      >
        <div className="text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-500 drop-shadow-[0_5px_20px_rgba(219,39,119,0.3)]">
              MEMECOIN X
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-200">
              The next evolution in meme finance. Where viral culture meets institutional-grade crypto.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full font-bold text-lg hover:from-pink-500 hover:to-purple-500 transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-pink-500/20">
              Join Presale
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-purple-400 rounded-full font-bold text-lg hover:bg-purple-900/30 transform hover:scale-105 transition duration-300 backdrop-blur-sm">
              View Whitepaper
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center"
          >
            <div className="bg-purple-900/50 backdrop-blur-sm p-4 rounded-xl border border-purple-500/30 hover:border-purple-400/50 transition-colors group">
              <DollarSign className="w-8 h-8 mx-auto mb-2 text-green-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-green-400">${(raisedAmount / 1000000).toFixed(2)}M</h3>
              <p className="text-purple-200">Raised</p>
            </div>
            
            <div className="bg-purple-900/50 backdrop-blur-sm p-4 rounded-xl border border-purple-500/30 hover:border-purple-400/50 transition-colors group">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-pink-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-pink-400">#{Math.min(...Object.values(trendingRank))}</h3>
              <p className="text-purple-200">Trending</p>
            </div>
            
            <div className="bg-purple-900/50 backdrop-blur-sm p-4 rounded-xl border border-purple-500/30 hover:border-purple-400/50 transition-colors col-span-2 md:col-span-1 group">
              <Users className="w-8 h-8 mx-auto mb-2 text-cyan-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-cyan-400">{communityMembers.toLocaleString()}</h3>
              <p className="text-purple-200">Community</p>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="h-[400px] md:h-[500px] w-full relative"
        >
          {/* Glow effect behind the 3D model */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl transform -translate-y-1/4"></div>
          
          <div className="relative h-full w-full">
            <MascotCanvas />
          </div>
          
          {/* Floating badges */}
          <motion.div 
            className="absolute top-10 right-10 bg-gradient-to-r from-pink-600 to-purple-600 px-3 py-1 rounded-full text-xs font-bold shadow-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            100x Potential
          </motion.div>
          
          <motion.div 
            className="absolute bottom-10 left-10 bg-gradient-to-r from-blue-600 to-cyan-600 px-3 py-1 rounded-full text-xs font-bold shadow-lg"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            Audited
          </motion.div>
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <p className="text-purple-300 mb-2 text-sm">Scroll to explore</p>
        <ChevronDown className="w-6 h-6 animate-bounce text-purple-300" />
      </motion.div>
    </section>
  );
};

export default HeroSection;