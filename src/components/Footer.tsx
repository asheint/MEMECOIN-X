import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Twitter, MessageCircle, Github, Mail, Shield, FileText, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-purple-900/30 backdrop-blur-md pt-16 pb-8 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      <div className="absolute -top-10 left-1/4 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl"></div>
      <div className="absolute -bottom-10 right-1/4 w-64 h-64 rounded-full bg-pink-600/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center shadow-lg shadow-pink-500/20">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
                MEMEX
              </span>
            </div>
            <p className="text-purple-200 mb-6">
              The next evolution in meme finance. Where viral culture meets institutional-grade crypto.
            </p>
            <div className="flex space-x-3">
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-purple-800/50 flex items-center justify-center hover:bg-purple-700/50 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-purple-800/50 flex items-center justify-center hover:bg-purple-700/50 transition-colors"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <MessageCircle className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-purple-800/50 flex items-center justify-center hover:bg-purple-700/50 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-purple-800/50 flex items-center justify-center hover:bg-purple-700/50 transition-colors"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-purple-200 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover:bg-white transition-colors"></span>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#tokenomics" className="text-purple-200 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover:bg-white transition-colors"></span>
                  <span>Tokenomics</span>
                </a>
              </li>
              <li>
                <a href="#presale" className="text-purple-200 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover:bg-white transition-colors"></span>
                  <span>Presale</span>
                </a>
              </li>
              <li>
                <a href="#security" className="text-purple-200 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover:bg-white transition-colors"></span>
                  <span>Security</span>
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-purple-200 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover:bg-white transition-colors"></span>
                  <span>Roadmap</span>
                </a>
              </li>
              <li>
                <a href="#meme-lab" className="text-purple-200 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover:bg-white transition-colors"></span>
                  <span>Meme Lab</span>
                </a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-purple-200 hover:text-white transition-colors flex items-center gap-2 group">
                  <div className="w-6 h-6 rounded-full bg-blue-900/50 flex items-center justify-center group-hover:bg-blue-800/50 transition-colors">
                    <FileText className="w-3 h-3" />
                  </div>
                  <span>Whitepaper</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-200 hover:text-white transition-colors flex items-center gap-2 group">
                  <div className="w-6 h-6 rounded-full bg-blue-900/50 flex items-center justify-center group-hover:bg-blue-800/50 transition-colors">
                    <Shield className="w-3 h-3" />
                  </div>
                  <span>Audit Reports</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-200 hover:text-white transition-colors flex items-center gap-2 group">
                  <div className="w-6 h-6 rounded-full bg-blue-900/50 flex items-center justify-center group-hover:bg-blue-800/50 transition-colors">
                    <FileText className="w-3 h-3" />
                  </div>
                  <span>Documentation</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-200 hover:text-white transition-colors flex items-center gap-2 group">
                  <div className="w-6 h-6 rounded-full bg-blue-900/50 flex items-center justify-center group-hover:bg-blue-800/50 transition-colors">
                    <Github className="w-3 h-3" />
                  </div>
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-400">Subscribe</h3>
            <p className="text-purple-200 mb-4">
              Get the latest updates and announcements directly to your inbox.
            </p>
            <form className="mb-4 group">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-purple-800/50 border border-purple-600/30 rounded-l-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-r-lg px-4 font-bold hover:from-pink-500 hover:to-purple-500 transition-all shadow-lg group-hover:shadow-pink-500/20"
                >
                  Join
                </button>
              </div>
            </form>
            <p className="text-xs text-purple-300">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </motion.div>
        </div>
        
        <div className="border-t border-purple-700/50 pt-8 mt-8 text-center text-sm text-purple-300 relative">
          <motion.button
            onClick={scrollToTop}
            className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center hover:from-pink-500 hover:to-purple-500 transition-colors shadow-lg"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
          
          <p className="mb-2">
            © 2025 MEMEX. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;