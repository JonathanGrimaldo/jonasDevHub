<script setup lang="ts">
import { useRoute } from 'vue-router'
import { principlesOptionsData } from '../data/principlesOptionsData'
import { computed } from 'vue'

const route = useRoute()
const slug = route.params.slug as string

const principle = computed(() => principlesOptionsData.find((p) => p.route.includes(slug)) ?? null)
</script>

<template>
  <div class="container py-5">
    <component :is="principle.component" v-if="principle" />
    <p v-else>Principle not found.</p>
  </div>
</template>
