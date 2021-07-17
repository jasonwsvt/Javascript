var max

//Display the times table for the value in the factor input field.
function createTable() {
	max = parseInt(document.getElementById('factor').value)

	var code = "<table>\n"
	code += whileLoop()
	code += "</table>\n"
	document.querySelector("div").innerHTML = code
}

//create code for every row
function whileLoop() {
	var code = ""
	var x = 1
	do {
		code += "	<tr>\n"
		code += forLoop(x, max)
		code += "	</tr>\n"
	}
	while (x++ < max)

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