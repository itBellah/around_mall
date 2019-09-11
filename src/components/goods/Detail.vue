<template>
    <div>
        <!-- 顶部轮播图 -->
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(item, index) in this.detailImg" :key="index">
                <img v-lazy="item.src" />
            </van-swipe-item>
        </van-swipe>
        <!-- 主体区域 -->
        <div class="detailTitle">
            <h4 class="addTitle">{{this.goodsetail.title}}</h4>
            <van-divider :style="{ borderColor: '#ccc', padding: '0 15px' }" />
            <div class="detailPrice">
                <span>市场价: <i class="shic">￥{{this.goodsetail.market_price}}</i></span>
                <span>销售价: <i class="xiaos">￥{{this.goodsetail.sell_price}}</i></span>
            </div>
            <div class="detailGoods">
                <van-row>
                    <van-col span="5">购买数量</van-col>
                    <van-col span="15">
                        <van-stepper v-model="value" />
                    </van-col>
                    <div>
                        <van-col span="6">
                        <van-button color="#1989fa" size="small">立即购买</van-button>
                        </van-col>
                        <van-col span="6">
                            <van-button color="#f44" size="small" @click="addShop">加入购物车</van-button>
                        </van-col>
                    </div>
                </van-row>
            </div>
            <van-divider />
        </div>
        <!-- 商品参数区域 -->
        <div class="detailForm">
            <h4 class="fromTitle">商品参数</h4>
            <van-divider :style="{ borderColor: '#ccc', padding: '0 15px' }" />
            <van-row class="goodsIndex">
                <van-col span="15">商品货号: {{this.goodsetail.goods_no}}</van-col>
                <van-col span="15">库存情况: {{this.goodsetail.stock_quantity}}</van-col>
                <van-col span="24">上架时间: {{this.goodsetail.add_time}}</van-col>
            </van-row>
            <van-divider :style="{ borderColor: '#ccc', padding: '0 15px' }" />
            <van-button plain type="info" @click="photoShow">图文介绍</van-button>
            <van-button plain type="danger" @click="goodsTall">商品评论</van-button>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      shopid: '',
      goodsetail: {},
      detailImg: [],
      value: 1
    }
  },
  created () {
    this.shopid = window.localStorage.getItem('shopId')
    this.detailList()
    this.getGoodImgArr()
  },
  methods: {
    // 获取商品图片信息
    async getGoodImgArr () {
      const { data: resImg } = await this.$http.get('/api/getthumimages/' + this.shopid)
      this.detailImg = resImg.message
    //   console.log(this.detailImg)
    },
    // 获取商品详情数据
    async detailList () {
      const { data: res } = await this.$http.get('/api/goods/getinfo/' + this.shopid)
      this.goodsetail = res.message[0]
    //   console.log(this.goodsetail)
    },
    // 点击加入购物车按钮,出发事件
    addShop () {
      // 商品加入购物车时,弹出成功提示
      this.$toast({
        message: '已加入购物车',
        icon: 'success'
      })
    },
    // 跳转到商品图文介绍页面
    photoShow () {
        this.$router.push('/goodsdesc')
    },
    // 跳转到商品评论页面
    goodsTall () {
    this.$router.push('/goodscomments')
    }
  }
}
</script>

<style lang="less" scoped>
.van-swipe {
    border: 1px solid #ccc;
    margin: 10px;
    img {
    width: 200px;
    height: 200px;
    display: block;
    margin: auto;
    }
}
.detailTitle {
    margin: 10px;
    border: 1px solid #ccc;
}
.addTitle {
    margin-bottom: 0;
    text-align: center;
    font-weight: 400;
}
.van-divider {
    margin-top: 0;
}
.detailForm {
    margin: 0 10px;
    border: 1px solid #ccc;
    .fromTitle {
        font-weight: normal;
        padding-left: 15px;
        margin: 10px 0 0 0;
    }
    .van-button {
        width: 90%;
        margin: 15px;
    }
}
.goodsIndex {
    font-size: 14px;
    color: #bbb;
    margin: 10px 25px;
    .van-col {
        margin-top: 10px;
    }
}
.detailForm {
    padding: 10px;
}
.detailPrice {
    font-size: 14px;
    color: #aaa;
    margin: 10px 0 10px 25px;
    span {
        margin-right: 10px;
        .shic {
            font-style:normal;
            text-decoration:line-through;
        }
        .xiaos {
            font-style:normal;
            font-size: 16px;
            color: red;
            font-weight: 700;
        }
    }
}
.detailGoods {
    margin: 15px 0 0 25px;
    .van-col {
        color: #aaa;
        font-size: 14px;
    }
    .van-button {
        margin-top: 10px;
        font-size: 14px;
    }
}
</style>
