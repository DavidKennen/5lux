<template>
   
    
     <div>
        <TabBar/>
        <Loading v-if="loadingList"/>
        <div class="brandtype">
           <div  v-if="!loadingList">
        <div class="menuWarpper" >
            <ul class="menu"
                style="transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
                <li class="menulist border-1px menu-list-hook bgfff scroll" v-for="(item,index) in list" :key="index" @click="handleTab(item.id)">
                    {{item.cata_name}}
                </li>
                
            </ul>
        </div>
       
        <Loading v-if="logTap"/>
        <div class="typeWarpper" ref="classifyList" v-if="!logTap">

            <ul class="type" >
                <li class="typelist" v-for="(item,index) in show" :key="index">
                    <!---->
                    <div class="title"><span class="line border-1px" ></span> <span class="name" 
                    >{{item.cata_name}}</span> <span
                            class="line border-1px"></span></div>

                            
                    <ul class="contentwarpper" >
                        <li class="conlist" v-for="(itm,idx) in item.child_list" :key="idx"><a href=""></a> <a class="conlink"><img
                                    :src="itm.cata_thumb">
                                <p class="name">{{itm.cata_name}}</p>
                            </a></li>
                    </ul>
                </li>
                
            </ul>
            <!---->
        </div>
        </div>
    </div>
  </div>
      
    
</template>

<script>
//加上template后报错并且不能滑动
import {gooodList} from "api/shoppingList"
import {suitList} from "api/shoppingList"
import TabBar from "common/footer"
// import BScroll from "better-scroll"

export default {
    name:"classify",
    components:{
        TabBar,
        
    },
    async created(){
        
        // console.log(this)
        let getData = await gooodList();
        if(getData){
             this.loadingList = false
        }else{
            this.loadingList = true
        }
        this.list = getData.data;
        // console.log(getData.data)

        let yifuList = await suitList();
        this.show = yifuList.data;
        // console.log(this.show)
        // console.log(this.show[0].child_list)
    },
    data(){
        return{
            list:[],
            show:[],
            loadingList:true,
         
        }
    },
    //滚动条设置
    // mounted(){
    //     this.scroll = new BScroll(this.$refs.classifyList)
    //     console.log(this.scroll)
    // },
    //tab栏数据切换
    methods:{
        async handleTab(idx){
            this.show = [];
            let yifuList = await suitList(idx);
          
            
             console.log(this.logTap)
            this.show = yifuList.data;
        }
    }
}
</script>

<style>

.conlink img{
    width: 100%;
}
.t-NavList>div> {
            display: flex;
            justify-content: center;
            align-items: center
        }

        .t-NavList>a {
            font-size: 16px;
            color: #7e8c8d;
            margin: 16px;
        }

        .active {
            color: #ccc
        }


        /* **************brandtype******************* */

        .brandtype {
            display: -ms-flexbox;
            display: flex;
            position: fixed;
            left: 0;
            top: 44px;
            bottom: 0;
            background: #ccc;
            width: 100%;
            overflow: hidden;
        }

        .brandtype .menuWarpper {
            position: absolute;
            left: 0;
            height: 100%;
            width: 24%;
            background: #f2f2f2;
        }

        .menu {
            transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
            transition-duration: 0ms;
            transform: translate(0px, 0px) translateZ(0px);
        }

        .brandtype .menuWarpper .menu .menulist {
            height: 56px;
            line-height: 56px;
            background-color: #f2f2f2;
            font-size: 13px;
            color: #333;
            position: relative;
            border-bottom: 1px solid #ccc;
            text-align: center;

        }


        .brandtype .typeWarpper {
            width: 76%;
            background: #fff;
            position: absolute;
            left: 24%;
            height: 100%;
            overflow-y: scroll;
        }

        .type {
            transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
            transition-duration: 0ms;
            transform: translate(0px, 0px) translateZ(0px);
        }

        .brandtype .typeWarpper .type .typelist {
            margin-top: 10px;
        }
        .brandtype .typeWarpper .type .typelist .title {
    display: -ms-flexbox;
    display: flex;
    padding: 15px 10px 10px;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    height: 13px;
}
.brandtype .typeWarpper .type .typelist .title .line {
    -ms-flex: 1;
    flex: 1;
    height: 0;
    position: relative;
}
.brandtype .typeWarpper .type .typelist .title .name {
    margin: 0 10px;
    font-size: 13px;
    height: 13px;
    color: #999;
}
.brandtype .typeWarpper .type .typelist .contentwarpper {
    overflow: hidden;
}
.brandtype .typeWarpper .type .typelist .contentwarpper .conlist {
    width: 33.3333%;
    margin: 6px 0;
    float: left;
}
.brandtype .typeWarpper .type .typelist .title .line:after {
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #ccc;
    content: " ";
}
.brandtype .typeWarpper .type .typelist .contentwarpper .conlist .conlink {
    display: inline-block;
    width: 100%;
    height: 0;
    padding-bottom: calc(100% + 13px);
}
.brandtype .typeWarpper .type .typelist .contentwarpper .conlist .conlink .name {
    font-size: 11px;
    color: #999;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: top;
    align-items: top;
    -ms-flex-pack: center;
    justify-content: center;
}
</style>




// <li class="typelist">
                    <!---->
                    <div class="title"><span class="line border-1px"></span> <span class="name">裤装</span> <span
                            class="line border-1px"></span></div>
                    <ul class="contentwarpper">
                        <li class="conlist"><a href=""></a> <a class="conlink"><img
                                    src="http://img550.5lux.com.cn/2017/05/03/cd/149378137943_160x160.png" width="100%">
                                <p class="name">牛仔裤</p>
                            </a></li>
                        <li class="conlist"><a href=""></a> <a class="conlink"><img
                                    src="http://img550.5lux.com.cn/2017/05/03/jk/149378137976_160x160.png" width="100%">
                                <p class="name">西裤</p>
                            </a></li>
                        <li class="conlist"><a href=""></a> <a class="conlink"><img
                                    src="http://img550.5lux.com.cn/2017/05/03/uv/149378138078_160x160.png" width="100%">
                                <p class="name">休闲裤</p>
                            </a></li>
                        <li class="conlist"><a href=""></a> <a class="conlink"><img
                                    src="http://img550.5lux.com.cn/2017/05/03/kl/149378137941_160x160.png" width="100%">
                                <p class="name">短裤</p>
                            </a></li>
                        <li class="conlist"><a href=""></a> <a class="conlink"><img
                                    src="http://img550.5lux.com.cn/2017/05/03/gh/149378137976_160x160.png" width="100%">
                                <p class="name">打底裤</p>
                            </a></li>
                        <li class="conlist"><a href=""></a> <a class="conlink"><img
                                    src="http://img550.5lux.com.cn/2017/05/03/rs/149378137965_160x160.png" width="100%">
                                <p class="name">连体裤</p>
                            </a></li>
                        <li class="conlist"><a href=""></a> <a class="conlink"><img
                                    src="http://img550.5lux.com.cn/2017/05/05/pq/149398682373_160x160.png" width="100%">
                                <p class="name">查看更多</p>
                            </a></li>
                    </ul>
                </li>
                <li class="typelist">
                    <!---->
                    <div class="title"><span class="line border-1px"></span> <span class="name">裙装</span> <span
                            class="line border-1px"></span></div>
                    <ul class="contentwarpper">
                        <li class="conlist"><a href=""></a> <a class="conlink"><img
                                    src="http://img550.5lux.com.cn/2017/05/05/cd/149395108044_160x160.png" width="100%">
                                <p class="name">连衣裙</p>
                            </a></li>
                        <li class="conlist"><a href=""></a> <a class="conlink"><img
                                    src="http://img550.5lux.com.cn/2017/05/05/wx/149395107974_160x160.png" width="100%">
                                <p class="name">及膝裙</p>
                            </a></li>
                        <li class="conlist"><a href=""></a> <a class="conlink"><img
                                    src="http://img550.5lux.com.cn/2017/05/05/pq/149395107978_160x160.png" width="100%">
                                <p class="name">婚纱</p>
                            </a></li>
                        <li class="conlist"><a href=""></a> <a class="conlink"><img
                                    src="http://img550.5lux.com.cn/2017/05/05/fg/149395107950_160x160.png" width="100%">
                                <p class="name">礼服</p>
                            </a></li>
                        <li class="conlist"><a href=""></a> <a class="conlink"><img
                                    src="http://img550.5lux.com.cn/2017/05/05/kl/149395107931_160x160.png" width="100%">
                                <p class="name">半裙</p>
                            </a></li>
                        <li class="conlist"><a href=""></a> <a class="conlink"><img
                                    src="http://img550.5lux.com.cn/2017/05/05/pq/149398682373_160x160.png" width="100%">
                                <p class="name">查看更多</p>
                            </a></li>
                    </ul>
                </li>
                <li class="typelist">
                    <!---->
                    <div class="title"><span class="line border-1px"></span> <span class="name">内衣</span> <span
                            class="line border-1px"></span></div>
                    <ul class="contentwarpper">
                        <li class="conlist"><a href=""></a> <a class="conlink"><img
                                    src="http://img550.5lux.com.cn/2017/05/05/qr/149395069822_160x160.png" width="100%">
                                <p class="name">文胸</p>
                            </a></li>
                        <li class="conlist"><a href=""></a> <a class="conlink"><img
                                    src="http://img550.5lux.com.cn/2017/05/05/ij/149395069753_160x160.png" width="100%">
                                <p class="name">内裤</p>
                            </a></li>
                        <li class="conlist"><a href=""></a> <a class="conlink"><img
                                    src="http://img550.5lux.com.cn/2017/05/05/bc/149395069828_160x160.png" width="100%">
                                <p class="name">泳衣</p>
                            </a></li>
                        <li class="conlist"><a href=""></a> <a class="conlink"><img
                                    src="http://img550.5lux.com.cn/2017/05/05/mn/149395069885_160x160.png" width="100%">
                                <p class="name">袜子</p>
                            </a></li>
                        <li class="conlist"><a href=""></a> <a class="conlink"><img
                                    src="http://img550.5lux.com.cn/2017/05/05/mn/149395069826_160x160.png" width="100%">
                                <p class="name">睡衣</p>
                            </a></li>
                        <li class="conlist"><a href=""></a> <a class="conlink"><img
                                    src="http://img550.5lux.com.cn/2017/05/05/uv/149395069765_160x160.png" width="100%">
                                <p class="name">美体塑身</p>
                            </a></li>
                        <li class="conlist"><a href=""></a> <a class="conlink"><img
                                    src="http://img550.5lux.com.cn/2017/05/05/pq/149398682373_160x160.png" width="100%">
                                <p class="name">查看更多</p>
                            </a></li>
                    </ul>
                </li>
