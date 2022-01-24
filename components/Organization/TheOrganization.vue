<template>
  <section>
    <div id="organization" class="row">
      <div class="col-md-2 offset-md-3 px-0 ">
        <a href="/google.com" class="text-white text-decoration-none">
          <the-development color="#eea146">
            <template #icon ><i class="far fa-building "></i></template>
            <template #cardTitle>People Developement</template>
          </the-development>
        </a>
      </div>
      <div class="col-md-2 px-0 mx-0">
        <a href="/google.com" class="text-white text-decoration-none">
        <the-development color="#86aa00">
          <template #icon class="d-block"><i class="far fa-user"></i></template>
          <template #cardTitle class="d-block">Process</template>
        </the-development>
        </a>
      </div>
      <div class="col-md-2 px-0 mx-0">
        <a href="/google.com" class="text-white text-decoration-none">
        <the-development color="#142952">
          <template #icon><i class="fas fa-tools"></i></template>
          <template #cardTitle>Tools</template>
        </the-development>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import TheDevelopment from '~/components/Organization/TheDevelopment.vue'

export default {
  components: {
    TheDevelopment,
  },
}
</script>

<style scoped>
a :hover{
  color : #963a7c ;
  text-decoration: none;
  
}

</style>
