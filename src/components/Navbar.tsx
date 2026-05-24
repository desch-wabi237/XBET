import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap, Crown } from 'lucide-react'
import { useStore } from '../store/useStore'
import ThemeSwitcher from './ThemeSwitcher'

const navItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Guides', href: '/guides' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const { isMenuOpen, toggleMenu, theme } = useStore()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Appliquer le thème au body
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const getNavbarStyle = () => {
    if (scrolled) {
      return theme === 'blue' 
        ? 'bg-black/90 backdrop-blur-md border-b border-blue-900/30 shadow-lg'
        : 'bg-black/95 backdrop-blur-md border-b border-yellow-900/30 shadow-lg'
    }
    return theme === 'blue'
      ? 'bg-gradient-to-r from-black via-blue-950/20 to-black'
      : 'bg-gradient-to-r from-black via-yellow-950/20 to-black'
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getNavbarStyle()}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <div className="relative">
                <Crown className={`w-6 h-6 absolute inset-0 blur-sm group-hover:blur-md transition-all ${
                  theme === 'blue' ? 'text-blue-500' : 'text-yellow-500'
                }`} />
                <Zap className={`w-6 h-6 relative z-10 ${
                  theme === 'blue' ? 'text-blue-400' : 'text-yellow-400'
                }`} />
              </div>
              <span className="text-xl font-bold">
                <span className={theme === 'blue' ? 'text-blue-500' : 'text-yellow-500'}>XBET</span>
                <span className="text-white"></span>
                <span className={theme === 'blue' ? 'text-blue-400' : 'text-yellow-400'}></span>
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <span className="text-text-secondary hover:text-primary-light transition-colors duration-300">
                    {item.label}
                  </span>
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    theme === 'blue' ? 'bg-linear-to-r from-blue-500 to-blue-400' : 'bg-linear-to-r from-yellow-500 to-yellow-400'
                  }`} />
                </motion.a>
              ))}
            </div>

            {/* Right section with ThemeSwitcher and CTA */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeSwitcher />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative overflow-hidden group px-6 py-2 rounded-full font-semibold ${
                  theme === 'blue' 
                    ? 'bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400'
                    : 'bg-linear-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400'
                }`}
              >
                <div className="absolute inset-0 bg-linear-to-r from-primary-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 text-white">S'inscrire</span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeSwitcher />
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleMenu}
                className="relative w-10 h-10 rounded-lg overflow-hidden"
              >
                <div className={`absolute inset-0 backdrop-blur-sm ${
                  theme === 'blue' ? 'bg-blue-600/20' : 'bg-yellow-600/20'
                }`} />
                {isMenuOpen ? (
                  <X className="relative w-5 h-5 text-white mx-auto" />
                ) : (
                  <Menu className="relative w-5 h-5 text-white mx-auto" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className={`absolute inset-0 backdrop-blur-xl ${
              theme === 'blue' ? 'bg-black/95' : 'bg-black/98'
            }`} />
            <div className="relative flex flex-col items-center justify-center h-full gap-8 p-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className={`text-2xl font-semibold transition-colors ${
                    theme === 'blue' 
                      ? 'text-gray-300 hover:text-blue-400' 
                      : 'text-gray-300 hover:text-yellow-400'
                  }`}
                  onClick={toggleMenu}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className={`mt-8 px-8 py-3 rounded-full font-semibold text-white ${
                  theme === 'blue'
                    ? 'bg-linear-to-r from-blue-600 to-blue-500'
                    : 'bg-linear-to-r from-yellow-600 to-yellow-500'
                }`}
                onClick={toggleMenu}
              >
                S'inscrire
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar