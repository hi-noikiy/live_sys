define(function(b,a,c){var d=b("tins");c.exports={sortBy:function(g,e,f){e=(e)?-1:1;return function(h,i){h=h[g];i=i[g];if(typeof(f)!="undefined"){h=f(h);i=f(i)}if(h<i){return e*-1}if(h>i){return e*1}return 1}},uniqueArrayKey:function(e,j){var h=[];var g={};for(var f=0;f<e.length;f++){if(!g[e[f][j]]){h.push(e[f]);g[e[f][j]]=1}}return h},encodeHtml:function(f){return String(f).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")},decodeHtml:function(f){return String(f).replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")},dialog:function(g,j,n){var l='<a href="javascript:;" class="button button-highlight button-rounded oks">确定</a>';var k='<a href="javascript:;" class="button button-rounded button-tiny cancels">取消</a>';var m=UIF.handler.ie6?'<iframe style="position:absolute;top:0;left:0;z-index:-1;height:100%;width:100%;border:0;background-color:transparent"></iframe>':"";var f='<div class="tinyAlert">{0}							<div class="h">\u4FE1\u606F</div><div class="c">{1}</div>							<div class="t">{2}{3}</div>						</div>';var e=false;var h="";var i="";if(j){h=l}if(n){i=k}if(!j&&!n){h=l;e=true}d.box.show(this.stringFormat(f,m,g,h,i),0,0,0,0,3600);if(e){$(".tinyAlert .oks").click(function(){d.box.hide()})}else{$(".tinyAlert .oks").click(function(){j();d.box.hide()});$(".tinyAlert .cancels").click(function(){n();d.box.hide()})}},uuid:function(e,h){var l="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var k=l,g=[],f;h=h||k.length;if(e){for(f=0;f<e;f++){g[f]=k[0|Math.random()*h]}}else{var j;g[8]=g[13]=g[18]=g[23]="";g[14]="4";for(f=0;f<36;f++){if(!g[f]){j=0|Math.random()*16;g[f]=k[(f==19)?(j&3)|8:j]}}}return g.join("").toLowerCase()},stringFormat:function(){if(arguments.length==0){return this}var g=arguments[0];if(g!=null&&g!=""){for(var f=1;f<arguments.length;f++){var e=new RegExp("\\{"+(f-1)+"\\}","gm");if(arguments[f]!=null){g=g.replace(e,arguments[f])}}}return g},rand:function(f,e){return Math.floor(Math.random()*(e-f+1))+f},document:window.document,arrayDistinct:function(e){var g={};for(var f=0;f<e.length;f++){if(g[e[f]+1]){e.splice(f,1);f--;continue}g[e[f]+1]=true}g=null;return e},arrayIndexOf:function(e,k,f){if(Array.prototype.indexOf){return e.indexOf(k,(f||0))}else{for(var h=(f||0),g=e.length;h<g;h++){if(e[h]===k){return h}}return -1}},arrayContains:function(g,f){for(var e=0;e<g.length;e++){if(g[e]==f){return true}}return false},htmlEncode:function(f){var g=this.document.createElement("div"),e=this.document.createTextNode(f);g.appendChild(e);return g.innerHTML},htmlDecode:function(e){var f=this.document.createElement("div");f.innerHTML=e;return f.innerText||f.textContent},getCookie:function(f){if(!f){return""}if(document.cookie.length>0){var g=document.cookie.indexOf(f+"=");if(g!=-1){g=g+f.length+1;var e=document.cookie.indexOf(";",g);if(e==-1){e=document.cookie.length}return decodeURIComponent(document.cookie.substring(g,e))}}return""},setCookie:function(g,h,f){if(!g){return}var e=new Date();e.setTime(e.getTime()+f*1000);this.document.cookie=g+"="+encodeURIComponent(h)+";expires="+e.toGMTString()+";"},deleteCookie:function(e){if(!e){return}this.document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"},getStorage:function(e){if(!e){return}if(window.localStorage){return decodeURIComponent(localStorage.getItem(e))}else{return this.getCookie(e)}},setStorage:function(f,g,e){if(!f){return}if(window.localStorage){localStorage.setItem(f,encodeURIComponent(g))}else{this.setCookie(f,g,e)}},deleteStorage:function(e){if(!e){return}if(window.localStorage){localStorage.removeItem(e)}else{this.deleteCookie(e)}},daysInFebruary:function(f){var e=0;if(f instanceof Date){e=f.getFullYear()}else{if(typeof f==="number"){e=f}else{return 0}}if(e%4===0&&(e%100!==0||e%400===0)){return 29}return 28},daysInYear:function(f){var e=0;if(f instanceof Date){e=f.getFullYear()}else{if(typeof f==="number"){e=f}else{return 0}}if(e%4===0&&(e%100!==0||e%400===0)){return 366}return 365},dateFormat:function(h,i,m){var g={};g.Year=h.getFullYear();g.TYear=(""+g.Year).substr(2);g.Month=h.getMonth()+1;g.TMonth=g.Month<10?"0"+g.Month:g.Month;g.Day=h.getDate();g.TDay=g.Day<10?"0"+g.Day:g.Day;g.Hour=h.getHours();g.THour=g.Hour<10?"0"+g.Hour:g.Hour;g.hour=g.Hour<13?g.Hour:g.Hour-12;g.Thour=g.hour<10?"0"+g.hour:g.hour;g.Minute=h.getMinutes();g.TMinute=g.Minute<10?"0"+g.Minute:g.Minute;g.Second=h.getSeconds();g.TSecond=g.Second<10?"0"+g.Second:g.Second;g.Millisecond=h.getMilliseconds();g.Week=h.getDay();var f=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],j=["\u4E00\u6708","\u4E8C\u6708","\u4E09\u6708","\u56DB\u6708","\u4E94\u6708","\u516D\u6708","\u4E03\u6708","\u516B\u6708","\u4E5D\u6708","\u5341\u6708","\u5341\u4E00\u6708","\u5341\u4E8C\u6708"],l=["Sun","Mon","Tue","Web","Thu","Fri","Sat"],e=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],k=g.Millisecond/1000;if(i!=undefined&&i.replace(/\s/g,"").length>0){if(m!=undefined&&m==="en"){j=f.slice(0);e=l.slice(0)}i=i.replace(/yyyy/ig,g.Year).replace(/yyy/ig,g.Year).replace(/yy/ig,g.TYear).replace(/y/ig,g.TYear).replace(/MMM/g,j[g.Month-1]).replace(/MM/g,g.TMonth).replace(/M/g,g.Month).replace(/dd/ig,g.TDay).replace(/d/ig,g.Day).replace(/HH/g,g.THour).replace(/H/g,g.Hour).replace(/hh/g,g.Thour).replace(/h/g,g.hour).replace(/mm/g,g.TMinute).replace(/m/g,g.Minute).replace(/ss/ig,g.TSecond).replace(/s/ig,g.Second).replace(/fff/ig,g.Millisecond).replace(/ff/ig,k.toFixed(2)*100).replace(/f/ig,k.toFixed(1)*10).replace(/EEE/g,e[g.Week])}else{i=g.Year+"-"+g.Month+"-"+g.Day+" "+g.Hour+":"+g.Minute+":"+g.Second}return i},dateDiff:function(g,e){var f=parseInt((g-e)/1000);if(f<60){return f+"\u79D2"}else{if(f<60*60){return Math.floor(f/60)+"\u5206\u949F"}else{if(f<60*60*24){return Math.floor(f/(60*60))+"\u5C0F\u65F6"}else{if(f<60*60*24*7){return Math.floor(f/(60*60*24))+"\u5929"}else{if(f<60*60*24*31){return Math.floor(f/(60*60*24*7))+"\u5468"}else{if(f<60*60*24*365){return Math.floor(f/(60*60*24*30))+"\u6708"}else{if(f<60*60*24*365*1000){return Math.floor(f/(60*60*24*365))+"\u5E74"}else{return Math.floor(f/(60*60*24))+"\u5929"}}}}}}}},dateInterval:function(k,e){var j=parseInt((k-e)/1000),g=Math.floor(j/(60*60*24)),f=Math.floor((j-g*24*60*60)/3600),i=Math.floor((j-g*24*60*60-f*3600)/60),h=Math.floor(j-g*24*60*60-f*3600-i*60);return g+"\u5929:"+f+"\u5C0F\u65F6:"+i+"\u5206\u949F:"+h+"\u79D2"},replaceURLWithHTMLLinks:function(e,g){var f=/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;if(g){e=e.replace(f,"<a target='_blank' href='$1'>$1</a>")}else{e=e.replace(f,"<a href='$1'>$1</a>")}return e},getLength:function(e,g){var f=/[\u4e00-\u9fa5]/g;if(g!=undefined&&g===false){return e.length}else{if(f.test(e)){return e.replace(f,"zz").length}return e.length}},str_replace:function(x,h,q,p){var m=0,l=0,v="",o="",k=0,u=0,n=[].concat(x),e=[].concat(h),w=q,g=Object.prototype.toString.call(e)==="[object Array]",t=Object.prototype.toString.call(w)==="[object Array]";w=[].concat(w);if(p){this.window[p]=0}for(m=0,k=w.length;m<k;m++){if(w[m]===""){continue}for(l=0,u=n.length;l<u;l++){v=w[m]+"";o=g?(e[l]!==undefined?e[l]:""):e[0];w[m]=(v).split(n[l]).join(o);if(p&&w[m]!==v){this.window[p]+=(v.length-w[m].length)/n[l].length}}}return t?w:w[0]},nreplace:function(e){if(e!=null&&e!=""){return e.replace(".00","")}return""}}});define("tins",[],function(b,a,c){var d={};function e(f){return document.getElementById(f)}d.box=function(){var g,j,q,o,h,l,k,r,i,n=0;return{show:function(x,p,m,v,f,s){if(!n){g=document.createElement("div");g.id="tinybox";j=document.createElement("div");j.id="tinymask";q=document.createElement("div");q.id="tinycontent";document.body.appendChild(j);document.body.appendChild(g);g.appendChild(q);j.onclick=d.box.hide;window.onresize=d.box.resize;n=1}if(!f&&!p){g.style.width=m?m+"px":"auto";g.style.height=v?v+"px":"auto";g.style.backgroundImage="none";q.innerHTML=x}else{q.style.display="none";g.style.width=g.style.height="100px"}this.mask();h=x;l=p;k=m;r=v;i=f;this.alpha(j,1,80,3);if(s){setTimeout(function(){d.box.hide()},1000*s)}},fill:function(v,s,p,t,m){if(s){g.style.backgroundImage="";var f=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");f.onreadystatechange=function(){if(f.readyState==4&&f.status==200){d.box.psh(f.responseText,p,t,m)}};f.open("GET",v,1);f.send(null)}else{this.psh(v,p,t,m)}},psh:function(u,p,s,m){if(m){if(!p||!s){var f=g.style.width,t=g.style.height;q.innerHTML=u;g.style.width=p?p+"px":"";g.style.height=s?s+"px":"";q.style.display="";p=parseInt(q.offsetWidth);s=parseInt(q.offsetHeight);q.style.display="none";g.style.width=f;g.style.height=t}else{q.innerHTML=u}this.size(g,p,s,4)}else{g.style.backgroundImage="none"}},hide:function(){d.box.alpha(g,-1,0,5)},resize:function(){d.box.pos();d.box.mask()},mask:function(){j.style.height=d.page.theight()+"px";j.style.width="";j.style.width=d.page.twidth()+"px"},pos:function(){var f=(d.page.height()/2)-(g.offsetHeight/2);f=f<10?10:f;g.style.top=(f+d.page.top())+"px";g.style.left=(d.page.width()/2)-(g.offsetWidth/2)+"px"},alpha:function(p,t,f,m){clearInterval(p.ai);if(t==1){p.style.opacity=0;p.style.filter="alpha(opacity=0)";p.style.display="block";this.pos()}p.ai=setInterval(function(){d.box.twalpha(p,f,t,m)},20)},twalpha:function(p,f,u,m){var t=Math.round(p.style.opacity*100);if(t==f){clearInterval(p.ai);if(u==-1){p.style.display="none";p==g?d.box.alpha(j,-1,0,3):q.innerHTML=g.style.backgroundImage=""}else{p==j?this.alpha(g,1,100,5):d.box.fill(h,l,k,r,i)}}else{var v=t+Math.ceil(Math.abs(f-t)/m)*u;p.style.opacity=v/100;p.style.filter="alpha(opacity="+v+")"}},size:function(u,x,t,A){u=typeof u=="object"?u:e(u);clearInterval(u.si);var f=u.offsetWidth,y=u.offsetHeight,v=f-parseInt(u.style.width),z=y-parseInt(u.style.height);var m=f-v>x?-1:1,p=(y-z>t)?-1:1;u.si=setInterval(function(){d.box.twsize(u,x,v,m,t,z,p,A)},20)},twsize:function(u,x,v,m,t,z,p,A){var f=u.offsetWidth-v,y=u.offsetHeight-z;if(f==x&&y==t){clearInterval(u.si);g.style.backgroundImage="none";q.style.display="block"}else{if(f!=x){u.style.width=f+(Math.ceil(Math.abs(x-f)/A)*m)+"px"}if(y!=t){u.style.height=y+(Math.ceil(Math.abs(t-y)/A)*p)+"px"}this.pos()}}}}();d.page=function(){return{top:function(){return document.body.scrollTop||document.documentElement.scrollTop},width:function(){return self.innerWidth||document.documentElement.clientWidth},height:function(){return self.innerHeight||document.documentElement.clientHeight},theight:function(){var h=document,f=h.body,g=h.documentElement;return Math.max(Math.max(f.scrollHeight,g.scrollHeight),Math.max(f.clientHeight,g.clientHeight))},twidth:function(){var h=document,f=h.body,g=h.documentElement;return Math.max(Math.max(f.scrollWidth,g.scrollWidth),Math.max(f.clientWidth,g.clientWidth))}}}();c.exports=d});