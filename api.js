const API_KEY = import.meta.env.VITE_TMDB_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

export const IMG_URL = 'https://image.tmdb.org/t/p/w500'
export const IMG_ORIGINAL = 'https://image.tmdb.org/t/p/original'

async function apiFetch(path) {
  try {
    const res = await fetch(`${BASE_URL}${path}`)
    if (!res.ok) throw new Error(`TMDB error: ${res.status}`)
    return await res.json()
  } catch (err) {
    console.error('[CineScope API]', err.message)
    return null
  }
}

export async function getTrending(page = 1) {
  const data = await apiFetch(`/trending/movie/day?api_key=${API_KEY}&page=${page}`)
  return { results: data?.results ?? [], totalPages: data?.total_pages ?? 1 }
}

export async function searchMovies(query, page = 1) {
  const data = await apiFetch(`/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`)
  return { results: data?.results ?? [], totalPages: data?.total_pages ?? 1 }
}

export async function getByGenre(genreId, page = 1) {
  const data = await apiFetch(`/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&sort_by=popularity.desc&page=${page}`)
  return { results: data?.results ?? [], totalPages: data?.total_pages ?? 1 }
}

export async function getMovieDetails(id) {
  return await apiFetch(`/movie/${id}?api_key=${API_KEY}`)
}

export async function getMovieVideos(id) {
  const data = await apiFetch(`/movie/${id}/videos?api_key=${API_KEY}`)
  return data?.results ?? []
}

export async function getFeaturedMovie() {
  const data = await apiFetch(`/trending/movie/day?api_key=${API_KEY}`)
  const movies = data?.results ?? []
  return movies.find(m => m.backdrop_path) ?? movies[0] ?? null
}
