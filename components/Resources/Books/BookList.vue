<template>
  <div class="book_list_page">
    <div class="card mb-4">
      <div class="row mx-auto">
        <div class="col-4 mx-auto">
              <nuxt-link :to="bookLink" class="text-dark id_link">
          <img :src="imageUrl" alt="" class="img-fluid" />
              </nuxt-link>
          
        </div>
        <div class="col-8 mx-auto">
          <h5 class="font-weight-bold">{{ title }}</h5>
          <p class="main_text text1">
            <em>{{ authorName }}</em><b-button class="rewiev_button mx-auto ">
            <i class="far fa-star">&nbsp;&nbsp; 0.0</i>
          </b-button>
          </p>
          <p class="main_text text1">Published: {{ publishedDate }} </p>
          <p class="main_text text1">
            <a href="">Print</a>
            |
            <a href="">eBook</a>
            |
            <a href="">Audiobook</a>
          </p>
          <p class="main_text mt-3 text-justify">
            <strong>Short Summary:</strong>
            {{ shortSummary }}
          </p>
          <p class="main_text">
            <i class="fas fa-book book_icon"></i>
            <a href="/resources/books/_bookId">Full Summary,</a>
            &nbsp;&nbsp;
            <i class="far fa-clock book_icon"></i>
            53 min
          </p>
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>
export default {
  props: {
       id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    //  book: {
    //   type: String,
    //   required: true,
    // },
    imageUrl: {
      type: String,
      required: true,
    },
     authorName: {
      type: String,
      required: true,
    },
     shortSummary: {
      type: String,
      required: true,
    },
     publishedDate: {
      type: String,
      required: true,
    },
  },
  computed: {
    bookLink() {    
        return '/resources/books/' + this.id;
    
    }
  }
}
</script>

<style scoped>
.book_list_page {
  font-family: 'Avenir Next', 'Open Sans', 'Helvetica Neue', Arial, Helvetica,
    'Geneva', sans-serif;
}
.rewiev_button {
  margin-left: 15px !important;
  border-radius: 15px;
  padding: 0px 10px;
  background-color: #112855;
  color: white;
}
.sub_title {
  font-size: 18px;
  font-weight: 500;
}
.main_text {
  font-size: 15px;
  font-weight: 500;
  line-height: 22px;
}
.card{
    border-radius: 15px;
     padding: 20px 1px;
}
.card:hover{
 box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
  transform: scale(1.03);
  transition: ease-in-out 0.3s;
}
/* .img-fluid{
  opacity: 0.6 !important;
}
.img-fluid:hover{
  opacity: 1 !important;
} */
</style>
