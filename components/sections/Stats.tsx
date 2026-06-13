'use client'

import { motion } from 'framer-motion'
import { Shield, Award, BadgeCheck, Calendar } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { WHY_CHOOSE_US } from '@/lib/constants'

const iconMap: Record<string, React.ReactNode> = {
  shield: <Shield className="w-16 h-16" />,
  award: <Award className="w-16 h-16" />,
  certificate: <BadgeCheck className="w-16 h-16" />,
  calendar: <Calendar className="w-16 h-16" />,
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
          <p className="text-gray-400 max-w-2xl mx-auto">
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
              whileHover={{ y: -5 }}
            >
              <Card className="h-full text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-edwar-blue/30 transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-edwar-blue/10 to-transparent rounded-t-2xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="text-edwar-blue mb-4 flex justify-center">
                    {iconMap[item.icon]}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
