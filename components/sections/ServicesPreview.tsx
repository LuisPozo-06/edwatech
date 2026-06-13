'use client'

import { motion } from 'framer-motion'
import { Smartphone, Laptop, Tablet, Watch, ArrowRight } from 'lucide-react'
import { SERVICES_PREVIEW } from '@/lib/constants'

const iconMap: Record<string, React.ReactNode> = {
  smartphone: <Smartphone className="w-16 h-16" />,
  laptop: <Laptop className="w-16 h-16" />,
  tablet: <Tablet className="w-16 h-16" />,
  watch: <Watch className="w-16 h-16" />,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Reparamos todo tipo de dispositivos Apple con la más alta calidad y profesionalismo
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES_PREVIEW.map((service) => (
            <motion.div key={service.title} variants={cardVariants}>
              <a href={service.href}>
                <div
                  className="group relative h-full bg-gray-800/80 backdrop-blur-sm border border-edwar-blue/20 rounded-2xl p-8 overflow-hidden
                            hover:border-edwar-blue/50 hover:shadow-2xl hover:shadow-edwar-blue/20 hover:-translate-y-2
                            transition-all duration-300 cursor-pointer"
                >
                  <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-edwar-blue/10 to-transparent pointer-events-none" />

                  <div className="relative z-10">
                    <div className="text-edwar-blue mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(0,128,255,0.4)]">
                      {iconMap[service.icon]}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-base text-gray-300 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 bg-edwar-blue hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300 group-hover:gap-3">
                      Ver servicios <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
