<template>
  <div>
    <HeaderCom />
    <!-- 导航 -->
    <div class="nav" >
      <ul>
        <li v-for="(item,index) in tarbar" :key="index" @click="handleAddClass(index)"  :class="index==datazr?'border':''">
          <a href="javascript:;">{{item.cata_name}}</a>
        </li>
      </ul>
    </div>
    <Shopbody />
  </div>
</template>


<script>
// import {getNavs} from "api/home"
import axios from "axios";
import Shopbody from "components/shopbody";

export default {

  name: "shop",
  components: {
    Shopbody
  },
  methods: {
    handleAddClass(index){
     this.datazr= index

    }

  },

  created() {
    axios("https://apim.restful.5lux.com.cn/shop/catalist").then(res => {
     //console.log(res);
      this.tarbar = res.data.data
      // console.log(this.tarbar);
      
    })
  },
  data() {
    return {
      tarbar: [],
      datazr:0,
    }
  }
};
</script>


<style scoped>
.nav {
  width: 100%;
  height: 39px;
  background: #fff;
  overflow-x: auto;
  margin-top: 44px;
  position: fixed;
  color: #333;
  z-index: 99999;
}
.nav::-webkit-scrollbar {
  display: none;
}
.nav ul {
  width: 800px;
  height: 39px;
  line-height: 39px;
  display: flex;
  justify-content: space-around;
}
.nav ul li {
  font-size: 14px;
  line-height: 39px;
}
.border {
  border-bottom: 3px solid rgb(76, 75, 75);
}


</style>
