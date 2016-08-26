// Your code here.

document.getElementById("roster").onclick = function(){
document.querySelector("div.roster").style.display = "block";
document.querySelector("div.assign").style.display = "none";
document.getElementById("roster").classList.add("selected");
document.getElementById("assign").classList.remove("selected");
};

document.getElementById("assign").onclick = function(){
  document.querySelector("div.assign").style.display = "block";
  document.querySelector("div.roster").style.display = "none";
  document.getElementById("assign").classList.add("selected");
  document.getElementById("roster").classList.remove("selected");
};

document.getElementById("clickme").onclick = assignGrade;

function assignGrade() {
	var grade = document.getElementById("grade").value;
	var student = document.getElementById("name").value;

if(grade < 65) {
    addToReportCard(student, "F");
  }
  else if(65 <= grade && grade < 70) {
    addToReportCard(student, "D");
  }
  else if(70 <= grade && grade < 79) {
    addToReportCard(student, "C");
  }
  else if(80 <= grade && grade < 89) {
    addToReportCard(student, "B");
  }
  else if(90 <= grade && grade < 100) {
    addToReportCard(student, "A");
  }
  else if(grade == 100) {
    addToReportCard(student, "A+");
  }
  else {
    alert("You've entered an incorrect value");
  }
}

  function addToReportCard(n, lg){
document.getElementById("reportcard").innerHTML = document.getElementById("reportcard").innerHTML+"<li>"+n+", "+lg+"</li>";
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