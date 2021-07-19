const operators = ["-", "+", "*", "/"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."]

var screen = document.querySelector('input')

window.addEventListener('load', function () {
	console.log(document.getElementsByTagName('button'))

	//Create an event listener for each of the number buttons.
	numbers.forEach(n => addButtonEvent(n, addNumber))

	//Create an event listener for each of the operator buttons.
	operators.forEach(o => addButtonEvent(o, addOperator))

	//Create event listeners for the = and AC buttons.
	addButtonEvent("=", evaluate)
	addButtonEvent("all-clear", allClear)
})

//Add an event listener for the button with the given value that runs the given function with that value.
//The evaluate and allClear functions don't take any arguments, but being given one won't make a difference.
function addButtonEvent(value, func) {
	console.log(value, func)
	document.querySelector(`button[value='${value}']`).addEventListener('click', () => func(value))
}

//Function returns whether or not the last character of the screen value is an operator or a number.
var last = () => operators.includes(screen.value.charAt(screen.value.length - 1)) ? "operator": "number"

var allClear = () => screen.value = ""

var addNumber = (num) => screen.value += num

var addOperator = (oper) => screen.value += (last() != "operator") ? oper : ""

var evaluate = () => screen.value = eval(screen.value)