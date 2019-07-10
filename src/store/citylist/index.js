
import router from 'router'
const state = {
   
    goodsid:0,
  
}

const mutations = {
    
      handleAddClass(state,goodsid){
        
        state.goodsid = goodsid;
        console.log(state.goodsid)
      }
}

export default{
    state,
    mutations,
    namespaced:true
}