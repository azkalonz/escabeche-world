﻿var layertemp={open:function(f,j,g){var h=document.createElement("iframe");h.src="about:blank";h.id="ifmBack";h.style.position="absolute";h.style.left="0";h.style.top="0";h.style.zIndex="1000";h.style.filter="alpha(opacity=78)";h.style.MozOpacity="0.78";h.style.opacity="0.78";h.style.backgroundColor="#000";h.frameBorder="0";h.width=(document.body.clientWidth<860)?"860px":parseInt(document.body.clientWidth)+"px";h.height=parseInt(document.documentElement.scrollHeight)+"px";h.style.margin="0";document.body.appendChild(h);var i=document.createElement("iframe");i.src=f;i.id="ifmcontents";i.style.position="absolute";i.style.left=(parseInt(document.body.clientWidth)/2)-(parseInt(j)/2)+"px";i.style.top=((parseInt(document.documentElement.clientHeight)/2)+(parseInt(document.documentElement.scrollTop)))-(parseInt(g)/2)+"px";i.style.zIndex="1000";i.allowTransparency="true";i.style.backgroundColor="transparent";i.frameBorder="0";i.width=j;i.height=g;i.style.margin="0";document.body.appendChild(i);window.onresize=function(){h.width=(document.body.clientWidth<860)?"860px":parseInt(document.body.clientWidth)+"px";h.height=parseInt(document.documentElement.scrollHeight)+"px";i.style.left=(parseInt(document.body.clientWidth)/2)-(parseInt(j)/2)+"px";i.style.top=((parseInt(document.documentElement.clientHeight)/2)+(parseInt(document.documentElement.scrollTop)))-(parseInt(g)/2)+"px"}},close:function(){document.body.removeChild(document.getElementById("ifmcontents"));document.body.removeChild(document.getElementById("ifmBack"));window.onresize=function(){}}};var Common={SetCookie:function(f,h,e){var g=new Date();g.setDate(g.getDate()+e);document.cookie=f+"="+escape(h)+"; path=/;expires="+g.toGMTString()+";"},GetCookie:function(e){var f=e+"=";var g=0;while(g<=document.cookie.length){var h=(g+f.length);if(document.cookie.substring(g,h)==f){if((endOfCookie=document.cookie.indexOf(";",h))==-1){endOfCookie=document.cookie.length}return unescape(document.cookie.substring(h,endOfCookie))}g=document.cookie.indexOf(" ",g)+1;if(g==0){break}}return""}};$(function(){serverTime.init("tServerTime","tLocalTime");$("#gstView").click(function(){$("#gstView").hide();$("#gstNone").show();$("#gstYourTime").slideDown(100,function(){$(".gGST_BoxOff").addClass("gGST_BoxBgNone")})});$("#gstNone").click(function(){$(".gGST_BoxOff").removeClass("gGST_BoxBgNone");$("#gstYourTime").slideUp(50);$("#gstNone").hide();$("#gstView").show()})});var serverTime={weekDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],serverDate:null,localDate:null,dateOffset:null,nowDate:null,eleServer:null,eleLocal:null,init:function(e,c){var f=this;f.eleServer=e;f.eleLocal=c;$.getJSON(gp.Http.Platform+"/ServerTime?callback=?",function(a){f.serverDate=new Date(a.ServerTime);f.localDate=new Date();f.dateOffset=f.serverDate-f.localDate;document.getElementById(f.eleServer).innerHTML=f.dateTimeFormat(f.serverDate);document.getElementById(f.eleLocal).innerHTML=f.dateTimeFormat(f.localDate);setInterval(function(){f.update()},1000)})},update:function(){var b=this;b.nowDate=new Date();document.getElementById(b.eleLocal).innerHTML=b.dateTimeFormat(b.nowDate);b.nowDate.setTime(b.nowDate.getTime()+b.dateOffset);document.getElementById(b.eleServer).innerHTML=b.dateTimeFormat(b.nowDate)},dateTimeFormat:function(e){var c=this;var f=[];f.push(c.digit(e.getHours()));f.push(":");f.push(c.digit(e.getMinutes()));f.push(":");f.push(c.digit(e.getSeconds()));f.push(" ");f.push(c.weekDays[e.getDay()]);f.push(" ");f.push(c.monthNames[e.getMonth()]);f.push(" ");f.push(e.getDate());return f.join("")},dateFormat:function(e){var c=this;var f=[];f.push(c.weekDays[e.getDay()]);f.push(" ");f.push(c.monthNames[e.getMonth()]);f.push(" ");f.push(e.getDate());return f.join("")},dateFormat2:function(e){var c=this;var f=[];f.push(c.monthNames[e.getMonth()]);f.push(" ");f.push(c.digit(e.getDay()));f.push(". ");f.push(e.getFullYear());return f.join("")},digit:function(b){b=String(b);b=b.length==1?"0"+b:b;return b}};var fm_all=null;var div=null;var imgdiv=null;var fm=null;function coverScreen(e){var d=parseInt(document.documentElement.scrollHeight)+"px";var f=parseInt(document.body.offsetWidth)+"px";div=document.createElement("iframe");div.className="dvclass";div.style.top="0px";div.style.left="0px";div.style.width=f;div.style.height=d;div.style.position="absolute";div.style.zIndex=9990;div.style.display="none";div.frameBorder="0";div.style.margin="0";div.src=e;document.body.appendChild(div);document.body.onresize=document.body.onresizestart=document.body.onresizeend=document.body.onscroll=function(){div.style.top="0px";div.style.left="0px";div.style.width=parseInt(document.body.offsetWidth)+"px";div.style.height=parseInt(document.documentElement.scrollHeight)+"px";imgdiv.style.left=(parseInt(document.documentElement.clientWidth)/2)-(parseInt(imgdiv.style.width)/2)+"px"};imgdiv=document.createElement("div");imgdiv.style.width=400;imgdiv.style.height=400;imgdiv.style.left=(parseInt(div.style.width)/2)-(parseInt(imgdiv.style.width)/2)+"px";imgdiv.style.top=(parseInt(document.documentElement.clientHeight)/2)-(parseInt(imgdiv.style.height)/2)+"px";imgdiv.style.position="absolute";imgdiv.style.zIndex=9999;imgdiv.style.display="none";imgdiv.style.backgroundColor="transparent";imgdiv.style.color="#FFFFFF";document.body.appendChild(imgdiv);fm=document.createElement("iframe");fm.id="iframe_pop";fm.style.width="100%";fm.style.height="100%";fm.allowTransparency="true";fm.style.backgroundColor="transparent";fm.frameBorder="0";fm.style.margin="0";imgdiv.appendChild(fm)}function openPopup(k,l,i,j){var g="_popup";if(typeof(j)!="undefined"){g=j}var h=window.open(k,g,"width="+l+", height="+i);h.focus()}function openChannelPopup(g,e,f){var h=encodeURIComponent("http://"+document.location.host+"/main/uploader");openPopup(f+"?ReturnID="+h,g,e)}function showImg(f,d,e){if(document.location.host.indexOf(".webzen.com")==-1){e=e.href.replace("Uploader/index.html","Uploader/channel/index.html");openChannelPopup(f,d,e);return}if(div==null){coverScreen(gp.Http.Portal+"/Scripts/back.html")}imgdiv.style.width=f+"px";imgdiv.style.height=d+"px";imgdiv.style.left=(parseInt(document.documentElement.clientWidth)/2)-(parseInt(imgdiv.style.width)/2)+"px";imgdiv.style.top=((parseInt(document.documentElement.clientHeight)/2)+(parseInt(document.body.scrollTop+document.documentElement.scrollTop)))-(parseInt(d)/2)+"px";fm.src=e;div.style.display="block";imgdiv.style.display="block"}function hideImg(){div.style.display="none";imgdiv.style.display="none";fm.src=""};function trim(b){return b.replace(/(^\s+)|(\s+)$/,"")}function fnLoginAlert(){alert("Please sign-in to your account.")}function fnChkBlank(b){if(b==""||b.split(" ").join("")==""){return true}else{return false}}function fnCutLength(n,j){var i=0;var l="";for(var h=0;h<n.length;h++){var k=n.charCodeAt(h);var m=n.charAt(h);if((k>=0)&&(k<256)){i++}else{i+=2}if(i>j){break}else{l=l+m}}return l}function fnChkLength(l){var h=0;var j="";for(var g=0;g<l.length;g++){var i=l.charCodeAt(g);var k=l.charAt(g);if((i>=0)&&(i<256)){h++}else{h+=2}}return h}function fnValidateEmpty(d,f){var e=d.value.replace(/(^\s*)|(\s*$)/g,"");if(e==""){if(f!=""){alert(f);if(d.type!="hidden"){d.focus()}}d.value=e;return false}return true}function fnValidateSize(q,t,p,i,l){var r=q.value.replace(/(^\s*)|(\s*$)/g,"");var o,n,s;o=0;if(i){for(var m=0;m<r.length;m++){n=r.charCodeAt(m);if((n>=0)&&(n<256)){o++}else{o+=2}}}else{o=r.length}if(l==1){if(o>p){blnResult=true}else{blnResult=false}}else{if(o<p){blnResult=true}else{blnResult=false}}if(blnResult){if(t!=""){alert(t);if(q.type!="hidden"){q.focus()}}q.value=r;return false}return true}function fnValidateRadio(e){var g=0;var h=document.getElementsByName(e);for(var f=0;f<h.length;f++){if(h[f].checked){g+=1;break}}if(g==0){return false}else{return true}}function fnIsNumeric(c){var d=new String(c);if(d.search(/\D/)!=-1){return false}return true}function addCommas(c){c+="";x=c.split(".");x1=x[0];x2=x.length>1?"."+x[1]:"";var d=/(\d+)(\d{3})/;while(d.test(x1)){x1=x1.replace(d,"$1,$2")}return x1+x2}function fnIsValidEmail(r){var q=r;var i="@";var k=".";var n=q.indexOf(i);var p=q.length;var o=q.indexOf(k);if(q.indexOf(i)==-1){return false}if(q.indexOf(i)==-1||q.indexOf(i)==0||q.indexOf(i)==p){return false}if(q.indexOf(i)==-1||q.indexOf(k)==0||q.indexOf(k)==p){return false}if(q.indexOf(i,(n+1))!=-1){return false}if(q.substring(n-1,n)==k||q.substring(n+1,n+2)==k){return false}if(q.indexOf(k,(n+2))==-1){return false}if(q.indexOf(" ")!=-1){return false}var m="*|,\":<>[]{}`';()$#%";for(var l=0;l<q.lengrh;l++){if(m.indexOf(q.charAt(l))!=-1){return false}}return true};var GameLib={_ACTIVEX_Version:"0929",_GameID:gp.ServiceCode.C9,_ServiceID:1,_AuthUseType:1,_FileCheck:0,_MultiClient:0,_GameStartUrl:gp.Http.C9+"/Starter",_GameStarterDownLoadUrl:gp.Http.Platform+"/Starter/install",_GameClientDownLoadUrl:gp.Http.C9+"/support/game-download",Exec:function(d){var c=this;this._ServiceID=d;if(gp.isLive){this._ServiceID=d}if(!gp.Util.IsLogin()){alert("Please sign-in to your account.");gp.GNB.OpenLogInLayer(500,500)}else{gp.GameStarter.Exec(c._FileCheck,c._GameID,c._ACTIVEX_Version,c._ServiceID,c._AuthUseType,c._MultiClient)}},ExecSc:function(){this._ServiceID=ServiceID;if(!gp.Util.IsLogin()){alert("Please sign-in to your account.");gp.GNB.OpenLogInLayer(500,500);return false}else{gp.GameStarter.Exec(this._FileCheck,this._GameID,this._ACTIVEX_Version,this._ServiceID,this._AuthUseType,this._MultiClient)}},moveStarterDownLoad:function(){layertemp.open(this._GameStarterDownLoadUrl,518,346);return false},moveClientDownLoad:function(){if(this._ServiceID==3){alert("Install the game client before starting the game.")}else{if(confirm("Install the game client before starting the game. Please click OK to move to the game client download page.")){document.location.href=this._GameClientDownLoadUrl}}},moveGamePlaying:function(b){return false}};(function(x){function J(a,b,d){var c=this;return this.on("click.pjax",a,function(e){var f=x.extend({},O(b,d));if(!f.container){f.container=x(this).attr("data-pjax")||c}K(e,f)})}function K(e,c,b){b=O(c,b);var a=e.currentTarget;if(a.tagName.toUpperCase()!=="A"){throw"$.fn.pjax or $.pjax.click requires an anchor element"}if(e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey){return}if(location.protocol!==a.protocol||location.host!==a.host){return}if(a.hash&&a.href.replace(a.hash,"")===location.href.replace(location.hash,"")){return}if(a.href===location.href+"#"){return}var d={url:a.href,container:x(a).attr("data-pjax"),target:a,fragment:null};Q(x.extend({},d,b));e.preventDefault()}function L(e,c,b){b=O(c,b);var a=e.currentTarget;if(a.tagName.toUpperCase()!=="FORM"){throw"$.pjax.submit requires a form element"}var d={type:a.method,url:a.action,data:x(a).serializeArray(),container:x(a).attr("data-pjax"),target:a,fragment:null,timeout:0};Q(x.extend({},d,b));e.preventDefault()}function Q(a){a=x.extend(true,{},x.ajaxSettings,Q.defaults,a);if(x.isFunction(a.url)){a.url=a.url()}var b=a.target;var g=P(a.url).hash;var e=a.context=I(a.container);if(!a.data){a.data={}}a.data._pjax=e.selector;function f(j,h){var i=x.Event(j,{relatedTarget:b});e.trigger(i,h);return !i.isDefaultPrevented()}var c;a.beforeSend=function(j,i){if(i.type!=="GET"){i.timeout=0}if(i.timeout>0){c=setTimeout(function(){if(f("pjax:timeout",[j,a])){j.abort("timeout")}},i.timeout);i.timeout=0}j.setRequestHeader("X-PJAX","true");j.setRequestHeader("X-PJAX-Container",e.selector);var h;if(!f("pjax:beforeSend",[j,i])){return false}a.requestUrl=P(i.url).href};a.complete=function(i,h){if(c){clearTimeout(c)}f("pjax:complete",[i,h,a]);f("pjax:end",[i,a])};a.error=function(l,k,j){var i=F("",l,a);var h=f("pjax:error",[l,k,j,a]);if(k!=="abort"&&h){M(i.url)}};a.success=function(i,j,m){var h=F(i,m,a);if(!h.contents){M(h.url);return}Q.state={id:a.id||T(),url:h.url,title:h.title,container:e.selector,fragment:a.fragment,timeout:a.timeout};if(a.push||a.replace){window.history.replaceState(Q.state,h.title,h.url)}if(h.title){document.title=h.title}e.html(h.contents);if(typeof a.scrollTo==="number"){x(window).scrollTop(a.scrollTo)}if((a.replace||a.push)&&window._gaq){_gaq.push(["_trackPageview"])}if(g!==""){var l=P(h.url);l.hash=g;Q.state.url=l.href;window.history.replaceState(Q.state,h.title,l.href);var k=x(l.hash);if(k.length){x(window).scrollTop(k.offset().top)}}f("pjax:success",[i,j,m,a])};if(!Q.state){Q.state={id:T(),url:window.location.href,title:document.title,container:e.selector,fragment:a.fragment,timeout:a.timeout};window.history.replaceState(Q.state,document.title)}var d=Q.xhr;if(d&&d.readyState<4){d.onreadystatechange=x.noop;d.abort()}Q.options=a;var d=Q.xhr=x.ajax(a);if(d.readyState>0){if(a.push&&!a.replace){C(Q.state.id,e.clone().contents());window.history.pushState(null,"",S(a.requestUrl))}f("pjax:start",[d,a]);f("pjax:send",[d,a])}return Q.xhr}function R(a,c){var b={url:window.location.href,push:false,replace:true,scrollTo:false};return Q(x.extend(b,O(a,c)))}function M(a){window.history.replaceState(null,"","#");window.location.replace(a)}function N(a){var d=a.state;if(d&&d.container){var e=x(d.container);if(e.length){var f=A[d.id];if(Q.state){var g=Q.state.id<d.id?"forward":"back";B(g,Q.state.id,e.clone().contents())}var c=x.Event("pjax:popstate",{state:d,direction:g});e.trigger(c);var b={id:d.id,url:d.url,container:e,push:false,fragment:d.fragment,timeout:d.timeout,scrollTo:false};if(f){e.trigger("pjax:start",[null,b]);if(d.title){document.title=d.title}e.html(f);Q.state=d;e.trigger("pjax:end",[null,b])}else{Q(b)}e[0].offsetHeight}else{M(location.href)}}}function G(a){var b=x.isFunction(a.url)?a.url():a.url,e=a.type?a.type.toUpperCase():"GET";var d=x("<form>",{method:e==="GET"?"GET":"POST",action:b,style:"display:none"});if(e!=="GET"&&e!=="POST"){d.append(x("<input>",{type:"hidden",name:"_method",value:e.toLowerCase()}))}var c=a.data;if(typeof c==="string"){x.each(c.split("&"),function(f,h){var g=h.split("=");d.append(x("<input>",{type:"hidden",name:g[0],value:g[1]}))})}else{if(typeof c==="object"){for(key in c){d.append(x("<input>",{type:"hidden",name:key,value:c[key]}))}}}x(document.body).append(d);d.submit()}function T(){return(new Date).getTime()}function S(a){return a.replace(/\?_pjax=[^&]+&?/,"?").replace(/_pjax=[^&]+&?/,"").replace(/[\?&]$/,"")}function P(b){var a=document.createElement("a");a.href=b;return a}function O(a,b){if(a&&b){b.container=a}else{if(x.isPlainObject(a)){b=a}else{b={container:a}}}if(b.container){b.container=I(b.container)}return b}function I(a){a=x(a);if(!a.length){throw"no pjax container for "+a.selector}else{if(a.selector!==""&&a.context===document){return a}else{if(a.attr("id")){return x("#"+a.attr("id"))}else{throw"cant get selector for pjax container!"}}}}function H(a,b){return a.filter(b).add(a.find(b))}function F(a,d,c){var b={};b.url=S(d.getResponseHeader("X-PJAX-URL")||c.requestUrl);if(/<html/i.test(a)){var g=x(a.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0]);var e=x(a.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0])}else{var g=e=x(a)}if(e.length===0){return b}b.title=H(g,"title").last().text();if(c.fragment){if(c.fragment==="body"){var f=e}else{var f=H(e,c.fragment).first()}if(f.length){b.contents=f.contents();if(!b.title){b.title=f.attr("title")||f.data("title")}}}else{if(!/<html/i.test(a)){b.contents=e}}if(b.contents){b.contents=b.contents.not("title");b.contents.find("title").remove()}if(b.title){b.title=x.trim(b.title)}return b}var A={};var z=[];var y=[];function C(a,b){A[a]=b;y.push(a);while(z.length){delete A[z.shift()]}while(y.length>Q.defaults.maxCacheLength){delete A[y.shift()]}}function B(c,d,b){var a,e;A[d]=b;if(c==="forward"){a=y;e=z}else{a=z;e=y}a.push(d);if(d=e.pop()){delete A[d]}}function E(){x.fn.pjax=J;x.pjax=Q;x.pjax.enable=x.noop;x.pjax.disable=D;x.pjax.click=K;x.pjax.submit=L;x.pjax.reload=R;x.pjax.defaults={timeout:2000,push:true,replace:false,type:"GET",dataType:"html",scrollTo:0,maxCacheLength:20};x(window).bind("popstate.pjax",N)}function D(){x.fn.pjax=function(){return this};x.pjax=G;x.pjax.enable=E;x.pjax.disable=x.noop;x.pjax.click=x.noop;x.pjax.submit=x.noop;x.pjax.reload=window.location.reload;x(window).unbind("popstate.pjax",N)}if(x.inArray("state",x.event.props)<0){x.event.props.push("state")}x.support.pjax=window.history&&window.history.pushState&&window.history.replaceState&&!navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/);x.support.pjax?E():D()})(jQuery);