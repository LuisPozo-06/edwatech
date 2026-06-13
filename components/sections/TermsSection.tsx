'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, CreditCard, Package, Wrench, Shield, Unlock, ClipboardCheck } from 'lucide-react'
import { cn } from '@/lib/utils'
import { TERMS_SECTIONS, TERMS_CONTENT } from '@/lib/constants'

const sidebarIcons = [
  { id: 'file', icon: <FileText className="w-5 h-5" /> },
  { id: 'credit', icon: <CreditCard className="w-5 h-5" /> },
  { id: 'package', icon: <Package className="w-5 h-5" /> },
  { id: 'wrench', icon: <Wrench className="w-5 h-5" /> },
  { id: 'shield', icon: <Shield className="w-5 h-5" /> },
  { id: 'unlock', icon: <Unlock className="w-5 h-5" /> },
  { id: 'clipboard', icon: <ClipboardCheck className="w-5 h-5" /> },
]

const termsEntries = Object.entries(TERMS_CONTENT)

function highlightText(text: string): React.ReactNode {
  const keywords = ['no nos hacemos responsables', '30 días calendario', '3 meses de garantía', '70%', '30%']
  let result: (string | React.ReactNode)[] = [text]
  keywords.forEach((kw) => {
    const newResult: (string | React.ReactNode)[] = []
    result.forEach((part) => {
      if (typeof part !== 'string') {
        newResult.push(part)
        return
      }
      const escaped = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      const parts = part.split(new RegExp(`(${escaped})`, 'gi'))
      parts.forEach((p, i) => {
        if (p.toLowerCase() === kw.toLowerCase()) {
          newResult.push(
            <span key={`${kw}-${i}`} className="bg-edwar-blue/10 text-edwar-blue px-2 py-0.5 rounded font-semibold">{p}</span>
          )
        } else {
          newResult.push(p)
        }
      })
    })
    result = newResult
  })
  return result
}

export function TermsSection() {
  const [activeTab, setActiveTab] = useState(0)

  const scrollToSection = (index: number) => {
    setActiveTab(index)
  }

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16 px-4 sm:px-0"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Condiciones y Requisitos
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Por favor lee con atención los siguientes términos del servicio
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="flex lg:flex-col gap-1.5 lg:gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-hide flex-nowrap">
              {TERMS_SECTIONS.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(index)}
                  className={cn(
                    'flex items-center gap-2 lg:gap-3 px-4 py-3 rounded-lg transition-all duration-200 whitespace-nowrap shrink-0',
                    activeTab === index
                      ? 'bg-edwar-blue text-white font-semibold shadow-lg shadow-edwar-blue/25 border-l-4 border-white'
                      : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200 border-l-4 border-transparent'
                  )}
                >
                  <span className={cn(
                    'shrink-0',
                    activeTab === index ? 'text-white' : 'text-gray-500'
                  )}>
                    {sidebarIcons[index].icon}
                  </span>
                  <span className="text-xs lg:text-sm">{section.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-gray-800/40 border border-gray-700/50 rounded-2xl p-4 lg:p-6 min-h-[250px] lg:min-h-[300px]">
              <AnimatePresence mode="wait">
                {activeTab < termsEntries.length && (
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start gap-3 lg:gap-4 mb-4 lg:mb-6">
                      <div className="hidden sm:flex p-2.5 lg:p-3 rounded-xl bg-edwar-blue/10 text-edwar-blue shrink-0">
                        {sidebarIcons[activeTab].icon}
                      </div>
                      <h3 className="text-lg lg:text-xl font-bold text-white">
                        {termsEntries[activeTab][1].title}
                      </h3>
                    </div>
                    <div className="text-base text-gray-300 leading-relaxed space-y-3">
                      {termsEntries[activeTab][1].content.split('. ').map((sentence, i) => (
                        <p key={i} className="flex items-start gap-2">
                          <span className="block w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-edwar-blue mt-1.5 lg:mt-2 shrink-0" />
                          <span>{highlightText(sentence)}.</span>
                        </p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 lg:mt-16 px-4 sm:px-0"
        >
          <div className="bg-gray-800/40 border border-gray-700/50 rounded-2xl p-4 lg:p-6">
            <h2 className="text-lg lg:text-xl font-bold text-white mb-4">
              Aceptación de condiciones
            </h2>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); }}>
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="mt-1 w-5 h-5 rounded border-gray-600 bg-gray-700 text-edwar-blue focus:ring-edwar-blue focus:ring-offset-0 cursor-pointer shrink-0"
                />
                <span className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                  He leído y acepto las condiciones y términos del servicio descritos anteriormente.
                </span>
              </label>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-edwar-blue text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
              >
                Aceptar condiciones
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
