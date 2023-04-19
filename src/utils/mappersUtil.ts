import { LienImage } from '@/endpoints'
import type { FilmModel } from '@/models/FilmModel'

// Je fais un mapping pour correspondre à mon jeu de donnée (camelCase)
export const mapperToListeFilmModel = (data: any): FilmModel[] => {
  return data.results.map((result: any) => ({
    idFilm: result.id,
    titre: result.title,
    description: result.overview,
    image: mapperToLienImage(result.poster_path)
  }))
}

export const mapperToFilmModel = (data: any): FilmModel => {
  return {
    idFilm: data.id,
    titre: data.title,
    description: data.overview,
    image: mapperToLienImage(data.poster_path),
    dateSortie: toDateFr(data.release_date),
    genre: data.genres[0].name,
    nombreVote: data.vote_count,
    note: data.vote_average,
    budgetFilm: toEuro(data.budget)
  }
}

// Je rajoute le début du lien vers l'image
const mapperToLienImage = (image: string): string => `${LienImage()}${image}`

const toDateFr = (date: string): string => new Intl.DateTimeFormat('fr-FR').format(new Date(date))

const toEuro = (nombre: number): string =>
  new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(nombre)
