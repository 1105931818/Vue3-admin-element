import { RouteRecordRaw } from 'vue-router';

export const constRoute: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: {
      title: '登录',
    },
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    name: 'layout',
    meta: {
      title: '首页',
      icon: 'Box',
    },
    children: [
      {
        name: 'home',
        path: 'home',
        component: () => import('@/views/home/index.vue'),
      },
    ],
  },
  {
    path: '/visdata',
    component: () => import('@/views/visdata/index.vue'),
    name: 'visdata',
    meta: {
      title: '数据大屏',
      icon: 'DataLine',
    },
  },
  {
    path: '/product',
    component: () => import('@/layout/index.vue'),
    name: 'product',
    meta: {
      title: '商品管理',
      icon: 'ShoppingBag',
    },
    redirect: '/product/attr',
    children: [
      {
        name: 'attr',
        path: '/product/attr',
        component: () => import('@/views/product/Attr/index.vue'),
        meta: {
          title: '属性管理',
          icon: 'SwitchFilled',
        },
      },
      {
        name: 'tradeMark',
        path: '/product/tradeMark',
        component: () => import('@/views/product/tradeMark/index.vue'),
        meta: {
          title: '品牌管理',
          icon: 'Goods',
        },
      },
      {
        name: 'sku',
        path: '/product/sku',
        component: () => import('@/views/product/Sku/index.vue'),
        meta: {
          title: 'SKU管理',
          icon: 'Iphone',
        },
      },
      {
        name: 'spu',
        path: '/product/spu',
        component: () => import('@/views/product/Spu/index.vue'),
        meta: {
          title: 'SPU管理',
          icon: 'Document',
        },
      },
    ],
  },
  {
    path: '/permissions',
    component: () => import('@/layout/index.vue'),
    name: 'permissions',
    meta: {
      title: '权限管理',
      icon: 'Lock',
    },
    redirect: '/permissions/userper',
    children: [
      {
        name: 'userper',
        path: '/permissions/userper',
        component: () => import('@/views/permissions/Userper/index.vue'),
        meta: {
          title: '用户权限',
          icon: 'User',
        },
      },
      {
        name: 'roleper',
        path: '/permissions/roleper',
        component: () => import('@/views/permissions/Roleper/index.vue'),
        meta: {
          title: '角色权限',
          icon: 'Coin',
        },
      },
      {
        name: 'menuper',
        path: '/permissions/menuper',
        component: () => import('@/views/permissions/Menuper/index.vue'),
        meta: {
          title: '菜单管理',
          icon: 'DocumentChecked',
        },
      },
    ],
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'any',
  },
];
