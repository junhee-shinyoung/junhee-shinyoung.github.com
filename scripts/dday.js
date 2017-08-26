<!--
var now = new Date();
var then = new Date("oct 14,2017");
var gap = then.getTime() - now.getTime();
gap = -(Math.floor(gap / (1000 * 60 * 60 * 24)) + 1);
if (gap == 0)
	document.write("D-Day");
else
	document.write("D" + gap);
// -->