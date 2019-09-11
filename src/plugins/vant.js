// 初始化 vant.js
import Vue from 'vue'
// 导入 Button 组件
import { Button, Card, Tag, PullRefresh, List, Cell, Loading, Toast} from 'vant'
import 'vant/lib/index.css';

// 挂载 Button 组件
Vue.use(Button)
  .use(Card)
  .use(Tag)
  .use(PullRefresh)
  .use(List)
  .use(Cell)
  .use(Loading)
  .use(Toast)
