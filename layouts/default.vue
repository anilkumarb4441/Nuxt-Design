<template>
  <div>
    <TheHeader />
     <client-only>
        <TheCookie />
      </client-only>
    <nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader.vue'
import TheFooter from '@/components/Navigation/TheFooter.vue'
import TheCookie from '@/components/Navigation/TheCookie.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
   TheCookie,
  },
}
</script>
