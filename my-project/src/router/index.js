import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Mainpage from '@/components/mainpage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/mainpage',
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    { path: '/mainpage',
      name: 'mainpage',
      component: Mainpage
    },
  ]
})
