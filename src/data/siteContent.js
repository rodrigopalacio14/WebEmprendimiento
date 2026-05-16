import { Building2, HeartPulse, Scissors, ShoppingBag } from 'lucide-react'

export const demoRoutes = [
  {
    key: 'comercio',
    path: '/demos/comercio',
    legacyPath: '/ropa',
    icon: ShoppingBag,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    color: '#1d4ed8',
    accent: '#16a34a'
  },
  {
    key: 'inmobiliaria',
    path: '/demos/inmobiliaria',
    legacyPath: '/inmobiliaria',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    color: '#0f766e',
    accent: '#2563eb'
  },
  {
    key: 'estetica',
    path: '/demos/estetica',
    legacyPath: '/estetica',
    icon: Scissors,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
    color: '#7c3aed',
    accent: '#c43b70'
  },
  {
    key: 'clinica',
    path: '/demos/clinica',
    icon: HeartPulse,
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80',
    color: '#1e3a8a',
    accent: '#0891b2'
  }
]

export const demoRouteMap = demoRoutes.reduce((acc, route) => {
  acc[route.path] = route
  if (route.legacyPath) acc[route.legacyPath] = route
  return acc
}, {})
