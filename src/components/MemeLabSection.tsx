import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Image, Sparkles, Share2, ThumbsUp, MessageSquare } from 'lucide-react';

const MemeLabSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [activeTab, setActiveTab] = useState<'trending' | 'latest' | 'create'>('trending');
  
  const trendingMemes = [
    {
      id: 1,
      title: 'When you buy the dip but it keeps dipping',
      likes: 2453,
      comments: 142,
      shares: 876,
    },
    {
      id: 2,
      title: 'Diamond hands vs paper hands',
      likes: 1876,
      comments: 98,
      shares: 543,
    },
    {
      id: 3,
      title: 'Waiting for my 100x gains like',
      likes: 1543,
      comments: 76,
      shares: 321,
    },
    {
      id: 4,
      title: 'How I sleep knowing I bought MEMEX',
      likes: 1234,
      comments: 65,
      shares: 298,
    },
  ];
  
  const latestMemes = [
    {
      id: 5,
      title: 'MEMEX to the moon!',
      likes: 543,
      comments: 32,
      shares: 98,
    },
    {
      id: 6,
      title: 'My portfolio after buying MEMEX',
      likes: 432,
      comments: 21,
      shares: 87,
    },
    {
      id: 7,
      title: 'How it feels to be early on MEMEX',
      likes: 321,
      comments: 18,
      shares: 65,
    },
    {
      id: 8,
      title: 'When someone asks if MEMEX is a good investment',
      likes: 234,
      comments: 12,
      shares: 43,
    },
  ];
  
  const memeTemplates = [
    'Drake Hotline Bling',
    'Distracted Boyfriend',
    'Two Buttons',
    'Change My Mind',
    'Expanding Brain',
    'Surprised Pikachu',
    'Woman Yelling at Cat',
    'Stonks',
  ];
  
  return (
    <section ref={ref} className="py-20 px-4 relative" id="meme-lab">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-indigo-900/20"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
            Meme Lab
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Create, share, and discover the best crypto memes in our community playground
          </p>
        </motion.div>
        
        <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 backdrop-blur-sm rounded-2xl border border-purple-500/30 overflow-hidden">
          <div className="flex border-b border-purple-500/30">
            <button
              className={`flex-1 py-4 px-6 text-center font-semibold ${
                activeTab === 'trending'
                  ? 'bg-purple-500/20 text-white'
                  : 'text-purple-300 hover:bg-purple-500/10'
              }`}
              onClick={() => setActiveTab('trending')}
            >
              Trending Memes
            </button>
            <button
              className={`flex-1 py-4 px-6 text-center font-semibold ${
                activeTab === 'latest'
                  ? 'bg-purple-500/20 text-white'
                  : 'text-purple-300 hover:bg-purple-500/10'
              }`}
              onClick={() => setActiveTab('latest')}
            >
              Latest Memes
            </button>
            <button
              className={`flex-1 py-4 px-6 text-center font-semibold ${
                activeTab === 'create'
                  ? 'bg-purple-500/20 text-white'
                  : 'text-purple-300 hover:bg-purple-500/10'
              }`}
              onClick={() => setActiveTab('create')}
            >
              Create Meme
            </button>
          </div>
          
          <div className="p-6">
            {activeTab === 'trending' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {trendingMemes.map((meme, index) => (
                  <motion.div
                    key={meme.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                    className="bg-purple-900/40 rounded-xl overflow-hidden"
                  >
                    <div className="aspect-square bg-purple-800/50 flex items-center justify-center">
                      <Image className="w-12 h-12 text-purple-400" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-3">{meme.title}</h3>
                      <div className="flex justify-between text-sm text-purple-300">
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="w-4 h-4" />
                          <span>{meme.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="w-4 h-4" />
                          <span>{meme.comments}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Share2 className="w-4 h-4" />
                          <span>{meme.shares}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
            
            {activeTab === 'latest' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {latestMemes.map((meme, index) => (
                  <motion.div
                    key={meme.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                    className="bg-purple-900/40 rounded-xl overflow-hidden"
                  >
                    <div className="aspect-square bg-purple-800/50 flex items-center justify-center">
                      <Image className="w-12 h-12 text-purple-400" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-3">{meme.title}</h3>
                      <div className="flex justify-between text-sm text-purple-300">
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="w-4 h-4" />
                          <span>{meme.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="w-4 h-4" />
                          <span>{meme.comments}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Share2 className="w-4 h-4" />
                          <span>{meme.shares}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
            
            {activeTab === 'create' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="max-w-3xl mx-auto">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4">Create Your Own Meme</h3>
                    <p className="text-purple-200 mb-6">
                      Use our no-code meme generator to create viral content and share it with the community.
                    </p>
                    
                    <div className="bg-purple-900/40 p-6 rounded-xl mb-6">
                      <div className="mb-6">
                        <label className="block text-sm font-medium text-purple-300 mb-2">
                          Select Template
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {memeTemplates.map((template, index) => (
                            <div
                              key={index}
                              className="bg-purple-800/50 p-3 rounded-lg text-center cursor-pointer hover:bg-purple-700/50 transition-colors"
                            >
                              <div className="aspect-square bg-purple-700/50 rounded mb-2 flex items-center justify-center">
                                <Image className="w-8 h-8 text-purple-400" />
                              </div>
                              <span className="text-sm">{template}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label className="block text-sm font-medium text-purple-300 mb-2">
                          Top Text
                        </label>
                        <input
                          type="text"
                          className="w-full bg-purple-800/50 border border-purple-600/30 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="Enter top text"
                        />
                      </div>
                      
                      <div className="mb-6">
                        <label className="block text-sm font-medium text-purple-300 mb-2">
                          Bottom Text
                        </label>
                        <input
                          type="text"
                          className="w-full bg-purple-800/50 border border-purple-600/30 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="Enter bottom text"
                        />
                      </div>
                      
                      <div className="mb-6">
                        <label className="block text-sm font-medium text-purple-300 mb-2">
                          Preview
                        </label>
                        <div className="aspect-video bg-purple-800/50 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <Sparkles className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                            <p className="text-purple-300">Your meme preview will appear here</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <button className="flex-1 py-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg font-bold hover:from-pink-500 hover:to-purple-500 transition-colors">
                          Generate Meme
                        </button>
                        <button className="flex-1 py-3 bg-transparent border border-purple-500 rounded-lg font-bold hover:bg-purple-900/30 transition-colors">
                          Share to Community
                        </button>
                      </div>
                    </div>
                    
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-4 flex items-start gap-4">
                      <div className="shrink-0">
                        <Sparkles className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Earn MEMEX Tokens</h4>
                        <p className="text-sm text-purple-200">
                          Create viral memes and earn MEMEX tokens based on community engagement. The most popular memes each week receive bonus rewards!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemeLabSection;