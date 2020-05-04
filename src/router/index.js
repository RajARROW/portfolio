import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Header from '@/components/header'
import Banner from '@/components/banner'
import ProjectSection from '@/components/ProjectSection'
import About from '@/components/about'
import Footer from '@/components/footer'

Vue.component('app-header', Header)
Vue.component('app-banner', Banner)
Vue.component('app-project', ProjectSection)
Vue.component('app-about', About)
Vue.component('app-footer', Footer)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
