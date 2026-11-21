<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <!-- Hero -->
  <section class="bg-primary text-white py-5">
    <div class="container text-center">
      <h1 class="display-4 fw-bold">Software Design</h1>
      <p class="lead">Principles, architecture, and good practices.</p>
    </div>
  </section>

  <!-- Section cards -->
  <div class="container py-5">
    <div class="row g-4">
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h2 class="card-title h4">Principles</h2>
            <p class="card-text">
              SOLID, KISS, DRY, YAGNI — the rules that keep code maintainable.
            </p>
            <RouterLink to="/principles" class="btn btn-primary">Explore</RouterLink>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h2 class="card-title h4">Architecture</h2>
            <p class="card-text">Layers, patterns, and how to structure a project.</p>
            <RouterLink to="/architecture" class="btn btn-primary">Explore</RouterLink>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h2 class="card-title h4">About</h2>
            <p class="card-text">Who I am and why I write this.</p>
            <RouterLink to="/about" class="btn btn-primary">Read</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
