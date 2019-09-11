import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Index from './components/Index.vue'
import News from './components/news/News.vue'
import Member from './components/member/Member.vue'
import Shopcar from './components/shopcar/Shopcar.vue'
import Imglist from './components/imglist/Imglist.vue'
import Contact from './components/contact/Contact.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/index' },
    {
      path: '/home',
      redirect: '/index',
      component: Home,
      children: [
        { path: '/index', component: Index },
        { path: '/news', component: News },
        { path: '/member', component: Member },
        { path: '/imglist', component: Imglist },
        { path: '/contact', component: Contact }
      ]
    },
    { path: '/shopcar', component: Shopcar }
  ]
})

export default router
