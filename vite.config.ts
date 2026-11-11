import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const port = Number(env.PORT) || 2202
  const apiDomain = env.VITE_API_DOMAIN || 'http://localhost:8080'

  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    server: {
      host: '0.0.0.0',
      port,
      strictPort: true,
      allowedHosts: ['bruno.187.33.201.107.sslip.io'],
      proxy: {
        '/api': {
          target: apiDomain,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    preview: {
      host: '0.0.0.0',
      port,
      strictPort: true,
      allowedHosts: ['bruno.187.33.201.107.sslip.io'],
    },
  }
});