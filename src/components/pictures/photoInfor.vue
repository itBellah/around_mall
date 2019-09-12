<template>
  <!-- 图片详情页 -->
  <div>
    <!-- 图片标题 -->
    <div class="header"
         v-for="item in imginforList"
         :key="item.id">
      <h3> {{item.title}}</h3>
      <div class="note">
        <span class="time">{{item.add_time|dateFormat}}</span>
        <span class="click">{{item.click}}</span>
      </div>
    </div>
    <hr>
    <!-- 缩略图图片展示 -->
    <van-grid :column-num="3">
      <van-grid-item v-for="item in thumimagesList"
                     :key="item.id"
                     @click="getPreview">
        <van-image :src="item.src" />
      </van-grid-item>
    </van-grid>
    <!-- 图片内容 -->
    <p v-for="(item,index) in imginforList"
       :key="index"
       v-html="item.content"></p>
    <my-comments></my-comments>
    <!-- 图片预览 -->
    <van-image-preview v-model="show"
                       :images="ImagePreviwList"
                       @change="onChange">
      <template v-slot:index>第{{ index  }}页</template>
    </van-image-preview>
  </div>
</template>
<script>
export default {
  data () {
    return {
      id: '',
      thumimagesList: [],
      imginforList: [],
      show: false,
      index: 0,
      ImagePreviwList: []

    }
  },
  created () {
    this.getDynamicId()
  },
  methods: {
    // 获取图片缩略图数据和图片详情数据
    async getDynamicId () {
      // 获取动态id用来发请求请求
      let id = this.$route.params.id
      // 图片缩略图数据获取
      let { data: res } = await this.$http.get('/api/getthumimages/' + id)
      // 图片详情获取
      let { data: res1 } = await this.$http.get('/api/getimageInfo/' + id)
      this.imginforList = res1.message
      this.thumimagesList = res.message
    },
    // 获取预览图片路径
    getPreview () {
      this.show = true
      this.thumimagesList.forEach(item => {
        this.ImagePreviwList.push(item.src)
      })
    },
    // 监听图片索引变化
    onChange (index) {
      this.index = index + 1
    }

  }
}
</script>
<style lang="less" scoped>
.header {
  h3 {
    text-align: center;
    color: #26a2ff;
    font-size: 15px;
  }
  .note {
    display: flex;
    padding:0 6px;
    font-size: 13px;
    color: #8f8f94;
    justify-content: space-between;
    .time::before {
      content: '发表时间: ';
    }
    .click::before {
      content: '点击: ';
    }
  }
}
.shadow {
  .van-overlay {
    background-color: rgba(0, 0, 0, 0.9);
  }
  .van-image {
    z-index: 999;
    position: absolute;
    left: 30% !important;
    top: 40% !important;
  }
}
.van-swipe {
  z-index: 999;
}
.van-swipe-item {
  image {
    width: 80% !important;
  }
}
</style>
