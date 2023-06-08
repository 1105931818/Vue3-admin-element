import { defineStore, StoreDefinition, _UnwrapAll } from 'pinia';
import { reqLogin } from '@/api/user';
import Token from '@/utils/token';
import { loginForm, loginRes, UserStore } from '@/utils/type';
import { constRoute } from '@/router/routes';

const userInfo: StoreDefinition<
  'userInfo',
  _UnwrapAll<Pick<UserStore, 'menuRoute'>>,
  Pick<UserStore, never>,
  Pick<UserStore, 'login'>
> = defineStore('userInfo', (): UserStore => {
  let _token: string | null;

  return {
    menuRoute: constRoute,

    async login(data: loginForm): Promise<string> {
      const result: loginRes | any = await reqLogin(data);
      if (result.code === 200) {
        _token = result.data.token as string;
        Token.token = _token;
        return result.message;
      } else {
        return Promise.reject(new Error(result.message));
      }
    },
  };
});

export default userInfo;
