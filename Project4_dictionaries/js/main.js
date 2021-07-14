//Creation of a KVP dictionary AKA object
var d = {
	"0": "zero",
	"1": "one",
	"2": "two",
	"3": "three",
	"4": "four",
	"5": "five",
	"6": "six",
	"7": "seven",
	"8": "eight",
	"9": "nine",
	".": "point",
	",": "comma"
}

//Deletion of the KVP where the key is ",".
delete d[","]

//read will take generate a random number, set the 
function read() {
	//Assigning a random number between 0 and 100.00 to a new variable n
	var n = String(Math.floor(Math.random() * 10000) / 100)

	//Sets the innerHTML of the Dictionary element to the value of n along with each digit's mapped value from d
	document.getElementById("Dictionary").innerHTML = n + " equals " + n.split('').map(c => d[c]).join(" ")
}