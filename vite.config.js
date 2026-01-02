import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
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
