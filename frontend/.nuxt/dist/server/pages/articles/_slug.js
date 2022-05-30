exports.ids = [2];
exports.modules = {

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/articles/_slug.vue?vue&type=template&id=7973006e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode(((_vm.article.image)?("<div id=\"banner\""+(_vm._ssrAttr("data-src",_vm.getStrapiMedia(_vm.article.image.url)))+" uk-img class=\"uk-height-small uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding\"><h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1></div>"):"<!---->")+" <div class=\"uk-section\"><div class=\"uk-container uk-container-small\">"+((_vm.article.content)?("<div id=\"editor\">"+(_vm._s(_vm.$md.render(_vm.article.content)))+"</div>"):"<!---->")+" "+((_vm.article.published_at)?("<p>"+_vm._ssrEscape("\n        "+_vm._s(_vm.moment(_vm.article.published_at).format("Do MMM"))+"\n      ")+"</p>"):"<!---->")+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/articles/_slug.vue?vue&type=template&id=7973006e&

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(65);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./utils/medias.js
var medias = __webpack_require__(72);

// EXTERNAL MODULE: ./utils/seo.js
var seo = __webpack_require__(75);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/articles/_slug.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  async asyncData({
    $strapi,
    params
  }) {
    const matchingArticles = await $strapi.find("articles", {
      slug: params.slug
    });
    return {
      article: matchingArticles[0],
      global: await $strapi.find("global")
    };
  },

  data() {
    return {
      apiUrl: "http://localhost:1337"
    };
  },

  methods: {
    moment: external_moment_default.a,
    getStrapiMedia: medias["a" /* getStrapiMedia */]
  },

  head() {
    const {
      defaultSeo,
      favicon,
      siteName
    } = this.global; // Merge default and article-specific SEO data

    const fullSeo = { ...defaultSeo,
      metaTitle: this.article.title,
      metaDescription: this.article.description,
      shareImage: this.article.image
    };
    return {
      titleTemplate: `%s | ${siteName}`,
      title: fullSeo.metaTitle,
      meta: Object(seo["a" /* getMetaTags */])(fullSeo),
      link: [{
        rel: "favicon",
        href: Object(medias["a" /* getStrapiMedia */])(favicon.url)
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/articles/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var articles_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/articles/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  articles_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "19443b7b"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getStrapiMedia; });
function getStrapiMedia(url) {
  // Check if URL is a local path
  if (url.startsWith("/")) {
    // Prepend Strapi address
    return `${"http://localhost:1337"}${url}`;
  } // Otherwise return full URL


  return url;
}

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getMetaTags; });
/* harmony import */ var _medias__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);

function getMetaTags(seo) {
  const tags = [];

  if (seo.metaTitle) {
    tags.push({
      property: "og:title",
      content: seo.metaTitle
    }, {
      name: "twitter:title",
      content: seo.metaTitle
    });
  }

  if (seo.metaDescription) {
    tags.push({
      name: "description",
      content: seo.metaDescription
    }, {
      property: "og:description",
      content: seo.metaDescription
    }, {
      name: "twitter:description",
      content: seo.metaDescription
    });
  }

  if (seo.shareImage) {
    const imageUrl = Object(_medias__WEBPACK_IMPORTED_MODULE_0__[/* getStrapiMedia */ "a"])(seo.shareImage.url);
    tags.push({
      name: "image",
      content: imageUrl
    }, {
      property: "og:image",
      content: imageUrl
    }, {
      name: "twitter:image",
      content: imageUrl
    });
  }

  if (seo.article) {
    tags.push({
      property: "og:type",
      content: "article"
    });
  }

  tags.push({
    name: "twitter:card",
    content: "summary_large_image"
  });
  return tags;
}

/***/ })

};;
//# sourceMappingURL=_slug.js.map