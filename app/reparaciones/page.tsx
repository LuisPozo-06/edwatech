import type { Metadata } from 'next'
import { RepairList } from '@/components/sections/RepairList'

export const metadata: Metadata = {
  title: 'Reparaciones',
  description: 'Servicio de reparación especializado en iPhone, MacBook, iPad, Apple Watch y más. Repuestos originales y garantía certificada en Lurín.',
}

export default function ReparacionesPage() {
  return <RepairList />
}
