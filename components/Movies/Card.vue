<template>
  <div class="">
    <img :src="`https://image.tmdb.org/t/p/w300/${movie.poster_path}`" class=" h-56 w-auto" alt="">
    <h3 class=" line-clamp-2">{{ movie.original_title }}</h3>
    <p>{{ movie.vote_average }}</p>
  </div>
</template>

<script setup>

defineProps({
  movie: Object
})

</script>
