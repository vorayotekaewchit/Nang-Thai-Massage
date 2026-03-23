import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

/**
 * GitHub Pages project sites live at https://<user>.github.io/<repo>/ — assets must use that prefix.
 * Set repo variable VITE_BASE_PATH=/ when using a custom domain at the site root (e.g. nangthaimassage.ie).
 */
function resolveBase(): string {
  const explicit = process.env.VITE_BASE_PATH?.trim()
  if (explicit) {
    return explicit.endsWith('/') ? explicit : `${explicit}/`
  }
  if (process.env.CI && process.env.GITHUB_REPOSITORY) {
    const repo = process.env.GITHUB_REPOSITORY.split('/')[1]
    if (repo) return `/${repo}/`
  }
  return '/'
}

export default defineConfig({
  base: resolveBase(),
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
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
