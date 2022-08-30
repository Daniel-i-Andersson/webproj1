function getWeather() {
	const request = new Request('http://api.openweathermap.org/data/2.5/weather?q=Stockholm,SE&APPID=de3b0e479c58a0208c3ee4614d0f37e2&units=metric');
	
	fetch(request)
		.then((response) => {
			if (response.status === 200) {
			  return response.json();
			} else {
			  throw new Error('Something went wrong on API server!');
			}
		})
		.then((response) => {
			console.debug(response);
			const temp = response.main.temp;
			const windSpeed = response.wind.speed;
			const windDir = response.wind.deg;
 			let weatherString = "";
			weatherString += temp > 20 ? "Det är ganska varmt!" : "Det är inte jättevarmt...";
			weatherString += "\nDet är " + temp + " C\n";
			weatherString += "Det blåser " + windSpeed + " m/s " + " från riktning " + windDir + " grader.";
			document.getElementById('div1').innerText = weatherString;
			
		}).catch((error) => {
			console.error(error);
		});
}