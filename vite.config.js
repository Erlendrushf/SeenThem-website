import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-legal-pages',
      closeBundle() {
        // Copy privacy.html and terms.html to dist after build
        try {
          copyFileSync(
            resolve(__dirname, 'privacy.html'),
            resolve(__dirname, 'dist/privacy.html')
          )
          copyFileSync(
            resolve(__dirname, 'terms.html'),
            resolve(__dirname, 'dist/terms.html')
          )
          copyFileSync(
            resolve(__dirname, 'staticwebapp.config.json'),
            resolve(__dirname, 'dist/staticwebapp.config.json')
          )
          console.log('✅ Copied legal pages to dist/')
        } catch (err) {
          console.error('Error copying legal pages:', err)
        }
      }
    }
  ],
  base: '/',
})
