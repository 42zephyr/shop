import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './components/App.vue'
import ProductInfo from './components/ProductInfo.vue'
import ProductsList from './components/ProductsList.vue'
import Basket from './components/Basket.vue'
import store from './store.js'

const routes = [
    { path: '/', component: ProductsList },
    { path: '/Basket/', component: Basket },
    { path: '/product/:id', component: ProductInfo }
]

const router = new VueRouter({
    routes
})

Vue.use(VueRouter)

new Vue({
    render: h => h(App),
    el: '#app',
    router,
    store
})
