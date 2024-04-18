<template>
  <NuxtLink :to="`/movies/${movie.id}`" class="hover:scale-110 duration-300 text-snow cursor-pointer snap-start min-w-48" @click.native="active = movie.id">
    <img :src="`https://image.tmdb.org/t/p/w300/${movie.poster_path}`" class="w-full h-auto" alt="">
    <!-- <h3 class=" line-clamp-2">{{ movie.original_title }}</h3>
    <p>{{ movie.vote_average }}</p> -->
  </NuxtLink>
</template>

<script setup>
const active = useState();

defineProps({
  movie: Object
})

</script>
