'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock } from 'lucide-react'

export function LocationGallery() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Así nos encuentras
          </h2>
          <p className="text-gray-400 text-lg">
            Busca los letreros luminosos de Apple y Samsung en el Mercado Bambú
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-2xl border border-gray-700"
          >
            <img
              src="/imagen-servcio-tecnico-accesorios.png"
              alt="Edwar Tech - Fachada principal con letreros luminosos en Mercado Bambú, Lurín"
              className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-edwar-blue" />
                <span className="text-edwar-blue font-semibold text-sm uppercase tracking-wider">
                  Fachada Principal
                </span>
              </div>
              <h3 className="text-white text-xl font-bold">
                Puestos C37 y D55
              </h3>
              <p className="text-gray-300 text-sm mt-1">
                Mercado Bambú, Lurín
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-2xl border border-gray-700"
          >
            <img
              src="/imagen-servciotecnico.png"
              alt="Edwar Tech - Vista nocturna del local con iluminación LED"
              className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-edwar-blue" />
                <span className="text-edwar-blue font-semibold text-sm uppercase tracking-wider">
                  Horario Extendido
                </span>
              </div>
              <h3 className="text-white text-xl font-bold">
                Abierto hasta las 9:00 pm
              </h3>
              <p className="text-gray-300 text-sm mt-1">
                Todos los días, sin excepción
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
