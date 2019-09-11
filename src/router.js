import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Index from './components/Index.vue'
import Newslist from './components/news/Newslist.vue'
import Detail from './components/news/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/index' },
    {
      path: '/home', redirect: '/index', component: Home,
      children: [
        { path: '/index', component: Index }
      ]
    },
    { path: '/newslist', component: Newslist },
    { path: '/newslist/detail', component: Detail}
  ]
})
