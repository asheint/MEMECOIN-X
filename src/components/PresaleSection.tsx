import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Feather as Ethereum, Coins, RotateCcw, Shield, ArrowRight } from 'lucide-react';

const PresaleSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [selectedChain, setSelectedChain] = useState<'eth' | 'sol' | 'base'>('eth');
  const [raisedAmount, setRaisedAmount] = useState(1250000);
  const [hardcap, setHardcap] = useState(2000000);
  const [purchaseAmount, setPurchaseAmount] = useState('1');
  const [bonusTokens, setBonusTokens] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  
  // Simulated data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRaisedAmount(prev => {
        const newAmount = prev + Math.floor(Math.random() * 10000);
        return newAmount > hardcap ? hardcap : newAmount;
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, [hardcap]);
  
  const spinWheel = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setTimeout(() => {
      const bonus = Math.floor(Math.random() * 20) + 5; // 5-25% bonus
      setBonusTokens(bonus);
      setIsSpinning(false);
    }, 2000);
  };
  
  const progressPercentage = (raisedAmount / hardcap) * 100;
  
  const chainOptions = [
    { id: 'eth', name: 'Ethereum', icon: <Ethereum className="w-5 h-5" /> },
    { id: 'sol', name: 'Solana', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.9844 9.99999H6.01562C5.45312 9.99999 5.17188 9.32812 5.57812 8.92187L11.5625 2.92187C11.8125 2.67187 12.1875 2.67187 12.4375 2.92187L18.4219 8.92187C18.8281 9.32812 18.5469 9.99999 17.9844 9.99999ZM6.01562 14H17.9844C18.5469 14 18.8281 14.6719 18.4219 15.0781L12.4375 21.0781C12.1875 21.3281 11.8125 21.3281 11.5625 21.0781L5.57812 15.0781C5.17188 14.6719 5.45312 14 6.01562 14Z" fill="currentColor"/>
    </svg> },
    { id: 'base', name: 'Base', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 18.5C8.41 18.5 5.5 15.59 5.5 12C5.5 8.41 8.41 5.5 12 5.5C15.59 5.5 18.5 8.41 18.5 12C18.5 15.59 15.59 18.5 12 18.5Z" fill="currentColor"/>
    </svg> },
  ];
  
  return (
    <section ref={ref} className="py-20 px-4 relative" id="presale">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-purple-900/20"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
            Presale Dashboard
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Join the revolution early with our multi-chain presale platform
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-purple-900/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/30"
          >
            <h3 className="text-2xl font-bold mb-6">Presale Progress</h3>
            
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span>Progress</span>
                <span className="font-bold">{progressPercentage.toFixed(2)}%</span>
              </div>
              <div className="h-4 bg-purple-900/50 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-purple-800/30 p-4 rounded-xl">
                <p className="text-sm text-purple-300">Raised</p>
                <p className="text-2xl font-bold">${raisedAmount.toLocaleString()}</p>
              </div>
              <div className="bg-purple-800/30 p-4 rounded-xl">
                <p className="text-sm text-purple-300">Hard Cap</p>
                <p className="text-2xl font-bold">${hardcap.toLocaleString()}</p>
              </div>
              <div className="bg-purple-800/30 p-4 rounded-xl">
                <p className="text-sm text-purple-300">Minimum Buy</p>
                <p className="text-2xl font-bold">$100</p>
              </div>
              <div className="bg-purple-800/30 p-4 rounded-xl">
                <p className="text-sm text-purple-300">Maximum Buy</p>
                <p className="text-2xl font-bold">$50,000</p>
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">Select Chain</h4>
              <div className="flex space-x-4">
                {chainOptions.map((chain) => (
                  <button
                    key={chain.id}
                    className={`flex-1 py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 ${
                      selectedChain === chain.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-transparent'
                        : 'bg-purple-900/30 border border-purple-700/50 hover:bg-purple-800/30'
                    }`}
                    onClick={() => setSelectedChain(chain.id as any)}
                  >
                    {chain.icon}
                    <span>{chain.name}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">Token Price</h4>
              <div className="bg-purple-800/30 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-sm text-purple-300">Current Price</p>
                  <p className="text-2xl font-bold">$0.00025</p>
                </div>
                <div>
                  <p className="text-sm text-purple-300">Listing Price</p>
                  <p className="text-2xl font-bold text-green-400">$0.0005</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-purple-300 mb-2">Presale Ends In</p>
              <div className="grid grid-cols-4 gap-2">
                {['05', '12', '45', '32'].map((value, index) => (
                  <div key={index} className="bg-purple-800/50 p-2 rounded-lg">
                    <p className="text-2xl font-bold">{value}</p>
                    <p className="text-xs">{['Days', 'Hours', 'Minutes', 'Seconds'][index]}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-purple-900/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/30"
          >
            <h3 className="text-2xl font-bold mb-6">Purchase Tokens</h3>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-purple-300 mb-2">
                Amount in USD
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={purchaseAmount}
                  onChange={(e) => setPurchaseAmount(e.target.value)}
                  className="w-full bg-purple-800/30 border border-purple-600/30 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter amount"
                  min="100"
                  max="50000"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span className="text-purple-300">USD</span>
                </div>
              </div>
            </div>
            
            <div className="mb-6 p-4 bg-purple-800/30 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="text-purple-300">You will receive:</span>
                <span className="font-bold">
                  {(Number(purchaseAmount) / 0.00025).toLocaleString()} MEMEX
                </span>
              </div>
              {bonusTokens > 0 && (
                <div className="flex justify-between text-green-400">
                  <span>Bonus tokens:</span>
                  <span className="font-bold">
                    +{bonusTokens}% ({(Number(purchaseAmount) / 0.00025 * bonusTokens / 100).toLocaleString()} MEMEX)
                  </span>
                </div>
              )}
            </div>
            
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">Spin for Bonus Tokens</h4>
              <div className="relative">
                <div className="w-48 h-48 mx-auto relative">
                  <div 
                    className={`w-full h-full rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 ${
                      isSpinning ? 'animate-spin' : ''
                    }`}
                    style={{ 
                      backgroundSize: '200% 200%',
                      animation: isSpinning ? 'gradient-spin 2s linear infinite, spin 2s linear infinite' : 'gradient-spin 5s ease infinite'
                    }}
                  >
                    <div className="absolute inset-2 rounded-full bg-purple-900 flex items-center justify-center">
                      {isSpinning ? (
                        <p className="text-xl font-bold">Spinning...</p>
                      ) : bonusTokens > 0 ? (
                        <p className="text-2xl font-bold text-green-400">+{bonusTokens}%</p>
                      ) : (
                        <p className="text-xl font-bold">Spin Me!</p>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={spinWheel}
                    disabled={isSpinning}
                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-600 to-purple-600 py-2 px-4 rounded-full font-bold text-sm hover:from-pink-500 hover:to-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSpinning ? (
                      <RotateCcw className="w-5 h-5 animate-spin" />
                    ) : (
                      <span>Spin Wheel</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm text-green-400">Anti-Bot Protection Active</span>
              </div>
              
              <div className="grid grid-cols-3 gap-2 mb-4">
                {/* Meme CAPTCHA - simplified version */}
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i}
                    className="aspect-square bg-purple-800/50 rounded-lg flex items-center justify-center cursor-pointer hover:bg-purple-700/50 transition-colors"
                  >
                    <div className="w-16 h-16 rounded-lg bg-purple-700/50"></div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-purple-300 mb-4">Select all meme images to verify you're human</p>
            </div>
            
            <button className="w-full py-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl font-bold text-lg hover:from-green-400 hover:to-blue-400 transform hover:scale-105 transition duration-300 flex items-center justify-center gap-2">
              <span>Buy Tokens</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PresaleSection;