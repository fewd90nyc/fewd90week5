$(document).ready(function() {
	$("#roster").click(function() {
		$(".roster").slideDown(300);
		$(".assign").slideUp(100);
	});

	$("#assign").click(function() {
		$(".roster").slideUp(100);
		$(".assign").slideDown(300);
	});

	$("#name").focusin(function() {
		$("#name").val("");
	});

	$("#grade").focusin(function() {
		$("#grade").val("");
	});
});




// document.getElementById("name").onfocus = clearName;
// document.getElementById("grade").onfocus = clearGrade;

// function clearName() {
//   document.getElementById("name").value = "";
// }
// function clearGrade() {
//   document.getElementById("grade").value = "";
// }