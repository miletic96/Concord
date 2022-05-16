<template>
  <div></div>
</template>

<script>
export default {
  methods: {
    slider() {
      this.firstEnter();
      setTimeout(() => {
        this.firstLeave();
      }, 6000);
      setTimeout(() => {
        this.secondEnter();
      }, 8000);
      setTimeout(() => {
        this.secondLeave();
      }, 12600);
      setTimeout(() => {
        this.thirdEnter();
      }, 14600);
      setTimeout(() => {
        this.thirdLeave();
      }, 19600);

      // .to(".slide2 .slide-content",{ xPercent: -100, duration: 1})
      // .fromTo(".slide1 .slide-content",{ xPercent: -100, duration: 1},{ xPercent: 0, duration: 1})
    },
    firstEnter() {
      gsap
        .timeline()
        .to(".slide1", { xPercent: 0, duration: 0 })
        .to(".slide3",{ xPercent: 0, duration: 1})
        .to(".slide1 .slide-content", { xPercent: 0, duration: 1 })
        .to(".slide1 .overlay", { xPercent: 0, zIndex: -1, duration: 1 })
        .to(".slide1 .right-side img", { scale: 1.2, duration: 1.5 })
        .to(".slide1 .right-side img", { scale: 1, duration: 1.5 });
    },
    firstLeave() {
      gsap
        .timeline()
        .to(".slide1 .slide-content", { xPercent: -100, duration: 1 })
        .to(".slide1 .overlay", { xPercent: -100, zIndex: -1, duration: 1 });
    },
    secondEnter() {
      gsap
        .timeline()
        .to(".slide2 .slide-content", { xPercent: 100, duration: 0 })
        .to(".slide2 .overlay", { xPercent: 100, duration: 0 })
        .to(".slide2", { xPercent: -100, duration: 1 })
        .to(".slide1", { xPercent: -100, duration: 0 })
        .to(".slide2 .slide-content", { xPercent: 0, duration: 0.8 })
        .to(".slide2 .overlay", { xPercent: 0, zIndex: -1, duration: 0.8 })
        .to(".slide2 .right-side img", { scale: 1.2, duration: 1.5 })
        .to(".slide2 .right-side img", { scale: 1, duration: 1.5 });
    },
    secondLeave() {
      gsap
        .timeline()
        .to(".slide2 .slide-content", { xPercent: -100, duration: 1 })
        .to(".slide2 .overlay", { xPercent: -100, duration: 1 });
    },
    thirdEnter() {
      gsap
        .timeline()
        .to(".slide3 .slide-content", { xPercent: 100, duration: 0 })
        .to(".slide3 .overlay", { xPercent: 100, duration: 0 })
        .to(".slide3", { xPercent: -200, duration: 1 })
        .to(".slide1", { xPercent: -200, duration: 0 })
        .to(".slide2", { xPercent: -200, duration: 0 })
        .to(".slide3 .slide-content", { xPercent: 0, duration: 0.5 })
        .to(".slide3 .overlay", { xPercent: 0, zIndex: -1, duration: 0.5 })
        .to(".slide2 .slide-content", { xPercent: 0, duration: 0 })
        .to(".slide2 .overlay", { xPercent: 0, duration: 0 })
        .to(".slide3 .right-side img", { scale: 1.2, duration: 1.5 })
        .to(".slide3 .right-side img", { scale: 1, duration: 1.5 });
    },
    thirdLeave() {
      gsap
        .timeline()
        .to(".slide3 .slide-content", { xPercent: -100, duration: 1 })
        .to(".slide3 .overlay", { xPercent: -100, duration: 1 });
    }
  },
};
</script>

<style lang="scss" scoped></style>
