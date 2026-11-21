import { createRouter, createWebHistory } from 'vue-router'
import homeRoutes from '@/features/home/routes'
import principlesRoutes from '@/features/principles/routes'
import designPatternsRoutes from '@/features/design-patterns/routes'
import oopRoutes from '@/features/oop/routes'
import aboutRoutes from '@/features/about/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...homeRoutes,
    ...principlesRoutes,
    ...designPatternsRoutes,
    ...oopRoutes,
    ...aboutRoutes,
  ],
})

export default router
