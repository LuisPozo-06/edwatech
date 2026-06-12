import type { Metadata } from 'next'
import { TermsSection } from '@/components/sections/TermsSection'

export const metadata: Metadata = {
  title: 'Condiciones y Requisitos',
  description: 'Conoce los términos y condiciones del servicio de reparación de Edwar Tech. Garantía, devoluciones, y política de atención.',
}

export default function CondicionesPage() {
  return <TermsSection />
}
