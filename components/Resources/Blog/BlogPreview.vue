<template>
  <div class="blog-preview-page">
    <div class=" mx-auto">
      <div class="card mx-auto">
         <div>
          <img :src="thumbnail" alt="" width="100%" class="img-fluid my-auto" />
        </div>
        <h2 class="blog-title my-2 px-2">{{ title }}</h2>
        <p class="blog-paragraph my-2 px-2">{{ text }}</p>
        <p class="blog-sub-text px-2"> 
          <em>{{ subtext }}</em>
        </p>
        <div class="mt-5 mb-3 px-3">
          <a href="/resources/blog/_blogId"><b-button class="btn px-4">READ MORE </b-button></a>
        </div>
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
    id: {
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
    subtext: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.blog-preview-page{
  font-family: 'Corbel', 'Avenir Next', 'Open Sans', 'Helvetica Neue', Arial,
    Helvetica, 'Geneva', sans-serif;
}
.blog-title{
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
}
p {
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
}
.blog-paragraph, 
.blog-sub-text {
  font-size: 18px;
  font-weight: 500;
  line-height:22px;
}
.btn {
  background-color: #2d2d2a;
  color: white;
}
.btn:hover {
  background-color: #f2bb46;
}
/* .card{
  border-top: 3px solid #2d2d2a;
  width: 80%;
} */
@media screen {
  
}
</style>
