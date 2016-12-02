(function() {
var AW, ACN, AN, AV, AS, ASV;
AW = ACN = AN = AV = '?';
AS = ASV = '';
if (document.getElementsByTagName && document.createElement) {
AW = 'w3cDOM'
}
if (document.all && window.clipboardData) {
ACN = 'Trident';
AN = 'IE';
if (window.maxConnectionsPerServer) {
AV = '8+'
} else if (window.XMLHttpRequest) {
AV = '7+'
} else {
AV = '6-'
}
if (window.external) {
try {
if (window.external.max_version) {
ASV = window.external.max_version;
AS = 'Maxthon'
}
} catch (e) {}
}
} else if (window.globalStorage) {
ACN = 'Gecko';
AN = 'FF';
if (window.getInterface) {
AV = '3+';
if (document.querySelector) {
AV = '3.5+'
}
} else {
AV = '2-'
}
} else if (window.opera) {
ACN = 'Presto';
AN = 'Opera';
AV = opera.version()
} else if (window.HTMLVideoElement && document.querySelectorAll) {
ACN = 'WebKit';
AN = 'Safar'
} else if (window.MessageEvent && document.querySelectorAll) {
ACN = 'WebKit';
AN = 'chrome'
}
navigator.UserAgent = AW + ' ' + ACN + ' ' + AN + ' ' + AV + ' ' + AS + ' ' + ASV;
navigator.AppCodeName = ACN;
navigator.AppName = AN;
navigator.AppVersion = AV;
if (AS) {
navigator.AppShell = AS
}
if (ASV) {
navigator.AppShellVersion = ASV
}
})();
function $_(s) {
return document.getElementById(s)
}
function fnDebug(sValueOut, arg) {
if (fnDebug.bp) {
return
}
if (!document.getElementById('DebugDiv')) {
var dd = document.createElement('div');
dd.id = 'DebugDiv';
dd.innerHTML = '<input type="button" onclick="fnDebug.clear();" value="Clear" /><br /><input type="button" onclick="fnDebug.hidden(this);" value="Hidden" /><br /><input type="button" onclick="fnDebug.stop(this);" value="Stop" /><div id="Debug_box" style="-float:left;"></div>';
dd.style.position = 'absolute';
dd.style.zIndex = '32767';
dd.style.right = '0';
dd.style.top = '0';
dd.style.fontSize = '16px';
dd.style.color = '#fff';
dd.style.backgroundColor = '#000';
document.body.insertBefore(dd, document.body.firstChild);
var db = document.getElementById('Debug_box');
db.style.padding = '20px';
db.style.height = '420px';
db.style.overflow = 'scroll';
new fnDebug.fb(dd, 50);
fnDebug.db = db;
fnDebug.dd = dd
}
fnDebug.db.appendChild(document.createTextNode(++fnDebug.it + ' : ' + sValueOut));
fnDebug.db.appendChild(document.createElement('br'));
if (arg) {
alert(sValueOut)
}
}
fnDebug.it = 0;
fnDebug.bp = false;
fnDebug.gs = function(e, s) {
if (e.style[s]) {
return e.style[s]
} else if (e.currentStyle) {
return e.currentStyle[s]
} else if (document.defaultView && document.defaultView.getComputedStyle) {
s = s.replace(/([A-Z])/g, "-$1");
s = s.toLowerCase();
var s = document.defaultView.getComputedStyle(e, "");
return s && s.getPropertyValue(s)
} else {
return null
}
};
fnDebug.fb = function(e, is) {
is = is || 40;
if (typeof(e) == 'string') {
e = document.getElementById(e)
}
e.style.position = 'absolute';
if (!isNaN(parseInt(fnDebug.gs(e, 'top')))) {
var iTop = parseInt(fnDebug.gs(e, 'top'));
this.fnInterval = setInterval(function() {
if (e != null) {
e.style.top = document.documentElement.scrollTop + iTop + 'px'
}
}, is)
} else {
if (isNaN(parseInt(fnDebug.gs(e, 'bottom')))) {
var iTop = 0;
this.fnInterval = setInterval(function() {
if (e != null) {
e.style.top = document.documentElement.scrollTop + iTop + 'px'
}
}, is)
} else {
var iBottom = parseInt(fnDebug.gs(e, 'bottom'));
this.fnInterval = setInterval(function() {
if (e != null) {
e.style.top = document.documentElement.scrollTop + document.documentElement.clientHeight - iBottom - e.offsetHeight + 'px'
}
}, is)
}
}
};
fnDebug.clear = function() {
fnDebug.it = 0;
this.db.innerHTML = ''
};
fnDebug.hidden = function(e) {
if (this.db.style.display == 'none') {
e.value = 'Hidden';
this.db.style.display = ''
} else {
e.value = 'Show';
this.db.style.display = 'none'
}
};
fnDebug.stop = function(e) {
if (this.bp) {
e.value = 'Stop';
this.bp = false
} else {
e.value = 'Start';
this.bp = true
}
};
if (!this.JSON) {
JSON = {}
}(function() {
function f(n) {
return n < 10 ? '0' + n : n
}
if (typeof Date.prototype.toJSON !== 'function') {
Date.prototype.toJSON = function(key) {
return this.getUTCFullYear() + '-' + f(this.getUTCMonth() + 1) + '-' + f(this.getUTCDate()) + 'T' + f(this.getUTCHours()) + ':' + f(this.getUTCMinutes()) + ':' + f(this.getUTCSeconds()) + 'Z'
};
String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(key) {
return this.valueOf()
}
}
var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
gap, indent, meta = {
'\b': '\\b',
'\t': '\\t',
'\n': '\\n',
'\f': '\\f',
'\r': '\\r',
'"': '\\"',
'\\': '\\\\'
},
rep;
function quote(string) {
escapable.lastIndex = 0;
return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
var c = meta[a];
return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4)
}) + '"' : '"' + string + '"'
}
function str(key, holder) {
var i, k, v, length, mind = gap,
partial, value = holder[key];
if (value && typeof value === 'object' && typeof value.toJSON === 'function') {
value = value.toJSON(key)
}
if (typeof rep === 'function') {
value = rep.call(holder, key, value)
}
switch (typeof value) {
case 'string':
return quote(value);
case 'number':
return isFinite(value) ? String(value) : 'null';
case 'boolean':
case 'null':
return String(value);
case 'object':
if (!value) {
return 'null'
}
gap += indent;
partial = [];
if (Object.prototype.toString.apply(value) === '[object Array]') {
length = value.length;
for (i = 0; i < length; i += 1) {
partial[i] = str(i, value) || 'null'
}
v = partial.length === 0 ? '[]' : gap ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' : '[' + partial.join(',') + ']';
gap = mind;
return v
}
if (rep && typeof rep === 'object') {
length = rep.length;
for (i = 0; i < length; i += 1) {
k = rep[i];
if (typeof k === 'string') {
v = str(k, value);
if (v) {
partial.push(quote(k) + (gap ? ': ' : ':') + v)
}
}
}
} else {
for (k in value) {
if (Object.hasOwnProperty.call(value, k)) {
v = str(k, value);
if (v) {
partial.push(quote(k) + (gap ? ': ' : ':') + v)
}
}
}
}
v = partial.length === 0 ? '{}' : gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' : '{' + partial.join(',') + '}';
gap = mind;
return v
}
}
if (typeof JSON.stringify !== 'function') {
JSON.stringify = function(value, replacer, space) {
var i;
gap = '';
indent = '';
if (typeof space === 'number') {
for (i = 0; i < space; i += 1) {
indent += ' '
}
} else if (typeof space === 'string') {
indent = space
}
rep = replacer;
if (replacer && typeof replacer !== 'function' && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
throw new Error('JSON.stringify')
}
return str('', {
'': value
})
}
}
if (typeof JSON.parse !== 'function') {
JSON.parse = function(text, reviver) {
var j;
function walk(holder, key) {
var k, v, value = holder[key];
if (value && typeof value === 'object') {
for (k in value) {
if (Object.hasOwnProperty.call(value, k)) {
v = walk(value, k);
if (v !== undefined) {
value[k] = v
} else {
delete value[k]
}
}
}
}
return reviver.call(holder, key, value)
}
cx.lastIndex = 0;
if (cx.test(text)) {
text = text.replace(cx, function(a) {
return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4)
})
}
if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
j = eval('(' + text + ')');
return typeof reviver === 'function' ? walk({
'': j
}, '') : j
}
throw new SyntaxError('JSON.parse')
}
}
})();
function addEvent(obj, type, fn) {
if (obj.attachEvent) {
obj['e' + type + fn] = fn;
obj[type + fn] = function() {
obj['e' + type + fn](window.event)
};
obj.attachEvent('on' + type, obj[type + fn])
} else {
obj.addEventListener(type, fn, false)
}
}
function fnsGetStyle(elem, name) {
if (elem.style[name]) {
return elem.style[name]
} else if (elem.currentStyle) {
return elem.currentStyle[name]
} else if (document.defaultView && document.defaultView.getComputedStyle) {
name = name.replace(/([A-Z])/g, "-$1");
name = name.toLowerCase();
var s = document.defaultView.getComputedStyle(elem, "");
return s && s.getPropertyValue(name)
} else {
return null
}
}
function removeEvent(obj, type, fn) {
if (obj.detachEvent) {
obj.detachEvent('on' + type, obj[type + fn]);
obj[type + fn] = null
} else {
obj.removeEventListener(type, fn, false)
}
}
function getElementsByClass(searchClass, tag, node) {
var classElements = new Array();
if (tag == null) tag = '*';
if (node == null) node = document;
var els = node.getElementsByTagName(tag);
var elsLen = els.length;
var pattern = new RegExp('(^|\\s)' + searchClass + '(\\s|$)');
for (var i = 0, j = 0; i < elsLen; i++) {
if (pattern.test(els[i].className)) {
classElements[j] = els[i];
j++
}
}
return classElements
}
function fnoGetNextEle(ele) {
var oNextEle = ele.nextSibling;
if (oNextEle.nodeType == 3) {
oNextEle = oNextEle.nextSibling
}
return oNextEle
}
function fnoGetPreviousEle(ele) {
var oPreviousEle = ele.previousSibling;
if (oPreviousEle.nodeType == 3) {
oPreviousEle = oPreviousEle.previousSibling
}
return oPreviousEle
}
function fnoGetFirstEle(ele) {
var oFirstEle = ele.firstChild;
if (oFirstEle.nodeType == 3) {
oFirstEle = oFirstEle.nextSibling
}
return oFirstEle
}
function fnoGetLastEle(ele) {
var oLastEle = ele.lastChild;
if (oLastEle.nodeType == 3) {
oLastEle = oLastEle.previousSibling
}
return oLastEle
}
function fnFixEvent(e, o) {
var ow = o || window;
var evt = e || ow.event;
if (typeof evt.layerX == "undefined") {
evt.layerX = evt.offsetX
}
if (typeof evt.layerY == "undefined") {
evt.layerY = evt.offsetY
}
evt.key = evt.keyCode ? evt.keyCode : evt.which;
if (typeof evt.target == "undefined") {
evt.target = evt.srcElement
}
if (typeof evt.relatedTarget == "undefined") {
evt.relatedTarget = evt.toElement
}
return evt
}
function fnGetParentsEleBy(oC, fn) {
var i = 0;
do {
i++;
if (fn(oC.parentNode)) {
return oC.parentNode
} else {
oC = oC.parentNode
}
if (i > 30000) {
return false
}
} while (oC.parentNode.tagName != 'BODY');
return false
}
function fnCC(aEles, sClass, iStart) {
iStart = iStart || 0;
sClass = sClass || 'cc';
for (var i = iStart, l = aEles.length; i < l; ++i) {
if ((i - iStart) % 2 === 0) {
fnAClass(aEles[i], sClass)
}
}
}
function fnAS(sS, sW, sSep) {
sSep = sSep ? sSep : ' ';
var a = sS.split(sSep);
for (var i = 0; i < a.length; ++i) {
if (!sW || a[i] == sW) {
var b = true
}
if (!a[i]) {
a.splice(i, 1);
i--
}
}
if (!b) {
a.push(sW)
}
return a.join(sSep)
}
function fnDS(sS, sW, sSep) {
sSep = sSep ? sSep : ' ';
var a = sS.split(sSep);
for (var i = 0; i < a.length; ++i) {
if (a[i] == sW || !a[i]) {
a.splice(i, 1);
i--
}
}
return a.join(sSep)
}
function fnAClass(oE, sC) {
if (oE.className) {
oE.className = fnAS(oE.className, sC)
} else {
oE.className = sC
}
}
function fnDClass(oE, sC) {
if (oE.className) {
oE.className = fnDS(oE.className, sC)
}
}
var oTabs = {
init: function(aT, aS, sDis) {
this.Re(aT, aS, sDis);
var oO = new Object();
oO.aT = aT;
oO.aS = aS;
oO.sDis = sDis;
oO.a = this.a;
oO.Re = this.Re;
oO.iT = -1;
oO.a(aT.oET);
return oO
},
i: function(aT, aS, sDis) {
this.Re(aT, aS, sDis);
if (aT.sC) {
fnAClass(aT.oET, aT.sC)
}
if (aT.sF) {
aT.sF(aT.oET)
}
if (sDis) {
aS.oES.style.display = sDis
}
if (aS.sC) {
fnAClass(aS.oES, aS.sC)
}
if (aS.sF) {
aS.sF(aS.oES)
}
},
a: function(n) {
if (typeof n != 'number') {
for (var i = 0; i < this.aT.aET.length; i++) {
if (this.aT.aET[i] == n) {
n = i;
break
}
}
}
if (typeof n != 'number') {
n = -1
}
if (n == -1 || n >= this.aT.aET.length) {
return false
};
if (this.aT.sRC) {
if (this.iT > -1) {
fnAClass(this.aT.aET[this.iT], this.aT.sRC)
}
fnDClass(this.aT.aET[n], this.aT.sRC)
}
if (this.aT.sC) {
if (this.iT > -1) {
fnDClass(this.aT.aET[this.iT], this.aT.sC)
}
fnAClass(this.aT.aET[n], this.aT.sC)
}
if (this.aT.sF) {
if (this.iT > -1) {
this.aT.sF(this.aT.aET[this.iT], true)
}
this.aT.sF(this.aT.aET[n])
}
if (this.sDis) {
if (this.iT > -1) {
this.aS.aES[this.iT].style.display = 'none'
}
this.aS.aES[n].style.display = this.sDis
}
if (this.aS.sF) {
if (this.iT > -1) {
this.aT.sF(this.aS.aES[this.iT], true)
}
this.aT.sF(this.aS.aES[n])
}
if (this.aS.sRC) {
if (this.iT > -1) {
fnAClass(this.aS.aES[this.iT], this.aS.sRC)
}
fnDClass(this.aS.aES[n], this.aS.sRC)
}
if (this.aS.sC) {
if (this.iT > -1) {
fnDClass(this.aS.aES[this.iT], this.aS.sC)
}
if (this.aS.sC) {
fnAClass(this.aS.aES[n], this.aS.sC)
}
}
this.iT = n
},
Re: function(aT, aS, sDis) {
for (var i = 0, l = aT.aET.length; i < l; ++i) {
if (aT.sRC) {
fnAClass(aT.aET[i], aT.sRC)
}
if (aT.sC) {
fnDClass(aT.aET[i], aT.sC)
}
if (aT.sF) {
aT.sF(aT.aET[i], true)
}
}
if (aS.aES) {
for (var n = 0, ll = aS.aES.length; n < ll; ++n) {
if (aS.sRC) {
fnAClass(aS.aES[n], aS.sRC)
}
if (aS.sC) {
fnDClass(aS.aES[n], aS.sC)
}
if (aS.sF) {
aS.sF(aS.aES[n], true)
}
if (sDis) {
aS.aES[n].style.display = 'none'
}
}
}
}
};
var oHttpRequest = {
i: function(fn) {
var oA = this.c();
if (oA) {
oA.onreadystatechange = function() {
if (oA.readyState == 1 && fn.ready) {
fn.ready(oA)
}
if (oA.readyState == 2 && fn.sent) {
fn.sent(oA)
}
if (oA.readyState == 3 && fn.connected) {
fn.connected(oA)
}
if (oA.readyState == 4 && fn.run) {
fn.run(oA)
}
};
fn.async = fn.async === false ? false : true;
fn.clear = fn.clear === false ? false : true;
if (fn.clear) {
if (fn.url.indexOf('?') != -1) {
fn.url += '&'
} else {
fn.url += '?'
}
fn.url += 'clear_client_cache=' + Math.random() + '_' + new Date().getTime()
}
fn.method = fn.method.toUpperCase();
oA.open(fn.method, fn.url, fn.async, fn.un, fn.pw);
if (fn.method == 'POST') {
oA.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
}
if (fn.header && fn.header.length) {
for (var i = 0; i < fn.header.length; i++) {
oA.setRequestHeader(fn.header[i][0], fn.header[i][1])
}
}
if (!fn.data) {
fn.data = null
}
oA.send(fn.data)
}
return oA
},
a: [function() {
return new XMLHttpRequest()
}, function() {
return new ActiveXObject("Microsoft.XMLHTTP")
}, function() {
return new ActiveXObject("Msxml2.XMLHTTP")
}],
c: function() {
var isIE = !! window.ActiveXObject;
var isIE6 = isIE && !window.XMLHttpRequest;
var isIE8 = isIE && !! document.documentMode;
var isIE7 = isIE && !isIE6 && !isIE8;
for (var i = (isIE7 ? 1 : 0); i < this.a.length; i++) {
try {
var request = this.a[i]();
return request
} catch (e) {
continue
}
}
return false
}
};
var oAddBookmark = {
title: '海报时尚网',
url: 'http://www.haibao.cn/',
tips: '',
sAddBM: '',
init: function(oE, oAs) {
var oB = new Object();
if (oAs) {
this.title = oAs.title || this.title;
this.url = oAs.url || this.url
}
oB.title = this.title;
oB.url = this.url;
oB.tips = this.tips = '未能将"' + this.title + '"加入收藏夹，请手动添加。';
oB.oE = this.oE = oE;
this.oB = oB;
if (navigator.UserAgent.indexOf("FF") != -1) {
this.insert(function(oA) {
oA.onclick = oAddBookmark.FF;
oA.title = '可拖动此按钮到书签栏';
oA.onmousedown = oAddBookmark.fixMD
})
} else if (navigator.UserAgent.indexOf("IE") != -1) {
this.insert(function(oA) {
oA.onclick = oAddBookmark.IE;
oA.onmousedown = function() {
this.firstChild.data = '海报时尚'
};
oA.onmouseup = function() {
this.firstChild.data = '加入收藏'
};
oA.ondragstart = function() {
this.firstChild.data = '加入收藏'
};
oA.title = '按下键盘 Ctrl+D 可收藏本页'
})
} else if (navigator.UserAgent.indexOf("Opera") != -1) {
this.insert(function(oA) {
oA.title = oAddBookmark.title;
oA.rel = 'sidebar'
})
} else if (navigator.UserAgent.indexOf("Chrome") != -1) {
this.insert(function(oA) {
oA.onclick = function() {
alert('点击浏览器地址栏前的五角星，即可收藏本站。\n(也可拖动此按钮到书签栏)');
return false
};
oA.title = '按下键盘 Ctrl+D 可收藏本页';
oA.onmousedown = oAddBookmark.fixMD
})
} else if (navigator.UserAgent.indexOf("Safar") != -1) {
this.insert(function(oA) {
oA.onclick = function() {
alert('点击浏览器地址栏前的加号，即可收藏本站。\n(也可拖动此按钮到书签栏)');
return false
};
oA.title = '按下键盘 Ctrl+D 可收藏本页';
oA.onmousedown = oAddBookmark.fixMD
})
}
},
insert: function(fn) {
this.oA = document.createElement('a');
this.oA.appendChild(document.createTextNode('加入收藏'));
this.oA.href = this.url;
this.oA.oAddBookmark = this.oB;
fn(this.oA);
this.oS = document.createElement('span');
this.oS.appendChild(this.oA);
this.oE.appendChild(this.oS)
},
FF: function() {
try {
sidebar.addPanel(this.oAddBookmark.title, this.oAddBookmark.url, "")
} catch (e) {
alert(this.oAddBookmark.tips)
}
return false
},
IE: function() {
try {
window.external.AddFavorite(this.oAddBookmark.url, this.oAddBookmark.title)
} catch (e) {
alert(this.oAddBookmark.tips)
}
return false
},
fixMD: function() {
oE = this;
oE.firstChild.data = '海报时尚';
setTimeout(function() {
oE.firstChild.data = '加入收藏'
}, 15000)
}
};
var oSetHomePage = {
title: '海报时尚网',
url: 'http://www.haibao.cn/',
tips: '',
sSetHP: '',
init: function(oE, oAs) {
var oB = new Object();
if (oAs) {
this.title = oAs.title || this.title;
this.url = oAs.url || this.url
}
oB.title = this.title;
oB.url = this.url;
oB.tips = this.tips = '未能将"' + this.title + '"设为首页，请手动设置。';
oB.oE = this.oE = oE;
this.oB = oB;
if (navigator.UserAgent.indexOf("FF") != -1) {
this.insert(function(oA) {
oA.onclick = oSetHomePage.FF
})
} else if (navigator.UserAgent.indexOf("IE") != -1) {
this.insert(function(oA) {
oA.onclick = oSetHomePage.IE
})
}
},
insert: function(fn) {
this.oA = document.createElement('a');
this.oA.appendChild(document.createTextNode('设为首页'));
this.oA.href = this.url;
this.oA.oSetHomePage = this.oB;
fn(this.oA);
this.oS = document.createElement('span');
this.oS.appendChild(this.oA);
this.oE.appendChild(this.oS)
},
FF: function() {
try {
if (window.netscape) {
try {
netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")
} catch (e) {}
}
var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
prefs.setCharPref('browser.startup.homepage', this.oSetHomePage.url)
} catch (e) {
alert(oSetHomePage.tips + '\n可拖动此链接到地址栏前方的主页按钮上。')
}
return false
},
IE: function() {
try {
this.style.behavior = 'url(#default#homepage)';
this.setHomePage(this.oSetHomePage.url)
} catch (e) {
alert(this.oSetHomePage.tips)
}
return false
}
};
var fnMarquee = {
init: function(oA) {
for (var i in fnMarquee) {
if (i != 'init') {
this[i] = fnMarquee[i]
}
}
switch (!oA.iBW) {
case true:
oA.iBW = fnsGetStyle(oA.oBE, 'width').match(/\d+/);
case false:
if (!oA.iBW) return false
}
switch (!oA.iCW) {
case true:
{
if (oA.oCE) {
oA.iCW = fnsGetStyle(oA.oCE, 'width').match(/\d+/)
}
}
case false:
{
if (oA.iEW) {
var aCE = oA.oCE.childNodes,
iCE = 0;
for (var i = 0; i < aCE.length; i++) {
if (aCE[i].nodeType == 1) {
iCE++
}
}
oA.iCW = i * oA.iEW
}
if (!oA.iCW) return false
}
}
if (parseInt(oA.iCW) <= parseInt(oA.iBW)) {;
return false
}
this.oBE = oA.oBE;
this.oCE = oA.oCE;
this.iBW = parseInt(oA.iBW);
this.iCW = parseInt(oA.iCW);
this.bAcceleration = oA.bAcceleration || false;
this.iSpeed = oA.iSpeed || 5;
this.iQuality = oA.iQuality || 10;
this.bBlock = oA.bBlock && true;
this.bBusy = false;
this.bPause = false;
this.bStop = false;
this.oCE.style.width = this.iCW * 2 + 'px';
this.oCE.innerHTML += this.oCE.innerHTML;
this.revise(0)
},
moveto: function(iL) {
if (!this.bStop) {
iL = parseInt(iL);
if (this.bBusy && this.bBlock) {
return
}
this.iL = iL;
if (this.oBE.scrollLeft - this.iL < 0) {
var bRight = true
}
this.bBusy = true;
this.refresh(bRight)
}
},
moveby: function(iL) {
if (!this.bStop) {
iL = parseInt(iL);
if (this.bBusy && this.bBlock) {
return
}
this.iL += iL;
if (iL > 0) {
var bRight = true
}
this.bBusy = true;
this.refresh(bRight)
}
},
refresh: function(bRight) {
var o = this;
if (!this.bPause) {
if (this.bAcceleration) {
var iG = Math.ceil(Math.abs(this.iV - this.iL) / this.iSpeed)
} else {
var iG = this.iSpeed
}
if (bRight) {
iG = -iG
}
this.iV = this.iV - iG;
if (this.iV >= this.iL && bRight) {
return this.revise(this.iL)
}
if (this.iV <= this.iL && !bRight) {
return this.revise(this.iL)
}
this.revise(this.iV, true)
}
this.rft = setTimeout(function() {
o.refresh.call(o, bRight)
}, this.iQuality)
},
revise: function(iV, b) {
if (iV < 0) {
iV = this.iCW + (iV % this.iCW)
} else {
iV = iV % this.iCW
}
this.oBE.scrollLeft = iV;
if (!b) {
this.bRight = false;
this.bBusy = false;
this.iV = this.iL = this.oBE.scrollLeft
}
clearTimeout(this.rft)
}
};
var oInputTextTips = {
init: function(oE, sT, sC) {
for (var i in oInputTextTips) {
this[i] = oInputTextTips[i]
}
var own = this;
this.oE = oE;
this.sT = sT || '请填写';
this.sC = sC || '#aaa';
this.check();
addEvent(oE, 'blur', function() {
own.check()
});
addEvent(oE, 'focus', function() {
own.clear()
})
},
check: function() {
var sS = this.oE.value;
if (this.oE.value == this.sT || sS.replace(/ /g, '') == '') {
this.oE.value = this.sT;
this.oE.style.color = this.sC
}
},
clear: function(b) {
if (this.oE.value == this.sT || this.oE.value.replace(/ /g, '') == '') {
this.oE.value = '';
this.oE.style.color = '';
if (b) this.check();
return false
}
return true
}
};
var oTextLengthLimit = {
init: function(oE, oS, iL) {
for (var i in oTextLengthLimit) {
this[i] = oTextLengthLimit[i]
}
var own = this;
this.begin = false;
this.iL = iL || parseInt(oS.innerHTML, 10);
if (!(this.iL > 0)) {
throw new Error('Limit number must > 0.')
}
this.oE = oE;
this.oS = oS;
this.oE.onkeyup = function(e) {
evt = fnFixEvent(e);
if (evt.keyCode != 229) {
setTimeout(function() {
own.check()
}, 10)
}
}
},
show: function() {
this.oS.innerHTML = this.iL - this.oE.value.length
},
check: function() {
if (this.oE.value.length > this.iL) {
this.oE.value = this.oE.value.slice(0, this.iL)
}
this.show()
}
};