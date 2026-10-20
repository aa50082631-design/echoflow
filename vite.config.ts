import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['icons/echoflow.svg', 'icons/echoflow-192.png', 'icons/echoflow-512.png'],
    manifest: {
      name: 'EchoFlow — English, in rhythm', short_name: 'EchoFlow', description: 'Tu espacio personal para practicar inglés.',
      theme_color: '#0D1020', background_color: '#0D1020', display: 'standalone', orientation: 'portrait',
      icons: [{ src: 'icons/echoflow-192.png', sizes: '192x192', type: 'image/png' }, { src: 'icons/echoflow-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' }, { src: 'icons/echoflow.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' }]
    },
    workbox: { globPatterns: ['**/*.{js,css,html,svg,png,woff2}'] }
  })],
  base: process.env.GITHUB_ACTIONS === 'true' ? `/${process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''}/` : '/',
  test: { environment: 'jsdom', setupFiles: './src/test-setup.ts' }
});
