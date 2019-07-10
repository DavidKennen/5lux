<template>
  <div id="app">
     <TabBar/>
     
   <router-view></router-view>
   <Common/>
  </div>
</template>


<script>
import TabBar from "common/footer"
// console.log(TabBar)
import Common from "views/commoList"
console.log(Common)
export default {
  name:"app",
  components:{
    TabBar,
    Common
  }
}


</script>
<style >

</style>
