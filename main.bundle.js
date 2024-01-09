(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>h});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),s=t(667),l=t.n(s),c=new URL(t(453),t.b),d=new URL(t(770),t.b),u=i()(o()),p=l()(c),f=l()(d);u.push([n.id,`/* || Imported fonts */\n\n@font-face {\n    font-family: "noto-sans";\n    src: url(${p});\n    font-weight: normal;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: "noto-sans";\n    src: url(${f});\n    font-weight: bold;\n    font-style: normal;\n}\n\n/* || Zeroing default styles */\n\n:root {\n    box-sizing: border-box;\n\n    --primary-text: #15141a;\n    --secondary-text: #5b5b66;\n    --purple: #44208d;\n    --green: #00866b;\n    --dark-grey: #3d434a;\n    --grey: #d0d0d0;\n    --light-grey: #f0f0f4;\n\n    font-family: "noto-sans", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 17px;\n\n    --max-page-width: 1280px;\n\n    --logo-width: 220px;\n    --logo-height: 146px;\n}\n\n*, *::before, *::after {\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n}\n\n/* || Basic styles */\n\nbody {\n    color: var(--text-color);\n}\n\np {\n\n}\n\nh1, h2, h3, h4, h5, h6 {\n\n}\n\na {\n    color: var(--text-color);\n    text-decoration: none;\n\n}\n\na:hover, button:hover {\n    text-decoration: underline;\n    cursor: pointer;\n}\n\nbutton {\n    font-size: 1rem;\n\n    border: none;\n    border-radius: 20px;\n}\n\ninput {\n    color: var(--dark-grey);\n    border: 1px solid var(--green);\n    border-radius: 5px;\n    padding: 0.5rem;\n}\n\nbutton {\n    font-weight: 700;\n}\n\n.green-button {\n    color: white;\n    background-color: var(--green);\n}\n\n.purple-button {\n    color: white;\n    background-color: var(--purple);\n}\n\n.green-button-inverted {\n    color: var(--green);\n    background-color: var(--light-grey);\n}\n\n/* || Utilities */\n\n.no-bullets {\n    list-style: none;\n}\n\n/* || Site top bar styles */\n\n/* || Guides bar */\n\n.guides-bar {\n    background-color: var(--purple);\n    display: block;\n    line-height: 1.4rem;\n\n    font-size: smaller;\n    font-weight: 700;\n}\n\n.guides-bar-list {\n    color: white;\n}\n\n.guides-bar-list li {\n    display: inline-flex;\n    position: relative;\n}\n\n.guides-bar-list li:not(:last-of-type)::after {\n    color: white;\n    content: '|';\n    margin: auto;\n}\n\n.guides-bar-list a {\n    padding: 8px;\n}\n\n/* Main nav bar */\n\n.nav-background {\n    border-bottom: 1px solid var(--grey);\n}\n\n.nav-main {\n    display: grid;\n    grid-template-columns: auto 1fr 1fr 2fr 1.5fr;\n    justify-items: center;\n    place-items: center;\n\n    width: 70%;\n    max-width: var(--max-page-width);\n    margin: 0 auto;\n\n    padding: 2rem;\n}\n\n.nav-main-logo {\n    width: var(--logo-width);\n    height: var(--logo-height);\n}\n\n.nav-main-links {\n    font-weight: bold;\n}\n\n.nav-buttons {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n\n    padding: 0 2rem;\n\n    border-left: 1px solid var(--grey);\n    border-right: 1px solid var(--grey);\n}\n\n.nav-button {\n    padding: 0.7rem 1.5rem;\n}\n\n.search-section {\n    align-self: baseline;\n\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n\n    width: 100%;\n}\n\n.account-button {\n    font-size: smaller;\n    padding: 0.2rem 1.2rem;\n}`,""]);const h=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var l=n[s],c=r.base?l[0]+r.base:l[0],d=a[c]||0,u="".concat(c," ").concat(d);a[c]=d+1;var p=t(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var l=r(n,o),c=0;c<a.length;c++){var d=t(a[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=l}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},770:(n,e,t)=>{n.exports=t.p+"87ca550c455e71127ce2.ttf"},453:(n,e,t)=>{n.exports=t.p+"c6776e8228bee1ff1106.ttf"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),l=t.n(s),c=t(216),d=t.n(c),u=t(589),p=t.n(u),f=t(426),h={};h.styleTagTransform=p(),h.setAttributes=l(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const m=t.p+"f8ee1a3c96829e79a497.svg";function g(n,e){let t=document.createElement("ul");n.appendChild(t),t.setAttribute("role","list");for(let n of e){let e=document.createElement("li"),r=document.createElement("a");r.innerText=n.innerText,r.href=n.href,e.appendChild(r),t.appendChild(e)}return t}!function(n){let e=document.createElement("header");n.appendChild(e),function(n){let e=document.createElement("nav");e.classList.add("guides-bar"),n.appendChild(e),g(e,[{innerText:"Starfield tips and tricks",href:"#"},{innerText:"Best Starfield backgrounds",href:"#"},{innerText:"Baldur's Gate 3 class list",href:"#"},{innerText:"Honkai Star Rail tier list",href:"#"},{innerText:"Starfield Lockpicking",href:"#"},{innerText:"Best Starfield traits",href:"#"},{innerText:"Wordle Solver Tool",href:"#"}]).classList.add("guides-bar-list")}(e),function(n){let e=document.createElement("div");e.classList.add("nav-background"),n.appendChild(e);let t=document.createElement("nav");t.classList.add("nav-main"),e.appendChild(t);let r=document.createElement("img");r.classList.add("nav-main-logo"),r.src=m,t.appendChild(r),g(t,[{innerText:"Latest",href:"#"},{innerText:"News",href:"#"},{innerText:"Reviews",href:"#"},{innerText:"Hardware",href:"#"},{innerText:"Features",href:"#"},{innerText:"Videos",href:"#"},{innerText:"Guides",href:"#"}]).classList.add("nav-main-links","no-bullets"),g(t,[{innerText:"Bestest Bests",href:"#"},{innerText:"Free games",href:"#"},{innerText:"Supporters",href:"#"},{innerText:"RSS",href:"#"},{innerText:"Deals",href:"#"},{innerText:"Podcasts",href:"#"},{innerText:"Discord",href:"#"}]).classList.add("no-bullets");let o=document.createElement("div");o.classList.add("nav-buttons"),t.appendChild(o);let a=document.createElement("button");a.classList.add("nav-button","purple-button"),a.innerText="Support us",o.appendChild(a);let i=document.createElement("button");i.classList.add("nav-button","green-button"),i.innerText="Join our newsletter",o.appendChild(i);let s=document.createElement("button");s.classList.add("nav-button","green-button"),s.innerText="Visit our store",o.appendChild(s);let l=document.createElement("div");l.classList.add("search-section"),t.appendChild(l);let c=document.createElement("input");c.classList.add("search-input"),c.type="text",c.placeholder="Search",l.appendChild(c);let d=document.createElement("button");d.classList.add("account-button","green-button"),d.innerText="Sign in/Create account",l.appendChild(d)}(e)}(document.querySelector("body"))})()})();