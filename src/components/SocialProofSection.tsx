import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Twitter, MessageCircle, Users, TrendingUp } from 'lucide-react';

const SocialProofSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const twitterPosts = [
    {
      username: 'CryptoWhale',
      handle: '@whale_crypto',
      content: 'Just aped into $MEMEX! This is the most innovative meme coin I\'ve seen in 2025. The tokenomics and security features are next level.',
      likes: 1243,
      retweets: 432,
    },
    {
      username: 'MoonHunter',
      handle: '@moon_hunter',
      content: '$MEMEX is changing the game with their anti-bot measures. Finally a fair launch for everyone! Bullish AF on this one.',
      likes: 876,
      retweets: 321,
    },
    {
      username: 'DeFi_Queen',
      handle: '@defi_queen',
      content: 'The $MEMEX presale dashboard is the most user-friendly I\'ve seen. Multi-chain compatibility from day one is impressive!',
      likes: 654,
      retweets: 198,
    },
  ];
  
  const stats = [
    { label: 'Twitter Followers', value: '124K+', icon: <Twitter className="w-5 h-5" /> },
    { label: 'Telegram Members', value: '87K+', icon: <MessageCircle className="w-5 h-5" /> },
    { label: 'Discord Users', value: '56K+', icon: <Users className="w-5 h-5" /> },
    { label: 'Trending Rank', value: '#1', icon: <TrendingUp className="w-5 h-5" /> },
  ];
  
  return (
    <section ref={ref} className="py-16 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Community Buzz
          </h2>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            See what the crypto community is saying about MEMEX
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Twitter className="w-6 h-6 text-blue-400" />
              <span>Latest from Twitter</span>
            </h3>
            
            <div className="space-y-4">
              {twitterPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="bg-blue-900/20 backdrop-blur-sm p-4 rounded-xl border border-blue-500/30"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-blue-500/30 flex items-center justify-center">
                      <span className="font-bold">{post.username.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-bold">{post.username}</p>
                      <p className="text-sm text-blue-300">{post.handle}</p>
                    </div>
                  </div>
                  <p className="mb-3">{post.content}</p>
                  <div className="flex text-sm text-blue-300">
                    <span className="mr-4">♥ {post.likes}</span>
                    <span>↺ {post.retweets}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-green-400" />
              <span>Community Growth</span>
            </h3>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm p-4 rounded-xl border border-purple-500/30"
                >
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-sm text-purple-300">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gradient-to-r from-green-900/20 to-blue-900/20 backdrop-blur-sm p-6 rounded-xl border border-green-500/30"
            >
              <h4 className="text-lg font-bold mb-4">Sentiment Analysis</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Bullish</span>
                    <span className="font-bold text-green-400">87%</span>
                  </div>
                  <div className="h-2 bg-blue-900/50 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '87%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Neutral</span>
                    <span className="font-bold text-blue-400">10%</span>
                  </div>
                  <div className="h-2 bg-blue-900/50 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Bearish</span>
                    <span className="font-bold text-red-400">3%</span>
                  </div>
                  <div className="h-2 bg-blue-900/50 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full" style={{ width: '3%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;