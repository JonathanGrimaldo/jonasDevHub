import { defineAsyncComponent } from 'vue'

export const solidPrinciplesOptionsData = [
  {
    label: 'S — SRP',
    target: 'srp',
    component: defineAsyncComponent(
      () => import('../components/solid/SingleResponsibilityPrinciple.vue'),
    ),
  },
  {
    label: 'O — OCP',
    target: 'ocp',
    component: defineAsyncComponent(() => import('../components/solid/OpenClosedPrinciple.vue')),
  },
  {
    label: 'L — LSP',
    target: 'lsp',
    component: defineAsyncComponent(
      () => import('../components/solid/LiskovSubstitutionPrinciple.vue'),
    ),
  },
  {
    label: 'I — ISP',
    target: 'isp',
    component: defineAsyncComponent(
      () => import('../components/solid/InterfaceSegregationPrinciple.vue'),
    ),
  },
  {
    label: 'D — DIP',
    target: 'dip',
    component: defineAsyncComponent(
      () => import('../components/solid/DependencyInversionPrinciple.vue'),
    ),
  },
]
