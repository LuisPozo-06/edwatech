'use client'

import { motion } from 'framer-motion'
import { Smartphone, Laptop, Tablet, Watch, ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { SERVICES_PREVIEW } from '@/lib/constants'

const iconMap: Record<string, React.ReactNode> = {
  smartphone: <Smartphone className="w-10 h-10" />,
  laptop: <Laptop className="w-10 h-10" />,
  tablet: <Tablet className="w-10 h-10" />,
  watch: <Watch className="w-10 h-10" />,
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
          <p className="text-edwar-silver/60 max-w-2xl mx-auto">
            Reparamos todo tipo de dispositivos Apple con la más alta calidad y profesionalismo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_PREVIEW.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a href={service.href}>
                <Card className="h-full group cursor-pointer">
                  <div className="text-edwar-blue mb-4 transition-transform duration-300 group-hover:scale-110">
                    {iconMap[service.icon]}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-edwar-silver/60 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-edwar-blue group-hover:gap-2 transition-all duration-300">
                    Ver servicios <ArrowRight className="w-4 h-4" />
                  </span>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
