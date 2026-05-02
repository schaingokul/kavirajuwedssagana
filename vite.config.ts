import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Forces Vite to check for file changes
    },
    hmr: {
      overlay: true, // Shows errors on screen so you know if HMR fails
    }
  }
})
