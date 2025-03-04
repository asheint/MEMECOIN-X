import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket, Twitter, MessageCircle, Github } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
          setActiveSection(section.id || 'home');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Home', href: '#', id: 'home' },
    { name: 'Tokenomics', href: '#tokenomics', id: 'tokenomics' },
    { name: 'Presale', href: '#presale', id: 'presale' },
    { name: 'Security', href: '#security', id: 'security' },
    { name: 'Roadmap', href: '#roadmap', id: 'roadmap' },
    { name: 'Meme Lab', href: '#meme-lab', id: 'meme-lab' },
  ];
  
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-purple-900/80 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.a 
            href="#" 
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center shadow-lg shadow-pink-500/20">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
              MEMEX
            </span>
          </motion.a>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`relative text-purple-200 hover:text-white transition-colors ${
                  activeSection === link.id ? 'text-white' : ''
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="#"
              className="w-10 h-10 rounded-full bg-purple-800/50 flex items-center justify-center hover:bg-purple-700/50 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#"
              className="w-10 h-10 rounded-full bg-purple-800/50 flex items-center justify-center hover:bg-purple-700/50 transition-colors"
              whileHover={{ scale: 1.1, rotate: -5 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              <MessageCircle className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#"
              className="w-10 h-10 rounded-full bg-purple-800/50 flex items-center justify-center hover:bg-purple-700/50 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            
            <motion.a
              href="#presale"
              className="px-6 py-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full font-bold hover:from-pink-500 hover:to-purple-500 transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-pink-500/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.9 }}
            >
              Join Presale
            </motion.a>
          </div>
          
          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-purple-900/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className={`text-purple-200 hover:text-white transition-colors ${
                      activeSection === link.id ? 'text-white font-bold' : ''
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
                
                <div className="pt-4 mt-4 border-t border-purple-700/50 grid grid-cols-3 gap-2">
                  <a
                    href="#"
                    className="flex items-center justify-center py-2 bg-purple-800/50 rounded-lg hover:bg-purple-700/50 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center py-2 bg-purple-800/50 rounded-lg hover:bg-purple-700/50 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center py-2 bg-purple-800/50 rounded-lg hover:bg-purple-700/50 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                
                <motion.a
                  href="#presale"
                  className="mt-2 py-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg font-bold text-center hover:from-pink-500 hover:to-purple-500"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  onClick={() => setIsOpen(false)}
                >
                  Join Presale
                </motion.a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;