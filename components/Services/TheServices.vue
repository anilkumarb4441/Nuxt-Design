<template>
<div class="coach-page">
  <section class="services-page ml-auto">
    <div class="container-fluid ml-5">
      <div><h1 class="">Our Coaching</h1></div>
      <div class="mt-3"><h4>SEE HOW OUR CLIENTS WORK WITH US</h4></div>

    </div>
  </section>
 <div class="row-lg mx-auto">
  <b-card-group deck class=" col-lg-9 ml-auto mr-auto">
    
    <b-card
    title="Presentation Development"
    img-src="@/assets/images/presentation.jpg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: auto;"
    class="card "
  >
    <b-card-text>
    <p class="mt-4">
            The Scaled Agile Framework (SAFe)provides guidance on how businesses
            and employees can grow and respond to change. It was founded with
            the SAFe “Big Picture” and a training and certification program.
          </p>
    </b-card-text>

     <h6><a href="/services">LEARN MORE</a></h6>
  </b-card>
  
  
    <b-card
    title="Speaker Coaching"
    img-src="@/assets/images/couch1.jpg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: auto;"
    class="card"
  >
    <b-card-text>
    <p class="mt-4">
            One of the benefits of scaling Agile with SAFe is improved
            time-to-market. By aligning cross-functional teams of Agile teams
            around value, leading enterprises can meet customer needs faster.
          </p>
    </b-card-text>

    <h6><a href="/services">LEARN MORE</a></h6>
  </b-card>
  

    <b-card
    title="Communication Strategy"
    img-src="@/assets/images/communication.jpg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: auto;"
    class="card"
  >
    <b-card-text>
    <p class="mt-4">
            SAFe is the most popular framework to implement Agile, Lean, and
            DevOps practices at scale. See why it’s trusted, effective, and
            sustainable.
          </p>
    </b-card-text>

    <h6><a href="/services">LEARN MORE</a></h6>
  </b-card>

  </b-card-group>

</div>
</div>
</template>

<style scoped>
.services-page {
  /* background-color: #d1d1d167; */
  width: 100%;
  margin-top: 5rem;
  margin-bottom: 5rem;
}
h1{
  font-size: 34px;
  font-weight: 700;
  line-height: 40px;
  color: #142952;
}
.col {
  margin-top: 3rem;
}
h5 {
  font-size: 26px;
  font-weight: 400;
  line-height: 35px;
}
p {
font-family: 'Corbel', 'Avenir Next', 'Open Sans',  'Helvetica Neue', Arial, Helvetica,
    'Geneva', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  color: rgb(48, 48, 48);
}
h6 {
font-family: 'Corbel', 'Avenir Next', 'Open Sans',  'Helvetica Neue', Arial, Helvetica,
    'Geneva', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  color: #4f9eda !important;
  text-decoration: none;
}
h6 a:hover {
  color: #eea146;
  text-decoration: none;
}
.coach-page{
  margin-bottom: 7rem;
}

.card:hover {
transition: 0.2s ease-in;
  height: auto;
  box-shadow: 4px 4px 20px 1px rgba(0, 0, 0, 0.5);
}

</style>
