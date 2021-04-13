import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '@/components/ProductList'
import ShoppingCart from '@/components/ShoppingCart';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/cart',
      name: 'ShoppingCart',
      component: ShoppingCart
    }
  ]
})
