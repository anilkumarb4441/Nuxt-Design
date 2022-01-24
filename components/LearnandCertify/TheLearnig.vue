<template>
  <div class="main-container mb-4">
    <section class="container-fluid">
      <div class="row ml-4 mr-4 mt-5">
        <div class="col-lg-6 mt-5 ml-3 mb-5">
          <h2 class="safe-header mb-4"> Learning & Certification</h2>
          <p>
            Get SAFe certified, train and learn while gaining SAFe knowledge and
            skills with Scaled Agile and our extensive partner network. Use our
            course finder to browse options and find the best course for you
          </p>
          <section class="leading-safe mb-4">
            <div class="row mt-5">
              <div class="col-lg-7 mt-3 mb-5 ml-3">
                <h4>Implementing SAFe</h4>
                <p class="text-secondary">with Certified SAFe® Agilist</p>
                <p class="mt-3">
                  Leading SAFe offers you an introduction to the foundations of
                  SAFe, and provides the principles and practices to drive your
                  Lean-Agile transformation with confidence.
                </p>
                <b-button class="btn-sm bg-primary1 mt-3">Learn more</b-button>
                <b-button class="btn-sm bg-primary1 mt-3">
                  Find training
                </b-button>
              </div>
              <div class="col-4 mt-3">
                <b-button class="btn-movment">
                  <i class="fas fa-chevron-left"></i>
                </b-button>
                <b-button class="btn-movment">
                  <i class="fas fa-chevron-right"></i>
                </b-button>
              </div>
            </div>
          </section>
        </div>

        <div id="safe-cource" class="col-md-5 mt-5 ml-5 px-5">
          <div>
            <h4>See which SAFe course is right for you</h4>
            <section class="select-box">
              <div>
                <label for="field">I am ...*</label>
                <select id="field" name="item-meta">
                  <option value="Choose-an-option">Choose an option</option>
                  <option value=" Architect">Architect</option>
                  <option value=" Ececutive">Executive</option>
                  <option value=" project-manager">Project manager</option>
                  <option value=" Team-leader">Manager or Team leader</option>
                </select>
                <hr />
              </div>
              <div>
                <label for="field">WHAT ARE YOUR GOALS</label>
                <select id="field" name="item-meta">
                  <option value="Choose-an-option">Choose an option</option>
                  <option value=" Architect">Architect</option>
                  <option value=" Ececutive">Executive</option>
                  <option value=" project-manager">Project manager</option>
                  <option value=" Team-leader">Manager or Team leader</option>
                </select>
                <hr />
              </div>
              <div>
                <label for="field">WHICH BEST DESCRIBES YOUR BUSINESS? *</label>
                <select id="field" name="item-meta">
                  <option value="Choose-an-option">Choose an option</option>
                  <option value=" Architect">Architect</option>
                  <option value=" Ececutive">Executive</option>
                  <option value=" project-manager">Project manager</option>
                  <option value=" Team-leader">Manager or Team leader</option>
                </select>
                <hr />
              </div>
              <div>
                <label for="field">
                  WHICH BEST DESCRIBES YOUR EXPERIENCE WITH SAFe? * 
                </label>
                <select id="field" name="item-meta">
                  <option value="Choose-an-option">Choose an option</option>
                  <option value=" Architect">Architect</option>
                  <option value=" Ececutive">Executive</option>
                  <option value=" project-manager">Project manager</option>
                  <option value=" Team-leader">Manager or Team leader</option>
                </select>
                <hr />
              </div>
            </section>
            <b-button class="btn py-2 px-3 mt-4">
              See which course is right for you?
            </b-button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.main-container {
  background-color: #eeeded8a;
  margin-top: 6rem;
}
section{
  font-family: 'Corbel', 'Avenir Next', 'Open Sans', 'Helvetica Neue', Arial, Helvetica,
    'Geneva', sans-serif;
}
.safe-header {
  font-size: 32px;
  font-weight: 700;
  line-height: 44px;
  color: #142952;
}
p {
 font-family: 'Corbel', 'Avenir Next', 'Open Sans', 'Helvetica Neue', Arial,
    Helvetica, 'Geneva', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  text-align: justify;
  color: rgb(48, 48, 48);
}
h4 {
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  color: rgb(0, 0, 0);
}
.leading-safe {
  border-style: border-box;
  background-color: white;
   box-shadow: -1px 1px 1px 1px rgba(136, 136, 136, 0.363);
}
img {
  margin-left: 25px;
}
.btn-movment {
  background-color: #fff !important;
  padding: 5px 20px;
  color: rgb(255, 255, 255) !important;
}
.bg-primary1 {
  padding: 8px 20px;
  color: white;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 2rem;
}
#safe-cource {
  border-style: border-box;
  background-color: white;
  box-shadow: -1px 1px 1px 1px rgba(136, 136, 136, 0.363);
  margin-bottom: 7rem;
}
label {
  display: block;
  font-weight: 500;
  font-size: 1rem;
  width: 100%;
  margin-top: 30px;
}
select {
  display: block;
font-family: 'Corbel', 'Avenir Next', 'Open Sans',  'Helvetica Neue', Arial, Helvetica,
    'Geneva', sans-serif;
  font-size: 17px;
  font-weight: 400;
  max-width: 100%;
  width: 100%;
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 0;
  outline: 0;
}
hr {
  margin-top: 0;
}
/* .btn {
  background-color: rgb(77, 77, 221);
  color: white;
  border-radius: 3px;
  font-size: 15px;
  font-weight: 600;
} */
.btn {
  color: white;
  background-color: rgb(48, 48, 48) !important;
  margin: auto;
  font-weight: 500;
  margin-top: 3rem;
}
.btn:hover {
  background-color: #eea146 !important;
}
</style>
