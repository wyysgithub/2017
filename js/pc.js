// JavaScript Document
$(document).ready(function(e) {
	//g();
	
		var x=$('.menu-ul li:nth-child(1)').offset();
		var w=$('.menu-ul li:nth-child(1)').width();
		$(".dian").animate({left:x.left,width:w});
	menu();
	
	
	
	
    $(".menu-ul li:nth-child(1),#up").click(function(){scrollUp(0);});  //跳转回主页
	$(".menu-ul li:nth-child(2)").click(function(){scrollNow(750)});//我的信息
	$(".menu-ul li:nth-child(3)").click(function(){scrollNow(1360)});//我的技能
	$(".menu-ul li:nth-child(4)").click(function(){scrollNow(2350)});//工作经历
	$(".menu-ul li:nth-child(5)").click(function(){scrollNow(3570)});//学习经历
	$(".menu-ul li:nth-child(6)").click(function(){scrollNow(4360)});//我的日志
	$(".menu-ul li:nth-child(7),.need").click(function(){scrollNow(5340)});//联系方式
	
	//返回顶部按钮是否显示
	$(document).scroll(function(){                                
		var scollU=document.documentElement.scrollTop||document.body.scrollTop;
		if(scollU>650){
		$('#up').css('display','block');
		}else{
		$('#up').css('display','none');
			}			
	});
	
	$('.menu-left').hover(function(){ 
	

	$('.mianju_y').fadeOut(1000);

	$('.mianju_u').animate({top:'-300px'},1000);
	$('.yanzhi').fadeIn(2000)
	
	
	},function(){
		$('.yanzhi').fadeOut(1000);
		$('.mianju_y').fadeIn(1000);
	    $('.mianju_u').animate({top:'0'},1000).fadeIn(1000);
	
		
		});
	
	//面具转过去动画
	function mM(){
		$('.mianju').css({
			transform:'rotateY(90deg)'
			},function(){
				
				$('.mianju').hide();
				yY();
				})
		}
	
	//yanzhi转出来动画
	
	
	
	//技能圆环动效
	$('#ht').radialIndicator({
		barColor: '#e2703d',
        barWidth: 10,
        initValue: 0,
        roundCorner : true,
        percentage: true
		
		});
	$('#ja').radialIndicator({
		barColor: '#ffd83b',
        barWidth: 10,
        initValue: 0,
        roundCorner : true,
        percentage: true
		
		});
	$('#jq').radialIndicator({
		barColor: '#005abb',
        barWidth: 10,
        initValue: 0,
        roundCorner : true,
        percentage: true
		
		});
	$('#ps').radialIndicator({
		barColor: '#83abd3',
        barWidth: 10,
        initValue: 0,
        roundCorner : true,
        percentage: true
		
		});
	$('#ai').radialIndicator({
		barColor: '#e67817',
        barWidth: 10,
        initValue: 0,
        roundCorner : true,
        percentage: true
		
		});
	$('#fl').radialIndicator({
		barColor: '#e51d27',
        barWidth: 10,
        initValue: 0,
        roundCorner : true,
        percentage: true
		
		});
		
	var htObj = $('#ht').data('radialIndicator');
	var jaObj = $('#ja').data('radialIndicator');
	var jqObj = $('#jq').data('radialIndicator');
	var psObj = $('#ps').data('radialIndicator');
	var aiObj = $('#ai').data('radialIndicator');
	var flObj = $('#fl').data('radialIndicator');
	
     
	
	$('.skill-table').hover(function(){
		
		
		htObj.animate(90);
		jaObj.animate(85);
		jqObj.animate(90);
		psObj.animate(95);
		aiObj.animate(85);
		flObj.animate(90);
		
		
		},function(){
			
			htObj.value(0);
			jaObj.value(0);
			jqObj.value(0);
			psObj.value(0);
			aiObj.value(0);
			flObj.value(0);
			})
	
	
	//简历下载
	$(".download").click(function(){
		downloadFile('jianli.doc')
		});
	
	var X=getX();
	$("#header,.gray").css('height',X/2);
		
		/*$("#header img").animate({top:-0.01*X},5000);$(".menu-left img").width(0.4*X);*/
	
	//用于清除表单数据	
	$(".con-table input").focus(function(){
		$(this).val('');
		});
	
});


//导航栏效果
function menu(){
	
	$(".menu-ul li").mouseover(function(){
		var x=$(this).offset();
		var w=$(this).width();
		$(".dian").animate({left:x.left+w/2,width:0},200); 
		//小横线的位置到达li中心的位置，长度变成零；
		$(".dian").animate({left:x.left,width:w},300);
		//小横线恢复长度
		//$(this).css('font-weight','600').siblings().css('font-weight','normal');
		});
	
	}
	
	
	
//屏幕滚动函数
	

		 //滚动所用函数
//向上滚动
function scrollUp(w){
	var t=w;
	var n=0;
	setI=window.setInterval(function(){
		
		n++;
		var scollU=document.documentElement.scrollTop||document.body.scrollTop;
		speed=(scollU-t)/10+1;
		if(scollU <= w+10||n>50){
			window.clearInterval(setI);
		}else{
	
	document.body.scrollTop=document.documentElement.scrollTop=scollU - speed;
				}
		
		},20);
	
	}

//向下滚动
function scrollDown(w){
	var t=w;
	var n=0;
	setI=window.setInterval(function(){
		
		n++;
		var scollU=document.documentElement.scrollTop||document.body.scrollTop;
		speed=(t-scollU)/10+1;
		if(scollU >= w-10||n>50){
			window.clearInterval(setI);
		}else{
	document.body.scrollTop=document.documentElement.scrollTop=scollU + speed;
				}
		
		},20);
	
	}
function scrollNow(where){
	var scollU=document.documentElement.scrollTop||document.body.scrollTop;
		if(scollU>where){
		scrollUp(where);
		}else{
			scrollDown(where);
			}
	}
	
function getX(){
	return $(document).innerWidth();
	}
function getY(){
	return $(document).innerHeight();
	}
	
//用于测试当前滚动的高度
var g=function(){
	$("body").click(function(){
	alert(document.documentElement.scrollTop||document.body.scrollTop);
	});
	}
	
function downloadFile(url) {   
        try{ 
            var elemIF = document.createElement("iframe");   
            elemIF.src = url;   
            elemIF.style.display = "none";   
            document.body.appendChild(elemIF);   
        }catch(e){ 
 
        } 
    }