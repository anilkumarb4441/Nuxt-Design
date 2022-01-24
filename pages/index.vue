<template>
  <div class="home-page">
    <section class="intro">
      <h4 class="main-content">Enterprise Agility.....</h4>
    </section>
    <div class="organizaton">
      <TheOrganization />
    </div>
    <div>
      <TheLeadd />
      <TheLearning />
      <TheServices />
    </div>
  </div>
</template>

<script>
import TheServices from '@/components/Services/TheServices.vue'
import TheLeadd from '@/components/WhatisLeadd/TheLeadd.vue'
import TheLearning from '@/components/LearnandCertify/TheLearnig.vue'
import TheOrganization from '@/components/Organization/TheOrganization.vue'
export default {
  components: {
    TheServices,
    TheLeadd,
    TheLearning,
    TheOrganization,
  },
}
</script>

<style scoped>
.home-page {
  font-family: 'Corbel', 'Avenir Next', 'Open Sans', 'Helvetica Neue', Arial,
    Helvetica, 'Geneva', sans-serif;
}
.intro {
  height: 40vh;
  width: 100%;
  background: url('~assets/images/bkimg2.jpg');
  background-position: center;
  background-size: cover;
  text-align: center;
  
}
.main-content {
  font-size:50px;
  font-weight: 600;
  line-height: 50px;
  position: relative;
  top: 30%;
  left: 0;
}
.organizaton {
  margin-top: -60px;
  margin-bottom: 5rem;
}
</style>