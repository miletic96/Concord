<template>
  <div class="blue">
    <div class="d-lg-none">
      <mobileHome></mobileHome>
    </div>
    <div class="desktop d-none d-lg-block">
      <desktopHome></desktopHome>
    </div>
      <Footercontact />

  </div>
</template>
<script>
import gsap from "gsap";
import mobileHome from "../components/home-mobile.vue";
import desktopHome from "../components/home-desktop.vue";
import Footercontact from '../components/footercontact.vue';

export default{
  components: {
    mobileHome,
    desktopHome,
    Footercontact,
  },
  layout: "defaultIndex",
   data() {
      return {
        title: 'Concord Media'
      }
    },
    head() {
      return {
        title: this.title
      }
    },
  
};
</script>
<style scoped>
.overlay {
  font-family: FuturaPtCondBold;
}
.slider {
  display: flex;
  overflow-x: hidden;
}
.slider .slide {
  position: relative;
  flex: 1;
  min-width: 100%;
}
.slide {
  position: relative;
}
.slide1 {
  width: 100%;
  height: 100vh;
  background: rgb(159, 95, 145);
  background: linear-gradient(
    90deg,
    rgba(159, 95, 145, 1) 0%,
    rgba(159, 95, 145, 1) 65%,
    rgba(100, 57, 90, 1) 65%
  );
}
.slide1 {
  width: 100%;
  height: 100vh;
  background: rgb(159, 95, 145);
  background: linear-gradient(
    90deg,
    rgba(159, 95, 145, 1) 0%,
    rgba(159, 95, 145, 1) 65%,
    rgba(100, 57, 90, 1) 65%
  );
}
.slide2 {
  width: 100%;
  height: 100vh;
  background: rgb(159, 95, 145);
  background: linear-gradient(90deg, #957fef 0%, #957fef 65%, #7663c2 65%);
}
.slide3 {
  width: 100%;
  height: 100vh;
  background: #71b3ec;
  background: linear-gradient(90deg, #71b3ec 0%, #71b3ec 65%, #4d99da 65%);
}
.slide .overlay p {
  opacity: 0.38;
}
.slide2 .overlay p {
  color: rgba(137, 118, 210, 0.88);
}
.slide3 .overlay p {
  opacity: 1;
  color: rgba(108, 174, 232, 0.88);
}
.slide1 .overlay p {
  color: #804b74;
}
.slide-content {
  height: 100%;
}
.slide1 .slide-content .right-side {
  overflow: hidden;
  position: relative;
}
.slide .slide-content {
  grid-template-columns: 65% 35%;
  z-index: 8;
}
.slide2 .slide-content {
  grid-template-columns: 55% 45%;
}
.slide3 .slide-content {
  grid-template-columns: 55% 45%;
}
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  text-align: center;
}
.overlay p {
  font-size: 60vh;
}
.slide .left-side {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.left-side h2,
.left-side p {
  color: #fff;
  z-index: 6;
}
.left-side h2 {
  font-size: 4vw;
}
.left-side p {
  font-size: 2vw;
}
.left-side {
  padding: 60px;
}
.about-button {
  background: #64395a;
  color: #fff;
  width: 270px;
  text-align: center;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.2vw;
  text-decoration: none;
  z-index: 7;
}
.skills-button {
  background: #7663c2;
  color: #fff;
  width: 270px;
  text-align: center;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.2vw;
  text-decoration: none;
  z-index: 7;
}
.insights-button {
  background: #3385cc;
  color: #fff;
  width: 270px;
  text-align: center;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.2vw;
  text-decoration: none;
  z-index: 7;
}
.slide2 .right-side,
.slide3 .right-side {
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  z-index: 8;
}
.slide2 .right-side img {
  position: absolute;
  left: -20%;
}
.slide1 .right-side img {
  object-fit: cover;
      height: 100%;
      width: 100%;

}
.slide3 .right-side img {
  position: absolute;
  left: -10%;
}
.insights-img {
  height: 60vh;
  object-fit: contain;
}
</style>

// get all active side classes // Gsap .active .child animate // remove .active
// add .active to desired // gsap .active .child animate
