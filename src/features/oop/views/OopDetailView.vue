<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { oopOptionsData } from '../data/oopOptionsData'

const route = useRoute()

const concept = computed(() => {
  const slug = String(route.params.slug ?? '')
  return oopOptionsData.find((item) => item.slug === slug) ?? null
})

const ActiveComponent = computed(() => concept.value?.component ?? null)
</script>

<template>
  <div class="container py-5">
    <RouterLink to="/oop" class="btn btn-sm btn-outline-secondary mb-4"
      >← All OOP concepts</RouterLink
    >
    <component :is="ActiveComponent" v-if="ActiveComponent" />
    <p v-else>Concept not found.</p>
  </div>
</template>
