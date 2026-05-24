import { useState } from 'react'
import { motion } from 'framer-motion'
import { Zap, Shield, TrendingUp, Menu, X, ArrowRight, Check } from 'lucide-react'

const DevPage = () => {
  const [, setButtonState] = useState<'default' | 'hover' | 'click'>('default')
  const [cardHover, setCardHover] = useState<string | null>(null)

  const components = {
    buttons: [
      { name: 'Primary', className: 'bg-primary hover:bg-primary-secondary' },
      { name: 'Glass', className: 'glass hover:bg-white/10' },
      { name: 'Outline', className: 'border-2 border-primary text-primary hover:bg-primary/10' },
    ],
    cards: [
      { id: '1', title: 'Card Glass', icon: Zap },
      { id: '2', title: 'Card Neon', icon: Shield },
      { id: '3', title: 'Card Gradient', icon: TrendingUp },
    ],
  }

  return (
    <div className="min-h-screen gradient-bg pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold mb-2 neon-text">Kit de développement</h1>
          <p className="text-text-secondary">Testez tous les composants et animations ici</p>
        </motion.div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-primary-light">Boutons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {components.buttons.map((btn) => (
              <motion.button
                key={btn.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setButtonState('hover')}
                onHoverEnd={() => setButtonState('default')}
                onClick={() => setButtonState('click')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${btn.className}`}
              >
                {btn.name}
              </motion.button>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-primary-light">Cartes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {components.cards.map((card) => (
              <motion.div
                key={card.id}
                whileHover={{ y: -10 }}
                onHoverStart={() => setCardHover(card.id)}
                onHoverEnd={() => setCardHover(null)}
                className="glass-card p-6 cursor-pointer"
              >
                <card.icon className="w-12 h-12 text-primary-light mb-4" />
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-text-secondary">
                  Carte avec effet glassmorphism et animation au survol
                </p>
                {cardHover === card.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 text-primary-light flex items-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    <span>Animé !</span>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-primary-light">Animations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              animate={{ x: [0, 100, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="glass p-6 rounded-lg"
            >
              <p className="text-center">Animation horizontale</p>
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="glass p-6 rounded-lg"
            >
              <p className="text-center">Animation d'échelle</p>
            </motion.div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-primary-light">Icônes</h2>
          <div className="flex gap-8 justify-center flex-wrap">
            {[Zap, Shield, TrendingUp, Menu, X, ArrowRight].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="glass p-4 rounded-full"
              >
                <Icon className="w-8 h-8 text-primary-light" />
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-primary-light">Palette de couleurs</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-primary p-4 rounded-lg text-center">Primary</div>
            <div className="bg-primary-secondary p-4 rounded-lg text-center">Secondary</div>
            <div className="bg-primary-light p-4 rounded-lg text-center">Light</div>
            <div className="bg-accent p-4 rounded-lg text-center">Accent</div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DevPage