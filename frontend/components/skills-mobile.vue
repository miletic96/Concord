<template lang="vue-html">
  <div class="deeppurple">
    <div class="container">
      <div id="card1" class="card">
        <div class="heading" v-on:click="Press('1')">
          <h2>CRO</h2>
        </div>
        <div id="cardInner1" class="card-inner hide">
          <NuxtLink to="/skills/cro">
                    <img src="../assets/images/skill/cro.webp" style="height: 180px; margin: auto;" />
                  </NuxtLink>
        </div>
      </div>
      <div id="card2" class="card">
        <div class="heading" v-on:click="Press('2')">
          <h2>SEO</h2>
        </div>
        <div id="cardInner2" class="card-inner hide">
          <div class="carousel-wrapper">
            <div v-swiper:mySwiper="options">
              <div class="swiper-wrapper">
                <div class="img-warpper swiper-slide">
                  <NuxtLink to="/skills/seo">
                    <img src="../assets/images/seo/types/global-seo.png" />
                  </NuxtLink>
                </div>
                <div class="img-warpper swiper-slide">
                  <NuxtLink to="/skills/seo">
                    <img src="../assets/images/seo/types/local-seo.png" />
                  </NuxtLink>
                </div>
                <div class="img-warpper swiper-slide">
                  <NuxtLink to="/skills/seo">
                    <img src="../assets/images/seo/types/audit-seo.png" />
                  </NuxtLink>
                </div>
                <!-- <div class="img-warpper swiper-slide">
                  <NuxtLink to="/skills/seo">
                    <img src="../assets/images/seo/types/cro-seo.png" />
                  </NuxtLink>
                </div> -->
                <div class="img-warpper swiper-slide">
                  <NuxtLink to="/skills/seo">
                    <img src="../assets/images/seo/types/technical-seo.png" />
                  </NuxtLink>
                </div>
                  
              </div>
            <div class="swiper-button-next" id="swiper-button-next-seo" slot="button-next"></div>
              <div class="swiper-button-prev" id="swiper-button-prev-seo" slot="button-prev"></div>
              <!-- <div class="swiper-pagination swiper-pagination-bullets"></div> -->
            </div>
          </div>
        </div>
      </div>
      <div id="card3" class="card">
        <div class="heading" v-on:click="Press('3')">
          <h2>paid advertising</h2>
        </div>
        <div id="cardInner3" class="card-inner hide">
          <paidslider></paidslider>
        </div>
      </div>
    </div>
    <footercontact />
  </div>
</template>

<script>
import footercontact from "./footercontact.vue";
import paidslider from "./paidslider.vue";
export default {
  data() {
    return {
      options: {
        slidesPerView: 1,
        loop: true,
        navigation: {
          nextEl: "#swiper-button-next-seo",
          prevEl: "#swiper-button-prev-seo",
        },
      },
    };
  },
  components: {
    footercontact,
    paidslider,
  },
  methods: {
    Press(el) {
      let id = parseInt(el);
      let cardId = "card" + el;
      let cardInner = "cardInner" + el;

      let cards = document.querySelectorAll(".card");
      let cardInners = document.querySelectorAll(".card-inner");

      cardInners.forEach(function (cardInner) {
        if (!cardInner.classList.contains("hide")) {
          // cardInner.classList.remove("show");
          cardInner.classList.add("hide");
        }
      });
      cards.forEach(function (card) {
        if (card.classList.contains("active")) {
          card.classList.remove("active");
        }

        if (card.id != cardId) {
          card.classList.add("inactive");
        } else {
          card.classList.add("active");
          card.classList.remove("inactive");

          // document.getElementById(cardInner).classList.add("show");
          document.getElementById(cardInner).classList.remove("hide");
        }
      });
    },
  },
};
</script>

<style lang="css" scoped>
.card {
  width: 100%;
  min-height: 400px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #000;
  margin-top: -200px;
  background-color: #9f5f91;
  transition: all 0.5s ease;
  border-radius: 0;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
}
.card .heading {
  margin-bottom: 15px;
  height: 65px;
}
.card-inner {
  transition: all 1s ease;
}
.container {
  margin-top: 110px;
}
.card:first-child {
  margin-top: 0;
  background-color: #71b3ec;
}
.card:last-child {
  background-color: #957fef;
  min-height: 200px;
}
.card .heading h2 {
  color: white;
  text-align: center;
  margin: 15px auto;
}
.card .heading {
  cursor: pointer;
}
.card-inner {
  /* display: none; */
  /* OVO TI JEBE SLIDER */
}
.card-inner.show {
  /* display: block; */
}
.card-inner.hide {
  opacity: 0;
  height: 0;
}
.card.inactive {
  min-height: 180px;
  margin-top: -80px;
}
.card.active {
  margin-top: -80px;
}
.card.active#card1 {
  margin-top: 0px;
}

.card:first-child.inactive {
  margin-top: 85px;
}

.card:last-child.active {
  min-height: 400px;
}
.card.active .card-inner {
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
/* .carousel-wrapper .swiper-container .swiper-button-prev, .swiper-button-next {
  color: #333 !important;
}
.carousel-wrapper .swiper-container .swiper-button-next:after,  .swiper-button-prev:after {
    color: #333 !important;

} */
/* .swiper-button-prev, #swiper-button-prev1, #swiper-button-next1 .swiper-button-next {
  color: #333333 !important;
}
.swiper-button-prev:after, .swiper-button-next:after {
  color: #333333 !important;
}
.swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after {
  color: #333333 !important;
}
.card-inner .carousel-wrapper .swiper-container .swiper-button-prev, .card-inner .carousel-wrapper .swiper-container .swiper-button-next {
  color: #333333 !important;
} */
</style>
