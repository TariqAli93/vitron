import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [
      Vue({
        include: [/\.vue$/, /\.md$/]
      }),
      Pages({
        extensions: ['vue', 'md'],
        syncIndex: false
      }),
      Layouts({
        defaultLayout: 'default',
        layoutsDirs: 'src/renderer/src/layouts',
        pagesDirs: ['src/renderer/src/pages', 'src/renderer/src/routes']
      })
    ]
  }
})
