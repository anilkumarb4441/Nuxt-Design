<template>
  <div>

<div>
  <TheHeader />
</div>
 <h4> <nuxt-link to="/atical"> Article</nuxt-link></h4>
 
 <br><br><br><br><br>
<i class="bi bi-alarm-fill"></i><i class="bi bi-alarm-fill"></i><i class="bi bi-alarm-fill"></i>
 <div>
 <h1>{{ article.article }}</h1>
 <h2> {{ title.title }}</h2>
 </div>
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader.vue'
  // export default {
  //   components:{
  //     TheHeader,
  //   },
  //    data() {
  //     return {
  //       mountains: [
  //         {
  //           article:'aajj'
  //         }
  //       ]
  //     }
  //   },
  //   async fetch() {
  //     this.mountains = await fetch(
  //       'https://nuxt-firebase-57d5d-default-rtdb.asia-southeast1.firebasedatabase.app/'
  //     ).then(res => res.json())
  //   }
  // }
  import axios from 'axios'
  export default {
     components:{
      TheHeader,
    },
  // asyncData(context) {
  //   return axios.get('https://nuxt-firebase-57d5d-default-rtdb.asia-southeast1.firebasedatabase.app/' + context.params.id + '.json')
  //     .then(res => {
  //       return {
  //         article: res.data,
  //         title:res.data,
  //       }
  //     })
  //     .catch(e => context.error(e))
  // }
  async asyncData({ params, $axios }) {
      const post = await $axios.get('http://nuxt-firebase-57d5d-default-rtdb.asia-southeast1.firebasedatabase.app')
      console.log("swara");
      return { article }
    }
};
</script>

<style  scoped>

</style>