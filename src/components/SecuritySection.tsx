import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Lock, AlertTriangle, CheckCircle, ExternalLink } from 'lucide-react';

const SecuritySection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const securityFeatures = [
    {
      title: 'Smart Contract Audit',
      description: 'Comprehensive security audit by Certik and Hexens',
      icon: <Shield className="w-8 h-8 text-green-400" />,
      status: 'Completed',
    },
    {
      title: 'Liquidity Locked',
      description: 'Liquidity locked for 2 years with time-lock contract',
      icon: <Lock className="w-8 h-8 text-blue-400" />,
      status: 'Verified',
    },
    {
      title: 'Anti-Rug Pull',
      description: 'Ownership renounced after initial setup',
      icon: <AlertTriangle className="w-8 h-8 text-yellow-400" />,
      status: 'Implemented',
    },
    {
      title: 'Anti-Bot Measures',
      description: 'Advanced protection against front-running and sniping bots',
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      status: 'Active',
    },
  ];
  
  const threatDetectionItems = [
    'Honeypot Detection',
    'Rug Pull Pattern Analysis',
    'Malicious Contract Scanning',
    'Unusual Transaction Monitoring',
    'Wallet Reputation Scoring',
    'Liquidity Removal Alerts',
  ];
  
  return (
    <section ref={ref} className="py-20 px-4 relative" id="security">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-blue-900/20"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-400 to-blue-400">
            Security Layer
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Institutional-grade security measures to protect your investment
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8">Security Features</h3>
            
            <div className="grid gap-6">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 flex gap-4"
                >
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-full bg-purple-800/50 flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-xl font-bold">{feature.title}</h4>
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full">
                        {feature.status}
                      </span>
                    </div>
                    <p className="text-purple-200">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 p-6 bg-gradient-to-r from-green-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl border border-green-500/30"
            >
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <h4 className="text-xl font-bold">Audit Partners</h4>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="#" 
                  className="flex items-center justify-center gap-2 p-4 bg-purple-900/30 rounded-lg hover:bg-purple-800/30 transition-colors"
                >
                  <span className="font-bold">Certik</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-center gap-2 p-4 bg-purple-900/30 rounded-lg hover:bg-purple-800/30 transition-colors"
                >
                  <span className="font-bold">Hexens</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-8">Real-Time Threat Detection</h3>
            
            <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-sm p-8 rounded-xl border border-blue-500/30 mb-8">
              <div className="grid grid-cols-2 gap-6">
                {threatDetectionItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 backdrop-blur-sm rounded-xl border border-purple-500/30 overflow-hidden"
            >
              <div className="p-6">
                <h4 className="text-xl font-bold mb-4">Security Dashboard</h4>
                <p className="text-purple-200 mb-6">
                  Our proprietary security monitoring system continuously scans for potential threats and vulnerabilities.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-purple-900/30 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span>Contract Security Score</span>
                      <span className="font-bold text-green-400">98/100</span>
                    </div>
                    <div className="h-2 bg-purple-800 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-900/30 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span>Liquidity Health</span>
                      <span className="font-bold text-green-400">100%</span>
                    </div>
                    <div className="h-2 bg-purple-800 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-900/30 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span>Ownership Status</span>
                      <span className="font-bold text-yellow-400">Controlled</span>
                    </div>
                    <div className="h-2 bg-purple-800 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                    <p className="text-xs text-purple-300 mt-2">
                      Ownership will be renounced after initial setup and vesting contracts deployment
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-4 flex items-center justify-between">
                <span className="text-sm">Last security scan: 2 minutes ago</span>
                <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1">
                  <span>View Full Report</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;