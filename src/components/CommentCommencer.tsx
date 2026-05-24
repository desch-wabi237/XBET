import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  UserPlus,
  Gift,
  Ticket,
  Copy,
  Check,
  Star,
  Crown,
  TrendingUp,
  Sparkles,
  Zap,
  ChevronDown,
  ChevronUp,
  Send,
  Diamond,
  Award,
  Clock,
  BarChart3,
  Shield,
  MessageCircle,
  Users,
  Rocket,
  X,
  ZoomIn
} from 'lucide-react'
import { useStore } from '../store/useStore'

// Configuration des liens
const LINKS = {
  ONEXBET: 'https://reffpa.com/L?tag=d_5240844m_97c_&site=5240844&ad=97',
  MELBET: 'https://refpa3665.com/L?tag=d_5624729m_2170c_&site=5624729&ad=2170',
  WHATSAPP: 'https://whatsapp.com/channel/0029VbB6QDYJUM2TSe6Ial16',
  TELEGRAM: 'https://t.me/daxpronos'
}

const CommentCommencer = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const { theme } = useStore()
  const [copied, setCopied] = useState(false)
  const [openStep, setOpenStep] = useState<number | null>(1)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0)
  const [currentImageList, setCurrentImageList] = useState<string[]>([])

  const copyCode = () => {
    navigator.clipboard.writeText('CRAH2')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const toggleStep = (stepId: number) => {
    setOpenStep(openStep === stepId ? null : stepId)
  }

  const openImageModal = (imageUrl: string, imageList: string[], index: number) => {
    setSelectedImage(imageUrl)
    setCurrentImageList(imageList)
    setSelectedImageIndex(index)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (selectedImageIndex + 1) % currentImageList.length
    setSelectedImage(currentImageList[nextIndex])
    setSelectedImageIndex(nextIndex)
  }

  const prevImage = () => {
    const prevIndex = (selectedImageIndex - 1 + currentImageList.length) % currentImageList.length
    setSelectedImage(currentImageList[prevIndex])
    setSelectedImageIndex(prevIndex)
  }

  const getGlowClass = () => {
    return theme === 'blue' 
      ? 'shadow-[0_0_20px_rgba(56,189,248,0.4)]'
      : 'shadow-[0_0_20px_rgba(234,179,8,0.4)]'
  }

  const getGradientClass = () => {
    return theme === 'blue'
      ? 'from-primary via-primary-light to-accent'
      : 'from-yellow-500 via-yellow-400 to-yellow-300'
  }

  const steps = [
    {
      id: 1,
      icon: UserPlus,
      title: 'Créer un compte',
      subtitle: 'Inscription gratuite sur 1xBet ou Melbet',
      description: 'Créez gratuitement votre compte 1xBet ou Melbet afin d\'accéder aux paris sportifs.',
      buttons: [
        { label: 'Créer un compte 1xBet', link: LINKS.ONEXBET, color: 'primary' },
        { label: 'Créer un compte Melbet', link: LINKS.MELBET, color: 'secondary' }
      ],
      steps: [
        'Cliquez sur le bouton d\'inscription',
        'Choisissez votre méthode d\'inscription',
        'Entrez votre numéro ou email',
        'Créez votre mot de passe',
        'Confirmez les informations',
        'Connectez-vous'
      ],
      images: ['/images/signup-1.jpg', '/images/signup-2.jpg']
    },
    {
      id: 2,
      icon: Ticket,
      title: 'Utiliser le code promo CRAH2',
      subtitle: 'Activez votre bonus exclusif',
      description: 'Utilisez notre code promo officiel afin d\'accéder aux bonus.',
      code: 'CRAH2',
      steps: [
        'Pendant l\'inscription trouvez le champ Code Promo',
        'Entrez : CRAH2',
        'Vérifiez l\'affichage du bonus',
        'Finalisez l\'inscription'
      ],
      images: ['/images/promo1.jpg', '/images/promo2.jpg']
    },
    {
      id: 3,
      icon: Star,
      title: 'Rejoindre WhatsApp',
      subtitle: 'Communauté exclusive',
      description: 'Rejoignez notre communauté afin de recevoir gratuitement les tickets gagnants.',
      buttons: [
        { label: 'Rejoindre WhatsApp', link: LINKS.WHATSAPP, icon: MessageCircle, color: 'whatsapp' },
        { label: 'Rejoindre Telegram', link: LINKS.TELEGRAM, icon: Send, color: 'telegram' }
      ],
      steps: [
        'Cliquez sur rejoindre',
        'Ouvrez WhatsApp/Telegram',
        'Accédez aux tickets gratuits'
      ],
    },
    {
      id: 4,
      icon: Gift,
      title: 'Recevoir des tickets gratuits',
      subtitle: 'Contenu exclusif quotidien',
      description: 'Recevez quotidiennement des tickets gratuits et analyses.',
      benefits: [
        { icon: Ticket, label: 'Tickets gratuits', desc: 'Pronostics quotidiens' },
        { icon: BarChart3, label: 'Analyses', desc: 'Statistiques détaillées' },
        { icon: TrendingUp, label: 'Pronostics', desc: 'Sélections gagnantes' },
        { icon: Shield, label: 'Conseils', desc: 'Stratégies pro' }
      ]
    },
    {
      id: 5,
      icon: Crown,
      title: 'Passer VIP',
      subtitle: 'Avantages premium',
      description: 'Débloquez les fonctionnalités exclusives pour maximiser vos gains.',
      benefits: [
        { icon: Diamond, label: 'Montantes premium', desc: 'Jusqu\'à 200.000 FCFA' },
        { icon: Crown, label: 'Tickets VIP', desc: 'Pronostics exclusifs' },
        { icon: Award, label: 'Analyses avancées', desc: 'Statistiques pro' },
        { icon: Clock, label: 'Support prioritaire', desc: '24/7' }
      ],
      button: { label: 'Découvrir VIP', link: '#', color: 'vip' }
    }
  ]

  return (

  <section 
    ref={sectionRef} 
    id="comment-commencer"  // ← AJOUTE CET ID
    className="py-12 md:py-20 overflow-hidden"
  >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
            <Rocket className={`w-4 h-4 ${theme === 'blue' ? 'text-primary-light' : 'text-yellow-400'}`} />
            <span className="text-sm text-text-secondary">Guide complet</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-['Orbitron']">
            <span className={` ${getGradientClass()} bg-clip-text text-transparent`}>
              🚀 Comment commencer ?
            </span>
          </h2>
          
          <p className="text-text-secondary text-base md:text-lg max-w-3xl mx-auto font-['Poppins']">
            Suivez les étapes ci-dessous pour créer votre compte, utiliser le code promo CRAH2, 
            rejoindre notre communauté et accéder aux avantages VIP.
          </p>
        </motion.div>

        {/* Timeline Line */}
        <div className="relative mb-8">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient from-primary via-primary-light to-accent opacity-30 md:-translate-x-px" />
          
          <div className="hidden md:block absolute left-1/2 top-1/2 w-full h-0.5 bg-gradientfrom-primary via-primary-light to-accent opacity-30 -translate-y-1/2" />

          {/* Timeline Steps */}
          <div className="relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 mb-8`}
              >
                {/* Timeline Node */}
                <div className="hidden md:flex w-1/2 items-center justify-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    theme === 'blue' ? 'bg-primary/20' : 'bg-yellow-500/20'
                  } border-2 border-primary-light`}>
                    <step.icon className={`w-8 h-8 ${theme === 'blue' ? 'text-primary-light' : 'text-yellow-400'}`} />
                  </div>
                </div>

                {/* Content Card */}
                <div className="md:w-1/2">
                  <div className="glass-card p-6 hover:shadow-xl transition-all duration-300">
                    {/* Header with icon and number */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center md:hidden ${
                          theme === 'blue' ? 'bg-primary/20' : 'bg-yellow-500/20'
                        }`}>
                          <step.icon className={`w-5 h-5 ${theme === 'blue' ? 'text-primary-light' : 'text-yellow-400'}`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold font-['Poppins']">{step.title}</h3>
                          <p className="text-text-secondary text-sm">{step.subtitle}</p>
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-primary-light/30 font-['Orbitron']">
                        0{step.id}
                      </div>
                    </div>

                    <p className="text-text-secondary mb-4">{step.description}</p>

                    {/* Boutons */}
                    {step.buttons && (
                      <div className="flex flex-wrap gap-3 mb-4">
                        {step.buttons.map((btn) => (
                          <motion.a
                            key={btn.label}
                            href={btn.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                              btn.color === 'primary'
                                ? theme === 'blue'
                                  ? 'bg-primary hover:bg-primary-secondary'
                                  : 'bg-yellow-600 hover:bg-yellow-500'
                                : btn.color === 'whatsapp'
                                ? 'bg-green-600 hover:bg-green-500'
                                : btn.color === 'telegram'
                                ? 'bg-blue-500 hover:bg-blue-400'
                                : 'glass hover:bg-white/10'
                            } text-white`}
                          >
                           {'icon' in btn && btn.icon ? (
   <btn.icon className="w-4 h-4" />
) : null}
                            {btn.label}
                          </motion.a>
                        ))}
                      </div>
                    )}

                    {/* Code Promo */}
                    {step.code && (
                      <div className={`glass rounded-lg p-4 mb-4 ${getGlowClass()}`}>
                        <div className="flex items-center justify-between flex-wrap gap-3">
                          <div>
                            <div className="inline-flex items-center gap-1 bg-primary/20 px-2 py-0.5 rounded-full mb-2">
                              <Zap className="w-3 h-3 text-primary-light" />
                              <span className="text-primary-light text-xs font-bold">Bonus exclusif</span>
                            </div>
                            <code className="text-2xl font-bold font-mono text-primary-light">
                              {step.code}
                            </code>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={copyCode}
                            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                              theme === 'blue'
                                ? 'bg-primary hover:bg-primary-secondary'
                                : 'bg-yellow-600 hover:bg-yellow-500'
                            } text-white`}
                          >
                            {copied ? (
                              <>
                                <Check className="w-4 h-4" />
                                Copié!
                              </>
                            ) : (
                              <>
                                <Copy className="w-4 h-4" />
                                Copier
                              </>
                            )}
                          </motion.button>
                        </div>
                      </div>
                    )}

                    {/* Accordéon pour étapes détaillées */}
                    {(step.steps || step.benefits) && (
                      <div className="mt-4">
                        <button
                          onClick={() => toggleStep(step.id)}
                          className="flex items-center justify-between w-full glass p-3 rounded-lg hover:bg-white/5 transition-colors"
                        >
                          <span className="text-sm font-semibold flex items-center gap-2">
                            <Sparkles className={`w-4 h-4 ${theme === 'blue' ? 'text-primary-light' : 'text-yellow-400'}`} />
                            Voir les détails
                          </span>
                          {openStep === step.id ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>

                        <AnimatePresence>
                          {openStep === step.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 space-y-4">
                                {/* Liste des étapes */}
                                {step.steps && (
                                  <div>
                                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                                      <Users className={`w-4 h-4 ${theme === 'blue' ? 'text-primary-light' : 'text-yellow-400'}`} />
                                      Comment faire :
                                    </h4>
                                    <ul className="space-y-2">
                                      {step.steps.map((s, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-sm text-text-secondary">
                                          <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                                            theme === 'blue' ? 'bg-primary/20 text-primary-light' : 'bg-yellow-500/20 text-yellow-400'
                                          }`}>
                                            {idx + 1}
                                          </div>
                                          {s}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {/* Galerie d'images avec clic pour zoom */}
                                {step.images && (
                                  <div>
                                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                                      <ZoomIn className={`w-4 h-4 ${theme === 'blue' ? 'text-primary-light' : 'text-yellow-400'}`} />
                                      Aperçu (cliquez pour agrandir) :
                                    </h4>
                                    <div className="flex overflow-x-auto gap-3 pb-2">
                                      {step.images.map((img, idx) => (
                                        <motion.div
                                          key={idx}
                                          whileHover={{ scale: 1.05 }}
                                          whileTap={{ scale: 0.95 }}
                                          className="shrink-0 w-40 h-40 rounded-lg overflow-hidden glass cursor-pointer relative group"
                                          onClick={() => openImageModal(img, step.images, idx)}
                                        >
                                          <img
                                            src={img}
                                            alt={`Étape ${idx + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                          />
                                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <ZoomIn className="w-8 h-8 text-white" />
                                          </div>
                                        </motion.div>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {/* Benefices grid */}
                                {step.benefits && (
                                  <div className="grid grid-cols-2 gap-3">
                                    {step.benefits.map((benefit, idx) => (
                                      <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.05 }}
                                        className="glass p-3 rounded-lg text-center"
                                      >
                                        <benefit.icon className={`w-6 h-6 mx-auto mb-2 ${theme === 'blue' ? 'text-primary-light' : 'text-yellow-400'}`} />
                                        <p className="text-xs font-semibold">{benefit.label}</p>
                                        <p className="text-text-secondary text-xs">{benefit.desc}</p>
                                      </motion.div>
                                    ))}
                                  </div>
                                )}

                                {/* Bouton VIP */}
                                {step.button && (
                                  <motion.a
                                    href={step.button.link}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 w-full justify-center ${
                                      theme === 'blue'
                                        ? 'bg-linear-to-r from-primary to-primary-light'
                                        : 'bg-linear-to-r from-yellow-600 to-yellow-500'
                                    } text-white`}
                                  >
                                    <Crown className="w-5 h-5" />
                                    {step.button.label}
                                  </motion.a>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Statistiques finales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-12"
        >
          <div className="glass rounded-xl p-6 inline-block w-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center justify-center gap-3">
                <Users className={`w-6 h-6 ${theme === 'blue' ? 'text-primary-light' : 'text-yellow-400'}`} />
                <div>
                  <div className="text-2xl font-bold">10,000+</div>
                  <div className="text-text-secondary text-xs">Membres actifs</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Award className={`w-6 h-6 ${theme === 'blue' ? 'text-primary-light' : 'text-yellow-400'}`} />
                <div>
                  <div className="text-2xl font-bold">98.7%</div>
                  <div className="text-text-secondary text-xs">Satisfaction</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Ticket className={`w-6 h-6 ${theme === 'blue' ? 'text-primary-light' : 'text-yellow-400'}`} />
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-text-secondary text-xs">Tickets gagnants</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal pour afficher l'image en grand */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImageModal}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full"
            >
              {/* Bouton fermer */}
              <button
                onClick={closeImageModal}
                className="absolute -top-12 right-0 p-2 text-white hover:text-primary-light transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image */}
              <div className="relative rounded-xl overflow-hidden glass">
                <img
                  src={selectedImage}
                  alt="Aperçu agrandi"
                  className="w-full h-auto max-h-[85vh] object-contain"
                />
              </div>

              {/* Navigation précédent/suivant */}
              {currentImageList.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full glass hover:bg-white/20 transition-all duration-300"
                  >
                    <ChevronDown className="w-6 h-6 rotate-90 text-white" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full glass hover:bg-white/20 transition-all duration-300"
                  >
                    <ChevronDown className="w-6 h-6 -rotate-90 text-white" />
                  </button>
                </>
              )}

              {/* Indicateur de position */}
              {currentImageList.length > 1 && (
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full glass text-xs text-white">
                  {selectedImageIndex + 1} / {currentImageList.length}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default CommentCommencer