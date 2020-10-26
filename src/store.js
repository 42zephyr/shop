import Vue from 'vue'
import VueRouter from 'vue-router'
import createPersistedState from 'vuex-persistedstate'
import Vuex from 'vuex'

Vue.use(Vuex)

const store= new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        price:0,
        goods:[]
    },
    mutations: {
        addToC:(state,c)=>state.price+=c,
        addTog:(state,c)=>state.goods.push(c)
    },
    getters: {
        getCount:(state)=>
        {
            return ('Ціна = '+state.price+' Перелік товарів:'+state.goods)
        },
    }
})
export default store;