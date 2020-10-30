import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // layout: {},
  routes: [
    {
      exact: true,
      path: '/',
      component: '@/pages/index',
      routes: [
        // { path: '/list', component: 'list' },
        // { path: '/admin', component: 'admin' },
      ],
    },
    { path: '/login', component: '@/pages/login/login' },
  ],
});
