function hideDivs() {
	document.getElementById("white").style.display = "block";
	document.getElementById("blue").style.display = "none";
	document.getElementById("red").style.display = "none";
	document.getElementById("silver").style.display = "none";
	document.getElementById("black").style.display = "none";

}

function alertChoice() {


    var userChoice = document.getElementById("colour").value;
	                if (userChoice == "white") {
	                    document.getElementById("white").style.display = "block";
	                    document.getElementById("blue").style.display = "none";
	                    document.getElementById("red").style.display = "none";
	                    document.getElementById("silver").style.display = "none";
	                }
	                if (userChoice == "blue") {
	                    document.getElementById("white").style.display = "none";
	                    document.getElementById("blue").style.display = "block";
	                    document.getElementById("red").style.display = "none";
	                    document.getElementById("silver").style.display = "none";
	                }
	                if (userChoice == "red") {
	                    document.getElementById("white").style.display = "none";
	                    document.getElementById("blue").style.display = "none";
	                    document.getElementById("red").style.display = "block";
	                    document.getElementById("silver").style.display = "none";
	                }
	                if (userChoice == "silver") {
	                    document.getElementById("white").style.display = "none";
	                    document.getElementById("blue").style.display = "none";
	                    document.getElementById("red").style.display = "none";
	                    document.getElementById("silver").style.display = "block";
	                }
					if (userChoice == "black") {
						document.getElementById("white").style.display = "none";
						document.getElementById("blue").style.display = "none";
						document.getElementById("red").style.display = "none";
						document.getElementById("silver").style.display = "none";
						document.getElementById("black").style.display = "block";
					}
	

}
