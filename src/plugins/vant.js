// 初始化 vant.js
import Vue from 'vue'
// 导入 Button 组件
import {
  Button,
  Row,
  Col,
  CellGroup,
  Field,
  Notify,
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
  ImagePreview,
  NavBar,
  Tabbar,
  TabbarItem,
  Icon,
  SubmitBar,
  Card,
  Stepper,
  Tag,
  PullRefresh,
  Loading,
  Toast
} from 'vant'
import 'vant/lib/index.css'

// 挂载 Button 组件
Vue.use(Row).use(Col).use(CellGroup).use(Field).use(List).use(Notify).use(Toast)
Vue.use(Button)
  .use(Tab)
  .use(Tabs)
  .use(Cell)
  .use(Image)
  .use(Grid)
  .use(GridItem)
  .use(Lazyload)
  .use(Overlay)
  .use(Swipe)
  .use(SwipeItem)
  .use(ImagePreview)
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
  .use(Tag)
  .use(PullRefresh)
  .use(Cell)
  .use(Loading)
