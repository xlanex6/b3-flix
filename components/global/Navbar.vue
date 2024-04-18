<template>
  <ul>
    <li v-for="{ path, name } in menu" :key="path">
      <a :href="path">{{ name }}</a>
    </li>
  </ul>
</template>

<script setup>

const menu = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Movies', path: '/movies' },
]

</script>
