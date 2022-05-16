<template lang="vue-html">
  <div class="pink">
    <div v-if="$device.isMobile">
      <div class="about-mobile">
        <div class="section text-center" id="mobile-section1" data-id="1">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 section-inner">
              <h3 class="font-32 pt-med px-5">
                We are a digital media agency offering a variety of cutting-edge
                and tailor-made advertising solutions.
              </h3>
              <div class="photo-holder">
                <img
                  class="about-pc-mob"
                  src="../assets/images/PC.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="section" id="mobile-section2">
          <div class="row">
            <div class="col-md-7 section-inner px-5">
              <p class="pt-med font-24 text-center">
                We provide a
                <span class="text-bg">wide range of services </span> enabling us
                to deliver an inclusive and comprehensive package. Our
                comprehensive solutions are impactful across all platforms
                guaranteeing <span class="text-bg">great results</span>
                and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
        <div class="section third-section" id="mobile-section3" data-id="3">
          <div class="row">
            <div class="col-md-7 section-inner px-5">
              <p class="pt-bk font-18 text-center">
                <span class="text-bg">Our team</span> of driven and
                knowledgeable experts is trained according to the leading
                disciplines in the global market, providing the best marketing
                strategies. We don’t compromise when it comes to expertise and
                <span class="text-bg">your success</span>.
              </p>
              <p class="pt-bk font-18 text-center">
                Together with our clients, we strive to achieve
                <span class="text-bg">mutual success</span>
                using effective and proven solutions in order to make your
                vision a reality.
              </p>
              <p class="pt-bk font-18 text-center">
                We are fully devoted to your success and the never ending drive
                to always <span class="text-bg">elevate</span> and find new
                creative ways to make your vision a reality. We combine
                experience, talent and passion for this ever-growing industry to
                make sure the work process is unforgettable.
              </p>
              <p class="pt-bk font-18 text-center">
                Part of Concord's motive is making sure our clients are
                <span class="text-bg">satisfied</span> every step of the way. We
                believe in cooperation and mutual agreement with our clients
                when making choices. Working together is what makes Concord's
                process so efficient and memorable.
              </p>
            </div>
          </div>
        </div>

        <div class="section " id="mobile-section4" >
          <div class="row">
            <div class="col-lg-7 offset-lg-2  px-5 section-inner text-center">
              <h2 class="my-2 font-32 pt-bk">Our Vision</h2>
              <p class="my-2 font-18 pt-bk">
                Our vision as an agency is to assist and leverage the digital
                marketing world to empower brands. Our success stems from your
                successful marketing campaigns that promote and spread your
                agenda.<br />
                The ability to appraise companies marketing strategy is what
                makes us moving and always aspire to do the best that we can for
                your success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="$device.isTablet" class="tablet d-flex main-about">
      <div>
        <scrollindi />
      </div>
      <div class="about">
        <div class="section text-center" id="section1" data-id="1">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 section-inner">
              <h3 style="font-size: 4vw">
                We are a digital media agency offering a variety of cutting-edge
                and tailor-made advertising solutions.
              </h3>
              <a class="about-a" href="#section2">
                <!-- <div class="about-btn m-auto">
                  <div class="inner-one"><p>Learn More</p></div>
                  <div class="inner-two"><p>Learn More</p></div>
                </div> -->
              </a>
            </div>
          </div>
        </div>
        <div class="section" id="section2">
          <div class="row">
            <div class="col-md-7 section-inner px-5">
              <p style="font-size: 3vw; ">
                We provide a
                <span class="text-bg">wide range of services </span> enabling us
                to deliver an inclusive and comprehensive package. Our
                comprehensive solutions are impactful across all platforms
                guaranteeing <span class="text-bg">great results</span>
                and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
        <div class="section" id="section3" data-id="3">
          <div class="row">
            <div class="col-md-7 section-inner px-5">
              <p style="font-size: 2vw">
                <span class="text-bg">Our team</span> of driven and knowledgeable experts is trained
                according to the leading disciplines in the global market,
                providing the best marketing strategies. We don’t compromise
                when it comes to expertise and <span class="text-bg">your success</span>.
              </p>
              <p style="font-size: 2vw">
                Together with our clients, we strive to achieve <span class="text-bg">mutual success</span>
                using effective and proven solutions in order to make your
                vision a reality.
              </p>
            </div>
          </div>
        </div>
        <div class="section" id="section4" data-id="4">
          <div class="row">
            <div class="col-md-7 section-inner px-5">
              <p style="font-size: 2vw">
                We are fully devoted to your success and the never ending drive
                to always <span class="text-bg">elevate</span> and find new
                creative ways to make your vision a reality. We combine
                experience, talent and passion for this ever-growing industry to
                make sure the work process is unforgettable.
              </p>
            </div>
          </div>
        </div>
        <div class="section" id="section5" data-id="5">
          <div class="row">
            <div class="col-md-7 section-inner px-5">
              <p style="font-size: 2vw">
                Part of Concord's motive is making sure our clients are
                <span class="text-bg">satisfied</span> every step of the way. We believe in cooperation and
                mutual agreement with our clients when making choices. Working
                together is what makes Concord's process so efficient and
                memorable.
              </p>
            </div>
          </div>
        </div>
        <div class="section last-section" id="section6" data-id="6">
          <div class="row">
            <div class="col-lg-7 offset-lg-2 section-inner text-center">
              <h2 style="font-size: 3vw" class="my-2">Our Vision</h2>
              <p style="font-size: 1.4vw">
                Our vision as an agency is to assist and leverage the digital
                marketing world to empower brands. Our success stems from your
                successful marketing campaigns that promote and spread your
                agenda.<br />
                The ability to appraise companies marketing strategy is what
                makes us moving and always aspire to do the best that we can for
                your success.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img class="about-pc" src="../assets/images/PC.png" alt="" />
    </div>
    <div v-else class="d-flex main-about">
      <div class="d-none d-lg-block">
        <div>
          <scrollindi />
        </div>
        <div class="about">
          <div class="section text-center" id="section1" data-id="1">
            <div class="row">
              <div class="col-lg-8 offset-lg-2 section-inner">
                <h3 style="font-size: 4vw">
                  We are a digital media agency offering a variety of cutting-edge
                  and tailor-made advertising solutions.
                </h3>
                <a class="about-a" href="#section2">
                  <!-- <div class="about-btn m-auto">
                    <div class="inner-one"><p>Learn More</p></div>
                    <div class="inner-two"><p>Learn More</p></div>
                  </div> -->
                </a>
              </div>
            </div>
          </div>
          <div class="section" id="section2">
            <div class="row">
              <div class="col-md-7 section-inner px-5">
                <p style="font-size: 3vw">
                  We provide a
                  <span class="text-bg">wide range of services </span> enabling us
                  to deliver an inclusive and comprehensive package. Our
                  comprehensive solutions are impactful across all platforms
                  guaranteeing <span class="text-bg">great results</span>
                  and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
          <div class="section" id="section3" data-id="3">
            <div class="row">
              <div class="col-md-7 section-inner px-5">
                <p style="font-size: 2vw">
                  <span class="text-bg">Our team</span> of driven and
                  knowledgeable experts is trained according to the leading
                  disciplines in the global market, providing the best marketing
                  strategies. We don’t compromise when it comes to expertise and
                  <span class="text-bg">your success</span>.
                </p>
                <p style="font-size: 2vw">
                  Together with our clients, we strive to achieve
                  <span class="text-bg">mutual success</span>
                  using effective and proven solutions in order to make your
                  vision a reality.
                </p>
              </div>
            </div>
          </div>
          <div class="section" id="section4" data-id="4">
            <div class="row">
              <div class="col-md-7 section-inner px-5">
                <p style="font-size: 2vw">
                  We are fully devoted to your success and the never ending drive
                  to always <span class="text-bg">elevate</span> and find new
                  creative ways to make your vision a reality. We combine
                  experience, talent and passion for this ever-growing industry to
                  make sure the work process is unforgettable.
                </p>
              </div>
            </div>
          </div>
          <div class="section" id="section5" data-id="5">
            <div class="row">
              <div class="col-md-7 section-inner px-5">
                <p style="font-size: 2vw">
                  Part of Concord's motive is making sure our clients are
                  <span class="text-bg">satisfied</span> every step of the way. We
                  believe in cooperation and mutual agreement with our clients
                  when making choices. Working together is what makes Concord's
                  process so efficient and memorable.
                </p>
              </div>
            </div>
          </div>
          <div class="section last-section" id="section6" data-id="6">
            <div class="row">
              <div class="col-lg-7 section-inner px-5">
                <h2 style="font-size: 3vw" class="my-2">Our Vision</h2>
                <p style="font-size: 1.4vw">
                  Our vision as an agency is to assist and leverage the digital
                  marketing world to empower brands. Our success stems from your
                  successful marketing campaigns that promote and spread your
                  agenda.<br />
                  The ability to appraise companies marketing strategy is what
                  makes us moving and always aspire to do the best that we can for
                  your success.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img class="about-pc" src="../assets/images/PC.png" alt="" />
      </div>
      <div class="d-lg-none">
        <div class="about-mobile">
        <div class="section text-center" id="mobile-section1" data-id="1">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 section-inner">
              <h3 class="font-32 pt-med px-5">
                We are a digital media agency offering a variety of cutting-edge
                and tailor-made advertising solutions.
              </h3>
              <div class="photo-holder">
                <img
                  class="about-pc-mob"
                  src="../assets/images/PC.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="section" id="mobile-section2">
          <div class="row justify-content-center">
            <div class="col-md-7 section-inner px-5">
              <p class="pt-med font-24 text-center">
                We provide a
                <span class="text-bg">wide range of services </span> enabling us
                to deliver an inclusive and comprehensive package. Our
                comprehensive solutions are impactful across all platforms
                guaranteeing <span class="text-bg">great results</span>
                and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
        <div class="section third-section" id="mobile-section3" data-id="3">
          <div class="row justify-content-center">
            <div class="col-md-7 section-inner px-5">
              <p class="pt-bk font-18 text-center">
                <span class="text-bg">Our team</span> of driven and
                knowledgeable experts is trained according to the leading
                disciplines in the global market, providing the best marketing
                strategies. We don’t compromise when it comes to expertise and
                <span class="text-bg">your success</span>.
              </p>
              <p class="pt-bk font-18 text-center">
                Together with our clients, we strive to achieve
                <span class="text-bg">mutual success</span>
                using effective and proven solutions in order to make your
                vision a reality.
              </p>
              <p class="pt-bk font-18 text-center">
                We are fully devoted to your success and the never ending drive
                to always <span class="text-bg">elevate</span> and find new
                creative ways to make your vision a reality. We combine
                experience, talent and passion for this ever-growing industry to
                make sure the work process is unforgettable.
              </p>
              <p class="pt-bk font-18 text-center">
                Part of Concord's motive is making sure our clients are
                <span class="text-bg">satisfied</span> every step of the way. We
                believe in cooperation and mutual agreement with our clients
                when making choices. Working together is what makes Concord's
                process so efficient and memorable.
              </p>
            </div>
          </div>
        </div>

        <div class="section " id="mobile-section4" >
          <div class="row">
            <div class="col-lg-7 offset-lg-2  px-5 section-inner text-center">
              <h2 class="my-2 font-32 pt-bk">Our Vision</h2>
              <p class="my-2 font-18 pt-bk">
                Our vision as an agency is to assist and leverage the digital
                marketing world to empower brands. Our success stems from your
                successful marketing campaigns that promote and spread your
                agenda.<br />
                The ability to appraise companies marketing strategy is what
                makes us moving and always aspire to do the best that we can for
                your success.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <footercontact />
  </div>
</template>
<script>
import scrollindi from "../components/scrollindi.vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import footercontact from "../components/footercontact.vue";

gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    scrollindi,
    footercontact,
  },
  data() {
    return {
      title: "About Us | Concord Media",
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
  mounted: function () {
    this.scrollAnimation();
  },

  layout: "default",

  methods: {
    scrollAnimation() {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#section1",
            start: "center center",
            end: "bottom top",
            // markers: true,
            scrub: true,
            // pin: true,
          },
        })
        .to(".about-pc", { yPercent: -70, duration: 1.5 });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#section5",
            start: "center center",
            end: "bottom center",
            // markers: true,
            scrub: true,
            // pin: true,
          },
        })
        .to(".about-pc", { opacity: 0, duration: 0.5 });
    },
  },
};
</script>
<style lang="css">
/* body, html {
    overflow: hidden;
    height: 100%;
    width: 100%;
    transform: translate3d(0,0,0);} */
.about {
  width: 100%;
  overflow-x: hidden;
}
.pink .text-bg {
  background: linear-gradient(
    180deg,
    rgba(0, 212, 255, 0) 55%,
    rgba(2, 0, 36, 1) 55%,
    rgba(194, 86, 144, 1) 55%
  );
}
.about-a {
  width: 220px;
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
}
.about-a:hover {
  text-decoration: none;
  color: #fff;
}
.about-btn {
  width: 220px;
  display: inline-flex;
  height: 50px;
  overflow-x: hidden;
}
.inner-one {
  background-color: #d0639d;
  min-width: 100%;
  transition: 0.3s;
  display: flex;
  text-align: center;
}
.about-btn:hover .inner-one {
  transform: translateX(-100%);
}
.about-btn .inner-one p,
.about-btn .inner-two p {
  text-decoration: none;
  color: #fff;
  margin: auto;
  font-size: 1.5vw;
}
.about-btn:hover .inner-two {
  transform: translateX(-100%);
}
.inner-two {
  background-color: #c25690;
  min-width: 100%;
  transition: 0.3s;
  display: flex;
  text-align: center;
}
.main-about {
  margin-left: 100px;
}
#section3 {
  position: relative;
  z-index: 2;
}
.section .row {
  height: 100vh;
}
.section-inner {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.about .section {
  width: 100%;
  height: 100vh;
}
.about-pc {
  height: 85%;
  position: fixed;
  top: 70%;
  left: 65%;
  object-fit: contain;
}
.pc-overlay-image {
  height: 76%;
  position: absolute;
  left: 69.5%;
  top: 12.45%;
}
.last-section {
  background-image: url(../assets/images/abt-logo.svg);
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: center;
  background-size: 40%;
}
/* MOBILE */
.about-mobile .section .row {
  height: auto;
}
.about-mobile {
  margin-top: 80px;
}
.about-pc-mob {
  position: absolute;
  right: -30%;
  height: 300px;
  width: auto;
  object-fit: contain;
}
.about-mobile .photo-holder {
  height: 300px;
  position: relative;
}
.about-mobile .font-32 {
  font-size: 32px;
}
.about-mobile .font-24 {
  font-size: 23px;
}
.about-mobile .font-18 {
  font-size: 18px;
}
.third-section {
  background-image: url(../assets/images/abt-logo.svg);
  background-repeat: no-repeat;
  background-position-x: -30vw;
  background-position-y: center;
  background-size: 100%;
}
#mobile-section1 {
  overflow-x: hidden;
}
@media screen and (max-width: 991px) {
  .main-about {
    margin-left: 0px;
  }
}
</style>
