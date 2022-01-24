<template>
  <div>
    <b-navbar class="main-navbar" toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">
        <nuxt-link to="/" class="text-secondary ml-5">
          <img src="~/assets/images/leaddlogo.png" alt="" height="40px" />
        </nuxt-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" class="nav_toggle"></b-navbar-toggle>
      <b-collapse  id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item class="nav-item">
              <nuxt-link to="/whatisleadd">What is LEADD</nuxt-link>
            </b-nav-item>
            <b-nav-item class="nav-item">
              <nuxt-link to="/learnandcertification">
                Learning & Certification
              </nuxt-link>
            </b-nav-item>
            <b-nav-item class="nav-item">
              <nuxt-link to="/coaching">Coaching</nuxt-link>
            </b-nav-item>
            <b-nav-item class="nav-item">
              <nuxt-link to="/solutiondelivery">Solution Delivery</nuxt-link>
            </b-nav-item>
            <b-nav-item-dropdown right>
              <template #button-content>
                <span class="nav-item">
                  <nuxt-link to="#">About Us</nuxt-link>
                </span>
              </template>
              <b-dropdown-item class="nav-item dropdown-item">
                <nuxt-link to="/about/learning-experience">
                  Learning Experience
                </nuxt-link>
              </b-dropdown-item>
              <b-dropdown-item class="nav-item dropdown-item">
                <nuxt-link to="/about/our-story">Our Story</nuxt-link>
              </b-dropdown-item>
              <b-dropdown-item class="nav-item dropdown-item">
                <nuxt-link to="/about/our-instructors">
                  Our Instructors
                </nuxt-link>
              </b-dropdown-item>
              <b-dropdown-item class="nav-item dropdown-item">
                <nuxt-link to="/about/learner-stories">
                  Learner Stories
                </nuxt-link>
              </b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown right>
              <template #button-content>
                <span class="nav-item">
                  <nuxt-link to="#">Resources</nuxt-link>
                </span>
              </template>
              <b-dropdown-item class="nav-item" href="/resources/blog">
                Blog
              </b-dropdown-item>
              <b-dropdown-item class="nav-item">
                <nuxt-link to="/resources/podcast">Podcast</nuxt-link>
              </b-dropdown-item>
              <b-dropdown-item class="nav-item">
                <nuxt-link to="/resources/articles">Articles</nuxt-link>
              </b-dropdown-item>
              <b-dropdown-item class="nav-item">
                <nuxt-link to="/resources/future-workforce">
                  Future Workforce
                </nuxt-link>
              </b-dropdown-item>
              <b-dropdown-item class="nav-item">
                <nuxt-link to="/resources/webinars">Webinars</nuxt-link>
              </b-dropdown-item>
              <b-dropdown-item class="nav-item">
                <nuxt-link to="/resources/books">Books</nuxt-link>
              </b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item class="nav-item ml-5"></b-nav-item>
            <SavedModal />
            <b-nav-item class="nav-item ml-4">
              <nuxt-link to="/cart">
                <i class="fas fa-shopping-bag"></i>
              </nuxt-link>
            </b-nav-item>
            <b-nav-item-dropdown right>
              <template #button-content>
                <em><i class="far fa-user-circle"></i></em>
              </template>
              <b-dropdown-item class="dropdown" href="">
                Profile
              </b-dropdown-item>
              <b-dropdown-item class="dropdown">
                <nuxt-link to="/admin">Log In</nuxt-link>
              </b-dropdown-item>
              <b-dropdown-item class="dropdown">
                <nuxt-link to="/admin">Sign Up</nuxt-link>
              </b-dropdown-item>
              <b-dropdown-item class="dropdown">
                <a href="#">Log Out</a>
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import SavedModal from '@/components/Navigation/SavedModal'
// import * as firebase from 'firebase/app'
// import 'firebase/auth'
export default {
  components: {
    SavedModal,

    // data() {
    //   return {
    //     user: ' ',
    //   }
    // },
    // mounted() {
    //     this.setupFirebase()
    //   },
    // methods: {
    //   // setupFirebase(){
    //   //     firebase.auth().onAuthStateChanged(user => {
    //   //       console.log(user)

    //   //       this.user = user
    //   //     // if(user){
    //   //     //   console.log('logged In');
    //   //     //   this.user = user;
    //   //     // }else{
    //   //     //   this.user = !user;
    //   //     // }
    //   //     })
    //   },
    //   logout(){
    //     firebase.auth().signOut().then(result =>{
    //       console.log(result)
    //       this.user = ' '
    //       this.$router.push('/')
    //     })
    //   }
    // },
  },
}
</script>

<style scoped>
.main-navbar {
  background-color: rgb(255, 255, 255) !important;
  box-shadow: 1px 1px 1px 1px rgba(71, 71, 71, 0.363);
  font-size: 15px;
  font-weight: 500;
  line-height: 44px;
  /* height: 65px; */
  color: black !important;
  /* position:  !important;
  top: 0; */
}

.nav-item a {
  text-decoration: none;
  margin-right: 1rem;
  color: #000000 !important;  
}
.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: rgb(148, 147, 147) !important;
}
i {
  font-size: 21px;
  color: #000000 !important;
}
.nav_toggle{
  color: #000000;
}
/* .nav-item .dropdown-item ::v-deep :focus {
  background-color: green !important;
} */
</style>
