<template>
  <div>
    <div>
      <i
        id="myBtn"
        @click="toTop()"
        v-show="scY > 300"
        class="fas fa-chevron-up scroll_up"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scTimer: 0,
      scY: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (this.scTimer) return
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY
        clearTimeout(this.scTimer)
        this.scTimer = 0
      }, 100)
    },
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style scoped>
.scroll_up {
  font-size: 20px;
  color: #2d2d2a !important;
  background-color: #142952cb;
  padding: 6px 8px;
  z-index: 999;
}
.scroll_up:hover {
  color: #f2bb46 !important;
}

#myBtn {
  position: fixed;
  bottom: 0px;
  right: 3%;
  cursor: pointer;
  display: inline;
  z-index: 999;
}
</style>
