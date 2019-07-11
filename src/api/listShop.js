

// https://apim.restful.5lux.com.cn/good/storelist?mtoken=&region_id=&brand_id=&longitude=&latitude=&is_nearby=&is_bespeak=&page=

import http from "utils/http.js"

export const getShop = ()=>http("get","/good/storelist",{mtoken:'',region_id:'',brand_id:'',longitude:'',latitude:'',is_nearby:'',is_bespeak:'',page:''});

// https://apim.restful.5lux.com.cn/good/storelist?mtoken=&region_id=&brand_id=&longitude=&latitude=&is_nearby=&is_bespeak=&page=



