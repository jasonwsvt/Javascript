//Class Tocsa is used to separate a string of words and numbers into separate arrays, and display them in lists.
class Tocsa {
	constructor(string) {
		this.numbers = new Array()
		this.words = new Array()

		//nestedFunc used to push the value of a given variable to an array, dependent upon whether it's a word or number.
		var nestedFunc = v => {
			parseInt(v) ? this.numbers.push(parseInt(v)) : this.words.push(v)
		}

		//Splits the given argument into and array by spaces and calls nestedFunc above for each element.
		string.split(" ").forEach(nestedFunc)

		this.update
	}

	//Getter method function used to push values to each of the lists.
	get update() {
		this.numbers.forEach(n => document.querySelector("#numbers").insertAdjacentHTML('beforeend', `<li>${n}</li>`))
		this.words.forEach(w => document.querySelector("#words").insertAdjacentHTML('beforeend', `<li>${w}</li>`))
	}
}

//Only run this code after the html has completed loading
window.addEventListener('load', function () {
	//After every key is pressed in the input field
	document.querySelector('input').addEventListener('keyup', function (e) {
		//If it's the enter key
		if (e.key === 'Enter') {
			//Create a new Tocsa from the full value in the input field
			var a = new Tocsa(this.value)

			//Clear the value in the field
			this.value = ''
		}

		//Ensure any standard input field behavior isn't performed
		return false
	})
})