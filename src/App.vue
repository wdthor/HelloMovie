<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import TheHeader from './components/TheHeader.vue';
import { RouterView } from 'vue-router'
</script>
