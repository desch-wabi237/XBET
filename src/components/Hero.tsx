import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react'
import { useStore } from '../store/useStore'

const Hero = () => {
  const { stats, theme } = useStore()
  const [animatedStats, setAnimatedStats] = useState(stats)

  // Fonction pour scroller vers la section Comment commencer
  const scrollToCommentCommencer = () => {
    const section = document.getElementById('comment-commencer')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const interval = duration / steps
    
    Object.keys(stats).forEach((key) => {
      const target = stats[key as keyof typeof stats]
      const increment = target / steps
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setAnimatedStats(prev => ({ ...prev, [key]: target }))
          clearInterval(timer)
        } else {
          setAnimatedStats(prev => ({ ...prev, [key]: Math.floor(current) }))
        }
      }, interval)
    })
  }, [stats])

  const statItems = [
    { label: 'Utilisateurs actifs', value: animatedStats.users, icon: TrendingUp, suffix: '+' },
    { label: 'Plateformes comparées', value: animatedStats.platforms, icon: Shield, suffix: '' },
    { label: 'Guides disponibles', value: animatedStats.guides, icon: Zap, suffix: '+' },
  ]

  const getGradientClass = () => {
    return theme === 'blue'
      ? 'from-primary via-primary-light to-accent'
      : 'from-yellow-500 via-yellow-400 to-yellow-300'
  }

  const getButtonClass = () => {
    return theme === 'blue'
      ? 'bg-primary hover:bg-primary-secondary'
      : 'bg-yellow-600 hover:bg-yellow-500'
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse-slow ${
          theme === 'blue' ? 'bg-primary/20' : 'bg-yellow-600/20'
        }`} />
        <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse-slow ${
          theme === 'blue' ? 'bg-primary-light/20' : 'bg-yellow-500/20'
        }`} />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              theme === 'blue' ? 'bg-primary-light' : 'bg-yellow-400'
            }`}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -30, 30, -30],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 ${
                theme === 'blue' ? 'text-primary-light' : 'text-yellow-400'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span className="text-sm">Gagner avec 1xbet et Melbet</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
             Rejoignez 1xBet et Melbet{' '}
              <span className={`bg-gradient-to-r ${getGradientClass()} bg-clip-text text-transparent`}>
                activez vos bonus exclusifs avec
              </span>{' '}
              code promo CRAH2
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-text-secondary text-lg mb-8"
            >
              Découvrez les offres exclusives, comparez les cotes et trouvez la plateforme parfaite pour maximiser vos gains.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToCommentCommencer}
                className={`relative overflow-hidden group px-8 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer ${getButtonClass()}`}
              >
                <span className="relative z-10">Commencer maintenant</span>
                <div className={`absolute inset-0 bg-gradient-to-r from-primary-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  theme === 'blue' ? 'from-primary-light to-primary' : 'from-yellow-400 to-yellow-600'
                }`} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2 group"
              >
                Voir les guides
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12"
            >
              {statItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -5 }}
                  className="glass-card p-4 text-center"
                >
                  <item.icon className={`w-6 h-6 mx-auto mb-2 ${
                    theme === 'blue' ? 'text-primary-light' : 'text-yellow-400'
                  }`} />
                  <div className="text-2xl font-bold">
                    {item.value.toLocaleString()}{item.suffix}
                  </div>
                  <div className="text-text-secondary text-sm">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative glass-card p-8">
              <div className={`absolute inset-0 rounded-2xl ${
                theme === 'blue' ? 'bg-gradient-to-br from-primary/20' : 'bg-gradient-to-br from-yellow-600/20'
              } to-transparent`} />
              <div className="relative z-10">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-center"
                >
                  <TrendingUp className={`w-32 h-32 mx-auto mb-4 ${
                    theme === 'blue' ? 'text-primary-light' : 'text-yellow-400'
                  }`} />
                  <div className="text-4xl font-bold mb-2">+247%</div>
                  <div className="text-text-secondary">de gains moyens</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero