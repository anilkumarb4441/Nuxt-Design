<template>
  <section class="container-fluid mb-5">
    <div class="row justify-content-center ">
      <div class="col-lg-7 mr-5 leadd_framework fluid">
        <h2 class="mb-3">What is Leadd?</h2>
        <div class="mt-5 mr-5 fluid">
          <div class="frameworkimg1 ">
            <b-img
              src="@/assets/images/framework1.webp"
              fluid
              alt="Responsive image"
            ></b-img>
          </div>
          <div>
            <b-img class="mr-4 frameworkimg2 fluid"
              src="~/assets/images/framework2.png"
              fluid
              alt="Responsive"
            ></b-img>
          </div>
        </div>
      </div>
      <div class="col-lg-3 leadd_values fluid ">
        <h5 class="mt-3 mb-5">Values of Enterprises Agility with LEADD</h5>
        <div class="row">
          <div class="col-1 mr-3"><div class="circle">1</div></div>
          <div class="col-10">
            <h5>Increased productivity</h5>
            <p>
              Align on plans and organize around value to boost productivity and
              minimize waste.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-1 mt-2 mr-3"><div class="circle">2</div></div>
          <div class="col-10">
            <h5>Engaged employees</h5>
            <p>
              Empower teams to collaborate better, deliver on a sustainable
              cadence, and feel purpose and autonomy in their work.
            </p>
          </div>
        </div>
        <div class="row  mt-2">
          <div class="col-1 mr-3"><div class="circle">3</div></div>
          <div class="col-10">
            <h5>Reduced time-to-market</h5>
            <p>
              Make faster decisions, ship value in shorter increments, and
              respond quickly to change.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-1 mr-3"><div class="circle">4</div></div>
          <div class="col-10">
            <h5>Improved quality</h5>
            <p>
              Make customer value the top priority and build continuous
              improvement into every process.
            </p>
          </div>
        </div>
        <h5 class="justify-content-center mb-5 mt-5 ml-5">
          <a href="/admin" class="leadd_value_link">
            Learn more 
            <i class="fas fa-long-arrow-alt-right"></i>
          </a>
        </h5>
      </div>
    </div>
  </section>
</template>
<style scoped>
.container-fluid {
  margin-top: 7rem;
  margin-bottom: 7rem !important;       
  font-family: 'Corbel', 'Avenir Next', 'Open Sans', 'Helvetica Neue', Arial,
    Helvetica, 'Geneva', sans-serif;
}
.frameworkimg1{     
  background-color: #f1f1f1;
}
.frameworkimg2{
margin-top: 3rem !important;
}
h2 {
  font-size: 32px;
  font-weight: 700;
  color: #142952;
}
.leadd_value_link {
  color: #4f9eda !important;
  text-decoration: none;
}
.leadd_values {
  background-color: rgba(219, 219, 219, 0.335);
}

h5 {
  font-weight: bold;
}
p {
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  text-align: justify;
  color: rgb(48, 48, 48);
}
.circle {
  width: 30px;
  height: 30px;
  line-height: 25px;
  border-radius: 50%;
  text-align: center;
  background: #55adb9;
  color: #2d2d2a;
  font-size: 18px;
  font-weight: 600;
}

</style>
