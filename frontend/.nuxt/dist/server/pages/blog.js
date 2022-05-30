exports.ids = [3];
exports.modules = {

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".blue .text-bg{background:linear-gradient(180deg,rgba(0,212,255,0) 55%,#020024 0,#71b3ec 0)}.heading .text-bg{font-size:3.5vw}.heading{margin-bottom:100px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog.vue?vue&type=template&id=15073dd4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"uk-section\">","</div>",[_vm._ssrNode("<div class=\"uk-container uk-container-large\">","</div>",[_vm._ssrNode("<div class=\"blue heading\"><h1><span class=\"text-bg\">Insights</span></h1></div> "),_c('Articles',{attrs:{"articles":_vm.articles}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"blue\">","</div>",[_c('footercontact')],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blog.vue?vue&type=template&id=15073dd4&

// EXTERNAL MODULE: ./components/Articles.vue + 9 modules
var Articles = __webpack_require__(88);

// EXTERNAL MODULE: ./utils/seo.js
var utils_seo = __webpack_require__(75);

// EXTERNAL MODULE: ./utils/medias.js
var medias = __webpack_require__(72);

// EXTERNAL MODULE: ./components/footercontact.vue + 4 modules
var footercontact = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog.vue?vue&type=script&lang=js&
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




/* harmony default export */ var blogvue_type_script_lang_js_ = ({
  components: {
    Articles: Articles["a" /* default */],
    footercontact: footercontact["a" /* default */]
  },

  async asyncData({
    $strapi
  }) {
    return {
      articles: await $strapi.find("articles"),
      homepage: await $strapi.find("homepage"),
      global: await $strapi.find("global")
    };
  },

  head() {
    const {
      seo
    } = this.homepage;
    const {
      defaultSeo,
      favicon,
      siteName
    } = this.global; // Merge default and article-specific SEO data

    const fullSeo = { ...defaultSeo,
      ...seo
    };
    return {
      titleTemplate: `%s | ${siteName}`,
      title: fullSeo.metaTitle,
      meta: Object(utils_seo["a" /* getMetaTags */])(fullSeo),
      link: [{
        rel: "favicon",
        href: Object(medias["a" /* getStrapiMedia */])(favicon.url)
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/blog.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_blogvue_type_script_lang_js_ = (blogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/blog.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(112)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2f981072"
  
)

/* harmony default export */ var blog = __webpack_exports__["default"] = (component.exports);

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

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("4ff0e9ef", content, true, context)
};

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

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".insights .uk-card{border-radius:35px;min-height:300px}.image-article{display:none}.image-article img{max-height:300px}.insights .left-articles{width:33%}.insights .left-articles .uk-link-reset:first-child .image-article,.insights .right-articles-bot .uk-link-reset:first-child .image-article{display:block}.insights .articles{width:100%}.insights .right-articles-bot .titleAndImage{display:flex}.insights .articles .ToTheEndArticles{width:100%;display:flex;justify-content:space-between;margin-right:40px}.insights .articles .ToTheEndArticles a{width:30%}.insights .left-articles .uk-card{margin-bottom:40px;height:500px}.insights .right-articles{width:66%;margin-left:40px;margin-right:40px}.insights .right-articles-top{display:flex}.insights .right-articles-bot{display:flex;flex-direction:column}.insights .right-articles-bot a{width:100%}.datetime{color:#fff;font-size:.8vw}.dateday{font-weight:700;font-size:1vw}#title{font-size:1.5vw;color:#3b3b3b}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Articles.vue?vue&type=template&id=9d35f0a0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"insights"},[_vm._ssrNode("<div class=\" articles d-flex\">","</div>",[_vm._ssrNode("<div class=\"left-articles\">","</div>",_vm._l((_vm.leftArticles),function(article){return _c('ArticleCard',{key:article.id,attrs:{"article":article}})}),1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"d-flex flex-column right-articles\">","</div>",[_vm._ssrNode("<div uk-grid class=\"uk-child-width-1-2@m uk-grid-match right-articles-top\">","</div>",_vm._l((_vm.rightArticles),function(article){return _c('ArticleCard',{key:article.id,attrs:{"article":article}})}),1),_vm._ssrNode(" "),_vm._ssrNode("<div uk-grid class=\"uk-child-width-1-2@m uk-grid-match right-articles-bot\">","</div>",_vm._l((_vm.rightArticlesBottom),function(article){return _c('ArticleCard',{key:article.id,attrs:{"article":article}})}),1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"articles d-flex\">","</div>",[_vm._ssrNode("<div class=\"ToTheEndArticles\">","</div>",_vm._l((_vm.ToTheEndArticles),function(article){return _c('ArticleCard',{key:article.id,attrs:{"article":article}})}),1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Articles.vue?vue&type=template&id=9d35f0a0&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/ArticleCard.vue?vue&type=template&id=17b0437b&
var ArticleCardvue_type_template_id_17b0437b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nuxt-link',{key:_vm.article.id,staticClass:"uk-link-reset",attrs:{"to":{ name: 'articles-slug', params: { slug: _vm.article.slug } }}},[_c('div',{staticClass:"uk-card uk-card-muted"},[_c('div',{staticClass:"uk-card-body"},[_c('div',{staticClass:"titleAndImage"},[_c('div',{staticClass:"dataAndTitle"},[(_vm.article.category)?_c('p',{staticClass:"uk-text-uppercase datetime pt-med",attrs:{"id":"category"}},[_c('span',{staticClass:"dateday"},[_vm._v(_vm._s(_vm.moment(_vm.article.published_at).format("DD")))]),_c('br'),_vm._v("\n          "+_vm._s(_vm.moment(_vm.article.published_at).format("MMM"))+"\n                  ")]):_vm._e(),_vm._v(" "),_c('p',{staticClass:"uk-text-large pt-med",attrs:{"id":"title"}},[_vm._v(_vm._s(_vm.article.title))])]),_vm._v(" "),_c('div',{staticClass:"image-article"},[_c('img',{attrs:{"src":_vm.getStrapiMedia(_vm.article.image.url),"height":"100"}})])])])])])}
var ArticleCardvue_type_template_id_17b0437b_staticRenderFns = []


// CONCATENATED MODULE: ./components/ArticleCard.vue?vue&type=template&id=17b0437b&

// EXTERNAL MODULE: ./utils/medias.js
var medias = __webpack_require__(72);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(65);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ArticleCard.vue?vue&type=script&lang=js&
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


/* harmony default export */ var ArticleCardvue_type_script_lang_js_ = ({
  props: {
    article: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    getStrapiMedia: medias["a" /* getStrapiMedia */],
    moment: external_moment_default.a
  }
});
// CONCATENATED MODULE: ./components/ArticleCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ArticleCardvue_type_script_lang_js_ = (ArticleCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/ArticleCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ArticleCardvue_type_script_lang_js_,
  ArticleCardvue_type_template_id_17b0437b_render,
  ArticleCardvue_type_template_id_17b0437b_staticRenderFns,
  false,
  null,
  null,
  "764539f8"
  
)

/* harmony default export */ var ArticleCard = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Articles.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Articlesvue_type_script_lang_js_ = ({
  components: {
    ArticleCard: ArticleCard
  },
  props: {
    articles: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    leftArticlesCount() {
      return Math.ceil(this.articles.length / 5);
    },

    leftArticles() {
      return this.articles.slice(0, 2);
    },

    rightArticles() {
      return this.articles.slice(2, 4);
    },

    rightArticlesBottom() {
      return this.articles.slice(4, 6);
    },

    // rightArticlesBottom2() {
    //   return this.articles.slice(6, 8);
    // },
    ToTheEndArticles() {
      return this.articles.slice(6, this.articles.length);
    }

  },
  methods: {
    GetRandomColor() {
      let colors = ['#8976D2', '#F5ABB0', '#E9E9E9', '#71B3EC', '#3891DF '];
      return colors[Math.floor(Math.random() * colors.length)];
    }

  },

  mounted() {
    document.querySelectorAll(".uk-card").forEach(el => {
      el.style.backgroundColor = this.GetRandomColor();
    });
  }

});
// CONCATENATED MODULE: ./components/Articles.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Articlesvue_type_script_lang_js_ = (Articlesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Articles.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(79)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Articles_component = Object(componentNormalizer["a" /* default */])(
  components_Articlesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "e14a014a"
  
)

/* harmony default export */ var Articles = __webpack_exports__["a"] = (Articles_component.exports);

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(113);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("151b4c2e", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=blog.js.map