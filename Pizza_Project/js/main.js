function getReceipt () {
	// This initializes our string so it can get passed from
	// function to function, growing line by line into a full receipt
	var text1 = "<h3>Your order:</h3>"
	var runningTotal = 0
	var sizeTotal = 0
	var sizeArray = document.getElementsByClassName("size")
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value
			text1 += selectedSize + "<br>"
		}
	}

	sizeTotal = (selectedSize === "Personal Pizza") ? 6
	          : (selectedSize === "Small Pizza")    ? 8
			  : (selectedSize === "Medium Pizza")   ? 10
			  : (selectedSize === "Large Pizza")    ? 14
			  : 16 // (selectedSize === "Extra Large Pizza")

  runningTotal = sizeTotal
	console.log(selectedSize + " = $" + sizeTotal + ".00")
	console.log("size text1: " + text1)
	console.log("subtotal: $" + runningTotal + ".00")
	//these variables will get passed on to each function
	getTopping(runningTotal, text1)
}

function getTopping(runningTotal, text1) {
	var toppingTotal = 0
	var selectedTopping = []
	var toppingArray = document.getElementsByClassName("toppings")
	for (var j = 0; j < toppingArray.length; j++) {
		if (toppingArray[j].checked) {
			selectedTopping.push(toppingArray[j].value)
			console.log("selected topping item: (" + toppingArray[j].value + ")")
			text1 += toppingArray[j].value + "<br>"
		}
	}
	var toppingCount = selectedTopping.length
	toppingTotal = (toppingCount > 1) ? toppingCount - 1 : 0
	runningTotal = (runningTotal + toppingTotal)
	console.log ("total selected topping items: " + toppingCount)
	console.log (toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00")
	console.log ("topping text1: " + text1)
	console.log ("Purchase Total: " + "$" + runningTotal + ".00")
	document.getElementById("showText").innerHTML = text1
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>"
}

function getSauce(runningTotal, text1) {
	var sauceTotal = 0
	var selectedSauce = []
	var sauceArray = document.getElementsByClassName("sauces")
	for (var j = 0; j < sauceArray.length; j++) {
		if (sauceArray[j].checked) {
			selectedSauce.push(sauceArray[j].value)
			console.log ("selected sauce item: (" + sauceArray[j].value + ")")
			text1 += sauceArray[j].value + "<br>"
		}
	}
	var sauceCount = selectedSauce.length
	sauceTotal = (sauceCount > 1) ? sauceCount - 1 : 0
	runningTotal = (runningTotal + sauceTotal)
	console.log ("total selected sauce items: " + sauceCount)
	console.log (sauceCount + " sauce - 1 free sauce = " + "$" + sauceTotal + ".00")
	console.log ("sauce text1: " + text1)
	console.log ("Purchase Total: " + "$" + runningTotal + ".00")
	document.getElementById("showText").innerHTML = text1
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>"
}