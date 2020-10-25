<template>
   <div class="main">
       <h1>Post</h1>
       <div class="content">
           <select v-model="chw" v-for="city in cities" v-bind:key="city.Ref" @change="found()">
               <option>{{ city.Description }}</option>
           </select>
           <br>
           <div v-if="found==true">
           <select v-for="wareh in warehs" v-bind:key="wareh.Ref" >
               <option>{{ wareh.Description }}</option>
           </select>
           </div>
       </div>
   </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

export default {
    data(){
        return{
            cities:[],
            chw:"",
            warehs:[],
            found:false
        }
    },
    methods:{
            found:function(){
                 Vue.axios.post("https://api.novaposhta.ua/v2.0/json",
        {
          "modelName": "AddressGeneral",
    "calledMethod": "getWarehouses",
          "methodProperties":{
              "CityDescription":this.chw,
        },
        "apiKey":"9a557481f95094531372a9d1b55222c8"
      })
      .then((response)=>{
          console.log(response.data.data);
          this.warehs=response.data.data;
      }) 
            }
    },
    mounted:function(){
        //  Vue.axios.post("https://api.novaposhta.ua/v2.0/json",
    //     {
    //       "modelName":"AddressGeneral",
    //       "calledMethod":"getCities",
    //       "methodProperties":{
    //           "Warehouse":"1",
    //     },
    //     "apiKey":"9a557481f95094531372a9d1b55222c8"
    //   })
    //   .then((response)=>{
    //       console.log(response.data.data);
    //       this.cities=response.data.data;
    //   }) 
    }
}
</script>