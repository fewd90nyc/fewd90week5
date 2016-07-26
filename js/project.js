// Your code here.

document.getElementById("name").onfocus = clearName;
document.getElementById("grade").onfocus = clearGrade;

function clearName() {
  document.getElementById("name").value = "";
}
function clearGrade() {
  document.getElementById("grade").value = "";
}

document.getElementById("roster").onclick = function(){
	document.querySelector("div.roster").classList.toggle("open");
	document.querySelector("nav a").classList.toggle("open");
};

document.getElementById("assign").onclick = function(){
	document.querySelector("div.assign").classList.toggle("open");
	document.querySelector("nav a").classList.toggle("open");
};

//document.getElementById("reportcard").onclick = function (){
//	document.querySelector().

//function addgrade (){ 
//document.getElementById("reportcard").innerHTML=.value;
//};

//document.getElementById("clickme").onclick = copy;


// FREEBIES! Blank-out the inputs onfocus.


