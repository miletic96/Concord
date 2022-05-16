<template>
  <div>
    <div class="main">
      <div class="maincontent">
        <div class="overlay"><p class="pt-cb">skills</p></div>

        <div class="skillRow d-flex" id="organic">
          <div class="hrdiv"><hr /></div>
          <div class="skill">Organic</div>
          <div class="hrdiv"><hr /></div>
        </div>
        <div class="skillRow" id="seo">
          <div class="hrdiv"><hr /></div>
          <div class="skill"><nuxt-link to="/skills/seo" tag="a">SEO</nuxt-link></div>
          <div class="hrdiv"><hr /></div>
        </div>
        <div class="skillRow" id="paid">
          <div class="hrdiv"><hr /></div>
          <div class="skill"><nuxt-link to="/skills/paid" tag="a">Paid Advertising</nuxt-link></div>
          <div class="hrdiv"><hr /></div>
        </div>
      </div>
      <div class="seoOverlay">
        <div class="skillOverlay">
          <div class="overlayRow">
            <div class="overlayImg">
              <img
                src="../assets/images/seo/types/audit-seo.png"
                class="img-overlay"
                alt=""
              />
            </div>
            <div class="overlayImg">
              <img
                src="../assets/images/seo/types/technical-seo.png"
                class="img-overlay"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="skillOverlay">
          <div class="overlayRow">
            <div class="overlayImg">
              <img
                src="../assets/images/seo/types/local-seo.png"
                class="img-overlay"
                alt=""
              />
            </div>
            <div class="overlayImg">
              <img
                src="../assets/images/seo/types/cro-seo.png"
                class="img-overlay"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="skillOverlay">
          <div class="overlayRow">
            <div class="overlayImg">
              <img
                src="../assets/images/seo/types/audit-seo.png"
                class="img-overlay"
                alt=""
              />
            </div>
            <div class="overlayImg">
              <img
                src="../assets/images/seo/types/audit-seo.png"
                class="img-overlay"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="paidOverlay">
        <div class="skillOverlay">
          <div class="overlayRow">
            <div class="overlayImg">  <img
                src="../assets/images/seo/types/paid2.png"
                class="img-overlay"
                alt=""
              /></div>
            <div class="overlayImg"><img
                src="../assets/images/seo/types/paid2.png"
                class="img-overlay"
                alt=""
              /></div>
          </div>
        </div>
        <div class="skillOverlay">
          <div class="overlayRow">
            <div class="overlayImg"><img
                src="../assets/images/seo/types/paid3.png"
                class="img-overlay"
                alt=""
              /></div>
            <div class="overlayImg"><img
                src="../assets/images/seo/types/paid3.png"
                class="img-overlay"
                alt=""
              /></div>
          </div>
        </div>
        <div class="skillOverlay">
          <div class="overlayRow">
            <div class="overlayImg"><img
                src="../assets/images/seo/types/paid.png"
                class="img-overlay"
                alt=""
              /></div>
            <div class="overlayImg"><img
                src="../assets/images/seo/types/paid.png"
                class="img-overlay"
                alt=""
              /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import gsap from "gsap";
export default {
  mounted: function() {
    document.getElementById("seo").addEventListener('mouseenter', e => {
    document.getElementsByClassName("seoOverlay")[0].style.display = 'block';
  
});
document.getElementById("seo").addEventListener('mouseleave', e => {
    document.getElementsByClassName("seoOverlay")[0].style.display = 'none';
  
});
document.getElementById("paid").addEventListener('mouseenter', e => {
    document.getElementsByClassName("paidOverlay")[0].style.display = 'block';
  
});
document.getElementById("paid").addEventListener('mouseleave', e => {
    document.getElementsByClassName("paidOverlay")[0].style.display = 'none';
  
});
    },
  layout: "default",
};
</script>
<style lang="css" scoped>
.maincontent {
  height: calc(100vh - 80px);
  margin-top: 80px;
}
.skillRow {
  height: 33.3%;
  width: 100%;
  display: flex;
  justify-content: center;
}
.skill {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
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
.hrdiv hr {
  display: none;
}
.hrdiv hr {
  height: 3px;
}
.hrdiv:first-child {
  padding-left: 100px;
  padding-right: 30px;
}
.hrdiv:last-child {
  padding-right: 100px;
  padding-left: 30px;
}
.skillOverlay {
  width: 100%;
  height: 33.3%;
  display: flex;
  justify-content: space-between;
  z-index: 1;
}
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  text-align: center;
  z-index: 0;
}
.seoOverlay,
.paidOverlay {
  height: calc(100vh - 80px);
  position: absolute;
  top: 80px;
  width: 90%;
  margin: auto;
  left: 5%;
}
#seo,
#organic,
#paid {
  z-index: 22;
}
#seo .skill,
#organic .skill,
#paid .skill {
  font-size: 4vw;
  color: #707070;
}
#seo:hover {
  background-color: rgba(197, 146, 186, 0.36);
}
#seo:hover .hrdiv hr {
  display: flex;
}
#paid:hover .hrdiv hr {
  display: flex;
}
#organic:hover .hrdiv hr {
  display: flex;
}
#paid:hover {
  background-color: rgba(164, 145, 242, 0.36);
}
#organic:hover {
  background-color: rgba(56, 145, 223, 0.36);
}
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
    transition: .5s;

}
.paidOverlay {
  display: none;
  transition: .5s;
}
.skill a {
  color: #707070;
  text-decoration: none;
}
</style>
