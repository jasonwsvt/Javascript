//This variable keeps track of whose turn it is.
let activePlayer = 'X'
//This array stores an array of moves.  We use this to determine win conditions.
let selectedSquares = []

//This function is for placing an X or O in a square.
function placeXOrO(squareNumber) {
	//This condition ensures a square hasn't been sleected already.
	//The .some() method is used to check each element of selectedSquare array
	//to see if it contains the square number clicked on.
	if (!selectedSquares.some(element => element.includes(squareNumber))) {
		//This variable retrieves the html element id that was clicked.
		let select = document.getElementById(squareNumber)
		//This condition checks whose turn it is.
		if (activePlayer === 'X') {
			//If activePlayer is equal to 'X', the x.png is placed in HTML.
			select.style.backgroundImage = 'url("images/x.png")'
			//Active player may only be 'X' or 'O' so, if not 'X' it must be 'O'
		} else {
			//If activePlayer is equal to 'O', the o.png is placed in the HTML.
			select.style.backgroundImage = 'url("images/o.png")'
		}
		//squareNumber and activePlayer are concatenated together and added to array.
		selectedSquares.push(squareNumber + activePlayer)
		//This calls a function to check for any win conditions.
		checkWinConditions()
		//This condition is for changing the active player.
		activePlayer = (activePlayer === 'X') ? 'O' : 'X'
		
		//This function plays placement sound.
		audio('./media/place.mp3')
		//This condition checks to see if it is computer's tern.
		if (activePlayer === 'O') {
			//This function disables clicking for computer choice.
			disableClick();
			//This function waits one second before computer places image and enables click.
			setTimeout(function () { computersTurn() }, 1000)
		}
		//Returning true is needed for our ComputersTurn() function to work.
		return true;
	}
}

//This function results in a random square being selected.
function computersTurn() {
	//This boolean is needed for our while loop.
	let success = false
	//This variable stores a randum number between 0 and 8.
	let pickASquare
	do {
		//A random number between 0 and 8 is selected.
		pickASquare = String(Math.floor(Math.random() * 9))
		//If the random number evaluated returns true, the square hasn't been selected yet.
		if (placeXOrO(pickASquare)) {
			//This line calls the function.
			placeXOrO(pickASquare)
			//This changes our boolean and ends the loop.
			success = true;
		}
	} while (!success)
}

//This function parses the selectedSequares array to search for win coditions.
//drawWinLine function is called to draw line if condition is met.
function checkWinConditions() {
	//console.log("got here")
	//Array of win conditions
	const wcs = ["012", "345", "678", "036", "147", "258", "246", "048"]
	const lines = [[50, 100, 558, 100], [50, 304, 558, 304], [50, 508, 558, 508],
	               [100, 50, 304, 558], [304, 50, 304, 558], [508, 50, 508, 558],
				   [100, 508, 510, 90], [100, 100, 512, 512]]
	var winner;
	//p is player, c is condition (e.g. "012"), s is square (0, 1, or 2)
	['X', 'O'].forEach(player => {
		//console.log(player)
		wcs.forEach((wc, index) => {
			//console.log(wc, index, wc.split('').map(square => square + player))
			if (arrayIncludes(...wc.split('').map(square => square + player))) {
				//console.log(player, "won!", ...lines[index])
				drawWinLine(...lines[index])
				winner = player;
			}
		})
	})
	if (!winner && selectedSquares.length == 9) {
		//This function plays the tie game sound.
		audio('./media/tie.mp3')
		//This function sets a .3 second timer before the resetGame is called.
		setTimeout(resetGame, 1000)
	}
}

//This function checks if an array includes 3 strings.
//It is used to check for each win condition.
function arrayIncludes(squareA, squareB, squareC) {
	//This returns whether selectedSquares includes every given square.
	//console.log(squareA, squareB, squareC, selectedSquares)
	return ([squareA, squareB, squareC].every(square => selectedSquares.includes(square)))
}

function disableClick() {
	//This makes our body unclickable.
	body.style.pointerEvents = 'none'
	//This makes our body clickable again after 1 second.
	setTimeout(function() { body.style.pointerEvents = 'auto' }, 1000)
}

//This function takes a string parameter of the path you set earlier for
//placement sound ('./media/place.mp3')
function audio(audioURL) {
	//Create a new audio object and pass the path as a parameter.
	let audio = new Audio(audioURL);
	//Play method plays sound.
	audio.play();
}

//This function utilizes html canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
	console.log("got here")
	//This line access our html canvas element.
	const canvas = document.getElementById('win-lines')
	const c = canvas.getContext('2d')
	//this line indicates where the start of a line's x axis is.
	let x= x1 = coordX1, y= y1 = coordY1, x2 = coordX2, y2 = coordY2

	function animateLineDrawing() {
		//this variable creates a loop.
		const animationLoop = requestAnimationFrame(animateLineDrawing)
		//This method clears content from last loop iteration.
		c.clearRect(0, 0, 608, 608)
		//This method moves to a starting point for our line.
		c.moveTo(x1, y1)
		//This method indicates the end point in our line.
		c.lineTo(x,y)
		// This method sets the width of our line.
		c.lineWidth = 10
		//This method sets the color of our line.
		c.strokeStyle = 'rgba(70, 255, 33, .8)'
		//This method draws everything we laid out above.
		c.stroke();
		//This condition checks if we've reached the endpoint.
		if (x1 <= x2 && y1 <= y2) {
			//This condition adds 10 on the x axis to the previous end point.
			if (x < x2) { x += 10 }
			//This condition adds 10 on the y axis to the previous end point.
			if (y < y2) { y += 10 }
			//This condition cancels our animation loop if we've reached the end points.
			if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop) }
		}

		//this condition is similar to the one above.
		//It's necessary for the 6, 4, 2 win condition.
		if (x1 <= x2 && y1 >= y2) {
			//This condition adds 10 on the x axis to the previous end point.
			if (x < x2) { x += 10 }
			//This condition adds 10 on the y axis to the previous end point.
			if (y > y2) { y -= 10 }
			//This condition cancels our animation loop if we've reached the end points.
			if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop) }
		}
	}

	//This function clears our canvas after our win line is drawn.
	function clear() {
		//This line starts our animation loop.
		const animationLoop = requestAnimationFrame(clear)
		//This line clears our canvas.
		c.clearRect(0, 0, 608, 608)
		//This line stops our animation loop.
		cancelAnimationFrame(animationLoop)
	}

	//This line disallows clicking while the win sound is playing
	disableClick()
	//This line plays the win sounds.
	audio('./media/winGame.mp3')
	//This line calls our main animation loop.
	animateLineDrawing()
	//This line waits 1 second, then clears canvas, resets game, and allows clicking again.
	setTimeout(function () { clear(); resetGame() }, 1000)
}

//This function resets the game in the event of a tie or a win.
function resetGame() {
	//This for loop iterates through each HTML square element.
	for (let i = 0; i < 9; i++) {
		//This variable gets the html element of i.
		let square = document.getElementById(String(i))
		//This removes our elements backgroundImage.
		square.style.backgroundImage = ''
	}
	//This resets our array so it is empty and we can start over.
	selectedSquares = []
}