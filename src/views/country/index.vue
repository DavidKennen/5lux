<template>
  <div>
    <!-- 头部 -->
    <ListHeaderCom title="国家地区" />
    <!-- 内容区 -->
    <div id="mian">
      <ul>
        <li v-for="(item,index) in tarbar" :key="index">
          <img :src="item.project_img" alt />
          <p class="text_t">{{item.project_title}}</p>
          <p class="text-p">
            {{item.flag}}：
            <span>${{item.market_price}}</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "country",
  created() {
    axios("https://apim.restful.5lux.com.cn/ovsproject/ovsproject_list").then(
      res => {
        //console.log(res);
        this.tarbar = res.data.data.ovsproject_project;
        console.log(this.tarbar);
      }
    );
  },
  data() {
    return {
      tarbar: [],
      datazr: 0
    };
  }
};
</script>


<style scoped>
/* 内容区 */

#mian {
  width: 100%;
  height: 100%;
  padding: 44px 0;
}
#mian ul {
  width: 100%;
  position: relative;
}
#mian ul li {
  border-top: 10px solid #e5e5e5;
  padding: 10px 20px;
  box-sizing: border-box;
}

#mian ul img {
  width: 100%;
  height: 100%;
}
#mian ul p {
  line-height: 40px;
}
#mian ul .text_t {
  color: black;
  font-weight: 700;
  font-size: 18px;
}
#mian ul p {
  font-size: 14px;
}
#mian ul p span {
  font-size: 14px;
  color: rgb(51, 160, 255);
}


</style>
