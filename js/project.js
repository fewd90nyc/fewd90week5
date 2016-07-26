// Your code here.
var grade;
var Name;
var number_grade;

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

function curve() {
	var student_name = document.getElementById("name").value;

	if (student_name === "Joe" || student_name === "joe") {
		document.querySelector("#joe .report_grade").innerHTML
		= number_grade_to_letter(number_grade);
	}

	if (student_name === "Chandler" || student_name === "chandler") {
		document.querySelector("#chandler .report_grade").innerHTML
		= number_grade_to_letter(number_grade);
	}

	if (student_name === "Suzanne" || student_name === "suzanne") {
		document.querySelector("#suzanne .report_grade").innerHTML
		= number_grade_to_letter(number_grade);
	}

	if (student_name === "Andre" || student_name === "andre") {
		document.querySelector("#andre .report_grade").innerHTML
		= number_grade_to_letter(number_grade);
	}

	if (student_name === "Meghan" || student_name === "meghan") {
		document.querySelector("#meghan .report_grade").innerHTML
		= number_grade_to_letter(number_grade);
	}

	if (student_name === "Sarah" || student_name === "sarah") {
		document.querySelector("#sarah .report_grade").innerHTML
		= number_grade_to_letter(number_grade);
	}

	if (student_name == null || student_name == "") {
		alert("Name must be filled out");
		return false;
	}

};


function number_grade_to_letter(number_grade) {;

	var number_grade = document.getElementById("grade").value;

	 if (number_grade >= 85) {
	  return "A";
	 }

	 if (number_grade >= 75) {
	  return "B";
	}

	 if (number_grade >= 65) {
	  return "C";
	}

	if (number_grade >= 56) {
		return "D";
	}

	 if (number_grade <= 55) {
	  return "E";
	}

	 if (number_grade == null || number_grade == "") {
	 alert("Grade must be filled out");
	 return false;
	}

};

document.getElementById("clickme").onclick = curve;

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