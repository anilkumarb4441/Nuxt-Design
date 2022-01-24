<template>
  <div>
    <h5><nuxt-link to="/">Home</nuxt-link></h5>
    <h1 class="mx-auto my-5">Article</h1>
    <div >
<!-- <ArticleList :articles="loadedArticles" /> -->
    </div>

    
  </div>
</template>

<script>
// import ArticleList from '@/components/ArticleList.vue'
export default {
     components:{
          // ArticleList
        },
  data() {
    return {
       
      loadedArticles: [
        {
          id: '1',
          title: 'Coaching as Distinct from Therapy',
          text:
            'James Flaherty weighs in on the question that every coach gets asked hundreds of times.James Flaherty weighs in on the question that every coach gets asked hundreds of times.James Flaherty weighs in on the question that every coach gets asked hundreds of times.James Flaherty weighs in on the question that every coach gets asked hundreds of times.',
        },
        {
          id: '1',
          title: 'Coaching as Distinct from Therapy',
          text:
            'James Flaherty weighs in on the question that every coach gets asked hundreds of times.James Flaherty weighs in on the question that every coach gets asked hundreds of times.James Flaherty weighs in on the question that every coach gets asked hundreds of times.James Flaherty weighs in on the question that every coach gets asked hundreds of times.',
        },
        {
          id: '1',
          title: 'Coaching as Distinct from Therapy',
          text:
            'James Flaherty weighs in on the question that every coach gets asked hundreds of times.James Flaherty weighs in on the question that every coach gets asked hundreds of times.James Flaherty weighs in on the question that every coach gets asked hundreds of times.James Flaherty weighs in on the question that every coach gets asked hundreds of times.',
        },
        {
          id: '1',
          title: 'Coaching as Distinct from Therapy',
          text:
            'James Flaherty weighs in on the question that every coach gets asked hundreds of times.James Flaherty weighs in on the question that every coach gets asked hundreds of times.James Flaherty weighs in on the question that every coach gets asked hundreds of times.James Flaherty weighs in on the question that every coach gets asked hundreds of times.',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
