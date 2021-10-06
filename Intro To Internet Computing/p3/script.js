function analyzeData() {
var a = document.getElementById("txtnum1").value;   
var b = document.getElementById("txtnum2").value;
var c = document.getElementById("txtnum3").value;
var n1 = parseFloat(a, 10);
var n2 = parseFloat(b, 10);
var n3 = parseFloat(c, 10);
var max = 0;
var min = 0;
var range = 0;
var median = 0;
var mean = 0;
//find min value
if (n1 < n2) {
if (n1 < n3)
min = n1;
else
min = n3;
} else if (n2 < n3)
min = n2;
else
min = n3;
//find max value
if (n1 > n2) {
if (n1 > n3)
max = n1;
else
max = n3;
} else if (n2 > n3)
max = n2;
else
max = n3
//calculate range
range = max - min;
//calculate median total sum - (max + min) because there are only 3 numbers
median = (n1 + n2 + n3) - (max + min)
//calculate mean
mean = (n1 + n2 + n3) / 3;

document.getElementById("min").innerHTML = "Min = " + min;
document.getElementById("max").innerHTML = "Max = " + max;
document.getElementById("mean").innerHTML = "Mean = " + mean;
document.getElementById("median").innerHTML = "Median = " + median;
document.getElementById("range").innerHTML = "Range = " + range;
}