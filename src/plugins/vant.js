// 初始化 vant.js
import Vue from 'vue'
// 导入 Button 组件
import {
  Button,
  Tab,
  Tabs,
  List,
  Cell,
  Image,
  Grid,
  GridItem,
  Lazyload,
  Overlay,
  Swipe,
  SwipeItem,
  ImagePreview
} from 'vant'
import 'vant/lib/index.css'

// 挂载 Button 组件
Vue.use(Button)
  .use(Tab)
  .use(Tabs)
  .use(List)
  .use(Cell)
  .use(Image)
  .use(Grid)
  .use(GridItem)
  .use(Lazyload)
  .use(Overlay)
  .use(Swipe)
  .use(SwipeItem)
  .use(ImagePreview)
