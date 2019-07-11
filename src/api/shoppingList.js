
// https://apim.restful.5lux.com.cn/good/brands
// https://apim.restful.5lux.com.cn/good/top_catlist?id=
// https://apim.restful.5lux.com.cn/good/catlist?id=107
// https://apim.restful.5lux.com.cn/good/brandstore
import http from "utils/http.js"

export const getBrand = ()=>http("get","/good/brands");

export const gooodList = ()=>http("get","/good/top_catlist",{id:''});

export const suitList = (idx=107)=>http("get","/good/catlist?id="+idx,);

export const logoIn = () =>http("get","good/brandstore")