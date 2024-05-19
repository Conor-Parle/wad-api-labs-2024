export const getMovies = async () => {
  const response = await fetch(
    'http://localhost:8081/api/movies', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};


  export const login = async (username, password) => {
    const response = await fetch('http://localhost:8081/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};

export const signup = async (username, password) => {
    const response = await fetch('http://localhost:8081/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};

const API_BASE_URL = 'http://localhost:8081/api';
const API_KEY = process.env.TMDB_KEY;

export const getPopularMovies = async () => {
  try {
      const response = await fetch(`${API_BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);

      if (!response.ok) {
          throw new Error('Failed to fetch popular movies');
      }

      return await response.json();
  } catch (error) {
      throw error;
  }
};