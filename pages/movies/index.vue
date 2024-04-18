<template>
  MOVIES INDEX


  <div class="grid grid-flow-col gap-2">

    <pre>{{ movies }}</pre>

    <!-- <MoviesCard  :movie="movie" v-for="i in 12"/> -->
  </div>
</template>

<script setup>

const config = useRuntimeConfig()

const movies = ref([]);

// const movie = {
//   "adult": false,
//   "backdrop_path": "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
//   "genre_ids": [
//     878,
//     12
//   ],
//   "id": 693134,
//   "original_language": "en",
//   "original_title": "Dune: Part Two",
//   "overview": "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
//   "popularity": 2938.734,
//   "poster_path": "/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
//   "release_date": "2024-02-27",
//   "title": "Dune: Part Two",
//   "video": false,
//   "vote_average": 8.299,
//   "vote_count": 2953
// }
// const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer '
//   }
// };

const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${config.public.tmdbKey}`
  }
};

async function getNowPlayingMovies() {
  const response = await $fetch(url, options);
  movies.value = response.results;
}

getNowPlayingMovies()

</script>
