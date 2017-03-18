
		 var $ = function(id) {
			 return document.getElementById(id);
		 };
		 
		 var randomBtn = function() {
			var userGuess = parseInt($("userGuess").value);
			var randomNum = makeRandomInt();
			
			if (isNaN(userGuess)) {
				$("resultPar").innerHTML = "Enter a number.";
			} else if (userGuess == randomNum) {
				$("resultPar").innerHTML = "You guessed right!";
			}else {
				$("resultPar").innerHTML = 
				"Wrong. Guess again! The number was " +randomNum;
			}
		};
		
		var clearEntry = function() {
			$("userGuess").value = "";
			$("resultPar").innerHTML = "";
		}
		
		$("randomBtn").onclick = randomBtn;
		$("clearBtn").onclick = clearEntry;
		
		function makeRandomInt() {
			return Math.floor(Math.random() *6);
		}
