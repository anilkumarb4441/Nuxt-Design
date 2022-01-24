<template>
  <div>
    <div class="articlelists">
      <ArticlePreview
        v-for="article in articles"
        :key="article.id"
        :id="article.id"
        :title="article.title"
        :thumbnail="article.thumbnail"
        :text="article.text"
      />
    </div>
  </div>
</template>

<script>
import ArticlePreview from '@/components/Resources/Articles/ArticlePreview.vue'
export default {
  components: {
    ArticlePreview,
  },
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.articlelists {
  margin-top: 5rem !important;
}
</style>
