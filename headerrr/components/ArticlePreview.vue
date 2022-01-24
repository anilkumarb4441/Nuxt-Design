<template>
    <div>
     <nuxt-link to="#" class="text-dark cards">
<div class="col-lg-6 card mx-auto my-5 p-4">
       <h3 class="mx-auto"> {{ title}}</h3>
       <p> {{text}}</p>
     </div>
     </nuxt-link>
      </div>
</template>

<script>
    export default {
        props:{
            title:{
                type:String,
                required:true,
            },
            text:{
                type:String,
                required:true,
            }
        }
    }
</script>

<style scoped>
.cards{
    text-decoration: none ;
}
</style>