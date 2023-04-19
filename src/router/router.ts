import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/film/:idFilm',
      name: 'DetailFilm',
      component: () => import('../views/DetailFilmView.vue'),
      props: true
    }
  ]
})

export default router
