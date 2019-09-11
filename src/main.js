import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import Header from './components/header/Header.vue'
// import Footer from './components/header/Footer.vue'

// 导入按需加载的 vant 组件
import './plugins/vant'

// 导入 axios
import axios from 'axios'
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
Vue.prototype.$http = axios

// 挂载使用全局组件
// Vue.component('my-header', Header)
// Vue.component('my-footer', Footer)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
