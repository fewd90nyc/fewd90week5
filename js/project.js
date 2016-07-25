// Your code here.
var grade;
var Name;

document.getElementById("roster").onclick = function (){
	document.querySelector("div.roster").classList.toggle("open");
	document.querySelector("nav a").classList.toggle("selected");
};

document.getElementById("assign").onclick = function (){
	document.querySelector("div.assign").classList.toggle("open");
	console.log(this);
	console.log(arguments);
	document.querySelector("#assign").classList.toggle("selected"); 
};

function copy_input_to_report_card() {
document.querySelector("li#joe .report_grade").innerHTML
= document.getElementById("grade");
}

document.getElementById("clickme").onclick = copy_input_to_report_card;

function number_grade_to_letter(number_grade) {;

	var number_grade = document.getElementById("grade");

	 if (number_grade > 85) {
	  return "A";
	 }
	 if (number_grade > 75 <=84) {
	 return "B";
	}
	 if (number_grade >65 <=74) {
	 return "C";
	}
};

document.getElementById("name").onfocus = clearName;
document.getElementById("grade").onfocus = clearGrade;

function clearName() {
  document.getElementById("name").value = "";
}

function clearGrade() {
  document.getElementById("grade").value = "";
}


//write function for copy_input_to_report_card//

// FREEBIES! Blank-out the inputs onfocus.

//li.joe .report_grade//

//#joe div.report_grade”).value = number_grade_to_letter(input)//