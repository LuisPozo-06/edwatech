'use client'

import { motion } from 'framer-motion'
import { Smartphone, Laptop, Monitor, Tablet, Watch, Zap } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

const iconMap: Record<string, React.ReactNode> = {
  smartphone: <Smartphone className="w-8 h-8" />,
  laptop: <Laptop className="w-8 h-8" />,
  monitor: <Monitor className="w-8 h-8" />,
  tablet: <Tablet className="w-8 h-8" />,
  watch: <Watch className="w-8 h-8" />,
  zap: <Zap className="w-8 h-8" />,
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
    >
      <Card highlighted className="overflow-hidden">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-xl bg-edwar-blue/10 text-edwar-blue">
            {iconMap[device.icon]}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{device.title}</h3>
            <p className="text-sm text-edwar-silver/60">{device.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {device.services.map((service) => (
            <div
              key={service}
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/5 hover:bg-edwar-blue/10 transition-colors duration-200"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-edwar-blue shrink-0" />
              <span className="text-sm text-edwar-silver/80">{service}</span>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  )
}
