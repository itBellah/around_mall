<template>
  <div class="shopcar">
    <my-header></my-header>
    <div class="content">
      <!-- 购物车为空时 -->
      <div class="emptyBack" v-if="showEmpty">
        <img src="../../assets/images/cart.png" alt />
        <p>购物车空空如也</p>
        <van-button type="info" to="/goods/list">去逛逛</van-button>
      </div>
      <!-- 购物车有内容时 -->
      <div class="listGoods" v-if="!showEmpty">
        <van-card
          v-for="item in shopDate"
          :key="item.id"
          :num="item.cou"
          :price="item.sell_price"
          :title="item.title"
          :thumb="item.thumb_path"
        >
          <div slot="footer">
            <van-stepper v-model="item.cou" ref="stepRef" integer />
          </div>
        </van-card>
      </div>
      <!-- 底部提交按钮部分 -->
      <van-submit-bar button-text="提交订单" @submit="onSubmit">
        <div slot="default" class="price">
          <p>
            合计：
            <span>￥{{total}}</span>
          </p>
        </div>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 是否是空的购物车
      showEmpty: false,
      shopDate: []
    }
  },
  created () {
    this.getShopDate()
  },
  methods: {
    // 点击提交按钮的回调函数
    onSubmit () {
      this.$toast({
        message: '提交成功',
        icon: 'like-o'
      })
    },
    // 获取购物车的数据
    async getShopDate () {
      const { data: res } = await this.$http.get(
        '/api/goods/getshopcarlist/87,88,89'
      )
      console.log(res)
      this.shopDate = res.message
    }
  },
  computed: {
    // 计算总价格
    total: function () {
      var tSum = 0
      this.shopDate.forEach(item => {
        tSum += item.sell_price * item.cou
      })
      return tSum + '.00'
    }
  }
}
</script>

<style lang="less" scoped>
.emptyBack {
  padding: 15px;
  color: #ccc;
  text-align: center;
  img {
    width: 100px;
  }
  .van-button {
    display: inline-block;
    min-width: 50px;
    height: 22px;
    font-size: 10px;
    line-height: 20px;
  }
}
.price {
  padding-right: 12px;
  p {
    color: #323233;
    font-weight: 500;
    text-align: right;
    span {
      color: #f44;
      font-size: 18px;
    }
  }
}
.van-card {
  padding: 10px 16px;
}
</style>
