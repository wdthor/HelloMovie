import type { FilmModel } from '@/models/FillmModel'

// Je fais un mapping pour correspondre à mon jeu de donnée (camelCase)
export const mapperToFilmModel = (data: any): FilmModel[] => {
  return data.results.map((result: any) => ({
    titre: result.original_title,
    description: result.overview,
    image: mapperToLienImage(result.poster_path)
  }))
}

// Je rajoute le début du lien vers l'image
const mapperToLienImage = (image: string): string => `https://image.tmdb.org/t/p/w500${image}`
