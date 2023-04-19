<template>
  <div class="flex flex-col flex-grow">
    <h1>Détail Film {{ props.idFilm }}</h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { usefilmStore } from '@/stores/filmStore'

const filmStore = usefilmStore();


const props = defineProps({
  idFilm: {
    type: String,
    required: true
  }
})

onMounted(async () => {
  await filmStore.recupererUnFilm(props.idFilm);
})

</script>

<style scoped></style>