import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/index.vue'),
  },
  {
    path:'/Edit',
    name:'Edit',
    component:() => import('../views/EditWorld.vue'),
  },
  {
    path:'/Document',
    name:'Document',
    component:() => import('../views/documentdetail.vue'),
  }
]

const router = new VueRouter({
  routes
})

export default router