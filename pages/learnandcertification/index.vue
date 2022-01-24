<template>
  <section class="intro">
    <h4 class="main-content"><h1>Services</h1></h4>
  </section>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
export default {
  asyncData({ req, redirect }) {
    // if(process.server){
    // }else{
    let user = firebase.auth().currentUser
    if (!user) {
      redirect('admin')
    }
  },
// }
}
</script>
<style scoped>
.intro {
  height: 40vh;
  width: 100%;
  background-color: rgba(212, 175, 11, 0.438);
  background-position: center;
  background-size: cover;
  text-align: center;
  margin-bottom: 5rem;
}
</style>
