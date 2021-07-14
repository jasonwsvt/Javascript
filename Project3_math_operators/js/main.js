//Generating two random integers between 1 and 10 for use in the remainder of the script.
var first = Math.floor(Math.random() * 9) + 1
var second = Math.floor(Math.random() * 9) + 1

//Set the innerHTML of the element with the given id to the value of str 
function push(id, str) { document.getElementById(id).innerHTML = str }

//Each of these functions calls push with an id and a string to assign to it's innerHTML.  Each string includes a calculated expression.
function sum()        { push("Math",       `${first} + ${second} equals ${String(first + second)}`) }
function difference() { push("difference", `${first} - ${second} equals ${String(first - second)}`) }
function product()    { push("product",    `${first} * ${second} equals ${String(first * second)}`) }
function quotient()   { push("quotient",   `${first} / ${second} equals ${String(first / second)}`) }
function expression() { push("expression", `((${first} + ${second}) * ${first} - ${second}) / ${first} equals ${String(((first + second) * first - second) / first)}`) }
function modulus()    { push("modulus",    `${first} modulo ${second} equals ${String(first % second)}`) }
function negation()   { push("negation",   `The negation of ${second} is ${String(-second)}`) }

//Increment and decrement call push like the above functions.
//With a++ and a--, the string receives the value of a prior to the incrementation or decrementation
//With ++a and --a, the string receives the vaule of a afterward.
//The two options I had were to add an additional line of code or use the ++a or --a operator.
function increment() { push("increment", `${first}++ equals ${String(++first)}`) }
function decrement() { push("decrement", `${second}-- equals ${String(--second)}`) }

//Sends the rand id and a string including a random number to push.
function rand() { push("rand", `A random number between 0 and 1: ${String(Math.random())}`) }

//The do / while loop keeps testing random numbers between 0 and 100.0 until one is found that's fractional. 
//A string with this number, along with the number rounded to the nearest 32-bit precision number, is sent along with an id to push.
function fround() {
	do { var a = Math.floor(Math.random() * 1000) / 10 } while (a == Math.floor(a))
	push("fround", `Rounding ${a} to the nearest 32-bit precision number: ${String(Math.fround(a))}`)
}