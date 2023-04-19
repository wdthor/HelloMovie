<template>
  <header class="sticky top-0 bg-brand-blue-1 shadow-lg">
    <nav class="container flex flex-col sm:flex-row items-center text-white py-6">
      <router-link :to="{ name: 'Home' }">
        <p class="text-2xl">Hello Movie</p>
      </router-link>
    </nav>
  </header>
</template>
