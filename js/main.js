$(document).ready((function(){$(window).outerWidth(),$(window).outerHeight();var e=window.navigator.userAgent,r=(e.indexOf("MSIE "),{Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return r.Android()||r.BlackBerry()||r.iOS()||r.Opera()||r.Windows()}});function n(){return(e=navigator.userAgent).indexOf("MSIE ")>-1||e.indexOf("Trident/")>-1}if(n()&&$("body").addClass("ie"),r.any()&&$("body").addClass("touch"),(r={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return r.Android()||r.BlackBerry()||r.iOS()||r.Opera()||r.Windows()}}).any(),location.hash){var t=location.hash.replace("#","");$(".popup-"+t).length>0?popupOpen(t):$("div."+t).length>0&&$("body,html").animate({scrollTop:$("div."+t).offset().top},500,(function(){}))}$(".wrapper").addClass("loaded");if(r.iOS());let i=document.querySelector(".menu-header__icon"),o=document.querySelector("body"),a=document.querySelector(".menu-header__body");i&&i.addEventListener("click",(function(){i.classList.toggle("active"),o.classList.toggle("lock"),a.classList.toggle("active")}));new Swiper(".reviews__slider",{pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}}),new Swiper(".hero__slider",{pagination:{el:".hero-swiper-pagination",type:"fraction"},scrollbar:{el:".swiper-scrollbar-hero"}});!function(){if(n()){let r=document.querySelectorAll(".ibg");for(var e=0;e<r.length;e++)r[e].querySelector("img")&&null!=r[e].querySelector("img").getAttribute("src")&&(r[e].style.backgroundImage="url("+r[e].querySelector("img").getAttribute("src")+")")}}()}));