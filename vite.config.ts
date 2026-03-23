import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

/**
 * Relative base so the same build works everywhere GitHub Pages serves the site:
 * - https://<user>.github.io/<repo>/
 * - https://nangthaimassage.ie/ (custom domain at root)
 *
 * Absolute bases (/repo/ vs /) were easy to get wrong → JS/CSS 404 → blank white page.
 * Override only if you know you need it: VITE_BASE_PATH=/custom/
 */
function resolveBase(): string {
  const explicit = process.env.VITE_BASE_PATH?.trim()
  if (explicit) {
    return explicit.endsWith('/') ? explicit : `${explicit}/`
  }
  return './'
}

export default defineConfig({
  base: resolveBase(),
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['motion'],
          'vendor-lucide': ['lucide-react'],
        },
      },
    },
    cssCodeSplit: true,
  },
})
