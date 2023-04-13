<template>
  <div class="flex flex-col justify-start">
    <img :src="film.image" :alt="film.titre" class="sm:w-full max-w-xs mx-auto">
    <h2 class="text-center text-xl font-semibold">{{ film.titre }}</h2>
    <p class="text-justify">{{ film.description }}</p>
  </div>
</template>

<script setup lang="ts">

defineProps({
  film: {
    type: Object,
    required: true
  }
})
</script>
