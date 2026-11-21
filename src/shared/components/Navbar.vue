<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <div class="container">
      <RouterLink to="/" class="navbar-brand">Blog</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="nav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/principles" class="nav-link" active-class="active"
              >Principles</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/design-patterns" class="nav-link" active-class="active"
              >Design Patterns</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/oop" class="nav-link" active-class="active">OOP</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link" active-class="active">About</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
