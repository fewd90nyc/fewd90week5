// Your code here.

// FREEBIES! Blank-out the inputs onfocus.

function showRoster() {
	document.querySelector(".roster").classList.toggle("open");
	document.querySelector("#roster").classList.toggle("selected");
};

document.getElementById("assign").onclick = function() {
	document.querySelector(".assign").classList.toggle("open");
	document.querySelector("#assign").classList.toggle("selected");
};

document.getElementById("clickme").onclick = assignGrade;

function showInputs() {
	document.querySelector(".assign").classList.toggle("open");
	document.querySelector("#assign").classList.toggle("selected");

	document.querySelector(".roster").classList.remove("open");
	document.querySelector("#roster").classList.remove("selected");
}

document.getElementById("assign").onclick = showInputs;

function assignGrade() {
	var student = document.getElementById("name").value;
	var grade = document.getElementById("grade").value;

	if (grade >= 0) {
		grade = "F";
	}
	else if (grade >= 60) {
		grade = "D-";
	}
	else if (grade >= 65) {
		grade = "D";
	}
	else if (grade >= 70) {
		grade = "C-";
	}
	else if (grade >= 70) {
		grade = "C-";
	}
	else if (grade >= 75) {
		grade = "C";
	}
	else if (grade >= 80) {
		grade = "B-";
	else if (grade >= 85) {
		grade = "B";
	}
	else if (grade >= 90) {
		grade = "A-";
	else if (grade >= 95) {
		grade = "A";
	}
	else {
		message = "Invalid Entry";
	}
}


function clearName() {
  document.getElementById("name").value = "";

  document.write(students.name + "," + grade);
}


function clearGrade() {
  document.getElementById("grade").value = "";




