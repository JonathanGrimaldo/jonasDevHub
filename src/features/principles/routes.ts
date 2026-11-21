import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/principles',
    name: 'principles',
    component: () => import('./views/PrinciplesView.vue'),
  },
  {
    path: '/principles/:slug',
    name: 'principle-detail',
    component: () => import('./views/DetailPrincipleView.vue'),
  },
]

export default routes
