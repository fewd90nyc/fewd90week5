// Your code here.
var name;
var grade;
var roster;
var assign;

function roster() {
  	var roster = document.getElementById("roster").value;
 	document.getElementById("roster").innerHTML = roster;
} 	


document.getElementById("roster").onclick = function(){
  roster = document.getElementById("roster").value;

document.getElementById("grade").onchange = function(){
  grade = document.getElementById("grade").value;

  if (name >= 72) {
  	message = "C-"
  }
  document.getElementById('roster').onclick = roster;
  }; 

// FREEBIES! Blank-out the inputs onfocus.
document.getElementById("name").onfocus = clearName;
document.getElementById("grade").onfocus = clearGrade;

function clearName() {
  document.getElementById("name").value = "";
}
function clearGrade() {
  document.getElementById("grade").value = "";
}
  document.getElementById("clickme").onfocus = result;
  if (name >= 72) {
  	message = "c minus"
  }
};
