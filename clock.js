var hours = 1;
var seconds =1;
var minutes =1;


var s = document.getElementById('second');
var m = document.getElementById('minute');
var h = document.getElementById('hand');



setInterval(secondsRotation, 1000);
setInterval(minutesRotation, 60000);
setInterval(hoursRotation, 360000);

function secondsRotation(){
	var secondsDegrees = seconds * 6
	s.style.transform = "rotate(" + secondsDegrees + "deg)"; seconds++;
}

function minutesRotation(){
	var minutesDegrees = minutes * 6
	m.style.transform = "rotate(" + minutesDegrees + "deg)"; minutes++;
}

function hoursRotation(){
	var minutesDegrees = hours * 30
	h.style.transform = "rotate(" + hoursDegrees + "deg)"; hours++;
}