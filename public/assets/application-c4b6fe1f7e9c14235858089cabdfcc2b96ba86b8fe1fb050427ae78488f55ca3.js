(function(){var t=this;(function(){(function(){this.Rails={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",buttonClickSelector:{selector:"button[data-remote]:not([form]), button[data-confirm]:not([form])",exclude:"form button"},inputChangeSelector:"select[data-remote], input[data-remote], textarea[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",formDisableSelector:"input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",formEnableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",fileInputSelector:"input[name][type=file]:not([disabled])",linkDisableSelector:"a[data-disable-with], a[data-disable]",buttonDisableSelector:"button[data-remote][data-disable-with], button[data-remote][data-disable]"}}).call(this)}).call(t);var e=t.Rails;(function(){(function(){var t,n;n=Element.prototype.matches||Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector,e.matches=function(t,e){return null!=e.exclude?n.call(t,e.selector)&&!n.call(t,e.exclude):n.call(t,e)},t="_ujsData",e.getData=function(e,n){var a;return null!=(a=e[t])?a[n]:void 0},e.setData=function(e,n,a){return null==e[t]&&(e[t]={}),e[t][n]=a},e.$=function(t){return Array.prototype.slice.call(document.querySelectorAll(t))}}).call(this),function(){var t,n,a;t=e.$,a=e.csrfToken=function(){var t;return(t=document.querySelector("meta[name=csrf-token]"))&&t.content},n=e.csrfParam=function(){var t;return(t=document.querySelector("meta[name=csrf-param]"))&&t.content},e.CSRFProtection=function(t){var e;if(null!=(e=a()))return t.setRequestHeader("X-CSRF-Token",e)},e.refreshCSRFTokens=function(){var e,r;if(r=a(),e=n(),null!=r&&null!=e)return t('form input[name="'+e+'"]').forEach(function(t){return t.value=r})}}.call(this),function(){var t,n,a;a=e.matches,"function"!=typeof(t=window.CustomEvent)&&((t=function(t,e){var n;return(n=document.createEvent("CustomEvent")).initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}).prototype=window.Event.prototype),n=e.fire=function(e,n,a){var r;return r=new t(n,{bubbles:!0,cancelable:!0,detail:a}),e.dispatchEvent(r),!r.defaultPrevented},e.stopEverything=function(t){return n(t.target,"ujs:everythingStopped"),t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation()},e.delegate=function(t,e,n,r){return t.addEventListener(n,function(t){var n;for(n=t.target;n instanceof Element&&!a(n,e);)n=n.parentNode;if(n instanceof Element&&!1===r.call(n,t))return t.preventDefault(),t.stopPropagation()})}}.call(this),function(){var t,n,a,r,o,i;n=e.CSRFProtection,r=e.fire,t={"*":"*/*",text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript",script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},e.ajax=function(t){var e;return t=o(t),e=a(t,function(){var n;return n=i(e.response,e.getResponseHeader("Content-Type")),2===Math.floor(e.status/100)?"function"==typeof t.success&&t.success(n,e.statusText,e):"function"==typeof t.error&&t.error(n,e.statusText,e),"function"==typeof t.complete?t.complete(e,e.statusText):void 0}),"function"==typeof t.beforeSend&&t.beforeSend(e,t),e.readyState===XMLHttpRequest.OPENED?e.send(t.data):r(document,"ajaxStop")},o=function(e){return e.url=e.url||location.href,e.type=e.type.toUpperCase(),"GET"===e.type&&e.data&&(e.url.indexOf("?")<0?e.url+="?"+e.data:e.url+="&"+e.data),null==t[e.dataType]&&(e.dataType="*"),e.accept=t[e.dataType],"*"!==e.dataType&&(e.accept+=", */*; q=0.01"),e},a=function(t,e){var a;return(a=new XMLHttpRequest).open(t.type,t.url,!0),a.setRequestHeader("Accept",t.accept),"string"==typeof t.data&&a.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),t.crossDomain||a.setRequestHeader("X-Requested-With","XMLHttpRequest"),n(a),a.withCredentials=!!t.withCredentials,a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE)return e(a)},a},i=function(t,e){var n,a;if("string"==typeof t&&"string"==typeof e)if(e.match(/\bjson\b/))try{t=JSON.parse(t)}catch(r){}else if(e.match(/\b(?:java|ecma)script\b/))(a=document.createElement("script")).text=t,document.head.appendChild(a).parentNode.removeChild(a);else if(e.match(/\b(xml|html|svg)\b/)){n=new DOMParser,e=e.replace(/;.+/,"");try{t=n.parseFromString(t,e)}catch(r){}}return t},e.href=function(t){return t.href},e.isCrossDomain=function(t){var e,n;(e=document.createElement("a")).href=location.href,n=document.createElement("a");try{return n.href=t,!((!n.protocol||":"===n.protocol)&&!n.host||e.protocol+"//"+e.host==n.protocol+"//"+n.host)}catch(a){return a,!0}}}.call(this),function(){var t,n;t=e.matches,n=function(t){return Array.prototype.slice.call(t)},e.serializeElement=function(e,a){var r,o;return r=[e],t(e,"form")&&(r=n(e.elements)),o=[],r.forEach(function(e){if(e.name)return t(e,"select")?n(e.options).forEach(function(t){if(t.selected)return o.push({name:e.name,value:t.value})}):e.checked||-1===["radio","checkbox","submit"].indexOf(e.type)?o.push({name:e.name,value:e.value}):void 0}),a&&o.push(a),o.map(function(t){return null!=t.name?encodeURIComponent(t.name)+"="+encodeURIComponent(t.value):t}).join("&")},e.formElements=function(e,a){return t(e,"form")?n(e.elements).filter(function(e){return t(e,a)}):n(e.querySelectorAll(a))}}.call(this),function(){var t,n,a;n=e.fire,a=e.stopEverything,e.handleConfirm=function(e){if(!t(this))return a(e)},t=function(t){var e,a,r;if(!(r=t.getAttribute("data-confirm")))return!0;if(e=!1,n(t,"confirm")){try{e=confirm(r)}catch(o){}a=n(t,"confirm:complete",[e])}return e&&a}}.call(this),function(){var t,n,a,r,o,i,l,u,c,s,d;c=e.matches,u=e.getData,s=e.setData,d=e.stopEverything,l=e.formElements,e.handleDisabledElement=function(t){if(this.disabled)return d(t)},e.enableElement=function(t){var n;return n=t instanceof Event?t.target:t,c(n,e.linkDisableSelector)?i(n):c(n,e.buttonDisableSelector)||c(n,e.formEnableSelector)?r(n):c(n,e.formSubmitSelector)?o(n):void 0},e.disableElement=function(r){var o;return o=r instanceof Event?r.target:r,c(o,e.linkDisableSelector)?a(o):c(o,e.buttonDisableSelector)||c(o,e.formDisableSelector)?t(o):c(o,e.formSubmitSelector)?n(o):void 0},a=function(t){var e;return null!=(e=t.getAttribute("data-disable-with"))&&(s(t,"ujs:enable-with",t.innerHTML),t.innerHTML=e),t.addEventListener("click",d),s(t,"ujs:disabled",!0)},i=function(t){var e;return null!=(e=u(t,"ujs:enable-with"))&&(t.innerHTML=e,s(t,"ujs:enable-with",null)),t.removeEventListener("click",d),s(t,"ujs:disabled",null)},n=function(n){return l(n,e.formDisableSelector).forEach(t)},t=function(t){var e;return null!=(e=t.getAttribute("data-disable-with"))&&(c(t,"button")?(s(t,"ujs:enable-with",t.innerHTML),t.innerHTML=e):(s(t,"ujs:enable-with",t.value),t.value=e)),t.disabled=!0,s(t,"ujs:disabled",!0)},o=function(t){return l(t,e.formEnableSelector).forEach(r)},r=function(t){var e;return null!=(e=u(t,"ujs:enable-with"))&&(c(t,"button")?t.innerHTML=e:t.value=e,s(t,"ujs:enable-with",null)),t.disabled=!1,s(t,"ujs:disabled",null)}}.call(this),function(){var t;t=e.stopEverything,e.handleMethod=function(n){var a,r,o,i,l,u,c;if(u=this,c=u.getAttribute("data-method"))return l=e.href(u),r=e.csrfToken(),a=e.csrfParam(),o=document.createElement("form"),i="<input name='_method' value='"+c+"' type='hidden' />",null==a||null==r||e.isCrossDomain(l)||(i+="<input name='"+a+"' value='"+r+"' type='hidden' />"),i+='<input type="submit" />',o.method="post",o.action=l,o.target=u.target,o.innerHTML=i,o.style.display="none",document.body.appendChild(o),o.querySelector('[type="submit"]').click(),t(n)}}.call(this),function(){var t,n,a,r,o,i,l,u,c,s=[].slice;i=e.matches,a=e.getData,u=e.setData,n=e.fire,c=e.stopEverything,t=e.ajax,r=e.isCrossDomain,l=e.serializeElement,o=function(t){var e;return null!=(e=t.getAttribute("data-remote"))&&"false"!==e},e.handleRemote=function(d){var m,f,p,b,h,v,S;return b=this,!o(b)||(n(b,"ajax:before")?(S=b.getAttribute("data-with-credentials"),p=b.getAttribute("data-type")||"script",i(b,e.formSubmitSelector)?(m=a(b,"ujs:submit-button"),h=a(b,"ujs:submit-button-formmethod")||b.method,v=a(b,"ujs:submit-button-formaction")||b.getAttribute("action")||location.href,"GET"===h.toUpperCase()&&(v=v.replace(/\?.*$/,"")),"multipart/form-data"===b.enctype?(f=new FormData(b),null!=m&&f.append(m.name,m.value)):f=l(b,m),u(b,"ujs:submit-button",null),u(b,"ujs:submit-button-formmethod",null),u(b,"ujs:submit-button-formaction",null)):i(b,e.buttonClickSelector)||i(b,e.inputChangeSelector)?(h=b.getAttribute("data-method"),v=b.getAttribute("data-url"),f=l(b,b.getAttribute("data-params"))):(h=b.getAttribute("data-method"),v=e.href(b),f=b.getAttribute("data-params")),t({type:h||"GET",url:v,data:f,dataType:p,beforeSend:function(t,e){return n(b,"ajax:beforeSend",[t,e])?n(b,"ajax:send",[t]):(n(b,"ajax:stopped"),t.abort())},success:function(){var t;return t=1<=arguments.length?s.call(arguments,0):[],n(b,"ajax:success",t)},error:function(){var t;return t=1<=arguments.length?s.call(arguments,0):[],n(b,"ajax:error",t)},complete:function(){var t;return t=1<=arguments.length?s.call(arguments,0):[],n(b,"ajax:complete",t)},crossDomain:r(v),withCredentials:null!=S&&"false"!==S}),c(d)):(n(b,"ajax:stopped"),!1))},e.formSubmitButtonClick=function(){var t,e;if(t=this,e=t.form)return t.name&&u(e,"ujs:submit-button",{name:t.name,value:t.value}),u(e,"ujs:formnovalidate-button",t.formNoValidate),u(e,"ujs:submit-button-formaction",t.getAttribute("formaction")),u(e,"ujs:submit-button-formmethod",t.getAttribute("formmethod"))},e.handleMetaClick=function(t){var e,n,a;if(n=this,a=(n.getAttribute("data-method")||"GET").toUpperCase(),e=n.getAttribute("data-params"),(t.metaKey||t.ctrlKey)&&"GET"===a&&!e)return t.stopImmediatePropagation()}}.call(this),function(){var t,n,a,r,o,i,l,u,c,s,d,m,f,p;i=e.fire,a=e.delegate,u=e.getData,t=e.$,p=e.refreshCSRFTokens,n=e.CSRFProtection,o=e.enableElement,r=e.disableElement,s=e.handleDisabledElement,c=e.handleConfirm,f=e.handleRemote,l=e.formSubmitButtonClick,d=e.handleMetaClick,m=e.handleMethod,"undefined"==typeof jQuery||null===jQuery||null==jQuery.ajax||jQuery.rails||(jQuery.rails=e,jQuery.ajaxPrefilter(function(t,e,a){if(!t.crossDomain)return n(a)})),e.start=function(){if(window._rails_loaded)throw new Error("rails-ujs has already been loaded!");return window.addEventListener("pageshow",function(){return t(e.formEnableSelector).forEach(function(t){if(u(t,"ujs:disabled"))return o(t)}),t(e.linkDisableSelector).forEach(function(t){if(u(t,"ujs:disabled"))return o(t)})}),a(document,e.linkDisableSelector,"ajax:complete",o),a(document,e.linkDisableSelector,"ajax:stopped",o),a(document,e.buttonDisableSelector,"ajax:complete",o),a(document,e.buttonDisableSelector,"ajax:stopped",o),a(document,e.linkClickSelector,"click",s),a(document,e.linkClickSelector,"click",c),a(document,e.linkClickSelector,"click",d),a(document,e.linkClickSelector,"click",r),a(document,e.linkClickSelector,"click",f),a(document,e.linkClickSelector,"click",m),a(document,e.buttonClickSelector,"click",s),a(document,e.buttonClickSelector,"click",c),a(document,e.buttonClickSelector,"click",r),a(document,e.buttonClickSelector,"click",f),a(document,e.inputChangeSelector,"change",s),a(document,e.inputChangeSelector,"change",c),a(document,e.inputChangeSelector,"change",f),a(document,e.formSubmitSelector,"submit",s),a(document,e.formSubmitSelector,"submit",c),a(document,e.formSubmitSelector,"submit",f),a(document,e.formSubmitSelector,"submit",function(t){return setTimeout(function(){return r(t)},13)}),a(document,e.formSubmitSelector,"ajax:send",r),a(document,e.formSubmitSelector,"ajax:complete",o),a(document,e.formInputClickSelector,"click",s),a(document,e.formInputClickSelector,"click",c),a(document,e.formInputClickSelector,"click",l),document.addEventListener("DOMContentLoaded",p),window._rails_loaded=!0},window.Rails===e&&i(document,"rails:attachBindings")&&e.start()}.call(this)}).call(this),"object"==typeof module&&module.exports?module.exports=e:"function"==typeof define&&define.amd&&define(e)}).call(this);