(function(t){function c(c){for(var n,a,o=c[0],i=c[1],u=c[2],l=0,h=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&h.push(r[a][0]),r[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);p&&p(c);while(h.length)h.shift()();return s.push.apply(s,u||[]),e()}function e(){for(var t,c=0;c<s.length;c++){for(var e=s[c],n=!0,a=1;a<e.length;a++){var o=e[a];0!==r[o]&&(n=!1)}n&&(s.splice(c--,1),t=i(i.s=e[0]))}return t}var n={},a={app:0},r={app:0},s=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"642161fc"}[t]+".js"}function i(c){if(n[c])return n[c].exports;var e=n[c]={i:c,l:!1,exports:{}};return t[c].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.e=function(t){var c=[],e={about:1};a[t]?c.push(a[t]):0!==a[t]&&e[t]&&c.push(a[t]=new Promise(function(c,e){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"bc7cdfa9"}[t]+".css",r=i.p+n,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var u=s[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===r))return c()}var h=document.getElementsByTagName("style");for(o=0;o<h.length;o++){u=h[o],l=u.getAttribute("data-href");if(l===n||l===r)return c()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=c,p.onerror=function(c){var n=c&&c.target&&c.target.src||r,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[t],p.parentNode.removeChild(p),e(s)},p.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(p)}).then(function(){a[t]=0}));var n=r[t];if(0!==n)if(n)c.push(n[2]);else{var s=new Promise(function(c,e){n=r[t]=[c,e]});c.push(n[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(t);var h=new Error;u=function(c){l.onerror=l.onload=null,clearTimeout(p);var e=r[t];if(0!==e){if(e){var n=c&&("load"===c.type?"missing":c.type),a=c&&c.target&&c.target.src;h.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",h.name="ChunkLoadError",h.type=n,h.request=a,e[1](h)}r[t]=void 0}};var p=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(c)},i.m=t,i.c=n,i.d=function(t,c,e){i.o(t,c)||Object.defineProperty(t,c,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,c){if(1&c&&(t=i(t)),8&c)return t;if(4&c&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&c&&"string"!=typeof t)for(var n in t)i.d(e,n,function(c){return t[c]}.bind(null,n));return e},i.n=function(t){var c=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(c,"a",c),c},i.o=function(t,c){return Object.prototype.hasOwnProperty.call(t,c)},i.p="/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=c,u=u.slice();for(var h=0;h<u.length;h++)c(u[h]);var p=l;s.push([0,"chunk-vendors"]),e()})({0:function(t,c,e){t.exports=e("56d7")},2097:function(t,c,e){"use strict";var n=e("47d9"),a=e.n(n);a.a},2234:function(t,c,e){"use strict";var n=e("d347"),a=e.n(n);a.a},"33c7":function(t,c,e){"use strict";var n=function(){var t=this,c=t.$createElement,e=t._self._c||c;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"twelve columns"},[t._t("default")],2)])])},a=[],r={name:"PageContent",props:{msg:String}},s=r,o=e("2877"),i=Object(o["a"])(s,n,a,!1,null,null,null);c["a"]=i.exports},"47d9":function(t,c,e){},"56d7":function(t,c,e){"use strict";e.r(c);e("cadf"),e("551c"),e("f751"),e("097d");var n=e("2b0e"),a=function(){var t=this,c=t.$createElement,e=t._self._c||c;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("Header"),e("router-view")],1)])])},r=[],s=function(){var t=this,c=t.$createElement,e=t._self._c||c;return t.showHeader?e("div",{staticClass:"container header"},[e("div",{staticClass:"row"},[e("div",{staticClass:"eight columns"},[e("a",{attrs:{href:"/about"},on:{mouseover:function(c){t.subMenuVisible=!0}}},[e("svg",{staticClass:"alma-logo",class:{active:t.aboutPage},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"300px",viewBox:"0 0 482.109 70.6","xml:space":"preserve"}},[e("g",[e("path",{attrs:{fill:"#231F20",d:"M282.615,36.062v11.281h10.849v2.88h-10.849V61.6h-3.072V50.223h-10.85v-2.88h10.85V36.062H282.615z"}}),e("path",{attrs:{fill:"#231F20",d:"M319.669,61.6V41.582h-3.265v-3.217h3.265v-1.104c0-3.265,0.72-6.241,2.688-8.113\n                        c1.584-1.536,3.696-2.16,5.664-2.16c1.488,0,2.784,0.336,3.601,0.673l-0.576,3.264c-0.624-0.288-1.488-0.528-2.688-0.528\n                        c-3.601,0-4.513,3.169-4.513,6.721v1.248h5.617v3.217h-5.617V61.6H319.669z"}}),e("path",{attrs:{fill:"#231F20",d:"M333.252,45.614c0-2.736-0.048-5.089-0.191-7.249h3.696l0.144,4.561h0.192\n                        c1.056-3.12,3.601-5.088,6.433-5.088c0.479,0,0.815,0.048,1.2,0.144v3.984c-0.433-0.096-0.864-0.144-1.44-0.144\n                        c-2.977,0-5.089,2.256-5.664,5.424c-0.097,0.576-0.192,1.248-0.192,1.969V61.6h-4.177V45.614z"}}),e("path",{attrs:{fill:"#231F20",d:"M353.797,31.837c0.048,1.44-1.009,2.593-2.688,2.593c-1.488,0-2.544-1.152-2.544-2.593\n                        c0-1.488,1.104-2.64,2.64-2.64C352.788,29.197,353.797,30.349,353.797,31.837z M349.092,61.6V38.365h4.225V61.6H349.092z"}}),e("path",{attrs:{fill:"#231F20",d:"M362.676,50.751c0.096,5.712,3.744,8.064,7.969,8.064c3.024,0,4.849-0.528,6.433-1.2l0.72,3.024\n                        c-1.488,0.672-4.032,1.44-7.729,1.44c-7.152,0-11.425-4.705-11.425-11.714c0-7.008,4.128-12.528,10.896-12.528\n                        c7.585,0,9.602,6.672,9.602,10.944c0,0.864-0.097,1.536-0.145,1.969H362.676z M375.061,47.727c0.049-2.688-1.104-6.865-5.856-6.865\n                        c-4.272,0-6.145,3.937-6.48,6.865H375.061z"}}),e("path",{attrs:{fill:"#231F20",d:"M384.371,44.654c0-2.4-0.048-4.368-0.191-6.289h3.744l0.24,3.841h0.096\n                        c1.152-2.208,3.841-4.368,7.681-4.368c3.217,0,8.209,1.92,8.209,9.889V61.6h-4.225V48.206c0-3.744-1.393-6.864-5.376-6.864\n                        c-2.785,0-4.945,1.968-5.665,4.32c-0.192,0.528-0.288,1.248-0.288,1.969V61.6h-4.225V44.654z"}}),e("path",{attrs:{fill:"#231F20",d:"M431.077,27.517v28.082c0,2.064,0.048,4.417,0.191,6.001h-3.792l-0.192-4.032h-0.096\n                        c-1.296,2.592-4.128,4.561-7.921,4.561c-5.616,0-9.937-4.753-9.937-11.81c-0.048-7.729,4.752-12.48,10.417-12.48\n                        c3.552,0,5.952,1.68,7.009,3.552h0.096V27.517H431.077z M426.853,47.822c0-0.528-0.048-1.248-0.192-1.776\n                        c-0.624-2.688-2.928-4.896-6.097-4.896c-4.368,0-6.96,3.841-6.96,8.978c0,4.704,2.304,8.593,6.864,8.593\n                        c2.832,0,5.425-1.872,6.192-5.041c0.145-0.576,0.192-1.152,0.192-1.824V47.822z"}}),e("path",{attrs:{fill:"#231F20",d:"M437.507,57.279c1.248,0.816,3.456,1.68,5.568,1.68c3.072,0,4.512-1.536,4.512-3.456\n                        c0-2.016-1.2-3.12-4.32-4.272c-4.176-1.488-6.145-3.792-6.145-6.576c0-3.744,3.024-6.816,8.017-6.816\n                        c2.353,0,4.417,0.672,5.713,1.439l-1.056,3.072c-0.912-0.576-2.593-1.344-4.753-1.344c-2.496,0-3.889,1.44-3.889,3.168\n                        c0,1.921,1.393,2.784,4.417,3.937c4.032,1.536,6.097,3.553,6.097,7.009c0,4.08-3.169,6.961-8.689,6.961\n                        c-2.544,0-4.896-0.624-6.528-1.585L437.507,57.279z"}})]),e("g",{staticClass:"alma-text"},[e("path",{attrs:{d:"M52.78,42.377c-1.216,0-2.245-0.843-2.622-1.967c-0.559-1.592-2.338-2.714-3.93-2.714\n                        c-6.553,0-14.041,8.05-14.041,14.978c0,3.181,1.405,4.679,3.745,4.679c5.991,0,13.667-5.616,16.1-13.01\n                        c0.373-1.124,1.404-1.966,2.62-1.966c1.686,0,2.809,1.403,2.809,2.808c0,6.739,1.966,12.168,6.552,12.168\n                        c1.497,0,2.807,1.312,2.807,2.808c0,1.498-1.31,2.809-2.807,2.809c-6.272,0-9.548-4.585-10.953-9.173\n                        c-4.304,5.336-10.762,9.173-17.128,9.173c-6.083,0-9.359-5.055-9.359-10.295c0-9.923,9.359-20.594,19.655-20.594\n                        c4.025,0,7.862,2.622,9.175,6.646c0.091,0.28,0.186,0.561,0.186,0.842C55.589,40.973,54.465,42.377,52.78,42.377"}}),e("path",{attrs:{d:"M92.088,9.616c-3.371,0-8.424,7.208-8.424,22.465c0,3.743,0.656,7.207,1.685,10.39\n                        c6.271-8.426,10.484-18.533,10.484-25.367C95.833,12.518,93.96,9.616,92.088,9.616 M101.45,62.969\n                        c-6.742,0-13.012-4.212-17.317-10.483c-5.898,5.897-12.918,10.483-20.126,10.483c-1.498,0-2.808-1.31-2.808-2.808\n                        c0-1.497,1.31-2.809,2.808-2.809c5.15,0,11.515-3.838,17.224-9.922c-2.061-4.493-3.184-9.733-3.184-15.35\n                        C78.047,17.385,82.354,4,92.088,4c7.488,0,9.362,8.33,9.362,13.104c0,9.549-5.711,21.622-13.387,31.077\n                        c3.652,5.896,8.799,9.172,13.387,9.172c1.497,0,2.807,1.312,2.807,2.809C104.257,61.659,102.947,62.969,101.45,62.969"}}),e("path",{attrs:{d:"M196.922,62.969c-6.273,0-8.424-6.178-8.424-11.231c0-8.144-1.219-8.426-1.874-8.426\n                        c-1.592,0-3.93,2.621-7.955,8.612c-3.463,5.242-6.74,11.045-12.638,11.045c-6.832,0-7.486-7.207-7.486-14.04\n                        c0-8.143-1.22-8.424-1.874-8.424c-1.592,0-3.93,2.621-7.955,8.611c-3.462,5.241-6.739,11.045-12.637,11.045\n                        c-6.832,0-7.487-7.207-7.487-14.04c0-7.771-1.22-8.424-2.809-8.424c-1.685,0-3.464,1.402-6.834,8.235\n                        c-4.492,8.894-7.956,17.036-17.503,17.036c-1.497,0-2.807-1.31-2.807-2.808c0-1.497,1.31-2.809,2.807-2.809\n                        c5.431,0,7.582-4.024,12.449-13.853c3.184-6.272,6.084-11.419,11.888-11.419c7.021,0,8.424,6.833,8.424,14.04\n                        c0,8.143,1.217,8.424,1.872,8.424c1.592,0,3.931-2.621,7.956-8.612c3.464-5.24,6.74-11.045,12.636-11.045\n                        c6.834,0,7.489,7.208,7.489,14.041c0,8.144,1.217,8.424,1.871,8.424c1.592,0,3.932-2.621,7.957-8.611\n                        c3.464-5.241,6.74-11.044,12.636-11.044c6.834,0,7.489,7.207,7.489,14.04c0,4.306,1.59,5.615,2.809,5.615\n                        c1.497,0,2.807,1.312,2.807,2.809C199.729,61.659,198.419,62.969,196.922,62.969"}}),e("path",{attrs:{d:"M236.226,42.377c-1.219,0-2.246-0.843-2.622-1.967c-0.562-1.592-2.342-2.714-3.932-2.714\n                        c-6.553,0-14.039,8.05-14.039,14.978c0,3.181,1.402,4.679,3.744,4.679c5.336,0,11.23-3.557,16.565-10.202\n                        c0.564-0.655,1.311-1.03,2.154-1.03c1.589,0,2.807,1.498,2.807,2.809c0,4.306,0.844,7.488,2.34,9.642\n                        c0.283,0.467,0.469,1.029,0.469,1.59c0,1.404-1.213,2.809-2.809,2.809c-3.088,0-4.396-5.055-4.961-7.581\n                        c-4.866,4.587-10.575,7.581-16.565,7.581c-4.308,0-7.211-2.526-8.52-5.896c-3.648,3.463-8.704,5.896-13.946,5.896\n                        c-1.497,0-2.807-1.311-2.807-2.809c0-1.496,1.31-2.808,2.807-2.808c5.804,0,12.075-5.241,13.854-9.641\n                        c2.434-8.236,10.294-15.632,18.906-15.632c4.023,0,7.862,2.622,9.172,6.646c0.095,0.28,0.188,0.561,0.188,0.842\n                        C239.032,40.973,237.907,42.377,236.226,42.377"}})])])])]),e("div",{staticClass:"four columns header-right"},[e("span",{staticClass:"u-pull-right maps-link"},[e("router-link",{attrs:{to:"/maps"},scopedSlots:t._u([{key:"default",fn:function(c){var n=c.href,a=(c.route,c.navigate),r=c.isActive;c.isExactActive;return[e("NavLink",{class:{active:r},attrs:{href:n},on:{click:a}},[t._v("maps for change")])]}}],null,!1,64726780)})],1)])]),e("div",{staticClass:"row submenu-row",on:{mouseout:function(c){t.subMenuVisible=!1}}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.subMenuVisible,expression:"subMenuVisible"}],staticClass:"twelve columns"},[e("ul",{staticClass:"sub-menu",on:{mouseover:function(c){t.subMenuVisible=!0}}},[e("li",[e("router-link",{attrs:{to:"/people"},scopedSlots:t._u([{key:"default",fn:function(c){var n=c.href,a=c.route,r=c.navigate,s=c.isActive;c.isExactActive;return[e("NavLink",{class:{active:s},attrs:{href:n},on:{click:r}},[t._v(t._s(a.name))])]}}],null,!1,2143308531)})],1),e("li",[e("router-link",{attrs:{to:"/press-awards"},scopedSlots:t._u([{key:"default",fn:function(c){var n=c.href,a=c.route,r=c.navigate,s=c.isActive;c.isExactActive;return[e("NavLink",{class:{active:s},attrs:{href:n},on:{click:r}},[t._v(t._s(a.name))])]}}],null,!1,2143308531)})],1)])])])]):t._e()},o=[],i=(e("7f7f"),{name:"PageContent",components:{},data:function(){return{subMenuVisible:!1,showHeader:!0,aboutPage:!1}},props:{msg:String},methods:{route:function(){return"home"==this.$router.currentRoute.name&&(this.showHeader=!1),"about"==this.$router.currentRoute.name?(this.aboutPage=!0,"about"):"people"==this.$router.currentRoute.name?"people":"press-awards"==this.$router.currentRoute.name?"press":"maps"==this.$router.currentRoute.name?"maps":"home"==this.$router.currentRoute.name?"home":void 0}},created:function(){this.route()}}),u=i,l=(e("2097"),e("2877")),h=Object(l["a"])(u,s,o,!1,null,"30874f34",null),p=h.exports,d={name:"maps",components:{Header:p}},f=d,v=(e("2234"),Object(l["a"])(f,a,r,!1,null,"6319c05f",null)),m=v.exports,b=e("8c4f"),g=function(){var t=this,c=t.$createElement,e=t._self._c||c;return e("div",{staticClass:"home"},[e("a",{attrs:{href:"/about"}},[e("svg",{staticClass:"alma-logo",attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"500px",viewBox:"0 0 482.109 70.6","xml:space":"preserve"}},[e("g",[e("path",{attrs:{fill:"#231F20",d:"M282.615,36.062v11.281h10.849v2.88h-10.849V61.6h-3.072V50.223h-10.85v-2.88h10.85V36.062H282.615z"}}),e("path",{attrs:{fill:"#231F20",d:"M319.669,61.6V41.582h-3.265v-3.217h3.265v-1.104c0-3.265,0.72-6.241,2.688-8.113\n            c1.584-1.536,3.696-2.16,5.664-2.16c1.488,0,2.784,0.336,3.601,0.673l-0.576,3.264c-0.624-0.288-1.488-0.528-2.688-0.528\n            c-3.601,0-4.513,3.169-4.513,6.721v1.248h5.617v3.217h-5.617V61.6H319.669z"}}),e("path",{attrs:{fill:"#231F20",d:"M333.252,45.614c0-2.736-0.048-5.089-0.191-7.249h3.696l0.144,4.561h0.192\n            c1.056-3.12,3.601-5.088,6.433-5.088c0.479,0,0.815,0.048,1.2,0.144v3.984c-0.433-0.096-0.864-0.144-1.44-0.144\n            c-2.977,0-5.089,2.256-5.664,5.424c-0.097,0.576-0.192,1.248-0.192,1.969V61.6h-4.177V45.614z"}}),e("path",{attrs:{fill:"#231F20",d:"M353.797,31.837c0.048,1.44-1.009,2.593-2.688,2.593c-1.488,0-2.544-1.152-2.544-2.593\n            c0-1.488,1.104-2.64,2.64-2.64C352.788,29.197,353.797,30.349,353.797,31.837z M349.092,61.6V38.365h4.225V61.6H349.092z"}}),e("path",{attrs:{fill:"#231F20",d:"M362.676,50.751c0.096,5.712,3.744,8.064,7.969,8.064c3.024,0,4.849-0.528,6.433-1.2l0.72,3.024\n            c-1.488,0.672-4.032,1.44-7.729,1.44c-7.152,0-11.425-4.705-11.425-11.714c0-7.008,4.128-12.528,10.896-12.528\n            c7.585,0,9.602,6.672,9.602,10.944c0,0.864-0.097,1.536-0.145,1.969H362.676z M375.061,47.727c0.049-2.688-1.104-6.865-5.856-6.865\n            c-4.272,0-6.145,3.937-6.48,6.865H375.061z"}}),e("path",{attrs:{fill:"#231F20",d:"M384.371,44.654c0-2.4-0.048-4.368-0.191-6.289h3.744l0.24,3.841h0.096\n            c1.152-2.208,3.841-4.368,7.681-4.368c3.217,0,8.209,1.92,8.209,9.889V61.6h-4.225V48.206c0-3.744-1.393-6.864-5.376-6.864\n            c-2.785,0-4.945,1.968-5.665,4.32c-0.192,0.528-0.288,1.248-0.288,1.969V61.6h-4.225V44.654z"}}),e("path",{attrs:{fill:"#231F20",d:"M431.077,27.517v28.082c0,2.064,0.048,4.417,0.191,6.001h-3.792l-0.192-4.032h-0.096\n            c-1.296,2.592-4.128,4.561-7.921,4.561c-5.616,0-9.937-4.753-9.937-11.81c-0.048-7.729,4.752-12.48,10.417-12.48\n            c3.552,0,5.952,1.68,7.009,3.552h0.096V27.517H431.077z M426.853,47.822c0-0.528-0.048-1.248-0.192-1.776\n            c-0.624-2.688-2.928-4.896-6.097-4.896c-4.368,0-6.96,3.841-6.96,8.978c0,4.704,2.304,8.593,6.864,8.593\n            c2.832,0,5.425-1.872,6.192-5.041c0.145-0.576,0.192-1.152,0.192-1.824V47.822z"}}),e("path",{attrs:{fill:"#231F20",d:"M437.507,57.279c1.248,0.816,3.456,1.68,5.568,1.68c3.072,0,4.512-1.536,4.512-3.456\n            c0-2.016-1.2-3.12-4.32-4.272c-4.176-1.488-6.145-3.792-6.145-6.576c0-3.744,3.024-6.816,8.017-6.816\n            c2.353,0,4.417,0.672,5.713,1.439l-1.056,3.072c-0.912-0.576-2.593-1.344-4.753-1.344c-2.496,0-3.889,1.44-3.889,3.168\n            c0,1.921,1.393,2.784,4.417,3.937c4.032,1.536,6.097,3.553,6.097,7.009c0,4.08-3.169,6.961-8.689,6.961\n            c-2.544,0-4.896-0.624-6.528-1.585L437.507,57.279z"}})]),e("g",{staticClass:"alma-text"},[e("path",{attrs:{d:"M52.78,42.377c-1.216,0-2.245-0.843-2.622-1.967c-0.559-1.592-2.338-2.714-3.93-2.714\n            c-6.553,0-14.041,8.05-14.041,14.978c0,3.181,1.405,4.679,3.745,4.679c5.991,0,13.667-5.616,16.1-13.01\n            c0.373-1.124,1.404-1.966,2.62-1.966c1.686,0,2.809,1.403,2.809,2.808c0,6.739,1.966,12.168,6.552,12.168\n            c1.497,0,2.807,1.312,2.807,2.808c0,1.498-1.31,2.809-2.807,2.809c-6.272,0-9.548-4.585-10.953-9.173\n            c-4.304,5.336-10.762,9.173-17.128,9.173c-6.083,0-9.359-5.055-9.359-10.295c0-9.923,9.359-20.594,19.655-20.594\n            c4.025,0,7.862,2.622,9.175,6.646c0.091,0.28,0.186,0.561,0.186,0.842C55.589,40.973,54.465,42.377,52.78,42.377"}}),e("path",{attrs:{d:"M92.088,9.616c-3.371,0-8.424,7.208-8.424,22.465c0,3.743,0.656,7.207,1.685,10.39\n            c6.271-8.426,10.484-18.533,10.484-25.367C95.833,12.518,93.96,9.616,92.088,9.616 M101.45,62.969\n            c-6.742,0-13.012-4.212-17.317-10.483c-5.898,5.897-12.918,10.483-20.126,10.483c-1.498,0-2.808-1.31-2.808-2.808\n            c0-1.497,1.31-2.809,2.808-2.809c5.15,0,11.515-3.838,17.224-9.922c-2.061-4.493-3.184-9.733-3.184-15.35\n            C78.047,17.385,82.354,4,92.088,4c7.488,0,9.362,8.33,9.362,13.104c0,9.549-5.711,21.622-13.387,31.077\n            c3.652,5.896,8.799,9.172,13.387,9.172c1.497,0,2.807,1.312,2.807,2.809C104.257,61.659,102.947,62.969,101.45,62.969"}}),e("path",{attrs:{d:"M196.922,62.969c-6.273,0-8.424-6.178-8.424-11.231c0-8.144-1.219-8.426-1.874-8.426\n            c-1.592,0-3.93,2.621-7.955,8.612c-3.463,5.242-6.74,11.045-12.638,11.045c-6.832,0-7.486-7.207-7.486-14.04\n            c0-8.143-1.22-8.424-1.874-8.424c-1.592,0-3.93,2.621-7.955,8.611c-3.462,5.241-6.739,11.045-12.637,11.045\n            c-6.832,0-7.487-7.207-7.487-14.04c0-7.771-1.22-8.424-2.809-8.424c-1.685,0-3.464,1.402-6.834,8.235\n            c-4.492,8.894-7.956,17.036-17.503,17.036c-1.497,0-2.807-1.31-2.807-2.808c0-1.497,1.31-2.809,2.807-2.809\n            c5.431,0,7.582-4.024,12.449-13.853c3.184-6.272,6.084-11.419,11.888-11.419c7.021,0,8.424,6.833,8.424,14.04\n            c0,8.143,1.217,8.424,1.872,8.424c1.592,0,3.931-2.621,7.956-8.612c3.464-5.24,6.74-11.045,12.636-11.045\n            c6.834,0,7.489,7.208,7.489,14.041c0,8.144,1.217,8.424,1.871,8.424c1.592,0,3.932-2.621,7.957-8.611\n            c3.464-5.241,6.74-11.044,12.636-11.044c6.834,0,7.489,7.207,7.489,14.04c0,4.306,1.59,5.615,2.809,5.615\n            c1.497,0,2.807,1.312,2.807,2.809C199.729,61.659,198.419,62.969,196.922,62.969"}}),e("path",{attrs:{d:"M236.226,42.377c-1.219,0-2.246-0.843-2.622-1.967c-0.562-1.592-2.342-2.714-3.932-2.714\n            c-6.553,0-14.039,8.05-14.039,14.978c0,3.181,1.402,4.679,3.744,4.679c5.336,0,11.23-3.557,16.565-10.202\n            c0.564-0.655,1.311-1.03,2.154-1.03c1.589,0,2.807,1.498,2.807,2.809c0,4.306,0.844,7.488,2.34,9.642\n            c0.283,0.467,0.469,1.029,0.469,1.59c0,1.404-1.213,2.809-2.809,2.809c-3.088,0-4.396-5.055-4.961-7.581\n            c-4.866,4.587-10.575,7.581-16.565,7.581c-4.308,0-7.211-2.526-8.52-5.896c-3.648,3.463-8.704,5.896-13.946,5.896\n            c-1.497,0-2.807-1.311-2.807-2.809c0-1.496,1.31-2.808,2.807-2.808c5.804,0,12.075-5.241,13.854-9.641\n            c2.434-8.236,10.294-15.632,18.906-15.632c4.023,0,7.862,2.622,9.172,6.646c0.095,0.28,0.188,0.561,0.188,0.842\n            C239.032,40.973,237.907,42.377,236.226,42.377"}})])])])])},w=[],C=e("33c7"),M={name:"home",components:{PageContent:C["a"]}},x=M,y=(e("c8a3"),Object(l["a"])(x,g,w,!1,null,"361a979e",null)),V=y.exports;n["a"].use(b["a"]);var _=new b["a"]({mode:"history",base:"/",linkExactActiveClass:"is-active",routes:[{path:"/",name:"home",component:V},{path:"/about",name:"about",component:function(){return e.e("about").then(e.bind(null,"f820"))}},{path:"/people",name:"people",component:function(){return e.e("about").then(e.bind(null,"bea6"))}},{path:"/press-awards",name:"press/awards",component:function(){return e.e("about").then(e.bind(null,"81d2"))}},{path:"/maps",name:"maps",component:function(){return e.e("about").then(e.bind(null,"daba"))}}]});e("e382"),e("d971");n["a"].config.productionTip=!1,new n["a"]({router:_,render:function(t){return t(m)}}).$mount("#app")},"95d7":function(t,c,e){},c8a3:function(t,c,e){"use strict";var n=e("95d7"),a=e.n(n);a.a},d347:function(t,c,e){},d971:function(t,c,e){},e382:function(t,c,e){}});
//# sourceMappingURL=app.d9146e6f.js.map