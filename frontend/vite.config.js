import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base:'/Brosoft-StartUpSite/',  // Remove this base if testing in local
  plugins: [svgr(),react()],
})
