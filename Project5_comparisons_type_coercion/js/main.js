function thisElts() {
	//Assign empty arrays to two variables
	var strings = [], numbers = [], t = document.querySelector('table')

	console.log(t)

	//Go through every property / method of the this object
	for (let name in this) {
		//Assign the type of the property / method to a variable
		var type = typeof this[name]

		//Add a new row to the table with a couple cells containing the name and type of the current property
		t.insertAdjacentHTML('beforeend', `<tr><td>${name}:</td><td>${type}</td></tr>`)

		//If the type of the property is a string, add it to the strings array
		if (type === "string" && this[name].length > 0) { strings.push(name) }

		//If the type of the property is a number, add it to the numbers array
		if (type === "number") { numbers.push(name) }
	}

	//Choose a random entry from each of the strings and numbers arrays
	var s = strings[Math.floor(Math.random() * strings.length)]
	var n = numbers[Math.floor(Math.random() * numbers.length)]

	//Display them concatenated, indicating type coercion is working
	t.insertAdjacentHTML('beforeend', this[s] + this[n])
}

//Generate a random number between 1 and 2, and determine the exponent required for that number so that it's considered infinity by JavaScript.
function inf() {
	//Generate a random number between 1 and 2
	var n = String(Math.random() + 1) //"1.7976931348623157"

	//Start off the exponent at 300
	var x = "300"

	//Loop to increase the exponent by one until the number is considered infinity.
	do { var a = n + "E" + x++ } while (Number(a) !== Infinity)

	//Enter the number into the element with the id of infinity.
	document.getElementById("infinity").innerHTML = `${a}: ${Number(a)}, -${a}: ${Number(-a)}`
}

