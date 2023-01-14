import { createRouter, createWebHashHistory } from 'vue-router'
import PostsView from '../views/PostsView.vue'

const routes = [
  {
    path: '/',
    name: 'posts',
    component: PostsView
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('../views/MapView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.NODE_ENV),
  routes
})

export default router
