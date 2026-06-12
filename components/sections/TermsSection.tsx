'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Check, Send } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { TERMS_SECTIONS, TERMS_CONTENT } from '@/lib/constants'

const formSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Ingresa un email válido'),
  phone: z.string().min(7, 'Ingresa un teléfono válido'),
  device: z.string().min(2, 'Ingresa el modelo del equipo'),
  accepted: z.literal(true, {
    errorMap: () => ({ message: 'Debes aceptar los términos y condiciones' }),
  }),
})

type FormData = z.infer<typeof formSchema>

const termsEntries = Object.entries(TERMS_CONTENT)

export function TermsSection() {
  const [activeTab, setActiveTab] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log('Form submitted:', data)
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 5000)
  }

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
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Condiciones y Requisitos
          </h1>
          <p className="text-edwar-silver/60 max-w-2xl mx-auto">
            Por favor lee con atención los siguientes términos del servicio
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
              {TERMS_SECTIONS.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => setActiveTab(index)}
                  className={cn(
                    'px-4 py-2.5 text-sm font-medium rounded-xl whitespace-nowrap transition-all duration-200',
                    activeTab === index
                      ? 'bg-edwar-blue text-white shadow-lg shadow-edwar-blue/25'
                      : 'text-edwar-silver/60 hover:text-white hover:bg-white/5'
                  )}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-edwar-gray/30 border border-white/5 rounded-2xl p-6 lg:p-8 min-h-[300px]">
              <AnimatePresence mode="wait">
                {activeTab < termsEntries.length && (
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold text-white mb-4">
                      {termsEntries[activeTab][1].title}
                    </h3>
                    <p className="text-edwar-silver/70 leading-relaxed">
                      {termsEntries[activeTab][1].content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="bg-edwar-gray/30 border border-white/5 rounded-2xl p-6 lg:p-8">
            <h3 className="text-xl font-bold text-white mb-6">
              Formulario de Aceptación
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">¡Formulario enviado!</h4>
                <p className="text-sm text-edwar-silver/60">
                  Gracias por aceptar nuestros términos y condiciones.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    id="name"
                    label="Nombre completo"
                    placeholder="Tu nombre"
                    error={errors.name?.message}
                    {...register('name')}
                  />
                  <Input
                    id="email"
                    label="Correo electrónico"
                    type="email"
                    placeholder="tu@email.com"
                    error={errors.email?.message}
                    {...register('email')}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    id="phone"
                    label="Teléfono"
                    type="tel"
                    placeholder="+51 999 999 999"
                    error={errors.phone?.message}
                    {...register('phone')}
                  />
                  <Input
                    id="device"
                    label="Modelo del equipo"
                    placeholder="Ej: iPhone 14 Pro"
                    error={errors.device?.message}
                    {...register('device')}
                  />
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      {...register('accepted')}
                      className="mt-1 w-4 h-4 rounded border-edwar-silver/20 bg-edwar-dark text-edwar-blue focus:ring-edwar-blue/50"
                    />
                    <span className="text-sm text-edwar-silver/70">
                      Acepto los términos y condiciones del servicio
                    </span>
                  </label>
                  {errors.accepted && (
                    <p className="text-sm text-red-400 mt-1">{errors.accepted.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Formulario
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
