<script setup lang="ts">
import { ref } from 'vue'
import { designPatternsData } from '../data/designPatternsData.ts'
import { patternTypesData } from '../data/patternTypesData.ts'

const patternTypes = patternTypesData

const activeTab = ref('behavioral')
const patternOptions = designPatternsData.filter((pattern) => pattern.category === activeTab.value)

const setActiveTab = (tab: string) => {
  activeTab.value = tab
  patternOptions.splice(
    0,
    patternOptions.length,
    ...designPatternsData.filter((pattern) => pattern.category === tab),
  )
}
</script>

<template>
  <div class="container py-5">
    <h1 class="display-5 mb-4">Design Patterns</h1>
    <p class="lead mb-4">Common solutions to recurring design problems in software engineering.</p>

    <ul class="nav nav-tabs mb-4" role="tablist">
      <li v-for="option in patternTypes" :key="option.target" class="nav-item" role="presentation">
        <button
          class="nav-link"
          :class="{ active: option.target === activeTab }"
          data-bs-toggle="tab"
          :data-bs-target="`#tab-${option.target}`"
          type="button"
          role="tab"
          @click="setActiveTab(option.target)"
        >
          {{ option.label }}
        </button>
      </li>
    </ul>

    <div class="tab-content">
      <div
        v-for="option in patternTypes"
        :key="option.target"
        :class="`tab-pane fade ${option.target === activeTab ? 'show active' : ''}`"
        :id="`tab-${option.target}`"
        role="tabpanel"
      >
        <div class="row g-4">
          <div v-for="pattern in patternOptions" :key="pattern.name" class="col-md-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h2 class="card-title h5">{{ pattern.name }}</h2>
                <p class="card-text">
                  {{ pattern.description }}
                </p>
                <RouterLink :to="pattern.route" class="btn btn-outline-primary">Read</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
