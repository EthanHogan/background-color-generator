var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomBtn");

// Set background colors based on color inputs //
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

// Call function so that initial background reflects initial inputs //
setGradient();

// Generate random RGB Color then converting to a Hex//
function createRandomColor() {
	var r = Math.floor(Math.random()*256);          // Random between 0-255
	var g = Math.floor(Math.random()*256);          // Random between 0-255
	var b = Math.floor(Math.random()*256);          // Random between 0-255
	return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

//Click button to set colors//
function setRandomColors() {
	var randomColor1 = createRandomColor();
	var randomColor2 = createRandomColor();
	body.style.background = 
	"linear-gradient(to right, " 
	+ randomColor1 
	+ ", " 
	+ randomColor2 
	+ ")";

	css.textContent = body.style.background + ";";

	//change color of inputs to match new random colors//
	color1.value = randomColor1;
	color2.value = randomColor2;
}

// Event Listeners for input changes on colors //
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setRandomColors) 