<template>
    <div class="col-lg-9 mx-auto our-page">
    <h1 class="d-flex justify-content-center my-5">About LEADD</h1>
    <img src="@/assets/images/aboutteamimg.jpg" alt=""  >
    <div>
        <OurStory />
    </div>
    </div>
</template>

<script>
import OurStory from '@/components/AboutUs/OurStoty.vue';
    export default {
        components:{
            OurStory,
        }
    }
</script>

<style scoped>
.our-page{
    font-family: 'Corbel', 'Avenir Next', 'Open Sans', 'Helvetica Neue', Arial,
    Helvetica, 'Geneva', sans-serif ;
    margin-bottom: 7rem !important;
}
</style>