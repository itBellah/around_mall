<template>
  <div class="box">
    <!-- {{this.$route.query.id}} -->
    <h4>{{deta.title}}</h4>
    <div>
      <div class="box_two">
        <span>发表时间: {{deta.add_time | dateFormat }}</span>
        <span>点击次数: {{deta.click}}</span>
      </div>
      <!-- 内容主体区域 -->
      <div v-html="deta.content" class="box_content"></div>
    </div>
    <my-comments></my-comments>
  </div>
</template>

<script>
export default {
  data () {
    return {
      deta: [],
      id: 0
    }
  },
  created () {
    this.getDetail()
  },
  methods: {
    async getDetail () {
      const { data: res } = await this.$http.get('/api/getnew/' + this.$route.query.id)
      this.deta = res.message[0]
      console.log(this.deta)
    }
  }
}
</script>

<style lang="less" scoped>
.box h4{
  color: #1989fa;
  margin: 20px auto;
  text-align: center;
  font-size: 15px
}
.box_two{
  padding: 0 10px 7px 10px;
  font-size: 12px;
  color: #1989fa;
  display: flex;
  justify-content:space-between;
  border-bottom: 1px solid rgb(212, 210, 210);
}
.box_content{
  padding: 0 10px;
  font-size: 15px
}
</style>
