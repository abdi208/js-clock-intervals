var second = document.getElementById('second');
var hour = document.getElementById('hour');
var minute = document.getElementById('minute');


var h = 0;
var s = 0;
var m = 0;



setInterval(function(){
 	s += 6;
	second.style.transform = "rotate(" + s + "deg)"; 
	s++;
	
 }, 1000);

setInterval(function(){
 	m += 6;
	minute.style.transform = "rotate(" + m + "deg)"; 
	m++;
	console.log(minute);
 }, 52000);
setInterval(function(){
 	h += 6;
	hour.style.transform = "rotate(" + h + "deg)"; 
	h++;
	console.log(minute);
 }, 360000);

function getTime(){
	var now = new Date();
}