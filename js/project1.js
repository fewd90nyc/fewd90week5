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

   	var list = document.getElementById("names");
   	for (i=0;i<6;i++){
   	list.innerHTML = list.innerHTML + 
   	"<li id=" + students[i].name + "><p>"  + students[i].name + "</p>" +
   	"<button type='button' id=" + students[i].name + "_button>" + "delete" + "</button></li>";
	};
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

   	var list = document.getElementById("reportcard");
   	for (i=0;i<6;i++){
   	list.innerHTML = list.innerHTML + 
   	"<li id=" + students[i].name + "><p>" + getValue(students[i].name, students[i].grade) + "</p>" +
   	"<button type='button' id=" + students[i].name + "_button>" + "delete" + "</button></li>";
   	}
}

//get input values 
function getValue(name,score){
	var grade, out;

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

	out = name + "," + grade;
	return out;
}


// click to switch between roster and assignment
document.getElementById("roster").onclick=showRoster;
document.getElementById("assign").onclick=showAssign;
