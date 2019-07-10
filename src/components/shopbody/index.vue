<template>
      <!-- 内容区 -->
  <div id="mian">
    <!-- 轮播图 -->
    <Lbt/>
    <!-- 热门分类导航 -->
    <Hotnav/>
    <!-- 限时秒杀 -->
    <Limitehot/>
    <!-- 宝格丽 -->
    <Bgl/>
    <!-- 旗舰店 -->
    <Life/>
    <!-- 大家都在买 -->
    <HotBuy/>
    <!-- 下拉加载更多 -->
    <div class="load">
      <p>下拉加载更多</p>
    </div>
  </div>
</template>
<script>
//  import axios from "axios";
//import {getGoods} from "api/home"

import Hotnav from "components/shopbody/hotnav"
import HotBuy from "components/shopbody/hotbuy"
import Life from "components/shopbody/life"
import Lbt from "components/shopbody/lbt"
import Limitehot from "components/shopbody/limitehot"
import Bgl from "components/shopbody/bgl"
import Swiper from "swiper"


export default {
   name:"goods",

   components:{
     Hotnav,
     HotBuy,
     Life,
     Lbt,
     Limitehot,
     Bgl
   }
}
</script>



<style scoped >
/* 内容区 */
#mian {
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 83px 0 44px 0;
}




/* 下拉加载更多 */
.load {
  width: 100%;
  height: 50px;
  background: #f2f2f2;
}
.load p {
  color: #ccc;
  font-size: 14px;
  text-align: center;
  line-height: 50px;
}
</style>
