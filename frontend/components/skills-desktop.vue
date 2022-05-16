<template>
  <div id="colors" class="pink">
    <scrollindi></scrollindi>
    <div class="main">
      <div class="maincontent px-5">
        <div class="skill-page-flex-columns">
          <div class="skills-wrapper-row first-row">SKILLS</div>
          <div class="d-flex skills-wrapper-row second-row">
            <div class="skillRow d-flex" id="organic">
              <div class="skill">
                <nuxt-link to="/skills/cro" tag="a">CRO</nuxt-link>

                <div class="subskills">
                  <div class="subskill">Tehnical Audit</div>
                  <div class="subskill">Asset Creation</div>
                  <div class="subskill">Onsite analytics configuration</div>
                  <div class="subskill">Customer journey mapping</div>
                  <div class="subskill">Content personalization</div>
                </div>
              </div>
            </div>
            <div class="skillRow" id="seo">
              <div class="skill">
                <nuxt-link to="/skills/seo" tag="a">SEO</nuxt-link>
                <div class="subskills">
                  <div class="subskill">Organic SEO</div>
                  <div class="subskill">Audit SEO</div>
                  <div class="subskill">Local SEO</div>
                  <div class="subskill">Global SEO</div>
                  <div class="subskill">Technical SEO</div>
                </div>
              </div>
            </div>
            <div class="skillRow" id="paid">
              <div class="skill">
                <nuxt-link to="/skills/paid" tag="a"
                  >Paid Advertising</nuxt-link
                >
                <div class="subskills">
                  <div class="subskill">
                    Display, Video & Programmatic Advertising
                  </div>
                  <div class="subskill">Search Engine Marketing</div>
                  <div class="subskill">Social Media Marketing</div>
                  <div class="subskill"><br /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footercontact></footercontact>
  </div>
</template>
<script>
import gsap from "gsap";
import scrollindi from "./scrollindi.vue";
import footercontact from "./footercontact.vue";
export default {
  components: {
    scrollindi,
    footercontact,
  },
  layout: "default",
};
</script>
<style lang="css" scoped>
.maincontent {
  height: calc(100vh - 80px);
  margin-top: 80px;
}
.skill-page-flex-columns {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-left: 100px;
}
.skills-wrapper-row {
  /* height: 33.3%; */
  width: 100%;
  position: relative;
  display: flex;
}
.skills-wrapper-row.first-row {
  height: 20%;
}
.skills-wrapper-row.second-row {
  height: 80%;
  margin-bottom: 7%;
}

.skillRow {
  height: 100%;
  width: 33%;
  display: flex;
  justify-content: center;
  position: relative;
}
#organic .skill::before {
  content: "01";
}
#seo .skill::before {
  content: "02";
}
#paid .skill::before {
  content: "03";
}
#organic .skill,
#seo .skill,
#paid .skill {
  transition: 0.3s all ease-in-out;
  position: relative;
  z-index: 1;
}
#organic:hover .skill {
  background-color: #e1effa;
  transition: 0.3s all ease-in-out;
}
#seo:hover .skill {
  background-color: #f1e5ee;
  transition: 0.3s all ease-in-out;
}
#paid:hover .skill {
  background-color: #eeebfd;
  transition: 0.3s all ease-in-out;
}

#organic .skill::before,
#seo .skill::before,
#paid .skill::before {
  position: absolute;
  top: 10%;
  left: 0;
  width: 100%;
  height: 40%;
  font-size: 14rem;
  text-align: center;
  font-weight: bold;
  color: #efefef;
  transition: 0.3s all ease-in-out;
  z-index: 2;
}
#organic:hover .skill::before,
#seo:hover .skill::before,
#paid:hover .skill::before {
  color: #fff;
  transition: 0.3s all ease-in-out;
}
#seo:hover a,
#seo:hover .subskill {
  color: #64395a;
}
#paid:hover a,
#paid:hover .subskill {
  color: #7663c2;
}
#organic:hover a,
#organic:hover .subskill {
  color: #3891df;
}
.skill {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  width: 100%;
  text-align: center;
}
.hrdiv {
  display: flex;
  flex: 1;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  overflow-x: hidden;
  z-index: 2;
}

#seo .skill,
#organic .skill,
#paid .skill {
  font-size: 4vw;
  color: #707070;
}
#seo .skill a,
#organic .skill a,
#paid .skill a {
  margin-top: 20%;
  position: relative;
  z-index: 3;
}
.skill .subskills {
  margin-top: 10%;
  font-size: 1.5rem;
  position: relative;
  z-index: 3;
  opacity: 0;
  transition: 0.3s all ease-in-out;
}
.skill:hover .subskills {
  opacity: 1;
  transition: 0.3s all ease-in-out;
}
/* #organic:hover {
  background-color: rgba(56, 145, 223, 0.36);
} */
.overlay p {
  font-size: 60vh;
  color: rgba(229, 229, 229, 04);
  pointer-events: none;
}
.overlayRow {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.seoOverlay {
  display: none;
  transition: 0.5s;
}
.paidOverlay {
  display: none;
  transition: 0.5s;
}
.skill a {
  color: #707070;
  text-decoration: none;
}
</style>
