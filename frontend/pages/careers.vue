<template lang="vue-html">
  <div>
    <div v-if="$device.isMobile">
      <div class="blue">
        <div class="d-flex main-careers-mobile">
          <div class="careers-mobile">
            <section>
              <div class="heading">
                <h1><span class="text-bg">Concord's values</span></h1>
              </div>
              <div class="mainText">
                <p>
                  Our team is made up of people who are not only devoted and
                  committed to their careers in digital marketing, they also
                  <span class="text-bg"> love it </span>! We don't consider our
                  job a chore, but rather a thrilling experience with each
                  client requiring a unique service. We believe in keeping up
                  with the times and remaining ahead of our competitors, we
                  value creativity and groundwork, as well as
                  <span class="text-bg">ambition and enjoyment</span>.
                </p>
              </div>
              <div class="values">
                <div class="row">
                  <div class="col-lg-4">
                    <div class="value">
                      <img
                        class="check-img2"
                        src="../assets/images/check_new.png"
                        alt=""
                      />
                      <p>
                        Each team member has a
                        <span class="text-bg">
                          consistent plan and development roadmap
                        </span>
                        that includes both internal and external learning.
                      </p>
                      <p>
                        Inside Concord, we aim to foster an
                        <span class="text-bg">innovative mentality</span>.
                      </p>
                      <p>
                        In terms of our squad, we place the greatest emphasis on
                        personal and professional growth. This is Concord's
                        <span class="text-bg"> leading investment to date </span
                        >.
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </section>
            <section class="careersTwo">
              <div class="heading">
                <h2><span class="text-bg">Come work with us!</span></h2>
                <h3>A career in Concord is the way to go!</h3>
              </div>
              <div class="mainText2">
                <p class="pt-ligh">
                  We work hard to cultivate a culture of learning and
                  dedication, and we invest in each employee's education and
                  growth. We believe that the best work can only be achieved by
                  people who are granted the freedom to be their most authentic
                  self.
                </p>
              </div>
            </section>
            <section>
              <div class="row">
                <div class="col-12 bottom-careers">
                  <h3 class="my-5 text-center contact-text pt-med">
                    We are always on the lookout for new talent.
                  </h3>
                  <img src="../assets/images/careerphone.png" alt="" />
                </div>
              </div>
              <div class="row">
                <div
                  class="
                    col-lg-7
                    d-flex
                    flex-column
                    text-center
                    justify-content-center
                    bottom-careers-text
                  "
                >
                  <h3 class="contact-text">
                    If you believe you would be a good match for our
                    fast-expanding agency, please send us your CV to our email
                    <a href="mailto:hr@concord-medialtd.com">
                      <span class="text-bg">hr@concord-medialtd.com</span></a
                    >
                    .
                  </h3>
                </div>
              </div>
            </section>
          </div>
        </div>
        <footercontact />
      </div>
    </div>
    <div v-else>
      <div class="d-none d-lg-block">
        <div class="blue">
          <div class="d-flex main-careers">
            <div>
              <scrollindi />
            </div>
            <div class="careers">
              <section>
                <div class="heading">
                  <h1><span class="text-bg">Concord's values</span></h1>
                </div>
                <div class="mainText">
                  <p>
                    Our team is made up of people who are not only devoted and
                    committed to their careers in digital marketing, they also
                    <span class="text-bg"> love it </span>! We don't consider
                    our job a chore, but rather a thrilling experience with each
                    client requiring a unique service. We believe in keeping up
                    with the times and remaining ahead of our competitors, we
                    value creativity and groundwork, as well as
                    <span class="text-bg">ambition and enjoyment</span>.
                  </p>
                </div>
                <div class="values desktop">
                  <div class="row">
                    <div class="col-lg-3">
                      <img src="../assets/images/check_new.png" alt="">
                    </div>
                    <div class="col-lg-9 values-paragraphs">
                      <p>Each team member has a consistent plan and development roadmap that includes both internal and external learning.</p>
                      <p>Inside Concord, we aim to foster an innovative mentality. </p>
                      <p>In terms of our squad, we place the greatest emphasis on personal and professional growth. This is Concord’s leading investment to date. </p>
                    </div>
                  </div>
                </div>
              </section>
              <section class="careersTwo">
                <div class="heading">
                  <h2><span class="text-bg">Come work with us!</span></h2>
                  <h3>A career in Concord is the way to go!</h3>
                </div>
                <div class="mainText2">
                  <p>
                    We work hard to cultivate a culture of learning and
                    dedication, and we invest in each employee's education and
                    growth. We believe that the best work can only be achieved
                    by people who are granted the freedom to be their most
                    authentic self.
                  </p>
                </div>
              </section>
              <section>
                <div class="row">
                  <div class="col-12">
                    <h3 class="my-5 text-center contact-text">
                      We are always on the lookout for new talent.
                    </h3>
                  </div>
                </div>
                <div class="row">
                  <div
                    class="
                      col-lg-7
                      d-flex
                      flex-column
                      text-center
                      justify-content-center
                    "
                  >
                    <h3 class="contact-text">
                      If you believe you would be a good match for our
                      fast-expanding agency, please send us your CV to our email
                      <a href="mailto:hr@concord-medialtd.com">
                        <span class="text-bg">hr@concord-medialtd.com</span></a
                      >
                      .
                    </h3>
                  </div>
                  <div class="col-lg-5">
                    <img src="../assets/images/careerphone.png" alt="" />
                  </div>
                </div>
              </section>
            </div>
          </div>
          <footercontact />
        </div>
      </div>
      <div class="d-lg-none">
        <div class="blue">
        <div class="d-flex main-careers-mobile">
          <div class="careers-mobile">
            <section>
              <div class="heading">
                <h1><span class="text-bg">Concord's values</span></h1>
              </div>
              <div class="mainText">
                <p>
                  Our team is made up of people who are not only devoted and
                  committed to their careers in digital marketing, they also
                  <span class="text-bg"> love it </span>! We don't consider our
                  job a chore, but rather a thrilling experience with each
                  client requiring a unique service. We believe in keeping up
                  with the times and remaining ahead of our competitors, we
                  value creativity and groundwork, as well as
                  <span class="text-bg">ambition and enjoyment</span>.
                </p>
              </div>
              <div class="values">
                <div class="row">
                  <div class="col-lg-4">
                    <div class="value">
                      <img
                        class="check-img2"
                        src="../assets/images/check_new.png"
                        alt=""
                      />
                      <p>
                        Each team member has a
                        <span class="text-bg">
                          consistent plan and development roadmap
                        </span>
                        that includes both internal and external learning.
                      </p>
                      <p>
                        Inside Concord, we aim to foster an
                        <span class="text-bg">innovative mentality</span>.
                      </p>
                      <p>
                        In terms of our squad, we place the greatest emphasis on
                        personal and professional growth. This is Concord's
                        <span class="text-bg"> leading investment to date </span
                        >.
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </section>
            <section class="careersTwo">
              <div class="heading">
                <h2><span class="text-bg">Come work with us!</span></h2>
                <h3>A career in Concord is the way to go!</h3>
              </div>
              <div class="mainText2">
                <p class="pt-ligh">
                  We work hard to cultivate a culture of learning and
                  dedication, and we invest in each employee's education and
                  growth. We believe that the best work can only be achieved by
                  people who are granted the freedom to be their most authentic
                  self.
                </p>
              </div>
            </section>
            <section>
              <div class="row">
                <div class="col-12 bottom-careers">
                  <h3 class="my-5 text-center contact-text pt-med">
                    We are always on the lookout for new talent.
                  </h3>
                  <img src="../assets/images/careerphone.png" alt="" />
                </div>
              </div>
              <div class="row">
                <div
                  class="
                    col-lg-7
                    d-flex
                    flex-column
                    text-center
                    justify-content-center
                    bottom-careers-text
                  "
                >
                  <h3 class="contact-text">
                    If you believe you would be a good match for our
                    fast-expanding agency, please send us your CV to our email
                    <a href="mailto:hr@concord-medialtd.com">
                      <span class="text-bg">hr@concord-medialtd.com</span></a
                    >
                    .
                  </h3>
                </div>
              </div>
            </section>
          </div>
        </div>
        <footercontact />
      </div>
      </div>
    </div>
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
      title: "Careers | Concord Media",
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
  layout: "default",
};
</script>
<style lang="css" scoped>
.careers {
  margin-top: 120px;
  margin-left: 250px;
  margin-right: 150px;
}
.values.desktop {
  margin-top: 150px;
}
.values-paragraphs {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.5rem;
}
.careers section {
  min-height: 90vh;
}
.check-img {
  width: 90px;
  height: 90px;
  filter: drop-shadow(66px -26px 6px #509fe3);
  margin: auto;
  margin-bottom: 50px;
}
.check-img2 {
  width: 150px;
  margin: auto;
}
.blue .text-bg {
  background: linear-gradient(
    180deg,
    rgba(0, 212, 255, 0) 55%,
    rgba(2, 0, 36, 1) 55%,
    rgba(113, 179, 236, 1) 55%
  );
}
.value {
  display: flex;
  flex-direction: column;
  text-align: center;
  /* padding: 60px 90px; */
  min-width: 200px;
  max-width: 300px;
  margin: auto;
  margin-top: 100px;
}
.value p {
  font-size: 1vw;
}
.heading h1,
.heading h2 {
  font-size: 4vw;
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 50px;
}
.mainText {
  font-size: 1.3vw;
  margin-top: 50px;
  margin-bottom: 50px;
}
.mainText2 {
  width: 50%;
  font-size: 1.3vw;
  margin-top: 250px;
  margin-bottom: 50px;
}
.contact-text {
  font-size: 3vw;
}
.contact-text a {
  text-decoration: none;
  color: #333333;
}
.contact-text a:hover {
  text-decoration: none;
  color: #333333;
}
.careersTwo {
  background-image: url(../assets/images/careers-logo.svg);
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: center;
  background-size: 55%;
  overflow-x: visible;
}

/* mobile */
.careers-mobile {
  margin-top: 100px;
}
.main-careers-mobile .careers section {
  min-height: 90vh;
}
.main-careers-mobile .check-img {
  width: 90px;
  height: 90px;
  filter: drop-shadow(66px -26px 6px #509fe3);
  margin: auto;
  margin-bottom: 50px;
}
.blue .text-bg {
  background: linear-gradient(
    180deg,
    rgba(0, 212, 255, 0) 55%,
    rgba(2, 0, 36, 1) 55%,
    rgba(113, 179, 236, 1) 55%
  );
}
.main-careers-mobile .value {
  display: flex;
  flex-direction: column;
  text-align: center;
  /* padding: 60px 90px; */
  min-width: 200px;
  max-width: 300px;
  margin: auto;
  margin-top: 100px;
}
.main-careers-mobile .value p {
  font-size: 1vw;
}
.main-careers-mobile .heading h1,
.main-careers-mobile .heading h2 {
  font-size: 4vw;
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 50px;
}
.main-careers-mobile .mainText {
  font-size: 1.3vw;
  margin-top: 50px;
  margin-bottom: 50px;
}
.main-careers-mobile .mainText2 {
  width: 50%;
  font-size: 1.3vw;
  margin-top: 250px;
  margin-bottom: 50px;
}
.main-careers-mobile .contact-text {
  font-size: 3vw;
}
.main-careers-mobile .contact-text a {
  text-decoration: none;
  color: #333333;
}
.main-careers-mobile .contact-text a:hover {
  text-decoration: none;
  color: #333333;
}
.main-careers-mobile .careersTwo {
  background-image: url(../assets/images/careers-logo.svg);
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: center;
  background-size: 55%;
  overflow-x: visible;
}
@media screen and (max-width: 1024px) {
  .main-careers-mobile .values p {
    font-size: 18px;
  }
  .main-careers-mobile .mainText p,
  .mainText2 p {
    font-size: 18px;
    padding-left: 10%;
    padding-right: 10%;
    text-align: center;
  }
  .main-careers-mobile .heading h1 .text-bg {
    font-size: 32px;
  }
  .main-careers-mobile .heading h2 .text-bg {
    font-size: 32px;
  }
  .main-careers-mobile .heading h2 {
    margin-bottom: 10px;
  }
  .main-careers-mobile .heading h3 {
    font-size: 18px;
    text-align: center;
  }
  .main-careers-mobile .heading h1,
  .main-careers-mobile .heading h2 {
    text-align: center;
  }
  .main-careers-mobile .mainText2 {
    width: 100%;
    margin-top: auto;
  }
  .main-careers-mobile .contact-text {
    font-size: 32px;
  }
  .main-careers-mobile .bottom-careers {
    position: relative;
    padding-left: 10%;
    height: 380px;
    overflow: hidden;
  }
  .main-careers-mobile .bottom-careers img {
    width: 100%;
    height: auto;
    position: absolute;
    right: -30%;
    top: 25px;
  }
  .main-careers-mobile .bottom-careers .contact-text {
    width: 60%;
    text-align: left !important;
    /* padding-left: 10%; */
  }
  .main-careers-mobile .bottom-careers-text .contact-text {
    padding-left: 10%;
    padding-right: 10%;
    font-size: 24px;
    margin-bottom: 50px;
  }
}
</style>
