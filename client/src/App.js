import React, { Component } from 'react';

//get beer recommendation and update element
async function getBeer() {
	fetch('/api/beer/')
	.then(function(response) {
		return response.text().then(function(text) {
			const str = text.split(",\"");
			const name = str[1].split(":")[1].replace(/"/g,"");
			const tagline = str[2].split(":")[1].replace(/"/g,"");
			const description = str[4].split(":\"")[1].replace(/"/g,"");
			
			document.getElementById("beer info").innerHTML = "🍺 Recommendation: " + name + "<br /><i>"
			+ tagline + "</i><br /><p>" + description + "</p>";
		});
	});
}

//get horoscope and update element
function getHoro(sign) {
	fetch('/api/horoscopes/' + sign)
	.then(function(response) {
		return response.text().then(function(text) {
			const str = text.split(",\"");
			const daterange = str[0].split(":")[1].replace(/"/g,"");
			const currentdate = str[1].split(":")[1].replace(/"/g,"");
			const description = str[2].split(":")[1].replace(/"/g,"");
			
			document.getElementById("horoscope").innerHTML = "<br /><p>" + sign + " (" + daterange + ") horoscope for " + currentdate
			+ ":<br /><br />" + description + "</p><br />";
		});
	});
}
	
function getBeeroscope(sign) {
	getBeer();
	getHoro(sign);
}
	
class Beeroscope extends Component {
	constructor(props){
        super(props);
    }
	
	componentDidMount() {

	}
	
	componentDidUpdate() {

	}

    render() {
        return (
		<center>
		<h1>Click your sign to get your daily Beeroscope!</h1>
		<table id = "signs">
		<tr>
			<td><div class = "aries">
				<button onClick={() => getBeeroscope("ARIES")}><img src="https://i.imgur.com/pa5dvx0.png" width="100" height="100"></img></button>
			</div></td>
			<td><div class = "taurus">
				<button onClick={() => getBeeroscope("TAURUS")}><img src="https://i.imgur.com/WYv5Lry.png" width="100" height="100"></img></button>
			</div></td>
			<td><div class = "gemini">
				<button onClick={() => getBeeroscope("GEMINI")}><img src="https://i.imgur.com/8Z59vyz.png" width="100" height="100"></img></button>
			</div></td>
			<td><div class = "cancer">
				<button onClick={() => getBeeroscope("CANCER")}><img src="https://i.imgur.com/qcHIjt8.png" width="100" height="100"></img></button>
			</div></td>
		</tr>
		
		<tr>
			<td><div class = "leo">
				<button onClick={() => getBeeroscope("LEO")}><img src="https://i.imgur.com/kJ8UqgI.png" width="100" height="100"></img></button>
			</div></td>
			<td><div class = "virgo">
				<button onClick={() => getBeeroscope("VIRGO")}><img src="https://i.imgur.com/JVxM4n2.png" width="100" height="100"></img></button>
			</div></td>
			<td><div class = "libra">
				<button onClick={() => getBeeroscope("LIBRA")}><img src="https://i.imgur.com/m0iPdYX.png" width="100" height="100"></img></button>
			</div></td>
			<td><div class = "scorpio">
				<button onClick={() => getBeeroscope("SCORPIO")}><img src="https://i.imgur.com/EMWFhol.png" width="100" height="100"></img></button>
			</div></td>
		</tr>
		
		<tr>
			<td><div class = "sagittarius">
				<button onClick={() => getBeeroscope("SAGITTARIUS")}><img src="https://i.imgur.com/dpfXFkU.png" width="100" height="100"></img></button>
			</div></td>
			<td><div class = "capricorn">
				<button onClick={() => getBeeroscope("CAPRICORN")}><img src="https://i.imgur.com/sbmrFRE.png" width="100" height="100"></img></button>
			</div></td>
			<td><div class = "aquarius">
				<button onClick={() => getBeeroscope("AQUARIUS")}><img src="https://i.imgur.com/EFICzQR.png" width="100" height="100"></img></button>
			</div></td>
			<td><div class = "pisces">
				<button onClick={() => getBeeroscope("PISCES")}><img src="https://i.imgur.com/bGqurNc.png" width="100" height="100"></img></button>
			</div></td>
		</tr></table>
		    <div id = "horoscope">
			</div>
			<div id = "beer info"><p>
			</p></div>
		
		</center>
        );
    }
}

export default Beeroscope;
