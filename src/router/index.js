import Vue from 'vue'
import Router from 'vue-router'

import Video from '@/views/video'

import Home from '@/views/home'
import Service from '@/views/service'

import Cooption from '@/views/cooption'

import Culture from '@/views/culture'

import JoinUs from '@/views/joinUs'


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'video'
    },

    {
      path: '/video',
      name: 'Video',
      component: Video
    },

    {
      path: '/home',
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
    },
    {
      path: '/cooption',
      name: 'Cooption',
      component: Cooption
    },
    {
      path: '/joinUs',
      name: 'JoinUs',
      component: JoinUs
    }


    
  ]
})
