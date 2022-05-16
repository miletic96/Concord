<template>
  <div class="scrollbase">
    <div class="scrollpercent" id="scrollper"></div>
  </div>
</template>

<script>


</script>

<style lang="css" scoped>
.deeppurple.contact .scrollbase{
  right: 0 !important;
    left: unset;
}
.deeppurple.contact .scrollpercent{
  right: 0 !important;
    left: unset;
} 
.scrollbase {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  background-color: gray;
  z-index: 20;
}
.scrollpercent {
  position: absolute;
  top: -85.71%;
  left: 0;
  width: 100px;
  z-index: 1002;
  background-color: black;
  /* transition: all .3s ease-in-out; */
}
.pink .scrollbase {
    background-color: #D0639D;

}
.pink .scrollpercent {
  background-color: #C25690;
}
.blue .scrollbase {
    background-color: #71B3EC;

}
.blue .scrollpercent {
  background-color: #3891DF;
}
.purple .scrollbase {
  background-color: #F1E5EE;
}
.purple .scrollpercent {
  background-color: #64395A;
}
.apri .scrollbase {
  background-color: #F5ABB0;
}
.apri .scrollpercent {
  background-color: #E59CA1;
}
.deeppurple .scrollbase {
  background-color: #957FEF;
}
.deeppurple .scrollpercent {
  background-color: #7663C2;
}
</style>
