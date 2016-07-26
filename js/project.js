// Your code here.


//document.getElementById("roster").onclick = function(){
//  document.div.classList.toggle("roster");
//};



document.getElementById("roster").onclick = function() {
	document.querySelector(.roster).style.display = "";
	document.querySelector(div.assign).style.display = "none";
};

document.getElementById("assign").onclick = function() {
	document.querySelector(.roster).style.display = "none";
	document.querySelector(div.assign).style.display = "";
};



//var showRoster;
//var showAssign;

//function() {
//	showRoster = getElementById("roster").onclick
//	showAssign = getElementById("assign").onclick
//
//	if(showRoster == true) { 
//		document.getElementById("roster").style.display = "block";
//		document.getElementById("assign").style.display = "none";
//	};
//
//	else if(showAssign == true) {
//		document.getElementById("roster").style.display = "none";
//		document.getElementById("assign").style.display = "block";
//	};
//};




// FREEBIES! Blank-out the inputs onfocus.
document.getElementById("name").onfocus = clearName;
document.getElementById("grade").onfocus = clearGrade;

function clearName() {
  document.getElementById("name").value = "";
}
function clearGrade() {
  document.getElementById("grade").value = "";
}