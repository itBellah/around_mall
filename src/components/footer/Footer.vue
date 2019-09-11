<template>
  <!-- 公共底部 -->
  <div class="foot">
    <van-tabbar v-model="active">
      <van-tabbar-item class="van-icon iconfont icon-icon_zhanghao" to="/index">首页</van-tabbar-item>
      <van-tabbar-item class="van-icon iconfont icon-index-fill" to="/member">会员</van-tabbar-item>
      <van-tabbar-item icon="cart-o" info="3" to="/shopcar">购物车</van-tabbar-item>
      <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: ''
    }
  }
}
</script>

<style lang="less" scoped>
.foot {
  height: 50px;
}
.van-tabbar-item {
  font-size: 16px;
}
</style>
