<template>
    <div>
        <button @click="show()">Show</button>
        <div class=modal v-if="modalshow" >
            <div class="cont">
                 <td><img :src="student.photo" class="photka"  ></td> 
                    <td>{{student.mark}}</td> 
                    <td><input type="checkbox" disabled v-model="student.isDonePr" value="=Student.isDonePr"></td> 
                    <td>{{student._id}}</td>
                    <td>{{student.name}} </td>
                    <td>{{student.group}} </td>
                    <td>{{student.__v}} </td>
                <button @click="close()">Close</button>
                </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'

export default {
    props:{
        id:''
    },
    data: function(){
        return{
            modalshow:false,
            student: {},
        };
    },
    methods:{
        show:function(){
            this.modalshow=true
        },
        close:function(){
            this.modalshow=false
        }
    },
    mounted: function(){
        Vue.axios.get("http://46.101.212.195:3000/students/"+this.id).then((response) =>{
            console.log(response.data)
            this.student=response.data;
            console.log(this.id)
        })
    }
}

</script>