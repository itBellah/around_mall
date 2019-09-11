// 初始化 vant.js
import Vue from 'vue'
// 导入 Button 组件
import {
  Button,
  NavBar,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Lazyload,
  Grid,
  GridItem,
  Image,
  Icon,
  SubmitBar,
  Tab,
  Tabs,
  Card,
  Stepper
} from 'vant'
import 'vant/lib/index.css'

// 挂载 Button 组件
Vue.use(Button)
  .use(NavBar)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)
  .use(Grid)
  .use(GridItem)
  .use(Image)
  .use(Icon)
  .use(SubmitBar)
  .use(Tab)
  .use(Tabs)
  .use(Card)
  .use(Stepper)
import {Tag, PullRefresh, List, Cell, Loading, Toast} from 'vant'
import 'vant/lib/index.css';

// 挂载 Button 组件
Vue.use(Tag)
  .use(PullRefresh)
  .use(List)
  .use(Cell)
  .use(Loading)
  .use(Toast)
