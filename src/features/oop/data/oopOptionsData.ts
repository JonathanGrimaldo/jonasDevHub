import { defineAsyncComponent } from 'vue'

export const oopOptionsData = [
  {
    title: 'Encapsulation',
    desc: 'Hide internals, expose a clean interface.',
    slug: 'encapsulation',
    component: defineAsyncComponent(() => import('../components/Encapsulation.vue')),
  },
  {
    title: 'Inheritance',
    desc: 'Reuse behavior through an is-a relationship.',
    slug: 'inheritance',
    component: defineAsyncComponent(() => import('../components/Inheritance.vue')),
  },
  {
    title: 'Polymorphism',
    desc: 'Same interface, different behavior per type.',
    slug: 'polymorphism',
    component: defineAsyncComponent(() => import('../components/Polymorphism.vue')),
  },
  {
    title: 'Abstraction',
    desc: 'Model what something does, not how it does it.',
    slug: 'abstraction',
    component: defineAsyncComponent(() => import('../components/Abstraction.vue')),
  },
]
