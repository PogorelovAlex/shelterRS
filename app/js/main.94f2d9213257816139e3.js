(()=>{var e={216:()=>{(()=>{const e=document.querySelector(".nav__burger"),t=document.querySelector(".nav-list"),s=document.querySelectorAll(".nav-list__item"),a=document.querySelector(".dark-screen");let i=!1,n=!0;const o=()=>{!0===i&&(s.forEach((e=>{e.style.animation=""})),t.classList.remove("nav-active"),a.style.display="none",i=!1,n=!0)};e.addEventListener("click",(()=>{t.classList.toggle("nav-active"),i?o():!0===n&&(n=!1,i=!0,a.style.display="block",s.forEach(((e,t)=>{e.style.animation=`navLinkFade 0.5s ease forwards ${t/7+.5}s `}))),e.classList.toggle("toggle")})),a.addEventListener("click",(()=>{e.classList.toggle("toggle"),o()})),window.addEventListener("keydown",(t=>{e.classList.toggle("toggle"),"Escape"===t.key&&(t.preventDefault,i&&o())}))})()},119:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});const a=s.p+"./img/Arrow.7aa452b7312ed86c92d1491f6d43365a.svg"},203:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});const a=s.p+"./img/about-pets.ab3b8e7a10177c7f6ac4ce06063fa483.png"},528:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});const a=s.p+"./img/credit-card.c6ec579af9e59437430f130be5f947ba.svg"},47:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});const a=s.p+"./img/donation-dog.410bf8c190c8d072a338b8321c785f89.png"},60:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});const a=s.p+"./img/footer-puppy.fa6c1eeb43c5c2c29d8296b66041a689.png"},731:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});const a=s.p+"./img/icon-bowls-and-cups.1ff1771876f14d769334b582933826e0.svg"},375:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});const a=s.p+"./img/icon-collars-leashes.99577310d249b16b8855071bf71732e7.svg"},431:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});const a=s.p+"./img/icon-email.0ab78c521fad623df6b92640a3a30258.svg"},502:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});const a=s.p+"./img/icon-medicines.127af33ff816df731d711921b64edcae.svg"},188:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});const a=s.p+"./img/icon-pet-food.f29f8bd9aa61bb64eeb67ec0a5121656.svg"},742:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});const a=s.p+"./img/icon-phone.ba9f277a7ad47814aaffe1e7be466fc9.svg"},583:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});const a=s.p+"./img/icon-shampoos.721447ab1daad700c272299de386404f.svg"},878:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});const a=s.p+"./img/icon-sleeping-area.ab904c5c191eac4a24fe8cb77094aced.svg"},565:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});const a=s.p+"./img/icon-toys.456287df15dc6b45708c2241fad022c2.svg"},46:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});const a=s.p+"./img/icon-transportation.1636942de1657179687b9602f8eb833c.svg"},126:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});const a=s.p+"./img/icon-vitamins.af088172fe4bc8dfb0be47312a71ba1d.svg"},195:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});const a=s.p+"./img/pets-jennifer.e255ba6033d4ecd44c11396a03d83811.png"},366:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});const a=s.p+"./img/pets-katrine.b003a8e08a6c65df0f72742663a5a929.png"},908:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});const a=s.p+"./img/pets-woody.d2a0f45c5b5c1536db739b83cbc0ef42.png"},624:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});const a=s.p+"./img/pin.bacd7f8033db095f10a0004c4564ff13.svg"},737:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});const a=s.p+"./img/start-screen-puppy.b6ed1bf0ffd74f9b6cfd0a342dc9a425.png"},483:function(){!function(){"use strict";function e(e){var t=!0,s=!1,a=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function n(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function o(e){var t=e.type,s=e.tagName;return!("INPUT"!==s||!i[t]||e.readOnly)||"TEXTAREA"===s&&!e.readOnly||!!e.isContentEditable}function c(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function l(e){e.hasAttribute("data-focus-visible-added")&&(e.classList.remove("focus-visible"),e.removeAttribute("data-focus-visible-added"))}function d(s){s.metaKey||s.altKey||s.ctrlKey||(n(e.activeElement)&&c(e.activeElement),t=!0)}function r(e){t=!1}function u(e){n(e.target)&&(t||o(e.target))&&c(e.target)}function p(e){n(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(s=!0,window.clearTimeout(a),a=window.setTimeout((function(){s=!1}),100),l(e.target))}function v(e){"hidden"===document.visibilityState&&(s&&(t=!0),m())}function m(){document.addEventListener("mousemove",f),document.addEventListener("mousedown",f),document.addEventListener("mouseup",f),document.addEventListener("pointermove",f),document.addEventListener("pointerdown",f),document.addEventListener("pointerup",f),document.addEventListener("touchmove",f),document.addEventListener("touchstart",f),document.addEventListener("touchend",f)}function _(){document.removeEventListener("mousemove",f),document.removeEventListener("mousedown",f),document.removeEventListener("mouseup",f),document.removeEventListener("pointermove",f),document.removeEventListener("pointerdown",f),document.removeEventListener("pointerup",f),document.removeEventListener("touchmove",f),document.removeEventListener("touchstart",f),document.removeEventListener("touchend",f)}function f(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,_())}document.addEventListener("keydown",d,!0),document.addEventListener("mousedown",r,!0),document.addEventListener("pointerdown",r,!0),document.addEventListener("touchstart",r,!0),document.addEventListener("visibilitychange",v,!0),m(),e.addEventListener("focus",u,!0),e.addEventListener("blur",p,!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}()},353:(e,t,s)=>{var a=s(370),i=s(737),n=s(203),o=s(119),c=s(366),l=s(195),d=s(908),r=s(188),u=s(46),p=s(565),v=s(731),m=s(583),_=s(126),f=s(502),h=s(375),g=s(878),b=s(47),y=s(528),w=s(431),E=s(742),L=s(624),k=s(60),T=a(i),C=a(n),S=a(o),N=a(c),A=a(l),O=a(d),x=a(r),M=a(u),P=a(p),j=a(v),D=a(m),q=a(_),F=a(f),H=a(h),U=a(g),W=a(b),B=a(y),K=a(w),R=a(E),Y=a(L),z='<!DOCTYPE html> <html lang="ru"> <head> <meta charset="UTF-8"/> <meta name="viewport" content="width=device-width,initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="ie=edge"/> <title>Shelter</title> </head> <body> <header class="header"> <nav class="nav"> <div class="header__logo"> <div class="logo__title"><a href="./index.html">Cozy House</a></div> <div class="logo__subtitle">Shelter for pets in Boston</div> </div> <ul class="nav-list"> <li class="nav-list__item"> <a href="#about" class="nav-list__link nav-list__link_active"> About the shelter </a> </li> <li class="nav-list__item"> <a class="nav-list__link nav-list__link_disabled" href="./pets.html"> Our pets </a> </li> <li class="nav-list__item"> <a href="#help" class="nav-list__link nav-list__link_disabled"> Help the shelter </a> </li> <li class="nav-list__item"> <a href="#contacts" class="nav-list__link nav-list__link_disabled"> Contacts </a> </li> </ul> <div class="nav__burger"> <div class="nav__burger-line nav__burger-line1"></div> <div class="nav__burger-line nav__burger-line2"></div> <div class="nav__burger-line nav__burger-line3"></div> </div> </nav> </header> <main class="main"> <div class="hero"> <div class="wrapper"> <div class="hero__content"> <div class="content-section"> <h2 class="content-section__title"> Not only people need a house </h2> <p class="content-section__subtitle"> We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or she will love you more than anybody else in the world, you will see! </p> <div> <a href="./pets.html"><button type="button" class="content-section__button"> Make a friend </button> </a> </div> </div> <div class="hero__image-wrapper"> <img class="hero-image" src="'+T+'" alt="Start screen puppy"/> </div> </div> </div> </div> <section class="about" id="about"> <div class="wrapper"> <div class="about__wrapper"> <div class="about__image-wrapper"> <img class="hero-image hero-image-dog-cat" src="'+C+'" alt="Dog and Cat"/> </div> <div class="about__content"> <h3 class="about__title"> <span> About the shelter </span> <span> “Cozy House” </span> </h3> <div class="about__description"> <p> Currently we have 121 dogs and 342 cats on our hands and statistics show that only 20% of them will find a family. The others will continue to live with us and will be waiting for a lucky chance to become dearly loved. </p> <p> We feed our wards with the best food and make sure that they do not get sick, feel comfortable (including psychologically) and well. We are supported by 87 volunteers and 28 employees of various skill levels. About 12% of the animals are taken by the shelter staff. Taking care of the animals, they become attached to the pets and would hardly ever leave them alone. </p> </div> </div> </div> </div> </section> <div class="pets"> <div class="wrapper"> <div class="pets__wrapper"> <h3 class="pets__title"> <span>Our friends who </span> <span>are looking for a house</span> </h3> <div class="pets__slider"> <button class="slider-button"> <img src="'+S+'" alt="Left arrow"/> </button> <div class="pets-cards"> <div class="pets-card"> <img src="'+N+'" alt="pets katrine" class="pets-card__image"/> <div class="pets-card__content"> <h4 class="pets-card__title"> Katrine </h4> <button class="pets-card__button"> Learn more </button> </div> </div> <div class="pets-card"> <img src="'+A+'" alt="pets jennifer" class="pets-card__image"/> <div class="pets-card__content"> <h4 class="pets-card__title"> Jennifer </h4> <button class="pets-card__button"> Learn more </button> </div> </div> <div class="pets-card"> <img src="'+O+'" alt="pets woody" class="pets-card__image"/> <div class="pets-card__content"> <h4 class="pets-card__title"> Woody </h4> <button class="pets-card__button"> Learn more </button> </div> </div> </div> <button class="slider-button_reverted"> <img src="'+S+'" alt="Rigth arrow"/> </button> </div> <button class="pets__button">Get to know the rest</button> </div> </div> </div> <div class="help" id="help"> <div class="help__wrapper wrapper"> <h3 class="help__title"> <span>How you can help</span> <span>our shelter</span> </h3> <div class="help__content"> <div class="help__item"> <img src="'+x+'" alt="Pet food" class="help__item-icon"/> <h4 class="help__item-title"> Pet food </h4> </div> <div class="help__item"> <img src="'+M+'" alt="Transportation" class="help__item-icon"/> <h4 class="help__item-title"> Transportation </h4> </div> <div class="help__item"> <img src="'+P+'" alt="Toys" class="help__item-icon"/> <h4 class="help__item-title"> Toys </h4> </div> <div class="help__item"> <img src="'+j+'" alt="bowls and cups" class="help__item-icon"/> <h4 class="help__item-title"> Bowls and cups </h4> </div> <div class="help__item"> <img src="'+D+'" alt="shampoos" class="help__item-icon"/> <h4 class="help__item-title"> Shampoos </h4> </div> <div class="help__item"> <img src="'+q+'" alt="vitamins" class="help__item-icon"/> <h4 class="help__item-title"> Vitamins </h4> </div> <div class="help__item"> <img src="'+F+'" alt="Medicines" class="help__item-icon"/> <h4 class="help__item-title"> Medicines </h4> </div> <div class="help__item"> <img src="'+H+'" alt="Collars / leashes" class="help__item-icon"/> <h4 class="help__item-title"> Collars / leashes </h4> </div> <div class="help__item"> <img src="'+U+'" alt="Sleeping areas" class="help__item-icon"/> <h4 class="help__item-title"> Sleeping areas </h4> </div> </div> </div> </div> <div class="donation"> <div class="donation__wrapper wrapper"> <div class="donation__image-wrapper"> <img src="'+W+'" alt="Donation dog" class="donation__image"> </div> <div class="donation__content"> <h3 class="donation__title"> <span>You can also</span> <span>make a donation</span> </h3> <h5 class="donation__subtitle"> Name of the bank / Type of bank account </h5> <div class="donation__payment" href="#"> <img src="'+B+'" alt="Credit card" class="donation__payment-icon"> <a class="donation__payment-text"> 8389 2880 8028 8791 7435 </a> </div> <p class="donation__description"> Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p> </div> </div> </div> </main> <footer class="footer"> <div class="wrapper"> <a name="contacts"></a> <div class="footer__content"> <div class="footer__contacts"> <h3 class="footer__contacts-title"> <span>For questions</span> <span>and suggestions</span> </h3> <div class="footer__contacts-mail"> <img src="'+K+'" alt="Contacts mail" class="footer__contacts-mail-icon"> <a class="footer__contacts-mail-text"> email@shelter.com </a> </div> <div class="footer__contacts-phone"> <img src="'+R+'" alt="Contacts phone" class="footer__contacts-phone-icon"> <a class="footer__contacts-phone-text"> +13 674 567 75 54 </a> </div> </div> <div class="footer__locations"> <h3 class="footer__locations-title"> <span>We are waiting</span> <span>for your visit</span> </h3> <div class="footer__locations-address"> <img src="'+Y+'" alt="Marker" class="footer__locations-marker"> <a class="footer__locations-address-place"> <span> 1 Central Street, Boston </span> <span> (entrance from the store) </span> </a> </div> <div class="footer__locations-address"> <img src="'+Y+'" alt="Marker" class="footer__locations-marker"> <a class="footer__locations-address-place"> 18 South Park, London </a> </div> </div> </div> <div class="footer__image-wrapper"> <img src="'+a(k)+'" alt="Footer puppy" class="footer__image"> </div> </div> </footer> <div class="dark-screen"></div> </body> </html> ';e.exports=z},370:e=>{"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e)}}},t={};function s(a){if(t[a])return t[a].exports;var i=t[a]={exports:{}};return e[a].call(i.exports,i,i.exports,s),i.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="",(()=>{"use strict";s(483),s(353),s(216)})()})();