<template>
  <div class="my-5">
    <div class="col-lg-9 card mx-auto mt-5">
      <div class="row my-5">
        <div class="col-lg-5 mx-auto mb-5">
          <img :src="thumbnail" alt="" height="50%" />
          <h5 class="subtitle my-4">MORE FROM {{ instructorName1 }}</h5>
          <h5 class="subtitle">{{ leaddactivityone }}</h5>
          <h5>
            <a href="#">
              The Three Qualities Leaders Need in an Uncertain Future
            </a>
          </h5>
          <h5 class="subtitle mt-4">{{ leaddactivitytwo }}</h5>
          <h5>
            <a href="#">
              Office Hours: IDEO U Founders Share Tips for Getting Creative at
              Work
            </a>
          </h5>
        </div>
        <div class="col-lg-6 mx-auto">
          <h2 class="subtitle2">{{ instructorName2 }}</h2>
          <h4>{{ designation }}</h4>
          <h5 class="subtitle mt-5">COURSE</h5>
          <h5>
            <a href="#">{{ courseName }}</a>
          </h5>
          <p>{{ aboutInstructor }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    instructorName1: {
      type: String,
      required: true,
    },
    instructorName2: {
      type: String,
      required: true,
    },
    aboutInstructor: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    leaddactivityone: {
      type: String,
      required: true,
    },
    leaddactivitytwo: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    courseName: {
      type: String,
      required: true,
    },
  
  },
}
</script>

<style scoped>
.card {
  box-shadow: 1px 1px 2px 2px rgba(196, 196, 196, 0.5);
}
p {
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  color: rgb(43, 42, 42);
}
.post-thumbnail {
  width: 100%;
  height: 200px;
}
.subtitle {
  color: #142952;
  font-size: 19px;
  font-weight: 800;
  line-height: 24px;
}
a {
  color: rgb(77, 77, 77);
  font-size: 17px;
  font-weight: 700;
  text-decoration: underline;
}
.subtitle2 {
  color: #2d2d2a;
  font-size: 32px;
  font-weight: 600;
  line-height: 39px;
}
li {
  display: inline-block;
}
.card {
  box-shadow: 1px 1px 2px 2px rgba(196, 196, 196, 0.5);
}
</style>
