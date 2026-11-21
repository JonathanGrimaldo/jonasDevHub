<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { principlesOptionsData } from '../data/principlesOptionsData'

const options = principlesOptionsData
</script>

<template>
  <div class="container py-5">
    <h1 class="display-5 mb-4">Principles</h1>
    <p class="lead mb-4">Five design principles for maintainable object-oriented code.</p>
    <div class="row g-4">
      <div v-for="option in options" :key="option.label" class="col-md-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h2 class="card-title h5">{{ option.label }}</h2>
            <p class="card-text">{{ option.description }}</p>
            <RouterLink :to="option.route" class="btn btn-outline-primary">Read</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
