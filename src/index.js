import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
var app=new Vue({
    el:"#app",
    data:{
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
        arsort:[],
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
            
    
})