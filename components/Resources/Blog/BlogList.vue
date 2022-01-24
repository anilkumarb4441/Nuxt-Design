<template>
  <div class="blog_list">
    <div class="d-flex justify-content-center">
      <h1 class="blog_headline">Blog</h1>
      <i class="fas fa-rss ml-3 my-auto"></i>
    </div>
    <div class="row d-flex justify-content-center mt-3 mb-5">
      <div class="col-md-2 offset-md-3 my-auto mx-0 px-0">
        <span class="filterby text-large"><b>FILTER BY</b></span>
      </div>
      <div class="col-md-4 py-2 mx-0 px-0">
        <select id="BlogTagFilter" class="py-2">
          <option value="/blogs/inspiration">All topics</option>

          <option value="/blogs/inspiration/tagged/activities">
            Activities
          </option>

          <option value="/blogs/inspiration/tagged/brainstorming">
            Brainstorming
          </option>

          <option value="/blogs/inspiration/tagged/business-design">
            Business Design
          </option>

          <option value="/blogs/inspiration/tagged/collaboration">
            Collaboration
          </option>

          <option value="/blogs/inspiration/tagged/creative-confidence-series">
            Creative Confidence Series
          </option>

          <option value="/blogs/inspiration/tagged/creativity">
            Creativity
          </option>

          <option value="/blogs/inspiration/tagged/culture-change">
            Culture Change
          </option>

          <option value="/blogs/inspiration/tagged/design-thinking">
            Design Thinking
          </option>

          <option value="/blogs/inspiration/tagged/empathy-insights">
            Empathy &amp; Insights
          </option>

          <option value="/blogs/inspiration/tagged/experimentation">
            Experimentation
          </option>

          <option value="/blogs/inspiration/tagged/ideation-prototyping">
            Ideation &amp; Prototyping
          </option>
        </select>
      </div>
    </div>
    <div class="col-md-10 ml-auto">
<div class="row mx-auto">
      <div class="col-lg-4 col-offset-lg-0 px-0 mx-3">
        <div class="blog-card-list">
          <BlogPreview
            title="Magic Circle Activity: Create Space to Play with Wild Ideas "
            thumbnail="https://media.istockphoto.com/photos/business-team-connect-pieces-of-gears-teamwork-partnership-and-picture-id1212507783?b=1&k=20&m=1212507783&s=170667a&w=0&h=pPzk8n1elv-I-NzZb23Buq21im4Dr_Cypwjucte2Hck="
            text="Four steps for creating a magic circle to give your team permission to be more playful, generative, creative and innovative."
            subtext=" Posted in Activities, Brainstorming, Creative Confidence Series, Ideation & Prototyping"
          />
        </div>
      </div>
      <div class="col-lg-4 px-0 mx-3">
        <div class="blog-card-list">
          <BlogPreview
            title=" Behaviors to Fuel More Play and Better Ideas"
            thumbnail="https://images.unsplash.com/photo-1518792528501-352f829886dc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGNyZWF0aXZpdHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            text="Four steps for creating a magic circle to give your team permission to be more playful, generative, creative and innovative."
            subtext=" Posted in Activities, Brainstorming, Creative Confidence Series, Ideation & Prototyping"
          />
        </div>
      </div>
      <div class="col-lg-4 px-0 mx-3">
        <div class="blog-card-list">
          <BlogPreview
            title="How to Make Your Strategy Real"
            thumbnail="https://images.unsplash.com/photo-1507209696998-3c532be9b2b5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c2luZXNzJTIwZGlzaWdufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            text="Taking action on a business strategy is something many people struggle with. Jennifer Riel, IDEO’s global director of strategy, shares how to know when you’re ready to put your strategy into action, 
        three design tasks required to do so, and examples and tips to help you get started."
            subtext=" Posted in Business Design, Creative Confidence Series, Leadership, Strategy"
          />
        </div>
      </div>
      <div class="col-lg-4 px-0 mx-3">
        <div class="blog-card-list">
          <BlogPreview
            title="Magic Circle Activity: Create Space to Play with Wild Ideas "
            thumbnail="https://media.istockphoto.com/photos/business-team-connect-pieces-of-gears-teamwork-partnership-and-picture-id1212507783?b=1&k=20&m=1212507783&s=170667a&w=0&h=pPzk8n1elv-I-NzZb23Buq21im4Dr_Cypwjucte2Hck="
            text="Four steps for creating a magic circle to give your team permission to be more playful, generative, creative and innovative."
            subtext=" Posted in Activities, Brainstorming, Creative Confidence Series, Ideation & Prototyping"
          />
        </div>
      </div>

      <div class="col-lg-4 px mx-3">
        <div class="blog-card-list">
          <BlogPreview
            title="Learnings from Looking Inside Thousands of Businesses"
            thumbnail="https://media.istockphoto.com/photos/mature-man-professor-standing-in-class-picture-id1278976696?b=1&k=20&m=1278976696&s=170667a&w=0&h=eHDS5XNuYejsRCvQmvWWLWEg8iUUWTU_xahPDtZyF7c="
            text="As a venture capital investor at Collaborative Fund and Kindred Ventures, Kanyi Maqubela has invested in dozens of companies—including  and Blue Bottle Coffee—and evaluated hundreds more.
         but have the potential to reinvent our future."
            subtext="Posted in Business Design, Creative Confidence Series, Leadership How"
          />
        </div>
      </div>
    </div>
    </div>

    <!-- <BlogPreview
      v-for="blog in blogs"
      :key="blog.id"
      :id="blog.id"
      :title="blog.title"
      :text="blog.text"
      :subtext="blog.subtext"
   /> -->
  </div>
</template>

<script>
import BlogPreview from '@/components/Resources/Blog/BlogPreview.vue'
export default {
  components: {
    BlogPreview,
  },
  data() {
    return {
      // blogs: [
      //   {
      //     blog: {
      //       id: '1',
      //       title:
      //         'Magic Circle Activity: Create Space to Play with Wild Ideas',
      //       text:
      //         'Four steps for creating a magic circle to give your team permission to be more playful, generative, creative and innovative.',
      //       subtext:
      //         'Posted in Activities, Brainstorming, Creative Confidence Series, Ideation & Prototyping',
      //       thumbnail: '~assets/images/couch1.jpg',
      //     },
      //   },
      //   {
      //     blog: {
      //       id: '1',
      //       title:
      //         'Magic Circle Activity: Create Space to Play with Wild Ideas',
      //       text:
      //         'Four steps for creating a magic circle to give your team permission to be more playful, generative, creative and innovative.',
      //       subtext:
      //         'Posted in Activities, Brainstorming, Creative Confidence Series, Ideation & Prototyping',
      //       thumbnail: '~assets/images/couch1.jpg',
      //     },
      //   },
      //   {
      //     blog: {
      //       id: '1',
      //       title:
      //         'Magic Circle Activity: Create Space to Play with Wild Ideas',
      //       text:
      //         'Four steps for creating a magic circle to give your team permission to be more playful, generative, creative and innovative.',
      //       subtext:
      //         'Posted in Activities, Brainstorming, Creative Confidence Series, Ideation & Prototyping',
      //       thumbnail: '~assets/images/couch1.jpg',
      //     },
      //   },
      // ],
    }
  },
}
</script>

<style scoped>
.blog_list {
  font-family: 'Corbel', 'Avenir Next', 'Open Sans', 'Helvetica Neue', Arial,
    Helvetica, 'Geneva', sans-serif;
  margin-top: 4rem;
}
.blog_headline {
  font-size: 39px;
  font-weight: 700;
  line-height: 45.6px;
  color: rgb(0, 0, 0);
}
.fa-rss {
  font-size: 20px;
}
#BlogTagFilter {
  background-color: #f4f4f4;
  border: none;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
}
.blog-card-list {
  margin: 2rem 0 !important;
}
</style>
