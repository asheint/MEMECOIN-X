import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket, Zap, Globe, Gamepad2 } from 'lucide-react';

const RoadmapSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const roadmapItems = [
    {
      phase: 'Phase 1',
      title: 'Meme Genesis',
      description: 'Launch of the token with initial meme functionality and community building',
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-pink-500 to-purple-500',
      items: [
        'Token launch on Ethereum',
        'Initial community building',
        'Meme contest platform',
        'First CEX listing',
        'Community governance setup'
      ],
      status: 'In Progress',
      completion: 60
    },
    {
      phase: 'Phase 2',
      title: 'Utility Expansion',
      description: 'Adding utility features and expanding the ecosystem',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-purple-500 to-blue-500',
      items: [
        'NFT collection launch',
        'Staking platform',
        'Multi-chain expansion',
        'Governance token integration',
        'Partnership announcements'
      ],
      status: 'Upcoming',
      completion: 0
    },
    {
      phase: 'Phase 3',
      title: 'Ecosystem Growth',
      description: 'Building a comprehensive ecosystem around the token',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      items: [
        'DeFi integrations',
        'Cross-chain bridges',
        'DAO establishment',
        'Developer grants program',
        'Major exchange listings'
      ],
      status: 'Upcoming',
      completion: 0
    },
    {
      phase: 'Phase 4',
      title: 'Metaverse Integration',
      description: 'Expanding into virtual worlds and gaming applications',
      icon: <Gamepad2 className="w-8 h-8" />,
      color: 'from-cyan-500 to-green-500',
      items: [
        'Metaverse land acquisition',
        'Play-to-earn game launch',
        'Virtual events platform',
        'AR/VR meme experiences',
        'Real-world partnerships'
      ],
      status: 'Upcoming',
      completion: 0
    }
  ];
  
  return (
    <section ref={ref} className="py-20 px-4 relative" id="roadmap">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-purple-900/20"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
            Meme Evolution Roadmap
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Our strategic plan to revolutionize the meme coin space
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-gradient-to-b from-purple-900/40 to-blue-900/40 backdrop-blur-sm rounded-xl border border-purple-500/30 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-purple-300">{item.phase}</h4>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
                
                <p className="text-purple-200 mb-6">{item.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {item.items.map((listItem, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${item.color} flex-shrink-0 flex items-center justify-center mt-0.5`}>
                        {item.completion > 0 && i <= Math.floor(item.items.length * (item.completion / 100)) ? (
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <span className="w-3 h-3 rounded-full bg-white/20"></span>
                        )}
                      </div>
                      <span className={item.completion > 0 && i <= Math.floor(item.items.length * (item.completion / 100)) ? 'line-through text-purple-300' : ''}>
                        {listItem}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                    item.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-purple-500/20 text-purple-300'
                  }`}>
                    {item.status}
                  </span>
                  
                  {item.completion > 0 && (
                    <span className="text-sm font-semibold">{item.completion}% Complete</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;