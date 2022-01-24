<template>
 <div>
      <article-preview v-for="article in articles"
   :key="article.id"
      :id="article.id"
      :title="article.title"
      :text="article.text"
      ></article-preview>
 </div>
</template>

<script>
import ArticlePreview from '@/components/ArticlePreview.vue'
export default {
    components:
    {
        ArticlePreview
    },
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped></style>
