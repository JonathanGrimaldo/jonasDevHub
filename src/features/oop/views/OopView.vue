<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { oopOptionsData } from '../data/oopOptionsData'

const options = oopOptionsData
</script>

<template>
  <div class="container py-5">
    <h1 class="display-5 mb-4">OOP</h1>
    <p class="lead mb-4">Object-Oriented Programming — the four pillars and when to use them.</p>

    <div class="row g-4">
      <div class="col-md-4" v-for="c in options" :key="c.slug">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h2 class="card-title h5">{{ c.title }}</h2>
            <p class="card-text">{{ c.desc }}</p>
            <RouterLink
              :to="{ name: 'oop-detail', params: { slug: c.slug } }"
              class="btn btn-outline-primary"
              >Read</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
