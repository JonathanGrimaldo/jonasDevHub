import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/design-patterns',
    name: 'design-patterns',
    component: () => import('./views/DesignPatternsView.vue'),
  },
]

export default routes
