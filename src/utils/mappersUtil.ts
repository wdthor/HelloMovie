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
    dateSortie: data.release_date,
    genre: data.genres[0].name,
    nombreVote: data.vote_count,
    note: data.vote_average,
    budgetFilm: data.budget
  }
}

// Je rajoute le début du lien vers l'image
const mapperToLienImage = (image: string): string => `${LienImage()}${image}`
