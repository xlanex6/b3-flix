export const useTmdb = () => {

  const config = useRuntimeConfig()

  const urlBase = 'https://api.themoviedb.org/3'
  const queryParams =`?language=fr-FR&page=1`;
  const options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${config.public.tmdbKey}`
    }
  };

  async function getMovies(params) {
    const response = await $fetch(urlBase + `/movie/`+ params + queryParams, options);
    return response.results
  }


  return { getMovies }
}
