<template>
  <div>
    <!-- 加载区域 -->
    <van-loading type="spinner" color="#1989fa" v-if="shows" />
    <!-- 下拉刷新区域 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <!-- 获取图文资讯区域 -->
      <van-card
        :title="item.title"
        :thumb="item.img_url"
        :key="item.id"
        v-for="item in list"
        @click="detailClick(item.id)"
      >
        <div slot="price">发表时间：{{ item.add_time | dateFormat }}</div>
        <div slot="num">点击：{{ item.click }}</div>
      </van-card>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      isLoading: false,
      shows: false
    }
  },
  created () {
    this.getNewsList()
  },
  methods: {
    // 下拉刷新页面
    onRefresh () {
      this.getNewsList()
    },
    getNewsList () {
      setTimeout(async () => {
        var { data: res } = await this.$http.get('/api/getnewslist')
        if (res.status !== 0) {
          return this.$toast('获取资讯失败')
        }
        this.list = res.message
        this.shows = false
        if (this.isLoading) {
          this.$toast('刷新成功')
          this.isLoading = false
        }
      }, 500)
    },
    // 点击跳转页面
    detailClick (id) {
      this.$router.push({ path: '/newslist/detail', query: { id: id } })
    }
  }
}
</script>

<style lang='less' scoped>
.van-loading {
  text-align: center;
  padding: 10px 0px;
}
.van-card {
  border-bottom: 1px solid #eee;
  margin: 0px 10px;
  padding: 10px;
  .van-card__thumb {
    width: 42px;
    height: 42px;
  }
  /deep/ .van-image {
    .van-image__img {
      width: 42px;
      height: 42px;
      object-fit: cover !important;
    }
  }
  .van-card__content {
    min-height: 0px;
  }

  .van-card__title {
    font-size: 14px;
    font-weight: 700;
    color: #000;
  }
  .van-card__bottom,
  .van-card__price {
    color: #1989fa;
    line-height: 30px;
  }
  .van-card__title {
    height: 15px;
  }
}
</style>
