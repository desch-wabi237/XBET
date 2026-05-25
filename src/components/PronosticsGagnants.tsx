import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, TrendingUp, Award } from 'lucide-react'
import { useStore } from '../store/useStore'

// Import des images locales
import psg from '../assets/psg.jpg'
import city from '../assets/city.jpg'
import nadal from '../assets/nadal.jpg'
import lakers from '../assets/lakers.jpg'
import bayern from '../assets/bayern.jpg'
import alcaraz from '../assets/alcaraz.jpg'

interface Pronostic {
  id: number
  sport: string
  image: string
}

const pronosticsData: Pronostic[] = [
  {
    id: 1,
    sport: 'Football',
    image: psg
  },
  {
    id: 2,
    sport: 'Football',
    image: city
  },
  {
    id: 3,
    sport: 'Tennis',
    image: nadal
  },
  {
    id: 4,
    sport: 'Basketball',
    image: lakers
  },
  {
    id: 5,
    sport: 'Football',
    image: bayern
  },
  {
    id: 6,
    sport: 'Tennis',
    image: alcaraz
  }
]

const PronosticsGagnants = () => {
  const sectionRef = useRef(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const { theme } = useStore()

  const getGlowClass = () => {
    return theme === 'blue' 
      ? 'hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]'
      : 'hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]'
  }

  return (
    <section ref={sectionRef} className="py-4 md:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "'Orbitron', monospace" }}>
            <span className={`bg-linear-to-r ${
              theme === 'blue' 
                ? 'from-primary via-primary-light to-accent' 
                : 'from-yellow-500 via-yellow-400 to-yellow-300'
            } bg-clip-text text-transparent`}>
              Pronostics populaires
            </span>
          </h2>
          
          <div className="space-y-1">
            <p className="text-text-secondary text-xs sm:text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Découvrez nos derniers contenus et pronostics
            </p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full"
            >
              <Award className={`w-4 h-4 ${
                theme === 'blue' ? 'text-primary-light' : 'text-yellow-400'
              }`} />
              <span className="text-xs font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>
                <span className="text-green-400 font-bold">10.000 FCFA</span>
                <span className="text-text-secondary mx-1">→</span>
                <span className={`font-bold ${
                  theme === 'blue' ? 'text-primary-light' : 'text-yellow-400'
                }`}>200.000 FCFA</span>
                <span className="text-text-secondary ml-1">/ semaine avec nos montantes</span>
              </span>
              <TrendingUp className={`w-3 h-3 ${
                theme === 'blue' ? 'text-primary-light' : 'text-yellow-400'
              }`} />
            </motion.div>
          </div>
        </motion.div>

        {/* Galerie horizontale */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-3 pb-3 scroll-smooth"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {pronosticsData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="shrink-0"
                style={{
                  scrollSnapAlign: 'start',
                  width: 'clamp(260px, 30vw, 300px)'
                }}
              >
                <div className={`relative rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 ${getGlowClass()}`}>
                  {/* Image */}
                  <div className="relative `aspect-[3/4]` overflow-hidden bg-background-secondary">
                    <img
                      src={item.image}
                      alt={item.sport}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Badge GAGNÉ */}
                    <div className="absolute top-2 right-2">
                      <div className="flex items-center gap-1 bg-green-500/90 backdrop-blur-sm px-2 py-0.5 rounded-full">
                        <Zap className="w-3 h-3 text-white" />
                        <span className="text-white text-[10px] font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>GAGNÉ</span>
                      </div>
                    </div>
                    
                    {/* Badge Sport */}
                    <div className="absolute top-2 left-2">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                        theme === 'blue' ? 'bg-primary/90' : 'bg-yellow-500/90'
                      } text-white backdrop-blur-sm`} style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {item.sport}
                      </span>
                    </div>
                  </div>
                  
                  {/* Glass effect au hover */}
                  <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                    theme === 'blue' ? 'bg-primary/5' : 'bg-yellow-500/5'
                  }`} />
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Indicateurs de scroll (mobile) */}
          <div className="flex justify-center gap-1.5 mt-3 md:hidden">
            {pronosticsData.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === 0 
                    ? theme === 'blue' ? 'bg-primary-light w-4' : 'bg-yellow-400 w-4'
                    : 'bg-white/20 w-1.5'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .scroll-smooth {
          scroll-behavior: smooth;
        }
        
        /* Import des polices */
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800&display=swap');
      `}</style>
    </section>
  )
}

export default PronosticsGagnants