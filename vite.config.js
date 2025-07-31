import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // ← HARUS ADA dan sesuai nama repo GitHub kamu
});
