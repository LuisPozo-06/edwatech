'use client'

import { motion } from 'framer-motion'
import { Shield, Award, BadgeCheck, Clock } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { WHY_CHOOSE_US } from '@/lib/constants'

const iconMap: Record<string, React.ReactNode> = {
  shield: <Shield className="w-8 h-8" />,
  award: <Award className="w-8 h-8" />,
  certificate: <BadgeCheck className="w-8 h-8" />,
  clock: <Clock className="w-8 h-8" />,
}

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-edwar-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-edwar-silver/60 max-w-2xl mx-auto">
            Somos tu mejor opción para la reparación de equipos Apple en Lurín
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full text-center">
                <div className="text-edwar-blue mb-4 flex justify-center">
                  {iconMap[item.icon]}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-edwar-silver/60 leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
