var screen = document.querySelector('input')

window.addEventListener('load', function () {
	console.log(document.getElementsByTagName('button'))
	document.querySelector('button[value="0"]').addEventListener('click', addNumber("0"))
	document.querySelector('button[value="1"]').addEventListener('click', addNumber("1"))
	document.querySelector('button[value="2"]').addEventListener('click', addNumber("2"))
	document.querySelector('button[value="3"]').addEventListener('click', addNumber("3"))
	document.querySelector('button[value="4"]').addEventListener('click', addNumber("4"))
	document.querySelector('button[value="5"]').addEventListener('click', addNumber("5"))
	document.querySelector('button[value="6"]').addEventListener('click', addNumber("6"))
	document.querySelector('button[value="7"]').addEventListener('click', addNumber("7"))
	document.querySelector('button[value="8"]').addEventListener('click', addNumber("8"))
	document.querySelector('button[value="9"]').addEventListener('click', addNumber("9"))
	document.querySelector('button[value="-"]').addEventListener('click', addOperator("-"))
	document.querySelector('button[value="+"]').addEventListener('click', addOperator("+"))
	document.querySelector('button[value="&times;"]').addEventListener('click', addOperator("&times;"))
	document.querySelector('button[value="&divide;"]').addEventListener('click', addOperator("&divide;"))
	document.querySelector('button[value="="]').addEventListener('click', evaluate())
	document.querySelector('button[value="AC"]').addEventListener('click', allClear())
})

function allClear() {
	screen.value = ""
	last = ""
}

function addNumber(num) {
	if (screen.value == "0") { screen.value = "" }
	screen.value += num
	last = "number"
}

function addOperator(oper) {
	if (last == "operator") { return; }
	screen.value += oper
	last = "operator"
}

function evaluate() {

}