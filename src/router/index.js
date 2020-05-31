import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Header from '@/components/header'
import Banner from '@/components/banner'
import ProjectSection from '@/components/projectSection'
import About from '@/components/about'
import Footer from '@/components/footer'
import TicTac from '@/components/tic-toc'
import cell from '@/components/cell'
import FunProjectSection from '@/components/funProjectSection'

Vue.component('app-header', Header)
Vue.component('app-banner', Banner)
Vue.component('app-project', ProjectSection)
Vue.component('app-about', About)
Vue.component('app-footer', Footer)
Vue.component('app-tictac', TicTac)
Vue.component('app-cell', cell)
Vue.component('app-funproject', FunProjectSection)

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
