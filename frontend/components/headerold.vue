<template>
  <div>
    <nav class="uk-navbar-container mobile-nav-container" uk-navbar>
      <div class="uk-navbar-left"></div>
      <a href="/"
        ><img
          src="../assets/images/logo-header.png"
          class="mobile-header-image"
          alt=""
      /></a>

      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
          <li>
            <a href="#modal-full" uk-toggle><span uk-icon="icon: table" /></a>
          </li>
        </ul>
      </div>
    </nav>

    <div id="modal-full" class="uk-modal-full" uk-modal>
      <div class="uk-modal-dialog">
        <button
          class="uk-modal-close-full uk-close-large mobile-nav-close"
          type="button"
          uk-close
        />
        <div class="uk-grid-collapse m-auto uk-flex-middle" uk-grid>
          <!-- <div
            class="uk-background-cover"
            style="
              background-image: url('https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3308&q=80 3308w');
            "
            uk-height-viewport
          /> -->
          <div class="uk-padding-large">
            <div class="">
              <ul class="uk-nav-primary uk-nav-parent-icon mobile-ul" uk-nav>
                <li>
                  <nuxt-link
                    to="/"
                    tag="a"
                    class="uk-modal-close-full uk-close-large mobile-nav-close menu-item"
                    >Home</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link
                    to="/about-us"
                    tag="a"
                    class="uk-modal-close-full uk-close-large mobile-nav-close menu-item"
                    >About</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link
                    to="/skills"
                    tag="a"
                    class="uk-modal-close-full uk-close-large mobile-nav-close menu-item"
                    >Skill</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link
                    to="/blog"
                    tag="a"
                    class="uk-modal-close-full uk-close-large mobile-nav-close menu-item"
                    >Insights</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link
                    to="/careers"
                    tag="a"
                    class="uk-modal-close-full uk-close-large mobile-nav-close menu-item"
                    >Careers</nuxt-link
                  >
                </li>

                <li>
                  <nuxt-link
                    to="/faq"
                    tag="a"
                    class="uk-modal-close-full uk-close-large mobile-nav-close menu-item"
                  >
                    FAQ</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link
                    to="/contact"
                    tag="a"
                    class="uk-modal-close-full uk-close-large mobile-nav-close menu-item"
                  >
                    Get in touch</nuxt-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    this.categories = await this.$strapi.find("categories");
  },
  data: function () {
    return {
      categories: [],
    };
  },
};
</script>
<style lang="css" scoped>
.uk-navbar-container {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  /* background: transparent !important; */
}
.mobile-header-image {
  height: 60px;
  width: auto;
  object-fit: contain;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 50px;
}
.uk-modal-full .uk-modal-dialog {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #d0639d;
}
.mobile-nav-close {
  background-color: #d0639d;
  color: white;
}
.nuxt-link {
  color: white;
}
.nuxt-link-exact-active {
  background-color: #c25690;
  border-radius: 25px;
  padding: 10px 15px;
  text-align: center;
}
.mobile-ul li {
  text-align: center;
}
.mobile-ul li a {
  justify-content: center;
  color: white;
  margin-bottom: 15px;
}
.mobile-nav-container {
  z-index: 10;
  position: fixed;
}
.uk-modal-close-full.uk-close-large.mobile-nav-close.menu-item {
  position: relative;
}
.uk-navbar-right {
  margin-right: 50px;
}
</style>
