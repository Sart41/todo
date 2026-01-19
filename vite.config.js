import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {fileURLToPath} from 'node:url'
import svgr from 'vite-plugin-svgr'

export default defineConfig(({mode}) => ({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
  css: {
    modules: {
      generateScopedName:
        mode === 'development'
          ? '[name]__[local]___[hash:base64:5]'
          : '[hash:base64:8]',
    }
  },
  base: '/todo/',
}))
