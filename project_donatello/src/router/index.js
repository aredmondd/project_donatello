import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BacklogView from '../views/BacklogView.vue'
import FinishedView from '../views/FinishedView.vue'
import DroppedView from '../views/DroppedView.vue'
import MoreView from '../views/MoreView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Backlog',
      name: 'Backlog',
      component: BacklogView
    },
    {
      path: '/Finished',
      name: 'Finished',
      component: FinishedView
    },
    {
      path: '/Dropped',
      name: 'Dropped',
      component: DroppedView
    },
    {
      path: '/More',
      name: 'More',
      component: MoreView
    },
  ]
})

export default router
