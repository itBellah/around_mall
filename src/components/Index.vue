<template>
    <div>
        <h3>首页主体</h3>
        <h3 @click="goodList">商品列表</h3>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    goodList: function () {
      this.$router.push({ path: '/goods/list' })
    }
  }
}
</script>

<style lang="less" scoped>

</style>
