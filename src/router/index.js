import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductsIndex from '../views/ProductsIndex.vue'
import ProductsNew from '../views/ProductsNew.vue'
import ProductsShow from '../views/ProductsShow.vue'
import ProductsEdit from '../views/ProductsEdit.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'home', component: ProductsIndex},

  {path: '/products', name: 'products-index', component: ProductsIndex},
  {path: '/products/new', name: 'products-new', component: ProductsNew},
  {path: '/products/:id', name: 'products-show', component: ProductsShow},
  {path: '/products/:id/edit', name: 'products-edit', component: ProductsEdit}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
