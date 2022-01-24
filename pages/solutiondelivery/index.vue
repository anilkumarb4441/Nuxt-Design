<template>
  <div id="app">
  <header class="header fixed top-0 inset-x-0 p-4 bg-gray-900 shadow-md" :class="{ 'is-hidden': !showHeader }">
      <span class="text-white font-semibold">Logo</span>
  </header>
  <div class="fixed inset-0 w-screen h-screen flex justify-center items-center text-5xl text-dark font-bold">
    Scroll&nbsp;<span v-if="showHeader">Down 👇</span><span v-else>Up 👆</span>
  </div>
</div>
</template>
<script>
export default {
  
  data(){
  return{
      showHeader: true,
    lastScrollPosition: 0,
    scrollOffset: 40,
  }
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    // Toggle if navigation is shown or hidden
    onScroll() {
      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < this.scrollOffset) {
        return
      }
      this.showHeader = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    },
  }

}
</script>

<style scoped>
body {
  height: 300vh;
  background: #616161;
  background: linear-gradient(#9bc5c3, #616161);
}

.header {
  transform: translateY(0);
  transition: transform 300ms linear;
}

.header.is-hidden {
    transform: translateY(-100%);
}
</style>