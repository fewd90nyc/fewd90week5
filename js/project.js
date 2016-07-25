// Variable declarations
var roster = document.getElementById("roster");
var assign = document.getElementById("assign");
var divRoster = document.querySelector("div.roster");
var divAssign = document.querySelector("div.assign");
var rosterList = document.getElementById("rosterList");
var studentName = document.getElementById("name");
var grade = document.getElementById("grade");
var addButton = document.getElementById("clickme");
var reportCard = document.getElementById("reportcard");

// Event Handlers
roster.onclick = toggleRoster;
assign.onclick = toggleAssign;
addButton.onclick = addStudentGrade;
studentName.onfocus = clearValue;
grade.onfocus = clearValue;


// Function declarations
function clearValue() {
  this.value = "";
}

function toggleRoster() {
	divRoster.style.display = "block";
	divAssign.style.display = "none";

	roster.classList = "selected";
	assign.classList = "";

	loadStudentRoster();
}

function toggleAssign() {
	divRoster.style.display = "none";
	divAssign.style.display = "block";

	roster.classList = "";
	assign.classList = "selected";
}

function addStudentGrade() {
	//var student = { name: studentName.value, grade: grade.value };
	var li = document.createElement("li");
	var text = document.createTextNode(studentName.value + ", " + getLetterGrade(grade.value));
	li.appendChild(text);
	reportCard.appendChild(li);
}

function getLetterGrade(numGrade) {
	var letterGrade;

	if (isNaN(numGrade)) {
		letterGrade = "WTF";
	} else if (numGrade > 100) {
		letterGrade = "A+";
	} else if (numGrade >= 95) {
		letterGrade = "A";
	} else if (numGrade >= 90) {
		letterGrade = "A-"
	} else if (numGrade >= 87) {
		letterGrade = "B+";
	} else if (numGrade >= 84) {
		letterGrade = "B";
	} else if (numGrade >= 80) {
		letterGrade = "B-";
	} else if (numGrade >= 77) {
		letterGrade = "C+";
	} else if (numGrade >= 74) {
		letterGrade = "C";
	} else if (numGrade >= 70) {
		letterGrade = "C-";
	} else if (numGrade >= 67) {
		letterGrade = "D+";
	} else if (numGrade >= 64) {
		letterGrade = "D";
	} else if (numGrade >= 60) {
		letterGrade = "D-";
	} else {
		letterGrade = "F";
	}
	
	return letterGrade;
}


function loadStudentRoster() {
	if (students) {
		rosterList.innerHTML = "";

		for (var i = 0; i <= students.length - 1; i++) {
			var li = document.createElement("li");
			var text = document.createTextNode(students[i].name);
			li.appendChild(text);
			rosterList.appendChild(li);
		}
	}
}