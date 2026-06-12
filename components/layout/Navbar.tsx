'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-edwar-dark/95 backdrop-blur-lg border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="/" className="flex items-center gap-2 sm:gap-3 group">
            <img
              src="/logo-edwartech.png"
              alt="Edwar Tech"
              className="h-12 w-auto shrink-0 sm:h-10 lg:h-12 transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-base sm:text-xl lg:text-2xl font-extrabold text-white tracking-tight">
              Edwar <span className="text-edwar-blue">Tech</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-edwar-silver hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${SITE_CONFIG.phoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-xl transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl text-edwar-silver hover:text-white hover:bg-white/5 transition-all duration-200"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1 bg-edwar-dark/95 backdrop-blur-lg border-t border-white/10">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-edwar-silver hover:text-white rounded-xl hover:bg-white/5 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`https://wa.me/${SITE_CONFIG.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 mt-2 bg-green-500/20 text-green-400 border border-green-500/30 rounded-xl font-semibold"
              >
                <Phone className="w-5 h-5" />
                WhatsApp: {SITE_CONFIG.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
