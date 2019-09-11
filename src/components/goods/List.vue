<template>
    <div>
        <!-- 顶部nav导航区域 -->
        <!-- <my-header></my-header> -->
        <!-- 上拉刷新 -->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <!-- 下拉加载 -->
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <!-- 商品列表区域 -->
                <van-row>
                    <van-col class="goodList" span="11" v-for="item in addList" :key="item.id" @click="goodMove(item.id)">
                        <!-- 商品图片 -->
                        <img :src="item.img_url" alt="" v-lazy="item.img_url">
                        <p>{{item.title}}</p>
                        <!-- 热卖区 -->
                        <div class="hot">
                            <!-- 商品价格 -->
                            <div class="price">
                                <span class="big">￥{{item.sell_price}}</span>
                                <span class="smil">￥{{item.market_price}}</span>
                            </div>
                            <!-- 商品库存 -->
                            <van-row type="flex" justify="space-around" class="goodBox">
                                <van-col span="8">热卖中</van-col>
                                <van-col span="10">剩{{item.stock_quantity}}件</van-col>
                            </van-row>
                        </div>
                    </van-col>
                </van-row>
            </van-list>
        </van-pull-refresh>
        <!-- 底部Tabbr标签区域 -->
        <!-- <my-fotter></my-fotter> -->
    </div>
</template>

<script>
export default {
  data () {
    return {
      addList: [],
      // 上拉刷新
      isLoading: false,
      // 下拉加载
      list: [],
      loading: false,
      finished: false
    }
  },
  created () {
    this.getList()
  },
  methods: {
    async getList () {
      const { data: res } = await this.$http.get('api/getgoods?pageindex=1')
      this.addList = res.message
      console.log(this.addList)
    },
    // 上拉刷新
    onRefresh () {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
      }, 500)
    },
    // 下拉加载
    onLoad () {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 500)
    },
    // 点击商品列表,跳转到商品详情
    goodMove (id) {
      window.localStorage.setItem('shopId', id)
      this.$router.push('/goods/detail/' + id)
      console.log(id)
    }
  }
}
</script>

<style lang="less" scoped>
.goodList {
    margin: 7px;
    border: 1px solid #ccc;
    text-align: center;
    img {
        width: 60%;
        margin-top: 6px;
    }
    p {
        margin: 0 3px;
        font-size: 14px;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
}
.hot {
    background-color: #eee;
    margin-top: 20px;
    .price {
        margin-right: 40px;
        display: block;
        padding-top: 8px;
        .big {
            color: red,
        }
        .smil {
            color: #444;
            font-size: 14px;
            text-decoration:line-through;
        }
        span {
            margin-left: 15px;
        }
    }
    .goodBox {
        padding: 6px 0;
        font-size: 14px;
    }
}
</style>
