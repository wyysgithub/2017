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
	
	$(document).scroll(function(){                                //���ض�����ť�Ƿ���ʾ
		var scollU=document.documentElement.scrollTop||document.body.scrollTop;
		if(scollU>650){
		$('#up').css('display','block');
		}else{
		$('#up').css('display','none');
			}			
	});
	
	$(".download").click(function(){
		downloadFile('jianli.doc')
		});
	
	var X=getX();
	$("#header,.gray").css('height',X/2);
		
		/*$("#header img").animate({top:-0.01*X},5000);$(".menu-left img").width(0.4*X);*/
		
	$(".con-table input").focus(function(){
		$(this).val('');
		});
	
});



function menu(){//������Ч��
	
	$(".menu-ul li").mouseover(function(){
		var x=$(this).offset();
		var w=$(this).width();
		$(".dian").animate({left:x.left+w/4,width:w/2},200);
		$(".dian").animate({left:x.left,width:w},300);
		});
	
	}
//��Ļ��������
	

		 //�������ú���
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