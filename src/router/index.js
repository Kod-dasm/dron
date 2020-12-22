import Vue from 'vue'
import Router from 'vue-router'
import { MainPage, LegalLawPage } from '@/pages'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,

  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      path: '/legallaw',
      name: 'legallaw',
      component: LegalLawPage
    }
  ]
})
