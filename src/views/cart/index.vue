<template>
  <div>
    <!-- 头部 -->
    <ListHeaderCom title="购物袋"/>
    <!-- 购物车 -->
    <div class="cartlist">
      <div class="cartlist_list">
        <div class="cartlist_cart">
          <img src="../../assets/cart.png" alt />
        </div>
        <p>暂无商品</p>
        <p class="cartlist_listj">您的金袋子空了，快让他变奢侈吧</p>
        <p class="extravagant">去奢侈</p>
      </div>
    </div>
    <!-- 猜您喜欢 -->
    <div class="text_like">金袋子猜您喜欢</div>
    <!-- 商品区 -->
    <div class="content" >
      <Loading v-if="loadingFlag" />
      <ul>
        <li v-for="(item,index) in tarbari" :key="index">
          <a href="#">
            <img
              :src="item.product_thumb"
              alt
            />
            <p>{{item.brand_name}}</p>
            <p class="text_ellipsis">{{item.sku_title}}</p>
            <p>
              <span class="text_price">￥{{item.product_price}}</span>
              <strike>￥{{item.market_price}}</strike>
            </p>
            <div class="text_sellout" v-if="item.product_number==0">已售罄</div>
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
  name: "cart",
  components:{
    ListHeader
  },
  created() {
    axios("https://apim.restful.5lux.com.cn/cart/getrecommend").then((res)=>{
         if (res) {
          this.loadingFlag = false;
        } else {
          this.loadingFlag = true;
        }
       //console.log(res);
        this.tarbari = res.data.data
        //console.log(this.tarbari);
    })
  },
  data() {
    return {
      tarbari: [],
      loadingFlag:true
    };
  }
}
  
</script>


<style>
body {
  background: rgba(0, 0, 0, 0.05);
  font-size: 12px;
}
/* 购物车 */
.cartlist {
  padding-top: 44px;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: auto;
}
.cartlist_list {
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
}
.cartlist_list .cartlist_listj {
  color: #999;
  margin-bottom: 10px;
}
.cartlist_list .extravagant {
  width: 249px;
  height: 40px;
  line-height: 40px;
  background: #9b885f;
  margin: 0 auto;
  color: #fff;
  border-radius: 5px;
}
.text_like {
  color: #999;
  text-align: center;
  font-size: 12px;
  margin: 20px 0;
}

/* 猜您喜欢 */

.content {
  width: 100%;
  height: 100%;
}
.content ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.content ul li {
  width: 49.5%;
  margin-bottom: 3px;
  background: #fff;
  position: relative;
}
.content ul li a {
  display: inline-block;
}
.content ul li a p {
  line-height: 20px;
  text-align: center;
}
.text_ellipsis {
  width: 185px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.text_price {
  color: #9b885f;
  font-weight: 700;
  text-align: center;
}
.content ul li img {
  width: 99%;
  height: 100%;
  margin-bottom: 1px;
}
content ul li .text {
  width: 100%;
}
.text_sellout {
  width: 65px;
  height: 65px;
  line-height: 65px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border-radius: 50%;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -32.5px;
  margin-top: -32.5px;
  z-index: 1;
}
</style>
