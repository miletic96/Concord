<template>
  <div>
    <!-- <div v-if="$device.isMobile">
      <mobileFaq/> 
    </div> -->
    <div class="apri">
      <scrollfaq />
      <div class="faqoverlay">
        <span>FAQ</span>
      </div>
      <div class="container faq">
        <div class="row">
          <div class="col-12 text-center">
            <h1><span class="text-bg">Frequently Asked Questions</span></h1>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="questions pt-bk">
              <div
                class="question active"
                id="question1"
                v-on:click="Press('1')"
              >
                <span>Getting Started</span>
              </div>
              <div class="question" id="question2" v-on:click="Press('2')">
                <span>Why Concord</span>
              </div>
              <div class="question" id="question3" v-on:click="Press('3')">
                <span>Payment</span>
              </div>
              <div class="question" id="question4" v-on:click="Press('4')">
                <span>Additional costs</span>
              </div>
              <div class="question" id="question5" v-on:click="Press('5')">
                <span>SEO</span>
              </div>
              <div class="question" id="question6" v-on:click="Press('6')">
                <span>Results</span>
              </div>
              <div class="question" id="question7" v-on:click="Press('7')">
                <span>Resports</span>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="answers">
              <div class="answer show" id="answer1">
                <h2>How do I get started</h2>
                <p>
                  Simply fill out our "get in touch" form and we'll get back to
                  you to discuss your needs in greater detail.
                </p>
              </div>
              <div class="answer" id="answer2">
                <h2>Why should I use Concord?</h2>
                <p>
                  Concord is the best solution for helping companies gain
                  visibility on Websites, applications, social media, google and
                  basically anywhere! We also have a reputation for delivering
                  excellent results for our customers and we are constantly
                  motivated to improve and reach more clients to help with their
                  marketing needs.
                </p>
              </div>
              <div class="answer" id="answer3">
                <h2>How do I pay?</h2>
                <p>
                  The payment scheme differs based on campaign and service.
                  Regarding the payment method – Credit or debit card, bank
                  transfer or PayPal are all welcomed. Included with your
                  monthly invoice is a detailed performance report.
                </p>
              </div>
              <div class="answer" id="answer4">
                <h2>Are there any additional cost i.e. setup cost etc.?</h2>
                <p>
                  No, we don't charge any setup or additional nonsense fees. We
                  provide the best service with the best price possible.
                </p>
              </div>
              <div class="answer" id="answer5">
                <h2>How does SEO work?</h2>
                <p>
                  SEO is all about winning the trust of search engines. In other
                  words, the more a search engine trusts a website, the higher
                  it can rate in the search results.
                </p>
              </div>
              <div class="answer" id="answer6">
                <h2>How long does it take to see results in SEO campaigns?</h2>
                <p>
                  We realize what it takes to reach SEO success – it's a
                  marathon, not a sprint. It all comes down to the market,
                  keywords and competitors. We usually see outcomes after a few
                  months until a year – it all depends on competition. Your
                  progress is constantly monitored and revised.
                </p>
              </div>
              <div class="answer" id="answer7">
                <h2>Do you provide reports?</h2>
                <p>
                  We provide a monthly report for every campaign we do. The
                  extent of the report can be varied and is decided with you in
                  the beginning of the campaign.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footercontact />
    </div>
  </div>
</template>

<script>
import scrollfaq from "../components/scrollfaq.vue";
import gsap from "gsap";
import footercontact from "../components/footercontact.vue";

export default {
  components: {
    scrollfaq,
    footercontact,
  },
  data() {
    return {
      title: "FAQ | Concord Media",
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
  layout: "default",
  mounted: function () {
    var footerheight =
      document.getElementsByClassName("footer")[0].offsetHeight;
    var height = document.documentElement.offsetHeight;
    var heightScrollbar = height - footerheight;
    // console.log(heightScrollbar + "px");
    document.getElementById("scrollper").style.height = heightScrollbar + "px";
    document.getElementsByClassName("scrollbase")[0].style.height =
      heightScrollbar + "px";
  },
  methods: {
    Press(el) {
      let id = parseInt(el);
      let questions = document.querySelectorAll(".question");
      let answers = document.querySelectorAll(".answer");
      questions.forEach(function (question) {
        if (question.classList.contains("active")) {
          question.classList.remove("active");
        }
      });

      answers.forEach(function (answer) {
        if (answer.classList.contains("show")) {
          answer.classList.remove("show");
        }
      });
      let quid = "question" + el;
      let anid = "answer" + el;
      let footerHeightPercent =
        document.querySelector(".footer").offsetHeight /
        document.querySelector(".apri").offsetHeight;
      console.log(quid + " " + anid);
      document.getElementById(quid).classList.add("active");
      document.getElementById(anid).classList.add("show");

      gsap.to("#scrollper", { yPercent: (100 / 7) * (id - 1) });
    },
  },
  setHeight() {},
};
</script>

<style lang="css" scoped>
html,
body {
  width: 100vw;
}
.faq {
  padding-top: 150px;
  padding-left: 150px;
  position: relative;
  overflow: hidden;
  min-height: calc(100vh - 400px);
  margin-left: 0;
}
.apri {
  position: relative;
}
.answers {
  position: relative;
}
.faqoverlay {
  position: absolute;
  right: 100px;
  bottom: 250px;
  opacity: 0.4;
}
.faqoverlay span {
  font-size: 60vh;
  color: #e59ca1;
  opacity: 0.4;
}
.answer {
  display: none;
  margin-top: 40px;
}
.show {
  display: block;
}
.question.active span {
  background-color: #e59ca1;
}
.question,
.answer {
  transition: 0.4s all ease-in-out;
}
.show {
  transition: 0.4s all ease-in-out;
}
.active {
  transition: 0.4s all ease-in-out;
}
.question {
  margin: 40px auto;
  text-align: center;
  cursor: pointer;
}
.apri .text-bg {
  background: linear-gradient(
    180deg,
    rgba(0, 212, 255, 0) 55%,
    rgba(2, 0, 36, 1) 55%,
    rgba(229, 156, 161, 1) 55%
  );
}
.question span {
  padding: 6px 12px;
  border-radius: 50px;
}
@media (max-width: 992px) {
  .scrollbase {
    display: none;
  }
  .faq {
    padding-left: 20px;
    padding-right: 20px;
    margin: auto;
  }
  .faqoverlay {
    display: none;
  }
  .questions {
    display: flex;
    overflow: auto;
  }
  .question {
    white-space: nowrap;
  }
  .answers {
    margin-bottom: 50px;
  }
}
</style>
