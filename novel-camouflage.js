// ==UserScript==
// @name         小说页面伪装|小说页面精简|起点页面伪装|番茄页面伪装|笔趣阁页面伪装
// @namespace    https://github.com/NiaoBlush/novel-disguise
// @version      2.9.0
// @description  将小说页面伪装成一个Word文档或Excel表格，同时净化小说页面，去除不必要的元素。适用于起点、番茄、笔趣阁、晋江、飞卢、69书吧、部分轻小说站等
// @author       NiaoBlush
// @license      MIT
// @run-at       document-end
// @homepageURL  https://github.com/NiaoBlush/novel-disguise
// @supportURL   https://github.com/NiaoBlush/novel-disguise/issues
// @icon64       https://s21.ax1x.com/2024/08/06/pkxPf0S.png
// @match        https://www.qidian.com/chapter/*
// @match        https://fanqienovel.com/reader/*
// @match        *://www.biquge.net/*/*/*.html
// @match        *://www.xbiqugu.net/*/*/*.html
// @match        *://www.biquge.co/*/*.html
// @match        *://www.52wx.com/*/*.html
// @match        https://www.3bqg.cc/book/*/*.html
// @match        https://www.bigee.cc/book/*/*.html
// @match        https://www.beqege.cc/*/*.html
// @match        https://www.biqukun.com/*/*/*.html
// @match        https://www.biquge.tw/book/*/*.html
// @match        https://www.wenku8.net/novel/*/*/*.htm
// @exclude      https://www.wenku8.net/novel/*/*/index.htm
// @match        https://www.linovelib.com/novel/*/*.html
// @match        https://www.bilinovel.com/novel/*/*.html
// @match        https://www.qimao.com/shuku/*-*
// @match        https://www.jjwxc.net/onebook.php?novelid=*&chapterid=*
// @match        https://my.jjwxc.net/onebook_vip.php?novelid=*&chapterid=*
// @match        https://my.jjwxc.net/backend/buynovel.php?novelid=*&chapterid=*
// @match        https://www.lightnovel.us/cn/detail/*
// @match        https://b.faloo.com/*_*.html
// @match        https://b.faloo.com/vip/*/*.html
// @match        https://69shuba.cx/txt/*/*
// @match        https://www.69shuba.com/txt/*/*
// @match        https://www.owlook.com.cn/owllook_content*
// @match        https://owlook.com.cn/owllook_content*
// @match        https://www.ciweimao.com/chapter/*
// @match        https://www.v2ex.com/
// @match        https://www.v2ex.com/?*
// @match        https://www.v2ex.com/go/*
// @match        https://www.v2ex.com/t/*
// @match        https://www.v2ex.com/recent*
// @match        https://www.kelexs.com/book/*-*.html
// @match        http://www.xbiqugu.la/*/*/*.html
// @match        https://reader.z-library.ec/read/*
// @match        https://reader.z-library.sk/read/*
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

// @formatter:off
/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.3",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=st(),k=st(),N=st(),E=!1,S=function(e,t){return e===t?(E=!0,0):0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],q=L.pop,H=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){H.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=gt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+mt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,r,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function at(e){return e[v]=!0,e}function ut(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function lt(e,t){var n=e.split("|"),r=e.length;while(r--)i.attrHandle[n[r]]=t}function ct(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return at(function(t){return t=+t,at(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.defaultView;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.attachEvent&&r!==r.top&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ut(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=ut(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=Q.test(t.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),ut(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=Q.test(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ut(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=Q.test(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return ct(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?ct(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:at,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=gt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:at(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?at(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:at(function(e){return function(t){return ot(e,t).length>0}}),contains:at(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:at(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},i.pseudos.nth=i.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=pt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=ft(t);function dt(){}dt.prototype=i.filters=i.pseudos,i.setFilters=new dt;function gt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function mt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function yt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function vt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function bt(e,t,n,r,i,o){return r&&!r[v]&&(r=bt(r)),i&&!i[v]&&(i=bt(i,o)),at(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Ct(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:xt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=xt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=xt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function wt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=yt(function(e){return e===t},a,!0),p=yt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[yt(vt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return bt(l>1&&vt(f),l>1&&mt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&wt(e.slice(l,r)),o>r&&wt(e=e.slice(r)),o>r&&mt(e))}f.push(n)}return vt(f)}function Tt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=q.call(f));y=xt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?at(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=gt(e)),n=t.length;while(n--)o=wt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function kt(e,t,r,o){var s,u,l,c,p,f=gt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&mt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}n.sortStable=v.split("").sort(S).join("")===v,n.detectDuplicates=E,c(),n.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||lt("type|href|height|width",function(e,t,n){return n?undefined:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||lt("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?undefined:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||lt(R,function(e,t,n){var r;return n?undefined:(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!a||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,q,H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){var r;return t===undefined||t&&"string"==typeof t&&n===undefined?(r=this.get(e,t),r!==undefined?r:this.get(e,x.camelCase(t))):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,q=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||q.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return q.access(e,t,n)},_removeData:function(e,t){q.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!q.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));q.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:H.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=q.get(e,t),n&&(!r||x.isArray(n)?r=q.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)
    };"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q.get(e,n)||q.access(e,n,{empty:x.Callbacks("once memory").add(function(){q.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=q.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,i=0,o=x(this),s=e.match(w)||[];while(t=s[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===r||"boolean"===n)&&(this.className&&q.set(this,"__className__",this.className),this.className=this.className||e===!1?"":q.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=q.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=q.hasData(e)&&q.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,q.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(q.get(a,"events")||{})[t.type]&&q.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(q.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!q.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.lastChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[q.expando],o&&(t=q.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);q.cache[o]&&delete q.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)q.set(e[r],"globalEval",!t||q.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(q.hasData(e)&&(o=q.access(e),s=q.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function qt(t){return e.getComputedStyle(t,null)}function Ht(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=q.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=q.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&q.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=qt(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return Ht(this,!0)},hide:function(){return Ht(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Lt(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||qt(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=qt(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&qt(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)
    },delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=q.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=q.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;q.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(qn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||q.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=q.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=q.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function qn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:qn("show"),slideUp:qn("hide"),slideToggle:qn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=Hn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=Hn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function Hn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);
// @formatter:on

(function () {
    'use strict';
    printLog("novel-disguise 开始初始化");

    typeof jQuery !== "undefined" ? printLog("jQuery 版本: " + jQuery.fn.jquery) : printLog("error", "jQuery 未载入！");
    const $ = jQuery.noConflict(true);

    typeof NovelDisguiseResource !== "undefined" ? printLog("资源已载入", NovelDisguiseResource) : printLog("error", "资源未载入");

    const screenInfo = getScreenInfo();
    let disguised_header_img = null;
    let disguised_body_img = null;
    let disguised_footer_img = null;
    let disguised_icon_img = null;
    let headerHeight = null;
    let footerHeight = null;
    let readerHeight = null;

    const originalTitle = document.title;

    const link_text_color = "rgba(0,0,0,.7)";
    const link_bg_color = "#f6f6f6";
    const link_front_color = "rgba(0,0,0,.7)";

    const DICT = {
        MODE: {
            WORD: 'mode_word',
            EXCEL: 'mode_excel',
            ORIGINAL: 'mode_original'
        },
        THEME: {
            OFFICE: 'theme_office',
            WPS: 'theme_wps'
        },
        MARGIN_TYPE: {
            NORMAL: 'normal_margin',
            NONE: 'no_margin'
        }
    };

    const KEY_CONFIG = "KEY_CONFIG";

    function printLog(...args) {
        let level = 'info';

        // 判断第一个参数是否为 level
        if (typeof args[0] === 'string' && ['info', 'warn', 'error'].includes(args[0])) {
            level = args.shift(); // 取出 level
        }

        let levelStyle = '';
        switch (level) {
            case 'info':
                levelStyle = 'color:#00BFFF;font-weight:bold;';
                break;
            case 'warn':
                levelStyle = 'color:#FFA500;font-weight:bold;';
                break;
            case 'error':
                levelStyle = 'color:#FF4500;font-weight:bold;';
                break;
            default:
                levelStyle = 'color:#000;';
        }

        const prefix = `%c🎭novel-disguise%c [${level.toUpperCase()}]`;

        console.log(
            prefix,
            'background:#222;color:#FFD700;font-weight:bold;padding:2px 4px;border-radius:4px;',
            'background:none;' + levelStyle,
            ...args
        );
    }

    function readConfig() {

        const defaultConfig = {
            mode: DICT.MODE.WORD,
            lastVisibleMode: DICT.MODE.WORD,
            theme: DICT.THEME.OFFICE,
            marginType: DICT.MARGIN_TYPE.NORMAL,
            hideImage: true,

            emptyCols: 20,
            enableExcelRandomPopulate: true,
            maxExcelRandomPopulateCol: 9
        };
        const stored = GM_getValue(KEY_CONFIG, {});
        const config = Object.assign({}, defaultConfig, stored);
        if (config.mode !== DICT.MODE.ORIGINAL) {
            config.lastVisibleMode = config.mode;
        }
        printLog("config loaded", config);
        return config;
    }

    const config = readConfig();

    function writeConfig() {
        GM_setValue(KEY_CONFIG, config);
    }

    function applyMode(mode) {
        printLog('准备切换到模式[${mode}]...');
        config.mode = mode;
        writeConfig();
        location.reload();
    }

    function settings() {
        const $settings = $(`
            <form class="nd-settings-form">
                <div class="nd-settings-form-group">
                    <label>模式: </label>
                    <select name="settings-mode">
                        <option value="${DICT.MODE.WORD}">Word</option>
                        <option value="${DICT.MODE.EXCEL}">Excel</option>
                    </select>
                </div>
                <div class="nd-settings-form-group">
                    <label for="settings-mode">主题: </label>
                    <select id="settings-theme" name="settings-theme">
                        <option value="${DICT.THEME.OFFICE}">Office</option>
                        <option value="${DICT.THEME.WPS}">Wps</option>
                    </select>
                </div>
                <div class="nd-settings-form-group">
                    <label title="word半屏时采用无边距会看起来更加自然">Word页边距: </label>
                    <label style="width: 30%;"><input type="radio" name="margin-type" value="${DICT.MARGIN_TYPE.NORMAL}">正常</label>
                    <label style="width: 30%;"><input type="radio" name="margin-type" value="${DICT.MARGIN_TYPE.NONE}">无边距</label>
                </div>
                <div class="nd-settings-form-group">
                    <label>隐藏图片: </label>
                    <label style="width: 30%;"><input type="radio" name="settings-hide-image" value="true">是</label>
                    <label style="width: 30%;"><input type="radio" name="settings-hide-image" value="false">否</label>
                </div>
                
                <div class="nd-settings-form-group" style="margin-top: 20px;">
                    <div class="nd-settings-btn-wrapper">
                        <button type="button" name="tip">好活，当赏❤️</button>
                        <button type="submit">保存设置</button>
                    </div>
                    
                </div>
            </form>
           
        `);

        //default
        $settings.find("select[name=settings-mode]").val(config.mode);
        $settings.find("select[name=settings-theme]").val(config.theme);
        $settings.find(`input[name=margin-type][value='${config.marginType}']`).prop('checked', true);
        $settings.find(`input[name=settings-hide-image][value='${String(config.hideImage)}']`).prop('checked', true);

        const $modal = showModal($settings, {
            title: "设置"
        });

        //submit
        $settings.on('submit', function (event) {
            event.preventDefault();

            const formDataObj = new FormData(this);

            config.mode = formDataObj.get('settings-mode');
            config.theme = formDataObj.get('settings-theme');
            config.marginType = formDataObj.get('margin-type');
            config.hideImage = formDataObj.get('settings-hide-image') === 'true';
            writeConfig();


            popMsg("设置已保存，刷新页面后生效");
            $modal.remove();
        });

        //tip
        $settings.find("button[name=tip]").on("click", function () {
            const $tipContent = $(`
                <div class="nd-tip-content">
                    <div class="nd-tip-text">
                        <p>感谢使用，如果觉得这个脚本用起来还算愉快，请随意打赏，一切随缘~</p>
                        <br>
                        <p style="font-size: 1.5em;"><b>祝各位摸鱼快乐~</b></p>
                    </div>
                    <div class="nd-tip-img-wrapper">
                        <img src="${NovelDisguiseResource.OTHER_IMAGES.tip_wechat.base64}" alt="微信">
                    </div>
                </div>
            `);

            showModal($tipContent, {
                title: "打赏",
                width: 600
            });
        });
    }

    function setResource() {

        function getActualHeight(originalHeight) {
            return originalHeight / screenInfo.devicePixelRatio;
        }

        printLog('screenInfo', screenInfo);

        function getHeaderResource(currentMode, currentTheme, physicalWidth) {
            const wThreshold2k = 2560;
            const wThreshold4k = 3840;

            let size;
            if (physicalWidth >= wThreshold4k) {
                size = "4k";
            } else if (physicalWidth >= wThreshold2k) {
                size = "2k";
            } else {
                size = "1k";
            }

            const header = NovelDisguiseResource.getDisguisedImage({
                app: config.mode,
                theme: config.theme,
                size: size,
                scheme: "light",
                part: "header"
            });
            printLog('header', header);
            return header;
        }

        const src = getHeaderResource(config.mode, config.theme, screenInfo.physicalWidth);
        disguised_header_img = src.url || src.base64;
        headerHeight = getActualHeight(screenInfo.physicalWidth * src.height / src.width);

        const disguised_footer_resource = NovelDisguiseResource.getDisguisedImage({
            app: config.mode,
            theme: DICT.THEME.OFFICE,
            size: "1k",
            scheme: "light",
            part: "footer"
        });
        disguised_footer_img = disguised_footer_resource.base64;
        footerHeight = disguised_footer_resource.height;
        disguised_icon_img = NovelDisguiseResource.getDisguisedImage({
            app: config.mode,
            theme: DICT.THEME.OFFICE,
            size: "1k",
            scheme: "light",
            part: "icon"
        }).base64;

        if (config.mode === DICT.MODE.WORD) {
            disguised_body_img = NovelDisguiseResource.getDisguisedImage({
                app: DICT.MODE.WORD,
                theme: DICT.THEME.OFFICE,
                size: "1k",
                scheme: "light",
                part: "body"
            }).base64;
        }

        readerHeight = window.innerHeight - headerHeight - footerHeight;
    }

    /**
     * 将页面中的图片替换成indicator
     * 受`config.hideImage`控制
     *
     * @param selector css选择器
     * @param replaceParent 是否替换img的父元素(有些img会被a标签包裹)
     * @param indicatorText 占位文字
     */
    function hideImages({selector, replaceParent = false, indicatorText = '点击显示图片'}) {
        if (!config.hideImage) {
            return;
        }

        $(selector).each(function () {
            const imgSrc = $(this).attr('src');
            const span = $('<span class="disguised-img-indicator"></span>')
                .attr('data-src', imgSrc)
                .text(indicatorText);
            if (replaceParent) {
                $(this).parent().replaceWith(span);
            } else {
                $(this).replaceWith(span);
            }

        });
    }

    function registerImageIndicators() {
        $(".disguised-img-indicator").on('click', function () {
            const src = $(this).attr('data-src');
            const $newImg = $('<img>').attr('src', src);
            const $modal = showModal($newImg);
            $modal.find("img").css({
                "max-width": "80vw",
                "max-height": "80vh"
            });
            $newImg.on('click', function () {
                $modal.remove();
            });
        });
    }

    function common() {

        setResource();

        //公共样式
        GM_addStyle(`
        .img-fill-in {
            background-repeat: no-repeat;
            background-size: 100% 100%;
        }
        
        html {
            overflow-y: hidden;
            color-scheme: normal !important;
        }
        
        #disguised-page {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        
        #disguised-header {
            width: 100%;
            aspect-ratio: ${screenInfo.screenWidth / headerHeight};
            background-image: url(${disguised_header_img});
        }
        
        #disguised-title {
            position: fixed;
            top: 5px;
            left: 0;
            width: 100%;
            z-index: 9999;
            text-align: center;
            color: ${config.theme === DICT.THEME.OFFICE ? '#edffff' : '#232323'};
            font-size: 12px;
            line-height: 22px;
            user-select: none;
        }
        
        #disguised-footer {
            height: ${footerHeight}px;
            line-height: ${footerHeight}px;
            width: 100%;
            background-image: url(${disguised_footer_img});
            font-size: 13px;
            color: #262626;
            
            box-sizing: border-box;
            position: relative;
        }
        
        #footer-content {
            position: absolute;
            left: 0;
            bottom: 0;
            height: ${footerHeight}px;
            line-height: ${footerHeight}px;
            width: 100%;
            flex-direction: row;
            flex-wrap: nowrap;
            align-content: center;
            justify-content: flex-start;
            align-items: center;
            box-sizing: border-box;
            padding-left: 20px;
        }
        
        #footer-content > * {
            height: 100%;
            line-height: 100%;
            margin-right: 10px;
            font-size: 13px;
        }
        
        #disguised-body {
            flex: 1;
            padding-left: ${config.marginType === DICT.MARGIN_TYPE.NORMAL ? '25%' : '0'};
            padding-right: ${config.marginType === DICT.MARGIN_TYPE.NORMAL ? '25%' : '0'};
            background-image: url(${disguised_body_img}) !important;
            background-repeat: repeat-y;
            background-size: 100% auto;
            overflow-y: scroll;
            width: 100%;
            box-sizing: border-box;
        }
        
        #disguised-content {
            background-color: #FFF;
            border-left-color: #c6c6c6;
            border-right-color: #c6c6c6;
            border-left-width: 1px;
            border-right-width: 1px;
            min-height: 100%;
            width: 100%;
            box-sizing: border-box;
        }
        
        #disguised-content > * {
            width: 100%;
            margin: unset;
            box-sizing: border-box;
        }
        
        #disguised-content p {
            color: black;
        }
        
        #disguised-content div {
            background-color: #FFF !important;
        }
        
        #disguised-right-content {
            display: none;
            position: fixed;
            right: 0;
            top: ${headerHeight}px;
            height: ${readerHeight}px;
            width: 400px;
            z-index: 99999;
        }
        
        .disguised-link, .disguised-img-indicator {
            color: ${link_text_color};
            text-decoration: underline;
            cursor: pointer;
            margin-right: 5px;
        }
        
        .disguised-modal-wrapper {
            position: fixed;
            z-index: 99999;
            top: 50%;
            left: 50%;
            max-height: 100%;
            max-width: 100%;
            transform: translate(-50%, -50%);
            border: 1px solid #707070;
            background-color: #F0F0F0;
        }
        
        .disguised-modal-header {
            background-color: #FFF;
            min-width: 200px;
            height: 32px;
            display: flex;
        }
        
        .disguised-modal-title {
            flex: 1;
            user-select: none;
            padding-left: 10px;
            color: black;
            display: flex;
            align-items: center;
        }
        
        .disguised-modal-header-close {
            position: relative;
            background-color: transparent;
            border: none;
            cursor: pointer;
            padding: 0;
            width: 36px;
            height: 32px;
            font-size: 1em;
        }
        .disguised-modal-header-close:hover {
            background-color: #E81023;
        }
        .disguised-modal-header-close::before,
        .disguised-modal-header-close::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 15px;
            height: 1px;
            background-color: black;
            transform-origin: center;
        }
        .disguised-modal-header-close:hover::before,
        .disguised-modal-header-close:hover::after {
            background-color: #FFF;
        }
        .disguised-modal-header-close::before {
            transform: translate(-50%, -50%) rotate(45deg);
        }
        .disguised-modal-header-close::after {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
        
        .disguised-modal-body {
            padding: 10px;
            background-color: #F0F0F0;
            min-height: 32px;
            max-height: calc(100vh - 32px);
            font-size: 1em;
            line-height: normal;
            overflow-y: auto;
        }
        
        .disguised-modal-wrapper * {
            margin: unset;
        }
        
        .nd-settings-form {
            font-family: 'Microsoft YaHei', sans-serif;
            width: 300px;
            box-shadow: none;
        }
        
        .nd-settings-form-group:not(:last-child) {
            margin-bottom: 15px;
        }
        
        .nd-settings-form-group label {
            display: inline-block;
            font-size: 13px;
            color: #000;
            margin-bottom: 5px;
        }
        
        .nd-settings-form-group select,
        .nd-settings-form-group input[type="radio"] {
            font-size: 13px;
            padding: 2px;
            border: 1px solid #c0c0c0;
            background-color: white;
            width: auto;
        }
        
        .nd-settings-form-group input[type="radio"] {
            width: auto;
            margin-right: 5px;
        }
        
        .nd-settings-form-group button {
            font-size: 13px;
            padding: 5px 10px;
            margin-right: 5px;
            border: 1px solid #c0c0c0;
            border-radius: 2px;
            background-color: #e0e0e0;
            cursor: pointer;
        }
        
        .nd-settings-form-group button[type="submit"] {
            background-color: #dcdcdc;
        }
        
        .nd-settings-form-group button:hover {
            background-color: #c0c0c0;
        }
        
        .nd-settings-form-group button:active {
            background-color: #a0a0a0;
        }
        
        .nd-settings-form-group button:focus {
            outline: 1px solid #606060;
        }
        
        .nd-settings-form-group select {
            margin-right: 5px;
            width: 180px;
        }
        
        .nd-settings-form-group select:focus-visible {
            outline: none;
        }
        
        .nd-settings-form-group label:first-child {
            width: 100px;
        }
        
        .nd-settings-form p {
            margin-bottom: 10px;
        }

        .nd-settings-btn-wrapper {
            display: flex;
            justify-content: space-between;
        }

        
        .nd-tip-content {
            font-size: 1.3em;
            display: flex;
        }
        
        .nd-tip-text {
            width: 50%;
            padding: 100px 5px;
        }
        
        .nd-tip-img-wrapper {
            width: 50%;
            display: flex;
            justify-content: space-between;
        }
        
        .nd-tip-img-wrapper img {
            width: 100%;
        }
        
        .nd_msg{display:none;position:fixed;top:10px;left:50%;transform:translateX(-50%);color:#fff;text-align:center;z-index:99996;padding:10px 30px;font-size:16px;border-radius:10px;background-size:25px;background-repeat:no-repeat;background-position:15px}
        .nd_msg a{color:#fff;text-decoration: underline;}
        .nd_msg-ok{background:#4bcc4b}
        .nd_msg-err{background:#c33}
        .nd_msg-warn{background:#FF9900}
        `);

        // 图标
        var link = $('<link rel="icon" type="image/x-icon">').attr('href', disguised_icon_img);
        $('link[rel*="icon"]').remove();
        $('head').append(link);

        $('body').children().hide();

        $(`<div id='disguised-page'>
                <div id='disguised-title'></div>
                <div id='disguised-header' class='img-fill-in'></div>
                <div id='disguised-body'>
                    <div id='disguised-content'></div> 
                    <div id='disguised-right-content'></div>
                </div>
                <div id='disguised-footer' class='img-fill-in'>
                    <div id="footer-content">
                        <span>简体中文（中国大陆）</span><span>辅助功能：一切就绪</span>
                    </div>
                </div>
           </div>`).appendTo("body");

        overridePageTitle();
        if (config.mode === DICT.MODE.WORD) {
            GM_addStyle(`
            #disguised-content {
                padding: 10px 30px;
            }
            `);
        } else {
            GM_addStyle(`
            #footer-content {
                height: 45%;
                line-height: 45%;
            }
            #disguised-body {
                padding-left: 0;
                padding-right: 0;
                overflow-y: hidden;
            }
            #disguised-content {
                height: 100%;
                overflow-x: hidden;
                overflow-y: scroll;
            }
            
            table {
                margin: 0;
            }
            .excel-table,
            .excel-table th,
            .excel-table td,
            .excel-table thead,
            .excel-table tbody {
                border-spacing: 0;
            }
            .excel-table {
                border-collapse: collapse;
            }
            
            .excel-table > thead {
                background-color: ${config.theme === DICT.THEME.OFFICE ? '#E6E6E6' : '#EEEEEE'};
            }
            
            .excel-table > thead > tr > th {
                font-weight: normal;
                font-size: 14px;
                color: black !important;
                background-color: ${config.theme === DICT.THEME.OFFICE ? '#E6E6E6' : '#EEEEEE'};
                position: sticky;
                top: 0;
                outline: 1px solid;
                outline-color: #A0A0A0;
                text-align: center;
                font-family: "SimSun", sans-serif;
                padding: 0;
                line-height: normal;
                z-index: 9999;
            }
            
            .excel-table th {
                min-width: 71px;
            }
            .excel-table th:nth-child(1) {
                width: auto;
                min-width: 20px;
            }
            .excel-table th:nth-child(2) {
                min-width: 50vw;
            }
            .excel-table tbody {
            }
            .excel-table > tbody > tr > td:nth-child(1) {
                text-align: center;
                background-color: #E6E6E6;
                padding-left: 5px;
                padding-right: 5px;
                user-select: none;
            }
            .excel-table tbody td:not(:nth-child(1)):not(:nth-child(2)) {
                white-space: nowrap;
                text-align: center;
            }
            .excel-table > tbody > tr > td {
                border: 1px solid #DDDDDD;
                padding: 3px 10px;
                line-height: normal;
            }
            .excel-table > tbody > tr > td ,
            .excel-table tbody td p {
                font-size: 12px;
                font-weight: normal;
                color: black !important;
                font-family: "Microsoft YaHei", "SimSun", sans-serif;
            }
            .excel-table > tbody > tr:first-child > td {
                border-top: none;
            }
            .excel-table tbody td > div {
                margin: 0;
                padding: 0;
                text-align: unset;
            }
            `);

            //构建表格
            const $table = $('<table class="excel-table"></table>');
            const extraThead = (function () {
                let output = '';
                for (let i = 1; i <= config.emptyCols; i++) {
                    const char = String.fromCharCode(64 + i);
                    output += `<th>${char}</th>`;
                }
                return output;
            })();
            const $thead = $(`<thead><tr><th></th>${extraThead}</tr></thead>`);
            const $tbody = $('<tbody></tbody>');
            // 添加表头
            $table.append($thead);
            $table.append($tbody);
            $("#disguised-content").append($table);

            //占位行
            padExcelBlankLines();
        }
    }

    function overridePageTitle() {
        if (config.mode === DICT.MODE.WORD) {
            document.title = "文档1";
        } else {
            document.title = "工作簿1";
        }
    }

    function setWordContent($contentEl) {
        if (config.mode !== DICT.MODE.WORD) {
            return;
        }
        $contentEl.show().appendTo("#disguised-content");
    }

    function clearExcelContent() {
        if (config.mode === DICT.MODE.EXCEL) {
            $(".excel-table tbody").empty();
        }
    }

    function getExcelLastIndex() {
        const $cell = $(".excel-table > tbody > tr:last-child > td:first-child");
        const indexCellText = $.trim($cell.text());
        return indexCellText ? parseInt(indexCellText) : 0;
    }

    /**
     * 空行补齐
     */
    function padExcelBlankLines(max = 50) {
        const lastIndex = getExcelLastIndex();
        const emptyLines = [];
        for (let i = lastIndex + 1; i <= max; i++) {
            emptyLines.push("\u200B");
        }
        setExcelLines(emptyLines, true);
    }

    function setExcelLines(lines, append = false, rowHandler) {
        if (config.mode !== DICT.MODE.EXCEL) {
            return;
        }

        let lastIndex;
        if (append) {
            lastIndex = getExcelLastIndex();
        } else {
            clearExcelContent();
            lastIndex = 0;
        }
        const $tbody = $(".excel-table > tbody");
        lines.forEach(function (line, index) {
            if (typeof line === 'string') {
                line = line.replace(/&nbsp;/g, '').trim();
            }

            if (line === '') return;
            if (line instanceof $ && line.length === 0) return;

            const $td2 = $('<td></td>');
            if (typeof rowHandler === 'function') {
                line = rowHandler(line, index, $td2);
            }

            const $tr = $('<tr></tr>');
            const $td1 = $('<td></td>').text(++lastIndex);
            $td2.html(line);
            $tr.append($td1);
            $tr.append($td2);
            for (let i = 0; i < config.emptyCols; i++) {
                let tdContent = "";
                if (config.enableExcelRandomPopulate && i < config.maxExcelRandomPopulateCol) {
                    tdContent = generateRandomContent(i);
                }
                $tr.append($(`<td>${tdContent}</td>`));
            }
            $tbody.append($tr);


        });
    }

    function setExcelContent($contentEl, type = 'br', clone = false, rowHandler) {
        if (config.mode !== DICT.MODE.EXCEL) {
            return;
        }

        if (type === 'br') {
            const lines = $contentEl.html().split('<br>');
            setExcelLines(lines);
        } else if (type === 'p') {
            let pList;
            if (clone) {
                pList = $contentEl.children('p').clone().toArray();
            } else {
                pList = $contentEl.children('p').toArray();
            }
            //去除空的p标签
            pList = pList.filter(function (p) {
                return $(p).text().trim() !== '';
            });
            setExcelLines(pList);
        }

    }

    function addEmptyExcelLines(num = 1) {
        setExcelLines(new Array(num).fill("\u200B"), true);
    }

    function addGlobalStyle(styleText) {
        GM_addStyle(styleText);
    }

    function addWordStyle(styleText) {
        if (config.mode === DICT.MODE.WORD) {
            GM_addStyle(styleText);
        }
    }

    function addExcelStyle(styleText) {
        if (config.mode === DICT.MODE.EXCEL) {
            GM_addStyle(styleText);
        }
    }

    function excelUnsupported() {
        if (config.mode === DICT.MODE.EXCEL) {
            alert("本站部分或全部章节不支持Excel模式，将切换到Word模式");
            applyMode(DICT.MODE.WORD);
        }
    }

    function clearWordContent() {
        if (config.mode === DICT.MODE.WORD) {
            $('#disguised-content').empty();
        }

    }

    function setDisguisedTitle(titleStr) {
        $('#disguised-title').text(titleStr);
    }

    function setWordDetail(detail) {
        const $footerEl = $('#footer-content');
        $footerEl.text("");
        if (typeof detail === "string") {
            $footerEl.text(detail);
        } else {
            detail.appendTo($footerEl);
        }

    }

    function setWordRightContent($contentEl) {
        $contentEl.appendTo($("#disguised-right-content"));
    }

    function getScreenInfo() {
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;
        const devicePixelRatio = window.devicePixelRatio || 1;
        const physicalWidth = screenWidth * devicePixelRatio;
        return {screenWidth, screenHeight, devicePixelRatio, physicalWidth};
    }

    function generateRandomContent(type = 1) {
        type = (type % 6) + 1;

        function generateRandomLetters(n, isUpperCase) {
            const letters = isUpperCase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : 'abcdefghijklmnopqrstuvwxyz';
            let result = '';
            for (let i = 0; i < n; i++) {
                result += letters.charAt(Math.floor(Math.random() * letters.length));
            }
            return result;
        }

        function getRandomInt(a, b) {
            return Math.floor(Math.random() * (b - a + 1)) + a;
        }

        function getRandomPaddedInt(n) {
            // 生成 n 位数范围内的随机数
            const max = Math.pow(10, n) - 1;
            const min = Math.pow(10, n - 1);
            const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

            // 返回左侧填充0的字符串
            return randomInt.toString().padStart(n, '0');
        }

        function getRandomItem(list) {
            return list[Math.floor(Math.random() * list.length)];
        }

        function getRandomChineseName() {
            const surnames = ["赵", "钱", "孙", "李", "周", "刘", "王"];
            const commonGivenChars = [
                "伟", "秀", "敏", "静", "丽", "强", "磊", "军", "洋", "杰", "婷", "浩", "婷", "欣",
                "佳", "琪", "婧", "思", "鑫", "博", "宇", "轩", "涵", "宁", "瑶", "晨", "泽", "瑞"
            ];

            const surname = getRandomItem(surnames);
            const len = Math.random() < 0.5 ? 1 : 2;   // 50% 概率取单名或双名
            let given = "";
            for (let i = 0; i < len; i++) {
                given += getRandomItem(commonGivenChars);
            }
            return surname + given;
        }

        function getRandomDateUsingRandomNumbers() {
            const year = Math.floor(Math.random() * (2024 - 2020 + 1)) + 2020;
            const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
            const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0'); // 简单处理，每月最多28天
            return `${year}-${month}-${day}`;
        }

        function getYesNo() {
            return Math.random() < 0.5 ? '是' : '否';
        }

        switch (type) {
            case 1:
                //编码
                return `${generateRandomLetters(2, true)}-${generateRandomLetters(2, true)}-${generateRandomLetters(2, true)}${getRandomPaddedInt(6)}`;
            case 2:
                //人名
                return getRandomChineseName();
            case 3:
                //日期
                return getRandomDateUsingRandomNumbers();
            case 4:
                //随机数
                return getRandomInt(1, 9999);
            case 5:
                //字母
                return generateRandomLetters(1, true);
            case 6:
                //是否
                return getYesNo();
        }
    }

    function showModal(content, modalConfig = {}) {
        const $modal = $(`
        <div class="disguised-modal-wrapper">
            <div class="disguised-modal-header">
                <div class="disguised-modal-title">${modalConfig.title || ""}</div>
                
            </div>
            <div class="disguised-modal-body"></div>
        </div>
        `);

        const $headerClose = $(`<div class="disguised-modal-header-close"></div>`);
        $headerClose.on("click", function () {
            $modal.remove();
        });
        $modal.find(".disguised-modal-header").append($headerClose);

        if (modalConfig.width && typeof modalConfig.width === "number") {
            $modal.css("width", `${modalConfig.width}px`);
        }

        if (typeof content === "string") {
            $modal.find(".disguised-modal-body").text(content);
        } else {
            content.appendTo($modal.find(".disguised-modal-body"));
        }

        $("#disguised-page").append($modal);
        return $modal;
    }

    /**
     * 消息弹框
     *
     * 使用了HLD大佬的代码
     *
     * @see https://greasyfork.org/zh-CN/scripts/393991-nga%E4%BC%98%E5%8C%96%E6%91%B8%E9%B1%BC%E4%BD%93%E9%AA%8C/code
     * @method popMsg
     * @param {String} msg 消息内容
     * @param {String} type 消息类型 [ok, err, warn]
     */
    function popMsg(msg, type = 'ok') {
        $('.nd_msg').length > 0 && $('.nd_msg').remove();
        let $msg = $(`<div class="nd_msg nd_msg-${type}">${msg}</div>`);
        $('body').append($msg);
        $msg.slideDown(200);
        setTimeout(() => {
            $msg.fadeOut(500);
        }, type == 'ok' ? 2000 : 5000);
        setTimeout(() => {
            $msg.remove();
        }, type == 'ok' ? 2500 : 5500);
    }

    /**
     * 获取指定的cookie值
     */
    function getCookie(name) {
        let cookieArr = document.cookie.split(";");

        for (let i = 0; i < cookieArr.length; i++) {
            let cookiePair = cookieArr[i].split("=");

            // 取出cookie名称时去除前后空格
            if (name === cookiePair[0].trim()) {
                return decodeURIComponent(cookiePair[1]);
            }
        }
        return null;
    }

    /**
     * 设置cookie的值
     */
    function setCookie(name, value, days, domain = null) {
        let expires = "";
        if (days) {
            let expireDate = new Date();
            expireDate.setDate(expireDate.getDate() + days);
            expires = "; expires=" + expireDate.toUTCString();
        }

        let domainStr = "";
        if (domain) {
            domainStr = "; domain=" + domain;
        }
        document.cookie = name + "=" + (value || "") + expires + domainStr + "; path=/";
    }

    /**
     * 把 target 的滚动“伪装”为 source 的滚动：镜像事件 + jQuery 取值映射（可选）
     * 单向桥接，避免回弹
     * @param {Element|string} source 站内监听用的容器（如 #idrviewer）
     * @param {Element|string} target 实际滚动容器（如 #disguised-body）
     * @param {Object} [opts]
     * @param {boolean} [opts.twoWay=false]  是否反向同步（一般不要开，开了可能回弹）
     * @param {boolean} [opts.patchJQuery=true] 是否打 jQuery 补丁（映射 $(source).scrollTop/height & .on）
     * @param {boolean} [opts.mirrorGlobal=false] 是否同时触发 window/document 的 scroll
     * @param {boolean} [opts.syncNative=false] 是否把 source.scrollTop 原生属性也设置为 target 的值（可能引发回弹，默认关）
     * @returns {{teardown: Function}}
     */
    function bridgeScrollContainers(source, target, opts = {}) {
        const {
            twoWay = false,
            patchJQuery = true,
            mirrorGlobal = false,
            syncNative = false, // 关键：默认不改原生 scrollTop
        } = opts;

        const src = (typeof source === 'string') ? document.querySelector(source) : source;
        const tgt = (typeof target === 'string') ? document.querySelector(target) : target;
        if (!src || !tgt) {
            printLog('warn', '滚动桥接容器错误', {source, target});
            return {
                teardown: () => {
                }
            };
        }

        // 幂等
        if (src.__bridge_to === tgt && tgt.__bridge_from === src) return {
            teardown: () => {
            }
        };
        src.__bridge_to = tgt;
        tgt.__bridge_from = src;

        // 确保 target 可滚动
        const cs = getComputedStyle(tgt);
        if (!/(auto|scroll|overlay)/.test(cs.overflowY)) tgt.style.overflowY = 'auto';

        let rafTickA = false;
        let rafTickB = false;

        // target -> source：镜像 scroll 事件（必要时同步原生 scrollTop，默认不做）
        const onTargetScroll = () => {
            if (rafTickA) return;
            rafTickA = true;
            requestAnimationFrame(() => {
                rafTickA = false;
                if (syncNative) {
                    try {
                        src.scrollTop = tgt.scrollTop;
                    } catch (e) {
                    }
                }
                // 触发 source 上的 scroll 监听器
                src.dispatchEvent(new Event('scroll', {bubbles: false}));
                if (mirrorGlobal) {
                    window.dispatchEvent(new Event('scroll'));
                    document.dispatchEvent(new Event('scroll'));
                }
            });
        };
        tgt.addEventListener('scroll', onTargetScroll, {passive: true});

        // source -> target：反向同步（默认关闭；只有你非常确定站内不会写回 0 时才打开）
        const onSourceScroll = () => {
            if (!twoWay) return;
            if (rafTickB) return;
            rafTickB = true;
            requestAnimationFrame(() => {
                rafTickB = false;
                try {
                    tgt.scrollTop = src.scrollTop;
                } catch (e) {
                }
                // 让依赖 target 的监听器也感知
                tgt.dispatchEvent(new Event('scroll', {bubbles: false}));
            });
        };
        if (twoWay) src.addEventListener('scroll', onSourceScroll, {passive: true});

        // jQuery 兼容：把 $(source).scrollTop()/height() 映射到 target，并镜像后续 .on('scroll')
        let unpatchJQ = () => {
        };
        if (patchJQuery && window.jQuery) {
            const $ = window.jQuery;
            const _scrollTop = $.fn.scrollTop;
            const _height = $.fn.height;
            const _on = $.fn.on;

            $.fn.scrollTop = function (val) {
                const el = this[0];
                if (el === src) {
                    if (val === undefined) return $(tgt).scrollTop();
                    $(tgt).scrollTop(val);
                    return this;
                }
                return _scrollTop.apply(this, arguments);
            };
            $.fn.height = function () {
                const el = this[0];
                if (el === src) return tgt.clientHeight;
                return _height.apply(this, arguments);
            };
            $.fn.on = function (types, selector, data, fn) {
                const res = _on.apply(this, arguments);
                try {
                    const el = this[0];
                    if (el === src && typeof types === 'string' && /\bscroll\b/.test(types)) {
                        const handler = fn || data || selector;
                        if (typeof handler === 'function') $(tgt).on(types + '.mirror', handler);
                    }
                } catch (e) {
                }
                return res;
            };

            unpatchJQ = () => {
                $.fn.scrollTop = _scrollTop;
                $.fn.height = _height;
                $.fn.on = _on;
            };
        }

        // 初始化：触发一次站内 scroll 检查
        src.dispatchEvent(new Event('scroll', {bubbles: false}));
        window.dispatchEvent(new Event('resize'));

        return {
            teardown() {
                try {
                    tgt.removeEventListener('scroll', onTargetScroll);
                    if (twoWay) src.removeEventListener('scroll', onSourceScroll);
                    unpatchJQ();
                } catch (e) {
                }
                delete src.__bridge_to;
                delete tgt.__bridge_from;
            }
        };
    }

    /**
     * 把 source 的原生滚动 API 代理到 target：
     * - source.scrollTop 读/写  -> target.scrollTop
     * - source.scrollTo / scrollBy -> 调用 target 对应方法
     * 注意：只代理这个实例，不会全局污染。
     */
    function patchNativeScrollProxy(source, target) {
        const src = (typeof source === 'string') ? document.querySelector(source) : source;
        const tgt = (typeof target === 'string') ? document.querySelector(target) : target;
        if (!src || !tgt) return;

        // 幂等
        if (src.__nativeScrollProxiedTo === tgt) return;
        src.__nativeScrollProxiedTo = tgt;

        try {
            // 代理 scrollTop getter/setter
            const desc = Object.getOwnPropertyDescriptor(Element.prototype, 'scrollTop');
            // 某些浏览器把 scrollTop 定义在 HTMLElement.prototype 上
            const proto = desc ? Element.prototype : HTMLElement.prototype;
            const current = Object.getOwnPropertyDescriptor(proto, 'scrollTop');

            Object.defineProperty(src, 'scrollTop', {
                configurable: true,
                get() {
                    return tgt.scrollTop;
                },
                set(v) {
                    tgt.scrollTop = v;
                },
            });
        } catch (e) {
            // 某些环境不允许覆盖；忽略即可（scrollTo/By 仍然能代理）
        }

        // 代理 scrollTo
        const origScrollTo = src.scrollTo?.bind(src);
        src.scrollTo = function (a, b) {
            if (typeof a === 'object' && a) {
                // scrollTo({ top, left, behavior })
                const top = 'top' in a ? a.top : tgt.scrollTop;
                const left = 'left' in a ? a.left : tgt.scrollLeft;
                tgt.scrollTo({top, left, behavior: a.behavior});
            } else {
                // scrollTo(x, y)
                tgt.scrollTo(a || 0, b || 0);
            }
        };

        // 代理 scrollBy
        const origScrollBy = src.scrollBy?.bind(src);
        src.scrollBy = function (a, b) {
            if (typeof a === 'object' && a) {
                const top = 'top' in a ? a.top : 0;
                const left = 'left' in a ? a.left : 0;
                tgt.scrollBy({top, left, behavior: a.behavior});
            } else {
                tgt.scrollBy(a || 0, b || 0);
            }
        };
    }


/////////////////////////////针对站点

    /**
     * 起点
     */
    function qidian() {

        GM_addStyle(`
        #right-container {
            position: unset;
            height: 100%;
        }
        .chapter-end-qrcode {
          display: none;
        }
        .review-icon {
          background: var(--surface-gray-100) !important;
        }
        .review-count {
          color: var(--surface-gray-200) !important;
        }
        .tooltip-wrapper {
            display: none;
        }
        #side-sheet div, #side-sheet section {
            background-color: #FFF;
        }
        .chapter-date {
            background: unset !important;
        }
        button {
            background-color: ${link_bg_color} !important;
            color: ${link_text_color} !important;
        }
        button > span {
            color: ${link_text_color} !important;
        }
        #page-ops {
            // display: none !important;
        }
        
        .excel-table tbody td, .excel-table tbody td p {
            font-family: unset;
        }
        .excel-table tbody td p {
            margin-top: 0 !important;
        }
      
        `);

        const $mainContent = $("main.content");
        const contentId = $mainContent.attr('id');
        const dataType = $mainContent.attr('data-type');
        const $tbody = $(".excel-table tbody");

        //内容
        const scriptContent = $('#vite-plugin-ssr_pageContext').html();
        if (scriptContent && scriptContent.includes('"freeStatus":0')) {
            //免费
            setWordContent($(".chapter-wrapper"));
            setExcelContent($("main.content"), 'p', true);
            setTimeout(function () {
                clearWordContent();
                setWordContent($(".chapter-wrapper"));
                setWordRightContent($("#right-container"));
                setExcelContent($("main.content"), 'p');
                setExcelLines([$(".nav-btn-group")], true);
                observeComments();
                setInfo();
            }, 2000);
        } else {
            if (!$('main.content').hasClass('lock-mask')) {
                //收费
                const targetNode = document.querySelector('main.content');
                const config = {childList: true};
                const callback = function (mutationsList, observer) {
                    for (let mutation of mutationsList) {
                        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                            setWordContent($(".chapter-wrapper"));
                            setWordRightContent($("#right-container"));
                            $tbody.attr("id", contentId);
                            $tbody.attr("data-type", dataType);
                            $tbody.addClass("content");
                            setExcelContent($("main.content"), 'p', true);
                            setTimeout(function () {
                                setExcelContent($("main.content"), 'p');
                                setExcelLines([$(".nav-btn-group")], true);
                            }, 2000);
                            observeComments();
                            setInfo();
                            observer.disconnect();
                            break;
                        }
                    }
                };
                const observer = new MutationObserver(callback);
                observer.observe(targetNode, config);
            } else {
                //未解锁
                setWordContent($(".chapter-wrapper"));
                setExcelLines($(".chapter-wrapper section:not(#r-recommends) > div:not(.download)").toArray());

                // const $loginButton = $("button:contains('登录')");
                // if ($loginButton.length > 0) {
                //     setExcelLines([$loginButton], true);
                // }
            }
        }
        setInfo();

        addExcelStyle(`
             #disguised-page #disguised-body table.excel-table tbody:not(thead) tr .nav-btn-group a {
                font-family: "Microsoft YaHei", "SimSun", sans-serif !important;
            }
            #disguised-page #disguised-body table.excel-table tbody td:not(:nth-child(1)):not(:nth-child(2)) {
                font-family: "Microsoft YaHei", "SimSun", sans-serif !important;
            }
            .nav-btn {
                padding: 0;
            }
            .excel-table button {
                padding: 0;
                font-size: unset;
                line-height: unset;
                height: 20px;
            }
            
        `);

        function observeComments() {
            //本章说
            const targetNode2 = document.querySelector('#side-sheet');
            const callback2 = function (mutationsList, observer) {
                for (let mutation of mutationsList) {
                    if (mutation.type === 'childList') {
                        if (mutation.addedNodes.length > 0) {
                            $("#disguised-right-content").show();
                        }
                        if (mutation.removedNodes.length > 0) {
                            $("#disguised-right-content").hide();
                        }
                    }
                }
            };
            const observer2 = new MutationObserver(callback2);
            observer2.observe(targetNode2, {childList: true});
        }

        function setInfo() {
            const titleEl = $('.chapter-wrapper h1.title');
            setDisguisedTitle(titleEl.children().remove().end().text());
            titleEl.hide();

            const infoEl = titleEl.next();
            setWordDetail(infoEl.children());
            infoEl.hide();

            const downloadEl = $('#r-authorSay :contains("下载App")');
            downloadEl.hide();
        }


        setTimeout(function () {
            // 打赏按钮
            const admireBtnEl = $('._admireBtn_131ir_200');
            admireBtnEl.hide();

            $('body').attr('data-theme', 'beige');
        }, 2000);

    }

    /**
     * 番茄
     * e.g. 免费章节 https://fanqienovel.com/reader/7159891022602830375?enter_from=reader
     * e.g. vip章节 https://fanqienovel.com/reader/7226402549753250363?enter_from=reader
     */
    function fanqie() {
        GM_addStyle(`
        .muye-reader-nav {
            display: none !important;
        }
        
        .byte-btn {
            background: ${link_bg_color} !important;
            color: ${link_front_color} !important;
        }
        
        .reader-toolbar {
            display: none;
        }
        
        .muye-reader-box {
            padding-top: 50px;
        }
        
        .excel-table tbody td, .excel-table tbody td p {
            font-family: unset;
        }
        
        p {
            margin: 0;
        }
        
        `);

        setWordContent($(".muye-reader-inner"));
        const titleEl = $('h1.muye-reader-title');
        setDisguisedTitle(titleEl.text());
        titleEl.remove();

        const infoEl = $('.muye-reader-subtitle');
        setWordDetail(infoEl.children());
        infoEl.hide();

        const $readerBox = $('.muye-reader-box');
        const className = $readerBox.attr('class').split(' ').filter(function (cls) {
            return cls.indexOf('font-') === 0;
        })[0];
        let styleAttr = $readerBox.attr('style');
        addExcelStyle(`
        .excel-table tbody td p {
            ${styleAttr}
        }
        `);

        setExcelLines($(".muye-reader-content>div>p").toArray());
        setExcelLines([$(".muye-reader-btns")], true);
        addExcelStyle(`
            .muye-reader-btns button {
                height: 20px !important;
                line-height: 20px !important;
            }
        `);
        $(".muye-reader-btns button").on("click", function () {
            setTimeout(function () {
                location.reload();
            }, 200);
        });

        $(".arco-tooltip").remove();
    }

    /**
     * 笔趣阁
     * biquge.net
     */
    function biquge_net() {

        GM_addStyle(`
        #read_tj {
            display: none;
        }
        
        .section-opt {
            border-top: none !important;
            border-bottom: none !important;
            color: ${link_text_color};
        }
        
        .section-opt a {
            color: ${link_text_color} !important;
        }
        
        .reader-main > a {
            display: none;
        }
        
        `);

        setWordContent($(".reader-main"));
        setDisguisedTitle($(".title").text());
        setExcelContent($("#content"), "p");
        setExcelLines([$(".section-opt").first()], true);
    }

    /**
     * 书香小说
     * xbiqugu.net
     */
    function xbiqugu_net() {
        GM_addStyle(`
        body {
            background-color: #FFF;
        }
        .con_top, #listtj, #content_tip, .bookname>h1, #bdshare, #content>p {
            display: none;
        }
        
        .box_con {
            border: none;
        }
        
        .bookname {
            border-bottom: none;
            color: ${link_text_color};
        }
        
        .bottem2 {
            border-top: none;
            color: ${link_text_color};
            text-align: unset;
            width: unset;
            margin: 0;
            padding: 0;
        }
        
        .bottem1>a, .bottem2>a {
            color: ${link_text_color};
        }
        
        .box_con > table {
            display: none !important;
        }
        
        `);

        $("#content>p").remove();
        setWordContent($(".box_con"));
        setExcelContent($("#content"));
        setExcelLines([$(".bottem2")], true);
        setDisguisedTitle($(".bookname h1").text());
    }

    /**
     * 笔趣阁
     * biquge.co
     */
    function biquge_co() {
        xbiqugu_net();
        GM_addStyle(`
        .lm {
            display: none;
        }
        `);
    }

    /**
     * 笔趣阁
     * www.52wx.com
     */
    function www_52wx_com() {
        GM_addStyle(`
        .hotcmd-box {
            display: none !important;
        }
        #content {
            color: black !important;
        }
        `);
        biquge_net();
        setExcelContent($("#content"));
        setExcelLines([$(".section-opt").first()], true);
    }

    /**
     * 笔趣阁
     * www.3bqg.cc
     */
    function www_3bqg_cc() {
        GM_addStyle(`
        #chaptercontent {
            border-top: none !important;
            border-bottom: none !important;
        }
        
        .content > h1, .content > .link, .readinline {
            display: none !important;
        }
        
        .Readpage a{
            color: ${link_text_color} !important;
            text-shadow: none !important;
        }
        `);
        addExcelStyle(`
            .pagedown {
                padding: 0;
                margin-bottom: 0;
                height: unset;
                line-height: unset;
                text-align: unset;
            }
        `);
        $(".readinline").remove();
        setWordContent($(".content"));
        setDisguisedTitle($(".content>h1").text());
        setExcelContent($("#chaptercontent"));
        setExcelLines([$(".pagedown")], true);
    }

    /**
     * 笔趣阁
     * www.bigee.cc
     */
    function www_bigee_cc() {
        www_3bqg_cc();
    }

    /**
     * 笔趣阁
     * beqege.cc
     */
    function www_beqege_cc() {
        GM_addStyle(`
        .box_con {
            border: none !important;
        }
        
        .read-novel-link, #device, .con_top, .bookname>h1, #test1{
            display: none !important;
        }
        
        .bottem1, .bottem2 {
            border-top: none !important;
            border-bottom: none !important;
        }
        
        .bottem1 a, .bottem2 a {
            color: ${link_text_color} !important;
        }
        `);
        addExcelStyle(`
            .bottem1 {
                text-align: unset;
                margin: 0;
                padding-bottom: 0;
            }
        `);
        setWordContent($(".box_con"));
        setDisguisedTitle($(".bookname>h1").text());
        setExcelContent($("#content"), "p");
        setExcelLines([$(".bottem1")], true);
    }

    /**
     * 笔书网
     * biqukun.com
     */
    function www_biqukun_com() {
        www_beqege_cc();
        GM_addStyle(`
        .lm {
            display: none !important;
        }
        
        .bookname {
            border-bottom: none !important;
        }
        
        .box_con > table {
            display: none !important;
        }
        `);
        setExcelContent($("#content"));
        setExcelLines([$(".bottem2")], true);
    }

    /**
     * 笔趣阁
     * biquge.tw
     */
    function www_biquge_tw() {
        GM_addStyle(`
        #readSet, .book>h1, .chase-book-btn {
            display: none !important;
        }
        
        .read-page, .read-page a {
            border-top: none !important;
            border-bottom: none !important;
            border-left: none !important;
            border-right: none !important;
        }
        
        @media (min-width: 768px) {
            .book {
                padding: unset;
            }
        }
        `);

        setDisguisedTitle($(".book>h1").text());
        setWordContent($(".book"));
        setExcelContent($("#chaptercontent"), "p");
        setExcelLines([$(".read-page").first()], true);
    }

    /**
     * 轻小说文库
     * wenku8.net
     */

    function www_wenku8_net() {
        GM_addStyle(`
        #content {
            padding: 20px;
        }
        
        #foottext {
            text-align: center;
        }
        
        #foottext a {
            color: ${link_text_color};
        }
        `);

        $('#foottext a[href^="http"]').remove();
        $("ul[id='contentdp']").remove();
        setWordContent($("#content"));
        setWordContent($("#foottext"));
        setDisguisedTitle($("#title").text());
        setExcelContent($("#content"));
        setExcelLines([$("#foottext").first()], true);
        addExcelStyle(`
            #foottext {
                text-align: unset;
            }
        `);
    }

    /**
     * 哔哩轻小说
     * www.bilinovel.com
     * 小说阅读页面会跳转到 www.linovelib.com
     * https://www.linovelib.com/novel/4666/275666_2.html, https://www.linovelib.com/novel/2025/251952_2.html 存在部分字体加密
     */
    function linovelib_com() {
        GM_addStyle(`
        .mlfy_page {
            width: 100%;
            background: none !important;
        }
        `);

        $("#mlfy_main_text>h1").hide();
        setWordContent($("#mlfy_main_text"));
        setDisguisedTitle($("#mlfy_main_text>h1").text());
        setWordContent($(".mlfy_page"));
        setExcelContent($("#TextContent"), "p");
        setExcelLines([$(".mlfy_page")], true);
        addExcelStyle(`
        .mlfy_page {
            display: block !important;
            height: unset !important;
            line-height: unset !important;
        }
        .mlfy_page > a {
            line-height: unset !important;
            font-size: 12px;
            width: 80px;
        }
        .mlfy_page > a:hover {
            color: unset !important;
        }
        `);

        // 处理字体加密
        if (config.mode === DICT.MODE.EXCEL) {
            window.addEventListener('load', () => {
                // 如果浏览器支持 adoptedStyleSheets，就优先用它
                const sheets = document.adoptedStyleSheets || [];
                for (const sheet of sheets) {
                    for (const rule of Array.from(sheet.cssRules)) {
                        if (rule.style && rule.style.fontFamily && rule.style.fontFamily.includes('read')) {
                            printLog('找到规则：', rule.selectorText);
                            // 姑且先按 #TextContent p:nth-last-of-type(2) 的形式处理
                            const encryptedIndex = ((sel) => {
                                if (!sel) return null;
                                const m = sel.match(/nth-last-of-type\((\d+)\)/);
                                return m ? +m[1] : null;
                            })(rule.selectorText);
                            printLog('encryptedIndex', encryptedIndex);
                            if (encryptedIndex) {
                                addExcelStyle(`
                                .excel-table tbody tr:nth-last-of-type(${encryptedIndex}) td:nth-child(2) p {
                                    font-family: "read" !important;
                                }
                                `);
                            }

                        }
                    }
                }
            });
        }
    }

    /**
     * bilinovel原站, mac不会跳转linovelib.com
     * 存在字体加密 https://www.bilinovel.com/novel/2025/72668_2.html
     */
    function biilinovel_com() {
        addGlobalStyle(`
        html ins {
            display: none !important;
        }
        `);
        addExcelStyle(`
         table {
            table-layout: auto !important;
            word-break: normal !important;
         }
         table th {
            border-bottom: none !important;
         }
         table tr {
            border-top: none !important;
         }
         .footlink {
            border-top: none !important;
            line-height: unset !important;
            font-size: unset !important;
         }
         .footlink a {
            display: unset !important;
            margin-bottom: unset !important;
            width: unset !important;
            padding: unset !important;
            margin: unset !important;
            margin-right: 10px !important;
            float: unset !important;
        }
        `);

        const $content = $("#acontent");
        const $footLink = $("#footlink");
        setDisguisedTitle($("#atitle").text());
        setWordDetail($(".atitle h3").text());

        setWordContent($content);
        setWordContent($footLink);

        $footLink.css("display", "block");
        setExcelContent($content, "p");
        setExcelLines([$footLink], true);

        // 处理字体加密
        if (config.mode === DICT.MODE.EXCEL) {
            window.addEventListener('load', () => {
                // 如果浏览器支持 adoptedStyleSheets，就优先用它
                const sheets = document.styleSheets || [];
                printLog('sheets', sheets);
                for (const sheet of sheets) {
                    for (const rule of Array.from(sheet.cssRules)) {
                        if (rule.style && rule.style.fontFamily && rule.style.fontFamily.includes('read')) {

                            if (!rule.selectorText || rule.selectorText.includes(".excel-table")) continue;
                            printLog('找到规则：', rule.selectorText);

                            // 姑且先按 #TextContent p:nth-last-of-type(2) 的形式处理
                            const encryptedIndex = ((sel) => {
                                if (!sel) return null;
                                const m = sel.match(/nth-last-of-type\((\d+)\)/);
                                return m ? +m[1] : null;
                            })(rule.selectorText);

                            if (encryptedIndex) {
                                printLog('encryptedIndex', encryptedIndex);
                                addExcelStyle(`
                                .excel-table tbody tr:nth-last-of-type(${encryptedIndex}) td:nth-child(2) p {
                                    font-family: "read" !important;
                                }
                                `);
                            }

                            //如果有 p:last-of-type
                            const isEncryptedLast = ((sel) => {
                                if (!sel) return false;
                                return /p:last-of-type/.test(sel);
                            })(rule.selectorText);
                            if (isEncryptedLast) {
                                addExcelStyle(`
                                .excel-table tbody tr:nth-last-of-type(2) td:nth-child(2) p {
                                    font-family: "read" !important;
                                }
                                `);
                            }
                        }
                    }
                }
            });
        }
    }

    /**
     * 七猫
     * www.qimao.com
     */
    function qimao_com() {
        GM_addStyle(`
        .chapter-tips {
            display: flex;
        }
        .chapter-tips dd, .chapter-tips dt {
            display: flex;
            align-items: center;
        }
        .chapter-tips dd {
            margin-right: 10px;
        }
        .reader-footer {
            padding: 0 !important;
        }
        .qm-btn {
            background-image: none !important;
            border: none !important;
            font-weight: normal !important;
        }
        `);
        setDisguisedTitle($(".chapter-title").text());
        setWordDetail($(".chapter-tips"));
        setWordContent($(".chapter-detail-wrap-content"));
        excelUnsupported();
    }

    /**
     * 晋江
     * www.jjwxc.net
     */
    function jinjiang() {

        GM_addStyle(`
        .novel-pager {
            border: none !important;
            padding: 0 !important;
        }
        h2 {
            display: none;
        }
        #note_danmu_wrapper {
            display: none;
        }
        div[align='right'] {
            display: none;
        }
        `);

        const novelTitle = $("h1 span").text();
        const chapterTitle = $("h2").text();
        setDisguisedTitle(`${novelTitle} ${chapterTitle}`);

        let $content = $(".novelbody").first().children("div");
        const $pager = $(".noveltitle").eq(1).addClass("novel-pager");
        setWordContent($pager.clone());
        setWordContent($content);
        setWordContent($pager.clone());
        setWordDetail(originalTitle);
        $content.children("div").first().remove();
        $content.children("div").last().remove();

        if (config.mode === DICT.MODE.EXCEL) {
            $("h2").remove();
            $("#note_danmu_wrapper").remove();
            $("div[align='right']").remove();

            if ($('.noveltext').length > 0) {
                const fontFamily = $('.noveltext').css('font-family');
                addExcelStyle(`
                    .excel-table tbody td {
                        font-family: ${fontFamily}
                    }
                `);
            }

        } else {
            //这些文字删掉之后又会自动加回来。。
            setTimeout(function () {
                $content.html($content.html().replace(/@无限好文，尽在晋江文学城/g, ''));
            }, 4000);
        }

        setExcelContent($content);
        setExcelLines([$pager], true);
    }

    /**
     * 晋江
     * 购买页面 及付费章节页面
     * e.g. https://my.jjwxc.net/backend/buynovel.php?novelid=4104036&chapterid=21
     * e.g. https://my.jjwxc.net/onebook_vip.php?novelid=4104036&chapterid=21
     */
    function jinjiangBuy() {
        if (window.location.pathname.includes('/backend/buynovel')) {
            const content = '关闭脚本以完成购买';
            setDisguisedTitle(content);
            setWordContent($(`
                <div style="text-align: center;">${content}</div>
            `));
            setExcelLines([content]);
        } else if (window.location.pathname.includes('/onebook_vip.php')) {
            jinjiang();
        }


    }

    /**
     * 轻之国度
     * lightnovel.us
     */
    function lightnovel_us() {

        GM_addStyle(`
        #footer-content>:not(span) {
            display: none;
        }
        #footer-content {
            display: flex;
            align-items: center;
        }
        #footer-content span {
            vertical-align: unset;
            display: flex;
            align-items: center;
        }
        #article-main-contents {
            padding: 15px;
        }
        `);

        hideImages({selector: '#article-main-contents img'});
        registerImageIndicators();

        setWordContent($(".article-content"));
        setExcelContent($("#article-main-contents"));
        setDisguisedTitle($(".article-title").text());
        setWordDetail($(".article-infos").children());
    }

    /**
     * 飞卢小说
     * faloo.com
     */
    function faloo_com() {
        GM_addStyle(`
        .noveContent {
            padding: 15px;
        }
        #footer-content {
            display: flex;
        }
        #footer-content span,  #footer-content a {
            display: flex;
            align-items: center;
        }
        #footer-content img {
            display: none;
        }
        #footer-content div {
            display: none;
        }
        #pageHtml {
            display: flex;
            font-size: 14px !important;
        }
        .next_page_btn {
            font-size: 14px !important;
        }
        #pageHtml img {
            display: none;
        }
        div.noveContent .con_img div:nth-child(2) {
            width: 100% !important;
        }
        .con_img > div {
            width: 100% !important;
        }
        `);
        excelUnsupported();
        setWordContent($(".noveContent"));
        setWordContent($("#pageHtml"));
        setDisguisedTitle($(".c_l_title").text());
        setWordDetail($(".c_l_info").children());
    }

    /**
     * 69书吧
     * 69shuba.cx
     * e.g. https://69shuba.cx/txt/56042/39089569
     */
    function _69shuba_cx() {
        GM_addStyle(`
        .page1 a{
            line-height: normal;
        }
        `);

        setDisguisedTitle($("h1").text());
        setWordDetail($(".txtinfo").text());

        $("h1").remove();
        $(".txtinfo").remove();
        const $txt = $(".txtnav");
        setWordContent($txt);
        setWordContent($(".page1"));
        $txt.find("script").remove();
        setExcelContent($txt);
        setExcelLines([$(".page1")], true);
    }

    /**
     * owlook
     * 基于开源项目owllook搭建的
     * e.g. https://www.owlook.com.cn/owllook_content?url=https://www.bq99.cc/book/141046/42.html&name=%E7%AC%AC%E5%9B%9B%E5%8D%81%E4%B8%80%E7%AB%A0%20%E7%AD%91%E5%9F%BA%E5%8A%9F%E6%B3%95&chapter_url=https://www.bq99.cc/book/141046/&novels_name=%E4%BF%AE%E7%9C%9F%E8%81%8A%E5%A4%A9%E7%BE%A4
     *
     */
    function www_owlook_com_cn() {
        addGlobalStyle(`
            .nd_owllook_pager a {
                color: black;
            }
        `);
        addWordStyle(`
            .nd_owllook_pager {
                text-align: center;
            }
        `);

        $(".readinline").remove();
        setDisguisedTitle($("#content_name").text());
        setWordContent($(".show-content"));
        setExcelContent($(".show-content"));
        const $originalPager = $(".pre_next");
        const $pager = $(`
            <div class="nd_owllook_pager">
                <a href="${$originalPager.children().first().attr('href')}">上一章</a>
                <a href="${$('.left-bar-list > div:first-child>a').attr('href')}">目录</a>
                <a href="${$originalPager.children().last().attr('href')}">下一章</a>
            </div>
        `);
        setWordContent($pager);
        setExcelLines([$pager], true);
    }

    /**
     * 刺猬猫阅读
     * e.g. free https://www.ciweimao.com/chapter/112168341
     * e.g. vip https://www.ciweimao.com/chapter/112171956
     */
    function ciweimao_com() {
        excelUnsupported();

        addGlobalStyle(`
            #footer-content > p {
                display: flex;
                align-items: center;
            }
            #footer-content > p > span {
                margin-right: 10px;
            }
            .book-read-page a {
                background-color: unset;
                border: none;
            }
            .book-read-page a:hover {
                background-color: unset;
                border: none;
            }
        `);

        setTimeout(function () {

            // 读取 bookReadTheme 的值
            const cookieKey = 'bookReadTheme';
            let bookReadTheme = getCookie(cookieKey);
            if (!bookReadTheme) {
                setCookie(cookieKey, 'white%2C3%2C18%2Cundefined%2Ctsu-right%2C0', 365, "." + window.location.hostname);
                location.reload();
            } else if (!bookReadTheme.startsWith('white')) {
                let commaIndex = bookReadTheme.indexOf(',');
                if (commaIndex !== -1) {
                    //改为白色主题
                    let newBookReadTheme = 'white' + bookReadTheme.substring(commaIndex);
                    // 更新cookie并重新加载页面
                    setCookie(cookieKey, newBookReadTheme, 365, "." + window.location.hostname);
                    location.reload();
                }
            }

            setDisguisedTitle($("h1.chapter").text());
            setWordDetail($(".read-hd>p"));
            $("#J_BookRead_WaterMark").remove();
            $("#J_BookRead p span, #J_BookRead p i").remove();
            $("#J_ImgRead i").remove();
            setWordContent($("#J_BookRead"));
            setWordContent($("#J_ImgRead"));
            setWordContent($(".book-read-page"));
        }, 500);


    }

    /**
     * v站 主题
     * e.g. https://www.v2ex.com/t/1142285
     * e.g. https://www.v2ex.com/t/1143210
     * e.g. https://www.v2ex.com/t/803669?p=2
     */
    function v2exThread() {
        setDisguisedTitle($("h1").text());
        setWordDetail($("small"));
        setWordContent($("#Main"));

        hideImages({selector: ".topic_content img.embedded_image"});
        hideImages({selector: ".reply_content img.embedded_image", replaceParent: true});

        if (config.mode === DICT.MODE.EXCEL) {
            const $outdated = $(".outdated");
            let outdatedText = $outdated.text();
            if ($outdated.length > 0) {
                outdatedText = `[ ${outdatedText} ]`;
            }
            setExcelLines([outdatedText], false);

            const $markdownBody = $(".markdown_body");
            if ($markdownBody.length > 0) {
                setExcelLines(
                    $markdownBody
                        .children()
                        .toArray()
                        .flatMap(el => {
                            // https://www.v2ex.com/t/803669
                            const $kids = $markdownBody.children();
                            if ($kids.length === 1 && $kids.eq(0).is('div')) {
                                return $(el).children().get();
                            } else {
                                return [el];
                            }
                        })
                        .flatMap(el => (el.tagName === 'UL' || el.tagName === 'OL' ? [...el.children] : [el]))
                        .flatMap(el =>
                            $(el).html()
                                .split(/<br\s*\/?>/i)
                                .map(s => s.trim())
                        ), true);
            } else {
                setExcelLines(
                    $(".topic_content")
                        .toArray()
                        .flatMap(el =>
                            $(el).html()
                                .split(/<br\s*\/?>/i)
                                .map(s => s.trim())
                        ), true);
            }
            setExcelLines(
                $(".subtle")
                    .toArray()
                    .flatMap(el => {
                            const arr = $(el).find(".topic_content").html()
                                .split(/<br\s*\/?>/i);
                            arr.unshift($(el).children().first().text());
                            return arr;
                        }
                    ), true);
            setExcelLines([$(".topic_buttons")], true);

            const $replyArea = $("#Main :nth-child(2 of .box)");
            const $paginator = $replyArea.find(".ps_container").first();
            addEmptyExcelLines();
            setExcelLines([$replyArea.children().first(), $paginator], true);
            setExcelLines($("div[id^='r_']")
                .toArray()
                .flatMap(el => {
                        const $reply = $(el).find("td").eq(2);
                        const $name = $reply.find("strong");
                        const $badges = $reply.find(".badges");
                        const $ago = $reply.find("span.ago");
                        const $thanks = $reply.children('span').eq(1);
                        const $feedback = $reply.find(".fr").first();
                        $name.css("margin-right", "10px");
                        $badges.css("margin-right", "10px");
                        $ago.css("margin-right", "10px");
                        const $sender = $name.add($ago).add($feedback).add($badges).add($thanks).wrapAll("<span/>");
                        const content = $reply.find(".reply_content").html().split(/<br\s*\/?>/i);
                        return [$sender, ...content];
                    }
                ), true);
            setExcelLines([$paginator.clone()], true);

            const $replyBox = $("#reply-box");
            $replyBox.hide();
            setExcelLines([$replyBox], true);
            const $showReplyBox = $('<span class="disguised-link">显示回复框</span>');
            $showReplyBox.click(function () {
                $replyBox.show();
                $(this).hide();
            });
            $replyBox.before($showReplyBox);

            padExcelBlankLines();
        }

        registerImageIndicators();

        if (config.mode === DICT.MODE.WORD) {
            $("div.header").remove();
            $("div[id^='r_'] tr td:first-child").remove();
        }

        addGlobalStyle(`
        .topic_buttons {
            background: none;
        }
        a.tag:link {
            background-color: unset;
        }
        div.cell {
            border-bottom: none;
        }
        div.ps_container {
            background: none;
        }
        .button {
            background-image: none !important;
        }
        .page_normal:active, .page_normal:link, .page_normal:visited, .page_current {
            box-shadow: none;
            border: none;
        }
        .page_input {
            box-shadow: none;
            border: 1px solid #f1f1f1;
        }
        img[alt='Reply'] {
            filter: brightness(140%) contrast(90%);
        }
        img[alt='❤️'] {
            opacity: 0.2;
        }
        small, small a:link, small a:visited {
            color: black !important;
        }
        .badge {
            color: #a0d9ff !important;
            border-color: #a0d9ff !important;
        }
        .box {
            box-shadow: none;
            border-bottom: 1px solid #F1F1F1 !important;
        }
        `);
        addWordStyle(`
        div.subtle, div.outdated {
           border-left: none;
           border-bottom: none;
        }
        .button {
            padding: 1px !important;
        }
        `);
        addExcelStyle(`
        p {
            margin-block-start: 0;
            margin-block-end: 0;
        }
        .ps_container .page_input {
            padding: 0;
        }
        .button {
            padding: 0 !important;
        }
        `);

    }

    /**
     * v站-列表
     *
     * e.g. https://www.v2ex.com/recent?p=1
     * e.g. https://www.v2ex.com/?tab=creative
     * e.g. https://www.v2ex.com/
     * e.g. https://www.v2ex.com/go/ipad?p=1
     */
    function v2exList() {
        setDisguisedTitle(originalTitle);
        setWordContent($("#Main"));

        setExcelLines([
            $(".node-breadcrumb"),
            $(".topic-count"),
            $(".intro"),
            $(".header"),
            $(".cell_ops"),
            $(".ps_container").first(),
            $("#Tabs"),
            $("#SecondaryTabs")
        ]);
        setExcelLines($(".cell.item").get(), true);
        setExcelLines($("#TopicsNode").children().get(), true);
        setExcelLines([
            $(".ps_container").first(),
            $("#Main").children(".box").eq(0).children().last().filter(".inner"),
            $("#Main .cell.flex-one-row"),
            $(".cell>form"),
        ], true);
        setExcelLines($("strong:contains('V2EX')").parent().parent().parent().children().get(), true);


        $("div.cell.item tr td:nth-child(-n+2)").remove();
        $("div[class*=' t_'] tr td:nth-child(-n+2)").remove();


        addGlobalStyle(`
        div.cell {
            border-bottom: none;
        }
        div.ps_container {
            background: none;
        }
        .button {
            background-image: none !important;
        }
        .page_normal:active, .page_normal:link, .page_normal:visited, .page_current {
            box-shadow: none;
            border: none;
        }
        .page_input {
            box-shadow: none;
            border: 1px solid #f1f1f1;
        }
        .badge {
            color: #a0d9ff !important;
            border-color: #a0d9ff !important;
        }
        .box {
            box-shadow: none;
            border-bottom: 1px solid #F1F1F1 !important;
        }
        .cell_ops {
            box-shadow: none;
        }
        a.count_livid:link {
            background-color: #e5e5e5;
        }
        .page-content-header > img {
            display: none;
        }
        div.intro {
            color: black;
        }
        `);
        addWordStyle(`
        .button {
            padding: 1px !important;
        }
        `);
        addExcelStyle(`
        .ps_container .page_input {
            padding: 0;
        }
        .node-breadcrumb a {
            color: black;
        }
        .header {
            overflow: hidden;
            border: none;
        }
        #SecondaryTabs {
            padding: 0;
        }
        .button {
            padding: 0 !important;
        }
        `);
    }

    /**
     * 可乐小说
     * e.g. https://www.kelexs.com/book/DBIFGD-15.html
     */
    function www_kelexs_com() {
        $("#ad-container").remove();
        addGlobalStyle(`
        html, body {
            text-align: unset;
        }
        .btnW .btnBlack {
            display: unset;
            border: none;
            background-color: ${link_bg_color};
            color: ${link_text_color};
        }
        `);
        addWordStyle(`
        p {
            margin: 16px;
        }
        `);
        addExcelStyle(`
        .btnBlack {
            line-height: unset;
        }
        `);
        setDisguisedTitle($("h1.title").text());
        setWordDetail($("div.about").text());
        setWordContent($("div.content"));
        setWordContent($(".conBox .btnW"));
        setExcelContent($("div.content"), "p");
        setExcelLines([$(".conBox .btnW")], true);
    }

    /**
     * e.g. #contentContainer, svg: https://z-library.ec/book/88886268/431cbe
     * e.g. #innerWrapper, p:  https://z-library.ec/book/29358009/64db39
     */
    function z_library() {

        excelUnsupported();

        addGlobalStyle(`
        #contentContainer > .page {
            width: unset !important;
            box-shadow: none !important;
        }
        .control-cell_big {
            justify-content: unset;
        }
        #pageControls {
            margin-top: 1px;
        }
        #disguised-content div {
            background-color: rgba(0, 0, 0, 0) !important;
        }
        `);

        const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach(node => {
                        if (node.id === 'container') {
                            observer.disconnect();
                            setWordContent($("#innerWrapper"));
                            zLibraryCommon();
                        } else if (node.id === 'viewer-wrapper') {
                            observer.disconnect();
                            setWordContent($("#contentContainer"));
                            zLibraryCommon();
                        }
                    });
                }
            }
        });
        observer.observe($("#idrviewer").get(0), {childList: true, subtree: false});

        const titleObserver = new MutationObserver(function (mutationsList) {
            mutationsList.forEach(function (mutation) {
                if (mutation.type === 'childList' || mutation.type === 'characterData') {
                    titleObserver.disconnect();
                    setDisguisedTitle($("#bookTitle").text());
                    overridePageTitle();
                }
            });
        });
        titleObserver.observe($("#bookTitle").get(0), {childList: true, characterData: true, subtree: true});

        function zLibraryCommon() {
            setWordDetail($("#pageControls"));
            const {teardown} = bridgeScrollContainers('#idrviewer', '#disguised-body', {
                twoWay: false,
                patchJQuery: true,
                mirrorGlobal: false,
                syncNative: false
            });
            patchNativeScrollProxy('#idrviewer', '#disguised-body');
        }

    }

///////////////////////////// 站点结束

    // 切换原版界面
    document.addEventListener('keydown', function (event) {
        // 判断是否按下 E 键
        if (event.key === 'e' && !event.ctrlKey && !event.altKey && !event.metaKey) {
            if (config.mode === DICT.MODE.ORIGINAL) {
                applyMode(config.lastVisibleMode);
            } else {
                applyMode(DICT.MODE.ORIGINAL);

            }
        }
    });

    //如果是原始模式
    if (config.mode === DICT.MODE.ORIGINAL) {
        addGlobalStyle(`
        .nd-switch-indicator {
            position: fixed;
            top: 10px;
            right: 10px;
            display: flex;
            flex-direction: row;
            align-items: center;
            height: auto;
            padding: 2rem;
            border-radius: 1rem;
            background: rgba(255, 255, 255, 0.6);
            -webkit-backdrop-filter: blur(10px);
            backdrop-filter: blur(10px);
            color: black;
            font-size: 14px;
        }
        
        .nd-switch-key {
            border: solid 1px black;
            border-radius: 8px;
            width: 1.5rem;
            height: 1.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 5px;
        }
        `);
        const $indicator = $(`<div class="nd-switch-indicator">按<div class="nd-switch-key">E</div>键开启伪装</div>`);
        $indicator.appendTo(document.body);
        return;
    }

    // main
    common();
    const currentHost = window.location.host;
    const currentPathName = window.location.pathname;
    printLog('currentHost', currentHost);

    switch (currentHost) {
        case 'www.qidian.com':
            qidian();
            break;
        case 'fanqienovel.com':
            fanqie();
            break;
        case `www.biquge.net`:
            biquge_net();
            break;
        case 'www.xbiqugu.net':
        case 'www.xbiqugu.la':
            xbiqugu_net();
            break;
        case 'www.biquge.co':
            biquge_co();
            break;
        case 'www.52wx.com':
            www_52wx_com();
            break;
        case 'www.3bqg.cc':
            www_3bqg_cc();
            break;
        case 'www.bigee.cc':
            www_bigee_cc();
            break;
        case 'www.beqege.cc':
            www_beqege_cc();
            break;
        case 'www.biqukun.com':
            www_biqukun_com();
            break;
        case 'www.biquge.tw':
            www_biquge_tw();
            break;
        case 'www.wenku8.net':
            www_wenku8_net();
            break;
        case 'www.linovelib.com':
            linovelib_com();
            break;
        case 'www.bilinovel.com':
            biilinovel_com();
            break;
        case 'www.qimao.com':
            qimao_com();
            break;
        case 'www.jjwxc.net':
            jinjiang();
            break;
        case 'my.jjwxc.net':
            jinjiangBuy();
            break;
        case 'www.lightnovel.us':
            lightnovel_us();
            break;
        case 'b.faloo.com':
            faloo_com();
            break;
        case '69shuba.cx':
        case 'www.69shuba.com':
            _69shuba_cx();
            break;
        case 'www.owlook.com.cn':
        case 'owlook.com.cn':
            www_owlook_com_cn();
            break;
        case 'www.ciweimao.com':
            ciweimao_com();
            break;
        case 'www.v2ex.com':
            if (currentPathName.startsWith('/t/')) {
                v2exThread();
            } else if (currentPathName.startsWith('/go/') || currentPathName.startsWith('/recent') || currentPathName === '/') {
                v2exList();
            }
            break;
        case 'www.kelexs.com':
            www_kelexs_com();
            break;
        case 'reader.z-library.ec':
        case 'reader.z-library.sk':
            z_library();
            break;
        default:
            printLog("error", "当前站点未适配");

    }

    GM_registerMenuCommand("设置", settings);

    printLog("novel-disguise 载入完成");
})
();
