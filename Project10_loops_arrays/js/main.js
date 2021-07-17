var x = 1;

function loop() {
	document.write("<table>")
	do {
		document.write("<tr>")
		for (let i = 1; i <= 10; i++) {
			document.write(`<td>${x*i}`)
		}
		document.write("</tr>")
	}
	while (x++ < 10)
}