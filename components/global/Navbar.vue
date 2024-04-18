<template>
  <ul class="bg-black text-white inline-flex space-x-4 px-4 py-2">
    <li v-for="{ path, name } in menu" :key="path">
      <NuxtLink :to="path">{{ name }}</NuxtLink>
    </li>
  </ul>
</template>

<script setup>

const menu = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Movies', path: '/movies' }
]

</script>

<style scoped>
.router-link-exact-active {
  @apply text-primary;
}
</style>
