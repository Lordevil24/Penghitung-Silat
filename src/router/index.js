import { createRouter, createWebHistory } from 'vue-router'
import JuriSatu from '../views/JuriSatu.vue'
import JuriDua from '../views/JuriDua.vue'
import JuriTiga from '../views/JuriTiga.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'JuriSatu',
      component: JuriSatu
    },
    {
      path: '/juridua',
      name: 'JuriDua',
      component: JuriDua
    },
    {
      path: '/juritiga',
      name: 'JuriTiga',
      component: JuriTiga
    },
  ],
})

export default router
