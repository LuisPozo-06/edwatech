'use client'

import { Facebook, Instagram, Music2, Youtube, MapPin, Phone, Clock, ArrowUp } from 'lucide-react'
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black border-t border-edwar-blue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:border-r border-gray-800 lg:pr-12 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo-edwartech.png"
                alt="Edwar Tech"
                className="h-8 w-auto"
              />
              <span className="text-xl font-extrabold text-white">
                Edwar <span className="text-edwar-blue">Tech</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Servicio técnico especializado Apple en Lurín. Reparación profesional con garantía y repuestos originales.
            </p>
          </div>

          <div className="lg:border-r border-gray-800 lg:pr-12">
            <h3 className="text-white font-bold mb-3 uppercase text-sm tracking-wider">
              Enlaces
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-edwar-blue hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:border-r border-gray-800 lg:pr-12">
            <h3 className="text-white font-bold mb-3 uppercase text-sm tracking-wider">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://wa.me/${SITE_CONFIG.phoneRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors duration-200"
                >
                  <Phone className="w-5 h-5 text-edwar-blue shrink-0" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-5 h-5 text-edwar-blue shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address.street}, {SITE_CONFIG.address.district}</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <Clock className="w-5 h-5 text-edwar-blue shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.hours.days}: {SITE_CONFIG.hours.hours}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-3 uppercase text-sm tracking-wider">
              Síguenos
            </h3>
            <div className="flex gap-3">
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
                aria-label="TikTok"
              >
                <Music2 className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Edwar Tech. Todos los derechos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="text-sm text-gray-400 hover:text-edwar-blue transition-colors flex items-center gap-1"
          >
            Volver arriba <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
