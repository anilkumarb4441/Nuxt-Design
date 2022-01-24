<template>
  <div class="podcast-page">
    <div>
      <ThePodcastcopy />
    </div>
  </div>
</template>

<script>
import ThePodcastcopy from '@/components/Resources/Podcast/ThePodcastcopy.vue'

export default {
  components: {
    ThePodcastcopy,
  },
}
</script>

<style scoped>
.podcast-page {
  font-family: 'Corbel', 'Avenir Next', 'Open Sans', 'Helvetica Neue', Arial,
    Helvetica, 'Geneva', sans-serif;
}
</style>
