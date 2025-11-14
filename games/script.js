function loadGameInfo(){
	fetch("info.json")
	.then(response => response.json())
	.then(data => {
		console.log(data);	
	})
	.catch(error => console.error("Unable to load game information."));
}
