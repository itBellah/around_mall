<template>
  <div class="container">
    <van-row>
      <van-col>
        <h4>发表评论</h4>
      </van-col>
    </van-row>
    <hr />
    <!-- 评论的输入框 -->
    <van-cell-group>
      <van-field
        ref="addFormRef"
        :value="addForm.content"
        type="textarea"
        placeholder="请提出您的宝贵意见"
        rows="1"
        autosize
        clearable
        @input="contentChange"
      />
      <van-button type="info" @click="addComment">发表评论</van-button>
    </van-cell-group>
    <!-- 评论列表 -->
    <van-list :key="index" v-for="(item, index) in CommentsList">
      <p class="p1">第{{index + 1}}楼 用户：{{item.user_name}} 发表时间：{{item.add_time | dateFormat}}</p>
      <p class="p2">{{item.content}}</p>
    </van-list>
    <van-button plain hairline type="danger" @click="getMore">加载更多</van-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageindex: 1,
      // 存放输入框里面的值
      addForm: {
        content: ''
      },
      // 存放评论详情信息的
      CommentsList: [],
      // 传递的id
      shopid : 0
    }
  },
  created() {
    this.shopid = window.localStorage.getItem('shopId')
    this.getGoodsComments()
  },
  methods: {
    // 获取评论列表
    async getGoodsComments() {
      let { data: res } = await this.$http.get(
        '/api/getcomments/'+this.shopid+'?pageindex=' + this.pageindex
      )
      if (res.status !== 0) {
        console.log('获取评论信息失败')
      }
      this.CommentsList = res.message
    },
    // 添加评论列表
    async addComment() {
      if (this.addForm.content.trim().length === 0) {
        this.$toast('留言不能为空')
        return true
      }
      let { data: res } = await this.$http.post(
        '/api/postcomment/'+this.shopid,
        this.addForm
      )
      this.CommentsList.push(res.message)
      this.getGoodsComments()
      this.addForm.content = ''
    },

    // 输入框里面的值发生变化的时候
    contentChange(value) {
      if (value.trim().length !== 0) {
        var re = /滚|死|操/g // 过滤北京、百度、淘宝为* |代表或 注意加g如果不加g只能替换掉一个
        value = value.replace(re, '*') // 如果想把敏感词去掉直接把**换成空格
        this.addForm.content = value
      }
    },
    // 输入框失去焦点的时候

    // 加载更多的
    async getMore() {
      let { data: res } = await this.$http.get(
        '/api/getcomments/'+ this.shopid +'pageindex=' + ++this.pageindex
      )
      this.CommentsList.push(...res.message)
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  margin-left: 15px;
  margin-right: 15px;
}
/deep/.van-cell {
  border: 1px solid #aaa;
  height: 100px;
}
.p1 {
  background-color: #ccc;
  line-height: 30px;
}
p {
  font-size: 12px;
  word-break: break-word;
}
.van-button {
  width: 100%;
  margin-top: 7px;
  margin-bottom: 0px;
}
</style>
