$(document).ready(function() {
	//FizzBuzz Challenge
	for ( var i = 1; i <= 100; i++ ) {
		console.log(i);
		if ( i % 15 == 0 ) {
			console.log("fizz buzz");
			$("body").append("fizz buzz");
			$("body").append("<br/>");
		}
		else if ( i % 3 == 0 ) {
			console.log("fizz");
			$("body").append("fizz");
			$("body").append("<br/>");
		}
		else if ( i % 5 == 0 ) {
			console.log("buzz");
			$("body").append("buzz");
			$("body").append("<br/>");
		} else {
			console.log(i);
			$("body").append(i);
			$("body").append("<br/>");
		}
	}
});
