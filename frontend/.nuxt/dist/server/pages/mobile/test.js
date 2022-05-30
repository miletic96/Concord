exports.ids = [13];
exports.modules = {

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/mobile/test.vue?vue&type=template&id=271a9cfe&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/mobile/test.vue?vue&type=template&id=271a9cfe&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/mobile/test.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var testvue_type_script_lang_js_ = ({
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
      }, 19600); // .to(".slide2 .slide-content",{ xPercent: -100, duration: 1})
      // .fromTo(".slide1 .slide-content",{ xPercent: -100, duration: 1},{ xPercent: 0, duration: 1})
    },

    firstEnter() {
      gsap.timeline().to(".slide1", {
        xPercent: 0,
        duration: 0
      }).to(".slide3", {
        xPercent: 0,
        duration: 1
      }).to(".slide1 .slide-content", {
        xPercent: 0,
        duration: 1
      }).to(".slide1 .overlay", {
        xPercent: 0,
        zIndex: -1,
        duration: 1
      }).to(".slide1 .right-side img", {
        scale: 1.2,
        duration: 1.5
      }).to(".slide1 .right-side img", {
        scale: 1,
        duration: 1.5
      });
    },

    firstLeave() {
      gsap.timeline().to(".slide1 .slide-content", {
        xPercent: -100,
        duration: 1
      }).to(".slide1 .overlay", {
        xPercent: -100,
        zIndex: -1,
        duration: 1
      });
    },

    secondEnter() {
      gsap.timeline().to(".slide2 .slide-content", {
        xPercent: 100,
        duration: 0
      }).to(".slide2 .overlay", {
        xPercent: 100,
        duration: 0
      }).to(".slide2", {
        xPercent: -100,
        duration: 1
      }).to(".slide1", {
        xPercent: -100,
        duration: 0
      }).to(".slide2 .slide-content", {
        xPercent: 0,
        duration: 0.8
      }).to(".slide2 .overlay", {
        xPercent: 0,
        zIndex: -1,
        duration: 0.8
      }).to(".slide2 .right-side img", {
        scale: 1.2,
        duration: 1.5
      }).to(".slide2 .right-side img", {
        scale: 1,
        duration: 1.5
      });
    },

    secondLeave() {
      gsap.timeline().to(".slide2 .slide-content", {
        xPercent: -100,
        duration: 1
      }).to(".slide2 .overlay", {
        xPercent: -100,
        duration: 1
      });
    },

    thirdEnter() {
      gsap.timeline().to(".slide3 .slide-content", {
        xPercent: 100,
        duration: 0
      }).to(".slide3 .overlay", {
        xPercent: 100,
        duration: 0
      }).to(".slide3", {
        xPercent: -200,
        duration: 1
      }).to(".slide1", {
        xPercent: -200,
        duration: 0
      }).to(".slide2", {
        xPercent: -200,
        duration: 0
      }).to(".slide3 .slide-content", {
        xPercent: 0,
        duration: 0.5
      }).to(".slide3 .overlay", {
        xPercent: 0,
        zIndex: -1,
        duration: 0.5
      }).to(".slide2 .slide-content", {
        xPercent: 0,
        duration: 0
      }).to(".slide2 .overlay", {
        xPercent: 0,
        duration: 0
      }).to(".slide3 .right-side img", {
        scale: 1.2,
        duration: 1.5
      }).to(".slide3 .right-side img", {
        scale: 1,
        duration: 1.5
      });
    },

    thirdLeave() {
      gsap.timeline().to(".slide3 .slide-content", {
        xPercent: -100,
        duration: 1
      }).to(".slide3 .overlay", {
        xPercent: -100,
        duration: 1
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/mobile/test.vue?vue&type=script&lang=js&
 /* harmony default export */ var mobile_testvue_type_script_lang_js_ = (testvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/mobile/test.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  mobile_testvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "271a9cfe",
  "7ad069ec"
  
)

/* harmony default export */ var test = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=test.js.map