// JavaScript Document
$(document).ready(function(e) {
	//g();
	
		var x=$('.menu-ul li:nth-child(1)').offset();
		var w=$('.menu-ul li:nth-child(1)').width();
		$(".dian").animate({left:x.left,width:w});
	menu();
	
	
	
	
    $(".menu-ul li:nth-child(1),#up").click(function(){scrollUp(0);});  //��ת����ҳ
	$(".menu-ul li:nth-child(2)").click(function(){scrollNow(750)});//�ҵ���Ϣ
	$(".menu-ul li:nth-child(3)").click(function(){scrollNow(1360)});//�ҵļ���
	$(".menu-ul li:nth-child(4)").click(function(){scrollNow(2350)});//��������
	$(".menu-ul li:nth-child(5)").click(function(){scrollNow(3570)});//ѧϰ����
	$(".menu-ul li:nth-child(6)").click(function(){scrollNow(4360)});//�ҵ���־
	$(".menu-ul li:nth-child(7),.need").click(function(){scrollNow(5340)});//��ϵ��ʽ
	
	//���ض�����ť�Ƿ���ʾ
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
	
	//���ת��ȥ����
	function mM(){
		$('.mianju').css({
			transform:'rotateY(90deg)'
			},function(){
				
				$('.mianju').hide();
				yY();
				})
		}
	
	//yanzhiת��������
	
	
	
	//����Բ����Ч
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
	
	
	//��������
	$(".download").click(function(){
		downloadFile('jianli.doc')
		});
	
	var X=getX();
	$("#header,.gray").css('height',X/2);
		
		/*$("#header img").animate({top:-0.01*X},5000);$(".menu-left img").width(0.4*X);*/
	
	//�������������	
	$(".con-table input").focus(function(){
		$(this).val('');
		});
	
});


//������Ч��
function menu(){
	
	$(".menu-ul li").mouseover(function(){
		var x=$(this).offset();
		var w=$(this).width();
		$(".dian").animate({left:x.left+w/2,width:0},200); 
		//С���ߵ�λ�õ���li���ĵ�λ�ã����ȱ���㣻
		$(".dian").animate({left:x.left,width:w},300);
		//С���߻ָ�����
		//$(this).css('font-weight','600').siblings().css('font-weight','normal');
		});
	
	}
	
	
	
//��Ļ��������
	

		 //�������ú���
//���Ϲ���
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

//���¹���
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
	
//���ڲ��Ե�ǰ�����ĸ߶�
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