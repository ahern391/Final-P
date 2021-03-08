import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Secret from './views/Secret.vue'
import Login from './views/Login.vue'
import NotFound from './views/NotFound.vue'

import {isAuthenticated} from './helpers/useAuth'

const routes = [
  { path: '/', component: Home },
  {
    path: '/Secret',
    component: Secret,
    beforeEnter: (to, from,) => {
        console.log(isAuthenticated.value)
        if( isAuthenticated.value ) return true
        return '/Login'
    },
  },
  { path: '/Login', component: Login },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
