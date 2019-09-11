// 初始化 vant.js
import Vue from 'vue'
// 导入 Button 组件
import {
  Button,
  Row,
  Col,
  CellGroup,
  Field,
  List,
  Notify,
  Toast
} from 'vant'
import 'vant/lib/index.css'

// 挂载 Button 组件
Vue.use(Button).use(Row).use(Col).use(CellGroup).use(Field).use(List).use(Notify).use(Toast)
