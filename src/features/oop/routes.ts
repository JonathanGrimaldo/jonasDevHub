import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/oop',
    name: 'oop',
    component: () => import('./views/OopView.vue'),
  },
  {
    path: '/oop/:slug',
    name: 'oop-detail',
    component: () => import('./views/OopDetailView.vue'),
  },
]

export default routes
