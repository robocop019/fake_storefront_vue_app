import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ProductsNew from '../views/ProductsNew.vue'
import ProductsShow from '../views/ProductsShow.vue'
import ProductsEdit from '../views/ProductsEdit.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'home', component: Home},
  {path: '/about', name: 'about', component: About},
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
