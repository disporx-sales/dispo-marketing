import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Note: Compression can be added for production builds if needed
    // using vite-plugin-compression or similar
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['@headlessui/react', '@heroicons/react'],
        },
      },
    },
    cssCodeSplit: true,
    minify: 'esbuild',
  },
  server: {
    port: 3000,
  },
  // Support client-side routing
  preview: {
    port: 3000,
  },
})

