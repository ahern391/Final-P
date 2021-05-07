import { createRouter, createWebHistory } from 'vue-router'
import About from './views/About.vue'
import Home from './views/Home.vue'
import Secret from './views/Secret.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'
import NotFound from './views/NotFound.vue'


import { isAuthenticated } from './helpers/useAuth'

const routes = [
  { path: '/', component: Home },
  {
    path: '/secret',
    component: Secret,
    beforeEnter: (to, from) => {
      if (isAuthenticated.value) return true
      return '/login'
    },
  },
  { path: '/login', component: Login },
  { path: '/signup', component: SignUp },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})