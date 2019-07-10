<template>
<div>
 <ListHeader/>
    <div id="content">
      <ul>
        <li v-for="(item,index) in tarbar" :key="index">
          <a href="#">
            <img :src="item.banner_m" alt />
            <div class="text">
              <p>{{item.name}}</p>
              <p>{{item.name_en}}</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import ListHeader from "common/listheader"

export default {
  name: "list",
  components:{
    ListHeader
  },
  created() {
    axios("https://apim.restful.5lux.com.cn/ovscountry/ovscountry_list").then((res) => {
        //console.log(res);
        this.tarbar = res.data.data.ovsproject_country;
        //console.log(this.tarbar);
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


<style>

/* 内容区 */
#content {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: auto;
  padding: 44px 0;
}
#content ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
#content ul li {
  width: 50%;
  margin-bottom: 3px;
  position: relative;
}
#content ul li img {
  width: 99%;
  height: 100%;
  margin-bottom: 1px;
}
#content ul li .text {
  width: 100%;
  position: absolute;
  bottom: 30px;
  left: 0;
  color: #fff;
}
#content ul li .text p {
  text-align: center;
  font-size: 14px;
  font-family: PingFang SC, STHeiTisc-Light, Helvetice-Light, arial, sans-serif;
}
</style>
