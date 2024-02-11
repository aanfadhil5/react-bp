import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const env = loadEnv(process.env.MODE, process.cwd(), '');

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  define: {
    'process.env': JSON.stringify(env),
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.mjs',
  },
});
