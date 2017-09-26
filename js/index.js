$(document).ready(function() {
	alert("poo");
});

function navigate(location) {
	/*$.ajax({
		type: "GET",
		url: "src/" + location + ".html",
		success: function(result) {
			$("#displayArea").appendChild(result);
		}
	});*/
	$("#displayArea").load("src/" + location + ".html");
}
