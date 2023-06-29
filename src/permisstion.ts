//路由鉴权
import router from '@/router';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import Token from '@/utils/token';
import userStore from '@/store/user';
import setting from './setting';

//全局前置守卫
router.beforeEach(async (to: any, from: any, next: any) => {
  //to:将要访问的路由，from:从哪个路由来
  document.title = setting.title + '-' + to.meta.title;
  nprogress.start();
  if (Token.token) {
    if (to.path === '/login') {
      next({ path: '/home' });
    } else {
      if (userStore().name) {
        next();
      } else {
        await userStore()
          .infourl()
          .then(() => {
            next();
          })
          .catch(async () => {
            await userStore().logout();
            next({ path: 'login' });
          });
      }
    }
  } else {
    if (to.path === '/login') {
      next();
    } else {
      next({ path: '/login' });
    }
  }
  next();
});

//全局后置守卫
router.afterEach((to: any, from: any) => {
  nprogress.done();
});
