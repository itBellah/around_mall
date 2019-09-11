<template>
  <div>
    <div :key="id" v-for="(item,id) in imgList">
      <!-- 标题部分 -->
      <van-row>
        <van-col span="4"></van-col>
        <van-col span="16">{{item.title}}</van-col>
        <van-col span="4"></van-col>
      </van-row>
      <!-- 分割线 -->
      <hr/>
      <!-- 图片详情部分 -->
      <div v-html="item.content"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 存放请求回来的照片
      imgList: [],
      shopid : 0
    }
  },
  created() {
    this.shopid = window.localStorage.getItem('shopId')
    this.getImgList()
  },
  methods: {
    async getImgList() {
      let { data: res } = await this.$http.get('/api/goods/getdesc/'+this.shopid)
      if (res.status !== 0) {
        console.log('请求图片失败')
      }
      // console.log(res.message)
      this.imgList = res.message
    }
  }
}
</script>
<style lang="less" scoped>
.van-row {
  margin-top: 15px;
}
.van-col {
  color: #1989fa;
  text-align: center;
}
/deep/.gomeImgLoad {
  width: 100%;
}
</style>
