<template>
  <div>
    <div class="col-md-9 mx-auto">
      <div class="card my-5">
      <nuxt-link to="/resources/articles/_articleId" class="text-dark">
  <div class="row">
          <div class="col-md-3 my-auto ">
            <img :src="thumbnail" alt="" class="img-fluid" width="100%"  />
          </div>
          <div class="col-md-8 ml-md-3 my-auto">
              <h6 class="uptated_date mx-3 ">SEPT 26, 2021 </h6>
            <h3 class="px-3">
              <strong>{{ title }}</strong>
            </h3>
            <p class="px-3">{{ text }}</p>
            <span class="px-3 pb-2"><b>READ MORE</b></span>
          </div>
        </div>
      </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    thumbnail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.text-dark{
    text-decoration: none;
}
.card{
   border: none;
   box-shadow: 2px 2px 2px rgb(211, 210, 210); 
   margin-top: 5rem !important;
}
</style>
