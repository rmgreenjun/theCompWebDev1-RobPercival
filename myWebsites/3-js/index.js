
	
	/*Rob Percival
		Complete Web Developer 1
	*/	
	
	document.getElementById("textChanger").onclick=function() {
		document.getElementById("firstDiv").innerHTML="Yummy ice cream!";
	};
	
	document.getElementById("textAppender").onclick=function() {
			document.getElementById("secondDiv").innerHTML
			=document.getElementById("secondDiv").innerHTML + "eats ice cream with a fork!";
	};
	
	document.getElementById("textCreator").onclick=function() {
				document.getElementById("emptyDiv").innerHTML
				=prompt("Enter a short message", "");
	};
	
	document.getElementById("redCircleDiv").onclick=function() {
			document.getElementById("redCircleDiv").style.display="none";
	};
	
	document.getElementById("textChanger2").onclick=function() {
		var usrInp=document.getElementById("userInput").value;
		document.getElementById("textDisplay").innerHTML=usrInp;
	};
	
	