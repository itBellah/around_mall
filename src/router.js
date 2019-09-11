import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Index from './components/Index.vue'
import Member from './components/member/Member.vue'
import Shopcar from './components/shopcar/Shopcar.vue'
import Contact from './components/contact/Contact.vue'
import Newslist from './components/news/Newslist.vue'
import Detail from './components/news/Detail.vue'
import picturesList from './components/pictures/picturesList.vue'
import photoInfor from './components/pictures/photoInfor.vue'
import Search from './components/search/Search.vue'
import Add from './components/search/Add.vue'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      redirect: '/index'
    },
    {
      path: '/home',
      redirect: '/index',
      component: Home,
      children: [{
          path: '/index',
          component: Index
        },
        {
          path: '/member',
          component: Member
        },
        {
          path: '/contact',
          component: Contact
        },
        {
          path: '/newslist',
          component: Newslist
        },
        {
          path: '/newslist/detail',
          component: Detail
        },
        {
          path: '/photo/list',
          component: picturesList
        },
        {
          path: '/photo/Info/:id',
          component: photoInfor,
          props: true
        }
      ]
    },
    {
      path: '/shopcar',
      component: Shopcar
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/add',
      component: Add
    }
  ]
})

export default router
