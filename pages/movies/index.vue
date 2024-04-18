<template>

  <h1 class="text-4xl tracking-widest text-snow text-center uppercase font-bold my-4 mb-8">Movies</h1>
  <hr>
  <div class="space-x-0 flex justify-center -translate-y-4">

    <button v-for="{ params, label } in menu" :key="params" @click="refineMovies(params)"
      class="bg-primary text-snow px-8 uppercase hover:bg-red-400 py-2 first:rounded-l-md last:rounded-r-md">{{ label
      }}</button>

  </div>
  <div class="scroll-ml-6 snap-x flex space-x-2 overflow-x-auto py-4">

    <MoviesCard :movie="movie" v-for="movie in movies" />

  </div>
</template>

<script setup>


const { getMovies } = useTmdb()



const movies = ref([]);

const menu = [
  { params: "upcoming", label: 'Bientot' },
  { params: "popular", label: 'Populaire' },
  { params: "top_rated", label: 'Top' },
  { params: "now_playing", label: "A l'affiche" }
]

async function refineMovies(params) {
  movies.value = await getMovies(params)
}

onMounted(() => {
  refineMovies("upcoming")
})


</script>
