<template lang="vue-html">
  <div>
    <div >
      <div >
        <div class="blue">
          <div class="d-flex main-careers">
            <div class="d-none d-lg-block">
              <scrollindi />
            </div>
            <div class="cro">
                <div class="header">
                  <div class="row">
                    <div class="col-xl-6 cro_intro" style="background-image:url(../assets/images/skill/cro.webp)">
                      <h1>Conversion Rate Optimization (CRO)</h1>
                      <h2>You already have the traffic so why not convert more of it.</h2>
                      <p>In digital marketing, drawing traffic to the website takes a lot of time and effort. However, an increasing number of innovative companies are incorporating CRO into their marketing mix in order to expand their businesses by converting more of their existing visitors. This analytical approach to marketing puts your clients and their interests first, and you'll constantly boost the quality of your website and raise sales through a process of intensive research, understanding and adapting. But it's not just about increasing conversion rates. It's all about optimizing the market and maximizing the consumer journey from beginning to end.</p>
                    </div>
                    <div class="col-xl-6 cro-image-column">
                      <croImg />
                    </div>
                  </div>
                </div>
                <div class="cro-section">
                  <div class="row">
                    <div class="col-xl-9">
                      <p>Our goal is to increase the productivity of your site's traffic and the key metric of conversion rate, helping you derive more benefit from all digital media platforms while staying within your current marketing budget and KPI’s. All of the tech and innovative tools available for CRO ventures are created and deployed by the Concord team.</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xl-9">
                      <p>
                        Learn how we can assist you with everything from conversion analysis to overseeing your entire testing program.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="cro-services">
                  <div class="row">
                    <h3>Our CRO services include:</h3>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <p>
                        <span class="cro-service">
                        Technical audit
                        </span>
                      </p>
                    </div>
                    <div class="col-lg-6">
                      <p>
                        <span class="cro-service">
                        Customer journey mapping
                        </span>
                      </p>
                    </div>
                    <div class="col-lg-6">
                      <p>
                        <span class="cro-service">
                        CRO asset creation
                        </span>
                      </p>
                    </div>
                    <div class="col-lg-6">
                      <p>
                        <span class="cro-service">
                        Content personalization
                        </span>
                      </p>
                    </div>
                    <div class="col-lg-6">
                      <p>
                        <span class="cro-service">
                        Onsite analytics configuration
                        </span>
                      </p>
                    </div>
                    <div class="col-lg-6">
                      <p>
                        <span class="cro-service">
                        Dynamic landing pages
                        </span>
                      </p>
                    </div>
                    <div class="col-lg-6">
                      <p>
                        <span class="cro-service">
                        User testing
                        </span>
                      </p>
                    </div>

                  </div>
                </div>
            </div>
          </div>
          <footercontact />
        </div>
      </div>
      <!-- <div class="d-lg-none">
        <div class="blue">
        <div class="d-flex main-cro-mobile">
          <div class="cro-mobile"> 
            <div class="cro">
                <div class="header">
                  <div class="row">
                    <div class="col-xl-7 cro_intro" style="background-image:url(../assets/images/skill/cro.webp)">
                      <h1>Conversion Rate Optimization (CRO)</h1>
                      <h2>You already have the traffic so why not convert more of it.</h2>
                      <p>In digital marketing, drawing traffic to the website takes a lot of time and effort. However, an increasing number of innovative companies are incorporating CRO into their marketing mix in order to expand their businesses by converting more of their existing visitors. This analytical approach to marketing puts your clients and their interests first, and you'll constantly boost the quality of your website and raise sales through a process of intensive research, understanding and adapting. But it's not just about increasing conversion rates. It's all about optimizing the market and maximizing the consumer journey from beginning to end.</p>
                    </div>
                    <div class="col-xl-5 cro-image-column">
                      <croImg />
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <footercontact />
      </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import scrollindi from "../../components/scrollindi.vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import footercontact from "../../components/footercontact.vue";
import croImg from "../../components/croImage.vue";
gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    scrollindi,
    footercontact,
    croImg,
  },
  data() {
    return {
      title: "CRO | Concord Media",
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
.blue .text-bg {
  background: linear-gradient(
    180deg,
    rgba(0, 212, 255, 0) 55%,
    rgba(2, 0, 36, 1) 55%,
    rgba(113, 179, 236, 1) 55%
  );
}
.cro {
  padding: 100px 20px;
}

.cro .header .cro_intro {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80%;
}
.cro-image-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.cro-services .col-lg-6 {
  margin: auto;
}
.cro-services p {
  margin-left: 15px;
  margin-right: 15px;
  background-color: #71b3ec;
  color: white;
  text-align: center;
  padding: 10px;
  border-radius: 19px;
}
.cro-services p:hover {
  background-color: #3891df;
}
@media (min-width: 1200px) {
  .cro {
    min-height: 100vh;
    padding-left: 120px;
    padding-top: 80px;
  }
  .cro .header .row {
    height: 100vh;
  }
  .cro-services .row {
    padding-left: 15%;
    padding-right: 15%;
  }
}
</style>
