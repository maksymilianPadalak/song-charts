import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/admin': {
        target: 'https://lyrics-373516.ew.r.appspot.com',
        changeOrigin: true,
      },
      '/api': {
        target: 'https://lyrics-373516.ew.r.appspot.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
