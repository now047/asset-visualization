import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // Vercel 最適
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
