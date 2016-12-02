//links
$(function(){
		$("a[_for]").mouseover(function(){
			$(this).parents().children("a[_for]").removeClass("thisclass").parents().children("dd").hide();
			$(this).addClass("thisclass").blur();
			$("#"+$(this).attr("_for")).show();
		});
		$("a[_for=uc_member]").mouseover();
		$("a[_for=flink_1]").mouseover();
	});
//mainContents
		var oHasMouse = {b:false};
		var fnHbiT = {
			init:function (sId,sS) {
				
				this.tabs(sId,sS);
				this.ol(sS,'n_list');
				this.ol(sS,'h_list');
			},
			tabs:function (sId,sS) {
				var t = $_(sId).getElementsByTagName('h3');
				var a = new Array($_(sS+'n_'),$_(sS+'h_'),$_(sS+'t_'));
				t[0].onmouseover = function () {fnHbiT.oHbiTime = setTimeout(function() {oTabs.i({aET:t,sC:'on',oET:t[0]},{aES:a,oES:$_(sS+'n_')},'block');},170);};
				t[0].onmouseout = function () {clearTimeout(fnHbiT.oHbiTime)};
				t[1].onmouseover = function () {fnHbiT.oHbiTime = setTimeout(function() {oTabs.i({aET:t,sC:'on',oET:t[1]},{aES:a,oES:$_(sS+'h_')},'block');},170);};
				t[1].onmouseout = function () {clearTimeout(fnHbiT.oHbiTime)};
				t[2].onmouseover = function () {fnHbiT.oHbiTime = setTimeout(function() {oTabs.i({aET:t,sC:'on',oET:t[2]},{aES:a,oES:$_(sS+'t_')},'block');},170);};
				t[2].onmouseout = function () {clearTimeout(fnHbiT.oHbiTime)};
			},
			ol:function (sS,sB) {
				var l = $_(sS+sB).getElementsByTagName('li');
				for(var i=0; i<l.length; i++) {
					var oS = document.createElement('span');
					oS.className = 'num';
					oS.appendChild(document.createTextNode((i+1)+'.'));
					l[i].insertBefore(oS,l[i].getElementsByTagName('h4')[0]);
				}
			}
		};

		oHasMouse.fn = function () {$_('mainContents').className = 'js';};
		oHasMouse.t = setInterval(function () {if(oHasMouse.b) {oHasMouse.fn();clearInterval(oHasMouse.t);}},1000);
		fnHbiT.init('c_jewelry','jy');
		fnHbiT.init('c_wedding','wed');
		fnHbiT.init('c_fashion','cf');
		fnHbiT.init('c_beauty','cb');
		fnHbiT.init('c_diy','cd');
		fnHbiT.init('c_health','ch');
		fnHbiT.init('c_astro','ca');
		fnHbiT.init('c_sexlove','cs');
		fnHbiT.init('c_brands','cbr');
		fnHbiT.init('c_stars','cst');/**/
		(function () {
			var a = getElementsByClass('tipstitle');
			for(var i=0; i<a.length; i++) {
				if(a[i].firstChild) {a[i].title = a[i].firstChild.data;}
			}
			var aP = $_('cn_').getElementsByTagName('img');
			for(var n=0; n<aP.length; n++) {
				aP[n].title = fnoGetPreviousEle(aP[n].parentNode.parentNode).firstChild.firstChild.data;
			}
/*			var aPP = $_('hp_list').getElementsByTagName('img');
			var aTT = $_('hp_list').getElementsByTagName('h4');
			for(var m=0; m<aPP.length; m++) {
				aPP[m].title = aTT[m].firstChild.firstChild.data;
			}*/
		})();
