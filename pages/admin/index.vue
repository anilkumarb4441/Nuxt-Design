<template>
  <div class="login">
      <!-- <nuxt-link to="/">
            <p class="logo_circle ml-auto mr-auto mb-4">Leadd</p>
          </nuxt-link> -->
    <h4>Login</h4>
    <form @submit.prevent="submit">
      <div class="email mb-3">
        <i class="fas fa-user mr-4"></i><input type="text" placeholder="Username" v-model="email" />
      </div>
      <div class="password mb-4">
<i class="fas fa-lock mr-4"></i><input type="password" placeholder="password" v-model="password" />
      </div>
       <div class="error text-danger mb-4" v-if="error">{{ error.message }}</div>
      <button  class="py-2 px-5">Login</button>
    </form>
   
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
    }
  },

  methods: {
    submit() {
      alert('submit')
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          console.log(data)
          this.$router.push('/learnandcertification')
        })
        .catch((error) => (this.error = error))
    },
  },
}
</script>

<style scoped>
.login {
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 10rem;
}
form {
  box-sizing: border-box;
  width: 30%;
  border-radius: 20px;
  height: 80% !important;
  margin: 30px auto;
  padding: 50px 0;
 box-shadow: -2px 9px 22px -4px rgb(97, 97, 97);
-webkit-box-shadow: -2px 9px 22px -4px rgb(90, 89, 89);
-moz-box-shadow: -2px 9px 22px -4px rgb(90, 90, 90);
background-color: #142952;
color:white
}
input{
    width: 70%;
    height: 32px;
    border-radius: 4px;
    font-size: 14px !important;
    padding-left: 10px;
      /* outline: none;
      border-top: none;
      border-right:none ;
      border-left:none ; */
    
}
button{
  border-radius: 10px;
}
/* .logo_circle {
  width: 80px;
  height: 80px;
  line-height: 80px;
  border-radius: 50%;
  text-align: center;
  background: rgb(48, 48, 48);
  color: #ffffff;

} */
</style>
