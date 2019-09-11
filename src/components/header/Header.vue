<template>
<!-- 公共头部 -->
  <div class="head">
    <van-nav-bar title="鑫淼有限公司" v-if="path === '/index'" />
    <van-nav-bar title="鑫淼有限公司" left-text="返回" left-arrow v-else @click-left="goBack" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: ''
    }
  },
  created() {
    this.getPath()
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    getPath() {
      this.path = this.$route.path
    }
  },
  watch: {
    $route(to, from) {
      this.path = to.path
    }
  }
}
</script>

<style lang="less" scoped>
.head {
  height: 46px;
}
.van-nav-bar {
  width: 100%;
  height: 46px;
  line-height: 46px;
  background: #1989fa;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  .van-nav-bar__title {
    color: #fff;
    font-size: 16px;
  }
}
.van-nav-bar .van-icon {
  color: #fff;
}
.van-nav-bar__text {
  color: #fff;
  &:active {
    background-color: #1989fa;
  }
}
</style>
