
		 var randomBtn = function(){
			var userGuess = parseInt(document.getElementById("userGuess").value);
			var randomNum = makeRandomInt();
			if (userGuess == randomNum) {
				document.getElementById("resultPar").innerHTML = "You guessed right!";
			}else {
				document.getElementById("resultPar").innerHTML = 
				"Wrong. Guess again! The number was " +randomNum;
			}
		};	    	
		
		document.getElementById("randomBtn").onclick = randomBtn;
		
		function makeRandomInt(){
			return Math.floor(Math.random() *6);
		}
