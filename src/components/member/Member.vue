<template>
  <div class="member">
    <div class="set">
      <van-icon name="setting-o" />
      <p>正在加班加点开发中，敬请期待！</p>
    </div>
  </div>
</template>

<style lang="less" scoped>
.member {
  text-align: center;
  .set .van-icon {
    display: inline-block;
    margin-top: 20px;
    font-size: 25px;
    height: 30px;
    line-height: 30px;
    -webkit-animation: rotat 3s linear 0s infinite;
    animation: rotat 3s linear 0s infinite;
  }
  p {
    width: 100%;
    font-size: 16px;
    margin:10px 0;
  }
}

@keyframes rotat {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
</style>
