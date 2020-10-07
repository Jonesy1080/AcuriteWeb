function main()
{
	var sensor;
	var a;
	var b;
	var c;

	websocket = new WebSocket("ws://127.0.0.1:8080/");

	websocket.onmessage = function(evnt){
		console.log('websocket.onfunction');

		a = evnt.data.includes("6081");	//sensor #6081
		if (a == true){
			sensor = 6081;
		}
		b = evnt.data.includes("Temperature");
		if (b == true && sensor == 6081){
			document.getElementById("out1").innerHTML = '' + stringtemp(evnt.data) + '\xB0F';
		}
		c = evnt.data.includes("Humidity");
		if (c == true && sensor == 6081){
			document.getElementById("out5").innerHTML = '' + stringhumid(evnt.data) + '%';
			sensor = 0;
		}


		a = evnt.data.includes("16015");	//sensor #16015
		if (a == true){
			sensor = 16015;
		}
		b = evnt.data.includes("Temperature");
		if (b == true && sensor == 16015){
		document.getElementById("out2").innerHTML = '' + stringtemp(evnt.data) + '\xB0F';
		}
		c = evnt.data.includes("Humidity");
		if (c == true && sensor == 16015){
			document.getElementById("out6").innerHTML = '' + stringhumid(evnt.data) + '%';
			sensor = 0;
		}

		a = evnt.data.includes("10886");	//sensor #10886
		if (a == true){
			sensor = 10886;
		}
		b = evnt.data.includes("Temperature");
		if (b == true && sensor == 10886){
			document.getElementById("out3").innerHTML = '' + stringtemp(evnt.data) + '\xB0F';
		}
		c = evnt.data.includes("Humidity");
		if (c == true && sensor == 10886){
			document.getElementById("out7").innerHTML = '' + stringhumid(evnt.data) + '%';
			sensor = 0;
		}

		a = evnt.data.includes("9214");	//sensor #9214
		if (a == true){
			//document.getElementById("out10").innerHTML = 'Sensor: 15837';
			sensor = 9214;}
		b = evnt.data.includes("Temperature");
		if (b == true && sensor == 9214){
			document.getElementById("out4").innerHTML = '' + stringtemp(evnt.data) + '\xB0F';
		}
		c = evnt.data.includes("Humidity");
		if (c == true && sensor == 9214){
			document.getElementById("out8").innerHTML = '' + stringhumid(evnt.data) + '%';
			sensor = 0;
		}

		a = evnt.data.includes("16014");	//sensor#
		if (a == true){
			//document.getElementById("out13").innerHTML = 'Sensor: 16015';
			sensor = 16015;
		}
		b = evnt.data.includes("Temperature");
		if (b == true && sensor == 16014){
			document.getElementById("out8").innerHTML = '' + stringtemp(evnt.data) + '\xB0F';
		}
		c = evnt.data.includes("Humidity");
		if (c == true && sensor == 16014){
			//document.getElementById("out15").innerHTML = '' + stringhumid(evnt.data) + '%';
			sensor = 0;
		}
	};
}

function stringtemp(str) {
	var temp = str.charAt(64) + str.charAt(65) + str.charAt(66) + str.charAt(67) + str.charAt(68);
	return temp;
}

function stringhumid(str) {
	var humid = str.charAt(89) + str.charAt(90)
	return humid;
}

window.addEventListener("load", main, false);
