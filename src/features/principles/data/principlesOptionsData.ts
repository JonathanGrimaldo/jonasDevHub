import { defineAsyncComponent } from 'vue'

export const principlesOptionsData = [
  {
    label: 'S.O.L.I.D.',
    description: 'Five principles for maintainable object-oriented design.',
    route: '/principles/solid',
    component: defineAsyncComponent(() => import('../views/SolidPrinciplesView.vue')),
  },
  {
    label: 'K.I.S.S.',
    description: 'Keep it simple, stupid.',
    route: '/principles/kiss',
    component: defineAsyncComponent(() => import('../components/kiss/KissPrinciple.vue')),
  },
  {
    label: 'D.R.Y.',
    description: "Don't repeat yourself.",
    route: '/principles/dry',
    component: defineAsyncComponent(() => import('../components/dry/DryPrinciple.vue')),
  },
  {
    label: 'Y.A.G.N.I.',
    description: "You aren't gonna need it.",
    route: '/principles/yagni',
    component: defineAsyncComponent(() => import('../components/yagni/YagniPrinciple.vue')),
  },
  {
    label: 'Boy Scout Rule',
    description: 'Leave things better than you found them.',
    route: '/principles/boy-scout',
    component: defineAsyncComponent(() => import('../components/boy-scout/BoyScoutRule.vue')),
  },
]
