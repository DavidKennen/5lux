<template>

    <div>
        <div class="brandflagship" v-for="(item,index) in logo" :key="index">
        <div class="detail"><a>A-Z</a></div>
        <div>
            <!---->
        </div> 
        <Loading v-if="LoadingLogo"/>
            <img :src="item.img_url"
            style="position: absolute; z-index: 1; filter: blur(10px); height: 100%; width: 100%;">
        <div style="width: 100%;"  v-if="!LoadingLogo">
            <div class="swiper-container swiper-container-horizontal swiper-container-3d swiper-container-coverflow">
                <div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);">
                    <div class="swiper-slide swiper-slide-active"
                        style="width: 414px; transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg); z-index: 1;">
                        <a><img width="100%" :src="item.page_thumb">
                            <div class="content">
                                <div class="name">{{item.title}}</div>
                                <div class="count">{{item.collect_count}}</div>
                            </div>
                        </a></div>
                 
                </div>
            </div>
        </div>
        </div>
    </div>
    
</template>

<script>
import TabBar from "common/footer"
import {logoIn} from "api/shoppingList"
export default {
    name:"flagshop",
    components:{
        TabBar
    },
    async created(){
        let logos = await logoIn();
        if(logos){
            this.LoadingLogo = false
        }else{
            this.LoadingLogo = true
        }
        console.log(logos.data.mbpage_list)
        this.logo = logos.data.mbpage_list;
    },
    data(){
        return{
            logo:[],
            LoadingLogo:true
        }
    }
}
</script>

<style>
.swiper-wrapper .swiper-slide {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
}
.brandflagship .detail {
    position: absolute;
    right: 0;
    top: 0;
    width: 36px;
    height: 36px;
    background: rgba(0,0,0,.8);
    z-index: 2;
    margin: 2.66%;
    border-radius: 50%;
}
.brandflagship .detail a {
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 100%;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 14px;
    color: #fff;
}
.brandflagship {
    position: fixed!important;
    top: 44px;
    left: 0;
    bottom: 0;
    background: #ccc;
    background-size: 100% 100%;
    width: 100%;
    overflow: hidden;
}
.swiper-container-3d {
    -webkit-perspective: 1200px;
    -moz-perspective: 1200px;
    -o-perspective: 1200px;
    perspective: 1200px;
}
.swiper-container {
    background: #fff;
    position: absolute;
    top: 56px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
    display:flex;
    justify-content: center;
}
.swiper-container .swiper-wrapper .swiper-slide a {
    display: block;
}
.brandflagship .swiper-wrapper .swiper-slide a {
    margin: 7%;
    border-radius: 20px;
    overflow: hidden;
    display: block;
    box-shadow: 0 0 5px rgba(0,0,0,.5);
}
.content {
    /* height: 100%; */
    background: #ffffff;
    line-height: 60px;
    overflow: hidden;
}
.brandflagship .swiper-wrapper .swiper-slide a .content .name {
    display: inline-block;
    font-size: 15px;
    color: #333;
    margin-left: 15px;
    float: left;
}
.brandflagship .swiper-wrapper .swiper-slide a .content .count {
    display: inline-block;
    height: 20px;
    background: #999;
    line-height: 20px;
    padding: 0 5px;
    margin: 20px 30px;
    color: #fff;
    font-size: 12px;
    border-radius: 8px;
    float: right;
}
</style>
