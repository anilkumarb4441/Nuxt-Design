<template>
  <div class="podcast_id">
    <div class="page_intro">
      <div class="">
        <br><br>
      <h1 class="hero-title">Listen to Podcast Episodes</h1>
      <p class="col-md-6 mx-auto text-white">
        Leadd is the energetic host behind the podcast entitled "Just a Tip."
        Her and her guests give tips on a wide variety of topics and laugh at
        mistakes they've made inviting you to do the same and learn from it!
      </p>
      </div>
    </div>
    <div class="col-md-9 card mx-auto my-5">
      <div class="row">
        <div class="col-md-4">
          <b-img
            src="~assets/podcast/podcast-audio-main-img.jpg"
            alt=""
            width="auto"
            class="img-fluid p-3"
            rounded
          />
        </div>
        <div class="col-md-8">
          <strong>Leadd Podcast</strong>
          .
          <span>Episode 5</span>
          <h4>
            <strong>Twenty Thousand Hertz</strong>
          </h4>
          <div class="col-sm-12 col-sm-offset-2">
                <audio
              src="@/assets/audios/podcast1.mp3"
              controls
              class="audio my-3"
            ></audio>
          </div>
          <div class="mb-3"><a href="#"><span class="p-2 text-dark">SUBSCRIBE</span></a>
          <a href="#"><span class="p-2 text-dark">SHARE</span></a>
          <button v-if="vissible === false" @click="showOn" class="ml-auto">
           Show More
          </button>
          <button v-if="vissible === true" @click="showOn" class="ml-auto">
            Show less
          </button></div>
        </div>
        <div v-show="vissible" class="">
          <hr class="hr_line my-5" width="70%" />
          <div class="col-lg-8 mx-auto">
            <h4><strong>Twenty Thousand Hertz</strong></h4>
            <br />
            <h5>
              PODCAST HOST: TOBY TUCKER – DIRECTOR OF SALES, COUNTRY MALT GROUP
            </h5>
            <h5>GUEST:</h5>
            <h6>KEVIN DAVEY – BREWER, WAYFINDER BEER</h6>
            <br />

            <p>
              Today, Brewer and Wayfinder Beer spend some quality time talking
              about some of their favorite things — one of which is nerdy tech
              stuff. In this episode, they explore a whole new suite of business
              apps they can’t live without. Buckle up!
            </p>
            <br />
            <h6><strong>Key Points From This Episode:</strong></h6>
            <ul>
              <li>
                <p>
                  Introducing Kevin Davey and the backstory to the Wayfinder
                  Cold IPA.
                </p>
              </li>
              <li>
                <p>
                  Kevin’s answer to the question of using the Cold IPA recipe as
                  a marketing technique.
                </p>
              </li>
              <li>
                <p>
                  IPA versus IPL and how Kevin’s approach to making an IPA
                  differs.
                </p>
              </li>
              <li>
                <p>
                  A deep dive into the IPA recipe and how it differs
                  process-wise from a lager.
                </p>
              </li>
              <li>
                <p>
                  Kevin weighs in on the hop quantity and grist composition of
                  the cold IPA.
                </p>
              </li>
              <li>
                <p>
                  The story of how Kevin found the right adjuncts to use in the
                  recipe.
                </p>
              </li>
              <li>
                <p>
                  The story of how Kevin found the right adjuncts to use in the
                  recipe.
                </p>
              </li>
              <li>
                <p>
                  The story of how Kevin found the right adjuncts to use in the
                  recipe.
                </p>
              </li>
            </ul>
            <div class=" text-center">
              <h5 class="mt-5 mb-"><strong>FOLLOW @LEADDPODCASTS</strong></h5>
              <li class="follow_list"><i class="fas fa-podcast follow_icon"></i></li>
              <li class="follow_list"><i class="fab fa-instagram follow_icon"></i></li>
              <li class="follow_list"><i class="fab fa-youtube-square follow_icon"></i></li>
              <li class="follow_list"><i class="fab fa-facebook-square follow_icon"></i></li>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <p>  2nd</p> -->

    <div class="col-md-9 card mx-auto my-5">
      <div class="row">
        <div class="col-md-4">
          <b-img
            src="~assets/podcast/podcast-audio-main-ep4.jpg"
            alt=""
            width="auto"
            class="img-fluid p-3"
            rounded
          />
        </div>
        <div class="col-md-8">
          <strong>Leadd Podcast</strong>
          .
          <span>Episode 4</span>
          <h4>
            <strong>The Business Hierarchy of Needs</strong>
          </h4>
          <div class="col-sm-12 col-sm-offset-2"> 
                <audio
              src="@/assets/audios/podcast1.mp3"
              controls
              class="audio my-3"
            ></audio>
          </div>
          <a href="#"><span class="p-2 text-dark">SUBSCRIBE</span></a>
          <a href="#"><span class="p-2 text-dark">SHARE</span></a>
          <button v-if="vissible === false" @click="showOn" class="">
            Show More
          </button>
          <button v-if="vissible === true" @click="showOn">
            Show less
          </button>
        </div>
        <div v-show="vissible" class="">
          <hr class="hr_line my-5" width="70%" />
          <div class="col-lg-8 mx-auto">
            <h4><strong>The Business Hierarchy of Needs</strong></h4>
            <br />
            <h5>
              PODCAST HOST: TOBY TUCKER – DIRECTOR OF SALES, COUNTRY MALT GROUP
            </h5>
            <h5>GUEST:</h5>
            <h6>KEVIN DAVEY – BREWER, WAYFINDER BEER</h6>
            <br />

            <p>
              Today, Brewer and Wayfinder Beer spend some quality time talking
              about some of their favorite things — one of which is nerdy tech
              stuff. In this episode, they explore a whole new suite of business
              apps they can’t live without. Buckle up!
            </p>
            <br />
            <h6><strong>Key Points From This Episode:</strong></h6>
            <ul>
              <li>
                <p>
                  Introducing Kevin Davey and the backstory to the Wayfinder
                  Cold IPA.
                </p>
              </li>
              <li>
                <p>
                  Kevin’s answer to the question of using the Cold IPA recipe as
                  a marketing technique.
                </p>
              </li>
              <li>
                <p>
                  IPA versus IPL and how Kevin’s approach to making an IPA
                  differs.
                </p>
              </li>
              <li>
                <p>
                  A deep dive into the IPA recipe and how it differs
                  process-wise from a lager.
                </p>
              </li>
              <li>
                <p>
                  Kevin weighs in on the hop quantity and grist composition of
                  the cold IPA.
                </p>
              </li>
              <li>
                <p>
                  The story of how Kevin found the right adjuncts to use in the
                  recipe.
                </p>
              </li>
              <li>
                <p>
                  The story of how Kevin found the right adjuncts to use in the
                  recipe.
                </p>
              </li>
              <li>
                <p>
                  The story of how Kevin found the right adjuncts to use in the
                  recipe.
                </p>
              </li>
            </ul>
            <div class=" text-center">
              <h5 class="mt-5 mb-"><strong>FOLLOW @LEADDPODCASTS</strong></h5>
              <li class="follow_list"><i class="fas fa-podcast follow_icon"></i></li>
              <li class="follow_list"><i class="fab fa-instagram follow_icon"></i></li>
              <li class="follow_list"><i class="fab fa-youtube-square follow_icon"></i></li>
              <li class="follow_list"><i class="fab fa-facebook-square follow_icon"></i></li>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <p> 3rd</p> -->

    <div class="col-md-9 card mx-auto my-5">
      <div class="row">
        <div class="col-md-4">
          <b-img
            src="~assets/podcast/podcast-audio-main-ep3.jpg"
            alt=""
            width="auto"
            class="img-fluid p-3"
            rounded
          />
        </div>
        <div class="col-md-8">
          <strong>Leadd Podcast</strong>
          .
          <span>Episode 3</span>
          <h4>
            <strong>Five Benefits of Hosting a Virtual Event</strong>
          </h4>
          <div class="col-sm-12 col-sm-offset-2">
            <audio
              src="@/assets/audios/podcast1.mp3"
              controls
              class="audio my-3"
            ></audio>
          </div>
          <a href="#"><span class="p-2 text-dark">SUBSCRIBE</span></a>
          <a href="#"><span class="p-2 text-dark">SHARE</span></a>
          <button v-if="vissible === false" @click="showOn" class="">
            Show More
          </button>
          <button v-if="vissible === true" @click="showOn">
            Show less
          </button>
        </div>
        <div v-show="vissible" class="">
          <hr class="hr_line my-5" width="70%" />
          <div class="col-lg-8 mx-auto">
            <h4><strong>Five Benefits of Hosting a Virtual Event</strong></h4>
            <br />
            <h5>
              PODCAST HOST: TOBY TUCKER – DIRECTOR OF SALES, COUNTRY MALT GROUP
            </h5>
            <h5>GUEST:</h5>
            <h6>KEVIN DAVEY – BREWER, WAYFINDER BEER</h6>
            <br />

            <p>
              Today, Brewer and Wayfinder Beer spend some quality time talking
              about some of their favorite things — one of which is nerdy tech
              stuff. In this episode, they explore a whole new suite of business
              apps they can’t live without. Buckle up!
            </p>
            <br />
            <h6><strong>Key Points From This Episode:</strong></h6>
            <ul>
              <li>
                <p>
                  Introducing Kevin Davey and the backstory to the Wayfinder
                  Cold IPA.
                </p>
              </li>
              <li>
                <p>
                  Kevin’s answer to the question of using the Cold IPA recipe as
                  a marketing technique.
                </p>
              </li>
              <li>
                <p>
                  IPA versus IPL and how Kevin’s approach to making an IPA
                  differs.
                </p>
              </li>
              <li>
                <p>
                  A deep dive into the IPA recipe and how it differs
                  process-wise from a lager.
                </p>
              </li>
              <li>
                <p>
                  Kevin weighs in on the hop quantity and grist composition of
                  the cold IPA.
                </p>
              </li>
              <li>
                <p>
                  The story of how Kevin found the right adjuncts to use in the
                  recipe.
                </p>
              </li>
              <li>
                <p>
                  The story of how Kevin found the right adjuncts to use in the
                  recipe.
                </p>
              </li>
              <li>
                <p>
                  The story of how Kevin found the right adjuncts to use in the
                  recipe.
                </p>
              </li>
            </ul>
            <div class=" text-center">
              <h5 class="mt-5 mb-"><strong>FOLLOW @LEADDPODCASTS</strong></h5>
              <li class="follow_list"><i class="fas fa-podcast follow_icon"></i></li>
              <li class="follow_list"><i class="fab fa-instagram follow_icon"></i></li>
              <li class="follow_list"><i class="fab fa-youtube-square follow_icon"></i></li>
              <li class="follow_list"><i class="fab fa-facebook-square follow_icon"></i></li>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <p> 4th</p> -->

    <div class="col-md-9 card mx-auto my-5">
      <div class="row">
        <div class="col-md-4">
          <b-img
            src="~assets/podcast/podcast-audio-main-ep1.jpg"
            alt=""
            width="auto"
            class="img-fluid p-3"
            rounded
          />
        </div>
        <div class="col-md-8">
          <strong>Leadd Podcast</strong>
          .
          <span>Episode 2</span>
          <h4>
            <strong>Gift Ideas for Entrepreneurs</strong>
          </h4>
          <div class="col-sm-12 col-sm-offset-2">
            <audio
              src="@/assets/audios/podcast1.mp3"
              controls
              class="audio my-3"
            ></audio>
          </div>
          <a href="#"><span class="p-2 text-dark">SUBSCRIBE</span></a>
          <a href="#"><span class="p-2 text-dark">SHARE</span></a>
          <button v-if="vissible === false" @click="showOn" class="">
            Show More
          </button>
          <button v-if="vissible === true" @click="showOn">
            Show less
          </button>
        </div>
        <div v-show="vissible" class="">
          <hr class="hr_line my-5" width="70%" />
          <div class="col-lg-8 mx-auto">
            <h4><strong>Gift Ideas for Entrepreneurs</strong></h4>
            <br />
            <h5>
              PODCAST HOST: TOBY TUCKER – DIRECTOR OF SALES, COUNTRY MALT GROUP
            </h5>
            <h5>GUEST:</h5>
            <h6>KEVIN DAVEY – BREWER, WAYFINDER BEER</h6>
            <br />

            <p>
              Today, Brewer and Wayfinder Beer spend some quality time talking
              about some of their favorite things — one of which is nerdy tech
              stuff. In this episode, they explore a whole new suite of business
              apps they can’t live without. Buckle up!
            </p>
            <br />
            <h6><strong>Key Points From This Episode:</strong></h6>
            <ul>
              <li>
                <p>
                  Introducing Kevin Davey and the backstory to the Wayfinder
                  Cold IPA.
                </p>
              </li>
              <li>
                <p>
                  Kevin’s answer to the question of using the Cold IPA recipe as
                  a marketing technique.
                </p>
              </li>
              <li>
                <p>
                  IPA versus IPL and how Kevin’s approach to making an IPA
                  differs.
                </p>
              </li>
              <li>
                <p>
                  A deep dive into the IPA recipe and how it differs
                  process-wise from a lager.
                </p>
              </li>
              <li>
                <p>
                  Kevin weighs in on the hop quantity and grist composition of
                  the cold IPA.
                </p>
              </li>
              <li>
                <p>
                  The story of how Kevin found the right adjuncts to use in the
                  recipe.
                </p>
              </li>
              <li>
                <p>
                  The story of how Kevin found the right adjuncts to use in the
                  recipe.
                </p>
              </li>
              <li>
                <p>
                  The story of how Kevin found the right adjuncts to use in the
                  recipe.
                </p>
              </li>
            </ul>
            <div class=" text-center">
              <h5 class="mt-5 mb-"><strong>FOLLOW @LEADDPODCASTS</strong></h5>
              <li class="follow_list"><i class="fas fa-podcast follow_icon"></i></li>
              <li class="follow_list"><i class="fab fa-instagram follow_icon"></i></li>
              <li class="follow_list"><i class="fab fa-youtube-square follow_icon"></i></li>
              <li class="follow_list"><i class="fab fa-facebook-square follow_icon"></i></li>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <p> 5th</p> -->

    <div class="col-md-9 card mx-auto my-5">
      <div class="row">
        <div class="col-md-4">
          <b-img
            src="~assets/podcast/podcast-audio-main-ep2.jpg"
            alt=""
            width="auto"
            class="img-fluid p-3"
            rounded
          />
        </div>
        <div class="col-md-8">
          <strong>Leadd Podcast</strong>
          .
          <span>Episode 1</span>
          <h4>
            <strong>Twenty Thousand Hertz</strong>
          </h4>
          <div class="col-sm-12 col-sm-offset-2">
            <audio
              src="@/assets/audios/podcast1.mp3"
              controls
              class="audio my-3"
            ></audio>
          </div>
          <a href="#"><span class="p-2 text-dark">SUBSCRIBE</span></a>
          <a href="#"><span class="p-2 text-dark">SHARE</span></a>
          <button v-if="vissible === false" @click="showOn" class="">
            Show More
          </button>
          <button v-if="vissible === true" @click="showOn">
            Show less
          </button>
        </div>
        <div v-show="vissible" class="">
          <hr class="hr_line my-5" width="70%" />
          <div class="col-lg-8 mx-auto">
            <h4><strong>Twenty Thousand Hertz</strong></h4>
            <br />
            <h5>
              PODCAST HOST: TOBY TUCKER – DIRECTOR OF SALES, COUNTRY MALT GROUP
            </h5>
            <h5>GUEST:</h5>
            <h6>KEVIN DAVEY – BREWER, WAYFINDER BEER</h6>
            <br />

            <p>
              Today, Brewer and Wayfinder Beer spend some quality time talking
              about some of their favorite things — one of which is nerdy tech
              stuff. In this episode, they explore a whole new suite of business
              apps they can’t live without. Buckle up!
            </p>
            <br />
            <h6><strong>Key Points From This Episode:</strong></h6>
            <ul>
              <li>
                <p>
                  Introducing Kevin Davey and the backstory to the Wayfinder
                  Cold IPA.
                </p>
              </li>
              <li>
                <p>
                  Kevin’s answer to the question of using the Cold IPA recipe as
                  a marketing technique.
                </p>
              </li>
              <li>
                <p>
                  IPA versus IPL and how Kevin’s approach to making an IPA
                  differs.
                </p>
              </li>
              <li>
                <p>
                  A deep dive into the IPA recipe and how it differs
                  process-wise from a lager.
                </p>
              </li>
              <li>
                <p>
                  Kevin weighs in on the hop quantity and grist composition of
                  the cold IPA.
                </p>
              </li>
              <li>
                <p>
                  The story of how Kevin found the right adjuncts to use in the
                  recipe.
                </p>
              </li>
              <li>
                <p>
                  The story of how Kevin found the right adjuncts to use in the
                  recipe.
                </p>
              </li>
              <li>
                <p>
                  The story of how Kevin found the right adjuncts to use in the
                  recipe.
                </p>
              </li>
            </ul>
            <div class=" text-center">
              <h5 class="mt-5 mb-"><strong>FOLLOW @LEADDPODCASTS</strong></h5>
              <li class="follow_list"><i class="fas fa-podcast follow_icon"></i></li>
              <li class="follow_list"><i class="fab fa-instagram follow_icon"></i></li>
              <li class="follow_list"><i class="fab fa-youtube-square follow_icon"></i></li>
              <li class="follow_list"><i class="fab fa-facebook-square follow_icon"></i></li>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div class=" text-center bottom-follows-link">
              <h5 class="mt-5 mb-"><strong>FOLLOW @LEADDPODCASTS</strong></h5>
              <li class="follow_list"><i class="fas fa-podcast follow_icon"></i></li>
              <li class="follow_list"><i class="fab fa-instagram follow_icon"></i></li>
              <li class="follow_list"><i class="fab fa-youtube-square follow_icon"></i></li>
              <li class="follow_list"><i class="fab fa-facebook-square follow_icon"></i></li>
            </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vissible: false,
    }
  },
  methods: {
    showOn() {
      this.vissible = !this.vissible
    },
  },
}
</script>

<style scoped>
.podcast_id {
  font-family: 'Corbel', 'Avenir Next', 'Open Sans', 'Helvetica Neue', Arial,
    Helvetica, 'Geneva', sans-serif;
}
.page_intro{
height: 40vh;
  width: 100%;
  background: url('~assets/podcast/podcastbk.jpg');
  background-position: center;
  background-size: cover;
  text-align: center;
}
.hero-title {
  font-size: 45px;
  font-weight: 700;
  line-height: 56px;
  color: rgb(255, 255, 255);
  /* margin-top: 6rem !important; */
}
p {
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
}
audio {
  width: 100% !important;
}
.card {
  box-shadow: 0 2px 2px gray;
}
.hr_line {
  border-top: 3px solid #142952 !important;
}
.follow_list {
  display: inline-block !important;
  padding: 1rem;

}
.follow_icon{
  font-size: 25px;
  color: #142952;
}
.follow_icon:hover{
 -webkit-transition: all 0.4s ease;
-moz-transition: all 0.4s ease;
-ms-transition: all 0.4s ease;
-o-transition: all 0.4s ease;
transition: all 0.4s ease;
font-size: 35px;
  color: #963a7c;
}
.bottom-follows-link{
  margin: 5rem 0;

}
</style>
