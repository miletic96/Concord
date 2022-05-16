<template lang="">
  <div class="deeppurple contact">
    <scrollindi />
    <div class="main-container">
      <div class="row">
        <div class="d-none d-lg-block col-lg-3 image">
          <img src="../assets/images/contact.png" alt="" />
        </div>
        <div class="col-lg-6 middle-col">
          <h1>Get in touch</h1>
          <p>
            We will help you achieve your goals, whether it's to improve your
            Google rankings or to create a clever programmatic campaign, We just
            need some info, so please fill out the enquiry form and we'll
            contact you.
          </p>
          <div class="form">
            <form id="contactForm" @submit.prevent="sendForm()">
              <div class="row">
                <div class="col-md-12">
                  <div class="input-container">
                    <input required id="name" name="name" type="text" />
                    <label>Name</label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="input-container">
                    <input required id="position" name="position" type="text" />
                    <label>Position</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-container">
                    <input id="email" name="email" required type="text" />
                    <label>Email</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="input-container">
                    <input id="phone" name="phone" required type="text" />
                    <label>Phone</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-container">
                    <input id="business" name="business" required type="text" />
                    <label>Business</label>
                  </div>
                </div>
              </div>
              <div class="input-container">
                <input id="message" name="message" type="text" />
                <label>Message</label>
              </div>
              <div class="input-container">
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-3 contact-div-right">
          <div class="contactcont">
            <div class="contactinfo">
              <img src="../assets/images/mail.png" alt="" />
              <a href="mailto: sales@concord-medialtd.com"
                >sales@concord-medialtd.com</a
              >
            </div>
            <div class="contactinfo">
              <img src="../assets/images/phone.png" alt="" />
              <a href="tel:+381603218282">+381 60 321 82 82</a>
            </div>
            <div class="contactinfo">
              <img src="../assets/images/location.png" alt="" />
              <a>Vitezova Karadjordjeve Zvezde 50, Belgrade, Serbia</a>
            </div>
            <div class="contactinfo">
              <img src="../assets/images/location.png" alt="" />
              <a href="#"
                >48 Themistokli Dervi, Athienitis Centennial Building, 704,
                Nicosia Cyprus</a
              >
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
export default {
  components: {
    scrollindi,
    footercontact,
  },
  methods: {
    sendForm() {
      let formElement = document.querySelector("#contactForm");
      let object = {};
      let dataform = new FormData(formElement);
      dataform.forEach((value, key) => (object[key] = value));
      let json = JSON.stringify(object);
      let request = new XMLHttpRequest();
      request.open("POST", "http://localhost:1337/contacts/custom", true);
      request.setRequestHeader("Content-Type", "application/json");
      request.send(json);
    },
  },
  data() {
    return {
      title: "Contact | Concord Media",
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
.contact {
  overflow-x: hidden !important;
}
form {
  margin: 30px 65px;
}

label {
  position: relitive;
  display: inline-block;
  top: 100px;
  font-size: 1.25em;
  transition: all 0.2s ease;
  z-index: 10;
  position: relative;
  top: -30px;
}

.input-container {
  position: relative;
  margin: 45px auto -25px;
}

input[type="text"] {
  width: 100%;
  position: relative;
  display: inline-block;
  font-size: 1.25em;
  padding: 0 0 5px 0;

  background-color: transparent;
  border: none;
  border-bottom: solid 2px #804b74;
  outline: none;
  z-index: 20;
}

input[type="text"]:focus ~ label,
input[type="text"]:valid ~ label {
  top: -60px;
}

input[type="submit"] {
  cursor: pointer;
  margin: auto;
  width: 100%;
  background-color: #7663c2;
  color: #e0f2f1;
  font-family: "Noto Sans", sans-serif;
  font-size: 1.25em;
  padding: 10px 0;
  border: solid #7663c2;
  border-width: 0 0 4px 0;
  border-radius: 3px;
  outline: none;
}

input[type="submit"]:hover {
  background: #7663c2;
  border: solid #7663c2;
  border-width: 0 0 4px 0;
}

input[type="submit"]:active {
  background: #7663c2;
  border: solid transparent;
  border-width: 0 0 0px 0;
}
.contactcont {
  background-color: #7663c2;
  height: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 50;
}

.main-container {
  min-height: 100vh;
}
.image img {
  height: 100vh;
  object-fit: contain;
  object-position: left;
  z-index: -1;
  padding-top: 262px;
}
.contact-div-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.contactinfo {
  margin-left: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
}
.contactinfo img {
  margin-right: 20px;
}
.contactinfo a {
  text-decoration: none;
  color: white;
  margin: auto;
  margin-left: 0;
}
.contactinfo a:hover {
  color: white;
}
.contactinfo p {
  color: white;
  margin-top: auto;
}
.middle-col {
  margin-top: 150px;
}
.middle-col h1 {
  font-size: 3vw;
  color: #7663c2;
  margin: 15px 65px;
}
.middle-col p {
  margin: 15px 65px;
}
@media screen and (max-width: 991px) {
  .scrollbase {
    display: none;
  }
  .contactcont {
    background: transparent;
    margin-left: 50px;
  }
  .contactinfo a {
    color: #1c1c1c;
  }
  .contactinfo a:hover {
    color: #1c1c1c;
    opacity: 0.8;
  }
}
</style>
