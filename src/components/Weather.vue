<template>
   <div class="main">
       <h1>Weather</h1>
       <div class="content">
           <input type="text" v-model="newc"> Назва міста<br>
           <button @click="add(newc)">Add</button><br>
           <select  v-model="chctyn">
               <option v-for="ci in cities" v-bind:key="ci"  @click="change()">{{ci}} </option>
           </select>
           <br>
           <button @click="change()">Change</button><br>
           <div v-if="show==true">
                Coordinates:{{chcty.coord}} <br>
                <!-- Weather:{{chcty.weather.main}} <br>
                Sky:{{chcty.weather.description}} <br> -->
                Temperature:{{chcty.main.temp}} <br>
                 Pressure:{{chcty.main.pressure}} <br>
                Humidity:{{chcty.main.humidity}} <br>
                Wind speed:{{chcty.wind.speed}} <br>
           </div>
           {{mycty}}
       </div>
   </div>
</template>

<script>
import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'

export default{
    data(){
        return{
            newc:"",
            cities:[],
            chctyn:"",
            chcty:"",
            mycty:"",
            show:false,
            crd:{}
        }
    },
    methods:{
        add:function(newc){

            let arrc =JSON.parse(localStorage.getItem('cities'))||[];
            arrc.push(newc);
            localStorage.setItem('cities',JSON.stringify(arrc));
        },
        change:function(){
            Vue.axios.post('https://api.openweathermap.org/data/2.5/weather?q='+this.chctyn+'&appid=b8d67052dc6c85fb12d75983c11d464b')
            .then((response)=>{
                console.log(response.data);
                this.chcty=response.data;
            });
            this.show=true;
        },
        Positiong:function(pos){
            this.crd=pos.coords;
            console.log(this.crd)
        }
        
    },
    mounted:function(){
        this.cities=JSON.parse(localStorage.getItem('cities'))||[];

    navigator.geolocation.getCurrentPosition(this.Positiong);
    Vue.axios.post('https://api.openweathermap.org/data/2.5/weather?lat='+this.crd.latitude+'&lon'+this.crd.longitude+'&appid=b8d67052dc6c85fb12d75983c11d464b')
            .then((response)=>{
                console.log(response.data);
                this.mycty=response.data;
            })
  

    }
}


</script>