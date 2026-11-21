<script setup lang="ts">
import { solidPrinciplesOptionsData } from '../data/solidPrinciplesOptionsData.ts'
import { ref, computed } from 'vue'

const options = solidPrinciplesOptionsData
const activeTab = ref('srp')

const principle = computed(() => options.find((p) => p.target === activeTab.value))

const setActiveTab = (tab: string) => {
  activeTab.value = tab
}
</script>

<template>
  <RouterLink to="/principles" class="btn btn-sm btn-outline-secondary mb-4"> Back </RouterLink>
  <h1 class="display-5 mb-4">SOLID</h1>
  <p class="lead mb-4">Five design principles for maintainable object-oriented code.</p>

  <ul class="nav nav-tabs mb-4" role="tablist">
    <li v-for="option in options" :key="option.target" class="nav-item" role="presentation">
      <button
        class="nav-link"
        :class="{ active: option.target === activeTab }"
        type="button"
        role="tab"
        @click="setActiveTab(option.target)"
      >
        {{ option.label }}
      </button>
    </li>
  </ul>

  <div class="tab-content">
    <div v-if="principle" class="tab-pane fade show active" role="tabpanel">
      <component :is="principle.component" />
    </div>
  </div>
</template>
