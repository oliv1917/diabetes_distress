import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoBase = process.env.GITHUB_REPOSITORY?.split('/').pop();

export default defineConfig({
  base: repoBase ? `/${repoBase}/` : './',
  plugins: [react()],
  server: {
    host: true
  },
  build: {
    outDir: 'dist'
  }
});
