import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Gonzv_Tech_/', // 👈 IMPORTANTE: debe coincidir con tu repo
})