!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}}));var i=o("hKHmD"),a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){f.default(e,t,r[t])}))}return e};var u,f=(u=o("hKHmD"))&&u.__esModule?u:{default:u};var l,c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var d="Expected a function",s=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,p=/^0o[0-7]+$/i,g=parseInt,b="object"==typeof t&&t&&t.Object===Object&&t,y="object"==typeof self&&self&&self.Object===Object&&self,O=b||y||Function("return this")(),j=Object.prototype.toString,x=Math.max,S=Math.min,h=function(){return O.Date.now()};function w(e,t,r){var n,o,i,a,u,f,l=0,c=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(d);function v(t){var r=n,i=o;return n=o=void 0,l=t,a=e.apply(i,r)}function p(e){return l=e,u=setTimeout(b,t),c?v(e):a}function g(e){var r=e-f;return void 0===f||r>=t||r<0||s&&e-l>=i}function b(){var e=h();if(g(e))return y(e);u=setTimeout(b,function(e){var r=t-(e-f);return s?S(r,i-(e-l)):r}(e))}function y(e){return u=void 0,m&&n?v(e):(n=o=void 0,a)}function O(){var e=h(),r=g(e);if(n=arguments,o=this,f=e,r){if(void 0===u)return p(f);if(s)return u=setTimeout(b,t),v(f)}return void 0===u&&(u=setTimeout(b,t)),a}return t=T(t)||0,_(r)&&(c=!!r.leading,i=(s="maxWait"in r)?x(T(r.maxWait)||0,t):i,m="trailing"in r?!!r.trailing:m),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,n=f=o=u=void 0},O.flush=function(){return void 0===u?a:y(h())},O}function _(t){var r=void 0===t?"undefined":e(c)(t);return!!t&&("object"==r||"function"==r)}function T(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(c)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==j.call(t)}(t))return NaN;if(_(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=_(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(s,"");var n=v.test(t);return n||p.test(t)?g(t.slice(2),n?2:8):m.test(t)?NaN:+t}l=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError(d);return _(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),w(e,t,{leading:n,maxWait:t,trailing:o})};var N="feedback-form-state",D={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),email:document.querySelector("input[name=email]")};console.log(D.textarea),console.log(D.email),D.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),console.log(JSON.parse(localStorage.getItem(N))),localStorage.removeItem(N)})),D.form.addEventListener("input",e(l)((function(t){var r=JSON.parse(localStorage.getItem(N));M=e(a)({},r,e(i)({},t.target.name,t.target.value)),localStorage.setItem(N,JSON.stringify(M))}),500));var E,M={};(E=JSON.parse(localStorage.getItem(N)))&&(console.log(E),D.textarea.value=E.message||"",D.email.value=E.email||"")}();
//# sourceMappingURL=03-feedback.5e7c86a6.js.map
