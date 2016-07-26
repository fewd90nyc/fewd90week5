document.getElementById("roster").onclick = function(){
  document.querySelector("div.roster").classList.toggle("open");
  document.querySelector("nav a").classList.toggle("selected");
};  

document.getElementById("assign").onclick = function(){
  document.querySelector("div.assign").classList.toggle("open");
  document.querySelector("nav a").classList.toggle("selected");
};

document.getElementById("clickme").onclick = assignGrade;

function assignGrade() {
	var student = document.getElementById("name").value;
	var grade = document.getElementById("grade").value;

	if (grade >= 81) {
		addToReportCard(student, "A");
	}
	else if (grade >= 51) { 
		addToReportCard(student, "B");
	}
	else if (grade >= 21) {
		addToReportCard(student, "C");
	}
	else if (grade >= 11) {
		addToReportCard(student, "D");
	}
	else if (grade >= 1) {
		addToReportCard(student, "F");
	}
	else {
		alert("Invalid Entry");
	}
}

function addToReportCard(n, lg) {
	document.getElementById("reportcard").innerHTML = document.getElementById("reportcard").innerHTML+"<li>"+n+", "+lg+"</li>"; 

}

document.getElementById("name").onfocus = clearName;
document.getElementById("grade").onfocus = clearGrade;

function clearName() {
  document.getElementById("name").value = "";
}
function clearGrade() {
  document.getElementById("grade").value = "";
}

