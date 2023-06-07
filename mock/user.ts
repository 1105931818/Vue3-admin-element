//用户信息数据
import { MockMethod } from 'vite-plugin-mock';
type T = {
  userId: number;
  avatar: string;
  username: string;
  password: string;
  desc: string;
  roles: string[];
  buttons: string[];
  routes: string[];
  token: string;
};

function createUserList(): Array<T> {
  return [
    {
      userId: 1,
      avatar:
        'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      username: 'admin',
      password: '111111',
      desc: '平台管理员',
      roles: ['平台管理员'],
      buttons: ['cuser.detail'],
      routes: ['home'],
      token: 'Admin Token',
    },
    {
      userId: 2,
      avatar:
        'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      username: 'system',
      password: '111111',
      desc: '系统管理员',
      roles: ['系统管理员'],
      buttons: ['cuser.detail', 'cuser.user'],
      routes: ['home'],
      token: 'System Token',
    },
  ];
}

type Y = {
  token?: string | null;
  checkUser?: T;
};

type K = {
  code: number;
  message: string;
  data: Y;
};

export default [
  //用户登录接口
  {
    url: '/api/user/login',
    method: 'post',
    response: ({ body }) => {
      //获取请求体携带过来的用户名和密码
      const { username, password } = body;

      //调用获取用户信息函数，判断是否有此用户
      const checkUser: T | undefined = createUserList().find(
        (item: T): boolean => {
          return item.username === username && item.password === password;
        },
      );

      if (!checkUser) {
        const result: K = {
          code: 201,
          message: '账号密码错误！',
          data: { token: null },
        };
        return result;
      }

      const { token } = checkUser;
      const result: K = {
        code: 200,
        message: '登录成功！',
        data: { token },
      };
      return result;
    },
  },
  /* 获取用户信息 */
  {
    url: '/api/user/info',
    method: 'get',
    response: (request) => {
      //获取请求体携带过来的用户名和密码
      const token: string = request.headers.token;

      //调用获取用户信息函数，判断是否有此用户
      const checkUser = createUserList().find((item: T): boolean => {
        return item.token === token;
      });

      if (!checkUser) {
        const result: K = {
          code: 201,
          message: '获取用户信息失败！',
          data: {},
        };
        return result;
      }

      const result: K = {
        code: 200,
        message: '获取用户信息成功！',
        data: { checkUser },
      };
      return result;
    },
  },
] as MockMethod[];
