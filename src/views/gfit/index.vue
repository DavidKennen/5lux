<template>
  <div>
    <ListHeaderCom title="礼品袋" />
    <div class="contents">
      <ul>
        <li v-for="(item,index) in tarbar" :key="index">
          <a href="#">
            <img :src="item.thumb" alt />
            <p>{{item.title}}</p>
          </a>
        </li>
      </ul>
          <p class="more_t">查看更多</p>
      <Listgfit />
    </div>
  </div>
</template>


<script>
import axios from "axios";
import Listgfit from "components/listgfit";
export default {
  name: "gfit",
  components: {
    Listgfit
  },

  created() {
    axios("https://apim.restful.5lux.com.cn/gift/gift_tags").then(res => {
      //console.log(res);
      this.tarbar = res.data.data.gift_who;
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
.contents {
  width: 100%;
  height: 100%;
  padding: 44px 0;
  overflow: auto;
}
.more_t,.more_b {
  font-size: 14px;
}
.border_line {
  width: 100%;
  border-top: 10px solid #f2f2f2;
}
.line {
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  border-left: 4px solid #9b885f;
  margin: 5px 0;
}

.line span {
  padding-left: 10px;
}

.contents,.contentimg {
  width: 100%;
  height: 100%;

  box-sizing: border-box;
}

.contents ul,.contentimg ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
    padding: 0 15px;
}

.contents ul li {
  width: 49%;
  margin-bottom: 10px;
  background: #fff;
  position: relative;
}

.contents ul li a p {
  position: absolute;
  bottom: 10px;
  left: 40px;
  font-size: 18px;
  color: #fff;
  text-align: center;
}

.contents ul li img {
  width: 100%;
  height: 100%;
  margin-bottom: 1px;
  border-radius: 7px;
}

.contents .more_t {
  line-height: 26px;
  text-align: center;
  color: #666;
}

.contentimg ul li {
  width: 100%;
  margin-bottom: 8px;
  background: #fff;
  position: relative;
}

.contentimg ul li a {
  display: inline-block;
}

.contentimg ul li a p {
  position: absolute;
  width: 100%;
  bottom: 10px;
  left: 50px;
  font-size: 12px;
  color: #fff;
}

.contentimg ul li img {
  width: 100%;
  height: 100%;
}
#who::-webkit-scrollbar {
  display: none;
}
.contentimg .nomargin {
  margin-bottom: 0;
}
.more_b {
  line-height: 40px;
  text-align: center;
  color: #666;
  height: 40px;
  background: #f2f2f2;
}
</style>
