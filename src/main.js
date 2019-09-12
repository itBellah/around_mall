import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入公用组件
import GoodsComments from './components/goodscomments/GoodsComments'
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
Vue.component('my-comments', GoodsComments)

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

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
