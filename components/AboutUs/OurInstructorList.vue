<template>
  <div>
    <div class="col-lg-9 hyperlinks mx-auto mt-5">
        <div class="col-8 card mx-auto my-5">
        <div class="row mx-auto py-5">
          <div class="col-12 "></div>
                <a href="#1" v-b-tooltip.hover title="Melanie Bell-Mayeda" class="mx-3">
                 <b-avatar src="~/assets/instructor/ins1.png" size="3rem"></b-avatar></a>
                 <a href="#2" v-b-tooltip.hover title="Coe Leta Stafford" class="mx-3">
               <b-avatar src="~/assets/instructor/ins2.png" size="3rem"></b-avatar></a>
                <a href="#3" v-b-tooltip.hover title="David Kelley" class="mx-3">
                 <b-avatar src="~/assets/instructor/ins3.png" size="3rem"></b-avatar></a>
                 <a href="#4" v-b-tooltip.hover title="Amy Bonsall" class="mx-3">
                <b-avatar src="~/assets/instructor/ins4.png" size="3rem"></b-avatar></a>
        </div>
        </div>
      <!-- <div class="row mx-auto fluid">
        <div class="col-lg-3">
          <p><a href="#1">Melanie Bell-Mayeda</a></p>
          <p><a href="#2">Coe Leta Stafford</a></p>
        </div>
        <div class="col-lg-3">
          <p><a href="#3">David Kelley</a></p>
          <p><a href="#4">Amy Bonsall</a></p>
        </div>
        <div class="col-lg-3"></div>
        <div class="col-lg-3"></div>
      </div> -->
    </div>
    <div class="mt-5">
        <div id="1">
      <InstructerPreview
        
        thumbnail=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzLJhRylKaVtB98B1tV9O_UlYlYUMytXHPUQ&usqp=CAU"
        instructorName1="MELANIE BELL-MAYEDA"
        instructorName2="Melanie Bell-Mayeda"
        leaddactivityone="LEADD JOURNAL"
        leaddactivitytwo="LEADD PODCAST"
        designation=" PARTNER AT IDEO AND THE FOUNDER & DEAN OF IDEO U"
        courseName=" Unlocking Creativity "
        aboutInstructor="
            Suzanne’s work focuses on transforming individuals and organizations
            through teaching and sharing thought leadership. As one of IDEO’s
            senior leaders, Suzanne has led the Systems and Organizational
            Design Studio, a business unit focusing on influencing change in
            public, private, and social sectors. She has designed award-winning
            online learning experiences and corporate innovation labs.
            "
      />
      </div>
      <div  id="2">
      <InstructerPreview
       
        thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyNSCWX8QhNsgB4BJ_mh-Ewd4RtMdGgDSWTw&usqp=CAU"
        instructorName1="COE LETA STAFFORD"
        instructorName2="Coe Leta Stafford"
        leaddactivityone="LEADD JOURNAL"
        leaddactivitytwo="LEADD BLOG"
        designation="IDEO FOUNDER AND CHAIRMAN"
        courseName=" Insights for Innovation "
        aboutInstructor="
            Suzanne’s work focuses on transforming individuals and organizations
            through teaching and sharing thought leadership. As one of IDEO’s
            senior leaders, Suzanne has led the Systems and Organizational
            Design Studio, a business unit focusing on influencing change in
            public, private, and social sectors. She has designed award-winning
            online learning experiences and corporate innovation labs.
            "
      />
      </div>
       <div id="3"> 
      <InstructerPreview
        
        thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRReONZ-LKBVsTduazWz890MVT2qBDCZd5WHw&usqp=CAU"
        instructorName1=" DAVID KELLEY"
        instructorName2="David Kelley"
        leaddactivityone="LEADD BLOG"
        leaddactivitytwo="LEADD BLOG"
        designation=" FORMER SENIOR DESIGN DIRECTOR OF VENTURE DESIGN, IDEO"
        courseName=" Leading for Creativity"
        aboutInstructor="
            Suzanne’s work focuses on transforming individuals and organizations
            through teaching and sharing thought leadership. As one of IDEO’s
            senior leaders, Suzanne has led the Systems and Organizational
            Design Studio, a business unit focusing on influencing change in
            public, private, and social sectors. She has designed award-winning
            online learning experiences and corporate innovation labs.
            "
      />
      </div>
       <div id="4">
      <InstructerPreview
        
        thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWQ9Qw7-cz9nQd9iGq2OIf61obEL-AZWThcw&usqp=CAU"
        instructorName1="AMY BONSALL"
        instructorName2="Amy Bonsall"
        leaddactivityone="LEADD JOURNAL"
        designation=" PARTNER AT IDEO AND THE FOUNDER & DEAN OF IDEO U"
        courseName=" Human-Centered Service Design "
        aboutInstructor="
            Suzanne’s work focuses on transforming individuals and organizations
            through teaching and sharing thought leadership. As one of IDEO’s
            senior leaders, Suzanne has led the Systems and Organizational
            Design Studio, a business unit focusing on influencing change in
            public, private, and social sectors. She has designed award-winning
            online learning experiences and corporate innovation labs. "
      />
      </div>
    </div>
  </div>
</template>
<script>
import InstructerPreview from '@/components/AboutUs/InstructerPreview.vue'
export default {
  components: {
    InstructerPreview,
  },
   data() {
      return {
        scTimer: 0,
        scY: 0,
      }
    },
}
</script>

<style scoped>
a {
  color: black !important;
  font-size: 22px;
  font-weight: 600;
  line-height: 23px;
}

.card {
  box-shadow: 1px 1px 2px 2px rgba(196, 196, 196, 0.5);
}
</style>
