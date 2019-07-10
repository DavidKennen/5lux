<template>
  <div id="header">
    <i class="iconfont icon-zhixiangzuo" @click="handleGoback"></i>
    <span>{{title}}</span>
    <div style="opacity: 0"></div>
  </div>
</template>
<script>
export default {
  name: "listHeaderCom",
  props: {
    title: {
      type: String,
      default: "国家地区"
    }
  },
  methods:{
    handleGoback(){
      this.$router.replace('/shop')
    }

  }
};
</script>

<style scoped>
/* 头部 */
#header {
  width: 100%;
  height: 44px;
  line-height: 44px;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  padding: 6px 0;
  box-sizing: border-box;
}
</style>
