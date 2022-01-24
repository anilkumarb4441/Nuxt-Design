<template>
  <div class="book_id_page">
    <div class="col-lg-11 mx-auto mt-5">
      <h5> 
        You are here :
        <a href="/">Home</a>
        /
        <a href="/resources/books">Books</a>/  {{books.title}}
      </h5>
    </div>
      <div class="col-lg-11 mx-auto book_summary">
      <div class="row">
        <div class="col-lg-5 ">
      <img :src="books.imageUrl" alt="booksimg" class="img-fluid" width="100%">
      </div>
      <div class="col-lg-7 mx-auto">
        <h4 class="font-wieght-bold mb-5">{{books.title}}</h4>
         <p class="main_text"> 
           {{books.fullSumary}}
          

        </p>
        <hr>

      </div>
      </div>
      </div>
    <!-- <div class="col-lg-11 mx-auto book_summary">
      <div class="row">
        <div class="col-lg-4">
          <img
            src="https://f4i7s5v3.stackpathcdn.com/_resources/_global/media/resized/00001/ihwx.15f54a47-ae60-4cd0-bb9c-1a6af9d3b8c3.200.175.jpg"
            alt=""
            class="img-fluid"
            width="100%"
          />
        </div>
        <div class="col-lg-7">
          <h2>You Are The Brand</h2>
          <p class="main_text">
            The 8-Step Blueprint to Showcase Your Unique Expertise and Build a
            Highly Profitable, Personally Fulfilling Business
          </p>
          <p class="my-4"><em>by Mike Kim</em></p>
          <p class="main_text">
            Everyone already is a personal brand, whether they like it or not.
            But how you choose to cultivate that brand is a choice. Ignore it
            and let the world decide who you are, or be intentional and bring
            your best self forward. You Are the Brand isn’t about cultivating
            some perfect persona of someone with zero faults. It’s about asking
            basic questions, discovering your own answers, and building your
            personal brand around them.
          </p>
          <p class="main_text"> <strong>In This Book You'll Learn:</strong></p>
          <p> 
              <ul>
                 <li><p class="main_text">The difference between a how-to-preneur and an ideapreneur, why it matters, and where you fit.</p></li>
                 <li><p class="main_text">The three questions you must answer to build your personal brand.</p></li>
                 <li><p class="main_text">How to build a platform and effectively position yourself on that platform, launching products, setting pricing, and more.</p></li>
                 <li><p class="main_text">How to build pitches that make things happen and make partners that will support you to the end.</p></li>
                 <li><p class="main_text">How to build pitches that make things happen and make partners that will support you to the end.</p></li>
              </ul>
          </p>
          <p class="main_text mt-5"> In his signature business fable style, Lencioni challenges why we hate going to meetings. This book gives us a framework for thinking about how to make meetings entertaining, meaningful, and effective. Packed with practical advice and examples, Death by Meeting will help you improve your meeting structure, participation, and results.</p>
        <h5 class="my-5">The Solution? Make it Engaging</h5>
        <p class="main_text"> <strong>1. Allow for Drama</strong></p>
        <p class="main_text">We can sit at attention silently for hours in a dark theater, but somehow can’t make it through a 30 minute project status meeting without checking our email. What’s the key difference? Drama.</p>
    <br>
    <p class="Main-text">You may need to illustrate the consequences of a bad decision, highlight a competitive threat, appeal to the meeting participants’ commitment to a larger mission, or remind them of the impact their decision has on their clients, employees, or society at large. </p>
     <ul>
                 <li><p class="main_text">The difference between a how-to-preneur and an ideapreneur, why it matters, and where you fit.</p></li>
                 <li><p class="main_text">The three questions you must answer to build your personal brand.</p></li>
                 <li><p class="main_text">How to build a platform and effectively position yourself on that platform, launching products, setting pricing, and more.</p></li>
                 <li><p class="main_text">How to build pitches that make things happen and make partners that will support you to the end.</p></li>
                 <li><p class="main_text">How to build pitches that make things happen and make partners that will support you to the end.</p></li>
              </ul>
              <p class="main_text"> <strong>2. The Weekly Tactical</strong></p>
              <p class="main_text">The Weekly Tactical is analogous to a weekly staff meeting, but the focus is more disciplined. The Weekly Tactical is focused exclusively on tactical issues of immediate concern.</p>
    <br>
                  <p class="main_text">The Weekly Tactical is analogous to a weekly staff meeting, but the focus is more disciplined. The Weekly Tactical is focused exclusively on tactical issues of immediate concern.</p>
<br>
              <p class="main_text">The Weekly Tactical is analogous to a weekly staff meeting, but the focus is more disciplined. The Weekly Tactical is focused exclusively on tactical issues of immediate concern.</p>
 <ul>
                 <li><p class="main_text">The difference between a how-to-preneur and an ideapreneur, why it matters, and where you fit.</p></li>
                 <li><p class="main_text">The three questions you must answer to build your personal brand.</p></li>
                 <li><p class="main_text">How to build a platform and effectively position yourself on that platform, launching products, setting pricing, and more.</p></li>
                 <li><p class="main_text">How to build pitches that make things happen and make partners that will support you to the end.</p></li>
                 <li><p class="main_text">How to build pitches that make things happen and make partners that will support you to the end.</p></li>
              </ul>
    </div>
      </div>
    </div> -->
    <div class="col-lg-8 mx-auto my-5 suscribe_section">
        <h5 class="text-center mb-4">Did you Enjoy This? Then Suscribe </h5>
         <div class="text-center"><input type="mail" placeholder="Enter your Email"> 
         <b-button class="btn "> Suscribe</b-button></div>
    </div>
    <img src="~assets/books/book frame.png" alt="" width="100%">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  asyncData(context) {
  return axios.get('https://leadd-7db59-default-rtdb.asia-southeast1.firebasedatabase.app/books/' + context.params.id + '.json')
      .then(res => {
        return {
          books: res.data
        }
      })
      .catch(e => context.error(e))
  }
};
</script>

<style scoped>
.book_id_page {
  font-family: 'Avenir Next', 'Open Sans', 'Helvetica Neue', Arial, Helvetica,
    'Geneva', sans-serif;
    background-image: url('~assets/books/book frame.png');
    background-size: cover;
}
.book_summary {
  margin-top: 6rem;
}
.main_text {
  font-size: 15px;
  font-weight: 500;
  line-height: 22px;
}
.suscribe_section{
    background-color: #112855;
    color: white;
    padding: 1.5rem 0;
}
input{
    padding: 4px 35px;
}
.btn{
    background-color: #2d2d2a;
    color: white;
    border: 2px solid white;
}
.btn:hover{
    background-color: #e7b80e;
    color: white;
}
</style>
