<template>
  MOVIES INDEX


  <div class="grid grid-flow-col gap-2">

    <pre>{{ movies }}</pre>

    <!-- <MoviesCard  :movie="movie" v-for="i in 12"/> -->
  </div>
</template>

<script setup>


const { getNowPlayingMovies } = useTmdb()

const movies = ref([]);


movies.value = await getNowPlayingMovies()

</script>
