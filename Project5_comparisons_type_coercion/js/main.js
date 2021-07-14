//Assign empty arrays to two variables
var strings = [], numbers = []

//Start a table
document.write("<table>")

//Go through every property / method of the this object
for (let name in this) {
	//Assign the type of the property / method to a variable
	var type = typeof this[name]

	//Add a new row to the table with a couple cells containing the name and type of the current property
	document.write(`<tr><td>${name}:</td><td>${type}</td></tr>`)

	//If the type of the property is a string, add it to the strings array
	if (type === "string" && this[name].length > 0) { strings.push(name) }

	//If the type of the property is a number, add it to the numbers array
	if (type === "number") { numbers.push(name) }
}

//Finish off the table
document.write("</table>")

//Choose a random entry from each of the strings and numbers arrays
var s = strings[Math.floor(Math.random() * strings.length)]
var n = numbers[Math.floor(Math.random() * numbers.length)]

//Display them concatenated
document.write(this[s] + this[n])