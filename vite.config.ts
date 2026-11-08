import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/', testar se vai publicar corretamente
  base: process.env.NODE_ENV === 'production' ? '/pybr2027-site/' : '/',

})
