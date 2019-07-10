<template>
  <div>
    <div v-if="datazr ==0||datazr =='0'   ">
      <HeaderCom />
      <!-- 导航 -->
      <div class="nav">
        <ul>
          <li
            v-for="(item,index) in tarbar"
            :key="index"
            @click="handleAddClass(item.cata_id,index)"
            :class="index==datazr?'border':''"
          >
            <a href="javascript:;">{{item.cata_name}}</a>
          </li>
        </ul>
      </div>
      <Shopbody />
    </div>
    <!-- 注释 -->

    <div v-if="datazr !='0'">
      <HeaderCom />
      <!-- 导航 -->
      <div class="nav">
        <ul>
          <li
            v-for="(item,index) in tarbar"
            :key="index"
            @click="handleAddClass(item.cata_id,index)"
            :class="index==datazr?'border':''"
          >
            <a href="javascript:;">{{item.cata_name}}</a>
          </li>
        </ul>
      </div>
      <!-- 内容区 -->
      <div class="contentgoods">
        <div>
          <img :src="imgs" alt />
        </div>
        <div class="shopnav_nav">
          <ul>
            <li>综合</li>
            <li>综合</li>
            <li>综合</li>
            <li>综合</li>
          </ul>
        </div>
        <div class="goodslist">
          <ul>
            <li>
              <img
                src="http://img550.5lux.com.cn/2019/07/10/qr/156275115163_2000x2000_350x350.jpg"
                alt
              />
              <div class="goodslistbox">
                <p>botttsaf adad</p>
                <p class="color_goods">badrewr wer</p>
                <p>
                  <span class="color_good">￥34848</span>
                  <strike class="color_goods">￥93838</strike>
                </p>
              </div>
            </li>
            <li>
              <img
                src="http://img550.5lux.com.cn/2019/07/10/qr/156275115163_2000x2000_350x350.jpg"
                alt
              />
              <div class="goodslistbox">
                <p>botttsaf adad</p>
                <p class="color_goods">badrewr wer</p>
                <p>
                  <span class="color_good">￥34848</span>
                  <strike class="color_goods">￥93838</strike>
                </p>
              </div>
            </li>
            <li>
              <img
                src="http://img550.5lux.com.cn/2019/07/10/qr/156275115163_2000x2000_350x350.jpg"
                alt
              />
              <div class="goodslistbox">
                <p>botttsaf adad</p>
                <p class="color_goods">badrewr wer</p>
                <p>
                  <span class="color_good">￥34848</span>
                  <strike class="color_goods">￥93838</strike>
                </p>
              </div>
            </li>
            <li>
              <img
                src="http://img550.5lux.com.cn/2019/07/10/qr/156275115163_2000x2000_350x350.jpg"
                alt
              />
              <div class="goodslistbox">
                <p>botttsaf adad</p>
                <p class="color_goods">badrewr wer</p>
                <p>
                  <span class="color_good">￥34848</span>
                  <strike class="color_goods">￥93838</strike>
                </p>
              </div>
            </li>
            <li>
              <img
                src="http://img550.5lux.com.cn/2019/07/10/qr/156275115163_2000x2000_350x350.jpg"
                alt
              />
              <div class="goodslistbox">
                <p>botttsaf adad</p>
                <p class="color_goods">badrewr wer</p>
                <p>
                  <span class="color_good">￥34848</span>
                  <strike class="color_goods">￥93838</strike>
                </p>
              </div>
            </li>
            <li>
              <img
                src="http://img550.5lux.com.cn/2019/07/10/qr/156275115163_2000x2000_350x350.jpg"
                alt
              />
              <div class="goodslistbox">
                <p>botttsaf adad</p>
                <p class="color_goods">badrewr wer</p>
                <p>
                  <span class="color_good">￥34848</span>
                  <strike class="color_goods">￥93838</strike>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
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
    handleAddClass(id,index) {
      console.log(id,index);
      if (index == 0) {
        this.datazr = index;
        axios("https://apim.restful.5lux.com.cn/shop/catalist").then((res) => {
          //console.log(res);
          this.tarbar = res.data.data;
          console.log(this.tarbar);
        });
      } else {
        this.datazr = index;
        axios("https://apim.restful.5lux.com.cn/shop/catalist").then((res) => {
          //console.log(res);
          this.tarbar = res.data.data;
        });
         axios("https://apim.restful.5lux.com.cn/good/cata_goods_list?id="+id+"&sort=&page=1&order=&is_self=&price=&location_id=&cata_id=&attr=").then((res) => {
          //console.log(res);
          this.shopnav = res;
        });
         axios("https://apim.restful.5lux.com.cn/shop/cata_recommend?cata_id="+id).then((res) => {
       
          this.imgs = res.data.data.ads_list[0].ad_code;
        });
        
      }
    }
  },

  created() {
    console.log(this.datazr)
    axios("https://apim.restful.5lux.com.cn/shop/catalist").then(res => {
      // console.log(res);
      this.tarbar = res.data.data;
    });
  },
  data() {
    return {
      tarbar: [],
      shopnav:[],
      imgs:"",
      datazr:0
    };
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

.contentgoods{
  width: 100%;
  overflow: auto;
  padding: 83px 0 44px;
}
.contentgoods img {
  width: 100%;
  height:228px ;
}
.shopnav_nav{
  width: 100%;
 
}
.shopnav_nav ul{
  display: flex;
  justify-content: space-around;
}
.shopnav_nav ul li{
  font-size: 14px;
  line-height: 26px;
  text-align: center;
}

.goodslist{
  width: 100%;
  font-size: 12px;
}
.goodslist ul{
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  justify-items: center;

}
.goodslist ul li{
  width: 49.3%;
  height: 288px;
  display: flex;
  border: 1px solid #ccc;
  flex-direction: column;
  align-items: center;
}
.goodslist ul li img{
  width: 146px;
  height: 146px;
}
.goodslist .goodslistbox{
  width:100%;
  height:50px ;
  margin-top: 40px;
}
.goodslist .goodslistbox p{
  line-height: 20px;
}
/* https://apim.restful.5lux.com.cn/shop/catalist */

.color_goods{
  color:#999;

}
.color_good{
  color:#9b885f;
}

</style>
