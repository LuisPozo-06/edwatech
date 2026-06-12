import type { Metadata } from 'next'
import { ContactInfo } from '@/components/sections/ContactInfo'
import { LocationMap } from '@/components/sections/LocationMap'

export const metadata: Metadata = {
  title: 'Ubicación y Contacto',
  description: 'Visítanos en el Mercado Bambú, Lurín. Puestos C37 y D55. Atención todos los días de 8:00 am a 9:00 pm.',
}

export default function UbicacionPage() {
  return (
    <>
      <ContactInfo />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
        <LocationMap />
      </div>
    </>
  )
}
