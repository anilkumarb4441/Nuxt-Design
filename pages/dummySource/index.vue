<template>
    <div>
        <div>
            <span> For the Dynamic ural route with search</span>
        </div>
       <!-- <input type="hidden" v-model="search" /> -->
    </div>
</template>

<script>
    export default {
        data(){
            return{
                search:'',
                Questions:[]
            }
        }
         // created() {
  //   let uri = window.location.href.split('?')
  //   if (uri.length == 2) {
  //     console.log(uri[1])
  //     this.search = uri[1]
  //   }
  // },
  // computed: {
  //   filteredQuestions() {
  //     return this.Questions.filter((question) =>
  //       Questions.Questions.toLowerCase().includes(this.search.toLowerCase()),
  //     )
  //   },
  // },
    }
</script>

<style  scoped>

</style>