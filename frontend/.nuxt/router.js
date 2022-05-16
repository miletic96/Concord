import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fc05b9c4 = () => interopDefault(import('..\\pages\\about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _190b17e2 = () => interopDefault(import('..\\pages\\blog.vue' /* webpackChunkName: "pages/blog" */))
const _a9affdb6 = () => interopDefault(import('..\\pages\\careers.vue' /* webpackChunkName: "pages/careers" */))
const _41aee1e0 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _1c7c7706 = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _2a4e5bc3 = () => interopDefault(import('..\\pages\\index copy.vue' /* webpackChunkName: "pages/index copy" */))
const _fdc270ca = () => interopDefault(import('..\\pages\\insights.vue' /* webpackChunkName: "pages/insights" */))
const _64c04360 = () => interopDefault(import('..\\pages\\mobile\\index.vue' /* webpackChunkName: "pages/mobile/index" */))
const _48c44fc0 = () => interopDefault(import('..\\pages\\skills\\index.vue' /* webpackChunkName: "pages/skills/index" */))
const _19e6177a = () => interopDefault(import('..\\pages\\mobile\\careers.vue' /* webpackChunkName: "pages/mobile/careers" */))
const _a0437318 = () => interopDefault(import('..\\pages\\mobile\\test.vue' /* webpackChunkName: "pages/mobile/test" */))
const _cf9a6164 = () => interopDefault(import('..\\pages\\skills\\cro.vue' /* webpackChunkName: "pages/skills/cro" */))
const _27729fa4 = () => interopDefault(import('..\\pages\\skills\\mobile.vue' /* webpackChunkName: "pages/skills/mobile" */))
const _29e79f4e = () => interopDefault(import('..\\pages\\skills\\paid.vue' /* webpackChunkName: "pages/skills/paid" */))
const _5f30f96a = () => interopDefault(import('..\\pages\\skills\\seo.vue' /* webpackChunkName: "pages/skills/seo" */))
const _a620a8c6 = () => interopDefault(import('..\\pages\\articles\\_slug.vue' /* webpackChunkName: "pages/articles/_slug" */))
const _0577b05e = () => interopDefault(import('..\\pages\\categories\\_slug.vue' /* webpackChunkName: "pages/categories/_slug" */))
const _bec5be7c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-us",
    component: _fc05b9c4,
    name: "about-us"
  }, {
    path: "/blog",
    component: _190b17e2,
    name: "blog"
  }, {
    path: "/careers",
    component: _a9affdb6,
    name: "careers"
  }, {
    path: "/contact",
    component: _41aee1e0,
    name: "contact"
  }, {
    path: "/faq",
    component: _1c7c7706,
    name: "faq"
  }, {
    path: "/index%20copy",
    component: _2a4e5bc3,
    name: "index copy"
  }, {
    path: "/insights",
    component: _fdc270ca,
    name: "insights"
  }, {
    path: "/mobile",
    component: _64c04360,
    name: "mobile"
  }, {
    path: "/skills",
    component: _48c44fc0,
    name: "skills"
  }, {
    path: "/mobile/careers",
    component: _19e6177a,
    name: "mobile-careers"
  }, {
    path: "/mobile/test",
    component: _a0437318,
    name: "mobile-test"
  }, {
    path: "/skills/cro",
    component: _cf9a6164,
    name: "skills-cro"
  }, {
    path: "/skills/mobile",
    component: _27729fa4,
    name: "skills-mobile"
  }, {
    path: "/skills/paid",
    component: _29e79f4e,
    name: "skills-paid"
  }, {
    path: "/skills/seo",
    component: _5f30f96a,
    name: "skills-seo"
  }, {
    path: "/articles/:slug?",
    component: _a620a8c6,
    name: "articles-slug"
  }, {
    path: "/categories/:slug?",
    component: _0577b05e,
    name: "categories-slug"
  }, {
    path: "/",
    component: _bec5be7c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
