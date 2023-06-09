import { mapperToFilmModel, mapperToListeFilmModel } from '@/utils/mappersUtil'
import { FilmsPopulairesEndpoint, UnFilmEndpoint } from '@/endpoints'
import type { FilmModel } from '@/models/FilmModel'
import { defineStore } from 'pinia'
import axios from 'axios'

interface State {
  film: FilmModel
  listeFilm: FilmModel[]
}
export const usefilmStore = defineStore('filmStore', {
  state: (): State => ({
    film: {
      idFilm: '',
      titre: '',
      description: '',
      image: '',
      dateSortie: '',
      genre: '',
      nombreVote: 0,
      note: 0,
      budgetFilm: 0
    },
    listeFilm: []
  }),
  actions: {
    async recupererFilmsPopulaires() {
      const { data } = await axios.get(FilmsPopulairesEndpoint)
      this.listeFilm = mapperToListeFilmModel(data)
    },
    async recupererUnFilm(filmId: string) {
      const { data } = await axios.get(UnFilmEndpoint(filmId))
      this.film = mapperToFilmModel(data)
    }
  }
})
