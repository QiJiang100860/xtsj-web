import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Service from '@/views/service'
import Culture from '@/views/culture'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/service',
      name: 'Service',
      component: Service
    },
    {
      path: '/culture',
      name: 'Culture',
      component: Culture
    }
  ]
})
