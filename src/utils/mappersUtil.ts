import { LienImage } from '@/endpoints'
import type { FilmModel } from '@/models/FilmModel'

// Je fais un mapping pour correspondre à mon jeu de donnée (camelCase)
export const mapperToListeFilmModel = (data: any): FilmModel[] => {
  return data.results.map((result: any) => ({
    titre: result.original_title,
    description: result.overview,
    image: mapperToLienImage(result.poster_path)
  }))
}

export const mapperToFilmModel = (data: any): FilmModel => {
  return {
    titre: data.original_title,
    description: data.overview,
    image: mapperToLienImage(data.poster_path)
  }
}

// Je rajoute le début du lien vers l'image
const mapperToLienImage = (image: string): string => `${LienImage()}${image}`