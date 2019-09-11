import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Index from './components/Index.vue'
import List from './components/goods/List.vue'
import Detail from './components/goods/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/index' },
    {
      path: '/home',
      redirect: '/index',
      component: Home,
      children: [
        { path: '/index', component: Index },
        { path: '/goods/list', component: List },
        { path: '/goods/detail/:id', component: Detail }
      ]
    }
  ]
})
