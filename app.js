	function fizzBuzz(number) {
		for ( var i = 1; i <= number; i++ ) {
			if ( i % 15 == 0 ) {
				$("body").append("fizz buzz");
				$("body").append("<br/>");
			}
			else if ( i % 3 == 0 ) {
				$("body").append("fizz");
				$("body").append("<br/>");
			}
			else if ( i % 5 == 0 ) {
				$("body").append("buzz");
				$("body").append("<br/>");
			} 
			else {
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
