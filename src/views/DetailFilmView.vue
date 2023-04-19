<template>
  <div class="sm:container flex flex-col sm:flex-row flex-grow mt-5 gap-4 mx-4">
    <div class="sm:w-1/3 lg:w-1/5 w-1/2 mx-auto">
      <img :src="film.image" :alt="film.titre">
    </div>
    <section class="sm:w-2/3 lg:w-4/5">
      <h2 class=" text-xl font-semibold"><span class="font-semibold">Titre :</span> {{ film.titre }}</h2>
      <p class="text-justify mt-2"><span class="font-semibold">Description :</span> {{ film.description }}</p>
      <p class="mt-2"><span class="font-semibold">Date de sortie :</span> {{ film.dateSortie }}</p>
      <p class="mt-2"><span class="font-semibold">Genre :</span> {{ film.genre }}</p>
      <p class="mt-2"><span class="font-semibold">Nombre de vote :</span> {{ film.nombreVote }}</p>
      <p class="mt-2"><span class="font-semibold">Note :</span> {{ film.note }}</p>
      <p class="mt-2"><span class="font-semibold">Budget :</span> {{ film.budgetFilm }}</p>


    </section>

  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { usefilmStore } from '@/stores/filmStore'
import { storeToRefs } from 'pinia';

const filmStore = usefilmStore();


const props = defineProps({
  idFilm: {
    type: String,
    required: true
  }
})

const { film } = storeToRefs(filmStore);

onMounted(async () => {
  await filmStore.recupererUnFilm(props.idFilm);
})

</script>

<style scoped></style>