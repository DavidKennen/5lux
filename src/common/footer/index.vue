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
        background: #181818;
        width: 100%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 20;
        text-align: center;
        box-sizing: border-box;
    }
    .nav>.t-NavList{
        height: 44px;
        color: #ccc;
        display: flex;
        justify-content: center;
        align-items: center;

    }
    .t-NavList>span{
        font-size: 16px;
        color: #fff;
        margin: 16px;
        height: 100%;
    }
</style>
