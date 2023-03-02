import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from 'path'

const viteConfig =  () => {
  return defineConfig({
    plugins: [react()],
    baseURL:"/app",
    build: {
      outDir: "build",
      /* 
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
        },
      } */
    }
 })
}


export default viteConfig;