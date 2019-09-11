<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar
      title="黑马程序员"
      left-text="返回"
      right-text="添加"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 搜索框 -->
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>

    <van-cell title="搜索历史" v-show="sou">
      <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <van-icon @click="clr" slot="right-icon" name="cross" style="line-height: inherit;" />
    </van-cell>

    <!-- 搜索历史 -->
    <div v-show="lishi">
      <!-- 显示的历史搜索 -->
      <div>
        <van-tag @click="tag(item)" v-for="(item) in arr" :key="item">{{item}}</van-tag>
      </div>
    </div>
    <!-- 展示数据 -->
    <div v-show="shuju">
      <van-swipe-cell v-for="item in seachList" :key="item.id">
        <van-cell :border="false" :title="item.name" :value=" item.ctime | dateFormat" />

        <template slot="right">
          <van-button @click="remove(item.id)" square type="danger" text="删除" :id="item.id" />
        </template>
      </van-swipe-cell>
    </div>
    <!-- 分割线 -->
    <van-divider v-show="zan">暂无搜索历史</van-divider>
    <!-- 对话框 -->
    <van-dialog v-model="show" title="警告" show-cancel-button @confirm="con" @cancel="can">
      <div>是否删除该记录？</div>
    </van-dialog>
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      i: 1,
      active: 0,
      // 输入框中的值
      value: "",
      // 搜索列表
      seachList: [],
      // 显示搜索
      shuju: false,
      // 对话框显示
      show: false,
      // 隐藏按钮
      lishi: true,
      sou: true,
      zan: false,
      // 每次输入都将vaule值放入里面
      // 历史数组
      arr: []
      // 控制历史记录分割线显示隐藏
    };
  },
  created() {
    this.getSeachlist();
    //从本地存储获取数据
    let arrs = JSON.parse(window.localStorage.getItem("key"));
    //判断是否是个空数组  
    this.arr = arrs||[];
    // console.log(arrs)
  },
  methods: {
    // 获取搜索列表
    async getSeachlist() {
      let { data: res } = await this.$http.get("/api/getprodlist");
      this.seachList = res.message;
      // console.log(res);
    },
    // 点击返回按钮
    onClickLeft() {
      this.$router.push("/home");
    },
    // 点击添加
    onClickRight() {
      this.$router.push("/add");
    },
    // 点击取消
    onCancel() {
      this.shuju = false;
      this.lishi = true;
      this.sou = true;
      this.zan = false;

      this.value = "";
    },
    // 回车搜索
    async onSearch() {
      if (this.value.trim().length === 0) return this.$toast("请输入内容");
      // 每次搜索都将arr数组中的数据进行过滤  进行判断 是否存在
      let newArr = this.arr.filter(v => {
        return v == this.value;
      });
      console.log(newArr)
      if (this.value == newArr.join()) return;

      this.arr.unshift(this.value);
      // 将数据保存在本地存储中
      window.localStorage.setItem("key", JSON.stringify(this.arr));
      this.lishi = false;
      // 数据页面展示
      this.shuju = true;
    },
    // 点击删除按钮
    async remove(id) {
      this.show = true;
      let { data: res } = await this.$http.get("/api/delproduct/" + id);
      if (res.status !== 0) return this.$notify("删除失败");
    },
    // 点击确定按钮时
    con() {
      console.log(123);
      this.$notify({ type: "success", message: "删除成功" });
      this.getSeachlist();
    },
    // 点击取消按钮时
    can() {
      this.$notify({ type: "success", message: "取消删除" });
    },
    // 点击tag时
    tag(i) {
      // console.log(i);

      this.value = i;
    },
    // 点击清空本地存储
    clr() {
      // 删除本地存储
      window.localStorage.setItem("key", []);

      this.arr = [];
      this.zan = true;
    }
  }
};
</script>

<style lang="less" scoped>
.van-nav-bar {
  background-color: #1989fa;
}
.van-nav-bar__title {
  color: #fff;
}
.van-nav-bar .van-icon {
  color: #fff;
}
.van-nav-bar__text {
  color: #fff;
}

.van-dialog__content {
  padding-top:10px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: #7d7e80;
  text-align: center;
  div{
    text-align:center;
  }
}
.van-tag {
  margin: 20px;
}
</style>
