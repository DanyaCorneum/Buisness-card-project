import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import WhishesView from '@/views/WhishesView.vue'
import ServicesView from '@/views/ServicesView.vue'
import InformationView from '@/views/InformationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/whishes', component: WhishesView },
    { path: '/services', component: ServicesView },
    { path: '/information', component: InformationView },
  ],
})

export default router
