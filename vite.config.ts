import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    host: true,
    allowedHosts: ['.ngrok-free.app', '.4l13n.0vn1'],
    port: 80,
    origin: '0.0.0.0',
    cors: {
      origin: ['.ngrok-free.app', '.4l13n.0vn1']
    }
  }
})
