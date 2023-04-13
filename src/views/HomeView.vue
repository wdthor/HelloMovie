<template>
  <div class="container">
    <div class="pt-4 mb-8">
      <input type="text" v-model="rechercheFilm">
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { usefilmStore } from '@/stores/filmStore'
const { recupererFilmsPopulaires } = usefilmStore();

const rechercheFilm = ref('');


onMounted(async () => {
  await recupererFilmsPopulaires();
})
</script>