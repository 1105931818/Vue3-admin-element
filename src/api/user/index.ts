import request from '@/utils/request';
import type { loginForm, loginRes } from '@/utils/type';

enum API {
  LOGIN = 'user/login',
  USERINFO = 'user/info',
}

//登录请求
export const reqLogin = (data: loginForm) =>
  request.post<loginRes>(API.LOGIN, data);

//获取用户信息
export const reqUseInfo = () => request.get<loginRes>(API.USERINFO);
