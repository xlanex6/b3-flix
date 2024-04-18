<template>

  <div class="overflow-hidden max-h-[400px] relative">

    <div class=" absolute top-0 left-0 right-0 bottom-0 flex items-center px-52 bg-[#0000005d]">
      <div class="text-snow">
        <h1 class=" uppercase mb-4 font-bold tracking-wider text-5xl">{{ movie.title }}</h1>
        <p class="w-1/2">
          {{ movie.overview }}
        </p>
      </div>
    </div>


    <img width="1220" height="659" :src="`https://image.tmdb.org/t/p/original${movie.backdrop_path}`" :alt="
    movie.title || movie.name" class="object-fit object-center w-full" />

  </div>
  <h2 class="text-snow uppercase text-2xl">Videos</h2>
  <div v-if="trailers" class="text-snow snap-x flex overflow-x-scroll space-x-4">
    <div v-for="trailor in trailers">
      <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${trailor.key }`"
        title="YouTube video player" frameborder="0" allowfullscreen></iframe>
    </div>

  </div>
</template>

<script setup>

const { params, query } = useRoute()
const { getMovieById } = useTmdb()

const movie = ref({})

const trailers = computed(() => {
  return movie.value.videos?.results?.filter(video => video.type === 'Trailer')
})

onMounted(async () => {
  movie.value = await getMovieById(params.id,'videos')
})


</script>
