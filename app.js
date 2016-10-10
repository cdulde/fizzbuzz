	function fizzBuzz(number) {
		for ( var i = 1; i <= number; i++ ) {
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
			} 
			else {
				console.log(i);
				$("body").append(i);
				$("body").append("<br/>");
			}
		}
	}

$(document).ready(function() {
	//FizzBuzz Refactor
	
	//Once Page is Loaded, Prompt for Integer Input
	var input = prompt("Enter an INTEGER to FizzBuzz","e.g. 15");
	input = parseInt(+input);
	
	// Call fizzBuzz function
	fizzBuzz(input);

});
