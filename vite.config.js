import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  css: {
    devSourcemap: false, // Evita la carga de source maps en CSS
    sourcemap: false, 
  },
})
