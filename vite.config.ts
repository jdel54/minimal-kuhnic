import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/minimal-kuhnic/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
