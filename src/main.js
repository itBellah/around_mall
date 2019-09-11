import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入按需加载的 vant 组件
import './plugins/vant'

// 导入 axios
import axios from 'axios'
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
Vue.prototype.$http = axios

Vue.config.productionTip = false

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
