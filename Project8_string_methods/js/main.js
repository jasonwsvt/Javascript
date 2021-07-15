//Generate a set of five random numbers between 0 and 1000
var numbers = Array.from(Array(5)).map(() => Math.random() * 1000)

//Generate a random number between 1 and 1000
var number = Math.random() * 1000

function writeP(text) {
	//Write the given text within a paragraph to the window.
	document.write("<p>" + text + "</p>")
}

function joinArray(ary) {
	//Join the elements of the array into a string, with a separation, and return it.
	return ary.join(", ")
}

function concatFunc(ary1, str) {
	//Concatenate the given array and string
	writeP(`Concatenating ${ary1} and ${str}: ${joinArray(ary1.concat(str))}`)
}

function sliceFunc(ary) {
	//Determine a random number of elements to slice between 1 and the length of the array
	var n = Math.floor(Math.random() * (ary.length - 1)) + 1

	//Show the sliced elements
	writeP(`First ${n} elements: ${joinArray(ary.slice(0, n))}`)
}

function toStringFunc(ary) {
	//Show all the elements as strings.  Doesn't really make any difference when displaying, as numbers get converted to text anyways.
	writeP(`Showing all elements as strings: ${joinArray(ary.map(el => el.toString()))}`)
}

//I've always thought of precision as being digits following the decimal.
//The toPrecision method determines precision with all digits in the number, which makes sense, but I just wanted to do it this way instead.
function toPrecisionFunc(ary) {
	//Calculate the precision by generating a random number between 0 and the fewest number of digits past the decimal place of all numbers in the given array.
	var prec = Math.floor(Math.random() * ary.map(el => el.toString().split('.')[1].length).sort().reverse()[0])

	//Show the precision and the list of all the numbers to the generated precision.
	writeP(`Showing elements with a precision of ${prec}: ${joinArray(ary.map((el) => el.toPrecision(prec + el.toString().split('.')[0].length)))}`)
}

concatFunc(numbers, number)

sliceFunc(numbers)

toStringFunc(numbers)

toPrecisionFunc(numbers)