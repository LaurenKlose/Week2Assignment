var first = 14;
var second = 28;
var third = first + second;
var fourth = first * second;
var fifth = first / second;
var sixth = second - first;

document.getElementById("addit").innerHTML="When I add " + first + " to " + second + " I get " + third + ".";
document.getElementById("mult").innerHTML="When I multiply " + first + " by " + second + " I get " + fourth + ".";
document.getElementById("divi").innerHTML= "When I divide " + first + " by " + second + " I get " + fifth + ".";
document.getElementById("subt").innerHTML="When I subtract " + first + " by " + second + " I get " + sixth + ".";