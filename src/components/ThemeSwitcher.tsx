import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useStore } from '../store/useStore'

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useStore()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative w-12 h-12 rounded-full glass overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          {theme === 'blue' ? (
            <motion.div
              key="blue"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-50 animate-pulse" />
                <Sun className="relative w-5 h-5 text-blue-400" />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="dark"
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: -180 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-500 rounded-full blur-xl opacity-50 animate-pulse" />
                <Moon className="relative w-5 h-5 text-yellow-400" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Effet de particules au survol */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: theme === 'blue' ? '#60A5FA' : '#FDE047',
              left: '50%',
              top: '50%',
            }}
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{
              scale: [0, 2, 0],
              opacity: [0, 1, 0],
              x: [0, (i - 1) * 20],
              y: [0, -20],
            }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          />
        ))}
      </div>
    </motion.button>
  )
}

export default ThemeSwitcher