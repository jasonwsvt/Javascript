//Set the innerHTML of the element with the given id to the value of str 
function push(id, str) { document.getElementById(id).innerHTML = str }

//Each of these functions calls push with an id and a string to assign to it's innerHTML.  Each string includes a calculated expression.
function sum()        { push("Math",       "5 + 2 equals "                 + String(5 + 2)) }
function difference() { push("difference", "5 - 2 equals "                 + String(5 - 2)) }
function product()    { push("product",    "5 * 2 equals "                 + String(5 * 2)) }
function quotient()   { push("quotient",   "5 / 2 equals "                 + String(5 / 2)) }
function expression() { push("expression", "((5 + 2) * 5 - 2) / 5 equals " + String(((5 + 2) * 5 - 2) / 5)) }
function modulus()    { push("modulus",    "5 modulo 2 equals "            + String(5 % 2)) }
function negation()   { push("negation",   "The negation of 5 is "         + String(-5)) }

//Increment and decrement call push like the above functions.
//With a++ and a--, the string receives the value of a prior to the incrementation or decrementation
//With ++a and --a, the string receives the vaule of a afterward.
//The two options I had were to add an additional line of code or use the ++a or --a operator.
function increment() {
	var a = 5
	push("increment", String(a) + "++ equals " + String(++a))
}

function decrement() {
	var a = 5
	push("decrement", String(a) + "-- equals " + String(--a))
}

//Sends the rand id and a string including a random number to push.
function rand() {
	push("rand", "A random number between 0 and 1: " + String(Math.random()))
}

//The do / while loop keeps testing random numbers between 0 and 100.0 until one is found that's fractional. 
//A string with this number, along with the number rounded to the nearest 32-bit precision number, is sent along with an id to push.
function fround() {
	do { var a = Math.floor(Math.random() * 1000) / 10 } while (a == Math.floor(a))
	push("fround", `Rounding ${a} to the nearest 32-bit precision number: ${String(Math.fround(a))}`)
}