import { API_KEY } from './constants'

// On peut définir la taille de l'image, sinon la taille par défaut est 'w500'
export const LienImage = (tailleImage: string = 'w500') =>
  `https://image.tmdb.org/t/p/${tailleImage}`

export const FilmsPopulairesEndpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr`

export const UnFilmEndpoint = (idFilm: string) =>
  `https://api.themoviedb.org/3/movie/${idFilm}?api_key=${API_KEY}&language=fr`
