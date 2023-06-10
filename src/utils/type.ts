import { Ref } from 'vue';
import type { RouteRecordRaw } from 'vue-router';

type Data = {
  token?: string;
  checkUser?: T;
};

export interface T {
  userId: number;
  avatar: string;
  username: string;
  password: string;
  desc: string;
  roles: string[];
  buttons: string[];
  routes: string[];
  token: string;
}

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
  avatar: Ref<string>;
  name: Ref<string>;
  menuRoute: Array<RouteRecordRaw>;
  login(data: loginForm): Promise<string>;
  getinfo(): Promise<string | void>;
  logout(): void;
}

export interface Settings {
  isChange: boolean;
  isSwitch: boolean;
  isRefsh: boolean;
  upChange(): void;
  upSwitch(): void;
  upRefsh(): void;
}
