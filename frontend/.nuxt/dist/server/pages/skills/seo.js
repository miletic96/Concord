exports.ids = [18];
exports.modules = {

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(160);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("0a2cdf90", content, true, context)
};

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/people.753c935.png";

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/checkmark.136715b.png";

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/graph.ff8b14c.png";

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/listcheck.7acea50.png";

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/audit-seo.6361928.svg";

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/local-seo.e1a1280.svg";

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/global-seo.c6c5081.svg";

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/technical-seo.4fd4edd.svg";

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_seo_vue_vue_type_style_index_0_id_b3711852_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(105);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_seo_vue_vue_type_style_index_0_id_b3711852_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_seo_vue_vue_type_style_index_0_id_b3711852_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_seo_vue_vue_type_style_index_0_id_b3711852_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_seo_vue_vue_type_style_index_0_id_b3711852_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(12);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(161);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(87);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(162);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(163);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".backgroundseo[data-v-b3711852]{height:100vh;width:100%;position:relative;padding-left:120px;margin-bottom:150px}.backgroundseo[data-v-b3711852]:after{content:\" \";position:absolute;height:1949px;background-size:100vw;width:100%;z-index:2;top:-50vh;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-position:calc(49.7vw - 120px);background-repeat:no-repeat}.seo[data-v-b3711852]{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");background-attachment:fixed;background-position:50vw;background-repeat:no-repeat;background-size:100vw;overflow:hidden}.seos[data-v-b3711852]{padding-left:120px;margin-bottom:150px;margin-top:150px;z-index:4}.seo-feature[data-v-b3711852]{border-radius:50px;background-color:#f1e5ee;max-width:340px;min-height:340px;padding:25px 40px;margin:auto;filter:drop-shadow(-10px 10px 8px rgba(0,0,0,.3));display:flex;flex-direction:column;z-index:4}.seo-feature img[data-v-b3711852]{height:80px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin-right:auto;margin-left:auto;margin-bottom:35px}.selector[data-v-b3711852],.selector1[data-v-b3711852]{cursor:pointer}.seo-top[data-v-b3711852]{width:100%;height:100vh;background-position:50vw;background-repeat:no-repeat;background-size:100vw;padding-left:120px;padding-top:80px}.seo-top .top-text[data-v-b3711852]{display:flex;flex-direction:column;justify-content:space-around;height:80%}.seo-top .top-content[data-v-b3711852],.seo-top .top-content .row[data-v-b3711852],.seo-top .top-content .row .col-lg-6[data-v-b3711852]{height:100vh}@media screen and (max-width:992px){.seo-top[data-v-b3711852],.seo-top .top-content[data-v-b3711852]{background:none}}.seo-selector-row[data-v-b3711852]{display:flex}.seo-selector-row div[data-v-b3711852]{margin-right:100px}.seo-service[data-v-b3711852]{display:none}.seo-service.show[data-v-b3711852]{display:flex}.selector[data-v-b3711852],.selector1[data-v-b3711852]{z-index:6}.selector.active[data-v-b3711852]{color:#c592ba}.seo-service .seo-first[data-v-b3711852]{font-size:2vw;margin-bottom:40px;z-index:6}.seo-service[data-v-b3711852]{z-index:6;margin-top:100px}.seo-service h2[data-v-b3711852]{font-size:5vw;margin-bottom:40px;z-index:6}.seo-service h3[data-v-b3711852]{font-size:2.5vw;margin-bottom:40px;z-index:6}.seo-service .seo-texts[data-v-b3711852]{font-size:1.2vw;margin-bottom:40px;z-index:26}.seo-service-image[data-v-b3711852]{flex-direction:column;justify-content:center;display:flex}.seo-service-image img[data-v-b3711852]{margin:auto;text-align:center;width:600px}@media screen and (max-width:992px){.scrollbase[data-v-b3711852]{display:none}.seo[data-v-b3711852]{background-attachment:scroll;background-position:10vw -30vh;background-size:180vw}.backgroundseo[data-v-b3711852],.seo-top[data-v-b3711852],.seos[data-v-b3711852]{padding-left:15px;padding-right:15px}.seo-top[data-v-b3711852]{padding-top:0;margin-top:150px}.seos[data-v-b3711852]{margin-top:50px}.seo-feature[data-v-b3711852]{margin-bottom:50px}.backgroundseo[data-v-b3711852]:after,.seo-service .seo-first[data-v-b3711852]{display:none}.seo-service h2[data-v-b3711852]{font-size:26px;font-family:FuturaPtBk}.seo-service .seo-texts[data-v-b3711852],.seo-service h3[data-v-b3711852]{font-size:16px;font-family:FuturaPtBk}.seo-service-image[data-v-b3711852]{display:none}.backgroundseo[data-v-b3711852]{height:auto}.seo-selector-row[data-v-b3711852]{margin-left:-15px;margin-right:-15px}.seo-selector-row .selector[data-v-b3711852]{width:28%;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");background-repeat:no-repeat;background-position:50%;margin:0 0 0 -15px;background-size:cover}.seo-selector-row .selector[data-v-b3711852],.top-selectors .selector1[data-v-b3711852]{height:66px;display:flex;flex-direction:column;justify-content:center;text-align:center;color:#fff}.top-selectors .selector1[data-v-b3711852]{width:25%;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");background-repeat:no-repeat;background-position:50%;background-size:cover;margin:0 5px}.top-selectors .selector1 a[data-v-b3711852]{text-decoration:none;color:#fff}.seo-selector-row .selector[data-v-b3711852]:first-child{margin-left:0}.seo-selector-row .selector.active[data-v-b3711852]{z-index:23;color:#c592ba}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 161:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTQ5IiBoZWlnaHQ9IjE5NDkiIHZpZXdCb3g9IjAgMCAxOTQ5IDE5NDkiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05NDYgLTE1MTIpIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjE2IDE3ODEpIiBmaWxsPSJub25lIiBzdHJva2U9IiNjNTkyYmEiIHN0cm9rZS13aWR0aD0iNiI+PGVsbGlwc2UgY3g9IjcwNS41IiBjeT0iNzA2IiByeD0iNzA1LjUiIHJ5PSI3MDYiIHN0cm9rZT0ibm9uZSIvPjxlbGxpcHNlIGN4PSI3MDUuNSIgY3k9IjcwNiIgcng9IjcwMi41IiByeT0iNzAzIiBmaWxsPSJub25lIi8+PC9nPjxjaXJjbGUgY3g9IjQwNS41IiBjeT0iNDA1LjUiIHI9IjQwNS41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNTE1IDIwODEpIiBmaWxsPSIjZjFlNWVlIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTQ2IDE1MTIpIiBmaWxsPSJub25lIiBzdHJva2U9IiNjNTkyYmEiIHN0cm9rZS13aWR0aD0iNiI+PGNpcmNsZSBjeD0iOTc0LjUiIGN5PSI5NzQuNSIgcj0iOTc0LjUiIHN0cm9rZT0ibm9uZSIvPjxjaXJjbGUgY3g9Ijk3NC41IiBjeT0iOTc0LjUiIHI9Ijk3MS41IiBmaWxsPSJub25lIi8+PC9nPjwvZz48L3N2Zz4="

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/seobackground.2d4fd7a.png";

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2My44NDMiIGhlaWdodD0iNTQuNzAxIiB2aWV3Qm94PSIwIDAgNjMuODQzIDU0LjcwMSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI0IC00NjMpIj48cGF0aCBkPSJNMCwwSDU0LjE3NWw5LjY2OSwyNy43NTJMNTQuMTc1LDU0LjdIMEw1LjYsMjcuNzUyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQgNDYzKSIgZmlsbD0iIzlmNWY5MSIvPjwvZz48L3N2Zz4="

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/skills/seo.vue?vue&type=template&id=b3711852&scoped=true&lang=vue-html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"purple seo"},[_c('scrollindi'),_vm._ssrNode(" <div class=\"seo-top\" data-v-b3711852><div class=\"top-content\" data-v-b3711852><div class=\"row\" data-v-b3711852><div class=\"col-lg-6\" data-v-b3711852><div class=\"top-text\" data-v-b3711852><h1 data-v-b3711852>SEO</h1> <h2 data-v-b3711852>\n              SEO has become an extensive part of the industry, attracting\n              organic traffic by exposing your website through search engines.\n            </h2> <div class=\"seo-selector-row top-selectors d-lg-none\" data-v-b3711852><div id=\"selector11\" class=\"selector1 active\" data-v-b3711852><a href=\"#seo-services\" data-v-b3711852>audit</a></div> <div id=\"selector12\" class=\"selector1\" data-v-b3711852><a href=\"#seo-services\" data-v-b3711852>local</a></div> <div id=\"selector13\" class=\"selector1\" data-v-b3711852><a href=\"#seo-services\" data-v-b3711852>global</a></div> <div id=\"selector14\" class=\"selector1\" data-v-b3711852><a href=\"#seo-services\" data-v-b3711852>Technical</a></div></div> <div class=\"paragraphs\" data-v-b3711852><p data-v-b3711852>\n                While potential customers are in need of a certain\n                service/product that you can supply, you most definitely want\n                to be the first option in their search result.\n              </p> <p data-v-b3711852>\n                In simple terms, search engine optimization is the method of\n                enhancing your website's exposure for associated searches. The\n                higher your page's exposure in search results, the more likely\n                you are to gain attention and attract new and existing\n                customers to your business. Since people perform trillions of\n                searches every year, often with commercial intent to find\n                knowledge about goods and services, SEO is a critical\n                component of digital marketing. Brand's predominant source of\n                digital traffic is mostly search, which is supplemented by\n                other marketing platforms. A higher ranking in search results\n                than your competitors will have a significant effect on\n                profits.\n              </p> <p data-v-b3711852>\n                Using our company's working method we have experienced great\n                results, achieving our clients desired accomplishment\n              </p></div></div></div></div></div></div> <div class=\"seos\" data-v-b3711852><div class=\"cards\" data-v-b3711852><div class=\"row\" data-v-b3711852><div class=\"col-xl-3 seo-feature\" data-v-b3711852><img"+(_vm._ssrAttr("src",__webpack_require__(151)))+" alt data-v-b3711852> <p data-v-b3711852>\n            Our team at Concord have some of the finest SEO specialists in the\n            industry that can acquire more leads and increase sales by being\n            at the top of Google.\n          </p></div> <div class=\"col-xl-3 seo-feature\" data-v-b3711852><img"+(_vm._ssrAttr("src",__webpack_require__(152)))+" alt data-v-b3711852> <p data-v-b3711852>\n            The importance of forming a precise strategy is an art that our\n            professionals have already mastered in.\n          </p></div> <div class=\"col-xl-3 seo-feature\" data-v-b3711852><img"+(_vm._ssrAttr("src",__webpack_require__(153)))+" alt data-v-b3711852> <p data-v-b3711852>\n            Our SEO services are assembled to suit your needs with\n            customizable strategy planning achieving your targets and goals.\n          </p></div> <div class=\"col-xl-3 seo-feature\" data-v-b3711852><img"+(_vm._ssrAttr("src",__webpack_require__(154)))+" alt data-v-b3711852> <p data-v-b3711852>\n            We provide a wide range of SEO services from consulting and\n            strategy planning to implementing - everything according to Google\n            compliances for the highest rankings and the slightest chance of\n            being penalized.\n          </p></div></div></div></div> <div class=\"backgroundseo\" data-v-b3711852><div id=\"seo-services\" class=\"seo-services\" data-v-b3711852><div class=\"row\" data-v-b3711852><div id=\"seo1\" class=\"seo-service show\" data-v-b3711852><div class=\"col-lg-6\" data-v-b3711852><p class=\"seo-first\" data-v-b3711852>SEO</p> <h2 data-v-b3711852>Audit SEO</h2> <div class=\"row\" data-v-b3711852><h3 data-v-b3711852>\n                Our checkups are done on a daily basis reassuring the absence\n                of any unpleasant surprises.\n              </h3></div> <p class=\"seo-texts\" data-v-b3711852>\n              As part of this service we conduct an extensive evaluation\n              process of your web presence in search engine results pages,\n              determining profound issues and lacking areas that are detaining\n              your websites performance and success.\n            </p></div> <div class=\"col-lg-6 seo-service-image\" data-v-b3711852><img"+(_vm._ssrAttr("src",__webpack_require__(155)))+" alt data-v-b3711852></div></div> <div id=\"seo2\" class=\"seo-service pt-med\" data-v-b3711852><div class=\"col-lg-6\" data-v-b3711852><p class=\"seo-first\" data-v-b3711852>SEO</p> <h2 data-v-b3711852>Local SEO</h2> <h3 data-v-b3711852>\n              Local SEO increases a websites visibility within a required\n              area.\n            </h3> <p class=\"seo-texts\" data-v-b3711852>\n              When using this service, your website has the ability to use\n              certain pre-defined keywords in order to optimize site\n              performance to appear on local searches and gain potential\n              customers <br data-v-b3711852>\n              Many websites targeting a specific area have experienced great\n              results in attracting organic traffic with our SEO service.\n            </p></div> <div class=\"col-lg-6 seo-service-image\" data-v-b3711852><img"+(_vm._ssrAttr("src",__webpack_require__(156)))+" alt data-v-b3711852></div></div> <div id=\"seo3\" class=\"seo-service pt-med\" data-v-b3711852><div class=\"col-lg-6\" data-v-b3711852><p class=\"seo-first\" data-v-b3711852>SEO</p> <h2 data-v-b3711852>Global SEO</h2> <h3 data-v-b3711852>\n              Our experts will know how to plan a strategic SEO approach to\n              achieve your required goal, and win the fierce competition in\n              global SEO.\n            </h3> <p class=\"seo-texts\" data-v-b3711852>\n              SEO strategy that focuses in increasing a websites visibility\n              and reach in a global scale. Many times a business experiences\n              growth and starts getting involved in different countries and\n              expanding their brand, accordingly their SEO strategy needs to\n              change and adjust to the new location. When extending to global\n              reach the competition over the visibility of user's search\n              result increases, and different approach must be taken to\n              succeed.\n            </p></div> <div class=\"col-lg-6 seo-service-image\" data-v-b3711852><img"+(_vm._ssrAttr("src",__webpack_require__(157)))+" alt data-v-b3711852></div></div> <div id=\"seo4\" class=\"seo-service pt-med\" data-v-b3711852><div class=\"col-lg-6\" data-v-b3711852><p class=\"seo-first\" data-v-b3711852>SEO</p> <h2 data-v-b3711852>Technical SEO</h2> <h3 data-v-b3711852></h3> <p class=\"seo-texts\" data-v-b3711852>1.\tThis service refers and applies to the maintenance and upgrade of a websites infrastructure to improve its page rank and make sure users on-page experience is pleasant and is easy to use. The investment on the websites technical characteristics includes high page speed, easy crawl, internal linking etc. reassuring an effective outcome in search engine result and users satisfaction.</p></div> <div class=\"col-lg-6 seo-service-image\" data-v-b3711852><img"+(_vm._ssrAttr("src",__webpack_require__(158)))+" alt data-v-b3711852></div></div> <div id=\"seo5\" class=\"seo-service pt-med\" data-v-b3711852><div class=\"col-lg-6\" data-v-b3711852><p class=\"seo-first\" data-v-b3711852></p> <h2 data-v-b3711852></h2> <h3 data-v-b3711852></h3> <p class=\"seo-texts\" data-v-b3711852></p></div> <div class=\"col-lg-6\" data-v-b3711852><img src alt data-v-b3711852></div></div></div> <div class=\"seo-selector-row\" data-v-b3711852><div id=\"selector1\" class=\"selector active\" data-v-b3711852><span data-v-b3711852>audit</span></div> <div id=\"selector2\" class=\"selector\" data-v-b3711852><span data-v-b3711852>local</span></div> <div id=\"selector3\" class=\"selector\" data-v-b3711852><span data-v-b3711852>global</span></div> <div id=\"selector4\" class=\"selector\" data-v-b3711852><span data-v-b3711852>Technical</span></div></div></div></div> "),_c('footercontact')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/skills/seo.vue?vue&type=template&id=b3711852&scoped=true&lang=vue-html&

// EXTERNAL MODULE: ./components/scrollindi.vue + 4 modules
var scrollindi = __webpack_require__(71);

// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(63);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);

// EXTERNAL MODULE: external "gsap/dist/ScrollTrigger"
var ScrollTrigger_ = __webpack_require__(64);
var ScrollTrigger_default = /*#__PURE__*/__webpack_require__.n(ScrollTrigger_);

// EXTERNAL MODULE: ./components/footercontact.vue + 4 modules
var footercontact = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/skills/seo.vue?vue&type=script&lang=js&
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




external_gsap_default.a.registerPlugin(ScrollTrigger_default.a);
/* harmony default export */ var seovue_type_script_lang_js_ = ({
  components: {
    scrollindi: scrollindi["a" /* default */],
    footercontact: footercontact["a" /* default */]
  },

  data() {
    return {
      title: "Organic SEO | Concord Media"
    };
  },

  head() {
    return {
      title: this.title
    };
  },

  layout: "default",
  methods: {
    Press(el) {
      let id = parseInt(el);
      let selectors = document.querySelectorAll(".selector");
      let seoservices = document.querySelectorAll(".seo-service");
      selectors.forEach(function (selector) {
        if (selector.classList.contains("active")) {
          selector.classList.remove("active");
        }
      });
      seoservices.forEach(function (seoservice) {
        if (seoservice.classList.contains("show")) {
          seoservice.classList.remove("show");
        }
      });
      let quid = "selector" + el;
      let anid = "seo" + el;
      console.log(quid + " " + anid);
      document.getElementById(quid).classList.add("active");
      document.getElementById(anid).classList.add("show");
    },

    Press1(el) {
      let id = parseInt(el);
      let selectors1 = document.querySelectorAll(".selector1");
      let selectors2 = document.querySelectorAll(".selector");
      let seoservices = document.querySelectorAll(".seo-service");
      selectors1.forEach(function (selector) {
        if (selector.classList.contains("active")) {
          selector.classList.remove("active");
        }
      });
      selectors2.forEach(function (selector) {
        if (selector.classList.contains("active")) {
          selector.classList.remove("active");
        }
      });
      seoservices.forEach(function (seoservice) {
        if (seoservice.classList.contains("show")) {
          seoservice.classList.remove("show");
        }
      });
      let quid1 = "selector1" + el;
      let quid2 = "selector" + el;
      let anid = "seo" + el; // console.log(quid + " " + anid);

      document.getElementById(quid1).classList.add("active");
      document.getElementById(quid2).classList.add("active");
      document.getElementById(anid).classList.add("show");
    }

  }
});
// CONCATENATED MODULE: ./pages/skills/seo.vue?vue&type=script&lang=js&
 /* harmony default export */ var skills_seovue_type_script_lang_js_ = (seovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/skills/seo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(159)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  skills_seovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b3711852",
  "8b0c87da"
  
)

/* harmony default export */ var seo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(70);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("76049033", content, true, context)
};

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_scrollindi_vue_vue_type_style_index_0_id_bc14ca72_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_scrollindi_vue_vue_type_style_index_0_id_bc14ca72_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_scrollindi_vue_vue_type_style_index_0_id_bc14ca72_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_scrollindi_vue_vue_type_style_index_0_id_bc14ca72_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_scrollindi_vue_vue_type_style_index_0_id_bc14ca72_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".deeppurple.contact .scrollbase[data-v-bc14ca72],.deeppurple.contact .scrollpercent[data-v-bc14ca72]{right:0!important;left:unset}.scrollbase[data-v-bc14ca72]{top:0;height:100vh;background-color:grey;z-index:20}.scrollbase[data-v-bc14ca72],.scrollpercent[data-v-bc14ca72]{position:fixed;left:0;width:100px}.scrollpercent[data-v-bc14ca72]{top:-100%;height:100%;z-index:1002;background-color:#000}.pink .scrollbase[data-v-bc14ca72]{background-color:#d0639d}.pink .scrollpercent[data-v-bc14ca72]{background-color:#c25690}.blue .scrollbase[data-v-bc14ca72]{background-color:#71b3ec}.blue .scrollpercent[data-v-bc14ca72]{background-color:#3891df}.purple .scrollbase[data-v-bc14ca72]{background-color:#f1e5ee}.purple .scrollpercent[data-v-bc14ca72]{background-color:#64395a}.apri .scrollbase[data-v-bc14ca72]{background-color:#f5abb0}.apri .scrollpercent[data-v-bc14ca72]{background-color:#e59ca1}.deeppurple .scrollbase[data-v-bc14ca72]{background-color:#957fef}.deeppurple .scrollpercent[data-v-bc14ca72]{background-color:#7663c2}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/scrollindi.vue?vue&type=template&id=bc14ca72&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"scrollbase"},[_vm._ssrNode("<div id=\"scrollper\" class=\"scrollpercent\" data-v-bc14ca72></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/scrollindi.vue?vue&type=template&id=bc14ca72&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/scrollindi.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var scrollindivue_type_script_lang_js_ = ({
  mounted: function () {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      var winScroll = window.pageYOffset;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = winScroll / height * 100;
      document.getElementById("scrollper").style.top = scrolled - 100 + "%";
    }

  }
});
// CONCATENATED MODULE: ./components/scrollindi.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_scrollindivue_type_script_lang_js_ = (scrollindivue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/scrollindi.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(69)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_scrollindivue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "bc14ca72",
  "3f1e8735"
  
)

/* harmony default export */ var scrollindi = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/seoback.bcaf0e5.svg";

/***/ })

};;
//# sourceMappingURL=seo.js.map