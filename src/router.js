import { createRouter, createWebHistory } from 'vue-router'

import index from '@/routes/inbox.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/inbox',
      name: 'inbox',
      component: index
    },
    {
      path: '/archive',
      name: 'archive',
      component: index
    },
  ]
})

export default router