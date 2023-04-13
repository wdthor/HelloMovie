<template>
  <div class="container mt-4">
    <div class="pt-4 mb-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-12">
      <TheFilm v-for="(film, index) in listeFilm" :key="index" :film="film" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import { usefilmStore } from '@/stores/filmStore'
import TheFilm from '@/components/TheFilm.vue';
import { storeToRefs } from 'pinia';
const filmStore = usefilmStore();
const { listeFilm } = storeToRefs(filmStore);


onMounted(async () => {
  await filmStore.recupererFilmsPopulaires();
})
</script>