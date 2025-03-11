import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/3D Portfolio/", // Replace with your actual GitHub repository name
  plugins: [
    tailwindcss(),
    react()
  ],
})
