<template>
    <div class="s-content">
        <ul class="t-store_inner">
           <li v-for="(item,index) in list" :key="index">
                <a href="">
                    <img :src="item.store_thumb" alt="">
                    <div class="t-biaoti">{{item.title}}</div>
                    <div class="t-tuijian">推荐</div>
                    <div class="t-location">
                        <span class="t-location-logo"></span>
                        <span class="t-location-name">{{item.province_name}}</span>
                    </div>
                    <span class="t-location-shop">门店详情</span>
                </a>
           </li>
           
        </ul>
    </div>
    <!-- store_thumb -->
</template>


<script>
import {getShop} from "api/listShop"
export default {
    name:"commoList",
    async created(){
        let trade = await getShop();
        // console.log(trade.data)
        this.list = trade.data.store_list
        // console.log(trade.data.store_list)
    },
    data(){
        return{
            list:[]
        }
    }
}
</script>

<style>
.t-nav {
            width: 100%;
            height: 44px;
            background: red;
        }
        .t-store_inner{
            box-sizing: border-box;
            padding: 0 10px 0 10px; 
            
        }
        .t-store_inner li{
            width: 100%;
            display: flex;
            border:1px solid #cccc;
        }

        .t-store_inner li a{
            width: 100%;
            display: block;
        }
        .t-store_inner li a img{
            width: 100%;
        }
        .t-store_inner li a .t-biaoti{
            font-size: 18px;
            color: #000000;
            text-align: left;
            padding: 12.5px 12.5px 10px;
        }
        .t-store_inner li a .t-tuijian{
            width: 33px;
            height: 18px;
            background: #9b885f;
            margin: 0 10px 0 12px;
            font-size: 11px;
            color: #fff;
            text-align: center;
            line-height: 18px;
        }
        .t-location{
            float: left;
        }
        .t-location> .t-location-logo{
            /* background: url("images/shops.png") no-repeat; */
            display: inline-block;
            width: 11px;
            height: 15px;
            margin-left: 9px;
            background-size:11px 15px; 
        }
        .t-location> .t-location-name{
            font-size: 14px;
            color: #9b885f;
        }
        .t-location-shop{
            float:right;
            font-size: 14px;
            color: #000000;
            padding:20px 20px 0 0; 
            margin-bottom: 30px;
        }
</style>
