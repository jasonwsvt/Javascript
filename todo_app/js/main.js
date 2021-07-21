// This function gets the task from input
function get_todos() {
	//Returns the parsed localStorage todo item or an empty array if it doesn't exist
	return JSON.parse(localStorage.getItem('todo')) || []
}

//This function adds the inputted task to the get_todos function array
function add() {
	var todos = get_todos();
	//This adds a new task to the end of the array
	todos.push(document.getElementById('task').value)
	//Stores the JSONified tasks into the localStorage todo item
	localStorage.setItem('todo', JSON.stringify(todos))
	//Clears the new task input field
	document.getElementById('task').value = ''
	show()
	document.getElementById('task').focus()

	return false;
}

function remove(i) {
	document.getElementById(i).parentElement.remove()
	var todos = get_todos()
	todos.splice(parseInt(i), 1)
	localStorage.setItem('todo', JSON.stringify(todos))
}

//this function keeps the tasks permanently displayed on the screen
function show() {
	//this sets the task that was retrieved as a variable
	var todos = get_todos()

	//this sets up each task as an unordered list
	var html = '<ul>'
	//This displays a task to the list in the order that it is inputted
	todos.forEach((todo, i) => {
		//this also displays the task as a list and creates the button with the "x"
		html += `<li>${todo}<button class="remove" id="${i}" onclick="remove('${i}')">x</button></li>`
		//console.log(i, todo, html)
	})
	html += '</ul>'
	//This displays the task as a list
	document.getElementById('todos').innerHTML = html
}
//This displays the inputted task when the 'Add Item' button is clicked
document.getElementById('add').addEventListener('click', add)
//This will keep the inputs displayed permanently on the screen
show()
document.getElementById('task').addEventListener('keyup', function (e) {
	if (e.key === "Enter") {
		add()
	}
})