import { defineStore, StoreDefinition, _UnwrapAll } from 'pinia';
import {
  reqLogin,
  reqUseInfo,
  reqLoginUrl,
  reqUseInfoUrl,
  reqLogOut,
} from '@/api/user';
import Token from '@/utils/token';
import {
  loginForm,
  loginRes,
  UserStore,
  loginurlRes,
  infoRes,
  logoutRes,
} from '@/utils/type';
import { constRoute } from '@/router/routes';
import { ref } from 'vue';

const userInfo: StoreDefinition<
  'userInfo',
  _UnwrapAll<Pick<UserStore, 'avatar' | 'name' | 'menuRoute'>>,
  Pick<UserStore, never>,
  Pick<UserStore, 'login' | 'getinfo' | 'logout' | 'loginurl' | 'infourl'>
> = defineStore('userInfo', (): UserStore => {
  const avatar = ref<string>('');
  const name = ref<string>('');
  return {
    menuRoute: constRoute,
    avatar,
    name,
    async login(data: loginForm): Promise<string> {
      const result: loginRes | any = await reqLogin(data);
      if (result.code === 200) {
        Token.token = result.data.token as string;
        return result.message;
      } else {
        return Promise.reject(new Error(result.message));
      }
    },

    async getinfo(): Promise<string | void> {
      const result: loginRes | any = await reqUseInfo();
      if (result.code === 200) {
        avatar.value = result.data.checkUser.avatar;
        name.value = result.data.checkUser.username;
      } else {
        return Promise.reject(new Error(result.message));
      }
    },

    async logout(): Promise<string> {
      const result: logoutRes | any = await reqLogOut();
      if (result.code === 200) {
        avatar.value = '';
        name.value = '';
        Token.removeToken();
        return result.message;
      } else {
        return Promise.reject(new Error(result.message));
      }
    },

    async loginurl(data: loginForm): Promise<string> {
      const result: loginurlRes | any = await reqLoginUrl(data);
      if (result.code === 200) {
        Token.token = result.data;
        return result.message;
      } else {
        return Promise.reject(new Error(result.data));
      }
    },

    async infourl(): Promise<string | void> {
      const result: infoRes | any = await reqUseInfoUrl();
      if (result.code === 200) {
        name.value = result.data.name;
        avatar.value = result.data.avatar;
      } else {
        return Promise.reject(new Error(result.message));
      }
    },
  };
});

export default userInfo;
