<template>
  <div class="home-page">
    <div class="intro"> 
      <div class="col-lg-9 mx-auto ">
          <br><br>
        <h1 class="text-white text-center mt-5">Meet Your Instructors</h1>
        <h5> </h5>
        </div>
      </div>
    <div>
      <OurInstructorList />
    </div>
    <TopScroll />
  </div>
</template>

<script>
import TopScroll from '@/components/UI/TopScroll.vue';
import OurInstructorList from '@/components/AboutUs/OurInstructorList.vue';
export default {
  components: {
    OurInstructorList,
    TopScroll,
  },
}
</script>

<style scoped>
.home-page {
  font-family: 'Corbel', 'Avenir Next', 'Open Sans', 'Helvetica Neue', Arial,
    Helvetica, 'Geneva', sans-serif;
}
.intro {
  height: 70vh;
  width: 100%;
  background: linear-gradient(rgba(43, 42, 42, 0.76), rgba(20, 20, 20, 0.623)),
    url('~assets/instructor/instructor-bkimg.jpg');
  background-position: center;
  background-size: cover;
}
h1 {
  font-size: 50px;
  font-weight: 600;
  line-height: 50px;
}
</style>
