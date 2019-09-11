<template>
  <div>
    <!-- 头部区域 -->
    <van-nav-bar title="黑马程序员" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!-- 搜索框 -->
    <div class="box">
      <van-search placeholder="请输入商品名称" v-model="name" @search="onSearch" />
      <van-button type="info" size="large" @click="add">添加商品</van-button>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      name: ""
    };
  },
  methods: {
    //返回
    onClickLeft() {
      this.$router.push("/search");
    },
    //进行添加操作
    async add() {
      if (this.name.length === 0) return this.$notify("请输入内容");
      // let name = this.value
      // console.log(this.name);
      //  name = this.name
      let { data: res } = await this.$http.post("/api/addproduct", {
        name: name
      });
      if (res.status !== 0) return this.$notify("用户添加失败");
      this.$notify({ type: "success", message: "用户添加成功" });
      this.$router.push("/search");
    },
    //回车键添加
    async onSearch() {
      if (this.name.trim().length === 0)
        return this.$notify.success("请输入内容");
      // let name = this.value
      // console.log(this.name);
      //  name = this.name
      let { data: res } = await this.$http.post("/api/addproduct", {
        name: name
      });
      if (res.status !== 0) return this.$notify("用户添加失败");
      this.$notify({ type: "success", message: "用户添加成功" });
      this.$router.push("/search");
    }
  }
};
</script>

<style lang="less" scoped>
.box {
  padding: 0 12px;
}
.van-button {
  margin: 40px 0;
  height: 40px;
  line-height: 40px;
  border: 1px solid #1989fa;
}
</style>