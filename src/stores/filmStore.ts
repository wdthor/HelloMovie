import { API_KEY } from '@/constants'
import { FilmsPopulairesEndpoint } from '@/endpoints'
import type { FilmModel } from '@/models/FilmModel'
import { mapperToFilmModel } from '@/utils/mappers'
import axios from 'axios'
import { defineStore } from 'pinia'

interface State {
  film: FilmModel
  listeFilm: FilmModel[]
}
export const usefilmStore = defineStore('filmStore', {
  state: (): State => ({
    film: {
      titre: '',
      description: '',
      image: ''
    },
    listeFilm: []
  }),
  actions: {
    async recupererFilmsPopulaires() {
      const { data } = await axios.get(FilmsPopulairesEndpoint(API_KEY))
      this.listeFilm = mapperToFilmModel(data)
    }
  }
})
