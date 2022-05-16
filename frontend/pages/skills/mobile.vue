<template lang="vue-html">
    <div class="deeppurple">
        <div class="container">
            <div id="card1" class="card">
                <div class="heading">
                    <h2>Heading-1</h2>
                </div>
                <div id="cardInner1" class="card-inner">
                    <p>CARD INNER</p>
                </div>
            </div>
            <div  id="card2" class="card">
                <div class="heading" v-on:click="Press('2')">
                    <h2>Heading-2</h2>
                </div>
                <div id="cardInner2" class="card-inner">
                                        <p>CARD INNER</p>

                </div>
            </div>
            <div id="card3" class="card">
                <div class="heading" v-on:click="Press('3')">
                    <h2>Heading-3</h2>
                </div>
                <div id="cardInner3" class="card-inner">
                                        <p>CARD INNER</p>

                </div>
            </div>
        </div>
        <footercontact/>
    </div>
</template>

<script>
import footercontact from "../../components/footercontact.vue";
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
.card {
  width: 100%;
  min-height: 400px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #000;
  margin-top: -200px;
  background-color: red;
  transition: all 0.5s ease;
}
.card .heading {
    margin-bottom: 15px;
}
.card-inner {
  transition: all 1s ease;}
.container {
      margin-top: 110px;

}
.card:first-child {
  margin-top: 0;
  background-color: blue;
}
.card:last-child {
  background-color: green;
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
    display: none;
}
.card-inner.show {
    display: block;
}
.card.inactive{
    min-height: 100px;
    margin-top: 0;
}
.card:first-child.card.inactive{
    margin-top: 85px;
}
.card.active{
    margin-top: 0;
}
.card:last-child.active {
    min-height: 400px;
}
</style>
