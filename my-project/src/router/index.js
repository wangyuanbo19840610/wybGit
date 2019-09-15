import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Bar from '@/components/Bar'
import Foo from '@/components/Foo'
import TestUtil from '@/components/testUtil'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/foo',
      name: 'mainPage'
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    { path: '/foo',
      name: 'Foo',
      component: Foo
    },
    { path: '/testUtil',
    name: 'TestUtil',
    component: TestUtil
    },
    { path: '/bar',
      name: 'Bar',
      component: Bar
    }
  ]
})
