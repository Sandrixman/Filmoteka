var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},n=e.parcelRequired76b;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},e.parcelRequired76b=n);var a=n("bTcpz"),o=n("37v9V"),r=n("dn1DA"),d=n("krGWQ");const{queueBtn:l,watchedBtn:s,gallery:c}=(0,d.default)();(0,r.loadMovies)(r.KEY_WATCHED),document.addEventListener("DOMContentLoaded",(function(){s.focus()})),s.addEventListener("click",(function(){l.classList.remove("library__button--active"),s.classList.add("library__button--active"),(0,r.loadMovies)(r.KEY_WATCHED)})),l.addEventListener("click",(function(){l.classList.add("library__button--active"),s.classList.remove("library__button--active"),(0,r.loadMovies)(r.KEY_QUEUE)})),c.addEventListener("click",a.renderModal),modal.addEventListener("click",(function(e){const t=(0,a.onModalBtnClick)(e);switch(t){case r.KEY_WATCHED:s.classList.contains("library__button--active")&&(0,r.loadMovies)(t);break;case r.KEY_QUEUE:l.classList.contains("library__button--active")&&(0,r.loadMovies)(t)}})),modal.addEventListener("click",o.showTrailer),backdropTrailer.addEventListener("click",o.hideTrailer);
//# sourceMappingURL=library.f4e46ab8.js.map
