<template>
  <div>
    <!-- 首页轮播 -->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(image, index) in banImages" :key="index">
        <img v-lazy="image.img" />
      </van-swipe-item>
    </van-swipe>
    <!-- 首页 grid 导航 -->
    <div class="nav">
      <van-grid :gutter="10" :border="false" :column-num="3">
        <van-grid-item v-for="(item, i) in navData" :key="i" :to="item.url">
          <van-image :src="item.image" />
          <p>{{item.title}}</p>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 获取轮播图参数列表
      banImages: [],
      // 六宫格导航数据
      navData: [
        {
          image: require('../assets/images/menu1.png'),
          title: '新闻资讯',
          url: '/newslist'
        },
        {
          image: require('../assets/images/menu2.png'),
          title: '图片分享',
          url: '/imglist'
        },
        {
          image: require('../assets/images/menu3.png'),
          title: '商品购买',
          url: '/goods'
        },
        { image: require('../assets/images/menu4.png'), title: '留言反馈' },
        { image: require('../assets/images/menu5.png'), title: '视频专区' },
        {
          image: require('../assets/images/menu6.png'),
          title: '联系我们',
          url: '/contact'
        }
      ]
    }
  },
  created () {
    this.getBanImages()
  },
  methods: {
    // 获取轮播图请求参数
    async getBanImages () {
      const { data: res } = await this.$http.get('/api/getlunbo')
      // console.log(res.message)
      this.banImages = res.message
    }
  }
}
</script>

<style lang="less" scoped>
.van-swipe {
  .van-swipe-item {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  img {
    position: relative;
    width: 130%;
    height: 200px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
