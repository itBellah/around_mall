import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'
// 导入字体图标
import './assets/font/iconfont.css'
// 引入全局样式
import './assets/state.css'

// 导入按需加载的 vant 组件
import './plugins/vant'

// 导入 axios
import axios from 'axios'

axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
Vue.prototype.$http = axios

// 挂载使用全局组件
Vue.component('my-header', Header)
Vue.component('my-footer', Footer)

Vue.config.productionTip = false

// 格式化时间的过滤器
Vue.filter('dateFormat', function (originVal) {
  const dt = new Date(originVal)

  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')

  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
Vue.filter('dateFormat', valStr => {
  let date = new Date(valStr)
  const y = date.getFullYear()
  const m = (date.getMonth() + 1 + '').padStart(2, '0')
  const dd = (date.getDate() + '').padStart(2, '0')
  const hh = (date.getHours() + '').padStart(2, '0')
  const mm = (date.getMinutes() + '').padStart(2, '0')
  const ss = (date.getSeconds() + '').padStart(2, '0')
  // return yyyy - mm - dd - hh - mm - ss
  return `${y} - ${m} - ${dd} - ${hh} -${mm}- ${ss}`
})
