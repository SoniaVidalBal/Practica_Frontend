import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import haveUserRole from './user-role'

const routes: Array<RouteRecordRaw> = [
//
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    //beforeEnter: [haveUserRole],
    component: () => import(/* webpackChunkName: "products" */ '../views/ProductsView.vue')
  },
  {
    path: '/user/:id',
    name: 'user',
    //beforeEnter: [haveUserRole],
    component: () => import(/* webpackChunkName: "user" */ '../views/UserView.vue'), 
    props: (route) => {
      const id = Number(route.params.id);
      return isNaN(id) ? {id: null} : {id};
    }
  },
  {
    path: '/products/detail/:id',
    name: 'detail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/DetailView.vue'),
    props: (route) => {
      const id = Number(route.params.id);
      return isNaN(id) ? {id: null} : {id};
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
