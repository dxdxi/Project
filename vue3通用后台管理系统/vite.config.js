import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// import ElementPlus from 'unplugin-element-plus/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // AutoImport({
    //   resolvers:[ElementPlusResolver()],
    // }),
    // Components({
    //   resolvers:[ElementPlusResolver()],
    // }),
    // ElementPlus(),
  ],
  // 这个 resolve 是添加的别名
  resolve:{
    alias:[
      {
        find:'@',
        replacement:'/src'
      },
    ],
  },
})
