<template>
<div class="main-content">
<section class="intro d-flex align-items-center ">
    <!-- <p> <a href="/" class="text-secondary"> Home</a>/LEADD Learning Experience</p> -->
      <h4 class="content ml-auto mr-auto" >LEADD Learning Experience</h4>
      
    </section>
    <div class="learner-experiece">
<LearnerExperience />
    </div>
    </div>
</template>
<script>
import LearnerExperience from '@/components/AboutUs/LearnerExperience.vue'
    export default {
        components:{
            LearnerExperience,
        },
    }
</script>

<style  scoped>
.main-content{
 font-family: 'Corbel', 'Avenir Next', 'Open Sans', 'Helvetica Neue', Arial,
    Helvetica, 'Geneva', sans-serif ;
}
.intro {
  height: 70vh;
  width: 100%;
  background: url('~assets/images/L-E-bkimg3.jpg');
  background-position: center;
  background-size: cover;
  text-align: center;
}
.learner-experiece{
    margin-top: -90px;
    margin-bottom: 5rem;
}
.content{
    font-size: 50px;
    font-weight: 600 ;
    line-height: 50px;
    color: rgb(33, 37, 41);
    margin-top: -10% !important;
}
</style>