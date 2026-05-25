import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Ticket,
  Clock,
  MessageCircle,
  Crown,
  Users,
  Star,
  Check,
  Sparkles,
  Diamond,
  Rocket,
  Target,
  BarChart3
} from 'lucide-react'
import { useStore } from '../store/useStore'

// Configuration des liens
const VIP_LINKS = {
  VIP_STARTER: '#',
  VIP_GOLD: '#',
  VIP_DIAMOND: '#',
  JOIN_VIP: '#'
}

const SectionVIP = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const { theme } = useStore()
  const [, setHoveredPlan] = useState<number | null>(null)

  const getGradientClass = () => {
    return theme === 'blue'
      ? 'from-primary via-primary-light to-accent'
      : 'from-yellow-500 via-yellow-400 to-yellow-300'
  }

  const getGlowClass = () => {
    return theme === 'blue' 
      ? 'shadow-[0_0_30px_rgba(56,189,248,0.4)]'
      : 'shadow-[0_0_30px_rgba(234,179,8,0.4)]'
  }

  // Avantages VIP exclusifs avec images de fond
  const vipBenefits = [
    {
      icon: Target,
      title: 'Scores exacts',
      description: 'Pronostics précis avec scores finaux garantis pour maximiser vos gains sur les paris.',
      backgroundImage: '/images/vip-scores.png',
      badge: 'Précision 95%'
    },
    {
      icon: Clock,
      title: 'Pronostics 24h avant',
      description: 'Recevez tous les pronostics 24 heures avant la publication publique.',
      backgroundImage: '/images/vip-early.png',
      badge: 'Avant tout le monde'
    },
    {
      icon: MessageCircle,
      title: 'Support VIP dédié',
      description: 'Assistance prioritaire 7j/7 avec réponse sous 30 minutes maximum.',
      backgroundImage: '/images/vip-support.png',
      badge: 'Réponse rapide'
    },
    {
      icon: BarChart3,
      title: 'Suivi personnalisé',
      description: 'Statistiques de performance et conseils adaptés à votre profil.',
      backgroundImage: '/images/vip-suivi.png',
      badge: 'Sur-mesure'
    },
    {
      icon: Diamond,
      title: 'Montantes exclusives',
      description: 'Stratégies de montées d\'enjeux optimisées pour des gains maximums.',
      backgroundImage: '/images/vip-montantes.jpg',
      badge: 'Premium'
    }
  ]

  const plans = [
    {
      id: 1,
      name: 'VIP Starter',
      price: '30.000 ',
      priceUsd: '50 USD',
      badge: null,
      advantages: [
        'Scores exacts',
        'Pronostics quotidiens',
        'Support standard'
      ],
      button: 'Rejoindre maintenant',
      popular: false
    },
    {
      id: 2,
      name: 'VIP Gold',
      price: '150.000 ',
      priceUsd: '250 USD',
      badge: 'Plus populaire',
      advantages: [
        'Scores exacts + montants',
        'Pronostics 24h avant',
        'Montantes exclusives',
        'Support prioritaire'
      ],
      button: 'Rejoindre maintenant',
      popular: true
    },
    {
      id: 3,
      name: 'VIP Diamond',
      price: ' 300.000 ',
      priceUsd: '500 USD',
      badge: null,
      advantages: [
        'Tous les avantages VIP',
        'Analyses pro détaillées',
        'Suivi personnalisé',
        'Bonus mensuel offert'
      ],
      button: 'Rejoindre maintenant',
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Marc D.',
      role: 'Membre VIP Gold',
      content: 'Les scores exacts sont incroyablement précis. J\'ai doublé mes gains en un mois !',
      rating: 5,
      avatar: 'https://ui-avatars.com/api/?background=2563EB&color=fff&name=Marc+D'
    },
    {
      name: 'Sarah L.',
      role: 'Membre VIP Diamond',
      content: 'Recevoir les pronostics 24h avant tout le monde change vraiment la donne. Les montantes sont très rentables.',
      rating: 5,
      avatar: 'https://ui-avatars.com/api/?background=2563EB&color=fff&name=Sarah+L'
    },
    {
      name: 'Thomas K.',
      role: 'Membre VIP Gold',
      content: 'Les analyses professionnelles et le support réactif font la différence. Je recommande fortement !',
      rating: 5,
      avatar: 'https://ui-avatars.com/api/?background=2563EB&color=fff&name=Thomas+K'
    }
  ]

  const stats = [
    { icon: Users, value: '10,000+', label: 'Membres VIP' },
    { icon: Target, value: '94%', label: 'Scores exacts' },
    { icon: Ticket, value: '1,200+', label: 'Tickets gagnants' },
    { icon: Clock, value: '24/7', label: 'Support VIP' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section ref={sectionRef} className="py-8 md:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 glass px-3 py-1 rounded-full mb-3">
            <Diamond className={`w-3 h-3 ${theme === 'blue' ? 'text-primary-light' : 'text-yellow-400'}`} />
            <span className="text-xs text-text-secondary">Premium</span>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold mb-2 font-['Orbitron']">
            <span className={`bg-linear-to-r ${getGradientClass()} bg-clip-text text-transparent`}>
              💎 Passez au niveau supérieur avec notre VIP
            </span>
          </h2>
          
          <p className="text-text-secondary text-sm md:text-base max-w-2xl mx-auto font-['Poppins']">
            Accédez aux pronostics premium, scores exacts, montantes exclusives et analyses avancées.
          </p>
        </motion.div>

        {/* SECTION 1: Pourquoi rejoindre le VIP ? - Cartes avec images de fond */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-center font-['Poppins']">
            Avantages VIP exclusifs
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {vipBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -3 }}
                className="relative rounded-xl overflow-hidden group cursor-pointer h-48"
              >
                {/* Image de fond */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${benefit.backgroundImage})` }}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/30" />
                
                {/* Contenu */}
                <div className="relative z-10 h-full flex flex-col justify-between p-4">
                  <div className="flex justify-between items-start">
                    <div className={`p-2 rounded-lg ${theme === 'blue' ? 'bg-primary/30' : 'bg-yellow-500/30'} backdrop-blur-sm`}>
                      <benefit.icon className={`w-4 h-4 ${theme === 'blue' ? 'text-primary-light' : 'text-yellow-400'}`} />
                    </div>
                    <div className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      theme === 'blue' ? 'bg-primary/80' : 'bg-yellow-500/80'
                    } text-white backdrop-blur-sm`}>
                      {benefit.badge}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{benefit.title}</h4>
                    <p className="text-white/80 text-[11px] line-clamp-2">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SECTION 2: Plans VIP */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-center font-['Poppins']">
            Choisissez votre formule
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {plans.map((plan) => (
              <motion.div
                key={plan.id}
                variants={itemVariants}
                whileHover={{ scale: plan.popular ? 1.05 : 1.03 }}
                onHoverStart={() => setHoveredPlan(plan.id)}
                onHoverEnd={() => setHoveredPlan(null)}
                className={`relative glass-card p-5 text-center transition-all duration-300 ${
                  plan.popular 
                    ? `md:scale-105 ${getGlowClass()} border-2 ${theme === 'blue' ? 'border-primary-light' : 'border-yellow-400'}`
                    : ''
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className={`px-3 py-0.5 rounded-full text-[10px] font-bold ${
                      theme === 'blue' ? 'bg-primary text-white' : 'bg-yellow-500 text-black'
                    }`}>
                      {plan.badge}
                    </div>
                  </div>
                )}
                
                <Crown className={`w-10 h-10 mx-auto mb-3 ${
                  theme === 'blue' ? 'text-primary-light' : 'text-yellow-400'
                }`} />
                
                <h4 className="text-lg font-bold mb-2">{plan.name}</h4>
                
                <div className="mb-3">
                  <span className="text-2xl font-bold">{plan.price}</span>
                  <span className="text-text-secondary text-xs"> FCFA</span>
                  <div className="text-text-secondary text-[10px]">{plan.priceUsd}</div>
                </div>
                
                <ul className="space-y-1.5 mb-4">
                  {plan.advantages.map((adv, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs">
                      <Check className={`w-3 h-3 ${theme === 'blue' ? 'text-primary-light' : 'text-yellow-400'}`} />
                      <span className="text-text-secondary">{adv}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.a
                  href={VIP_LINKS.JOIN_VIP}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 w-full justify-center ${
                    plan.popular
                      ? theme === 'blue'
                        ? 'bg-linear-to-r from-primary to-primary-light'
                        : 'bg-linear-to-r from-yellow-600 to-yellow-500'
                      : 'glass hover:bg-white/10'
                  } text-white`}
                >
                  {plan.button}
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SECTION 3: Statistiques confiance */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <div className="glass rounded-xl p-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <stat.icon className={`w-6 h-6 mx-auto mb-2 ${theme === 'blue' ? 'text-primary-light' : 'text-yellow-400'}`} />
                  <div className="text-xl font-bold">{stat.value}</div>
                  <div className="text-text-secondary text-[10px]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* SECTION 4: Témoignages */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-5 text-center font-['Poppins']">
            Ils nous font confiance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -3 }}
                className="glass-card p-4"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h4 className="font-bold text-sm">{testimonial.name}</h4>
                    <p className="text-text-secondary text-[10px]">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-text-secondary text-xs italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SECTION 5: Call To Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <div className={`relative glass rounded-xl p-6 text-center overflow-hidden ${getGlowClass()}`}>
            <div className="relative z-10">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2 glass px-3 py-1 rounded-full mb-4"
              >
                <Rocket className={`w-3 h-3 ${theme === 'blue' ? 'text-primary-light' : 'text-yellow-400'}`} />
                <span className="text-[10px] text-text-secondary">Offre limitée</span>
              </motion.div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-2 font-['Orbitron']">
                🔥 Rejoignez notre VIP maintenant
              </h3>
              
              <p className="text-text-secondary text-xs md:text-sm max-w-2xl mx-auto mb-5">
                Débloquez scores exacts, montantes exclusives et pronostics 24h avant tout le monde.
              </p>
              
              <motion.a
                href={VIP_LINKS.JOIN_VIP}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold text-white transition-all duration-300 ${
                  theme === 'blue'
                    ? 'bg-linear-to-r from-primary to-primary-light'
                    : 'bg-linear-to-r from-yellow-600 to-yellow-500'
                }`}
              >
                <Crown className="w-4 h-4" />
                Rejoindre le VIP
                <Sparkles className="w-3 h-3" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SectionVIP