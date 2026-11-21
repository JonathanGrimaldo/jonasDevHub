<script setup lang="ts">
import Navbar from '@/shared/components/Navbar.vue'
import Footer from '@/shared/components/Footer.vue'
import { useScrollToTop } from '@/shared/composables/useScrollToTop'

useScrollToTop()
</script>

<template>
  <div class="d-flex flex-column min-vh-100">
    <Navbar />
    <main class="flex-grow-1">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
