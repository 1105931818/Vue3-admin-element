import type { RouteRecordRaw } from 'vue-router';

type Data = {
  token?: string;
  checkUser?: T;
};

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

export interface loginForm {
  username: string;
  password: string;
}

export interface loginRes {
  code: number;
  message: string;
  data: Data;
}

export interface UserStore {
  menuRoute: Array<RouteRecordRaw>;
  login(data: loginForm): Promise<string>;
}

export interface Settings {
  isChange: boolean;
  upChange(): void;
}
