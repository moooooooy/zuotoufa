

//=====go to  top
//=====begin=====
$(document).ready(function(){
  var bt = document.getElementById('toolBackTo'),
  hl = navigator.WebKit? $('body')[0] : $('html')[0]; //$('body')||$('html');
  var winWidth =  window.innerWidth || document.body.clientWidth;
  var nav = $('#container');
  if(winWidth >= 1120){
    bt.style.left = nav.offset().left +  990 +'px';    //nav.clientLeft + 
  }else{
    bt.style.left = '10px';
  }
   $(window).bind("scroll", function(e){
	  var st = hl.scrollTop;//get_scrollTop_of_body();//hl.scrollTop  document.body.scrollTop,
      //alert(st);
	  //vh = hl.clientHeight,
	  show = (st>30);
	  if( show ){
		bt.style.display = '';
	  }else{
		bt.style.display = 'none';
	  }
  });

   $(window).bind('resize', function(e){
      winWidth =  window.innerWidth || document.body.clientWidth;
      if(winWidth >= 1120){
          bt.style.right = '';
          bt.style.left = nav.offset().left +990 +'px';          //nav.clientLeft + 
      }else{
          bt.style.left = '';
          bt.style.right = '10px';
      }
   });
});

function get_scrollTop_of_body(){ 
var scrollTop; 
if(typeof window.pageYOffset != 'undefined'){ 
  scrollTop = window.pageYOffset; 
} 
else if(typeof document.compatMode != 'undefined' && 
  document.compatMode != 'BackCompat'){ 
  scrollTop = document.documentElement.scrollTop; 
} 
else 
  if(typeof document.body != 'undefined'){ 
  scrollTop = document.body.scrollTop; 
} 
return scrollTop; 
}
//=====go to  top
//=====end  =====
