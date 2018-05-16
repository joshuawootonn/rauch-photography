webpackJsonp([0xa93b51d11daa],{268:function(e,t,n){e.exports=n(269)},167:function(e,t,n){"use strict";var r=n(13),a=n(275),o=n(278),s=n(284),i=n(282),u=n(170),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(277);e.exports=function(e){return new Promise(function(t,l){var f=e.data,d=e.headers;r.isFormData(f)&&delete d["Content-Type"];var p=new XMLHttpRequest,m="onreadystatechange",h=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in p||i(e.url)||(p=new window.XDomainRequest,m="onload",h=!0,p.onprogress=function(){},p.ontimeout=function(){}),e.auth){var g=e.auth.username||"",v=e.auth.password||"";d.Authorization="Basic "+c(g+":"+v)}if(p.open(e.method.toUpperCase(),o(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p[m]=function(){if(p&&(4===p.readyState||h)&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?p.response:p.responseText,o={data:r,status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:n,config:e,request:p};a(t,l,o),p=null}},p.onerror=function(){l(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){l(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var y=n(280),w=(e.withCredentials||i(e.url))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;w&&(d[e.xsrfHeaderName]=w)}if("setRequestHeader"in p&&r.forEach(d,function(e,t){"undefined"==typeof f&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)}),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){p&&(p.abort(),l(e),p=null)}),void 0===f&&(f=null),p.send(f)})}},269:function(e,t,n){"use strict";function r(e){var t=new s(e),n=o(s.prototype.request,t);return a.extend(n,s.prototype,t),a.extend(n,t),n}var a=n(13),o=n(171),s=n(271),i=n(100),u=r(i);u.Axios=s,u.create=function(e){return r(a.merge(i,e))},u.Cancel=n(168),u.CancelToken=n(270),u.isCancel=n(169),u.all=function(e){return Promise.all(e)},u.spread=n(285),e.exports=u,e.exports.default=u},168:function(e,t){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},270:function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new a(e),t(n.reason))})}var a=n(168);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e,t=new r(function(t){e=t});return{token:t,cancel:e}},e.exports=r},169:function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},271:function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new s,response:new s}}var a=n(100),o=n(13),s=n(272),i=n(273);r.prototype.request=function(e){"string"==typeof e&&(e=o.merge({url:arguments[0]},arguments[1])),e=o.merge(a,{method:"get"},this.defaults,e),e.method=e.method.toLowerCase();var t=[i,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},o.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(o.merge(n||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(o.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},272:function(e,t,n){"use strict";function r(){this.handlers=[]}var a=n(13);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){a.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},170:function(e,t,n){"use strict";var r=n(274);e.exports=function(e,t,n,a,o){var s=new Error(e);return r(s,t,n,a,o)}},273:function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var a=n(13),o=n(276),s=n(169),i=n(100),u=n(281),c=n(279);e.exports=function(e){r(e),e.baseURL&&!u(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=a.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),a.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]});var t=e.adapter||i.adapter;return t(e).then(function(t){return r(e),t.data=o(t.data,t.headers,e.transformResponse),t},function(t){return s(t)||(r(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},274:function(e,t){"use strict";e.exports=function(e,t,n,r,a){return e.config=t,n&&(e.code=n),e.request=r,e.response=a,e}},275:function(e,t,n){"use strict";var r=n(170);e.exports=function(e,t,n){var a=n.config.validateStatus;n.status&&a&&!a(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},276:function(e,t,n){"use strict";var r=n(13);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},100:function(e,t,n){(function(t){"use strict";function r(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function a(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(167):"undefined"!=typeof t&&(e=n(167)),e}var o=n(13),s=n(283),i={"Content-Type":"application/x-www-form-urlencoded"},u={adapter:a(),transformRequest:[function(e,t){return s(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){u.headers[e]={}}),o.forEach(["post","put","patch"],function(e){u.headers[e]=o.merge(i)}),e.exports=u}).call(t,n(16))},171:function(e,t){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},277:function(e,t){"use strict";function n(){this.message="String contains an invalid character"}function r(e){for(var t,r,o=String(e),s="",i=0,u=a;o.charAt(0|i)||(u="=",i%1);s+=u.charAt(63&t>>8-i%1*8)){if(r=o.charCodeAt(i+=.75),r>255)throw new n;t=t<<8|r}return s}var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",e.exports=r},278:function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var a=n(13);e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(a.isURLSearchParams(t))o=t.toString();else{var s=[];a.forEach(t,function(e,t){null!==e&&"undefined"!=typeof e&&(a.isArray(e)?t+="[]":e=[e],a.forEach(e,function(e){a.isDate(e)?e=e.toISOString():a.isObject(e)&&(e=JSON.stringify(e)),s.push(r(t)+"="+r(e))}))}),o=s.join("&")}return o&&(e+=(e.indexOf("?")===-1?"?":"&")+o),e}},279:function(e,t){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},280:function(e,t,n){"use strict";var r=n(13);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,a,o,s){var i=[];i.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),r.isString(a)&&i.push("path="+a),r.isString(o)&&i.push("domain="+o),s===!0&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},281:function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},282:function(e,t,n){"use strict";var r=n(13);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(a.setAttribute("href",t),t=a.href),a.setAttribute("href",t),{href:a.href,protocol:a.protocol?a.protocol.replace(/:$/,""):"",host:a.host,search:a.search?a.search.replace(/^\?/,""):"",hash:a.hash?a.hash.replace(/^#/,""):"",hostname:a.hostname,port:a.port,pathname:"/"===a.pathname.charAt(0)?a.pathname:"/"+a.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),a=document.createElement("a");return t=e(window.location.href),function(n){var a=r.isString(n)?e(n):n;return a.protocol===t.protocol&&a.host===t.host}}():function(){return function(){return!0}}()},283:function(e,t,n){"use strict";var r=n(13);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},284:function(e,t,n){"use strict";var r=n(13),a=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,s={};return e?(r.forEach(e.split("\n"),function(e){if(o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t){if(s[t]&&a.indexOf(t)>=0)return;"set-cookie"===t?s[t]=(s[t]?s[t]:[]).concat([n]):s[t]=s[t]?s[t]+", "+n:n}}),s):s}},285:function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},13:function(e,t,n){"use strict";function r(e){return"[object Array]"===C.call(e)}function a(e){return"[object ArrayBuffer]"===C.call(e)}function o(e){return"undefined"!=typeof FormData&&e instanceof FormData}function s(e){var t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function i(e){return"string"==typeof e}function u(e){return"number"==typeof e}function c(e){return"undefined"==typeof e}function l(e){return null!==e&&"object"==typeof e}function f(e){return"[object Date]"===C.call(e)}function d(e){return"[object File]"===C.call(e)}function p(e){return"[object Blob]"===C.call(e)}function m(e){return"[object Function]"===C.call(e)}function h(e){return l(e)&&m(e.pipe)}function g(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function v(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function y(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function w(e,t){if(null!==e&&"undefined"!=typeof e)if("object"!=typeof e&&(e=[e]),r(e))for(var n=0,a=e.length;n<a;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}function b(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=b(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)w(arguments[n],e);return t}function E(e,t,n){return w(t,function(t,r){n&&"function"==typeof t?e[r]=x(t,n):e[r]=t}),e}var x=n(171),N=n(465),C=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:a,isBuffer:N,isFormData:o,isArrayBufferView:s,isString:i,isNumber:u,isObject:l,isUndefined:c,isDate:f,isFile:d,isBlob:p,isFunction:m,isStream:h,isURLSearchParams:g,isStandardBrowserEnv:y,forEach:w,merge:b,extend:E,trim:v}},465:function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function r(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}e.exports=function(e){return null!=e&&(n(e)||r(e)||!!e._isBuffer)}},16:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function a(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function o(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function s(){h&&p&&(h=!1,p.length?m=p.concat(m):g=-1,m.length&&i())}function i(){if(!h){var e=a(s);h=!0;for(var t=m.length;t;){for(p=m,m=[];++g<t;)p&&p[g].run();g=-1,t=m.length}p=null,h=!1,o(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var l,f,d=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var p,m=[],h=!1,g=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new u(e,t)),1!==m.length||h||a(i)},u.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.prependListener=c,d.prependOnceListener=c,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},293:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.send=void 0;var a=n(268),o=r(a),s="http://joshuawootonn.xyz";t.send=function(e){return o.default.post(s+"/mailer/9d10255b425b4b6e8d2f62c086c6a41a",e)}},296:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Input=void 0;var a=n(2),o=r(a),s=t.Input=function(e){return o.default.createElement("div",{className:"field"},o.default.createElement("label",{className:"label"},e.label),o.default.createElement("div",{className:"control"},o.default.createElement("input",{className:"input "+(e.error?"is-danger":""),type:e.type,placeholder:e.placeholder,name:e.name,value:e.value,onChange:e.handleChange})),o.default.createElement("p",{className:"help is-danger"}," ",e.error," "))};t.default=s},297:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Modal=void 0;var a=n(2),o=r(a),s=t.Modal=function(e){return o.default.createElement("div",{className:"hamburger-menu "+(e.formStatus===e.modalType?"is-active":"")},o.default.createElement("div",{className:"hamburger-content"},o.default.createElement("p",{className:"modal-title"},e.title),o.default.createElement("p",{className:"modal-message"},e.message),o.default.createElement("button",{className:"hamburger  hamburger--slider "+(e.formStatus===e.modalType?"is-active":"is-invisible"),type:"button","aria-label":"Menu","aria-controls":"navigation","aria-expanded":"true",onClick:e.close},o.default.createElement("span",{className:"hamburger-box"},o.default.createElement("span",{className:"hamburger-inner"})))))};t.default=s},299:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.TextArea=void 0;var a=n(2),o=r(a),s=t.TextArea=function(e){return o.default.createElement("div",{className:"field"},o.default.createElement("label",{className:"label"},e.label),o.default.createElement("div",{className:"control"},o.default.createElement("textarea",{className:"textarea "+(e.error?"is-danger":""),type:e.type,placeholder:e.placeholder,name:e.name,value:e.value,onChange:e.handleChange})),o.default.createElement("p",{className:"help is-danger"}," ",e.error," "))};t.default=s},304:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.query=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=n(2),l=a(c),f=n(23),d=(a(f),n(297)),p=a(d),m=n(296),h=a(m),g=n(299),v=a(g),y=n(82),w=a(y),b=n(293),E=r(b),x="initial",N="failure",C="success",S=function(e){function t(n){o(this,t);var r=s(this,e.call(this,n));return r.handleChange=function(e){var t;console.log(e.target.name),r.setState((t={},t[e.target.name]=e.target.value,t))},r.handleSubmit=function(e){var t=r.state,n=t.name,a=t.email,o=t.message,s=r.validate(),i=r;s||E.send({to:"jose56wonton@gmail.com",from:"ZachRauch@ZachRauch.com",subject:"New Contact - "+n,message:"\n      Name: "+n+"\n      Email: "+a+" \n      Message: "+o+"\n      "}).then(function(e){i.setState({name:"",email:"",message:"",nameError:"",emailError:"",status:C})}).catch(function(e){i.setState({status:N}),console.log(e)})},r.closeModal=function(){r.setState({status:x})},r.validate=function(){var e=!1,t={nameError:"",emailError:""},n=new RegExp("^[a-zA-Z ,.'-]+$"),a=new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"),o=r.state,s=o.name,i=o.email;return s=s.trim(),i=i.trim(),(s.indexOf(" ")===-1||s.length<6)&&(e=!0,t.nameError="Enter both a first and last name"),n.exec(s)||(e=!0,t.nameError="Invalid Name"),a.exec(i)||(e=!0,t.emailError="Invalid Email"),r.setState(u({},r.state,t)),e},r.state={name:"",nameError:"",email:"",emailError:"",message:"",status:x},r}return i(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges[0].node.frontmatter,t=e.nameLabel,n=e.namePlaceholder,r=e.emailLabel,a=e.emailPlaceholder,o=e.messageLabel,s=e.messagePlaceholder,i=(e.buttonLabel,e.image1),u=e.image2,c=e.image3,f=e.email,d=e.phone;e.location;return l.default.createElement("div",{className:"contact"},l.default.createElement("div",{className:"contact-spacer"}),l.default.createElement("div",{className:"columns contact-row-1"},l.default.createElement("div",{className:"column is-hidden-mobile is-12-mobile is-5-tablet is-4-desktop  contact-image-wrapper-1"},l.default.createElement(w.default,{sizes:i.childImageSharp.sizes,className:"contact-image"})),l.default.createElement("div",{className:"contact-text-wrapper-1 column is-12-mobile is-7-tablet is-5-desktop "},l.default.createElement("div",null,l.default.createElement("p",{className:"contact-title"},"Contact"),l.default.createElement("p",{className:"contact-text"},"# ",d),l.default.createElement("p",{className:"contact-text"},"@ ",f))),l.default.createElement("div",{className:"column is-hidden-touch is-3-desktop  contact-image-wrapper-2"},l.default.createElement(w.default,{sizes:u.childImageSharp.sizes,className:"contact-image"}))),l.default.createElement("div",{className:"columns contact-row-2"},l.default.createElement("div",{className:"column is-12-mobile is-8-tablet is-5-desktop is-offset-1-desktop contact-text-wrapper-2"},l.default.createElement("div",null,l.default.createElement(h.default,{label:t,placeholder:n,className:"input",error:this.state.nameError,value:this.state.name,name:"name",handleChange:this.handleChange,type:"text"}),l.default.createElement(h.default,{label:r,placeholder:a,gat:!0,className:"input",error:this.state.emailError,value:this.state.email,name:"email",handleChange:this.handleChange,type:"text"}),l.default.createElement(v.default,{label:o,placeholder:s,className:"textarea",value:this.state.message,name:"message",handleChange:this.handleChange,type:"textarea"}),l.default.createElement("a",{onClick:this.handleSubmit,className:"underline-inverse",name:"submit"},l.default.createElement("span",null)," Send"))),l.default.createElement("div",{className:"column is-hidden-mobile is-5-tablet is-6-desktop contact-image-wrapper-3"},l.default.createElement(w.default,{sizes:c.childImageSharp.sizes,className:"contact-image"}))),l.default.createElement(p.default,{formStatus:this.state.status,modalType:C,title:"Success",message:"Zach has been emailed and will be in touch with you shortly!",close:this.closeModal}),l.default.createElement(p.default,{formStatus:this.state.status,modalType:N,title:"Failure",message:"We couldn't connect to the server. Please try again soon!",close:this.closeModal}))},t}(c.Component);t.default=S;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-contact-js-ce8667f2e82d5930b8e8.js.map