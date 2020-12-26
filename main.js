
$(document).ready(function(){
	var i=0;
	var max=$(".main").css("width");
	max=max.replace(/[a-zA-Z]/g,"");
	var change=max*0.7936;
	var stop;
	var logoclick=1;//1为停止运动，0为开始运动
	function move(){
		stop=setInterval(function(){
				if(i>=change){
					i=0;
				}
				i=i+1;
				$(".main").css("transform","translate(-"+i+"px)");
		},20);
	}
	move();
	$(".logo").click(function(){
		if(logoclick==0){
			move();
			logoclick=1;
		}else{
			clearInterval(stop);
			logoclick=0;
		}
	});
	$(".left").mouseenter(function(){
		clearInterval(stop);
		stop=setInterval(function(){
			if(i<=0){
				i=change;
			}
			i=i-1;
			$(".main").css("transform","translate(-"+i+"px)");
		},5);
	});
	$(".right").mouseenter(function(){
		clearInterval(stop);
		stop=setInterval(function(){
			if(i>=change){
				i=0;
			}
			i=i+1;
			$(".main").css("transform","translate(-"+i+"px)");
		},5);
	});
	$(".right").mouseleave(function(){
		clearInterval(stop);
		if(logoclick==1){
			move();
		}
	});
	$(".left").mouseleave(function(){
		clearInterval(stop);
		if(logoclick==1){
			move();
		}
	});
	$(".logo").mouseover(function(){
		$(".left").css("opacity","0.6");
		$(".right").css("opacity","0.6");
	});
	$(".logo").mouseleave(function(){
		$(".left").css("opacity","0");
		$(".right").css("opacity","0");
	});
});