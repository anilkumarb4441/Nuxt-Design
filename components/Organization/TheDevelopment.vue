<template>
  <div
    class="md content d-flex justify-content-center align-items-center"
    :style="{ 'background-color': color }"
  >
    <section class=" row d-block mb-5">
      <slot name="icon" ><i class="fas fa-store-alt"></i></slot>
    </section>
    <section class="row d-block mt-5">
      <p>
        <slot name="cardTitle">Fall back title</slot>
      </p>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.content {
  box-sizing: border-box;
  width: 100%;
  height: 170px;
  font-size: 20px;
}
i {
  font-size: 28px;
}

@media only screen and (min-width: 200px) and (max-width: 767px) {
  .content {
    width: 60%;
    margin-top: 1.5rem;
    height: 70px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
