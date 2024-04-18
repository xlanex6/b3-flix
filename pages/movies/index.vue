<template>
  MOVIES INDEX


  <div class="grid grid-flow-col gap-2">

    <pre>{{ movies }}</pre>

    <!-- <MoviesCard  :movie="movie" v-for="i in 12"/> -->
  </div>
</template>

<script setup>


const { getMovies } = useTmdb()

const movies = ref([]);

const menu = ["upcoming", "popular", "top_rated", "now_playing"]



movies.value = await getMovies('upcoming')


</script>
