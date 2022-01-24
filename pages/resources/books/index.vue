<template>
  <div class="books_page">
    <div class="book_jumbo">
      <div class="col-lg-11 mx-auto">
        <div class="row mx-auto my-auto text-white">
          <div class="col-lg-6">
            <br />
            <br />
            <br />
            <br />
            <h1 class="hero_title">Integral Coaching Books</h1>
            <p class="main_text">
              <i class="fas fa-quote-left"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Below is a selection of books
              that provide background and context for our work, followed by a
              list of current favorites. Learn something new every day with
              nonfiction summaries that help you make better decisions in your
              business and personal life.
            </p>
            <a href="#book_list">
              <b-button class="btn_main px-5">Find out More</b-button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-11 mx-auto">
      <div class="row mx-auto read_book_section">
        <div class="col-lg-8 my-auto">
          <h3 class="mb-4">Ready For A Reading</h3>
          <p class="main_text">
            Learn something new every day with nonfiction summaries that help
            you make better decisions in your business and personal life. Learn
            something new every day with nonfiction summaries that help you make
            better decisions in your business and personal life.
          </p>
          <a href="#book_list">
            <b-button class="btn">Find out More</b-button>
          </a>
        </div>
        <div class="col-lg-3 mx-auto">
          <img
            src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4540725.jpg"
            alt=""
            width="100%"
            class="img-fluid"
          />
        </div>
      </div>
    </div>

    <div>
      <div>
        <div class="col-lg-11 mx-auto">
          <h3>What our members are saying</h3>
          <!-- <hr class="hr_line_carosel mt-0 ml-0" /> -->
        </div>
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="300"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
          class="carousel_custamize"
        >
          <!-- Text slides with image -->
          <b-carousel-slide img-src="" class="carousel_custamize">
            <div class="mb-2">
              <b-avatar
                src="data:image/jpeg;base64,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"
                size="6rem"
              ></b-avatar>
              <p class="main_text">ROBERT STEAVEN</p>
            </div>
            <p class="main_text">
              <i class="fas fa-quote-left"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <em>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse eros felis, tincidunt a tincidunt eget, convallis
                vel est. Ut pellentesque ut lacus vel interdum. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Suspendisse eros
                felis, tincidunt a tincidunt eget, convallis vel est. Ut
                pellentesque ut lacus vel interdum.
              </em>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="fas fa-quote-right"></i>
            </p>
          </b-carousel-slide>

          <!-- Slides with custom text -->
          <b-carousel-slide img-src="" class="carousel_custamize">
            <div class="mb-2">
              <b-avatar
                src="data:image/jpeg;base64,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"
                size="6rem"
              ></b-avatar>
              <p class="main_text">EIMMI SMITH</p>
            </div>
            <p class="main_text">
              <i class="fas fa-quote-left"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Suspendisse eros felis, tincidunt a
              tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel
              interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse eros felis, tincidunt a tincidunt eget, convallis vel
              est. Ut pellentesque ut lacus vel interdum.
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="fas fa-quote-right"></i>
            </p>
          </b-carousel-slide>

          <!-- Slides with image only -->
          <b-carousel-slide img-src="" class="carousel_custamize">
            <b-avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_LmG47_W3RM0QBVGI23-vodL_oOOJxLIBrg&usqp=CAU"
              size="6rem"
            ></b-avatar>
            <p class="main_text">DAVID MILLER</p>

            <p class="main_text">
              <i class="fas fa-quote-left"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Suspendisse eros felis, tincidunt a
              tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel
              interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse eros felis, tincidunt a tincidunt eget, convallis vel
              est. Ut pellentesque ut lacus vel interdum.
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="fas fa-quote-right"></i>
            </p>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </div>
    <div class="col mx-auto searchBanner">
      <!-- <h3 class="text-center"> Find a Book</h3> -->
      <h5 class="text-center f-nt-weight-bold">find your favorite books</h5>
      <div class="text-center">
        <input
          type="text"
          id="searh"
          placeholder="Search books"
          v-model="search1"
          class="searchBar"
        />
      </div>
    </div>
    <div class=" book_list_section">
      <div class="col-lg-11 mx-auto">
      <div id="book_list" class="row mx-auto">
        <div class="col-lg-3">
          <section class="all_book_names card pl-md-3 mb-3">
            <h5 class="mb-4">
              Click on a link to jump to that particular Book
            </h5>
            <p class="main_text">
              1:
              <a href="#0" class="book_name">
                Business Management and Strategy
              </a>
            </p>
            <p class="main_text">
              2:
              <a href="#1" class="book_name">
                Conscious Leadership
              </a>
            </p>
            <p class="main_text">
              3:
              <a href="#measure-up" class="book_name">
                Measure Up
              </a>
            </p>
            <p class="main_text">
              4:
              <a href="#The-whisler" class="book_name">
                The Whisler
              </a>
            </p>
            <p class="main_text">
              5:
              <a href="#A-World-Without-Email" class="book_name">
                A World Without Email
              </a>
            </p>
            <p class="main_text">
              6:
              <a
                href="#Management-Mess-to-Leadership-Success"
                class="book_name"
              >
                Management Mess to Leadership Success
              </a>
            </p>
            <p class="main_text">
              7:
              <a href="#Reimagining-Collaboration" class="book_name">
                Reimagining Collaboration
              </a>
            </p>
            <p class="main_text">
              8:
              <a href="#The-Introvert’s-Edge-to-Networking" class="book_name">
                The Introvert’s Edge to Networking
              </a>
            </p>
            <!-- <p> Dummy</p> -->
            <p class="main_text">
              9:
              <a href="#" class="book_name">
                Business Management and Strategy
              </a>
            </p>
            <p class="main_text">
              10:
              <a href="#" class="book_name">
                Conscious Leadership
              </a>
            </p>
          </section>
        </div>
        <div class="col-lg-9 mx-auto "> 
          <div class="row mx-auto ">
            <div v-for="book in filteredbooks" :key="book.id" class="col-lg-6">
              <BookList
                :id="book.id"
                :title="book.title"
                :imageUrl="book.imageUrl"
                :authorName="book.authorName"
                :shortSummary="book.shortSummary"
                :publishedDate="book.publishedDate"
              />
            </div>
          </div>

          <div class="row ml-md-5">
           

            <!-- <div class="col-lg-5 card mb-3 mx-2">
              <div class="row">
                <div class="col-4">
                  <img
                    src="https://f4i7s5v3.stackpathcdn.com/_resources/_global/media/resized/00001/ihwx.943c2633-8fe1-46fb-a9d4-6ab3d4f29b42.200.175.jpg"
                    alt=""
                    class="img-fluid"
                  />
                  <b-button class="rewiev_button mx-auto mt-4">
                    <i class="far fa-star ">&nbsp;&nbsp; 0.0</i>
                  </b-button>
                </div>
                <div class="col-8">
                  <h5 class="font-weight-bold">You Are The Brand</h5>
                  <p class="main_text text1"><em>by Mike Kim</em></p>
                  <p class="main_text text1">Published: Sept 2021</p>
                  <p class="main_text text1">
                    <a href="">Print</a>
                    |
                    <a href="">eBook</a>
                    |
                    <a href="">Audiobook</a>
                  </p>
                  <p class="main_text mt-3 text-justify">
                    <strong>Short Summary:</strong>
                    Add more happiness to your life and your world with TV host
                    and global traveler Leon Logothetis The 8-Step Blueprint to
                    Showcase Your Unique Expertise and Build a Highly
                  </p>
                  <p class="main_text">
                    <i class="fas fa-book book_icon"></i>
                    <a href="/resources/books/_bookId">Full Summary,</a>
                    &nbsp;&nbsp;
                    <i class="far fa-clock book_icon"></i>
                    53 min
                  </p>
                </div>
              </div>
            </div> -->
            <!-- <div class="col-lg-5 card mb-3 mx-2">
              <div class="row">
                <div class="col-4">
                  <img
                    src="https://f4i7s5v3.stackpathcdn.com/_resources/_global/media/resized/00001/ihwx.5e93ee04-280a-4232-b01f-5048cd5c04b2.200.175.jpg"
                    alt=""
                    class="img-fluid"
                  />
                  <b-button class="rewiev_button mx-auto mt-4">
                    <i class="far fa-star ">&nbsp;&nbsp; 0.0</i>
                  </b-button>
                </div>
                <div class="col-8">
                  <h5 class="font-weight-bold">You Are The Brand</h5>
                  <p class="main_text text1"><em>by Mike Kim</em></p>
                  <p class="main_text text1">Published: Sept 2021</p>
                  <p class="main_text text1">
                    <a href="">Print</a>
                    |
                    <a href="">eBook</a>
                    |
                    <a href="">Audiobook</a>
                  </p>
                  <p class="main_text mt-3 text-justify">
                    <strong>Short Summary:</strong>
                    Add more happiness to your life and your world with TV host
                    and global traveler Leon Logothetis The 8-Step Blueprint to
                    Showcase Your Unique Expertise and Build a Highly
                  </p>
                  <p class="main_text">
                    <i class="fas fa-book book_icon"></i>
                    <a href="/resources/books/_bookId">Full Summary,</a>
                    &nbsp;&nbsp;
                    <i class="far fa-clock book_icon"></i>
                    53 min
                  </p>
                </div>
              </div>
            </div> -->
            <!-- <div class="col-lg-5 card mb-3 mx-2">
              <div class="row">
                <div class="col-4">
                  <img
                    src="https://f4i7s5v3.stackpathcdn.com/_resources/_global/media/resized/00001/ihwx.6382bfba-5d51-4526-a1bd-82504cc063fa.200.175.jpg"
                    alt=""
                    class="img-fluid"
                  />
                  <b-button class="rewiev_button mx-auto mt-4">
                    <i class="far fa-star ">&nbsp;&nbsp; 0.0</i>
                  </b-button>
                </div>
                <div class="col-8">
                  <h5 class="font-weight-bold">You Are The Brand</h5>
                  <p class="main_text text1"><em>by Mike Kim</em></p>
                  <p class="main_text text1">Published: Sept 2021</p>
                  <p class="main_text text1">
                    <a href="">Print</a>
                    |
                    <a href="">eBook</a>
                    |
                    <a href="">Audiobook</a>
                  </p>
                  <p class="main_text mt-3 text-justify">
                    <strong>Short Summary:</strong>
                    Add more happiness to your life and your world with TV host
                    and global traveler Leon Logothetis The 8-Step Blueprint to
                    Showcase Your Unique Expertise and Build a Highly
                  </p>
                  <p class="main_text">
                    <i class="fas fa-book book_icon"></i>
                    <a href="/resources/books/_bookId">Full Summary,</a>
                    &nbsp;&nbsp;
                    <i class="far fa-clock book_icon"></i>
                    53 min
                  </p>
                </div>
              </div>
            </div> -->
            <!-- <div class="col-lg-5 card mb-3 mx-2">
              <div class="row">
                <div class="col-4">
                  <img
                    src="https://f4i7s5v3.stackpathcdn.com/_resources/_global/media/resized/00001/ihwx.0c352fa9-45e3-456a-99b8-d12e37332b0c.200.175.jpg"
                    alt=""
                    class="img-fluid"
                  />
                  <b-button class="rewiev_button mx-auto mt-4">
                    <i class="far fa-star ">&nbsp;&nbsp; 0.0</i>
                  </b-button>
                </div>
                <div class="col-8">
                  <h5 class="font-weight-bold">You Are The Brand</h5>
                  <p class="main_text text1"><em>by Mike Kim</em></p>
                  <p class="main_text text1">Published: Sept 2021</p>
                  <p class="main_text text1">
                    <a href="">Print</a>
                    |
                    <a href="">eBook</a>
                    |
                    <a href="">Audiobook</a>
                  </p>
                  <p class="main_text mt-3 text-justify">
                    <strong>Short Summary:</strong>
                    Add more happiness to your life and your world with TV host
                    and global traveler Leon Logothetis The 8-Step Blueprint to
                    Showcase Your Unique Expertise and Build a Highly
                  </p>
                  <p class="main_text">
                    <i class="fas fa-book book_icon"></i>
                    <a href="/resources/books/_bookId">Full Summary,</a>
                    &nbsp;&nbsp;
                    <i class="far fa-clock book_icon"></i>
                    53 min
                  </p>
                </div>
              </div>
            </div><div class="col-lg-5 card mb-3 mx-2">
              <div class="row">
                <div class="col-4">
                  <img
                    src="https://f4i7s5v3.stackpathcdn.com/_resources/_global/media/resized/00001/ihwx.5e93ee04-280a-4232-b01f-5048cd5c04b2.200.175.jpg"
                    alt=""
                    class="img-fluid"
                  />
                  <b-button class="rewiev_button mx-auto mt-4">
                    <i class="far fa-star ">&nbsp;&nbsp; 0.0</i>
                  </b-button>
                </div>
                <div class="col-8">
                  <h5 class="font-weight-bold">You Are The Brand</h5>
                  <p class="main_text text1"><em>by Mike Kim</em></p>
                  <p class="main_text text1">Published: Sept 2021</p>
                  <p class="main_text text1">
                    <a href="">Print</a>
                    |
                    <a href="">eBook</a>
                    |
                    <a href="">Audiobook</a>
                  </p>
                  <p class="main_text mt-3 text-justify">
                    <strong>Short Summary:</strong>
                    Add more happiness to your life and your world with TV host
                    and global traveler Leon Logothetis The 8-Step Blueprint to
                    Showcase Your Unique Expertise and Build a Highly
                  </p>
                  <p class="main_text">
                    <i class="fas fa-book book_icon"></i>
                    <a href="/resources/books/_bookId">Full Summary,</a>
                    &nbsp;&nbsp;
                    <i class="far fa-clock book_icon"></i>
                    53 min
                  </p>
                </div>
              </div>
            </div> -->
          </div>

          <!--<div class="row">
            <div class="col-lg-3">
              <a href="/resources/books/_bookId">
                <img
                  src="https://f4i7s5v3.stackpathcdn.com/_resources/_global/media/resized/00001/ihwx.15f54a47-ae60-4cd0-bb9c-1a6af9d3b8c3.200.175.jpg"
                  alt=""
                  width="100%"
                  class="img-fluid"
                />
              </a>
            </div>
            <div class="col-lg-8 mx-auto">
              <h4 id="You-are-the-brand ">You Are The Brand</h4>
              <p class="main_text">by Mike Kim</p>
              <p class="main_text">
                The 8-Step Blueprint to Showcase Your Unique Expertise and Build
                a Highly Profitable, Personally Fulfilling Business.The 8-Step
                Blueprint to Showcase Your Unique Expertise and Build a Highly
                Profitable, Personally Fulfilling Business.The 8-Step Blueprint
                to Showcase Your Unique Expertise and Build a Highly Profitable,
                Personally Fulfilling Business
                <a href="/resources/books/_bookId">Read More</a>
              </p>
              <p class="main_text mt-4">
                Published: Sept 2021,
                <span>Time: 24 min,</span>
              </p>
            </div>
            <hr class="hr_line_forBook" />
          </div>

          <div class="row">
            <div class="col-lg-3">
              <a href="#">
                <img
                  src="https://f4i7s5v3.stackpathcdn.com/_resources/_global/media/resized/00001/ihwx.5e93ee04-280a-4232-b01f-5048cd5c04b2.200.175.jpg"
                  alt=""
                  width="100%"
                  class="img-fluid"
                />
              </a>
            </div>
            <div class="col-lg-8 mx-auto">
              <h4 id="conscious-leadership">Conscious Leadership</h4>
              <p class="main_text">by John Mackey</p>
              <p class="main_text">
                John Mackey started a movement when he founded Whole Foods,
                bringing natural, organic food to the masses and not only
                changing the market but breaking the mold. Now, for the first
                time, Conscious Leadership closely explores the vision, virtues,
                and mindset that have informed Mackey’s own leadership journey,
                providing a roadmap for innovative, value-based leadership—in
                business and in society.

                <a href="">Read More</a>
              </p>
              <p class="main_text mt-4">
                Published: Aug 2021,
                <span>Time: 35 min,</span>
              </p>
            </div>
            <hr class="hr_line_forBook" />
          </div>
          <div class="row">
            <div class="col-lg-3">
              <a href="#">
                <img
                  src="https://f4i7s5v3.stackpathcdn.com/_resources/_global/media/resized/00001/ihwx.434dc16e-dfa5-49d3-a1e2-1e82da69b711.200.175.jpg"
                  alt=""
                  width="100%"
                  class="img-fluid"
                />
              </a>
            </div>
            <div class="col-lg-8">
              <h4 id="measure-up">Measure Up</h4>
              <p class="main_text">by Carla Johnson</p>
              <p class="main_text">
                John Mackey started a movement when he founded Whole Foods,
                bringing natural, organic food to the masses and not only
                changing the market but breaking the mold. Now, for the first
                time, Conscious Leadership closely explores the vision, virtues,
                and mindset that have informed Mackey’s own leadership journey,

                <a href="">Read More</a>
              </p>
              <p class="main_text mt-4">
                Published: July 2021,
                <span>Time: 43 min,</span>
              </p>
            </div>
            <hr class="hr_line_forBook" />
          </div>
          <div class="row">
            <div class="col-lg-3">
              <a href="#">
                <img
                  src="https://www.jgrisham.com/wp-content/uploads/2016/10/WHISTLER3D-1-188x300.png"
                  alt=""
                  width="100%"
                  class="img-fluid"
                />
              </a>
            </div>
            <div class="col-lg-8">
              <h4 id="The-whisler">The Whisler</h4>
              <p class="main_text">John Grishem</p>
              <p class="main_text">
                John Mackey started a movement when he founded Whole Foods,
                bringing natural, organic food to the masses and not only
                changing the market but breaking the mold. Now, for the first
                time, Conscious Leadership closely explores the vision, virtues,
                and mindset that have informed Mackey’s own leadership journey,
                <a href="">Read More</a>
              </p>
              <p class="main_text mt-4">
                Published: March,
                <span>Time: 59 min,</span>
              </p>
            </div>
            <hr class="hr_line_forBook" />
          </div>
          <div class="row">
            <div class="col-lg-3">
              <a href="#">
                <img
                  src="https://f4i7s5v3.stackpathcdn.com/_resources/_global/media/resized/00001/ihwx.19deb74a-ed4f-4c52-98c0-4cf1d70b9e53.200.175.jpg"
                  alt=""
                  width="100%"
                  class="img-fluid"
                />
              </a>
            </div>
            <div class="col-lg-8">
              <h4 id="A-World-Without-Email">A World Without Email</h4>
              <p class="main_text">by Cal Newport</p>
              <p class="main_text">
                John Mackey started a movement when he founded Whole Foods,
                bringing natural, organic food to the masses and not only
                changing the market but breaking the mold. Now, for the first
                time, Conscious Leadership closely explores the vision, virtues,
                and mindset that have informed Mackey’s own leadership journey,
                providing a roadmap for innovative, value-based leadership—in
                business and in society.

                <a href="">Read More</a>
              </p>
              <p class="main_text mt-4">
                Published: Aug 2021,
                <span>Time: 33 min,</span>
              </p>
            </div>
            <hr class="hr_line_forBook" />
          </div>
          <div class="row">
            <div class="col-lg-3">
              <a href="#">
                <img
                  src="https://f4i7s5v3.stackpathcdn.com/_resources/_global/media/resized/00000/ihwx.01301512-ec01-40ee-9c33-3c024a22003c.200.175.jpg"
                  alt=""
                  width="100%"
                  class="img-fluid"
                />
              </a>
            </div>
            <div class="col-lg-8">
              <h4
                id="
Management-Mess-to-Leadership-Success"
              >
                Management Mess to Leadership Success
              </h4>
              <p class="main_text">by Scott Jeffrey Miller</p>
              <p class="main_text">
                John Mackey started a movement when he founded Whole Foods,
                bringing natural, organic food to the masses and not only
                changing the market but breaking the mold. Now, for the first
                time, Conscious Leadership closely explores the vision, virtues,
                and mindset that have informed Mackey’s own leadership journey,
                providing a roadmap for innovative, value-based leadership—in
                business and in society.

                <a href="">Read More</a>
              </p>
              <p class="main_text mt-4">
                Published: Aug 2021,
                <span>Time: 1hr 21 min,</span>
              </p>
            </div>
            <hr class="hr_line_forBook" />
          </div>
          <div class="row">
            <div class="col-lg-3">
              <a href="#">
                <img
                  src="https://f4i7s5v3.stackpathcdn.com/_resources/_global/media/resized/00001/ihwx.5e93ee04-280a-4232-b01f-5048cd5c04b2.200.175.jpg"
                  alt=""
                  width="100%"
                  class="img-fluid"
                />
              </a>
            </div>
            <div class="col-lg-8">
              <h4 id="Reimagining-Collaboration">Reimagining Collaboration</h4>
              <p class="main_text">by Phil Simon</p>
              <p class="main_text">
                John Mackey started a movement when he founded Whole Foods,
                bringing natural, organic food to the masses and not only
                changing the market but breaking the mold. Now, for the first
                time, Conscious Leadership closely explores the vision, virtues,
                and mindset that have informed Mackey’s own leadership journey,
                providing a roadmap for innovative, value-based leadership—in
                business and in society.

                <a href="">Read More</a>
              </p>
              <p class="main_text mt-4">
                Published: Aug 2021,
                <span>Time: 56 min,</span>
              </p>
            </div>
            <hr class="hr_line_forBook" />
          </div>
          <div class="row">
            <div class="col-lg-3">
              <a href="#">
                <img
                  src="https://f4i7s5v3.stackpathcdn.com/_resources/_global/media/resized/00001/ihwx.49325eaa-bb59-465c-a9b8-7046465a28dd.200.175.jpg"
                  alt=""
                  width="100%"
                  class="img-fluid"
                />
              </a>
            </div>
            <div class="col-lg-8">
              <h4 id="The-Introvert’s-Edge-to-Networking">
                The Introvert’s Edge to Networking
              </h4>
              <p class="main_text">by John Mackey</p>
              <p class="main_text">
                John Mackey started a movement when he founded Whole Foods,
                bringing natural, organic food to the masses and not only
                changing the market but breaking the mold. Now, for the first
                time, Conscious Leadership closely explores the vision, virtues,
                and mindset that have informed Mackey’s own leadership journey,
                providing a roadmap for innovative, value-based leadership—in
                business and in society.

                <a href="">Read More</a>
              </p>
              <p class="main_text mt-4">
                Published: Aug 2021,
                <span>Time: 55 min,</span>
              </p>
            </div>
            <hr class="hr_line_forBook" />
          </div>
          <div class="row">
            <div class="col-lg-3">
              <a href="#">
                <img
                  src="https://f4i7s5v3.stackpathcdn.com/_resources/_global/media/resized/00001/ihwx.0c352fa9-45e3-456a-99b8-d12e37332b0c.200.175.jpg"
                  alt=""
                  width="100%"
                  class="img-fluid"
                />
              </a>
            </div>
            <div class="col-lg-8">
              <h4 id="conscious-leadership">Conscious Leadership</h4>
              <p class="main_text">by John Mackey</p>
              <p class="main_text">
                John Mackey started a movement when he founded Whole Foods,
                bringing natural, organic food to the masses and not only
                changing the market but breaking the mold. Now, for the first
                time, Conscious Leadership closely explores the vision, virtues,
                and mindset that have informed Mackey’s own leadership journey,
                providing a roadmap for innovative, value-based leadership—in
                business and in society.

                <a href="">Read More</a>
              </p>
              <p class="main_text mt-4">
                Published: Aug 2021,
                <span>Time: 35 min,</span>
              </p>
            </div>
            <hr class="hr_line_forBook" />
          </div>
          <div class="row">
            <div class="col-lg-3">
              <a href="#">
                <img
                  src="https://f4i7s5v3.stackpathcdn.com/_resources/_global/media/resized/00001/ihwx.6382bfba-5d51-4526-a1bd-82504cc063fa.200.175.jpg"
                  alt=""
                  width="100%"
                  class="img-fluid"
                />
              </a>
            </div>
            <div class="col-lg-8">
              <h4 id="conscious-leadership">Conscious Leadership</h4>
              <p class="main_text">by John Mackey</p>
              <p class="main_text">
                John Mackey started a movement when he founded Whole Foods,
                bringing natural, organic food to the masses and not only
                changing the market but breaking the mold. Now, for the first
                time, Conscious Leadership closely explores the vision, virtues,
                and mindset that have informed Mackey’s own leadership journey,
                providing a roadmap for innovative, value-based leadership—in
                business and in society.

                <a href="">Read More</a>
              </p>
              <p class="main_text mt-4">
                Published: Aug 2021,
                <span>Time: 35 min,</span>
              </p>
            </div>
            <hr class="hr_line_forBook" />
          </div>
          <div class="row">
            <div class="col-lg-3">
              <a href="#">
                <img
                  src="https://f4i7s5v3.stackpathcdn.com/_resources/_global/media/resized/00001/ihwx.5e93ee04-280a-4232-b01f-5048cd5c04b2.200.175.jpg"
                  alt=""
                  width="100%"
                  class="img-fluid"
                />
              </a>
            </div>
            <div class="col-lg-8">
              <h4 id="conscious-leadership">Conscious Leadership</h4>
              <p class="main_text">by John Mackey</p>
              <p class="main_text">
                John Mackey started a movement when he founded Whole Foods,
                bringing natural, organic food to the masses and not only
                changing the market but breaking the mold. Now, for the first
                time, Conscious Leadership closely explores the vision, virtues,
                and mindset that have informed Mackey’s own leadership journey,
                providing a roadmap for innovative, value-based leadership—in
                business and in society.

                <a href="">Read More</a>
              </p>
              <p class="main_text mt-4">
                Published: Aug 2021,
                <span>Time: 35 min,</span>
              </p>
            </div>
            <hr class="hr_line_forBook" />
          </div> -->
        </div>
      </div>
      </div>
      <div class="overflow-auto text-center mt-5">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
          class=" justify-content-center"
        ></b-pagination>

        <p class="mt-3">Current Page: {{ currentPage }}</p>

        <b-table
          id="my-table"
          :books="books"
          :per-page="perPage"
          :current-page="currentPage"
          small
        ></b-table>
      </div>
    </div>

    <div>
      <TopScroll />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import BookList from '@/components/Resources/Books/BookList.vue'
import TopScroll from '@/components/UI/TopScroll.vue'
export default {
  components: {
    BookList,
    TopScroll,
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      search1: '',
      books: [],
      perPage: 6,
      currentPage: 1,
    }
  },
  computed: {
    filteredbooks() {
      return this.books.filter((book) =>
        book.title.toLowerCase().includes(this.search1.toLowerCase()),
      )
    },
    rows() {
      return this.books.length
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  },
  asyncData(context) {
    return axios
      .get(
        'https://leadd-7db59-default-rtdb.asia-southeast1.firebasedatabase.app/books.json',
      )
      .then((res) => {
        return {
          books: res.data,
        }
      })
      .catch((e) => context.error(e))
  },

}
</script>

<style scoped>
.books_page {
  font-family: 'Avenir Next', 'Open Sans', 'Helvetica Neue', Arial, Helvetica,
    'Geneva', sans-serif;
}
.book_jumbo {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://thumbs.dreamstime.com/z/open-book-hardback-books-wooden-table-education-background-back-to-school-copy-space-text-75367702.jpg');
  background-position: center;
  background-size: cover;
  height: 70vh;
  width: 100%;
}
.main_title {
  font-size: 20px;
  font-weight: 600;
}
.sub_title {
  font-size: 18px;
  font-weight: 500;
}
.main_text {
  font-size: 15px;
  font-weight: 500;
  line-height: 22px;
}
.carousel_custamize {
  width: 100% !important;
  height: 300px !important;
  background-color: #112855 !important;
}
.hr_line_carosel {
  border-bottom: 3px solid #e7b80e;
  text-align: left !important;
  width: 200px;
  margin-top: -10px !important;
}
.hr_line_forBook {
  width: 90%;
  border-bottom: 2px solid rgb(204, 204, 204);
  margin-bottom: 6rem;
  margin-top: 0rem;
}
.book_name {
  color: #509fe0 !important;
}
.searchBanner {
  margin: 6rem 0;
  position: sticky !important;
  top: 0;
  overflow: hidden !important;
  z-index: 999 !important;
  background-color: white;
}
.searchBar {
  padding-left: 30px;
  width: 50%;
  height: 50px;
  border: none;
  background-color: rgb(238, 236, 236);
  border-radius: 8px;
}
.all_book_names {
  top: 120px !important;
  position: sticky !important;
  
}
.card {
  padding: 20px 10px;
  /* border-radius: 20px; */
}

/* media quires */

@media (max-width: 576px) {
  .hero_title {
    font-size: 2rem;
    text-justify: center;
  }
  .main_title {
    text-justify: center;
  }
}
@media (min-width: 768px) {
  .hero_title {
    font-size: 2.2rem;
  }
  .main_title {
    font-size: 18px;
  }
}
@media (min-width: 992px) {
  .hero_title {
    font-size: 2.5rem;
  }
  .main_title {
    font-size: 19px;
  }
}
@media (min-width: 1200px) {
  .hero_title {
    font-size: 3rem;
  }
  .main_title {
    font-size: 20px;
  }
}

.btn {
  background-color: rgba(255, 255, 255, 0);
  color: #2d2d2a;
}
.btn:hover {
  background-color: #e7b80e;
  color: #2d2d2a;
}
.read_book_section {
  padding: 3rem 0;
}
.book_list_section {
  margin: 5rem auto;
  padding: 3rem 0;
  background-color: rgba(236, 233, 233, 0.356);
}
.btn_main {
  background-color: rgba(255, 255, 255, 0);
  border: 2px solid white;
  color: white;
}
.text1 {
  margin-bottom: 0;
}
.rewiev_button {
  margin-left: 15px !important;
  border-radius: 15px;
  padding: 0px 10px;
  background-color: #112855;
  color: white;
}
.book_icon {
  color: #56b0bb;
}
.id_link {
  text-decoration: none;
}
</style>
