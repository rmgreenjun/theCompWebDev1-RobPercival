
function makeRandomInt(min, max){
	return math.random();
}
	
	var userGuess = document.getElementById("userGuess").value;
	var randomNum = document.getElementById("randomBtn").onclick = makeRandomInt(0,5);
	if (userGuess==randomNum.value) {
		document.getElementById("resultPar").innerHTML = "You guessed right!";
	} else {
		document.getElementById("resultPar").innerHTML = "Wrong guess again!";
	}
