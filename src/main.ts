import { createApp } from 'vue';
import App from '@/App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import 'virtual:svg-icons-register';
import gloalComponent from '@/components';
import '@/styles/index.scss';
import router from './router';
import store from './store';
import './permisstion';

const app = createApp(App);

app.use(ElementPlus, {
  locale: zhCn,
});

app.use(router);

app.use(gloalComponent);

app.use(store);

app.mount('#app');
