export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=ceb566644a1d919302596c5df85c6cba&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };