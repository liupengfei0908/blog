import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        asideStatus:false,
        navActive:"index",
        cateActive:"",
    },
    mutations:{
        updateAside(state,value){
            state.asideStatus = value;
        },
        updateNavActive(state,value){
            if(value!="category"){
                state.cateActive = "";
            }
            state.navActive = value;
        },
        updateCateActive(state,value){
            state.cateActive = value;
        }
    }
    
   
})
export default store