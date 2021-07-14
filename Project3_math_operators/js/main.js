function sum() {
	document.getElementById("Math").innerHTML = "5 + 2 equals " + String(5 + 2)
}

function difference() {
	document.getElementById("difference").innerHTML = "5 - 2 equals " + String(5 - 2)
}

function product() {
	document.getElementById("product").innerHTML = "5 * 2 equals " + String(5 * 2)
}

function quotient() {
	document.getElementById("quotient").innerHTML = "5 / 2 equals " + String(5 / 2)
}

function expression() {
	document.getElementById("expression").innerHTML = "((5 + 2) * 5 - 2) / 5 equals " + String(((5 + 2) * 5 - 2) / 5)
}

function modulus() {
	document.getElementById("modulus").innerHTML = "5 modulo 2 equals " + String(5 % 2)
}

function negation() {
	document.getElementById("negation").innerHTML = "The negation of 5 is " + String(-5)
}

function increment() {
	var a = 5;
	document.getElementById("increment").innerHTML = String(a) + "++ equals " + String(++a)
}

function decrement() {
	var a = 5;
	document.getElementById("decrement").innerHTML = String(a) + "-- equals " + String(--a)
}

function rand() {
	document.getElementById("rand").innerHTML = "A random number between 0 and 1: " + String(Math.random())
}

function fround() {
	document.getElementById("fround").innerHTML = "Rounding 9.9 to the nearest 32-bit precision number: " + String(Math.fround(9.9))
}
