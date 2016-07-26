// Your code here.

// FREEBIES! Blank-out the inputs onfocus.
document.getElementById("name").onfocus = clearName;
document.getElementById("grade").onfocus = clearGrade;

function clearName() {
  document.getElementById("name").value = "";
}
function clearGrade() {
  document.getElementById("grade").value = "";
}
function showRoster() {
document.querySelector(".roster").classList.toggle("open");
document.querySelector("#roster").classList.toggle("selected");
document.querySelector(".assign").classList.remove("open");
document.querySelector("#assign").classList.remove("selected");
}
document.getElementById("roster").onclick = showRoster;

function showInput() {
document.querySelector(".roster").classList.toggle("open");
document.querySelector("#roster").classList.toggle("selected");
document.querySelector(".assign").classList.remove("open");
document.querySelector("#assign").classList.remove("selected");
}
document.getElementById("assign").onclick = showInput;
