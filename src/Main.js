import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Post from './components/Post.vue'
import App1 from './components/App1.vue'
import App from './components/App.vue'
import Studinfo from './components/Studinfo.vue'
import Weather from './components/Weather.vue'
import store from './store.js'

const routes =[
    {path:'/',component:App},
    {path:'/Post/',component:Post},
    {path:'/Weather/',component:Weather},
    {path:'/Studinfo/:id',component:Studinfo,props:true},
]

const router = new VueRouter({
    routes
})

Vue.use(VueRouter)
Vue.use(VueAxios,axios)

new Vue({
    render:h=>h(App1),
    el:'#app',
    router,
    store
})