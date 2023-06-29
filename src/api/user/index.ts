import request from '@/utils/request';
import type {
  loginForm,
  loginRes,
  loginurlRes,
  infoRes,
  logoutRes,
} from '@/utils/type';

enum API {
  LOGIN = 'user/login',
  USERINFO = 'user/info',
  LOGIN_URL = '/admin/acl/index/login',
  LOGOUT_URL = 'admin/acl/index/logout',
  USER_INFO = 'admin/acl/index/info',
}

//登录请求mock
export const reqLogin = (data: loginForm) =>
  request.post<loginRes>(API.LOGIN, data);

//获取用户信息mock
export const reqUseInfo = () => request.get<loginRes>(API.USERINFO);

//登录请求
export const reqLoginUrl = (data: loginForm) =>
  request.post<loginurlRes>(API.LOGIN_URL, data);

//获取用户信息
export const reqUseInfoUrl = () => request.get<infoRes>(API.USER_INFO);

//退出登录
export const reqLogOut = () => request.post<logoutRes>(API.LOGOUT_URL);
