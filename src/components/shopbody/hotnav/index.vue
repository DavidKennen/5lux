<template>
  <!-- 热门分类导航 -->
  <div class="nav_list">
    <div class="list_list" v-for="(item,index) in tarbarr" :key="index">
      <a href>
        <i>
          <img :src="item.ad_code" />
        </i>
        <span>{{item.ad_name}}</span>
      </a>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "hotnav",
  created() {
    // axios("https://apim.restful.5lux.com.cn/shop/catalist").then(res => {
    // console.log(res);

    axios("https://apim.restful.5lux.com.cn/shop/buttons_info").then(res => {
      //  console.log(res);
      this.tarbarr = res.data.data.button_list
      // console.log(this.tarbarr);
    });
  },
  data() {
    return {
      tarbarr: []
    };
  }
};
</script>
<style>
/* 热门分类导航 */
.nav_list {
  width: 100%;
  height: 80px;
  font-size: 14px;
  display: flex;
  justify-content: space-around;
  color: #7e8c8d;
}
.nav_list i img {
  display: block;
  width: 50%;
  margin: 0 auto;
}

.list_list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.list_list a {
  display: block;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.list_list a span {
  margin-top: 6px;
}
</style>
