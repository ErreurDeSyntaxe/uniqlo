import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/uniqlo/',
  base: '/',
  test: {
    global: true,
    environment: 'jsdom',
    setupFiles: './test/setup.js',
  },
});
