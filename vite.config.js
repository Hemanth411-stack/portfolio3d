import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
base: "/last3d/", // Replace with your actual GitHub repository name
  plugins: [
    tailwindcss(),
    react()
  ],
})
