<template>
  <div class="flex flex-col justify-start max-w-xs mx-auto p-2">
    <img :src="film.image" :alt="props.film.titre" class="sm:w-full mx-auto">
    <h2 class="text-center text-xl font-semibold">{{ props.film.titre }}</h2>
    <p class="text-justify  mt-2">{{ sommaireFilm }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { SOMMAIRE_TAILLE_MAX } from '@/constants';

const props = defineProps({
  film: {
    type: Object,
    required: true
  }
})

const sommaireFilm = computed(() => {
  // Je vérifie que la description existe bien avant de faire le découpage, sinon je renvoie une string vide
  // Je définie la taille max de la description dans une constante (SOMMAIRE_TAILLE_MAX) plutôt que d'avoir un nombre aléatoire sans savoir à quoi celà correspond plus tard
  if (props.film?.description) {
    return `${props.film.description.slice(0, SOMMAIRE_TAILLE_MAX)}...`;
  }
  return '';
})
</script>
