import Vue from 'vue'
import VueRouter from 'vue-router'
import createPersistedState from 'vuex-persistedstate'
import Vuex from 'vuex'

Vue.use(Vuex)

const store= new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        count:0,
    },
    mutations: {
        setCount:(state,c)=>state.count=c,
    },
    getters: {
        getCount:(state)=>
        {
            return ('Кількісь студентів = '+state.count)
        }
    }
})
export default store;