export const useTmdb = () => {

  const config = useRuntimeConfig()

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
    return response.results
  }


  return { getNowPlayingMovies }
}
