function addNew() {
	var ul = document.getElementById("reportcard");
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(document.getElementById('name').value + ", " + letterGrade(document.getElementById('grade').value)));
	ul.appendChild(li);
}

function letterGrade(percent) {

	var mark;

	if (percent < 60)
		mark = 'F';
	else if (percent < 70) 
		mark = 'D';
	else if (percent < 80)
		mark = 'C';
	else if (percent < 90)
		mark = 'B';
	else if (percent <= 100)
		mark = 'A';

	return mark;

}

function selectAssign() {
	$(".roster").hide();
	$(".assign").show();

	document.getElementById('roster').removeAttribute('class', 'selected');
	document.getElementById('assign').setAttribute('class', 'selected');
}

function selectRoster() {
	$(".assign").hide();
	$(".roster").show();

	document.getElementById('assign').removeAttribute('class', 'selected');
	document.getElementById('roster').setAttribute('class', 'selected');
}

document.getElementById("name").onfocus = clearName;
document.getElementById("grade").onfocus = clearGrade;

function clearName() {
  document.getElementById("name").value = "";
}
function clearGrade() {
  document.getElementById("grade").value = "";
}