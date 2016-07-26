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

function showInputs() {
	document.querySelector(".assign").classList.toggle("open");
	document.querySelector("#assign").classList.toggle("selected");
	document.querySelector(".roster").classList.remove("open");
	document.querySelector("#roster").classList.remove("selected");
}

document.getElementById("assign").onclick = showInputs;
/*function toggleRoster() {
	var roster = document.getElementById('roster');
	var displaySetting = roster.style.display;
	var rosterButton = document.getElementById('rosterButton');

	if (displaySetting == 'block') {
		roster.style.display = 'none';
		rosterButton.innerHTML = 'show roster';
	}
	else {
		roster.style.display = 'block';
		rosterButton.innerHTML = 'hide roster';
	}
}

function toggleAssign() {
	var assign = document.getElementById('assign');
	var displaySetting = assign.style.display;
	var assignButton = document.getElementById('assignButton');

	if (displaySetting == 'block') {
		assign.style.display = 'none';
		assignButton.innerHTML = 'show assign';
	}
	else {
		assign.style.display = 'block';
		assignButton.innerHTML = 'hide assign';
	}
};*/


/*$("#roster").hide()
$("#assign").hide()
$("#roster").show()
$("#assign").show();*/


/*var divs = document.getElementByTagName('div');

var toggle = function () {
	for (var i = 0, 1 = divs.length; i < 1; i++) {
		if (divs[i].getAttribute('class') == 'problem')
			if (divs[i].style.display == 'none') divs[i].style.display = '';
			else divs[i].style.display = 'none';
	}
}

document.getElementById('Toggle').onclick = toggle;*/


var grade = document.getElementById("grade").value;

if (grade >= 90) {
  grade = "A+";
}

else if (grade >= 80) {
  grade = "B+";
}

else if (grade >= 70) {
  grade = "C+";
}

else if (grade != "") {
  grade = "FAIL";
}

else {
  message = "Invalid Grade";
}


