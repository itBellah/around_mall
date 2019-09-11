
import Vue from 'vue'
import 'vant/lib/index.css'
import {  
    Search,
    CellGroup,
    SwipeCell,
    Dialog,
    Divider,
  Button,
  Row,
  Col,
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
Vue.use(Search).use(Col).use(CellGroup).use(Field).use(List).use(Notify).use(Toast)
Vue.use(Button)
  .use(Tab)
  .use(Tabs)
  .use(SwipeCell)
  .use(Dialog)
  .use(Row)
  .use(Cell)
  .use(Divider)
  .use(Image)
  .use(Overlay)
  .use(ImagePreview)
  .use(NavBar)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)
  .use(Grid)
  .use(GridItem)
  .use(Icon)
  .use(SubmitBar)
  .use(Card)
  .use(Stepper)
  .use(Tag)
  .use(PullRefresh)
  .use(Loading)
