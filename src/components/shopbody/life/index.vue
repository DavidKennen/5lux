<template>
     <!-- 旗舰店 -->
    <div class="fashion">
      <div class="fashion_p" >
        <p class="fashion_pp">{{tarbarl.title}}</p>
        <p class="fashion_pf">{{tarbarl.title_en}}</p>
      </div>
      <div class="fashion_list" v-for="(item,index) in tarbarle" :key="index">
        <a href="#">
          <img :src="item.ad_code" alt="">
          <p>{{item.ad_name}}</p>
        </a>
      </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
  name:"life",
    created() {
    
    axios("https://apim.restful.5lux.com.cn/shop/home_all_info").then((res)=>{
    
      this.tarbarl = res.data.data.top5flag
      //  console.log(this.tarbarl)
      this.tarbarle = res.data.data.top5flag.list
      //console.log(this.tarbarle)
    })
  },
  data() {
    return {
      tarbarl:[],
      tarbarle:[],

    }
  }
}
</script>
<style>
/* 旗舰店 */
.fashion {
  width: 100%;
  font-size: 14px;
  padding-top: 10px;
  border-bottom: 10px solid #f2f2f2;
}
.fashion .fashion_p {
  margin: 0 auto;
  line-height: 20px;
  text-align: center;
}
.fashion .fashion_p .fashion_pp {
  font-weight: 900;
}
.fashion .fashion_p .fashion_pf {
  font-size: 10px;
}
.fashion .fashion_list {
  width: 100%;
  height: 220px;
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;
}
.fashion .fashion_list img {
  width: 100%;
  height: 100%;
}
.fashion .fashion_list a {
  display: block;
  width: 100%;
  height: 100%;
}
.fashion .fashion_list a p {
  color: #fff;
  font-size: 18px;
  display: inline-block;
  position: absolute;
  left: 25%;
  bottom: 20px;
}
.fashion .fashion_listimg {
  margin-top: 8px;
  width: 100%;
  height: 218px;
  display: flex;
  justify-content: space-between;
}
.fashion .fashion_listimg img {
  width: 99%;
  height: 99%;
}
</style>


