<template>
  <div class="flex">
    <div class="grid place-content-center w-1/2">
      <h1 class="text-snow">{{ movie.title }}</h1>
    </div>

    <img width="1220" height="659" :src="`https://image.tmdb.org/t/p/original${movie.backdrop_path}`"
      :alt="movie.title || movie.name" class="h-full object-cover w-2/3" />

  </div>
  <div v-if="movie?.videos?.results" class="text-snow">


    {{ movie?.videos?.results }}

  </div>
</template>

<script setup>

const { params, query } = useRoute()
const { getMovieById } = useTmdb()

const movie = ref({})

onMounted(async () => {
  movie.value = await getMovieById(params.id,'videos')
})


</script>
