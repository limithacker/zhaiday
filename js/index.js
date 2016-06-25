$(function(){

   //这什么鸡巴
   $(".navul li").click(function(){
	  //console.log("点点点");   
	   
	})	
	
	
	var ww=document.documentElement.clientWidth;
    var wh=document.documentElement.clientHeight; 
	//alert("宽"+ww+"高"+wh);
	//console.log("宽"+ww+"高"+wh);
	//页面css重构js
	
	//LBC调整
	//var lh=wh-155;
	//$(".lbcbox").css("height",lh+"px");
	//$(".dtbox a").css("background-size","auto "+lh+"px");
	
	//导航间距调整
	//var dhml=parseInt((ww-1000)/6);
	//$(".navul li").css("margin-left",dhml+"px");
	
	
	//安排分类板块高度
	var bkh=wh-105;    //分类高度
	$(".bk").css("height",bkh+"px");
	
	//箭头事件
	$("a.up").click(function(){
		var target=$(this).parent(".bk").prev().offset().top-105;
		$('html,body').animate({scrollTop:target},300);
		
	});
	
	$("a.down").click(function(){
		var target=$(this).parent(".bk").next().offset().top-105;
		$('html,body').animate({scrollTop:target},300);
		
	});
	
	//水吧码农LBC框架js端，使用方法+QQ1124648533
	
	var loopnum=1;
	var loopnumx=1;
	var loopmaxnum=$(".dtbox a").length;
	var looptime=3000;
	var hover=0;
	
	//console.log("LBC图片总数"+loopmaxnum);
	//LBC
	
	var loop=setInterval(function(){
		if (hover==1){return;}
		if (loopnum==loopmaxnum){loopnum=1;}
		else {loopnum++;}
	    $("#xt"+loopnum).css("background-color","#D8DCDC").siblings().css("background-color","#35302C");;
		$("#dt"+loopnum).fadeIn(300).siblings().fadeOut(300);
		
		
	},looptime);
	
	
	$(".xt").hover(function(){
		hover=1;
		//console.log($(this).attr("id").substr($(this).attr("id").length-1,1));
		$(this).css("background-color","#D8DCDC").siblings().css("background-color","#35302C");
		$("#dt"+$(this).attr("id").substr($(this).attr("id").length-1,1)).fadeIn(300).siblings().fadeOut(300);
	},function(){hover=0;});
	
	$("#leftarrow").click(function(){
		
	    if (loopnum==1){loopnum=loopmaxnum;}
		else {loopnum--;}
		$("#xt"+loopnum).css("background-color","#D8DCDC").siblings().css("background-color","#35302C");;
		$("#dt"+loopnum).fadeIn(300).siblings().fadeOut(300);	
	});
	
	$("#rightarrow").click(function(){
	    if (loopnum==loopmaxnum){loopnum=1;}
		else {loopnum++;}
		$("#xt"+loopnum).css("background-color","#D8DCDC").siblings().css("background-color","#35302C");;
		$("#dt"+loopnum).fadeIn(300).siblings().fadeOut(300);	
	});
	
	$("#leftarrow,#rightarrow").hover(function(){hover=1;},function(){hover=0;});
	$(".dta").hover(function(){hover=1;},function(){hover=0;});
	
	//LBC end
	
	//导航栏滚动时高度调整
	$(window).scroll(function(){
     var wsh=$(window).scrollTop();
        if (wsh>=500)
     { $(".nav").removeClass("nav").addClass("nav2");}
        else
     { $(".nav2").removeClass("nav2").addClass("nav");}
   
   });
	
	
});


function stw(ee)
{
	 var wh=document.documentElement.clientHeight;
	 var bkh=wh-105;
	 if (bkh<500)
	 {bkh=500;}
	 var th=530+bkh*ee;
	 $('html,body').animate({scrollTop:th},300);
}