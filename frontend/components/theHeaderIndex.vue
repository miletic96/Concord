<template>
  <div>
    <div class="d-none d-lg-block">
      <nav class="navbar-container">
        <div class="nav-container">
          <a href="/"><img src="../assets/images/whitelogo.png" alt="" /></a>
          <ul class="uk-navbar-nav">
            <li>
              <nuxt-link to="/" tag="a">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about-us" tag="a">About</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/skills" tag="a">Skill</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/blog" tag="a">Insights</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/careers" tag="a">Careers</nuxt-link>
            </li>

            <li>
              <nuxt-link to="/faq" tag="a"> FAQ</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact" tag="a"> Get in touch</nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="d-lg-none">
      <mobileheader></mobileheader>
    </div>
  </div>
</template>

<script>
import mobileheader from "./headerold.vue";
export default {
  components: {
    mobileheader,
  },
};
</script>
<style lang="css" scoped>
.navbar-container {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: transparent;
  padding-left: 120px;
  padding-right: 120px;
  z-index: 10;
}
.nav-container {
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-direction: row;
  width: 100%;
}
.nav-container img {
  height: 60px;
  margin: 10px auto;
  margin-left: 0;
}
.uk-navbar-nav > li > a {
  text-transform: none;
  color: white;
  font-size: 1.3vw;
}
</style>
