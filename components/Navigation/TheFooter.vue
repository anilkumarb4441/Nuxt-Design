<template>
  <footer id="footer">
    <div class="footer-links">
      <div class="container pt-3">
        <div class="row mx-auto ">
          <div class="col-md-3 text-white ">
            <h5>SAFE COURCES</h5>
            <ul class="list-unstyled text-white mx-auto">
              <li class="mb-2"><a href="a">Leading SAFe®</a></li>
              <li class="mb-2"><a href="a">Implementing SAFe®</a></li>
              <li class="mb-2"><a href="a">SAFe® Scrum Master</a></li>
            </ul>
          </div>
          <div class="col-md-3 text-white mx-auto ">
            <h5>CONTACT US</h5>
            <ul class="list-unstyled">
              <li class="mb-2">
                <a href="a">info@leadd.com</a>
              </li>
              <li class="mb-2">
                <a href="">linkdin.com/company/leaddd</a>
              </li>
              <li class="mb-2">
                <a href="">facebook.com/leadd</a>
              </li>
              <li class="mb-2">
                <a href="">www.leadd.com</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 text-white mx-auto">
            <h5>SHOWCASE</h5>
            <ul class="list-unstyled text-white">
              <li class="mb-2"><a href="a">Salesforce</a></li>
              <li class="mb-2"><a href="a">Informatica</a></li>
              <li class="mb-2"><a href="a">Al Gore</a></li>
            </ul>
          </div>
          <div class="col-md-3 text-white mx-auto">
            <h5>RESOURCES</h5>
            <ul class="list-unstyled text-white">
              <li class="mb-2"><a href="a">Guides and Tools</a></li>
              <li class="mb-2"><a href="a">Webinars and Videos</a></li>
              <li class="mb-2"><a href="a">Diagrammer</a></li>
              <li class="mb-2"><a href="a">Illuminate</a></li>
              <li class="mb-2"><a href="a">Duarte DataStory™</a></li>
            </ul>
          </div>
        </div>
        <div class="ml-4">
          <nuxt-link to="/">
            <p class="logo_circle mx-auto">Leadd</p>
          </nuxt-link>
        </div>
        <div class="row justify-content-center">
          <ul class="footer_contact ml-ato ">
            <li>
              <p class="abc"><nuxt-link to="" class="footer_contact_text">Call +91 1234567890</nuxt-link></p>
            </li>
            <span class="vertical-line mr-4" ></span>
            <li>
              <p><nuxt-link to="" class="footer_contact_text ">contact@leadd.com</nuxt-link></p>
            </li>
          </ul>
        </div>
        <div class="row social-links justify-content-center">
          <ul>
            <li class="face-book mr-2">
              <a href="a"><i class="circle fab fa-facebook-f"></i></a>
            </li>
            <li class="face-book mr-2">
              <a href="a"><i class="circle fab fa-linkedin-in"></i></a>
            </li>
            <li class="face-book mr-2">
              <a href="a"><i class="circle fas fa-globe-asia"></i></a>
            </li>
            <li class="face-book mr-2">
              <a href="a"><i class="circle far fa-envelope"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
#footer {
  font-family: 'Corbel', 'Avenir Next', 'Open Sans', 'Helvetica Neue', Arial,
    Helvetica, 'Geneva', sans-serif;
}
.footer-links {
  background-color: #333;
}

h5 {
  font-size: 19px;
  font-weight: 600;
  line-height: 20px;
  margin-top: 3rem;
}
a {
  color: white !important;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
}
a:hover {
  color: #963a7c !important;
  text-decoration: none;
}
a:active {
  color: rgb(148, 191, 199) !important;
}
.circle {
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50%;
  text-align: center;
  background: rgba(191, 192, 189, 0.575);
  margin-bottom: 6rem;
}
.logo_circle {
  width: 65px;
  height: 65px;
  line-height: 65px;
  border-radius: 50%;
  text-align: center;
  background: white;
  color: #2d2d2a;

}
.social-links li {
  display: inline-block;
}
i {
  color: rgba(29, 29, 29, 0.822) !important;
  font-size: 22px;
}
.circle:hover {
  background-color: rgba(255, 255, 255, 0.883);
  color: #963a7c !important;
}
.footer_contact li {
  display: inline-block;
 
}
.footer_contact_text{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 25px;
  font-weight: 600;
  line-height: 34px;
  color: white;
}
.vertical-line{
        display: inline-block;
        border-left: 3px solid #ccc;
        margin: 0 10px;
        height: 20px;
    }
    .col-md-3{
      text-justify: center;
    }
</style>
