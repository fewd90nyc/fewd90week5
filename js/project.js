// ALL THE FUNCTIONS
// pull out Roster page
function showRoster(){
	document.getElementById("roster").className="selected";
	document.getElementById("assign").className =
   	document.getElementById("assign").className.replace( /(?:^|\s)selected(?!\S)/g , '' );

   	var x = document.getElementsByClassName("roster");
   	var y = document.getElementsByClassName("assign");
   	x[0].style.display="block";
   	y[0].style.display="none";
}

// pull out Assignment page
function showAssign(){
	document.getElementById("assign").className="selected";
	document.getElementById("roster").className =
   	document.getElementById("roster").className.replace( /(?:^|\s)selected(?!\S)/g , '' );

   	var x = document.getElementsByClassName("roster");
   	var y = document.getElementsByClassName("assign");
   	x[0].style.display="none";
   	y[0].style.display="block";
}

function clearName() {
  document.getElementById("name").value = "";
}
function clearGrade() {
  document.getElementById("grade").value = "";
}

//get input values 
function getValue(){
	var name = document.getElementById("name").value,
		score = document.getElementById("grade").value,
		grade;

	if (score>=0 & score<=100){
		if (score>=90){
		grade="A";
		if (score>=98){
			grade="A+";
		}
		else if (score<=92){
			grade="A-";
		}
	}
	else if (score>=80){
		grade="B";

		if (score>=88){
			grade="B+";
		}
		else if (score<=82){
			grade="B-";
		}
	}
	else if (score>=70){
		grade="C";

		if (score>=78){
			grade="C+";
		}
		else if (score<=72){
			grade="C-";
		}
	}
	else if (score>=60){
		grade="D";

		if (score>=68){
			grade="D+";
		}
		else if (score<=62){
			grade="D-";
		}
	}
	else if (score<60){
		grade="F";
	}
	}
	else{
		grade=null;
	}
document.getElementById("reportcard").innerHTML = 
document.getElementById("reportcard").innerHTML + "<li>" + name + "," + grade + "</li>";
}




// click to switch between roster and assignment
document.getElementById("roster").onclick=showRoster;
document.getElementById("assign").onclick=showAssign;

// clear value for input later
document.getElementById("name").onfocus = clearName;
document.getElementById("grade").onfocus = clearGrade;

// click to input values
document.getElementById("clickme").onclick=getValue;
