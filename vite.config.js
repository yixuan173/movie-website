import dotenv from 'dotenv'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

dotenv.config()

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/movie-website",
  define: {
    'process.env': process.env
  }
})
