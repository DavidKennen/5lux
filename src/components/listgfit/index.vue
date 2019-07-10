<template>
  <div>
    <P class="line">
      <span>WHY</span>
    </P>
    <div class="contentimg">
      <ul>
        <li v-for="(item,index) in tarbar" :key="index">
          <a href="#">
            <img :src="item.thumb" />
            <p>{{item.title}}</p>
          </a>
        </li>
      </ul>
      <p class="more_b">已经是最后一页了</p>
    </div>

  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "gfit",

  created() {
    axios("https://apim.restful.5lux.com.cn/gift/gift_why?page=1").then(res => {
      //console.log(res);
      this.tarbar = res.data.data.gift_why;
      //console.log(this.tarbar);
    });
  },
  data() {
    return {
      tarbar: []
    };
  }
};
</script>
<style>
</style>
