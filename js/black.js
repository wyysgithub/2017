// JavaScript Document
var inSpeed=1000;
var onSpeed=1000;
var outSpeed=1000;

function inAndOut(i){
		$(".p1:nth-child("+i+")").fadeIn(inSpeed).delay(onSpeed).fadeOut(outSpeed);
	}
$(document).ready(function(e) {
	inAndOut(1);
  
});