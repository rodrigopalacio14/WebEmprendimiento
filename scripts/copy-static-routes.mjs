import { copyFile, mkdir } from 'node:fs/promises'
import { join } from 'node:path'

const dist = 'dist'
const routes = [
  'demos/comercio',
  'demos/inmobiliaria',
  'demos/estetica',
  'demos/clinica',
  'inmobiliaria',
  'estetica',
  'ropa'
]

await Promise.all(
  routes.map(async route => {
    const routeDir = join(dist, route)
    await mkdir(routeDir, { recursive: true })
    await copyFile(join(dist, 'index.html'), join(routeDir, 'index.html'))
  })
)
