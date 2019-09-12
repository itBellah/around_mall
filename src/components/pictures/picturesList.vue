<template>
  <div>
    <!-- 滑动Tab nav -->
    <van-tabs @click="changeTab">
      <van-tab v-for="item in  NavTagList"
               :title="item.title"
               :key="item.id">
      </van-tab>
    </van-tabs>
    <!--Tab栏内容区域-->
    <div class="tabCon">
      <van-grid :border="false"
                v-for="item in  imgList"
                :key="item.id"
                :column-num="1"
                :gutter="20"
                router>
        <van-grid-item :to="activePath"
                       @click="activeStatus(item.id)">
          <van-image :src="item.img_url"
                     lazy-load />
          <p v-html="item.content"></p>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      NavTagList: [],
      imgList: [],
      cateid: 0,
      index: 0,
      // 路由跳转
      activePath: ''
    }
  },
  created () {
    this.getNavTag()
  },
  methods: {
    // 获取Tab栏标题
    async  getNavTag () {
      let { data: res } = await this.$http.get('api/getimgcategory')
      this.NavTagList = res.message
      let allTag = { title: '全部', id: 0 }
      this.NavTagList.unshift(allTag)
    },
    // index索引,发请求
    async changeTab (index) {
      // 根据index查询数组的对应项 并获取发请求的id
      this.cateid = this.NavTagList[index].id
      let { data: res } = await this.$http.get('api/getimages/' + this.cateid)
      this.imgList = res.message
    },
    // 获取图片跳转路由
    activeStatus (path) {
      this.activePath = '/photo/Info/' + path
    }

  }

}
</script>

<style lang="less" scoped>
.van-image {
  width:100%;
}
.van-tabs{position: fixed; width:100%;z-index:9;}
p {
  background-color: rgba(0, 0, 0, 0.2);
  max-height: 90px;
  line-height:30px;
  padding:4px;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  margin:0;
}
/deep/.van-grid{padding-left:0!important;}
/deep/.van-grid-item{padding-right:0!important;}
.tabCon{padding-top:40px;}
</style>
