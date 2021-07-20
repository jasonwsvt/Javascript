//Global maximal factor
var max

//Display the times table for the value in the factor input field.
function arrayFunction() {
	max = parseInt(document.getElementById('factor').value)

	var code = "<table>\n"

	//Call whileLoop function with an array consisting of 1 through the value of the factor input field
	code += whileLoop(Array.from(new Array(max)).map((x, i) => i + 1))

	code += "</table>\n"

	document.querySelector("div").innerHTML = code
}

//create code for every row using a given array of numbers
function whileLoop(ary) {
	var code = ""
	var i = 0
	do {
		code += "	<tr>\n"
		code += forLoop(ary[i])
		code += "	</tr>\n"
	}
	while (++i < max)

	return code
}

//create code for a single row
function forLoop(x) {
	var code = ""
	for (let y = 1; y <= max; y++) {
		code += `		<td>${ x * y }</td>\n`
		console.log(x, y)
	}

	return code
}

//Add an onload event listener so the default (10) times table will load automatically.
window.addEventListener('load', createTable)