var students = [{
  name: "Joe", 
  grade: 72
}, {
  name: "Chandler", 
  grade: 93
}, {
  name: "Suzanne", 
  grade: 89
}, {
  name: "Andre", 
  grade: 100
}, {
  name: "Meghan", 
  grade: 85
}, {
  name: "Sarah", 
  grade: 91
}];

//add code experimenting below.. 

/*document.getElementById("reportcard").onchange = function() {
  reportcard = document.getElementById("reportcard").value;

if (grade >= 90) {
  grade = "A+";
}

else if (grade >= 80) {
  grade = "B+";
}

else if (grade>= 70) {
  grade = "C+";
}

else if (grade != "") {
  grade = "FAIL";
}

else {
  message = "Invalid Grade";
}
document.getElementById("reportcard").innerHTML = document.getElementById("reportcard").innerHTML + "<li>"+studentName+", "+grade+"</li>";

};