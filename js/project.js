// Your code here.

//3 attempts at getting tabs to work

/*
document.getElementById("roster").onclick = function(){
 document.div.classList.toggle("roster");
};
*/



document.getElementById("roster").onclick = function() {
	document.querySelector(".roster").style.display = "block";
	document.querySelector(".assign").style.display = "none";
};

document.getElementById("assign").onclick = function() {
	document.querySelector(".roster").style.display = "none";
	document.querySelector(".assign").style.display = "block";
};




// var showRoster;
// var showAssign;

// function() {
// 	showRoster = getElementById("roster").onclick
// 	showAssign = getElementById("assign").onclick

// 	if(showRoster == true) { 
// 		document.getElementById("roster").style.display = "block";
// 		document.getElementById("assign").style.display = "none";
// 	};

// 	else if(showAssign == true) {
// 		document.getElementById("roster").style.display = "none";
// 		document.getElementById("assign").style.display = "block";
// 	};
// };

var grade;
var letterGrade;
var name;
var existingLetterGrades = "";

document.getElementById("clickme").onclick = addToReportcard

function addToReportcard(){
  grade = document.getElementById("grade").value;
  name = document.getElementById("name").value;

  if(grade >= 94) {
    letterGrade = "A"
  }
  else if (grade >= 90) {
    letterGrade = "A-"
  }
  else if (grade >= 87) {
    letterGrade = "B+"
  }
  else if (grade >= 84) {
    letterGrade = "B"
  }
  else if (grade >= 80) {
    letterGrade = "B-"
  }
  else if (grade >= 77) {
    letterGrade = "C+"
  }
  else if (grade >= 74) {
    letterGrade = "C"
  }
  else if (grade >= 70) {
    letterGrade = "C-"
  }
  else if (grade >= 67) {
    letterGrade = "D+"
  }
  else if (grade >= 64) {
    letterGrade = "D"
  }
  else if (grade >= 60) {
    letterGrade = "D-"
  }
  else if (grade >= 0) {
    letterGrade = "F"
  }
  else {
    letterGrade = "Invalid Entry";
  }
  existingLetterGrades = (existingLetterGrades + "<li>"+name+", "+letterGrade+"</li>");
  console.log(existingLetterGrades);
  document.getElementById("reportcard").innerHTML = existingLetterGrades;
};

//"rgb("+red+","+green+","+blue+")";

// FREEBIES! Blank-out the inputs onfocus.
document.getElementById("name").onfocus = clearName;
document.getElementById("grade").onfocus = clearGrade;

function clearName() {
  document.getElementById("name").value = "";
}
function clearGrade() {
  document.getElementById("grade").value = "";
}