<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader />
    <RouterView />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import { RouterView } from 'vue-router'
</script>
