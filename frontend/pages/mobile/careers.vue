<template lang="">
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
              <span class="text-bg"> love it </span>! We don't consider our job
              a chore, but rather a thrilling experience with each client
              requiring a unique service. We believe in keeping up with the
              times and remaining ahead of our competitors, we value creativity
              and groundwork, as well as
              <span class="text-bg">ambition and enjoyment</span>.
            </p>
          </div>
          <div class="values">
            <div class="row">
              <div class="col-lg-4">
                <div class="value">
                  <img
                    class="check-img"
                    src="../../assets/images/check.png"
                    alt=""
                  />
                  <p>
                    Each team member has a
                    <span class="text-bg">
                      consistent plan and development roadmap
                    </span>
                    that includes both internal and external learning.
                  </p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="value">
                  <img
                    class="check-img"
                    src="../../assets/images/check.png"
                    alt=""
                  />
                  <p>
                    Inside Concord, we aim to foster an
                    <span class="text-bg">innovative mentality</span>.
                  </p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="value">
                  <img
                    class="check-img"
                    src="../../assets/images/check.png"
                    alt=""
                  />
                  <p>
                    In terms of our squad, we place the greatest emphasis on
                    personal and professional growth. This is Concord's
                    <span class="text-bg"> leading investment to date </span>.
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
              We work hard to cultivate a culture of learning and dedication,
              and we invest in each employee's education and growth. We believe
              that the best work can only be achieved by people who are granted
              the freedom to be their most authentic self.
            </p>
          </div>
        </section>
        <section>
          <div class="row">
            <div class="col-12 bottom-careers">
              <h3 class="my-5 text-center contact-text pt-med">
                We are always on the lookout for new talent.
              </h3>
              <img src="../../assets/images/careerphone.png" alt="" />
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
                If you believe you would be a good match for our fast-expanding
                agency, please send us your CV to our email
                <a href="mailto:careers@concordmedia.com">
                  <span class="text-bg">careers@concordmedia.com</span></a
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
</template>

<script>
import gsap from "gsap";
import footercontact from "../../components/footercontact.vue";

export default {
  components: {
    footercontact,
  },
  layout: "default",
};
</script>
<style lang="css" scoped>
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
  background-image: url(../../assets/images/careers-logo.svg);
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
