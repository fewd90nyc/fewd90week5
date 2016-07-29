// // Your code here.
// document.getElementById("roster").onclick = function(){
// document.querySelector(".roster").classList.toggle("open");
// };

// document.getElementById("assign").onclick = function(){
// document.querySelector(".name").classList.toggle("open");
// };

document.getElementById("name").onfocus = clearName;
document.getElementById("grade").onfocus = clearGrade;

function clearGrade (){
	document.getElementById("grade").value = "";
}

function clearName (){
	document.getElementById("name").value + "";
}

function showRoster () {
	document.querySelector(".roster").classList.toggle("open");
	document.querySelector("#roster").classList.toggle("selected");
	document.querySelector(".assign").classList.remove("open");
	document.querySelector("#assign").classList.remove("selected");
}

document.getElementById("roster").onclick = showRoster;

function showInputs() {
	document.querySelector(".assign").classList.toggle("open");
	document.querySelector("#assign").classList.toggle("selected");
	document.querySelector(".roster").classList.remove("open");
	document.querySelector("#roster").classList.remove("selected");
}

document.getElementById("assign").onclick = showInputs;

document.getElementById("assign").onclick = addNameGrade;

function addNameGrade () {

	var student = document.getElementById("name").value;
	var grade = document.getElementById("grade").value;

	if (grade >= 90) {
		grade = "A+";
	}
	else if (grade >= 85) {
		grade = "A-";
	}
	else if (grade >= 80) {
		grade = "B+";
	}

	document.getElementById("reportcard").innerHTML = document.getElementById("reportcard").innerHTML + "<li>"+ studentName+","+grade+"</li>";
}







//creating event for click on div.roster



//function showOverlay() {
//document.getElementById("roster").style.display = "block";

//}

//function hideOverlay() {
  //document.getElementById("roster").style.display = "none";  

//}


// FREEBIES! Blank-out the inputs onfocus.
//document.getElementById("name").onfocus = clearName;
//document.getElementById("grade").onfocus = clearGrade;

//function clearName() {
  //document.getElementById("name").value = "";
//}
//function clearGrade() {
//  document.getElementById("grade").value = "";
//}


//roster.style.display = "block";

//roster.style.display = "none"


