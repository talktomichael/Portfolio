import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// VITE_ROUTER=hash builds the preview version with relative asset paths.
export default defineConfig(() => ({
  plugins: [react()],
  base: process.env.VITE_ROUTER === 'hash' ? './' : '/',
}))
