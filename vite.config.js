import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './src/setupTest.js',
    },
    server: {
      port: 3000, 
      open: true
  }
});