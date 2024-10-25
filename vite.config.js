import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Invoice-Practice/', // Add this line
  plugins: [react()],
})