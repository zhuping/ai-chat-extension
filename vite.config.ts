import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import webExtension from '@samrum/vite-plugin-web-extension';
import { getManifest } from './src/manifest.ts';

const isDev = process.env.NODE_ENV === 'development';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    webExtension({
      manifest: getManifest(),
      useDynamicUrlWebAccessibleResources: false,
    }),
  ],
  build: {
    minify: !isDev,
    sourcemap: isDev,
    target: 'chrome105',
    rollupOptions: {
      output: {
        dir: 'dist',
      },
    },
  },
});
