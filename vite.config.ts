import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/moodmigo-web/',   // 关键：和仓库名一致；若以后用根域仓库则改成 '/'
})