function getReceipt () {
	// This initializes our string so it can get passed from
	// function to function, growing line by line into a full receipt
	document.getElementById("cart").insertAdjacentHTML("afterbegin", "<h3>Your order:</h3>");
	var text1 = "";
	var runningTotal = 0
	var sizeTotal = 0
	var sizeArray = document.getElementsByClassName("size")
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value
			text1 += `<li>${selectedSize}</li>`
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
	//[text1, runningTotal] = getSauce(runningTotal, text1)
	getTopping(runningTotal, text1)
}

function getTopping(runningTotal, text1) {
	var sauceTotal = 0
	var selectedSauce = []
	var sauceArray = document.getElementsByClassName("sauces")
	for (var j = 0; j < sauceArray.length; j++) {
		if (sauceArray[j].checked) {
			selectedSauce.push(sauceArray[j].value)
			console.log ("selected sauce item: (" + sauceArray[j].value + ")")
			text1 += `<li>${sauceArray[j].value}</li>`
		}
	}
	runningTotal += sauceTotal
	
	var toppingTotal = 0
	var selectedTopping = []
	var toppingArray = document.getElementsByClassName("toppings")
	for (var j = 0; j < toppingArray.length; j++) {
		if (toppingArray[j].checked) {
			selectedTopping.push(toppingArray[j].value)
			console.log("selected topping item: (" + toppingArray[j].value + ")")
			text1 += `<li>${toppingArray[j].value}</li>`
		}
	}
	text1 = `<ul>${text1}</ul>`
	var toppingCount = selectedTopping.length
	toppingTotal = (toppingCount > 1) ? toppingCount - 1 : 0
	runningTotal += toppingTotal
	console.log ("total selected topping items: " + toppingCount)
	console.log (toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00")
	console.log ("topping text1: " + text1)
	console.log ("Purchase Total: " + "$" + runningTotal + ".00")
	document.getElementById("showText").innerHTML = text1
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>"
}