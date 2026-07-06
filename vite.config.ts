import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  server: {
    host: true,
    port: 7131,
  },
  preview: {
    allowedHosts: [
      'bapx.in',
      'www.bapx.in',
      'agents.bapx.in',
      'platform.bapx.in',
      'admin.bapx.in',
      'mediahub.bapx.in',
      'blog.bapx.in',
      'docs.bapx.in',
      'avm.bapx.in',
      'vm.bapx.in',
    ],
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
