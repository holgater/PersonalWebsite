$(document).ready(function() {
	navigate("home");
});

function navigate(location) {
	/*$("#displayArea"). */
	$("#displayArea").load("src/" + location + ".html");
}
