var = name
var = grade
var = letterGrade
var = studentName


document.getElementById("name").onfocus = clearName;
document.getElementById("grade").onfocus = clearGrade;

function clearName() {
  document.getElementById("name").value = "";
}
function clearGrade() {
  document.getElementById("grade").value = "";
}

function showRoster (){
	
	document.querySelector(".roster").classList.toggle("open");
	document.querySelector("#roster").classList.toggle("selected");
	
	document.querySelector(".assign").classList.remove("open");
	document.querySelector("#assign").classList.remove("selected");
}

document.getElementById("roster").onclick = showRoster;

function showInputs (){

	document.querySelector(".assign").classList.toggle("open");
	document.querySelector("#assign").classList.toggle("selected");

	document.querySelector(".roster").classList.remove("open");
	document.querySelector("#roster").classList.remove("selected");
}

document.getElementById("assign").onclick = showInputs;

document.getElementById("clickme").onclick = addNameGrade;

function addNameGrade(){
	do something
	alert('hello');
	console.log('hello');
	get/save student name
	get/save student grade

	var studentName = document.getElementById("name").value;
	var grade = document.getElementById("grade").value;

	if (grade >= 95) {
		grade = "A+";
	} else if (grade >= 90) {
		grade = "A-";
	} else if (grade  >= 86) {
		grade = "B+";
	} else if (grade  >= 82) {
		grade = "B-";
	} else if (grade  >= 74) {
		grade = "C+";
	} else if (grade  >= 70) {
		grade = "C";
	} else if (grade  >= 67) {
		grade = "C-";
	} else if (grade  >= 60) {
		grade = "D";
	} else if (grade  >= 0) {
		grade = "F";
	}

	document.getElementById("reportcard").innerHTML = document.getElementById("reportcard").innerHTML + "<li>"+studentName+","+grade+"</li>";
}

document.getElementById("name").onchange = function(){
	name = document.getElementById("name").value; 
}

document.getElementById("grade").onchange = function(){
	grade = document.getElementById("grade").value; 


document.getElementById("clickme").onclick = function(){	
document.getElementById("reportcard").innerHTML = name + LetterGrade
}
}