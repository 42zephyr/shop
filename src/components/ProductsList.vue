<template>
    <div class="products">
        <form class="searchbar">
            <input placeholder="Пошук" v-model="search">
            <input type="submit"  class="btn">
        </form>
        <div class="product" v-for="(item) in filteredItems" v-bind:key="item.id">
            <div class="product-image">
                <img src="http://robohash.org/185.39.11.105.png">
            </div>
            <div>
                <h4 class="product-title">
                    <router-link v-bind:to="'/product/' + item.id">
                        {{ item.item }}
                    </router-link>
                </h4>
                <label>{{item.price}}</label>
                <button class="btn" @click="add(item.item,item.price)">Add to cart</button>  
            </div>
        </div>
    </div>
</template>
<script>
    import products from '../data/products.js'
    import Vue from 'vue'
    import VueRouter from 'vue-router'
    import createPersistedState from 'vuex-persistedstate'
    import Vuex from 'vuex'
    export default {
        data: function () {
            return {
                items: [],
                search: '',
                searchResult: []
            };
        },
        methods:{
            add:function(item,price){
                this.$store.commit('addToC',price);
                this.$store.commit('addTog',item);
            }
        },
        mounted: function(){
            this.items = products;
            Vue.axios.get("./api/routes/todolistro.js'").then((response) => {
           console.log(response.data)
           this.items = response.data;
         })

        },
        computed: {
            filteredItems: function() {
                console.log(this);
                if (!this.search) {
                    return this.items;
                }
                return this.items.filter(element => {
                    return element.item.toUpperCase().includes(this.search.toUpperCase());
                });
            },
        }
    }
</script>
