<template>
   <div class="main">
       <h1>Basket</h1>
       <div class="content">
           {{getb}}
       </div>
   </div>
</template>
<script>
export default {
    
    computed:{
        getb:function(){
        return (this.$store.getters.getCount);   
        }
        
    }
}
</script>