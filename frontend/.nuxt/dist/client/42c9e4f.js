(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{693:function(e,t,n){"use strict";n.r(t);n(72);var o={methods:{slider:function(){var e=this;this.firstEnter(),setTimeout((function(){e.firstLeave()}),6e3),setTimeout((function(){e.secondEnter()}),8e3),setTimeout((function(){e.secondLeave()}),12600),setTimeout((function(){e.thirdEnter()}),14600),setTimeout((function(){e.thirdLeave()}),19600)},firstEnter:function(){gsap.timeline().to(".slide1",{xPercent:0,duration:0}).to(".slide3",{xPercent:0,duration:1}).to(".slide1 .slide-content",{xPercent:0,duration:1}).to(".slide1 .overlay",{xPercent:0,zIndex:-1,duration:1}).to(".slide1 .right-side img",{scale:1.2,duration:1.5}).to(".slide1 .right-side img",{scale:1,duration:1.5})},firstLeave:function(){gsap.timeline().to(".slide1 .slide-content",{xPercent:-100,duration:1}).to(".slide1 .overlay",{xPercent:-100,zIndex:-1,duration:1})},secondEnter:function(){gsap.timeline().to(".slide2 .slide-content",{xPercent:100,duration:0}).to(".slide2 .overlay",{xPercent:100,duration:0}).to(".slide2",{xPercent:-100,duration:1}).to(".slide1",{xPercent:-100,duration:0}).to(".slide2 .slide-content",{xPercent:0,duration:.8}).to(".slide2 .overlay",{xPercent:0,zIndex:-1,duration:.8}).to(".slide2 .right-side img",{scale:1.2,duration:1.5}).to(".slide2 .right-side img",{scale:1,duration:1.5})},secondLeave:function(){gsap.timeline().to(".slide2 .slide-content",{xPercent:-100,duration:1}).to(".slide2 .overlay",{xPercent:-100,duration:1})},thirdEnter:function(){gsap.timeline().to(".slide3 .slide-content",{xPercent:100,duration:0}).to(".slide3 .overlay",{xPercent:100,duration:0}).to(".slide3",{xPercent:-200,duration:1}).to(".slide1",{xPercent:-200,duration:0}).to(".slide2",{xPercent:-200,duration:0}).to(".slide3 .slide-content",{xPercent:0,duration:.5}).to(".slide3 .overlay",{xPercent:0,zIndex:-1,duration:.5}).to(".slide2 .slide-content",{xPercent:0,duration:0}).to(".slide2 .overlay",{xPercent:0,duration:0}).to(".slide3 .right-side img",{scale:1.2,duration:1.5}).to(".slide3 .right-side img",{scale:1,duration:1.5})},thirdLeave:function(){gsap.timeline().to(".slide3 .slide-content",{xPercent:-100,duration:1}).to(".slide3 .overlay",{xPercent:-100,duration:1})}}},d=n(17),component=Object(d.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,"271a9cfe",null);t.default=component.exports}}]);