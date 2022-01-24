<template>
    <div class="podcast-page">
<div>
    <ThePodcast />
</div>
    </div>
</template>

<script>
import ThePodcast from '@/components/Resources/Podcast/ThePodcast.vue'
    export default {
        components:{
            ThePodcast,
        }
    }
</script>

<style scoped>
.podcast-page{
     font-family: 'Corbel', 'Avenir Next', 'Open Sans', 'Helvetica Neue', Arial,
    Helvetica, 'Geneva', sans-serif;
}
</style>