<template>
    <div>
        <form>
                <input type="text"  v-model.trim="newst.mark"> Оцінка<br>
                <input type="text"  v-model.trim="newst.name"> Ім'я<br>
                <select  v-model="newst.group"> Група
                    <option>RPZ 17 2/9</option>
                    <option>RPZ 17 1/9</option>
                    <option>RPZ 18 2/9</option>
                    <option>RPZ 18 1/9</option>
                </select>
                    <br>
                <input type="text"  v-model.trim="newst.__v"> __v<br>
                <input type="checkbox"  v-model="newst.isDonePr"> Здав<br>
                <input type="submit" v-on:click="add()">
        </form>
            <br>


            <input type="text" v-model="piece">
            <table v-for="Student in students" v-bind:key="Student.__id" >
                
               <tr  v-bind:class="Student.name.includes(piece)?'':'red'">
                <td>{{Student.photo}}</td> <td>{{Student.mark}}</td> <td>{{Student.isDonePr}}</td> <td>{{Student.id}} </td><td>{{Student.name}} </td><td>{{Student.group}} </td><td>{{Student.__v}} </td>
                    <td><div v-if="Student.isDonePr==true"><input type="checkbox" disabled checked="Student.zdav"></div>
                    <div v-else><input type="checkbox" disabled ></div> </td>
                    <td><a href="#" v-on:click="del(Student.__id)">Delete</a></td>
            </tr> 
            <br>
            </table>
                <!-- <span style="font-size:25px;">EnterAge:</span>
                <input v-model.number="age"type="number">
                <span style="font-size:25px;">EnterMessage:</span>
                <input v-model.lazy="msg">
                <span style="font-size:25px;">EnterMessage : </span>
                <input v-model.trim="message"> -->
    </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'

    export default{
        data(){
            return{
                piece:"",
                    choose:"Yes",
                    newst:{
                        'surname':"",
                        'name': "",
                        'group': "",
                        'riknarod':"",
                        'zdav':"",
                    },
                    students :[],
                    search:'',
                    arsort:[],} 
        },
    mounted: function(){
      axios.get("http://46.101.212.195:3000/students").then((response) =>{
          console.log(response.data);
          this.students=response.data;
      })  
    },
    methods:{
        clickme:function(id){
            alert("ok");
            this.students=this.students.filter((element)=>{
                return element.id !==id;
            })
        },
        del:function(id){
            this.students.splice(id,1);
            for (let i=0;i<this.students.length;i++){
                if (this.students[i].id>id){
                    this.students[i].id-=1;
                }
            }
        },
        add:function(){
            this.newst['id']=this.students.length;
            this.students.push(this.newst);
            this.newst={
                'photo':"",
                'mark':"",
                'isDonePr':"",
                '__v':"",
                'name': "",
                'group': "",
            };
            }
    }
    }
</script>

<style scoped>

</style>