<template>
  <div class="slider">
    <div class="slide slide1">
      <div class="slide-content d-grid">
        <div class="left-side">
          <h2>Get to know us</h2>
          <p>
            We are a digital media agency offering a variety of cutting-edge and
            tailor-made advertising solutions.
          </p>
          <nuxt-link to="/about-us" tag="a" class="about-button"
            >About Us</nuxt-link
          >
        </div>
        <div class="right-side">
          <img src="../assets/images/people.jpg" alt="" />
        </div>
      </div>
      <div class="overlay"><p>ABOUT</p></div>
    </div>
    <div class="slide slide2">
      <div class="slide-content d-grid">
        <div class="left-side">
          <h2>
            Powerful Marketing using <br />
            cutting-edge technology
          </h2>
          <p><br /><br /></p>
          <nuxt-link to="/skills" tag="a" class="skills-button"
            >Skills</nuxt-link
          >
        </div>
        <div class="right-side">
          <img src="../assets/images/PC.png" alt="" />
        </div>
      </div>

      <div class="overlay"><p>SKILLS</p></div>
    </div>
    <div class="slide slide3">
      <div class="slide-content d-grid">
        <div class="left-side">
          <h2>
            Stay updated with our <br />
            insights on the digital <br />
            media world
          </h2>
          <p><br /><br /></p>
          <nuxt-link to="/blog" tag="a" class="insights-button"
            >Insights</nuxt-link
          >
        </div>
        <div class="right-side">
          <img
            src="../assets/images/insights.png"
            class="insights-img"
            alt=""
          />
        </div>
      </div>
      <div class="overlay"><p>Insights</p></div>
    </div>
  </div>
</template>
<script>
import gsap from "gsap";

export default {
  layout: "defaultIndex",
  mounted: function () {
    this.sliderFirst();
    let startSlider = setInterval(() => {
      this.slider();
    }, 21600);
  },
  methods: {
    slider() {
      this.firstEnter();
      setTimeout(() => {
        this.firstLeave();
      }, 6000);
      setTimeout(() => {
        this.secondEnter();
      }, 8000);
      setTimeout(() => {
        this.secondLeave();
      }, 12600);
      setTimeout(() => {
        this.thirdEnter();
      }, 14600);
      setTimeout(() => {
        this.thirdLeave();
      }, 19600);

      // .to(".slide2 .slide-content",{ xPercent: -100, duration: 1})
      // .fromTo(".slide1 .slide-content",{ xPercent: -100, duration: 1},{ xPercent: 0, duration: 1})
    },
    sliderFirst(){
      this.firstFirstEnter();
      setTimeout(() => {
        this.firstLeave();
      }, 6000);
      setTimeout(() => {
        this.secondEnter();
      }, 8000);
      setTimeout(() => {
        this.secondLeave();
      }, 12600);
      setTimeout(() => {
        this.thirdEnter();
      }, 14600);
      setTimeout(() => {
        this.thirdLeave();
      }, 19600);
    },
    firstFirstEnter() {
      gsap
        .timeline()
        .to(".slide1", { xPercent: 0, duration: 0 })
        .to(".slide1 .slide-content", { xPercent: 0, duration: 1.5 })
        .to(".slide1 .overlay", { xPercent: 0, zIndex: -1, duration: 1.5 })
        .to(".slide3", { xPercent: 0, duration: 1 })
        .to(".slide1 .right-side img", { scale: 1.2, duration: 1.5 })
        .to(".slide1 .right-side img", { scale: 1, duration: 1.5 });
    },
    firstEnter() {
      gsap
        .timeline()
        .to(".slide1", { xPercent: 0, duration: 0 })
        .to(".slide3", { xPercent: -300, duration: 1 })
        .to(".slide3", { xPercent: 0, duration: 0 })
        .to(".slide2", { xPercent: 0, duration: 0 })
        .to(".slide1 .slide-content", { xPercent: 0, duration: 1 })
        .to(".slide1 .overlay", { xPercent: 0, zIndex: -1, duration: 1 })
        .to(".slide3", { xPercent: 0, duration: 1 })
        .to(".slide1 .right-side img", { scale: 1.2, duration: 1.5 })
        .to(".slide1 .right-side img", { scale: 1, duration: 1.5 });
    },
    firstLeave() {
      gsap
        .timeline()
        .to(".slide1 .slide-content", { xPercent: -100, duration: 1 })
        .to(".slide1 .overlay", { xPercent: -100, zIndex: -1, duration: 1 });
    },
    secondEnter() {
      gsap
        .timeline()
        .to(".slide2 .slide-content", { xPercent: 100, duration: 0 })
        .to(".slide2 .overlay", { xPercent: 100, duration: 0 })
        .to(".slide2", { xPercent: -100, duration: 1 })
        .to(".slide1", { xPercent: -100, duration: 0 })
        .to(".slide2 .slide-content", { xPercent: 0, duration: 0.8 })
        .to(".slide2 .overlay", { xPercent: 0, zIndex: -1, duration: 0.8 })
        .to(".slide2 .right-side img", { scale: 1.2, duration: 1.5 })
        .to(".slide2 .right-side img", { scale: 1, duration: 1.5 });
    },
    secondLeave() {
      gsap
        .timeline()
        .to(".slide2 .slide-content", { xPercent: -100, duration: 1 })
        .to(".slide2 .overlay", { xPercent: -100, duration: 1 });
    },
    thirdEnter() {
      gsap
        .timeline()
        .to(".slide3 .slide-content", { xPercent: 100, duration: 0 })
        .to(".slide3 .overlay", { xPercent: 100, duration: 0 })
        .to(".slide3", { xPercent: -200, duration: 1 })
        .to(".slide1", { xPercent: -200, duration: 0 })
        .to(".slide2", { xPercent: -200, duration: 0 })
        .to(".slide3 .slide-content", { xPercent: 0, duration: 0.5 })
        .to(".slide3 .overlay", { xPercent: 0, zIndex: -1, duration: 0.5 })
        .to(".slide2 .slide-content", { xPercent: 0, duration: 0 })
        .to(".slide2 .overlay", { xPercent: 0, duration: 0 })
        .to(".slide3 .right-side img", { scale: 1.2, duration: 1.5 })
        .to(".slide3 .right-side img", { scale: 1, duration: 1.5 });
    },
    thirdLeave() {
      gsap
        .timeline()
        .to(".slide3 .slide-content", { xPercent: -100, duration: 1 })
        .to(".slide3 .overlay", { xPercent: -100, duration: 1 })
    },
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
