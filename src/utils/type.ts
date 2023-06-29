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

export interface loginurlRes {
  code: number;
  data: string;
  message: string;
  ok: boolean;
}

type infoData = {
  avatar: string;
  buttons: string[];
  name: string;
  roles: string[];
  routes: string[];
};

export interface infoRes {
  code: number;
  data: infoData;
  message: string;
  ok: boolean;
}

export interface logoutRes {
  code: number;
  data: string | null;
  message: string;
  ok: boolean;
}

export interface UserStore {
  avatar: Ref<string>;
  name: Ref<string>;
  menuRoute: Array<RouteRecordRaw>;
  login(data: loginForm): Promise<string>;
  getinfo(): Promise<string | void>;
  logout(): Promise<string>;
  loginurl(data: loginForm): Promise<string>;
  infourl(): Promise<string | void>;
}

export interface Settings {
  isChange: boolean;
  isSwitch: boolean;
  isRefsh: boolean;
  upChange(): void;
  upSwitch(): void;
  upRefsh(): void;
}

export type Record = {
  id: number;
  createTime: string;
  updateTime: string;
  tmName: string;
  logoUrl: string;
};

type Records = {
  countId: number | null;
  current: number;
  hitCount: boolean;
  maxLimit: number | null;
  optimizeCountSql: boolean;
  orders: any[];
  pages: number;
  searchCount: boolean;
  size: number;
  total: number;
  records: Record[];
};
export interface TrademarkRes {
  code: number;
  message: string;
  data: Records;
  ok: boolean;
}
