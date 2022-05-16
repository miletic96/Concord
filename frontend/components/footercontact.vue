<template>
  <footer>
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="offset-lg-1 col-md-4 logofooter footer-column">
            <img
              src="../assets/images/whitelogo.png"
              alt="Concord Media Logo"
              width="70%"
            />
          </div>
          <div class="col-md-3 footer-column">
            <div class="footer-menu pt-ligh d-none d-md-flex">
              <NuxtLink to="/" tag="a"> Home</NuxtLink>
              <NuxtLink to="/about-us" tag="a"> About us</NuxtLink>
              <NuxtLink to="/skills" tag="a"> Skills</NuxtLink>
              <NuxtLink to="/insights" tag="a"> Insights</NuxtLink>
              <NuxtLink to="/careers" tag="a"> Careers</NuxtLink>
              <NuxtLink to="/faq" tag="a"> FAQ</NuxtLink>
              <NuxtLink to="/contact" tag="a"> Get in touch</NuxtLink>
            </div>
            <div class="footer-menu pt-light d-md-none">
              <div class="footer-menu-first-row">
                <NuxtLink to="/" tag="a"> Home</NuxtLink>
                <NuxtLink to="/about-us" tag="a"> About us</NuxtLink>
                <NuxtLink to="/skills" tag="a"> Skills</NuxtLink>
                <NuxtLink to="/insights" tag="a"> Insights</NuxtLink>
              </div>
              <div class="footer-menu-second-row">
                <NuxtLink to="/careers" tag="a"> Careers</NuxtLink>
                <NuxtLink to="/faq" tag="a"> FAQ</NuxtLink>
                <NuxtLink to="/contact" tag="a"> Get in touch</NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-md-3 footer-column pt-bk">
            <div class="footer-contact">
              <a href="mailto:sales@concord-medialtd.com"
                >sales@concord-medialtd.com</a
              >
              <a href="tel:+381603218282">+381 60 321 82 82</a>

              <a href="#">Vitezova Karadjordjeve Zvezde 50, Belgrade,Serbia</a>
              <a href="#"
                >48 Themistokli Dervi, Athienitis Centennial Building, 704,
                Nicosia Cyprus</a
              >

              <div class="social-icons"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style>
.footer {
  z-index: 25;
  position: relative;
  min-height: 400px;
  background: url(../assets/images/transparent-bg-logo.svg) no-repeat;
  background-size: 380px;
  background-position-x: 300px;
}
.footer-column {
  margin-top: 60px !important;
}
.footer-menu,
.footer-contact {
  display: flex;
  flex-direction: column;
  margin: auto;
  font-size: 2.2vh;
}
.footer-menu a,
.footer-contact a {
  text-decoration: none;
  color: white;
  text-align: center;
  margin: 5px auto;
}
.footer-menu a:hover,
.footer-contact a:hover {
  color: #ccc;
}
.logofooter {
  /* background: url(../assets/images/transparent-bg-logo.svg) no-repeat; */
}
.pink .footer {
  background-color: #c25690;
}
.blue .footer {
  background-color: #3891df;
}
.apri .footer {
  background-color: #e59ca1;
}
.deeppurple .footer {
  background-color: #7663c2;
}
.purple .footer {
  background-color: #64395a;
}
@media screen and (max-width: 768px) {
  .footer {
    background: none;
  }
  .logofooter {
    text-align: center;
  }
  .footer-menu {
    flex-direction: column;
  }
  .footer-menu .footer-menu-first-row {
    display: flex;
    justify-content: center;
  }
  .footer-menu .footer-menu-second-row {
    display: flex;
    justify-content: center;
  }
}
</style>
