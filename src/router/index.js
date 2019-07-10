import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


import cart from "./cart";
import shop from "./shop";
import country from "./country";
import gfit from "./gfit";
import list from "./list";
import shopnav from "./shopnav"

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/shop"
    },
   cart,
   shop,
   country,
   list,
   gfit,
   shopnav
  ]
})
