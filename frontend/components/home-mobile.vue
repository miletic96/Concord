<template lang="vue-html">
  <div class="deeppurple">
    <div class="container-fluid">
      <div class="cards">
        <div id="card1" class="card">
          <div class="heading" v-on:click="Press('1')">
            <h2>Get to know us</h2>
            <p>
              We are a digital media agency offering a variety of cutting-edge
              and tailor-made advertising solutions.
            </p>
          </div>
          <div id="cardInner1" class="card-inner">
              <a href="/about-us" class="inner-button-a about"> About us</a>
          </div>
          <div class="button-card"><p>About</p></div>
        </div>
        <div id="card2" class="card">
          <div class="heading" v-on:click="Press('2')">
            <h2>Powerful marketing using cutting-edge technology</h2>
          </div>
          <div id="cardInner2" class="card-inner">
            <img src="../assets/images/PC.png" alt="" />
              <a href="/skills" class="inner-button-a skills"> Skills</a>
          </div>
          <div class="button-card"><p>Skills</p></div>
        </div>
        <div id="card3" class="card">
          <div class="heading" v-on:click="Press('3')">
            <h2>Stay updated with our insights on the digital media world</h2>
          </div>
          <div id="cardInner3" class="card-inner">
           <img
              src="../assets/images/insights.png"
              class="insights-img"
              alt=""
            />
              <a href="/blog" class="inner-button-a insights"> Insights</a>
            
          </div>
          <div class="button-card"><p>Insights</p></div>
        </div>
      </div>
    </div>
    <!-- <footercontact /> -->
  </div>
</template>

<script>
import footercontact from "./footercontact.vue";
export default {
  components: {
    footercontact,
  },
  methods: {
    Press(el) {
      let id = parseInt(el);
      let cardId = "card" + el;
      let cardInner = "cardInner" + el;

      let cards = document.querySelectorAll(".card");
      let cardInners = document.querySelectorAll(".card-inner");

      cardInners.forEach(function (cardInner) {
        if (cardInner.classList.contains("show")) {
          cardInner.classList.remove("show");
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

          document.getElementById(cardInner).classList.add("show");
        }
      });
    },
  },
};
</script>

<style lang="css" scoped>
.cards {
  display: flex;
  flex-direction: column;
  margin-top: 85px;
  transition: all 0.5s ease;
}
.card {
  width: 100%;
  min-height: 300px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #000;
  margin-top: -200px;
  background-color: #957fef;
  transition: all 0.5s ease;
}
.card .heading {
  margin-bottom: 15px;
}
.card .heading h2 {
  font-size: 35px;
  font-family: FuturaPtMedium;
  color: white !important;
}
.card .heading p {
  font-size: 18px;
  font-family: FuturaPtMedium;
  color: white !important;
}
.card {
  border-radius: 0;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  margin-top: -50px;
}
.card {
  z-index: 2;
}
.card.active {
  z-index: 1;
}
.card-inner {
  transition: all 1s ease;
}
.container {
  margin-top: 110px;
}
.card:first-child {
  margin-top: 50px;
  background-color: #9f5f91;
}
.card:last-child {
  background-color: #71b3ec;
  min-height: 350px;
}
.card .heading h2 {
  color: white;
  text-align: left;
  margin: 15px auto;
  padding-left: 15px;
  padding-right: 15px;
}
.card .heading {
  cursor: pointer;
}
.card-inner {
  display: none;
}
.card-inner.show {
  display: flex;
  flex-direction: column;
  min-height: 400px;
}
.card-inner  img{
  height: 300px;
  object-fit: contain;
  margin-bottom: 30px;
}

.card.inactive {
  min-height: 200px;
  margin-top: -50px;
  transition: all 0.5s ease;
}
/* .card:first-child.card.inactive{
    margin-top: 85px;
} */
.card.active {
  order: -1;
  margin-top: 50px !important;
}
.card:last-child.active {
  min-height: 400px;
}
#card1.active {
  background-image: url("../assets/images/people.jpg");
  background-position: 50% 20%;
}
.button-card {
  position: absolute;
  width: 100px;
  right: 10px;
  bottom: 60px;
  text-align: right;
}
/* .button-card::after {
      content: "";
    display: block;
    width: 50px;
    height: 12px;
  background-image: url("../assets/images/homepage/arrow.png");
    position: absolute;
    right: -8px;
    bottom: -8px;
    z-index: 5;
    background-repeat: no-repeat;
    background-size: cover;
} */
.button-card::before {
  border-right: 1px solid white;
  border-top: 1px solid white;
  content: "";
  display: block;
  height: 8px;
  margin-top: -6px;
  transform: rotate(45deg);
  position: absolute;
  right: -5px;
  bottom: 5px;
  width: 8px;
}
.button-card::after {
  content: "";
  display: block;
  position: absolute;
  right: -6px;
  width: 25px;
  height: 3px;
  border-bottom: 1px solid white;
  bottom: 8.8px;
}
.card.active .button-card {
  display: none;
}
.button-card p {
  color: white;
  width: 100%;
  font-size: 12px;
  font-family: FuturaPtBk;
  text-align: right;
  text-decoration: none;
}
.inner-button {
  text-align: center;
}
.inner-button-a {
  text-align: center;
  height: 35px;
  width: 140px;
  color: white;
  font-size: 12px;
  font-family: FuturaPtBk;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
      margin: auto;
    margin-bottom: 75px;
}
.inner-button-a.about {
  background-color: #9f5f91;
}
.inner-button-a.skills {
  background-color: #8976D2;
}
.inner-button-a.insights {
  background-color: #3385CC;
}
</style>
