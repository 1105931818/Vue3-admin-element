//全局组件
import SvgIcon from './SvgIcon/index.vue';
import Logo from './Logo/index.vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
const allGloablComponent: any = { SvgIcon, Logo };

//对外暴露插件对象
export default {
  install(app: any) {
    Object.keys(allGloablComponent).forEach((key: string) => {
      app.component(key, allGloablComponent[key]);
    });

    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  },
};
