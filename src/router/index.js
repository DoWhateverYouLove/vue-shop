import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodList from '@/views/GoodList'
import cart from '@/views/cart'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/GoodList',
      name: 'GoodList',
      component: GoodList
    }
    ,{
      path: '/cart',
      name: 'cart',
      component: cart
    }
  ]
})
