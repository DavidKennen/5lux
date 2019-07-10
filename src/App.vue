<template>
  <div id="app">
   <router-view></router-view>
   <TabBar :listData="tarbar"/>
  </div>
</template>
<script>
  import TabBar from "common/footer/"
 
 //import axios from "axios";
  export default {
    name:"app",
    data () {
      return {
        tarbar: [
          {
          title:"首页",
          icon:"&#xe61c;",
          path:"/shop"
          },
          {
          title:"商城",
          icon:"&#xe634;",
          path:"/country"
          },
  
          {
          title:"海外服务",
          icon:"&#xe60a;",
          path:"/list"
          },         
          {
          title:"到店",
          icon:"&#xe633;",
          path:"/cart"
          },
          {
          title:"礼品",
          icon:"&#xe62a;",
          path:"/gfit"
          }
        ]
      }
    },
    components:{
      TabBar
    },
    created () {
      // fetch("http://localhost:8080/index/index_button")
      //   .then(response=>response.json())
      //   .then(res=>{
      //     //this.tarbar = res.data.list
      //     console.log(res)
      //   })

      // axios("http://localhost:8080/index/index_button")
      // .then(res=>{
      // console.log(res)
      //   // this.tarbar = res.data.list
      // })
      
    }
  }
</script>

<style scoped>

</style>
