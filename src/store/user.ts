import { defineStore } from 'pinia';
import { reqLogin } from '@/api/user';
import token from '@/utils/token';
import { loginForm } from '@/utils/type';

const userInfo = defineStore('userInfo', () => {
  let _token: string;
  return {
    async login(data: loginForm): Promise<string> {
      const result: any = await reqLogin(data);
      if (result.code === 200) {
        _token = result.data.token;
        token.setToken(_token);
        return result.message;
      } else {
        return Promise.reject(new Error(result.message));
      }
    },
  };
});

export default userInfo;
