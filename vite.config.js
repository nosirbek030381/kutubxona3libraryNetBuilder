import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  base: '/build', 
  server: {
    port: 5173, 
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
    }
  }
})
