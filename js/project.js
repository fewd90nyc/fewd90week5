// ALL THE FUNCTIONS
<<<<<<< HEAD
=======

>>>>>>> origin/gh-pages
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



<<<<<<< HEAD
=======

>>>>>>> origin/gh-pages
// click to switch between roster and assignment
document.getElementById("roster").onclick=showRoster;
document.getElementById("assign").onclick=showAssign;

// clear value for input later
document.getElementById("name").onfocus = clearName;
document.getElementById("grade").onfocus = clearGrade;

// click to input values
document.getElementById("clickme").onclick=getValue;
<<<<<<< HEAD
=======












// Feel free to extrapolate or add any features you think are interesting. Add validation, go wild!

// **CHALLENGE**: You'll notice there is an additional script in the `js` folder, `js/students.js`. 
// In that script is an Array of student Objects. The challenge, for those of you who are feeling 
// really confident in your JS ability, is to, in your HTML, delete what is currently in the `<div class="roster">`. 
// Add that script to your HTML before the project.js and then, in project.js, loop through that array, 
// and populate the roster, AS WELL AS assigning a grade in the `#reportcard` for each student. 
// If you're feeling REALLY ambitious, think about how you would _delete_ one of the `<li>` (onclick for instance).
>>>>>>> origin/gh-pages
