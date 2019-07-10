<template>
  <div class="bgl">
    <div class="shopbanner">
      <a href="#">
        <img :src="tarbarb.thumb" alt />
      </a>
      <p>{{tarbarb.title}}</p>
    </div>
    <div class="shoplist">
      <ul>
        <li v-for="(item,index) in tarbarc" :key="index">
          <a href="#">
            <img :src="item.store_thumb" alt />
            <p>{{item.store_title}}</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="shopaTug">
      <p>查看所有旗舰店></p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "life",
  created() {
    axios("https://apim.restful.5lux.com.cn/shop/get_flagship_recommend").then(
      data => {
        //  console.log (data.data.data);
        this.tarbarb = data.data.data[0];
        // console.log(this.tarbarb);
        this.tarbarc = data.data.data[0].store_infos;
        //console.log(this.tarbarc);
      }
    );
  },
  data() {
    return {
      tarbarb: [],
      tarbarc: []
    };
  }
};
</script>
<style>
/* 宝格丽 */
.bgl {
  width: 100%;
}
.shopbanner {
  margin-top: 20px;
  width: 100%;
  height: 212px;
  border-top: 10px solid #f2f2f2;
  position: relative;
  margin-bottom: 5px;
}
.shopbanner p {
  position: absolute;
  left: 40%;
  bottom: 30px;
  color: #fff;
  font-size: 22px;
}
.shopbanner img {
  width: 100%;
  height: 100%;
}
.bgl .shoplist {
  width: 100%;
  font-size: 6px;
  display: flex;
  justify-content: space-between;
  overflow: auto;
}
.bgl .shoplist ul {
  width: 1000px;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.shoplist ul li {
  width: 24%;
  position: relative;
}
.shoplist ul li img {
  width: 100%;
}
.shoplist ul li p {
  position: absolute;
  left: 10px;
  bottom: 10px;
  color: #fff;
  z-index: 12;
}
.shopaTug {
  width: 100%;
  padding-bottom: 10px;
}
.shopaTug p {
  margin: 0 auto;
  width: 135px;
  height: 24px;
  background: #333;
  color: #fff;
  font-size: 14px;
  border-radius: 5px;
  text-align: center;
  line-height: 24px;
}
</style>

