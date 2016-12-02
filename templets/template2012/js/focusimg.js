	(function ($, plugin) {
	var data = {}, id = 1, etid = plugin + 'ETID';
	// 延时构造器 
	$.fn[plugin] = function (speed, group) {
		id ++;
		group = group || this.data(etid) || id;
		speed = speed || 150;
		// 缓存分组名称到元素 
		if (group === id) this.data(etid, group);
		// 暂存官方的hover方法 
		this._hover = this.hover;
		// 伪装一个hover函数，并截获两个回调函数交给真正的hover函数处理 
		this.hover = function (over, out) {
			over = over || $.noop;
			out = out || $.noop;
			this._hover(function (event) {
				var elem = this;
				clearTimeout(data[group]);
				data[group] = setTimeout(function () {
					over.call(elem, event);
				}
				, speed);
			}
			, function (event) {
				var elem = this;
				clearTimeout(data[group]);
				data[group] = setTimeout(function () {
					out.call(elem, event);
				}
				, speed);
			});
			return this;
		};
		return this;
	};
	// 冻结选定元素的延时器 
	$.fn[plugin + 'Pause'] = function () {
		clearTimeout(this.data(etid));
		return this;
	};
	// 静态方法 
	$[plugin] = {
		// 获取一个唯一分组名称 
		get: function () {
			return id ++;
		}
		, 
		// 冻结指定分组的延时器 
		pause: function (group) {
			clearTimeout(data[group]);
		}
	};
})(jQuery, 'mouseDelay'); 


	var sw = 0;
	var iCount=$("#Slidesx ul li").length;
	var sLinks="";
	//myShow(0);
	for(j=0;j<iCount;j++)
	{
		iCur=j+1
		if(iCur==1)
			sLinks +='<a class="cur"><span>'+iCur+'</span></a>';
		else
			sLinks +='<a><span>'+iCur+'</span></a>';
	}
	$("#Slidesx #pagxxx").html(sLinks);
	$("#Slidesx #pagxxx a").mouseDelay(100).hover(function(){
		sw = $("#pagxxx a").index(this);
		myShow(sw);
	});
	function myShow(i){
		$("#Slidesx #pagxxx a").eq(i).addClass("cur").siblings("a").removeClass("cur");	
		$("#Slidesx ul li").eq(i).stop(true,true).fadeIn(600).siblings("li").fadeOut(0);	
	}

	//alert($("#Slidesx ul li").length);
	//滑入停止动画，滑出开始动画
	$("#SlidePlayer").hover(function(){
		if(myTime){
		   clearInterval(myTime);
		}
	},function(){
		myTime = setInterval(function(){
		  myShow(sw)
		  sw++;
		  if(sw==iCount){sw=0;}
		} , 5000);
	});
	//自动开始
	myShow(0)
	var myTime = setInterval(function(){
	   myShow(sw)
	   sw++;
	   if(sw==iCount){sw=0;}
	} , 5000);