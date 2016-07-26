var name;
var grade;

document.getElementById("roster").onclick = function () {
	document.querySelector("div.roster").classList.toggle("open");
};

document.getElementById("assign").onclick = function () {
	document.querySelector("div.assign").classList.toggle("open");
};

document.getElementById("clickme").onclick = function () {
	name = document.getElementById("name").value;
	grade = document.getElementById("grade").value;
	
	if (grade >= 90) {
	//makes the reportcard show student.name, lettergrade	
}	

	else if (grade >=80){
		//makes the reportcard show student.name, lettergrade	
}	

	else if (grade >=70){
			//makes the reportcard show student.name, lettergrade	
}	

	else {
			//:( lettergrade	
}	
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
