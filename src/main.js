import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import Footer from './components/footer/Footer.Vue'
// import Header from './components/header/Header.vue'
// 导入按需加载的 vant 组件
import './plugins/vant'

// 导入 axios
import axios from 'axios'
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
Vue.prototype.$http = axios

// Vue.compontent('my-header', Header)
// Vue.compontent('my-fonter', Footer)

// 创建过滤器将秒数过滤为年月日，时分秒
Vue.filter('dateFormat', function (valStr) {
  const dt = new Date(valStr)
  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')

  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
