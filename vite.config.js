import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'; // i added this file

// https://vite.dev/config/
export default defineConfig({
  // plugins: [react()],
  plugins: [
    react(), // Enables React Fast Refresh and JSX/TSX support
    tailwindcss(), // Processes Tailwind CSS
  ],
  base: "/kedy-portfolio", // my github name for this portfolio after i have created the github respository for this project
})
