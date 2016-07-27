// Your code here.

// FREEBIES! Blank-out the inputs onfocus.

function showRoster() {
	document.querySelector(".roster").classList.toggle("open");
	document.querySelector("#roster").classList.toggle("selected");
};

document.getElementById("roster").onclick = showRoster;



function showAssign() {
	document.querySelector(".assign").classList.toggle("open");
	document.querySelector("#assign").classList.toggle("selected");
};

document.getElementById("assign").onclick = showAssign;


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

	if (grade < 60) {
		grade = "F";
	}
	else if (grade < 70) {
		grade = "D";
	}
	else if (grade < 75) {
		grade = "C-";
	}
	else if (grade < 80) {
		grade = "C";
	}
	else if (grade < 85) {
		grade = "B-";
	}
	else if (grade < 90) {
		grade = "B";
	}
	else if (grade < 95) {
		grade = "A-";
	}
	else if (grade < 100) {
		grade = "A";
	}
	else if (grade = 100) {
		grade = "A"
	}
	else {
		message = "Invalid Entry";
	}
}

function assignGrade(student, grade) {
	document.getElementById("reportcard").innerHTML = document.getElementById("reportcard").innerHTML+"<li>"+student+ "grade"+"</li>";
}

function clearName() {
  document.getElementById("name").value = "";

  document.write(students.name + "," + grade);
}


function clearGrade() {
  document.getElementById("grade").value = "";
 }




