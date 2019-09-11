import Vue from 'vue'
import Router from 'vue-router'
// import Home from './components/Home.vue'
// import Index from './components/Index.vue'
import picturesList from './components/pictures/picturesList.vue'
import photoInfor from './components/pictures/photoInfor.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // { path: '/', redirect: '/index' },
    // {
    //   path: '/home',
    //   redirect: '/index',
    //   component: Home,
    //   children: [{ path: '/index', component: Index }]
    // },
    { path: '/photo/list', component: picturesList },
    {
      path: '/photo/Info/:id',
      component: photoInfor,
      props: true
      // children: [{ path: '/photo/Info', component: photoInfor }]
    }
  ]
})
