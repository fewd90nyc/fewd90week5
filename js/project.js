var rosterIdElem = document.getElementById("roster");
var assignIdElem = document.getElementById("assign");
var rosterClassElem = document.getElementsByClassName("roster");
var assignClassElem = document.getElementsByClassName("assign");

// ALL THE FUNCTIONS
// pull out Roster page
function showRoster() {
	rosterIdElem.classList.add("selected");
	assignIdElem.classList.remove("selected");
	rosterClassElem[0].style.display = "block";
	assignClassElem[0].style.display = "none";
}

// pull out Assignment page
function showAssign() {
	assignIdElem.className = "selected";
	rosterIdElem.className = rosterIdElem.className.replace(/(?:^|\s)selected(?!\S)/g, '');

	var x = document.getElementsByClassName("roster");
	var y = document.getElementsByClassName("assign");
	x[0].style.display = "none";
	y[0].style.display = "block";
}

function clearName() {
	document.getElementById("name").value = "";
}

function clearGrade() {
	document.getElementById("grade").value = "";
}

//get input values
function getValue() {
	var name = document.getElementById("name").value,
		score = document.getElementById("grade").value,
		grade;

	if (score >= 0 & score <= 100) {
		if (score >= 90) {
			grade = "A";
			if (score >= 98) {
				grade = "A+";
			} else if (score <= 92) {
				grade = "A-";
			}
		} else if (score >= 80) {
			grade = "B";

			if (score >= 88) {
				grade = "B+";
			} else if (score <= 82) {
				grade = "B-";
			}
		} else if (score >= 70) {
			grade = "C";

			if (score >= 78) {
				grade = "C+";
			} else if (score <= 72) {
				grade = "C-";
			}
		} else if (score >= 60) {
			grade = "D";

			if (score >= 68) {
				grade = "D+";
			} else if (score <= 62) {
				grade = "D-";
			}
		} else if (score < 60) {
			grade = "F";
		}
	} else {
		grade = null;
	}
	document.getElementById("reportcard").innerHTML =
		document.getElementById("reportcard").innerHTML + "<li>" + name + "," + grade + "</li>";
}




// click to switch between roster and assignment
document.getElementById("roster").onclick = showRoster;
document.getElementById("assign").onclick = showAssign;

// clear value for input later
document.getElementById("name").onfocus = clearName;
document.getElementById("grade").onfocus = clearGrade;

// click to input values
document.getElementById("clickme").onclick = getValue;
