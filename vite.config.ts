import { defineConfig } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve',
      }),
    ],

    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },

    /* SCSS全局变量的配置 */
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
  };
});
