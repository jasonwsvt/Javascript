
//Display the times table for the value in the factor input field.
function loop() {
	var max = parseInt(document.getElementById('factor').value)

	var code = "<table>\n"
	var x = 1
	do {
		code += "	<tr>\n"
		for (let y = 1; y <= max; y++) {
			code += `		<td>${ x * y }</td>\n`
			console.log(x, y)
		}
		code += "	</tr>\n"
	}
	while (x++ < max)
	code += "</table>\n"
	document.querySelector("div").innerHTML = code
}

//Add an onload event listener so the default (10) times table will load automatically.
window.addEventListener('load', loop)