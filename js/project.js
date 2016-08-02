// Your code here.
var students = []

document.getElementById("roster").onclick = function () {
	document.querySelector(".roster").classList.toggle("open");
	document.querySelector(".roster").classList.toggle("selected");
}

document.getElementById("assign").onclick = function () {
	document.querySelector(".assign").classList.toggle("open");
	document.querySelector(".assign").classList.toggle("selected");
}

document.getElementById("clickme").onclick = assignGrade;

function assignGrade () {
	var student = document.getElementById("name").value;
	var grade = document.getElementById("grade").value;

	if (grade => 91) {
		addToReportCard(student, "A");
	}
	else if (grade => 81) {
		addToReportCard(student, "B");
	}
	else if (grade => 71) {
		addToReportCard(student, "C");
	}
	else if (grade => 61) {
		addToReportCard(student, "D");
	}
	else if (grade => 0){
		addToReportCard(student, "F");
	}
	else {
		addToReportCard(student, "Invalid Grade");
	}
}

function addToReportCard (studentName, studentGrade) {
	document.getElementById("reportcard").innerHTML = document.getElementById("reportcard").innerHTML+"<li>"+studentName+", "+studentGrade+"</li>";
}

// FREEBIES! Blank-out the inputs onfocus.
document.getElementById("name").onfocus = clearName;
document.getElementById("grade").onfocus = clearGrade;

function clearName() {
  document.getElementById("name").value = "";
}
function clearGrade() {
  document.getElementById("grade").value = "";
}