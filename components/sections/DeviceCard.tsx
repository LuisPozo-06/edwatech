'use client'

import { motion } from 'framer-motion'
import { Smartphone, Laptop, Monitor, Tablet, Watch, Zap, Check } from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  smartphone: <Smartphone className="w-10 h-10" />,
  laptop: <Laptop className="w-10 h-10" />,
  monitor: <Monitor className="w-10 h-10" />,
  tablet: <Tablet className="w-10 h-10" />,
  watch: <Watch className="w-10 h-10" />,
  zap: <Zap className="w-10 h-10" />,
}

interface DeviceCardProps {
  device: {
    title: string
    description: string
    icon: string
    services: string[]
  }
  index: number
  id: string
}

export function DeviceCard({ device, index, id }: DeviceCardProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-12"
    >
      <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-edwar-blue/30 transition-all duration-300">
        <div className="bg-gradient-to-r from-edwar-blue/20 to-edwar-blue/5 border-l-4 border-edwar-blue p-6 lg:p-8">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-edwar-blue/10 text-edwar-blue">
              {iconMap[device.icon]}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{device.title}</h3>
              <p className="text-gray-300 text-base">{device.description}</p>
            </div>
          </div>
        </div>

        <div className="p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {device.services.map((service) => (
              <div
                key={service}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800/50"
              >
                <Check className="w-4 h-4 text-edwar-blue flex-shrink-0" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
