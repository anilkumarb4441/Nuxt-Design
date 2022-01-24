<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" class="main-navbar">
      <b-navbar-brand href="#">
        <nuxt-link to="/" class="text-secondary">
          <h6 class="ml-3">LEADD</h6>
        </nuxt-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="nav-item">
            <nuxt-link to="/whatisleadd">What is LEADD</nuxt-link>
          </b-nav-item>
          <b-nav-item class="nav-item">
            <nuxt-link to="/learnandcertification">
              Learning & Certification
            </nuxt-link>
          </b-nav-item>
          <b-nav-item class="nav-item">
            <nuxt-link to="/coaching">Coaching</nuxt-link>
          </b-nav-item>
          <b-nav-item class="nav-item">
            <nuxt-link to="/solutiondelivery">Solution Delivery</nuxt-link>
          </b-nav-item>
          <b-nav-item class="nav-item">
            <nuxt-link to="/solutiondelivery">Resources</nuxt-link>
          </b-nav-item>
          <b-nav-form>

           <SavedModal />
  
            <!-- <div>
              <i v-b-modal.modal-1 class="fa fa-search mr-5"></i>
              <b-modal id="modal-1" class="modal">
                <b-form-input
                  placeholder="Search"
                  id="searchBar"
                >
                  <i class="fa fa-search mr-5"></i>
                </b-form-input>
              </b-modal>
            </div> -->
          </b-nav-form>

          <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <a
              class="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                class="rounded-circle"
                height="25"
                alt=""
                loading="lazy"
              />
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a class="dropdown-item" href="#">My profile</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Settings</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Logout</a>
              </li>
            </ul>
          </div> -->
            <b-nav-item-dropdown bottm>
          <!-- Using 'button-content' slot -->
          <template #button-content >
            <em><i class="far fa-user-circle"> a</i></em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>


<style scoped>
.main-navbar {
  background-color: white !important;
  box-shadow: 1px 1px 1px 1px rgba(136, 136, 136, 0.363);
  font-size: 14px;
  font-weight: 400;
  line-height: 44px;
  height: 40px
}

.nav-item a {
  text-decoration: none;
  margin-right: 1.5rem;
  color: #000000;
}
.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: rgb(102, 101, 101);
}
i {
  font-size: 19px;
  margin-right: 1rem;
}
</style>
