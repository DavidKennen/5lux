<template>
    <div class="navs">
        <div class="t-NavList">
            <!-- <router-link> -->
            <router-link tag="span" v-for="(item,index) in tabBar" :to="item.path" :key="index">{{item.title}}</router-link>
        
        </div>
    
    </div>    
</template>


<script>
export default {
    name:"tabBar",
    data(){
        return{
            tabBar:[
                {
                    title:"品牌",
                    path:"/brand"
                },
                {
                    title:"旗舰店",
                    path:"/flagshop"
                },
                {
                    title:"分类",
                    path:"/classify"
                }
            ]
        }
    },
    // methods:{
    //     handel(index){
    //         alert(1)
    //     }
    // }



}
</script>



<style>
    .navs{
       height: 44px;
    width: 100%;
    z-index: 1;
    left: 0;
    top: 0;
    position: relative;
    background-color: #181818;
    text-align: center;
    position: fixed;
    z-index: 15;
    }
    .nav>.t-NavList{
        height: 44px;
    display: -ms-flexbox;
    display: flex;
    color: #ffffff;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    
    }
    .t-NavList>span{
        font-size: 16px;
    margin: 0 12px;
    color: #ffffff
    }
</style>
