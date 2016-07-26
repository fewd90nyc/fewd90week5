// Your code here.
document.getElementById("roster").onclick = function(){
	document.querySelector(".roster").classList.toggle("open");
};

document.getElementById("assign").onclick = function(){
	document.querySelector(".assign").classList.toggle("open");
};

function gradeassigned() {
	document.getElementById("name").value


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
// FREEBIES! Blank-out the inputs onfocus.
document.getElementById("name").onfocus = clearName;
document.getElementById("grade").onfocus = clearGrade;

function clearName() {
  document.getElementById("name").value = "";
}
function clearGrade() {
  document.getElementById("grade").value = "";
}