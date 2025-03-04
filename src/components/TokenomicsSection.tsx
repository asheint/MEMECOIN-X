import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { PieChart, Flame, Lock, Coins, Rocket } from 'lucide-react';

const TokenomicsSection: React.FC = () => {
  const [activeSegment, setActiveSegment] = useState<string | null>(null);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  
  const tokenomics = [
    { id: 'liquidity', name: 'Liquidity Pool', percentage: 40, color: 'bg-blue-500', icon: <Coins className="w-6 h-6" /> },
    { id: 'team', name: 'Team & Development', percentage: 15, color: 'bg-purple-500', icon: <Lock className="w-6 h-6" /> },
    { id: 'marketing', name: 'Marketing', percentage: 20, color: 'bg-pink-500', icon: <Rocket className="w-6 h-6" /> },
    { id: 'burn', name: 'Burn Mechanism', percentage: 10, color: 'bg-red-500', icon: <Flame className="w-6 h-6" /> },
    { id: 'community', name: 'Community Rewards', percentage: 15, color: 'bg-green-500', icon: <PieChart className="w-6 h-6" /> },
  ];
  
  const evolutionTimeline = [
    { phase: 'Phase 1', title: 'Meme Genesis', description: 'Initial meme coin functionality with community building focus' },
    { phase: 'Phase 2', title: 'Utility Expansion', description: 'NFT integration and governance token capabilities' },
    { phase: 'Phase 3', title: 'Ecosystem Growth', description: 'Cross-chain compatibility and DeFi integrations' },
    { phase: 'Phase 4', title: 'Metaverse Integration', description: 'Virtual world presence and gaming applications' },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  
  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden" id="tokenomics">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-indigo-900/30 to-transparent"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl"></div>
      
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-[0_2px_10px_rgba(139,92,246,0.3)]">
            Tokenomics Theater
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Transparent allocation with innovative burn mechanisms and liquidity management
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square relative flex items-center justify-center">
              {/* 3D Pie Chart Visualization with glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
              
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto relative">
                {tokenomics.map((segment, index) => {
                  const startAngle = tokenomics
                    .slice(0, index)
                    .reduce((sum, item) => sum + item.percentage, 0) * 3.6;
                  const endAngle = startAngle + segment.percentage * 3.6;
                  const isActive = activeSegment === segment.id;
                  
                  return (
                    <motion.div
                      key={segment.id}
                      className={`absolute inset-0 ${isActive ? 'z-10' : 'z-0'}`}
                      initial={false}
                      animate={{
                        scale: isActive ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      onMouseEnter={() => setActiveSegment(segment.id)}
                      onMouseLeave={() => setActiveSegment(null)}
                    >
                      <div 
                        className={`absolute inset-0 rounded-full ${segment.color} opacity-80 shadow-lg`}
                        style={{
                          clipPath: `path('M 100 100 L 100 0 A 100 100 0 ${
                            endAngle - startAngle > 180 ? 1 : 0
                          } 1 ${
                            100 + 100 * Math.sin((endAngle * Math.PI) / 180)
                          } ${
                            100 - 100 * Math.cos((endAngle * Math.PI) / 180)
                          } L 100 100')`,
                          transform: `rotate(${startAngle}deg)`,
                        }}
                      />
                    </motion.div>
                  );
                })}
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-purple-900/80 backdrop-blur-sm flex items-center justify-center shadow-lg border border-purple-500/30">
                    <div className="text-center">
                      <p className="text-lg font-bold">Total Supply</p>
                      <p className="text-2xl font-bold text-pink-400">1,000,000,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              {tokenomics.map((segment) => (
                <motion.div
                  key={segment.id}
                  className={`p-4 rounded-xl backdrop-blur-sm border ${
                    activeSegment === segment.id
                      ? 'bg-purple-800/50 border-purple-400 shadow-lg shadow-purple-500/20'
                      : 'bg-purple-900/30 border-purple-700/50 hover:bg-purple-800/40 hover:border-purple-600/50'
                  } cursor-pointer transition-all duration-300`}
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={() => setActiveSegment(segment.id)}
                  onMouseLeave={() => setActiveSegment(null)}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg ${segment.color.replace('bg-', 'bg-')} shadow-inner`}>
                      {segment.icon}
                    </div>
                    <h3 className="font-bold">{segment.name}</h3>
                  </div>
                  <p className="text-2xl font-bold">{segment.percentage}%</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="relative"
          >
            <h3 className="text-2xl font-bold mb-6 text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Meme Evolution Timeline
            </h3>
            
            <div className="relative">
              {/* Timeline line with gradient */}
              <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
              
              {/* Timeline items */}
              <div className="space-y-8 relative">
                {evolutionTimeline.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="ml-12 relative"
                  >
                    {/* Timeline dot with glow */}
                    <div className="absolute -left-12 top-1 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
                      <span className="text-xs font-bold">{index + 1}</span>
                    </div>
                    
                    <div className="bg-purple-900/40 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 hover:border-purple-400/50 transition-colors shadow-lg hover:shadow-purple-500/10 group">
                      <span className="text-sm font-semibold text-purple-300">{item.phase}</span>
                      <h4 className="text-xl font-bold mb-2 text-pink-300 group-hover:text-pink-200 transition-colors">{item.title}</h4>
                      <p className="text-purple-200">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div
              variants={itemVariants}
              className="mt-8 p-6 bg-gradient-to-r from-pink-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl border border-pink-500/30 shadow-lg"
            >
              <h4 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">Team Vesting Schedule</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 group">
                  <div className="w-8 h-8 rounded-full bg-pink-900/50 flex items-center justify-center group-hover:bg-pink-800/50 transition-colors">
                    <Lock className="w-4 h-4 text-pink-400" />
                  </div>
                  <span>6 months cliff for team tokens</span>
                </li>
                <li className="flex items-center gap-2 group">
                  <div className="w-8 h-8 rounded-full bg-pink-900/50 flex items-center justify-center group-hover:bg-pink-800/50 transition-colors">
                    <Lock className="w-4 h-4 text-pink-400" />
                  </div>
                  <span>24 months linear vesting thereafter</span>
                </li>
                <li className="flex items-center gap-2 group">
                  <div className="w-8 h-8 rounded-full bg-pink-900/50 flex items-center justify-center group-hover:bg-pink-800/50 transition-colors">
                    <Lock className="w-4 h-4 text-pink-400" />
                  </div>
                  <span>Smart contract enforced with clawback function</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;