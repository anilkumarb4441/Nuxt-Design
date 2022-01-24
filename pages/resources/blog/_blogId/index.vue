<template>
  <div class="blog_id_page mb-5">
    <h1 class="col-10 my-5 hero-title mx-auto">
      Magic Circle Activity: Create Space to Play with Wild Ideas {{ title }}
    </h1>

    <div class="col-10 mx-auto">
      <div class="row mx-auto">
        <div class="col-lg-8">
          <img
            src="https://media.istockphoto.com/photos/business-team-connect-pieces-of-gears-teamwork-partnership-and-picture-id1212507783?b=1&k=20&m=1212507783&s=170667a&w=0&h=pPzk8n1elv-I-NzZb23Buq21im4Dr_Cypwjucte2Hck="
            alt=""
            width="100%"
            class="fluid"
          />
          <img :src="thumbnail" alt="" class="img-fluid mb-5" width="100%" />
          <p>
            Have you ever started brainstorming ideas for a project and found
            that each one gets turned down immediately because there’s not
            enough budget, time or resources? It's a defeating feeling that the
            constraints of the real world remove all possibilities of a creative
            solution.
            <br />
            <br />
            “If you let yourself be bogged down by the things that constantly
            tell you no, whether real people or things in your own head, it's
            really hard to think out of the box and go into an innovative
            space,” says Michelle Lee of the drawback to bringing in constraints
            too early.
            <br />
            <br />
            In a magic circle, you get a temporary break from reality to dream
            big. Creating a magic circle is something designers in IDEO U’s Play
            Lab like to do at the beginning of a brainstorm. It’s something you
            can try by yourself, with your team, or with a room full of clients.
            <br />
            <br />
            Michelle, a managing director leading IDEO’s Design for Play team,
            breaks down four steps for creating a magic circle to give
            permission to be more playful, generative, creative and innovative.
            Hear more in our Creative Confidence podcast episode with Michelle
            and Brendan Boyle, an IDEO partner and founder of the IDEO Play Lab.
            {{ text }}
          </p>

          <h3 class="h3-size-text mt-5 mb3">How to Create a Magic Circle {{ stepsTitle }}</h3>
          <div>
            <h5>Step 1:</h5>
            <p>
              Articulate a project or challenge you’d like to bring more
              creativity into.
              <br />
              Think of a project you’re working on that has lots of road blocks.
              It might be how to retain top talent, how to engage new customer
              segments, or how to inspire a remote workforce.
              {{ step1 }}
            </p>
          </div>
          <div>
            <h5>Step 2:</h5>
            <p>
              Articulate a project or challenge you’d like to bring more
              creativity into.
              <br />
              Think of a project you’re working on that has lots of road blocks.
              It might be how to retain top talent, how to engage new customer
              segments, or how to inspire a remote workforce.
              {{ step2 }}
            </p>
          </div>
          <div>
            <h5>Step 3:</h5>
            <p>
              Articulate a project or challenge you’d like to bring more
              creativity into.
              <br />
              Think of a project you’re working on that has lots of road blocks.
              It might be how to retain top talent, how to engage new customer
              segments, or how to inspire a remote workforce.
              {{ step3 }}
            </p>
          </div>
          <div>
            <h5>Step 4:</h5>
            <p>
              Articulate a project or challenge you’d like to bring more
              creativity into.
              <br />
              Think of a project you’re working on that has lots of road blocks.
              It might be how to retain top talent, how to engage new customer
              segments, or how to inspire a remote workforce.
              {{ step4 }}
            </p>
          </div>
          <hr />
          <p>
            <em>
              Ready to take your learning further? Learn to prototype,
              experiment, and iterate to move your ideas forward in our course
              From Ideas to Action. {{ endText }}
            </em>
          </p>
          <div>
            <li>
              <b-button class="social-media">
                <i class="fab fa-linkedin"></i>
                _LINKEDIN
              </b-button>
            </li>
            <li>
              <b-button class="social-media">
               <i class="fab fa-facebook-square"></i>
                _SHARE
              </b-button>
            </li>
            <li>
              <b-button class="social-media">
                <i class="fab fa-twitter-square"></i>
                _TWEET
              </b-button>
            </li>
          </div>
          <div>
            <a href="/resources/blog">
              <b-button class="btn backButton my-5 px-4">
                <i class="fas fa-long-arrow-alt-left mr-2"></i>
                BACK TO BLOG
              </b-button>
            </a>
          </div>
        </div>
        <div class="col-lg-4 mx-auto ">
          <section class="course-guide py-3">
           <div class="p-3 ">
                <h3 class="h3-size-text mb-4 mx-auto ">Courses Starting Soon</h3>
             <div class="text-center">
              <b-card
                img-src="~assets/blog/blog-id-course-img.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: auto;"
                class="mb-4"
              >
                <b-card-text class="mx-auto">
                 <h5 class="course-guide-content">  Foundations in Design Thinking Certificate</h5>
                </b-card-text>

                <b-button href="#" class="btn my-3 px-5 py-2 course-button "  > LEARN MORE </b-button>
              </b-card>
            </div>
            <div class="text-center">
              <b-card
                img-src="~assets/blog/blog-id-course-img1.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: auto;"
                class="mb-2"
              >
                <b-card-text class="mx-auto">
                 <h5 class="course-guide-content"> Designing Strategy </h5>
                </b-card-text>

                 <b-button href="#" class="btn my-3 px-5 py-2 course-button text-align-center "  > LEARN MORE</b-button>
              </b-card>
            </div>
           
           </div>
            <b-button class="btn px-5 py-2 mx-auto d-block ">SEE ALL COURSES</b-button>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.blog_id_page {
  font-family: 'Corbel', 'Avenir Next', 'Open Sans', 'Helvetica Neue', Arial,
    Helvetica, 'Geneva', sans-serif;
}
.hero-title {
  font-size: 40px;
  font-weight: 700;
  line-height: 45px;
  color: #2d2d2a;
}
li {
  display: inline-block;
  padding: 5px;
}

.social-media {
  background-color: white !important;
  color: black !important;
  border-color: rgb(209, 206, 206);
  font-weight: 700;
}
.social-media:hover {
  background-color: rgb(66, 66, 66) !important;
  color: white !important;
}
.btn {
  background-color: #2d2d2a;
  color: white;
}
.btn:hover {
  background-color: #f2bb46;
}
.course-guide {
  background-color: #f2f2f2;
  top: 15px;
  position: sticky !important;
}
.course-button{
    background-color: #4aaeb949 !important;
    color: black;
    border: none;
      font-weight: 800;
}
.course-button:hover{
    background-color: #2d2d2a !important;
    color: rgb(255, 255, 255);
    font-weight: 800;
}
.h3-size-text{
    font-size: 26px;
font-weight: 700;
line-height: 32px;
}
.course-guide-content{
     font-size: 20px;
font-weight: 700;
line-height: 26px;
}
h5{
    font-size: 20px;
font-weight: 700;
line-height: 26px;
}
p{
    font-size: 18px;
  font-weight: 500;
  line-height: 26px;
}
</style>
