<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader />
    <RouterView />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheHeader from '@/layout/TheHeader.vue';
import TheFooter from '@/layout/TheFooter.vue';
import { RouterView } from 'vue-router'
</script>
